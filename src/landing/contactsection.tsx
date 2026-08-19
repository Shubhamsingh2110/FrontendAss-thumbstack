"use client";

import { FormEvent } from "react";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[27px] w-[27px]" fill="none">
      <path
        d="M13.7 21V12.8H16.5L16.9 9.5H13.7V7.45C13.7 6.5 14 5.85 15.1 5.85H17V2.9C16.65 2.85 15.55 2.75 14.25 2.75C11.5 2.75 9.65 4.45 9.65 7.5V9.5H6.8V12.8H9.65V21H13.7Z"
        fill="white"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[27px] w-[27px]" fill="none">
      <path
        d="M6.3 8.2H3V21H6.3V8.2ZM4.65 3C3.55 3 2.65 3.9 2.65 5C2.65 6.1 3.55 7 4.65 7C5.75 7 6.65 6.1 6.65 5C6.65 3.9 5.75 3 4.65 3ZM21.4 13.7C21.4 9.85 19.35 8.05 16.65 8.05C14.45 8.05 13.45 9.27 12.9 10.12V8.2H9.6V21H12.9V14.7C12.9 13.05 13.2 11.45 15.3 11.45C17.35 11.45 17.4 13.35 17.4 14.8V21H20.7L21.4 13.7Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[27px] w-[27px]" fill="none">
      <rect
        x="3.25"
        y="3.25"
        width="17.5"
        height="17.5"
        rx="5"
        stroke="url(#ig)"
        strokeWidth="2"
      />

      <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2" />

      <circle cx="17.35" cy="6.7" r="1.15" fill="#F7B733" />

      <defs>
        <linearGradient
          id="ig"
          x1="4"
          y1="20"
          x2="20"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEDA75" />
          <stop offset=".35" stopColor="#FA7E1E" />
          <stop offset=".65" stopColor="#D62976" />
          <stop offset="1" stopColor="#4F5BD5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[27px] w-[27px]" fill="none">
      <path
        d="M14.8 3H11.6V15.1C11.6 16.55 10.5 17.7 9.1 17.7C7.7 17.7 6.6 16.55 6.6 15.1C6.6 13.7 7.65 12.6 9 12.5V9.25C5.95 9.35 3.5 11.9 3.5 15.1C3.5 18.35 6 21 9.1 21C12.2 21 14.8 18.35 14.8 15.1V8.7C16.1 9.65 17.65 10.15 19.3 10.15V6.95C16.8 6.95 14.8 5.05 14.8 3Z"
        fill="white"
      />
    </svg>
  );
}

function SocialButton({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex
        h-[64px]
        w-[72px]
        items-center
        justify-center
        rounded-[12px]
        bg-[#303030]
      "
    >
      {children}
    </a>
  );
}

function InputField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="w-full">
      <label
        className="
          mb-[11px]
          block
          text-[15px]
          font-normal
          leading-[20px]
          text-[#aaa6aa]
        "
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          h-[64px]
          w-full
          rounded-[16px]
          border-0
          bg-[#303030]
          px-[20px]
          text-[16px]
          font-normal
          leading-[20px]
          text-white
          outline-none
          placeholder:text-[#aaa6aa]
          focus:ring-1
          focus:ring-[#28d9e5]
        "
      />
    </div>
  );
}

export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#101010]
        text-white
        mt-20
        md:mt-0
      "
    >
      {/* =====================================================
          DESKTOP / MOBILE MAIN CONTAINER
      ====================================================== */}
      <div
        className="
          w-full

          px-[20px]
          pt-[8px]
          pb-[9px]

          xl:px-[110px]
          xl:py-[55px]
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1

            xl:grid-cols-[minmax(0,1fr)_680px]
xl:gap-[20px]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div
            className="
              flex
              flex-col
              items-start

              xl:pt-[209px]
            "
          >
            <h2
              className="
                whitespace-nowrap
                text-[56px]
                font-normal
                leading-[1]
                tracking-[0px]

                xl:text-[68px]
                xl:font-semibold
                xl:leading-[1]
                xl:tracking-[0px]
              "
            >
              Let’s Connect
            </h2>

            <p
              className="
                mt-[29px]
                max-w-[420px]
                text-[20px]
                font-normal
                leading-[1.5]
                tracking-[-0.35px]

                xl:mt-[43px]
                xl:max-w-[480px]
                xl:text-[29px]
                xl:font-normal
                xl:leading-[1.48]
                xl:tracking-[0px]
              "
            >
              Need assistance? We’d love to <br /> hear from you.
            </p>
          </div>

          {/* =================================================
              FORM
          ================================================== */}
          <form
            onSubmit={handleSubmit}
            className="
              mt-[27px]
              w-full
              rounded-[16px]
              bg-[#211f1f]
              px-[38px]
              py-[31px]

              xl:mt-0
              xl:min-h-[681px]
              xl:px-[37px]
              xl:py-[42px]
            "
          >
            {/* NAME */}
            <InputField label="Name" placeholder="Enter Name" />

            {/* EMAIL */}
            <div className="mt-[47px]">
              <InputField
                label="Email"
                placeholder="Enter Email"
                type="email"
              />
            </div>

            {/* MESSAGE */}
            <div className="mt-[34px] w-full">
              <label
                className="
                  mb-[11px]
                  block
                  text-[15px]
                  font-normal
                  leading-[20px]
                  text-[#aaa6aa]
                "
              >
                Message
              </label>

              <textarea
                placeholder="Enter Message"
                className="
                  h-[175px]
                  w-full
                  resize-none
                  rounded-[16px]
                  border-0
                  bg-[#303030]
                  px-[20px]
                  py-[16px]
                  text-[16px]
                  font-normal
                  leading-[24px]
                  text-white
                  outline-none
                  placeholder:text-[#aaa6aa]
                  focus:ring-1
                  focus:ring-[#28d9e5]
                "
              />
            </div>

            {/* CONNECT */}
            <button
              type="submit"
              className="
                mt-[58px]
                flex
                h-[73px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#20dce5]
                to-[#2495f3]
                text-[22px]
                font-normal
                leading-[24px]
                text-black
              "
            >
              Connect
            </button>
          </form>

          {/* =================================================
              CAPITAL AG — MOBILE
          ================================================== */}
          <div
            className="
              mt-[15px]
              flex
              w-full
              flex-col
              items-center
              rounded-[16px]
              bg-[#211f1f]
              px-[12px]
              py-[29px]

              xl:hidden
            "
          >
            <h3
              className="
                text-[23px]
                font-semibold
                leading-[28px]
              "
            >
              View Capital AG
            </h3>

            <p
              className="
                mt-[9px]
                text-center
                text-[18px]
                font-normal
                leading-[25px]
                text-[#aaa6aa]
              "
            >
              Bahnhofweg 1, 6405 Immensee, Switzerland
            </p>

            <div
              className="
                mt-[17px]
                flex
                items-center
                justify-center
                gap-[12px]
              "
            >
              <SocialButton href="#" label="Facebook">
                <FacebookIcon />
              </SocialButton>

              <SocialButton href="#" label="LinkedIn">
                <LinkedinIcon />
              </SocialButton>

              <SocialButton href="#" label="Instagram">
                <InstagramIcon />
              </SocialButton>

              <SocialButton href="#" label="TikTok">
                <TikTokIcon />
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}