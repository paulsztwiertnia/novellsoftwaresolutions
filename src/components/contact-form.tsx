"use client";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useRef, useState } from "react";

const turnstileSiteKey = process.env.NODE_ENV === "development"
    ? "1x00000000000000000000AA"
    : (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "");

type TextField = {
    type: "text" | "email" | "tel" | "textarea";
    name: string;
    label: string;
    required?: boolean;
};

type CheckField = {
    type: "checks";
    name: string;
    label: string;
    options: string[];
};

export type ContactField = TextField | CheckField;

const inputClass = "mt-1 w-full rounded-md border border-line bg-white px-3 py-2 text-sm text-ink";

export function ContactForm({
    fields,
    id,
    source = "Contact",
    submitLabel = "Send",
}: {
    fields: ContactField[];
    id?: string;
    source?: string;
    submitLabel?: string;
}) {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [error, setError] = useState("");
    const [captchaToken, setCaptchaToken] = useState("");
    const turnstileRef = useRef<TurnstileInstance>(undefined);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!captchaToken) {
            setError("Complete the captcha.");
            setStatus("error");
            return;
        }

        setStatus("sending");
        setError("");

        const data = new FormData(event.currentTarget);
        const payload: Record<string, string | string[]> = {};
        for (const field of fields) {
            if (field.type === "checks") {
                payload[field.name] = data.getAll(field.name).map(String);
            } else {
                payload[field.name] = String(data.get(field.name) ?? "");
            }
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ source, fields: payload, captchaToken }),
            });
            const body = await response.json().catch(() => null);
            if (!response.ok) {
                setCaptchaToken("");
                turnstileRef.current?.reset();
                setError(typeof body?.error === "string" ? body.error : "Could not send your message.");
                setStatus("error");
                return;
            }
            setStatus("sent");
        } catch {
            setError("Could not send your message.");
            setStatus("error");
        }
    }

    if (status === "sent") {
        return <p className="rounded-md border border-line bg-surface px-4 py-6 text-center text-ink">Thank you. Your message has been sent.</p>;
    }

    return (
        <form id={id} onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-5">
                {fields.map((field) => {
                    if (field.type === "checks") {
                        return (
                            <fieldset key={field.name}>
                                <legend className="text-sm">{field.label}</legend>
                                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                                    {field.options.map((option) => (
                                        <label key={option} className="flex items-center gap-2 text-sm">
                                            <input type="checkbox" name={field.name} value={option} className="size-3.5" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                        );
                    }

                    return (
                        <div key={field.name}>
                            <label htmlFor={field.name} aria-required={field.required || undefined} className="mb-1 block text-sm font-medium">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea id={field.name} name={field.name} required={field.required} rows={4} className={inputClass} />
                            ) : (
                                <input id={field.name} name={field.name} type={field.type} required={field.required} className={inputClass} />
                            )}
                        </div>
                    );
                })}
            </div>
            {turnstileSiteKey ? (
                <Turnstile
                    ref={turnstileRef}
                    siteKey={turnstileSiteKey}
                    onSuccess={setCaptchaToken}
                    onExpire={() => setCaptchaToken("")}
                    onError={() => setCaptchaToken("")}
                />
            ) : (
                <p className="text-sm text-red-700">Captcha is unavailable.</p>
            )}
            {error ? <p className="text-sm text-red-700">{error}</p> : null}
            <button
                type="submit"
                disabled={status === "sending" || !captchaToken}
                className="rounded-[10px] border-2 border-brand bg-white px-8 py-3 font-display text-sm text-brand transition hover:bg-brand hover:text-white disabled:opacity-50"
            >
                {status === "sending" ? "Sending…" : submitLabel}
            </button>
        </form>
    );
}

export const contactFields: ContactField[] = [
    { type: "text", name: "name", label: "Name", required: true },
    { type: "tel", name: "telephone", label: "Telephone" },
    { type: "email", name: "email", label: "Email", required: true },
    { type: "textarea", name: "message", label: "Project Details (Optional)" },
];
