"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do i have to pay something for the iceback shop?",
    answer:
      "No, you don't have to pay anything extra for using the IceBack shop. You can shop as usual and receive cashback on eligible purchases.",
  },
  {
    question: "What should i know about cashback?",
    answer:
      "As soon as you made your purchase, we will wait until the return period has expired and then the shop will credit the money to your account. With one click on your amount (will always be displayed on the top of the site, when you are logged in) you can donate your cashback or pay it out directly. If you have a free ice-back prepaid Mastercard you will benefit from additional cashback and you can directly pay out your cashback on your account. Your credit will be shown on your dashboard within 24 hours.",
  },
  {
    question: "How should i order a prepaid iceback Mastercard?",
    answer:
      "You can order your prepaid IceBack Mastercard directly through your IceBack account. Follow the card-ordering process and complete the required information.",
  },
  {
    question: "How do i order on iceback from my favourite shop?",
    answer:
      "Choose your favourite shop from IceBack, activate the cashback offer and continue to the shop. Complete your purchase through the redirected shop and your cashback will be tracked automatically.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`
        shrink-0
        transition-transform
        duration-200
        ${open ? "rotate-180" : "rotate-0"}
      `}
      aria-hidden="true"
    >
      <path
        d="M5 9L12 16L19 9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        w-full
        bg-[#101010]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-full

          px-[16px]
          pt-[52px]
          pb-[74px]

          md:px-[7.45vw]
          md:pt-[105px]
          md:pb-[90px]
        "
      >
        {/* =================================
            HEADING
        ================================== */}
        <div
          className="
            mb-[27px]

            md:mb-[31px]
          "
        >
          <h2
            className="
              text-[55px]
              font-bold
              leading-[1]
              tracking-[-2.2px]

              md:text-[88px]
              md:leading-[0.98]
              md:tracking-[-4px]
            "
          >
            FAQS
          </h2>

          <p
            className="
              mt-[28px]
              max-w-[390px]
              text-[23px]
              font-normal
              leading-[1.5]
              tracking-[-0.4px]

              md:mt-[42px]
              md:max-w-none
              md:text-[31px]
              md:leading-[1.25]
              md:tracking-[-0.8px]
            "
          >
            Everything you need to know, all in one place.
          </p>
        </div>

        {/* =================================
            FAQ LIST
        ================================== */}
        <div
          className="
            w-full
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  mb-[15px]

                  md:mb-0
                  md:border-b
                  md:border-[#454545]
                "
              >
                {/* =================================
                    QUESTION BUTTON
                ================================== */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    text-left
                    outline-none

                    ${isOpen ? "rounded-t-[16px]" : "rounded-[16px]"}

                    bg-[#211f1f]

                    px-[16px]
                    py-[17px]

                    md:rounded-none
                    md:bg-transparent
                    md:px-[1px]
                    md:py-[0px]
                    md:min-h-[126px]
                  `}
                >
                  <span
                    className="
                      pr-[18px]
                      text-[16px]
                      font-medium
                      leading-[22px]

                      md:text-[23px]
                      md:font-semibold
                      md:leading-[28px]
                    "
                  >
                    {faq.question}
                  </span>

                  <span className="text-white">
                    <Chevron open={isOpen} />
                  </span>
                </button>

                {/* =================================
                    ANSWER
                ================================== */}
                <div
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        px-[16px]
                        pb-[22px]
                        pt-[2px]
                        text-[16px]
                        leading-[24px]
                        text-white

                        md:px-0
                        md:pb-[38px]
                        md:pt-[0px]
                        md:max-w-[1220px]
                        md:text-[22px]
                        md:leading-[31px]
                      "
                    >
                      {faq.answer}
                    </div>
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