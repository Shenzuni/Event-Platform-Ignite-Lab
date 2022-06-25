import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"

interface SidebarProps {
  showSidebar: boolean
}

export function Sidebar({ showSidebar }: SidebarProps) {
  const { data } = useGetLessonsQuery()

  const { lessons } = data ?? {}

  return (
    <aside
      className={
        (showSidebar ? "block" : "hidden") +
        " absolute lg:static w-full lg:w-[348px] lg:block lg:max-w-[40vw]  lg:max-h-[calc(60vh+1px)] bg-gray-700 px-4 pt-6 pb-4 border-l border-b border-gray-600 lg:overflow-y-scroll"
      }
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogama de aulas
      </span>
      <div className="flex flex-col gap-8">
        {lessons?.map(({ id, title, slug, availableAt, lessonType }) => {
          return (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
