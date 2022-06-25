import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react"

interface DescriptionProps {
  title: string
  description?: string | null
  teacher?: {
    name: string
    avatarURL: string
    bio: string
  } | null
}

export function Description({ title, description, teacher }: DescriptionProps) {
  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row gap-16 ">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">{description}</p>
          <div className="flex items-center gap-4 mt-6">
            <img
              className="h-16 w-16 rounded-full border-2 border-blue-500"
              src={teacher?.avatarURL}
              alt=""
            />
            <div className="leading-relaxed">
              <strong className="font-bold text-2xl block">
                {teacher?.name}
              </strong>
              <span className="text-gray-200 text-sm block">
                {teacher?.bio}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-[350px]">
          <a
            href="#"
            className="flex items-center justify-center p-4 text-sm bg-green-500 rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors"
          >
            <DiscordLogo size={24} />
            Comunidade do Discord
          </a>
          <a
            href="#"
            className="flex items-center justify-center p-4 text-sm rounded border border-blue-500 text-blue-500 font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            <Lightning size={24} />
            Acesse o desafio
          </a>
          <a href="#"></a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 mt-20">
        <a
          className="flex items-stretch justify-between gap-4 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          href=""
        >
          <div className="flex gap-4">
            <div className="flex items-center basis-9 px-6 bg-green-700">
              <FileArrowDown size={40} />
            </div>
            <div className="leading-relaxed py-4">
              <strong className="text-xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
          </div>
          <div className="flex items-center pr-4 text-blue-500">
            <CaretRight size={24} />
          </div>
        </a>
        <a
          className="flex items-stretch justify-between gap-4 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          href=""
        >
          <div className="flex gap-4">
            <div className="flex items-center basis-9 px-6 bg-green-700">
              <Image size={40} />
            </div>
            <div className="leading-relaxed py-4">
              <strong className="text-xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
          </div>
          <div className="flex items-center pr-4 text-blue-500">
            <CaretRight size={24} />
          </div>
        </a>
      </div>
    </div>
  )
}
