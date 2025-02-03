"use client";
import {  useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { push } = useRouter();

    useEffect(() => {
        const accesToken = localStorage.getItem("acces_token");
        if (!accesToken) {
            push("/login");
        }
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-cloro-100">
            <main className="flex flex-col gap-6 p-10 rounded bg-cloro-200 shadow-lg w-96">
                <h1 className="text-2xl font-bold text-white text-center">
                    Lobby
                </h1>
            </main>
        </div>
    );
}