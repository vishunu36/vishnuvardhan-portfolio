"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";

type SubmissionStatus = {
  kind: "error" | "success";
  message: string;
};

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT?.trim();

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!formEndpoint) {
      setStatus({
        kind: "error",
        message:
          "The contact form is not connected yet. Please use GitHub for now.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (!response.ok) {
        setStatus({
          kind: "error",
          message:
            "Your message could not be sent. Please try again or reach out on GitHub.",
        });
        return;
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not connect to the form service. Please try again or reach out on GitHub.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className="contact-section section-wrap"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">06 <span aria-hidden="true">/</span> CONTACT</p>
          <h2 id="contact-title">Let’s build something <em>meaningful.</em></h2>
          <p>
            Have a project, opportunity, or technical question in mind? Send a
            message and I’ll get back to you.
          </p>
          <a
            className="contact-github"
            href="https://github.com/vishunu36"
            target="_blank"
            rel="noreferrer"
          >
            Or connect on GitHub <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              autoComplete="name"
              id="contact-name"
              name="name"
              type="text"
              minLength={2}
              maxLength={80}
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              autoComplete="email"
              id="contact-email"
              name="email"
              type="email"
              maxLength={254}
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              minLength={20}
              maxLength={3000}
              required
            />
          </div>
          <button
            className="button button-primary contact-submit"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Send message"}
            <Send size={15} aria-hidden="true" />
          </button>
          {status && (
            <p
              className={`contact-status contact-status-${status.kind}`}
              role={status.kind === "error" ? "alert" : "status"}
              aria-live={status.kind === "error" ? "assertive" : "polite"}
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
