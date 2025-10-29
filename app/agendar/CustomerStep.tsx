// app/agendar/CustomerStep.tsx
"use client";

import { useState } from "react";

type Props = {
  next: () => void;
  prev: () => void;
  updateData: (field: string, value: string) => void;
};

export default function CustomerStep({ next, prev, updateData }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    updateData(field, value);
  };

  const isValid = form.name && form.email && form.phone;

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Seus dados
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
        >
          Voltar
        </button>
        <button
          onClick={next}
          disabled={!isValid}
          className={`px-6 py-3 rounded-xl text-white font-semibold transition 
            ${isValid ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600" 
            : "bg-gray-300 cursor-not-allowed"}`}
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
