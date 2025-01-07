"use client";
import FacebookIcon from "@/public/icons/facebookIcon";
import HeartIcon from "@/public/icons/heartIcon";
import InstagramIcon from "@/public/icons/instagramIcon";
import MailIcon from "@/public/icons/mailIcon";
import MusicIcon from "@/public/icons/musicIcon";
import PhoneIcon from "@/public/icons/phoneIcon";
import StarIcon from "@/public/icons/starIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center items-center min-h-[80vh] relative w-full">
          <div className="bg-[url(https://amigoenergy.com/wp-content/uploads/2023/05/mariachis-playing-and-celebrating-.jpeg)] bg-center bg-cover inset-0 absolute"></div>
          <div className="bg-[#00000080] absolute inset-0"></div>
          <div
            className="fade-in-div text-center z-10 relative items-center justify-center flex flex-col"
            data-aos="fade-down"
          >
            <h1 className="md:text-[4.5rem] text-[#fff] text-5xl font-bold md:w-[45rem] mb-6">
              {/* Jose G. Durrego,  */}Auténtico Mariachi
            </h1>
            <h2 className="md:text-[1.5rem] text-[#fff] text-xl mb-8">
              Lleva la esencia y pasión del mariachi mexicano a cada celebración
            </h2>
            <button className="bg-[#8b0000] text-[#fff] px-8 text-sm rounded-md h-11 hover:bg-[#5f0d0d] transition-colors flex items-center justify-center gap-3">
              <PhoneIcon stroke="#fff" />
              {`Llama Ahora: (123) 456-7890`}
            </button>
          </div>
        </div>
        <div className="w-full bg-white py-16">
          <div className="mr-auto ml-auto pr-8 pl-8">
            <h2 className="font-bold text-4xl text-center text-[#8b0000] mb-12">
              Nuestros Servicios
            </h2>
            <div
              className="gap-8 grid md:grid-cols-3 sm:grid-cols-1"
              data-aos="fade-left"
            >
              <div className="transition-shadow hover:shadow-xl rounded-lg border overflow-hidden">
                <div className="bg-[url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80)] h-48 bg-center bg-cover"></div>
                <div className="flex flex-col p-6 items-center gap-4">
                  <MusicIcon stroke="#8b0000" width={32} height={32} />
                  <h3 className="font-semibold text-xl text-center text-black">
                    Bodas
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-600 text-center">
                    {/* Haz tu día especial inolvidable con música tradicional
                    mexicana */}
                    Convierte tu boda en un recuerdo inolvidable con la magia de la música mariachi que enamora corazones.
                  </p>
                </div>
              </div>
              <div className="transition-shadow hover:shadow-xl rounded-lg border overflow-hidden">
                <div className="bg-[url(https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80)] h-48 bg-center bg-cover"></div>
                <div className="flex flex-col p-6 items-center gap-4">
                  <HeartIcon stroke="#8b0000" width={32} height={32} />
                  <h3 className="font-semibold text-xl text-center text-black">
                    Eventos Privados
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-600 text-center">
                    {/* Perfectos para cumpleaños, aniversarios y celebraciones
                    familiares */}
                    Celebra momentos únicos con la calidez y alegría de la música mariachi que conecta familias y amigos.
                  </p>
                </div>
              </div>
              <div className="transition-shadow hover:shadow-xl rounded-lg border overflow-hidden">
                <div className="bg-[url(https://images.unsplash.com/photo-1535992165812-68d1861aa71e?auto=format&fit=crop&q=80)] h-48 bg-center bg-cover"></div>
                <div className="flex flex-col p-6 items-center gap-4">
                  <StarIcon stroke="#8b0000" width={32} height={32} />
                  <h3 className="font-semibold text-xl text-center text-black">
                    Serenatas
                  </h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-gray-600 text-center">
                    {/* Sorprende a ese alguien especial con una serenata romántica */}
                    Expresa tus sentimientos con una serenata que toca el alma y deja huella en el corazón.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[rgb(255,250,240,1)] py-16 flex justify-center items-center">
          <div className="container pl-8 pr-8">
            <h2 className="font-bold text-4xl text-center mb-12 text-[#8b0000]">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div
              className="grid md:grid-cols-3 sm:grid-cols-1 gap-8"
              data-aos="fade-up"
            >
              <div className="shadow-sm bg-white border rounded-lg">
                <div className="flex flex-col p-6">
                  <p className="text-sm text-gray-500">Boda</p>
                </div>
                <div className="pt-0 p-6">
                  <p className="italic mb-4 text-black">
                    {
                      "¡Increíble servicio! Hicieron de nuestra boda un momento mágico."
                    }
                  </p>
                  <p className="font-semibold text-[#8b0000]">
                    - María González
                  </p>
                </div>
              </div>
              <div className="shadow-sm bg-white border rounded-lg">
                <div className="flex flex-col p-6">
                  <p className="text-sm text-gray-500">Serenata</p>
                </div>
                <div className="pt-0 p-6">
                  <p className="italic mb-4 text-black">
                    {
                      "La mejor serenata que podría haber pedido. ¡100% recomendado!"
                    }
                  </p>
                  <p className="font-semibold text-[#8b0000]">- Juan Pérez</p>
                </div>
              </div>
              <div className="shadow-sm bg-white border rounded-lg">
                <div className="flex flex-col p-6">
                  <p className="text-sm text-gray-500">Cumpleaños</p>
                </div>
                <div className="pt-0 p-6">
                  <p className="italic mb-4 text-black">
                    {
                      "Profesionales, puntuales y con un repertorio extraordinario."
                    }
                  </p>
                  <p className="font-semibold text-[#8b0000]">- Ana Martínez</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#8b0000] py-16 text-white justify-center flex">
        <div className="container pl-8 pr-8">
          <h2 className="mb-12 text-center text-4xl font-bold">Contáctanos</h2>
          <div className="flex flex-col items-center gap-4">
            <a
              className="flex gap-1 hover:scale-110 transition-transform"
              href="#"
            >
              <PhoneIcon stroke="#fff" />
              (123) 456-9870
            </a>
            <a
              className="flex gap-1 hover:scale-110 transition-transform"
              href="#"
            >
              <MailIcon stroke="#fff" />
              contacto@mariachi.com
            </a>
            <div className="flex gap-4">
              <a
                className="flex gap-1 hover:scale-110 transition-transform"
                href="#"
              >
                <FacebookIcon stroke="#fff" width={32} height={32} />
              </a>
              <a
                className="flex gap-1 hover:scale-110 transition-transform"
                href="#"
              >
                <InstagramIcon stroke="#fff" width={32} height={32} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
