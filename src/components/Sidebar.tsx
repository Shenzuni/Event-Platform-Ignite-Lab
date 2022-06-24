import { gql, useQuery } from "@apollo/client"
import { Lesson } from "./Lesson"

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      lessonType
      availableAt
      title
    }
  }
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string
    slug: string
    lessonType: "class" | "live"
    availableAt: Date
    title: string
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="max-w-[40vw] w-[348px] max-h-[calc(60vh+1px)] pr-5 bg-gray-700 p-6 border-l border-b border-gray-600 overflow-y-scroll">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronogama de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, title, slug, availableAt, lessonType }) => {
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
