import { Github, Linkedin, Mail } from "lucide-react";
import ParallaxSection from "./components/ParallaxSection";

export default function Home() {
  const parallaxLayers = [
    { image: "/1.png", speed: 0.2, zIndex: 1 },
    { image: "/2.png", speed: 0.4, zIndex: 2 },
    { image: "/3.png", speed: 0.6, zIndex: 3 },
    { image: "/4.png", speed: 0.8, zIndex: 4 },
  ];

  return (
    <main className="bg-gray-900">
      <ParallaxSection layers={parallaxLayers}>
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1
              className="text-5xl sm:text-6xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-press-start)",
                color: "#FFD700",
                textShadow: `
                  3px 0px 0px #000000,
                  -3px 0px 0px #000000,
                  0px 3px 0px #000000,
                  0px -3px 0px #000000,
                  3px 3px 0px #000000,
                  -3px -3px 0px #000000,
                  3px -3px 0px #000000,
                  -3px 3px 0px #000000,
                  6px 6px 0px rgba(0,0,0,0.5)
                `,
              }}
            >
              THIAGO GRITTI
            </h1>
            <p
              className="text-lg sm:text-xl mb-10"
              style={{
                color: "#E8D5B7",
                textShadow: "2px 2px 4px rgba(0,0,0,0.9)",
              }}
            >
              Desenvolvedor Fullstack Junior | Backend
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a
                href="https://github.com/thiagoDOTjpeg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#1a1a1a] hover:bg-[#2d2d2d] rounded-none transition-all border-2 border-[#333] hover:border-[#555] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Github
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/thiago-gritti"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#0077B5] hover:bg-[#0088CC] rounded-none transition-all border-2 border-[#005582] hover:border-[#006699] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Linkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">LinkedIn</span>
              </a>

              <a
                href="mailto:thiago@gritti.dev.br"
                className="group relative flex items-center justify-center gap-2 px-6 py-3 bg-[#2d6a4f] hover:bg-[#40916c] rounded-none transition-all border-2 border-[#1b4332] hover:border-[#2d6a4f] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                <Mail
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="font-semibold">Email</span>
              </a>
            </div>

            <button className="px-10 py-4 bg-[#1e40af] hover:bg-[#2563eb] rounded-none transition-all border-2 border-[#1e3a8a] hover:border-[#1e40af] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-[-2px] hover:translate-y-[-2px] font-semibold text-lg">
              Ver Projetos
            </button>
          </div>
        </div>
      </ParallaxSection>

      {/* Suas outras seções */}
      <section className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl mb-8">Sobre Mim</h2>
          <p className="text-lg">Seu conteúdo aqui...</p>
        </div>
      </section>
    </main>
  );
}
