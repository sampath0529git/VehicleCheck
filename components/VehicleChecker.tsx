'use client';

import { useState } from 'react';
import RegistrationInput from './RegistrationInput';
import CheckerConfirmation from './CheckerConfirmation';

export default function VehicleChecker() {
  const [validatedData, setValidatedData] = useState<{
    formatted: string;
    clean: string;
  } | null>(null);

  const handleValidated = (formattedVrn: string, cleanVrn: string) => {
    setValidatedData({
      formatted: formattedVrn,
      clean: cleanVrn,
    });
  };

  const handleReset = () => {
    setValidatedData(null);
  };

  return (
    <div
      id="checker"
      className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8 max-w-xl mx-auto w-full scroll-mt-24 text-center"
    >
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#102A43] tracking-tight">
          UK Vehicle Insurance Checker
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Validate your UK number plate and proceed to the official MIB database.
        </p>
      </div>

      {!validatedData ? (
        <RegistrationInput onValidated={handleValidated} />
      ) : (
        <CheckerConfirmation
          formattedVrn={validatedData.formatted}
          cleanVrn={validatedData.clean}
          onReset={handleReset}
        />
      )}
    </div>
  );
}
