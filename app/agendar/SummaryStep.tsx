// app/agendar/SummaryStep.tsx
"use client";

type Props = {
  prev: () => void;
  formData: {
    service: string;
    date: string;
    time: string;
    name: string;
    email: string;
    phone: string;
  };
};

export default function SummaryStep({ prev, formData }: Props) {
  function finish() {
    alert("Agendamento confirmado!");
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Resumo do Agendamento
      </h2>

      <div className="space-y-4">
        <div className="p-4 rounded-xl bg-pink-50 border-l-4 border-pink-500 shadow-sm">
          <p className="text-gray-700"><strong>Serviço:</strong> {formData.service}</p>
        </div>

        <div className="p-4 rounded-xl bg-purple-50 border-l-4 border-purple-500 shadow-sm">
          <p className="text-gray-700"><strong>Data:</strong> {formData.date}</p>
          <p className="text-gray-700"><strong>Hora:</strong> {formData.time}</p>
        </div>

        <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-500 shadow-sm">
          <p className="text-gray-700"><strong>Nome:</strong> {formData.name}</p>
          <p className="text-gray-700"><strong>E-mail:</strong> {formData.email}</p>
          <p className="text-gray-700"><strong>Telefone:</strong> {formData.phone}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition"
        >
          Voltar
        </button>
        <button
          onClick={finish}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 text-white font-semibold rounded-xl shadow-lg transition"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
}
