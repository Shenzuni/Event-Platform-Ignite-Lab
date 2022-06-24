import { gql, useQuery } from "@apollo/client"

import { useParams } from "react-router-dom"

import { Description } from "../components/Description"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      description
      videoId
      teacher {
        bio
        name
        avatarURL
      }
    }
  }
`

interface GetLessonBySlugResponse {
  lesson: {
    title: string
    description?: string
    videoId: string
    teacher?: {
      bio: string
      name: string
      avatarURL: string
    }
  }
}

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  let { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: { slug },
  })

  const { lesson } = data || {}
  return (
    <div className="flex flex-col min-h-screen max-h-screen">
      <Header />
      <main className="flex">
        {lesson?.videoId ? (
          <Video videoId={lesson?.videoId} />
        ) : (
          <div className="flex-1" />
        )}
        <Sidebar />
      </main>
      <div>
        {lesson?.title && (
          <Description
            title={lesson.title}
            description={lesson?.description}
            teacher={lesson?.teacher}
          />
        )}
      </div>
    </div>
  )
}
