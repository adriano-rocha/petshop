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
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.jpg";
import tutor3 from "../../../public/tutor3.jpg";
import tutor4 from "../../../public/tutor4.jpg";
import Image from "next/image";

const testimonials = [
  {
    content:
      "Acompanho o Petshop desde 2007. A qualidade é inquestionável. Tosa padrão, produtos de primeira e a veterinária é super atenciosa. A localização facilita muito a minha rotina, e saber que meu amigo está em boas mãos há tanto tempo me dá total tranquilidade.",
    author: "Caio Almeida",
    role: "Tutor do Zeus (Labrador)",
    image: tutor4,
  },

  {
    content:
      "Meu gatinho é super estressado, mas aqui ele se acalma de um jeito que eu nem acredito! O banho é sem estresse e a tosa higiênica é feita com muita paciência. É o único lugar onde ele não volta miando de raiva. Recomendo de olhos fechados!",
    author: "Hellen Alves",
    role: "Tutora do Thor (Gato SRD)",
    image: tutor2,
  },
  {
    content:
      "O serviço é excelente, mas o que me surpreende mesmo é o 'pacote fidelidade': a Fiuka sempre volta do banho e, misteriosamente, parece que ela se recusa a entrar na lama ou pular na piscina por uns 3 dias seguidos. É o único Petshop que conseguiu o milagre da 'limpeza duradoura'! Dezenas de banhos e dezenas de dias de paz no sofá branco!",
    author: "Laís Costa",
    role: "Tutora da Fiuka (Cocker Spaniel)",
    image: tutor3,
  },
  {
    content:
      "Além de cuidar muito bem do Tobby na tosa, a loja tem uma variedade de petiscos e brinquedos que não encontro em mais lugar nenhum. A equipe sempre me ajuda a escolher o melhor. Sou cliente há anos e só tenho elogios. Excelente atendimento e ótima localização!",
    author: "André Vasconcelos",
    role: "Tutor do Tobby (Poodle Toy)",
    image: tutor1,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes="96px"
                          className="object-cover rounded-full"
                        />
                      </div>

                      <p className="text-gray-200">{item.content}</p>

                      <div>
                        <p className="font-bold">{item.author}</p>
                        <p className="text-sm text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
