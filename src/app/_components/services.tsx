"use client";

import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Scissors,
  Syringe,
  CarTaxiFront,
  Hotel,
  Clock,
} from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Banho com produtos especifícos para o tipo de pelagem  e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "R$60",
    icon: <Scissors />,
    linkText:
      "Olá, vim do site, gostaria de mais informações sobre Banho e Tosa.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Atendimento clínico 24hrs, emergencial, exames especializados, tudo para atender todas as necessidades do seu pet. Temos aplicações de vacinas obrigatórias",
    duration: "1h",
    price: "R$40",
    icon: <Syringe />,
    linkText:
      "Olá, vim do site, gostaria de mais informações sobre Atendimento.",
  },
  {
    title: "Taxi Pet",
    description:
      "Serviço de transporte para buscar e levar seu pet, seja clinícas veterinárias ou outros locias. Ideal para tutores que não tem tempo ou transporte adequado para locomover os animais",
    duration: "2h",
    price: "R$80",
    icon: <Scissors />,
    linkText: "Olá, vim do site, gostaria de mais informações sobre Taxi Pet.",
  },
  {
    title: "Hotel para pets",
    description:
      "Oferecemos serviço de hospedagem parta animais de estimação, ideal para quando precisar viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços segurps e confortáveis",
    duration: "1h",
    price: "R$100",
    icon: <Hotel />,
    linkText:
      "Olá, vim do site, gostaria de mais informações sobre Hospedagem para pets.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  })

  function scrollPrev(){
    emblaApi?.scrollPrev();
  }

  function scrollNext(){
    emblaApi?.scrollNext();
  }



  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex border-t border-gray-700 pt-4 items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4"/>
                        <span>{item.duration}</span>
                      </div>

                      <a 
                     target="_blank"
                href={`https://wa.me/5511990143011?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                      className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogoIcon className="w-5 h-5"/>
                        Entrar em contato
                      </a>      

                    </div>

                  </article>
                </div>
              ))}
            </div>
          </div>

          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600"/>
          </button>

          <button className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronRight className="w-6 h-6 text-gray-600"/>
          </button>

        </div>

      </div>
    </section>
  );
}
