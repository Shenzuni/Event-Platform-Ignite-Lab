import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCreateSubscriberMutation } from "../graphql/generated"

import { IgniteIcon } from "../assets/svg"

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()
    await createSubscriber({
      variables: {
        name,
        email,
      },
    })
    navigate("/event")
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-[10vw] bg-blur bg-cover bg-no-repeat">
      <div className="flex flex-col gap-8 items-center justify-between w-full mt-20 lg:flex-row ">
        <div className="max-w-[640px]">
          {IgniteIcon}
          <h1 className="mt-8 text-[2.5rem] text-center leading-tight lg:text-left">
            <span>Construa uma</span>
            <strong className="text-blue-500"> aplicação completa</strong>
            <span>, do zero, com </span>
            <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-center text-gray-200 leading-relaxed lg:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            action=""
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir a minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/code-mock.png" alt="" />
    </div>
  )
}
