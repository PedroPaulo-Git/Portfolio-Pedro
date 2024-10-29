import GridSkils from "./Components/Grid";
const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 -mt-20 rounded-b-[90px] z-0">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid mt-10 max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-gray-light">
                Sobre Mim
              </p>
              <h1 className="mt-2 text-3xl sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
                Percurso Profissional
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700"></p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Especialista em desenvolvimento de aplicacoes completas, com
                forte enfase em interfaces dinamicas utilizando React e
                habilidades robustas em back<span className="font-sans font-semibold">-</span>end com Node.js e Postgres. Conclui
                o curso de Analise e Desenvolvimento de Sistemas na UNINASSAU
               em dezembro de 2023.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      React e Interfaces Interativas.
                    </strong>{" "}
                    Construcao de UI<span className="font-sans font-semibold">/</span>UX responsivas focadas em usabilidade e
                    engajamento.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Tecnologias de Back<span className="font-sans font-semibold">-</span>end.
                    </strong>{" "}
                    Experiencia com Node.js, Express e Postgres para
                    desenvolvimento de APIs robustas.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Integracao de APIs.
                    </strong>{" "}
                    Utilizacao de Axios para comunicacao eficiente entre
                    Front<span className="font-sans font-semibold">-</span>end e Back<span className="font-sans font-semibold">-</span>end.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Design e Landing Pages.
                    </strong>{" "}
                    Criacao de layouts que maximizam conversao e experiencia do
                    usuario.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Formacao Tecnica.
                    </strong>{" "}
                    Curso de Analise e Desenvolvimento de Sistemas, com enfase
                    em praticas de mercado.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
  Com uma forte base em tecnologias Front<span className="font-sans font-semibold">-</span>end e Back<span className="font-sans font-semibold">-</span>end, estou sempre em busca de
  solucoes que unam funcionalidade e estetica. Acredito que a tecnologia deve servir para melhorar a experiencia do usuario e estou aqui para fazer isso acontecer.
</p>

            </div>
          </div>
        </div>
        <div className=" p-0 m-0 sm:-ml-12 sm:-mt-12 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <GridSkils />
        </div>
      </div>
    </div>
  );
};
export default About;
