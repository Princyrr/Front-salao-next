// app/agendar/DateStep.tsx
"use client";

import { useState, useEffect } from "react";

type Props = {
  next: () => void;
  prev: () => void;
  updateData: (field: string, value: string) => void;
};

export default function DateStep({ next, prev, updateData }: Props) {
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setToday(`${yyyy}-${mm}-${dd}`);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Escolha uma data
      </h2>

      <input
        type="date"
        className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
        min={today}
        onChange={(e) => updateData("date", e.target.value)}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
        >
          Voltar
        </button>

        <button
          onClick={next}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white rounded-xl hover:from-pink-600 hover:to-fuchsia-600 transition"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}
