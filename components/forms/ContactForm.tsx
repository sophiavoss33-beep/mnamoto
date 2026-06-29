"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  "General Enquiry",
  "New Motorcycle Enquiry",
  "Used Motorcycle Enquiry",
  "Finance Enquiry",
  "Workshop / Service",
  "Parts & Accessories",
  "Power Equipment",
  "Trade-in Valuation",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#f5f5f3] rounded-2xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={28} className="text-green-600" />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[#1a1a1a] mb-2">Message Sent</h3>
        <p className="text-[#888] text-[14px] leading-relaxed">
          Thanks for getting in touch. We&apos;ll respond within one business day.
        </p>
      </div>
    );
  }

  const inputClass = "w-full h-12 px-4 bg-[#f5f5f3] border-2 border-transparent focus:border-[#cc1f1f] focus:bg-white rounded-lg text-[14px] text-[#1a1a1a] outline-none transition-all placeholder-[#aaa]";
  const labelClass = "block text-[12px] font-bold tracking-[0.04em] uppercase text-[#888] mb-2";
  const errorClass = "text-red-500 text-[12px] mt-1.5 font-medium";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input id="name" type="text" placeholder="Jane Smith" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input id="phone" type="tel" placeholder="04XX XXX XXX" className={inputClass} {...register("phone")} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address</label>
        <input id="email" type="email" placeholder="jane@example.com" className={inputClass} {...register("email")} />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <select id="subject" className={`${inputClass} cursor-pointer`} {...register("subject")}>
          <option value="">Select a subject…</option>
          {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          rows={5}
          placeholder="How can we help you today?"
          className={`${inputClass} h-auto py-3.5 resize-none`}
          {...register("message")}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-13 py-4 bg-[#cc1f1f] hover:bg-[#a81818] disabled:opacity-60 text-white font-bold text-[15px] rounded-xl transition-all hover:-translate-y-px hover:shadow-[0_12px_32px_rgba(204,31,31,0.4)]"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
