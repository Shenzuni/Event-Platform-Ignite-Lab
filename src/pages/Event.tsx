import { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetLessonBySlugQuery } from "../graphql/generated"

import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"
import { Description } from "../components/Description"

export function Event() {
  const [showSidebar, setShowSidebar] = useState(false)

  const { slug } = useParams<{ slug: string }>()

  const { data } = useGetLessonBySlugQuery({
    variables: { slug },
  })

  const { lesson } = data ?? {}

  return (
    <div className="flex flex-col min-h-screen">
      <Header setShowSidebar={setShowSidebar} />
      <main className="flex">
        {lesson ? (
          <Video videoId={lesson.videoId} />
        ) : (
          <div className="flex-1"></div>
        )}
        <Sidebar showSidebar={showSidebar} />
      </main>
      {lesson ? (
        <Description
          title={lesson.title}
          description={lesson?.description}
          teacher={lesson?.teacher}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}
