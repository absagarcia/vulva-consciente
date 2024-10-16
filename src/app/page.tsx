import { Icon } from "@/components/icon/Icon";
import Navbar from "@/components/navbar/Navbar";
import Sofi from '../../public/img/sofi_formal.png';
import BgVc from '../../public/img/bgvc.png';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-primary flex min-h-screen flex-col items-center justify-between">
        <div
          id="hero"
          className="min-h-[90vh] flex-grow p-5 bg-primary xl:p-10 xl:relative"
        >
          <h1 className="pb-4 mx-auto text-3xl top-[40%] right-20 text-white text-center font-bold w-2/3 xl:absolute xl:w-[18%] xl:text-4xl">
            <span className="text-[#343434]">Activacion, bienestar</span>
            <span className="text-[#343434]"> y conciencia perineal</span>
          </h1>
          <img
            src={BgVc.src}
            alt="heroImage"
            className="rounded-[50px] w-full h-[80vh] object-cover"
          />
        </div>

        <div id="about"
          className="h-full bg-white min-h-[90vh]  px-5 py-7 flex flex-col lg:flex-row-reverse"
        >
          <img
            src={Sofi.src}
            alt="aboutImage"
            className="w-full lg:w-1/2  min-h-[70vh]"
          />
          <article className="text-[#343434] flex flex-col gap-6 lg:w-1/2 text-[18px] pr-3 justify-center items-center xl:justify-start">
            <h2 className="text-5xl font-bold text-center">Quién soy</h2>
            <p>
              Soy la Mtra. Lenia Sofía Cuevas Montaño, fisioterapeuta especializada en suelo
              pélvico y profesora de la carrera de Terapia Física en la Universidad Autónoma
              de Guadalajara. Con una maestría en Fisioterapia de Suelo Pélvico y certificaciones
              en ejercicio hipopresivo, entrenamiento funcional y Pilates para el embarazo,
              me dedico a mejorar la salud y el bienestar de mis pacientes.
            </p>
            <p>
              Mi enfoque va más allá de la recuperación física, integrando técnicas avanzadas y
              personalizadas para cada etapa de la vida, desde el post parto hasta el alto
              rendimiento deportivo. Como Coach de Indoor cycling y de ejercicio funcional,
              trabajo para que mis pacientes recuperen su fuerza, movilidad y calidad de vida
              de manera segura y efectiva.
            </p>
            <p>
              Mi misión es guiar a cada persona en su camino hacia una vida saludable,
              libre de dolor y llena de vitalidad. Permíteme acompañarte en este proceso,
              y juntos alcanzaremos tus objetivos de salud y bienestar.
            </p>
          </article>
        </div>
        <div
          id="suscribe"
          className="min-h-[90vh] p-10 bg-primary grid gap-8 lg:grid-cols-2"
        >
          <section className="flex lg:py-10 flex-col gap-20">
            <article className="text-white flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-[#343434]">Vulva Consciente</h2>
              <p className="text-2xl text-[#343434]">
                Descubre el camino hacia el bienestar integral con la Mtra.
                Lenia Sofía Cuevas. Especialista en fisioterapia de suelo
                pélvico, ejercicio post parto y entrenamiento funcional.
                Cuida tu salud y rendimiento de la mano de una experta
              </p>
            </article>
            <div className="flex gap-16">

              <a href="https://www.instagram.com/vulvaconsciente/" target="_blank" rel="noopener noreferrer">
                <Icon className="fill-black h-10 w-10" name="instagram" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
