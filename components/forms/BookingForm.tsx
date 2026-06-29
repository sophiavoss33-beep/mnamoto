"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  make: z.string().min(1, "Please enter the make of your bike"),
  model: z.string().min(1, "Please enter the model"),
  year: z.string().min(4, "Please enter the year"),
  serviceType: z.string().min(1, "Please select a service type"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const serviceTypes = [
  "Logbook Service",
  "General Service",
  "Major Service",
  "Engine Repair",
  "Tyre Supply & Fitting",
  "Suspension Setup",
  "Electrical Repair",
  "Accessory Fitting",
  "Pre-Purchase Inspection",
  "Race Prep",
  "Other",
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // In production: POST to /api/booking
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#f5f5f3] rounded-2xl p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h2 className="font-[family-name:var(--font-display)] text-[28px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
          Booking Request Received
        </h2>
        <p className="text-[16px] text-[#888] leading-relaxed max-w-[400px] mx-auto">
          Thanks! Our workshop team will confirm your appointment within one business day. Check your email for a confirmation.
        </p>
      </div>
    );
  }

  const inputClass = "w-full h-12 px-4 bg-[#f5f5f3] border-2 border-transparent focus:border-[#cc1f1f] focus:bg-white rounded-lg text-[14px] text-[#1a1a1a] outline-none transition-all placeholder-[#aaa]";
  const errorClass = "text-red-500 text-[12px] mt-1.5 font-medium";
  const labelClass = "block text-[12px] font-bold tracking-[0.04em] uppercase text-[#888] mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Personal details */}
      <div className="bg-[#f5f5f3] rounded-2xl p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Your Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name</label>
            <input id="name" type="text" placeholder="Jane Smith" className={inputClass} {...register("name")} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <input id="phone" type="tel" placeholder="04XX XXX XXX" className={inputClass} {...register("phone")} />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="email" className={labelClass}>Email Address</label>
            <input id="email" type="email" placeholder="jane@example.com" className={inputClass} {...register("email")} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
        </div>
      </div>

      {/* Bike details */}
      <div className="bg-[#f5f5f3] rounded-2xl p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Vehicle Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label htmlFor="make" className={labelClass}>Make</label>
            <input id="make" type="text" placeholder="e.g. KTM" className={inputClass} {...register("make")} />
            {errors.make && <p className={errorClass}>{errors.make.message}</p>}
          </div>
          <div>
            <label htmlFor="model" className={labelClass}>Model</label>
            <input id="model" type="text" placeholder="e.g. 450 EXC-F" className={inputClass} {...register("model")} />
            {errors.model && <p className={errorClass}>{errors.model.message}</p>}
          </div>
          <div>
            <label htmlFor="year" className={labelClass}>Year</label>
            <input id="year" type="text" placeholder="e.g. 2024" className={inputClass} {...register("year")} />
            {errors.year && <p className={errorClass}>{errors.year.message}</p>}
          </div>
        </div>
      </div>

      {/* Service details */}
      <div className="bg-[#f5f5f3] rounded-2xl p-6 md:p-8">
        <h2 className="font-[family-name:var(--font-display)] text-[18px] font-bold text-[#1a1a1a] mb-6 tracking-tight">
          Service Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="serviceType" className={labelClass}>Service Type</label>
            <select
              id="serviceType"
              className={`${inputClass} cursor-pointer`}
              {...register("serviceType")}
            >
              <option value="">Select service type…</option>
              {serviceTypes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.serviceType && <p className={errorClass}>{errors.serviceType.message}</p>}
          </div>
          <div>
            <label htmlFor="preferredDate" className={labelClass}>Preferred Date</label>
            <input
              id="preferredDate"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className={inputClass}
              {...register("preferredDate")}
            />
            {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
          </div>
          <div className="md:col-span-2">
            <label htmlFor="notes" className={labelClass}>Additional Notes (optional)</label>
            <textarea
              id="notes"
              rows={4}
              placeholder="Describe any specific issues, what you'd like done, or anything the team should know…"
              className={`${inputClass} h-auto py-3 resize-none`}
              {...register("notes")}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 bg-[#cc1f1f] hover:bg-[#a81818] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-[16px] rounded-xl transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(204,31,31,0.4)]"
      >
        {isSubmitting ? "Submitting…" : "Submit Booking Request"}
      </button>

      <p className="text-[12px] text-[#aaa] text-center leading-relaxed">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="text-[#cc1f1f] hover:underline">Privacy Policy</a>.
        Our workshop team will contact you within one business day to confirm your appointment.
      </p>
    </form>
  );
}
