import { List } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import ImgPrincipal from "/src/assets/code-mockup.png";

export const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event?.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto mobile:flex-col">
        <div className="max-w-[640px] mobile:mx-auto">
          <div className="mobile:flex mobile:justify-center">
            <Logo />
          </div>

          <h1 className="mt-8 text-[2.5rem] leading-tight mobile:flex text-3xl flex-col items-center">
            Construa uma{" "}
            <strong className="text-blue-500">
              aplicação completa<span className="text-gray-100">,</span>
            </strong>{" "}
            <span>
              do zero, com <strong className="text-blue-500">React</strong>
            </span>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed  mobile:text-sm mobile:w-72">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores{" "}
            <span className="mobile:flex justify-center">
              oportunidades do mercado.
            </span>
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded mobile:mt-[14px] mobile:w-full">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu Nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
            >
              Garantir a minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={ImgPrincipal} className="mt-10" alt="" />
    </div>
  );
};
