"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Send, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "Portfolio",
  "Business website",
  "E-commerce store",
  "Web app",
  "Site redesign",
  "Something else",
];

const FEATURES_LIST = [
  "Contact form",
  "Blog",
  "Online booking",
  "Online payments",
  "Admin panel / CMS",
  "User accounts",
  "Multiple languages",
  "Animations",
  "SEO setup",
  "Logo / branding",
];

const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 month",
  "1 - 3 months",
  "3+ months",
  "Flexible",
];

export default function InquiryForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 3;

  const [projectType, setProjectType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [invalidFields, setInvalidFields] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleFeature = (item: string) => {
    setFeatures((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );
  };

  const handleSelectProjectType = (type: string) => {
    setProjectType(type);
    setErrorMsg("");
    // 200ms visual highlight feedback before advancing smoothly
    setTimeout(() => {
      setCurrentStep(1);
    }, 200);
  };

  const validateCurrentStep = (): boolean => {
    setErrorMsg("");
    setInvalidFields({});

    if (currentStep === 0) {
      if (!projectType) {
        setErrorMsg("Choose what you are building to continue.");
        return false;
      }
    }

    if (currentStep === 2) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      const newInvalids: { [key: string]: boolean } = {};

      if (!name.trim()) {
        newInvalids.name = true;
        setInvalidFields(newInvalids);
        setErrorMsg("Please enter your name.");
        return false;
      }

      if (!emailOk) {
        newInvalids.email = true;
        setInvalidFields(newInvalids);
        setErrorMsg("Please enter a valid email address.");
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    setInvalidFields({});
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg("");

    const payload = {
      name: name.trim(),
      email: email.trim(),
      projectType,
      features: features.length > 0 ? features.join(", ") : "None selected",
      timeline: timeline || "Flexible",
      notes: notes.trim() || "None",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
    } catch {
      setErrorMsg("Your request could not be sent. Please check your connection or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <div className="w-full bg-[#FCFAF7] border border-[#D9D1C5] rounded-[28px] p-6 sm:p-9 shadow-md transition-all">
      {!isSuccess ? (
        <div>
          {/* Card Header */}
          <h3 className="font-display font-bold text-2xl sm:text-[28px] text-[#1A1614] tracking-tight">
            Get a free quote
          </h3>

          {/* 3-Segment Progress Bar */}
          <div className="flex gap-2 sm:gap-2.5 my-4 sm:my-5" aria-hidden="true">
            {[0, 1, 2].map((stepIdx) => (
              <div
                key={stepIdx}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  stepIdx <= currentStep ? "bg-[#E8341C]" : "bg-[#D9D1C5]"
                }`}
              />
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            noValidate
          >
            {/* Step 1: Project Type (Auto-advance on click) */}
            {currentStep === 0 && (
              <fieldset className="border-0 p-0 m-0">
                <legend className="font-bold text-base sm:text-lg text-[#1A1614] mb-3.5 block">
                  What are you building?
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {PROJECT_TYPES.map((type) => {
                    const isSelected = projectType === type;
                    return (
                      <label
                        key={type}
                        className={`relative flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none ${
                          isSelected
                            ? "bg-[#FAF7F2] border-[#E8341C] shadow-2xs"
                            : "bg-[#FAF7F2] border-[#D9D1C5] hover:border-[#A89F93]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={type}
                          checked={isSelected}
                          onChange={() => handleSelectProjectType(type)}
                          className="sr-only"
                        />
                        {/* Radio Circle */}
                        <span
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected ? "border-[#E8341C]" : "border-[#C4BCB0]"
                          }`}
                        >
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#E8341C]" />
                          )}
                        </span>
                        <span className="text-sm sm:text-base font-medium text-[#1A1614]">
                          {type}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {errorMsg && (
                  <p className="text-xs sm:text-sm text-[#E8341C] mt-3" role="alert">
                    {errorMsg}
                  </p>
                )}

                <p className="text-center text-xs sm:text-sm text-[#6B625A] mt-5">
                  Free, no commitment.
                </p>
              </fieldset>
            )}

            {/* Step 2: Features Needed */}
            {currentStep === 1 && (
              <fieldset className="border-0 p-0 m-0">
                <legend className="font-bold text-base sm:text-lg text-[#1A1614] mb-1 block">
                  What features do you need?
                </legend>
                <p className="text-xs sm:text-sm text-[#6B625A] mb-3.5">
                  Pick everything that applies (optional).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FEATURES_LIST.map((feat) => {
                    const isChecked = features.includes(feat);
                    return (
                      <label
                        key={feat}
                        className={`relative flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                          isChecked
                            ? "bg-[#FAF7F2] border-[#E8341C] shadow-2xs"
                            : "bg-[#FAF7F2] border-[#D9D1C5] hover:border-[#A89F93]"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name="features"
                          value={feat}
                          checked={isChecked}
                          onChange={() => toggleFeature(feat)}
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? "border-[#E8341C] bg-[#E8341C]"
                              : "border-[#C4BCB0]"
                          }`}
                        >
                          {isChecked && (
                            <Check className="w-3 h-3 text-white stroke-[2.5]" />
                          )}
                        </span>
                        <span className="text-sm font-medium text-[#1A1614]">
                          {feat}
                        </span>
                      </label>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 rounded-xl border border-[#D9D1C5] hover:border-[#1A1614] text-sm font-medium text-[#1A1614] transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#E8341C] hover:brightness-105 text-white font-bold text-sm transition-all cursor-pointer shadow-xs active:translate-y-px"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-center text-xs sm:text-sm text-[#6B625A] mt-5">
                  Free, no commitment.
                </p>
              </fieldset>
            )}

            {/* Step 3: Your Details & Timeline */}
            {currentStep === 2 && (
              <fieldset className="border-0 p-0 m-0">
                <legend className="font-bold text-base sm:text-lg text-[#1A1614] mb-4 block">
                  Your details &amp; timeline
                </legend>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B625A] mb-1.5"
                      htmlFor="inquiry-name"
                    >
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="inquiry-name"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (invalidFields.name) {
                          setInvalidFields((prev) => ({ ...prev, name: false }));
                          setErrorMsg("");
                        }
                      }}
                      placeholder="Sarah Connor"
                      autoComplete="name"
                      className={`w-full bg-[#FAF7F2] border rounded-xl text-sm text-[#1A1614] p-3 transition-all focus:outline-none focus:border-[#E8341C] focus:ring-2 focus:ring-[#E8341C]/15 ${
                        invalidFields.name ? "border-[#E8341C]" : "border-[#D9D1C5]"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider text-[#6B625A] mb-1.5"
                      htmlFor="inquiry-email"
                    >
                      Email address *
                    </label>
                    <input
                      type="email"
                      id="inquiry-email"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (invalidFields.email) {
                          setInvalidFields((prev) => ({ ...prev, email: false }));
                          setErrorMsg("");
                        }
                      }}
                      placeholder="sarah@company.com"
                      autoComplete="email"
                      className={`w-full bg-[#FAF7F2] border rounded-xl text-sm text-[#1A1614] p-3 transition-all focus:outline-none focus:border-[#E8341C] focus:ring-2 focus:ring-[#E8341C]/15 ${
                        invalidFields.email ? "border-[#E8341C]" : "border-[#D9D1C5]"
                      }`}
                    />
                  </div>
                </div>

                <div className="mb-3.5">
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B625A] mb-1.5"
                    htmlFor="timeline"
                  >
                    Target timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#FAF7F2] border border-[#D9D1C5] rounded-xl text-sm text-[#1A1614] p-3 transition-all focus:outline-none focus:border-[#E8341C] focus:ring-2 focus:ring-[#E8341C]/15 cursor-pointer"
                  >
                    <option value="">Select a timeframe</option>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider text-[#6B625A] mb-1.5"
                    htmlFor="inquiry-notes"
                  >
                    Project details &amp; notes
                  </label>
                  <textarea
                    id="inquiry-notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Tell me about your project goals, links to sites you like, or specific requirements..."
                    className="w-full bg-[#FAF7F2] border border-[#D9D1C5] rounded-xl text-sm text-[#1A1614] p-3 transition-all focus:outline-none focus:border-[#E8341C] focus:ring-2 focus:ring-[#E8341C]/15 resize-y"
                  />
                </div>

                {errorMsg && (
                  <p className="text-xs sm:text-sm text-[#E8341C] mb-4" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="flex items-center gap-3 mt-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 rounded-xl border border-[#D9D1C5] hover:border-[#1A1614] text-sm font-medium text-[#1A1614] transition-colors cursor-pointer"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#E8341C] hover:brightness-105 text-white font-bold text-sm transition-all cursor-pointer shadow-xs active:translate-y-px disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs sm:text-sm text-[#6B625A] mt-5">
                  Free, no commitment.
                </p>
              </fieldset>
            )}
          </form>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#E8341C] flex items-center justify-center text-white">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <h4 className="font-display font-bold text-2xl text-[#1A1614] mb-2">
            Quote request sent!
          </h4>
          <p className="text-sm text-[#6B625A] leading-relaxed max-w-sm mx-auto">
            Thanks, <span className="font-semibold text-[#1A1614]">{firstName}</span>. I&apos;ll review your requirements and reply with a quote within 24 hours.
          </p>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(0);
              setProjectType("");
              setFeatures([]);
              setTimeline("");
              setName("");
              setEmail("");
              setNotes("");
            }}
            className="mt-6 px-5 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#D9D1C5] text-xs font-mono text-[#1A1614] hover:border-[#E8341C] transition-colors cursor-pointer"
          >
            Request another quote
          </button>
        </div>
      )}
    </div>
  );
}
