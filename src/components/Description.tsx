import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react"

interface DescriptionProps {
  title: string
  description?: string
  teacher?: {
    name: string
    avatarURL: string
    bio: string
  }
}

export function Description({ title, description, teacher }: DescriptionProps) {
  return (
    <div className="p-8 mx-auto">
      <div className="flex items-start gap-16 ">
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

        <div className="w-[350px] flex flex-col gap-4">
          <a
            href="#"
            className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
          >
            <DiscordLogo size={24} />
            Comunidade do Discord
          </a>
          <a
            href="#"
            className="p-4 text-sm flex items-center rounded border border-blue-500 text-blue-500 font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
          >
            <Lightning size={24} />
            Acesse o desafio
          </a>
          <a href="#"></a>
        </div>
      </div>
      <div className="gap-8 mt-20 grid grid-cols-2 w-[1000px] max-w-full">
        <a
          className="max-w-[500px] bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors"
          href=""
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40} />
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Material complementar</strong>
            <p className="text-sm text-gray-200 mt-2">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>
          <div className="h-full p-6 flex items-center text-blue-500">
            <CaretRight size={24} />
          </div>
        </a>
        <a
          className="max-w-[500px] bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors"
          href=""
        >
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40} />
          </div>
          <div className="py-6 leading-relaxed">
            <strong className="text-2xl">Wallpapers exclusivos</strong>
            <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
              máquina
            </p>
          </div>
          <div className="h-full p-6 flex items-center text-blue-500">
            <CaretRight size={24} />
          </div>
        </a>
      </div>
    </div>
  )
}