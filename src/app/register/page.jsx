"use client";

import React from "react";

export default function RegisterPage() {
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

        <form id="registerForm" className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--texto-principal)" }}
            >
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              required
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--acento-lupulo)]"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--texto-principal)" }}
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
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
            className="w-full py-2 font-semibold rounded-full transition"
            style={{
              backgroundColor: "var(--primario-amber)",
              color: "var(--texto-principal)",
              boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
          >
            Registrarme
          </button>
        </form>

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
