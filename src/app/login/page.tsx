export default function Page() {
    return (
        <>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-cloro-100">
                <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start  p-10 rounded bg-cloro-200 ">
                    <h1 className="text-2xl font-bold text-white">Login</h1>

                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="p-2 w-full bg-transparent border-b-2 border-white text-white outline-none focus:outline-none transition-all duration-300"
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Contraseña"
                        className="p-2 w-full bg-transparent border-b-2 border-white text-white outline-none focus:outline-none transition-all duration-300"
                    />

                    <button
                        type="submit"
                        className="hover:bg-romet-400 hover:shadow-md hover:shadow-romet-300 transition-all duration-300 text-white bg-romet-300 py-2 px-4 rounded w-full"
                    >
                        Login
                    </button>

                    
                    <div className="w-full flex items-center justify-between space-x-3">
                        <input type="checkbox" name="Remember me" id="rememberme" />
                        <label htmlFor="rememberme" className="text-gray-400 text-sm ">
                            Recordarme
                        </label>

                        <a
                            href="#"
                            className="text-gray-400 hover:text-romet-400 text-sm">
                            Olvidé mi contraseña
                        </a>

                    </div>
                    <div className="w-full flex items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
                            <a
                                href="/register"
                                className="text-gray-400 hover:text-romet-400 text-sm"
                            >
                                ¿No tienes una cuenta? Registrate ahora!
                            </a>
                        </div>                    

                </main>
            </div>
        </>
    );
}
