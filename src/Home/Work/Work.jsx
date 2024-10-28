import WorkImageExemple from "../../assets/Works/workexemple.jpg";
import { IoLogoGithub } from "react-icons/io5";
const features = [
  {
    image: WorkImageExemple,
    name: "Push to deploy",
    social:<IoLogoGithub />,
    where: "Projeto pessoal",
    date: "Agosto 2023",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
  },
  {
    image: WorkImageExemple,
    name: "SSL certificates",
    social:<IoLogoGithub />,
    where: "Projeto pessoal",
    date: "Agosto 2023",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
  },
  {
    image: WorkImageExemple,
    name: "Simple queues",
    social:<IoLogoGithub />,
    where: "Projeto pessoal",
    date: "Agosto 2023",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
  },
  {
    image: WorkImageExemple,
    name: "Advanced security",
    social:<IoLogoGithub />,
    where: "Projeto pessoal",
    date: "Agosto 2023",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
  },
];

const Work = () => {
  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center text-center">
          <p className="mt-2 text-2xl sm:text-2xl lg:text-4xl font-semibold bg-gradient-to-l from-gray-midlight to-black bg-clip-text text-transparent">
            Trabalhos Selecionados
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-main">
            Uma coleção dos projetos mais impactantes, escolhidos para
            representar a qualidade e dedicação em cada detalhe. Explore alguns
            dos meus melhores resultados.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative p-4 bg-white rounded-xl "
              >
                <div className="group relative">
                  <img src={feature.image} className="rounded-2xl" alt="" />
                  <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold px-4 py-2 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver Projeto
                  </button>
                </div>

                <dt className="text-2xl font-semibold leading-7 py-2 pt-4 text-gray-main justify-between flex">
                  {feature.name}
                  <span className=" mr-1 cursor-pointer hover:text-gray-light trans"> {feature.social} </span>
                 
                </dt>
                <dt className="text-base font-semibold  text-gray-main">
                  {feature.where}
                </dt>
                <dt className="text-sm font-normal leading-7 text-gray-midlight">
                  {feature.date}
                </dt>

                <dd className="mt-2 text-sm  text-gray-midlight">
                  {feature.description}
                </dd>
               
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
export default Work;
