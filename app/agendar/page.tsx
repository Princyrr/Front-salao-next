// app/agendar/page.tsx
"use client";

import { useState } from "react";
import Stepper from "../components/Stepper";
import ServicesStep from "./ServicesStep";
import DateStep from "./DateStep";
import TimeStep from "./TimeStep";
import CustomerStep from "./CustomerStep";
import SummaryStep from "./SummaryStep";

export default function AgendarPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<any>({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    setStep((prev) => prev - 1);
  }

  function updateData(field: string, value: string) {
    setFormData({ ...formData, [field]: value });
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-8 rounded shadow">
      <Stepper step={step} />

      {step === 0 && <ServicesStep next={nextStep} updateData={updateData} />}
      {step === 1 && <DateStep next={nextStep} prev={prevStep} updateData={updateData} />}
      {step === 2 && <TimeStep next={nextStep} prev={prevStep} updateData={updateData} />}
      {step === 3 && <CustomerStep next={nextStep} prev={prevStep} updateData={updateData} />}
      {step === 4 && <SummaryStep prev={prevStep} formData={formData} />}
    </div>
  );
}
