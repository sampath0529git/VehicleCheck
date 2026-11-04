'use client';

import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { validateUkRegistration } from '@/lib/validation';

interface RegistrationInputProps {
  onValidated: (formattedVrn: string, cleanVrn: string) => void;
}

export default function RegistrationInput({ onValidated }: RegistrationInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Auto convert to uppercase
    const upper = raw.toUpperCase();
    setInputValue(upper);
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleClear = () => {
    setInputValue('');
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateUkRegistration(inputValue);

    if (!result.isValid) {
      setErrorMessage(result.error || 'Please enter a valid UK registration number.');
      return;
    }

    setErrorMessage(null);
    onValidated(result.formatted, result.cleanInput);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4" noValidate>
      <div>
        <label
          htmlFor="vehicle-reg-input"
          className="block text-sm font-semibold text-slate-800 mb-2 text-left"
        >
          Enter your vehicle registration
        </label>

        {/* UK Number Plate Styled Input Box */}
        <div className="relative flex items-center bg-[#F5D547] rounded-xl p-1.5 shadow-md border-2 border-[#102A43] focus-within:ring-4 focus-within:ring-[#16324F]/30 transition-all">
          {/* UK Left Blue Identifier Strip */}
          <div className="hidden sm:flex flex-col items-center justify-between bg-[#003399] text-white rounded-lg px-2.5 py-2 h-14 select-none shrink-0 mr-1.5">
            <span className="text-[10px] tracking-widest text-[#F5D547] font-bold">🇬🇧</span>
            <span className="text-xs font-black tracking-widest leading-none">UK</span>
          </div>

          <div className="relative flex-1 flex items-center">
            <input
              id="vehicle-reg-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="e.g. AB12 CDE"
              maxLength={10}
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              aria-invalid={errorMessage ? 'true' : 'false'}
              aria-describedby={errorMessage ? 'vehicle-reg-error' : 'vehicle-reg-hint'}
              className="w-full bg-transparent text-[#172B3A] placeholder-[#172B3A]/45 uk-number-plate text-2xl sm:text-3xl font-extrabold tracking-widest px-3 py-2 outline-none uppercase"
            />

            {/* Clear Button */}
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="p-2 text-[#172B3A]/70 hover:text-[#172B3A] rounded-full hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-[#102A43] mr-1 min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors"
                aria-label="Clear registration input"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        <p id="vehicle-reg-hint" className="text-xs text-slate-500 mt-2 text-left">
          Format check supports standard UK plates (e.g. AB12 CDE, A123 BCD, or 123 ABC).
        </p>

        {/* Error Message */}
        {errorMessage && (
          <div
            id="vehicle-reg-error"
            role="alert"
            className="flex items-start gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-2.5 text-left"
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3.5 px-6 bg-[#102A43] hover:bg-[#16324F] active:bg-[#0c2033] text-white font-bold text-base rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#16324F]/30 min-h-[48px] flex items-center justify-center gap-2"
      >
        <span>Check Insurance Status</span>
      </button>
    </form>
  );
}
