import classNames from "classnames";
import { List } from "phosphor-react";
import { useGetLessonsQuery } from "../../graphql/generated";
import { Lesson } from "../Lesson/Lesson";

interface SideBarProps {
  menu?: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideBar = ({ menu, setMenu }: SideBarProps) => {
  const { data } = useGetLessonsQuery();

  return (
    <>
      <aside
        className={classNames({
          "w-[348px]  bg-gray-700 p-6 border-l border-gray-600 mobile:hidden":
            !menu,
          "w-full bg-gray-700 flex flex-col items-center overflow-hidden": menu,
        })}
      >
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block mobile:flex flex-col items-center my-8">
          Cronograma de aulas
        </span>

        <div className="flex flex-col gap-8 mobile:mx-5">
          {data?.lessons.map((lesson) => (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slugUrl={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              menu={menu}
              setMenu={setMenu}
            />
          ))}
        </div>
      </aside>
    </>
  );
};
