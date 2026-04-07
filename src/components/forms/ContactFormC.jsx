"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useEmailJs } from "@/hooks/useEmails.js";
import SuccessModal from "@/components/SuccessModal";

const initialState = {
  from_name: "",
  from_email: "",
  phone: "",
  budget: "",
  deadline: "",
  project: "",
  website: "",
};

export default function ContactForm() {
  const [showModal, setShowModal] = useState(false);
  const handleSuccess = () => {
    setShowModal(true);
  };
  const { form, handleChange, handleSubmit, status, loading, todayISO } =
    useEmailJs(initialState, handleSuccess);

  return (
    <>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        autoComplete="off"
        className="bg-[#14161c] border border-white/5 rounded-2xl p-8 md:p-10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] space-y-6"
      >
        {/* Honeypot */}
        <div className="hidden">
          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            autoComplete="off"
            tabIndex={-1}
          />
        </div>

        {/* Nom */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="from_name" className="text-sm text-gray-400">
            Nom
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="from_email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Téléphone */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm text-gray-400">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="tel"
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Budget */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="budget" className="text-sm text-gray-400">
            Budget estimé
          </label>
          <input
            id="budget"
            type="text"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Deadline */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="deadline" className="text-sm text-gray-400">
            Date de livraison souhaitée
          </label>
          <input
            id="deadline"
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            required
            min={todayISO}
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition"
          />
        </div>

        {/* Projet */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="project" className="text-sm text-gray-400">
            Description du projet
          </label>
          <textarea
            id="project"
            name="project"
            rows="5"
            value={form.project}
            onChange={handleChange}
            required
            className="bg-[#0f1115] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-medium py-3 rounded-lg hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {/* Status */}
        {status.msg && (
          <div
            className={`text-sm ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.msg}
          </div>
        )}
      </motion.form>
      <SuccessModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
