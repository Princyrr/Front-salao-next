// app/agendar/TimeStep.tsx
"use client";

import { useState } from "react";

type Props = {
  next: () => void;
  prev: () => void;
  updateData: (field: string, value: string) => void;
};

export default function TimeStep({ next, prev, updateData }: Props) {
  const times = [
    "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00"
  ];

  const [selectedTime, setSelectedTime] = useState("");

  // Exemplo de horários ocupados (pode vir do backend)
  const occupied = ["12:00", "14:00"];

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Escolha um horário
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {times.map((t) => {
          const isOccupied = occupied.includes(t);
          const isSelected = selectedTime === t;
          return (
            <button
              key={t}
              disabled={isOccupied}
              onClick={() => {
                setSelectedTime(t);
                updateData("time", t);
                next();
              }}
              className={`
                p-3 rounded-xl text-sm font-medium transition
                ${isOccupied ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-white text-gray-800 hover:bg-pink-50"}
                ${isSelected ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-lg" : ""}
                border border-gray-300
              `}
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
