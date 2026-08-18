"use client";

import Link from "next/link";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
    >
      <path
        d="M13.6 21V12.7H16.4L16.8 9.45H13.6V7.38C13.6 6.44 13.86 5.8 15.02 5.8H16.92V2.89C16.59 2.85 15.47 2.75 14.17 2.75C11.45 2.75 9.58 4.41 9.58 7.46V9.45H6.75V12.7H9.58V21H13.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
    >
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.7" r="1.05" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
    >
      <path
        d="M6.25 8.25H2.95V21H6.25V8.25ZM4.6 3C3.5 3 2.6 3.9 2.6 5C2.6 6.1 3.5 7 4.6 7C5.7 7 6.6 6.1 6.6 5C6.6 3.9 5.7 3 4.6 3ZM21.4 13.7C21.4 9.85 19.35 8.05 16.62 8.05C14.4 8.05 13.42 9.27 12.88 10.12V8.25H9.58V21H12.88V14.7C12.88 13.04 13.2 11.43 15.28 11.43C17.33 11.43 17.36 13.34 17.36 14.81V21H20.66L21.4 13.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[22px] w-[22px]"
      aria-hidden="true"
    >
      <path
        d="M15.3 3H12.1V15.1C12.1 16.55 10.95 17.72 9.52 17.72C8.09 17.72 6.94 16.55 6.94 15.1C6.94 13.67 8.06 12.53 9.45 12.48V9.23C6.28 9.28 3.75 11.87 3.75 15.1C3.75 18.35 6.34 21 9.52 21C12.7 21 15.3 18.35 15.3 15.1V8.75C16.56 9.65 18.1 10.18 19.75 10.18V6.95C17.25 6.95 15.3 5.03 15.3 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SocialIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="
        flex h-[40px] w-[40px]
        items-center justify-center
        rounded-full
        border border-[#b2b2b8]
        text-[#b2b2b8]
        transition-colors
        duration-200
        hover:text-white
      "
    >
      {children}
    </Link>
  );
}

const services = [
  "Shops with cashback",
  "Special Deals & Vouchers",
  "How it works",
  "Bring friends to Iceback",
];

const about = [
  "Who we are",
  "Polar bears deserve to have enough ice!",
  "FAQ",
  "Bring friends to Iceback",
];

const iceback = ["Donation projects", "Become a partner"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#191919] text-white">
      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div
        className="
          min-h-[677px]
          w-full
          px-[6px]
          py-[45px]

          md:min-h-[677px]
          md:px-0
          md:py-0
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            grid-cols-1

            md:min-h-[677px]
            md:max-w-none
            md:grid-cols-[1fr_399px_370px]
            md:gap-0
            md:px-[127px]
          "
        >
          {/* =========================
              LOGO / CTA
          ========================== */}
          <div
            className="
              flex
              flex-col
              items-start

              md:pt-[202px]
            "
          >
            <Link
              href="/"
              className="
                block
                whitespace-nowrap
                text-[52px]
                font-normal
                leading-[1]
                tracking-[-2.8px]

                md:text-[68px]
                md:tracking-[-3.8px]
              "
            >
              <span className="font-bold">Money</span>
              <span className="font-normal">Back</span>
            </Link>

            {/* Mobile CTA */}
            <Link
              href="#start"
              className="
                mt-[70px]
                flex
                h-[59px]
                w-full
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#20d9df]
                to-[#2497f4]
                text-[16px]
                font-medium
                text-black
                md:hidden
              "
            >
              Start Free
            </Link>
          </div>

          {/* =========================
    RIGHT CONTENT
========================== */}
          <div
            className="
    mt-[61px]
    flex
    flex-col

    md:col-span-2
    md:mt-0
    md:grid
    md:grid-cols-[399px_1fr]
    md:grid-rows-[auto_1fr]
    md:pt-[163px]
  "
          >
            {/* =========================
      SERVICES
  ========================== */}
            <div className="md:col-start-1 md:row-start-1">
              <h3 className="text-[20px] font-normal leading-[24px] text-white">
                Services
              </h3>

              <div className="mt-[20px] flex flex-col text-[#B2B2B8] gap-[20px]">
                {services.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="
            block
            text-[20px]
            font-normal
            leading-[24px]
            text-[#b2b2b8]
          "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================
      ABOUT
  ========================== */}
            <div
              className="
      mt-[71px]

      md:col-start-2
      md:row-start-1
      md:mt-0
    "
            >
              <h3 className="text-[20px] font-normal leading-[24px] text-white">
                About us
              </h3>

              <div className="mt-[20px] flex flex-col text-[#B2B2B8] gap-[20px]">
                {about.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="
            block
            max-w-[290px]
            text-[20px]
            font-normal
            leading-[24px]
            text-[#b2b2b8]
          "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================
      ICEBACK
  ========================== */}
            <div
              className="
      mt-[71px]

      md:col-start-1
      md:row-start-2
      md:mt-0
      md:pt-[57px]
    "
            >
              <h3 className="text-[20px] font-normal leading-[24px] text-white">
                IceBack
              </h3>

              <div className="mt-[20px] flex flex-col text-[#B2B2B8] gap-[20px]">
                {iceback.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="
            block
            text-[20px]
            font-normal
            leading-[24px]
            text-[#B2B2B8]
          "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* =========================
      SOCIAL ICONS
  ========================== */}
            <div
              className="
      mt-[94px]

      md:col-start-2
      md:row-start-2
      md:mt-0
      md:flex
      md:items-start
      md:pt-[130px]
    "
            >
              <div className="flex items-center gap-[20px]">
                <SocialIcon href="#" label="Facebook">
                  <FacebookIcon />
                </SocialIcon>

                <SocialIcon href="#" label="Instagram">
                  <InstagramIcon />
                </SocialIcon>

                <SocialIcon href="#" label="LinkedIn">
                  <LinkedinIcon />
                </SocialIcon>

                <SocialIcon href="#" label="TikTok">
                  <TikTokIcon />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          COPYRIGHT
      ========================== */}
      <div
        className="
          min-h-[87px]
          w-full
          border-t
          border-[#242424]
          px-[8px]
          py-[19px]

          md:px-[128px]
          md:py-[39px]
        "
      >
        <p
          className="
            max-w-[1600px]
            text-[15px]
            font-normal
            leading-[20px]
            text-[#666669]

            md:text-[15px]
            md:leading-[20px]
          "
        >
          ©️ 2025 IceBack. All content, images, graphics, logos, designs, and
          text on this website are the property of IceBack and are protected by
          copyright laws. Unauthorized use, reproduction, or distribution of any
          content on this site is strictly prohibited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}