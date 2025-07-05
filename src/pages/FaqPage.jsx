import React, { useState } from "react";
import faqs from "../data/faq"; // Assuming you have a faqs.js file in data folder
import "./FaqPage.css";

export default function FaqPage() {
  const [open, setOpen] = useState(null);

  const toggle = idx => setOpen(open === idx ? null : idx);

  return (
    <section className="faq-page">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
            <button className="faq-question" onClick={() => toggle(i)}>
              {faq.question}
              <span className="faq-toggle">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
