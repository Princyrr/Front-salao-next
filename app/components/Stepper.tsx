// app/components/Stepper.tsx
"use client";

import { CheckIcon } from "@heroicons/react/24/solid"; // npm i @heroicons/react

type Props = {
  step: number;
};

export default function Stepper({ step }: Props) {
  const steps = ["Serviço", "Data", "Hora", "Dados", "Resumo"];

  return (
    <div className="flex justify-between items-center mb-8 relative">
      {steps.map((label, index) => {
        const isCompleted = step > index;
        const isActive = step === index;

        return (
          <div key={index} className="flex-1 relative text-center">
            {/* Linha de progresso */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 w-full h-1 -translate-x-1/2 ${
                  step > index ? "bg-pink-500" : "bg-gray-200"
                } transition-all duration-500`}
                style={{ zIndex: 0 }}
              />
            )}

            {/* Bolinha */}
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center border-2 transition-all duration-500
                ${
                  isCompleted
                    ? "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 border-transparent"
                    : isActive
                    ? "bg-white border-pink-500 shadow-md animate-pulse"
                    : "bg-gray-200 border-gray-300"
                }`}
            >
              {isCompleted ? (
                <CheckIcon className="w-5 h-5 text-white" />
              ) : (
                <span
                  className={`font-medium ${
                    isActive ? "text-pink-600" : "text-gray-500"
                  }`}
                >
                  {index + 1}
                </span>
              )}
            </div>

            {/* Label */}
            <p
              className={`mt-2 text-xs md:text-sm font-medium ${
                isActive
                  ? "text-pink-600"
                  : isCompleted
                  ? "text-gray-700"
                  : "text-gray-400"
              }`}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
