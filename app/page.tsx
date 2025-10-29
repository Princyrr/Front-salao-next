import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">

      {/* Fundo com efeito */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-200 opacity-25 rounded-full blur-3xl"></div>

      {/* Logo com borda animada */}
      <div className="relative z-10 flex flex-col items-center mb-10">
        <div className="relative w-[170px] h-[170px] flex items-center justify-center">
          {/* borda animada */}
          <div className="absolute inset-0 rounded-full p-[3px] spin-slow bg-gradient-to-tr from-pink-500 via-fuchsia-500 to-purple-600">

            <div className="w-full h-full bg-white rounded-full"></div>
          </div>

          {/* imagem */}
          <Image
            src="/imagens/logo.jpg"
            alt="Logo do salão"
            width={150}
            height={150}
            className="relative z-10 rounded-full object-cover shadow-md"
          />
        </div>

        <h2 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
          Francesca Hair
        </h2>
        <div className="w-24 h-1 mt-3 bg-gradient-to-r from-pink-400 to-fuchsia-500 rounded-full"></div>
      </div>

      {/* Conteúdo principal */}
      <section className="relative z-10 text-center px-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight drop-shadow-sm">
          Cuidando da sua <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">beleza</span> com elegância
        </h1>

        <p className="mt-5 text-gray-700 text-lg md:text-xl leading-relaxed">
          Experiência premium em cuidados capilares, autoestima e bem-estar. Agende online com praticidade.
        </p>

        <Link
          href="/agendar"
          className="inline-block mt-8 bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-700 hover:to-fuchsia-700 transition-all duration-200 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-2xl"
        >
          Agendar Agora
        </Link>
      </section>
    </main>
  )
}
