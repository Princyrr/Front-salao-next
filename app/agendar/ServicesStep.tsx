// app/agendar/ServicesStep.tsx
"use client";

type Props = {
  next: () => void;
  updateData: (field: string, value: string) => void;
};

export default function ServicesStep({ next, updateData }: Props) {
  const services = [
    { name: "Corte Feminino", price: "R$ 60", duration: "45 min" },
    { name: "Escova", price: "R$ 50", duration: "30 min" },
    { name: "Hidratação", price: "R$ 80", duration: "1h" },
    { name: "Manicure + Pedicure", price: "R$ 45", duration: "1h" },
    { name: "Coloração", price: "R$ 120", duration: "2h" },
    { name: "Design de Sobrancelhas", price: "R$ 35", duration: "20 min" },
    { name: "Selagem Capilar", price: "R$ 100", duration: "1h30" },
    { name: "Penteado para Festa", price: "R$ 90", duration: "1h" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Escolha seu serviço
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex flex-col justify-between p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-pink-300 cursor-pointer transition-all duration-200 bg-white"
            onClick={() => {
              updateData("service", `${s.name} - ${s.price}`);
              next();
            }}
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{s.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{s.duration}</p>
            </div>
            <div className="mt-2 text-right">
              <span className="font-bold text-pink-600">{s.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
