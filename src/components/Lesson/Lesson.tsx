import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

import classNames from "classnames";
import { useEffect } from "react";

interface LessonProps {
  title: string;
  slugUrl: string;
  availableAt: Date;
  type: "live" | "class";
  menu: boolean | undefined;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Lesson = ({
  availableAt,
  slugUrl,
  title,
  type,
  menu,
  setMenu,
}: LessonProps) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slugUrl === slug;

  return (
    <Link to={`/event/lesson/${slugUrl}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold",
              {
                "border-white": isActiveLesson,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={classNames("text-gray-200 mt-5 block", {
            "text-white": isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
