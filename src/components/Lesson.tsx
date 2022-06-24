import { Link, useParams } from "react-router-dom"

import { isPast, format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { CheckCircle, Lock, Square } from "phosphor-react"

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: "live" | "class"
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  )
  const { slug: selectedSlug } = useParams<{ slug: string }>()

  return !isLessonAvailable ? (
    <div className="cursor-not-allowed">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 ">
        <header className="flex items-center justify-between">
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} />
            Em breve
          </span>
          <span className="text-xs text-white font-bold rounded border border-green-300 px-2">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 block mt-5">{title}</strong>
      </div>
    </div>
  ) : selectedSlug !== slug ? (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs text-white font-bold rounded border border-green-300 px-2">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 block mt-5">{title}</strong>
      </div>
    </Link>
  ) : (
    <div className="cursor-default">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="relative rounded border border-gray-500 p-4 mt-2 bg-green-500 text-white">
        <Square className="absolute top-1/2 -left-1 -mt-2 rotate-45 text-green-500 bg-green-500" />
        <header className="flex items-center justify-between">
          <span className="text-sm font-medium flex items-center gap-2">
            <CheckCircle size={20} />
            Conteúdo liberado
          </span>
          <span className="text-xs font-bold rounded border border-white px-2">
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="block mt-5">{title}</strong>
      </div>
    </div>
  )
}
