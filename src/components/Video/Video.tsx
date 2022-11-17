import { DefaultUi, Player, Youtube } from "@vime/react";
import { DiscordLogo, Lightning } from "phosphor-react";

import "@vime/core/themes/default.css";
import { useGetLessonBySlugQuery } from "../../graphql/generated";
import classNames from "classnames";
import { useEffect } from "react";

interface VideoProps {
  lessonSlug: string;
  menu: boolean;
}

export const Video = ({ lessonSlug, menu }: VideoProps) => {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 mobile:hidden">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div
      className={classNames("flex-1", {
        "hidden bg-gray-700": menu,
      })}
    >
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto ">
        <div className="flex items-start gap-16 mobile:flex-col">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6 mobile:items-start">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block mobile:text-lg">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm block mobile:text-sm">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
