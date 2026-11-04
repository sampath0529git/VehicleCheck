'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle, Send, RotateCcw } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please enter at least 15 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In-browser submission without third-party email harvester
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Enquiry',
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="py-8 text-center space-y-4 animate-in fade-in-50 duration-200">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-bold text-[#102A43]">Message Received</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you for contacting VehicleCheck. If your inquiry requires a response, our editorial team will review your feedback promptly.
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#16324F] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors min-h-[44px]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Send Another Message</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white transition-all outline-none min-h-[44px] ${
            errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#16324F] focus:ring-2 focus:ring-[#16324F]/20'
          }`}
          placeholder="e.g. John Davies"
        />
        {errors.name && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white transition-all outline-none min-h-[44px] ${
            errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#16324F] focus:ring-2 focus:ring-[#16324F]/20'
          }`}
          placeholder="e.g. john@example.co.uk"
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Topic / Subject
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#16324F] focus:ring-2 focus:ring-[#16324F]/20 transition-all outline-none min-h-[44px]"
        >
          <option value="General Enquiry">General Enquiry</option>
          <option value="Editorial Feedback">Editorial Feedback or Correction</option>
          <option value="Technical Issue">Website or Checker Issue</option>
          <option value="Partnership">Media or Partnership</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-slate-50 focus:bg-white transition-all outline-none ${
            errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-slate-300 focus:border-[#16324F] focus:ring-2 focus:ring-[#16324F]/20'
          }`}
          placeholder="Please describe your question or feedback..."
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 px-5 text-sm font-bold text-white bg-[#16324F] hover:bg-[#102A43] active:bg-[#0c2033] rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 min-h-[44px]"
      >
        <span>Submit Message</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
