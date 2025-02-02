import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">


      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold flex items-center">
            <Image src="/logoclometly.png" alt="Logo" width={30} height={30} />
            <span className="ml-2">Clometly</span>
          </div>
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/login" className="hover:text-gray-300 transition-colors">
            Ingresar
          </Link>
          <Link href="/contacto" className="hover:text-gray-300 transition-colors">
            Contacto
          </Link>
          <Link
            href="/descargar"
            className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Descargar
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-12 pb-24 space-y-12 relative z-10">
        {/* Text-Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Listo para ponerte a <span className="text-purple-500">chambear</span>?
            </h1>
          </div>
          <div className="relative h-[300px] lg:h-[400px]">
            <Image
              src="/clometly.png"
              alt="Clometly App Screenshot 1"
              fill
              className="object-contain rounded-3xl shadow-2xl transform rotate-[-5deg]"
            />
          </div>
        </div>

        {/* Image-Text Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] lg:h-[400px] order-last lg:order-first">
            <Image
              src="/clometly2.png"
              alt="Clometly App Screenshot 2"
              fill
              className="object-contain rounded-3xl shadow-2xl transform rotate-[5deg]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Crea conenido y haz que <span className="text-purple-500">todos</span> se fijen en ti!
            </h2>
          </div>
        </div>
      </main>
    </div>
  )
}

