"use client";

import React, { useState } from "react";

const PROJECT_TYPES = [
  "Portfolio",
  "Business website",
  "E-commerce store",
  "Web app",
  "Redesign of a site",
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

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
  "Not sure yet",
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
  const totalSteps = 4;

  const [projectType, setProjectType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
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

  const validateCurrentStep = (): boolean => {
    setErrorMsg("");
    setInvalidFields({});

    if (currentStep === 0) {
      if (!projectType) {
        setErrorMsg("Choose the type of project to continue.");
        return false;
      }
    }

    if (currentStep === 3) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
      const newInvalids: { [key: string]: boolean } = {};

      if (!name.trim()) {
        newInvalids.name = true;
        setInvalidFields(newInvalids);
        setErrorMsg("Enter your name.");
        return false;
      }

      if (!emailOk) {
        newInvalids.email = true;
        setInvalidFields(newInvalids);
        setErrorMsg("Enter a valid email address so I can reply.");
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
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
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
      setErrorMsg("Your inquiry didn't send. Check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const firstName = name.trim().split(" ")[0] || "there";

  return (
    <div className="inquiry-card shadow-2xl">
      {!isSuccess ? (
        <div>
          <h2 className="inquiry-h2">Send an Inquiry</h2>
          <p className="inquiry-sub">
            Tell me what you want to build. I&apos;ll review it and reply with a quote.
          </p>

          {/* Progress bar */}
          <div className="inquiry-progress" aria-hidden="true">
            {[0, 1, 2, 3].map((stepIdx) => (
              <span
                key={stepIdx}
                className={stepIdx <= currentStep ? "done" : ""}
              />
            ))}
          </div>
          <p className="inquiry-step-count" aria-live="polite">
            Step {currentStep + 1} of {totalSteps}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            noValidate
          >
            {/* Step 1: Project Type */}
            {currentStep === 0 && (
              <fieldset className="border-0 p-0 m-0">
                <legend className="inquiry-legend">What are you building? *</legend>
                <div className="inquiry-options">
                  {PROJECT_TYPES.map((type) => (
                    <label key={type} className="inquiry-opt">
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={projectType === type}
                        onChange={() => {
                          setProjectType(type);
                          setErrorMsg("");
                        }}
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                {errorMsg && (
                  <p className="inquiry-error" role="alert">
                    {errorMsg}
                  </p>
                )}
              </fieldset>
            )}

            {/* Step 2: Features Needed */}
            {currentStep === 1 && (
              <fieldset className="border-0 p-0 m-0">
                <legend className="inquiry-legend">Features you need</legend>
                <p className="inquiry-hint">
                  Pick everything that applies. You can skip this if you&apos;re not sure.
                </p>
                <div className="inquiry-options" style={{ marginTop: "12px" }}>
                  {FEATURES_LIST.map((feat) => (
                    <label key={feat} className="inquiry-opt check">
                      <input
                        type="checkbox"
                        name="features"
                        value={feat}
                        checked={features.includes(feat)}
                        onChange={() => toggleFeature(feat)}
                      />
                      <span>{feat}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            )}

            {/* Step 3: Budget and Timeline */}
            {currentStep === 2 && (
              <fieldset className="border-0 p-0 m-0">
                <legend
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                  }}
                >
                  Budget and timeline
                </legend>
                <div className="inquiry-field">
                  <label className="inquiry-lbl" htmlFor="budget">
                    Estimated project budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="inquiry-select"
                  >
                    <option value="">Select a range</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="inquiry-field" style={{ marginBottom: 0 }}>
                  <label className="inquiry-lbl" htmlFor="timeline">
                    When do you need it?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="inquiry-select"
                  >
                    <option value="">Select a timeframe</option>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </fieldset>
            )}

            {/* Step 4: Contact Details */}
            {currentStep === 3 && (
              <fieldset className="border-0 p-0 m-0">
                <legend
                  style={{
                    position: "absolute",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                    clip: "rect(0 0 0 0)",
                  }}
                >
                  Your details
                </legend>
                <div className="inquiry-row inquiry-field">
                  <div>
                    <label className="inquiry-lbl" htmlFor="inquiry-name">
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
                      className={`inquiry-input ${
                        invalidFields.name ? "inquiry-invalid" : ""
                      }`}
                    />
                  </div>

                  <div>
                    <label className="inquiry-lbl" htmlFor="inquiry-email">
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
                      className={`inquiry-input ${
                        invalidFields.email ? "inquiry-invalid" : ""
                      }`}
                    />
                  </div>
                </div>

                <div className="inquiry-field" style={{ marginBottom: 0 }}>
                  <label className="inquiry-lbl" htmlFor="inquiry-notes">
                    Anything else I should know?
                  </label>
                  <textarea
                    id="inquiry-notes"
                    name="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Links to sites you like, deadlines, or goals for the project..."
                    className="inquiry-textarea"
                  />
                </div>

                {errorMsg && (
                  <p className="inquiry-error" role="alert">
                    {errorMsg}
                  </p>
                )}
              </fieldset>
            )}

            {/* Form Action Buttons */}
            <div className="inquiry-actions">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inquiry-btn inquiry-btn-back"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="inquiry-btn inquiry-btn-primary"
              >
                <span>
                  {isSubmitting
                    ? "Sending..."
                    : currentStep === totalSteps - 1
                    ? "Submit Project Inquiry"
                    : "Continue"}
                </span>

                {currentStep === totalSteps - 1 ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
            </div>
          </form>

          <p className="inquiry-reply-note">I reply within 24 to 48 hours.</p>
        </div>
      ) : (
        <div className="inquiry-success">
          <div className="inquiry-tick">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#11140a"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
          <h3>Inquiry sent</h3>
          <p>
            Thanks, <span className="text-[#f5f4f2] font-semibold">{firstName}</span>.
            I&apos;ll review your project and email you a quote within 24 to 48 hours.
          </p>

          <button
            type="button"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(0);
              setProjectType("");
              setFeatures([]);
              setBudget("");
              setTimeline("");
              setName("");
              setEmail("");
              setNotes("");
            }}
            className="mt-6 px-5 py-2.5 rounded-xl bg-[#FCFAF7] border border-[#D9D1C5] text-xs font-mono text-[#1A1614] hover:border-[#E8341C] transition-colors cursor-pointer"
          >
            Send another inquiry
          </button>
        </div>
      )}
    </div>
  );
}
