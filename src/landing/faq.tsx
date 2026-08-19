"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do i have to pay something for the iceback shop?",
    answer:
      "No, you don't have to pay anything extra for using the IceBack shop. You can shop as usual and receive cashback on eligible purchases.",
  },
  {
    question: "What should i know about cashback",
    answer:
      "As soon as you made your purchase, we will wait until the return period has expired and then the shop will credit the money to your account. With one click on your amount (will always be displayed on the top of the site, when you are logged in) you can donate your cashback or pay it out directly. If you have a free ice-back prepaid Mastercard you will benefit from additional cashback and you can directly pay out your cashback on your account. Your credit will be shown on your dashboard within 24 hours.",
  },
  {
    question: "How should i order a prepaid iceback Mastercard",
    answer:
      "You can order your prepaid IceBack Mastercard directly through your IceBack account. Follow the card-ordering process and complete the required information.",
  },
  {
    question: "How does the browser extension work?",
    answer:
      "The browser extension alerts you when cashback is available and helps you activate the offer before completing your purchase.",
    desktopOnly: true,
  },
  {
    question: "How do i order on iceback from my favourite shop?",
    answer:
      "Choose your favourite shop from IceBack, activate the cashback offer and continue to the shop. Complete your purchase through the redirected shop and your cashback will be tracked automatically.",
  },
] as const;

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="m5 9 7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#101010] text-white [font-family:Inter,Arial,sans-serif]">
      <div className="mx-auto w-full max-w-[1438px] px-4 pt-[68px] pb-[60px] md:px-30 md:pt-26 md:pb-28">
        <h2 className="text-[46px] leading-none font-normal tracking-[-1.5px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] md:text-[68px] md:font-bold md:tracking-[-2.5px]">
          FAQS
        </h2>
        <p className="mt-8 max-w-82 text-[19px] leading-[1.5] md:mt-7 md:max-w-none md:text-[32px]">
          Everything you need to know, all in one place.
        </p>

        <div className="mt-5 md:mt-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`mb-2.5 md:mb-0 md:border-b md:border-[#3d3d3d] ${"desktopOnly" in faq && faq.desktopOnly ? "max-md:hidden" : ""}`}
                key={faq.question}
              >
                <button
                  className={`flex min-h-12.5 w-full items-center justify-between bg-[#211f1f] px-3 text-left text-[12px] font-medium md:min-h-23 md:rounded-none md:bg-transparent md:px-0 md:text-[16px] ${isOpen ? "rounded-t-[10px]" : "rounded-[10px]"}`}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="pr-3 text-[clamp(11px,3.45vw,13px)] whitespace-nowrap md:pr-4 md:text-[16px] md:whitespace-normal">
                    {faq.question}
                  </span>
                  <Chevron open={isOpen} />
                </button>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="rounded-b-[10px] bg-[#211f1f] px-3 pb-4 text-[13px] leading-[1.55] text-[#ddd] md:max-w-255 md:rounded-none md:bg-transparent md:px-0 md:pb-9 md:text-xl md:leading-[1.55]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
