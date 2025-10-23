"use client";

import React from "react";

export default function LoginPage() {
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

        <form id="login-form" className="w-full space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-1"
              style={{ color: "var(--texto-principal)" }}
            >
              Usuario
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
            Ingresar
          </button>
        </form>

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
