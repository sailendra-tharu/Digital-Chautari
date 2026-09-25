"use client";

import { Check, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

type ToastProps = {
  message: string;
  open: boolean;
  title?: string;
  variant?: "success" | "error";
  onClose: () => void;
};

export function Toast({ message, open, title, variant = "success", onClose }: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timeoutId = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timeoutId);
  }, [onClose, open]);

  const toastTitle = title ?? (variant === "success" ? "Message sent" : "Something went wrong");
  const isError = variant === "error";

  const content = (
    <div
      className={`toast ${open ? "toast-open" : ""} ${isError ? "toast-error" : ""}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-hidden={!open}
    >
      <span className="toast-icon" aria-hidden="true" style={{ background: isError ? "#d0534f" : "var(--teal)" }}>
        {isError ? <X size={18} /> : <Check size={18} />}
      </span>
      <span className="toast-copy">
        <strong>{toastTitle}</strong>
        <span>{message}</span>
      </span>
      <button className="toast-close" type="button" aria-label="Dismiss notification" onClick={onClose} tabIndex={open ? 0 : -1}>
        <X size={16} aria-hidden="true" />
      </button>
    </div>
  );

  return typeof document === "undefined" ? null : createPortal(content, document.body);
}
