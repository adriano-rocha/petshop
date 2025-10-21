import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FD6ec} py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto cachorro"
                fill
                quality={100}
                className="object-cover hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>

          <div
            className="space-6 mt-10"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <h2 className="text-4xl font-bold">Sobre nós</h2>

            <p className="font-sans p-2">
              Desde 2007, o Nosso Petshop é sinônimo de excelência e paixão pelo
              universo pet. Com uma ótima localização e fácil acesso, nos
              dedicamos a oferecer um ambiente acolhedor e serviços de alta
              qualidade para cães e gatos. Ao longo de nossa trajetória,
              conquistamos a confiança e a satisfação de dezenas de clientes e
              seus amados companheiros. Nossa missão é clara: proporcionar o
              melhor em cuidados, saúde e bem-estar, garantindo que seu amigo de
              quatro patas receba o carinho e o tratamento que ele merece. Venha
              fazer parte da nossa família!
            </p>

            <ul className="space-y-4">
              <li className="flex item-center gap-2 font-sans">
                <Check className="text-green-500" />
                Desde 2007. 🐱🐶
              </li>
              <li className="flex item-center gap-2 font-sans">
                <Check className="text-green-500" />
                Equipe com mais de 8 veterinários. 👨‍⚕️🩺
              </li>
              <li className="flex item-center gap-2 font-sans">
                <Check className="text-green-500" />
                Qualidade e carinho é nossa prioridade. 🤍 🐾
              </li>
            </ul>

            <div className="flex gap-2 p-2">
              <a
                target="_blank"
                href={`https://wa.me/5511990143011?text=Olá vim pelo site e gostaria de mais informações`}
                className="bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <WhatsappLogoIcon className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>
              <a
                target="_blank"
                href="https://www.google.com/maps/place/Jardins,+S%C3%A3o+Paulo+-+State+of+S%C3%A3o+Paulo/@-23.54735316986462,-46.69348606420742,21z"
                className="bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
