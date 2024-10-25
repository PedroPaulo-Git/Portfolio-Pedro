import React from "react";
import IconDeveloper from '../../assets/Services/dev.png';
import IconDesign from '../../assets/Services/design.png'; // add other icons as needed

const Services = () => {
  const services = [
    {
      image: IconDeveloper,
      title: "Desenvolvimento Full-Stack",
      subtitle: "Criando solucoes completas e fluidas para web e mobile",
      icon: IconDeveloper
    },
    {
      image: IconDesign,
      title: "Design & Criatividade",
      subtitle: "Designs que conectam marcas e pessoas",
      icon: IconDesign
    },
    // Add other services as needed
  ];
  return (
    <div className="m-[8rem]">
      <div className="flex flex-col text-center  text-4xl lg:text-3xl font-semibold bg-gradient-to-l from-gray-light to-gray-main bg-clip-text text-transparent">
        <span className="leading-tight">
          Colaboro com empresas para criar experiencias
        </span>
        <span className="leading-tight">digitais de alto impacto</span>
      </div>
      <div class="">
        <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="mt-4 flex flex-col">
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    <img src={service.image} alt={service.title} />
                  </a>
                </h3>
                <p className="mt-1 text-sm font-bold text-gray-main">{service.title}</p>
                <p className="mt-1 text-sm text-gray-500">{service.subtitle}</p>
              </div>
            </div>
          ))}
         
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
