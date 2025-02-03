"use client";

import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from 'next/navigation';

interface ILoginForm {
    email: string;
    password: string;
}

export default function Page() {
    const { push } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>();

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        setLoading(true);
        setErrorMessage("");
        try {
            const response = await axios.post("http://localhost:4000/auth/signin", data);
            localStorage.setItem("acces_token", response.data.acces_token);
            alert("Inicio de sesión exitoso");
            push("/lobby");
        } catch (error) {
            setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-cloro-100">
            <main className="flex flex-col gap-6 p-10 rounded bg-cloro-200 shadow-lg w-96">
                <h1 className="text-2xl font-bold text-white text-center">Login</h1>
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={`p-2 w-full bg-transparent border-b-2 ${errors.email ? "border-red-500" : "border-white"} text-white outline-none`}
                        {...register("email", { required: "Este campo es obligatorio" })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                    <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        className={`p-2 w-full bg-transparent border-b-2 ${errors.password ? "border-red-500" : "border-white"} text-white outline-none`}
                        {...register("password", { required: "Este campo es obligatorio" })}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`text-white bg-romet-300 py-2 px-4 rounded w-full transition-all duration-300 ${loading ? "opacity-50" : "hover:bg-romet-400 hover:shadow-md hover:shadow-romet-300"}`}
                    >
                        {loading ? "Cargando..." : "Login"}
                    </button>
                </form>

                <div className="flex justify-between items-center text-sm text-gray-400">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" id="rememberme" />
                        <span>Recordarme</span>
                    </label>
                    <a href="#" className="hover:text-romet-400">Olvidé mi contraseña</a>
                </div>

                <div className="text-center">
                    <a href="/register" className="text-gray-400 hover:text-romet-400 text-sm">
                        ¿No tienes una cuenta? ¡Regístrate ahora!
                    </a>
                </div>
            </main>
        </div>
    );
}
