"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { contactFormSchema, ContactFormSchema } from "@/lib/validation";

export const FooterContactForm: React.FC = () => {
  const pathname = usePathname();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState<string>("");
  const [savedSubmissionId, setSavedSubmissionId] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      honeypot: "",
      sourcePage: pathname || "Footer Form",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    // Prevent duplicate accidental submissions while in-flight
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setResponseMessage("");

    try {
      const payload = {
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        message: data.message.trim(),
        honeypot: data.honeypot || "",
        sourcePage: pathname || "Footer Contact Form",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Mandatory Browser Console Logging
        console.log("Contact form submitted successfully");
        console.log(`Submission ID: ${result.submissionId}`);
        console.log("Database Status: Saved");

        setSubmitStatus("success");
        setSavedSubmissionId(result.submissionId);
        setResponseMessage(
          result.message || "Thank you! Your message has been saved successfully in our system."
        );
        // Reset form ONLY on successful submission
        reset();
      } else {
        // Mandatory Browser Console Error Logging (without leaking secrets)
        console.error(`Contact form submission failed: ${result.message || "Validation or server error"}`);

        setSubmitStatus("error");
        setResponseMessage(
          result.message || "Failed to submit. Please check your information or try again."
        );
      }
    } catch (err: unknown) {
      console.error("Contact form network error: Unable to reach the server.");
      setSubmitStatus("error");
      setResponseMessage(
        "A network error occurred. Please verify your connection or try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
      <div className="mb-6">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-healing-400 mb-1">
          Quick Consultation Enquiry
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
          Send a Message to Sachin Karve
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Have questions about Quantum Healing Sessions, Masterclasses, or personal health issues? Fill in the details below.
        </p>
      </div>

      {submitStatus === "success" ? (
        <div className="bg-emerald-950/70 border border-emerald-500/50 rounded-xl p-6 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h4 className="text-lg font-bold text-white">Message Saved Successfully!</h4>
          <p className="text-sm text-emerald-200 leading-relaxed">{responseMessage}</p>
          {savedSubmissionId && (
            <div className="text-xs text-emerald-300/80 font-mono bg-emerald-900/40 py-1.5 px-3 rounded-lg inline-block border border-emerald-500/30">
              Reference ID: {savedSubmissionId}
            </div>
          )}
          <div>
            <button
              type="button"
              onClick={() => {
                setSubmitStatus("idle");
                setResponseMessage("");
                setSavedSubmissionId("");
              }}
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Send Another Enquiry</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Honeypot field for bot suppression */}
          <input
            type="text"
            {...register("honeypot")}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {submitStatus === "error" && (
            <div className="flex items-start gap-2.5 bg-rose-950/70 border border-rose-500/50 rounded-lg p-3 text-sm text-rose-200">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <span>{responseMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="footer-fullName" className="block text-xs font-medium text-slate-200 mb-1">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                id="footer-fullName"
                type="text"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName")}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 text-white placeholder-slate-500 border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-rose-500 focus:ring-rose-500/30"
                    : "border-slate-700 focus:border-healing-500 focus:ring-healing-500/30"
                }`}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p className="text-xs text-rose-400 mt-1 font-medium">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="footer-email" className="block text-xs font-medium text-slate-200 mb-1">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="e.g. rahul@example.com"
                {...register("email")}
                className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 text-white placeholder-slate-500 border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? "border-rose-500 focus:ring-rose-500/30"
                    : "border-slate-700 focus:border-healing-500 focus:ring-healing-500/30"
                }`}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="footer-phone" className="block text-xs font-medium text-slate-200 mb-1">
              Phone Number <span className="text-rose-400">*</span>
            </label>
            <input
              id="footer-phone"
              type="tel"
              placeholder="e.g. 9876543210 or +91 9819858269"
              {...register("phone")}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 text-white placeholder-slate-500 border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.phone
                  ? "border-rose-500 focus:ring-rose-500/30"
                  : "border-slate-700 focus:border-healing-500 focus:ring-healing-500/30"
              }`}
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-xs text-rose-400 mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="footer-message" className="block text-xs font-medium text-slate-200 mb-1">
              Your Message <span className="text-rose-400">*</span>
            </label>
            <textarea
              id="footer-message"
              rows={3}
              placeholder="Interested in a healing session or course details..."
              {...register("message")}
              className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 text-white placeholder-slate-500 border text-sm focus:outline-none focus:ring-2 transition-all resize-y ${
                errors.message
                  ? "border-rose-500 focus:ring-rose-500/30"
                  : "border-slate-700 focus:border-healing-500 focus:ring-healing-500/30"
              }`}
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1 font-medium">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-healing-600 to-healing-700 hover:from-healing-500 hover:to-healing-600 text-white font-semibold text-sm shadow-lg shadow-healing-700/30 focus:outline-none focus:ring-2 focus:ring-healing-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Saving to Database...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Contact Enquiry</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-slate-400 text-center">
            🔒 Your contact details are stored securely. No spam guaranteed.
          </p>
        </form>
      )}
    </div>
  );
};
