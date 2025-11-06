"use client";

import React, { useState } from "react";
import supabase from "../../lib/supabaseClient"; // 👈 asegúrate de usar la versión default (como antes)

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const email = e.target.username.value; // 👈 este campo usa el correo electrónico
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Error al iniciar sesión:", error.message);
      setErrorMsg("Credenciales incorrectas o usuario no verificado.");
    } else {
      console.log("Usuario logeado:", data.user);
      // Redirige a la página principal o productos
      window.location.href = "/"; // 👈 cámbialo si tienes otra ruta principal
    }

    setLoading(false);
  };

  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{
        minHeight: "60vh",
        backgroundColor: "var(--bg-principal)",
      }}
    >
      <div
        className="shadow-lg rounded-2xl p-8 w-full"
        style={{
          maxWidth: "480px",
          backgroundColor: "var(--blanco-puro)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <h3
          className="text-center mb-6 text-2xl font-semibold"
          style={{ color: "var(--secundario-malta)" }}
        >
          Iniciar Sesión
        </h3>

        <form id="login-form" onSubmit={handleLogin} className="w-full space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--texto-principal)" }}
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="username"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--texto-principal)" }}
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 font-semibold rounded-full transition"
            style={{
              backgroundColor: "var(--primario-amber)",
              color: "var(--texto-principal)",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        {errorMsg && (
          <p className="mt-3 text-center text-red-600 text-sm">{errorMsg}</p>
        )}

        <div className="mt-4 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <a
            href="/register"
            className="font-medium hover:underline"
            style={{ color: "var(--acento-lupulo)" }}
          >
            Regístrate aquí
          </a>
        </div>
      </div>
    </main>
  );
}
