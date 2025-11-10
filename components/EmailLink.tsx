"use client";

import { useState } from "react";
import { FaEnvelope, FaCheck, FaCopy } from "react-icons/fa";

interface EmailLinkProps {
  email: string;
  className?: string;
  showCopyButton?: boolean;
}

export default function EmailLink({ email, className = "", showCopyButton = false }: EmailLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={`mailto:${email}?subject=Portfolio Inquiry`}
        className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group flex-1"
      >
        <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
          <FaEnvelope className="text-primary-600 text-xl" />
        </div>
        <div className="flex-1">
          <p className="font-medium">Email</p>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </a>
      {showCopyButton && (
        <button
          onClick={handleCopy}
          className="p-2 text-gray-600 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-100"
          title={copied ? "Copied!" : "Copy email address"}
        >
          {copied ? (
            <FaCheck className="text-green-600" size={20} />
          ) : (
            <FaCopy size={20} />
          )}
        </button>
      )}
    </div>
  );
}

