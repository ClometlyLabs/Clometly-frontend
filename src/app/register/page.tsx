"use client";

import { SubmitHandler, useForm } from "react-hook-form";

interface IRegisterForm {
    first_names: string;
    last_names: string;
    username: string;
    email: string;
    phone: string;
    birthday: string;
    password: string;
    terms: boolean; // Validación para los términos y condiciones
}

export default function Page() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterForm>();

    const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-cloro-100 p-8 sm:p-10">
                <main className="flex flex-col gap-8 items-center sm:items-start p-10 rounded bg-cloro-200 shadow-lg xl:w-[600px] sm:w-[400px]">
                    <h1 className="text-2xl font-bold text-white text-center sm:text-left">
                        ¡Regístrate en Clometly!
                    </h1>
                    <form
                        className="flex flex-col gap-4 w-full"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            type="text"
                            id="first_names"
                            placeholder="Nombre(s)"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.first_names ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("first_names", { required: "Este campo es obligatorio" })}
                        />
                        {errors.first_names && (
                            <span className="text-red-500 text-sm">
                                {errors.first_names.message}
                            </span>
                        )}

                        <input
                            type="text"
                            id="last_names"
                            placeholder="Apellido(s)"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.last_names ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("last_names", { required: "Este campo es obligatorio" })}
                        />
                        {errors.last_names && (
                            <span className="text-red-500 text-sm">
                                {errors.last_names.message}
                            </span>
                        )}

                        <input
                            type="text"
                            id="username"
                            placeholder="Nombre de usuario"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.username ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("username", { required: "Este campo es obligatorio" })}
                        />
                        {errors.username && (
                            <span className="text-red-500 text-sm">
                                {errors.username.message}
                            </span>
                        )}

                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.email ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("email", {
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^[a-zA-Z0]+@[a-zA-Z0]+\.[a-zA-Z]{2,4}$/,
                                    message: "Introduce un email válido",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}

                        <input
                            type="text"
                            id="phone"
                            placeholder="Celular"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.phone ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("phone", {
                                required: "Este campo es obligatorio",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Solo se permiten números",
                                },
                            })}
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">{errors.phone.message}</span>
                        )}

                        <input
                            type="date"
                            id="birthday"
                            placeholder="Fecha de nacimiento"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.birthday ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("birthday", { required: "Este campo es obligatorio" })}
                        />
                        {errors.birthday && (
                            <span className="text-red-500 text-sm">
                                {errors.birthday.message}
                            </span>
                        )}

                        <input
                            type="password"
                            id="password"
                            placeholder="Contraseña"
                            className={`p-2 w-full bg-transparent border-b-2 ${
                                errors.password ? "border-red-500" : "border-white"
                            } text-white outline-none focus:outline-none transition-all duration-300`}
                            {...register("password", {
                                required: "Este campo es obligatorio",
                                minLength: {
                                    value: 6,
                                    message: "La contraseña debe tener al menos 6 caracteres",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )}

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="terms"
                                {...register("terms", {
                                    required: "Debes aceptar los términos y condiciones",
                                })}
                            />
                            <label
                                htmlFor="terms"
                                className="text-gray-400 text-sm cursor-pointer"
                            >
                                He leído y acepto los términos y condiciones de uso.
                            </label>
                        </div>
                        {errors.terms && (
                            <span className="text-red-500 text-sm">{errors.terms.message}</span>
                        )}

                        <button
                            type="submit"
                            className="hover:bg-romet-400 hover:shadow-md hover:shadow-romet-300 transition-all duration-300 text-white bg-romet-300 py-2 px-4 rounded w-full"
                        >
                            Registrarse
                        </button>

                        <div className="w-full flex items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 text-center sm:text-left">
                            <a
                                href="/login"
                                className="text-gray-400 hover:text-romet-400 text-sm"
                            >
                                ¿Ya tienes una cuenta? Iniciar sesión
                            </a>
                        </div>
                    </form>
                </main>
            </div>
        </>
    );
}
