"use client";

import React, { useState } from "react";
import supabase from "../../lib/supabaseClient"; // Asegúrate de que la ruta sea correcta

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username }, // guarda el nombre en user_metadata
      },
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg("✅ Registro exitoso. Revisa tu correo para confirmar la cuenta.");
      console.log("Nuevo usuario:", data);
    }

    setLoading(false);
  };

  return (
    <main
      className="flex flex-col justify-center items-center"
      style={{
        minHeight: "50vh",
        backgroundColor: "var(--bg-principal)",
      }}
    >
      <div
        className="shadow-lg rounded-2xl p-8 w-full"
        style={{
          maxWidth: "500px",
          backgroundColor: "var(--blanco-puro)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <h2
          className="text-center mb-6 text-2xl font-semibold"
          style={{ color: "var(--secundario-malta)" }}
        >
          Crear Cuenta
        </h2>

        <form id="registerForm" onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
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
            {loading ? "Registrando..." : "Registrarme"}
          </button>
        </form>

        {errorMsg && <p className="mt-3 text-center text-red-600 text-sm">{errorMsg}</p>}
        {successMsg && <p className="mt-3 text-center text-green-600 text-sm">{successMsg}</p>}

        <p className="mt-4 text-center text-sm">
          ¿Ya tienes cuenta?{" "}
          <a
            href="/login"
            className="font-medium hover:underline"
            style={{
              color: "var(--acento-lupulo)",
              fontWeight: "600",
            }}
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </main>
  );
}
