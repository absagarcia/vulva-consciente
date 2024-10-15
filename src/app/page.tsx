import { Icon } from "@/components/icon/Icon";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div
          id="hero"
        >

        </div>
        <div id="about">

        </div>
        <div
          id="suscribe"
          className="min-h-[90vh] p-10 bg-secondary grid gap-8 lg:grid-cols-2"
        >
          <section className="flex lg:py-10 flex-col gap-20">
            <article className="text-white flex flex-col gap-6">
              <h2 className="text-3xl font-bold">Vulva Consciente</h2>
              <p className="text-2xl">
                Descubre el camino hacia el bienestar integral con la Mtra.
                Lenia Sofía Cuevas. Especialista en fisioterapia de suelo
                pélvico, ejercicio post parto y entrenamiento funcional.
                Cuida tu salud y rendimiento de la mano de una experta
              </p>
            </article>
            <div className="flex gap-16">

              <a href="https://www.instagram.com/vulvaconsciente/" target="_blank" rel="noopener noreferrer">
                <Icon className="fill-white h-10 w-10" name="instagram" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
