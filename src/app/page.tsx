import Image from "next/image"
import Link from "next/link"
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">


      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-3xl font-bold flex items-center">
            <Image src="/logoclometly.png" alt="Logo" width={25} height={25} />
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
      <main className="container mx-auto px-12 pt-12 pb-24 space-y-12 relative z-10">
        {/* Text-Image Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Listo para ponerte a <span className="text-purple-500">chambear</span>?
            </h1>
            <div className="flex items-center pt-4"> 
            <Image src="/logoclometly.png" alt="Logo" width={20} height={20} className="opacity-50"></Image>
            <input type="text" className="p-2 w-full bg-transparent border-b-2 border-white text-white outline-none focus:outline-none transition-all duration-300"  placeholder="Busca tu trabajo o empresa ideal"  />
            </div>
            
          </div>
          <div className="relative h-[500px] lg:h-[500px]">
            <Image
              src="/ss4.png"
              alt="Clometly App Screenshot 1"
              fill
              className="object-contain rounded-3xl shadow-2xl transform rotate-[-5deg]"
            />
          </div>
        </div>

        {/* Sección con fondo gris y tamaño fijo */}
        <div className="grid lg:grid-cols-2 gap-10 w-full items-center bg-cloro-200 relative overflow-visible">
          {/* Contenedor para la imagen con tamaño fijo */}
          <div className="relative h-[350px] lg:h-[350px] order-last lg:order-first">
            {/* Contenedor absoluto para la imagen: este div no afecta el tamaño del padre */}
            <div className="absolute -top-16 -left-20 w-[150%] h-[150%] z-10">
              <Image
                src="/ss2.png"
                alt="Clometly App Screenshot 2"
                fill
                className="object-contain rounded-3xl  transform rotate-[5deg]"
              />
            </div>
          </div>
          {/* Sección de texto */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Crea contenido y haz que <span className="text-purple-500">todos</span> se fijen en ti!
            </h2>
          </div>
        </div>

                {/* Text-Image Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          <div className="space-y-">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Conoce <span className="text-purple-500">candidatos antes de una entrevista</span>!
            </h1>
            
            
          </div>
          <div className="relative h-[500px] lg:h-[500px]">
            <Image
              src="/ss5.png"
              alt="Clometly App Screenshot 3"
              fill
              className="object-contain rounded-3xl shadow-2xl transform rotate-[-5deg]"
            />
          </div>
        </div>

          {/* Sección con fondo gris y tamaño fijo */}
          <div className="grid lg:grid-cols-2 gap-10 w-full items-center bg-cloro-100 relative overflow-visible">
          {/* Contenedor para la imagen con tamaño fijo */}
          <div className="relative h-[350px] lg:h-[350px] order-last lg:order-first">
            {/* Contenedor absoluto para la imagen: este div no afecta el tamaño del padre */}
            <div className="absolute -top-16 -left-20 w-[150%] h-[150%] z-10">
              <Image
                src="/ss6.png"
                alt="Clometly App Screenshot 2"
                fill
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
          {/* Sección de texto */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl mb-4 font-bold leading-tight">
                Conecta, comparte, crea, y acercate a tus sueños en <span className="text-purple-500">Clometly</span>!
              </h2>
              <div className="flex items-center space-x-4">
                <Link
                  href="/descargar"
                  className="bg-white text-black  px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                Descargar ahora!
                </Link>
                
                <p>Disponible en:</p>
                <AiFillAndroid />
                <AiFillApple />

                
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-20 text-end text-gray-400 text-sm">
          <p>© 2025 Clometly. Todos los derechos reservados.</p>
        </footer>


      </main>
    </div>
  )
}

