import Link from "next/link";

const columns = [
  {
    title: "IceBack",
    links: ["Donation projects", "Become a partner"],
  },
  {
    title: "Services",
    links: [
      "Shops with cashback",
      "Special Deals & Vouchers",
      "How it works",
      "Bring friends to Iceback",
    ],
  },
  {
    title: "About us",
    links: [
      "Who we are",
      "Polar bears deserve to have enough ice!",
      "FAQ",
      "Bring friends to Iceback",
    ],
  },
] as const;

const socials = ["Facebook", "Instagram", "LinkedIn", "TikTok"] as const;

function FooterNav({ column }: { column: (typeof columns)[number] }) {
  return (
    <nav aria-label={column.title}>
      <h2 className="text-xl font-normal">{column.title}</h2>
      <ul className="mt-4 grid gap-3 text-lg leading-[1.35] text-[#b2b2b8] max-[560px]:gap-4">
        {column.links.map((item) => (
          <li key={item}>
            <Link className="transition-colors hover:text-white focus-visible:text-white" href="#">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function SocialIcon({ label }: { label: (typeof socials)[number] }) {
  if (label === "Facebook") {
    return <span className="text-[27px] leading-none font-bold">f</span>;
  }

  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return <span className="text-[17px] leading-none font-bold">in</span>;
  }

  return <span className="text-[24px] leading-none font-bold">♪</span>;
}

export default function Footer() {
  return (
    <footer className="min-h-[90vh] bg-[#191919] text-white [font-family:Inter,Arial,sans-serif]">
      <div className="mx-auto grid min-h-[90vh] w-[85.5%] grid-cols-[1fr_600px] gap-x-16 pt-[140px] pb-20 max-[860px]:w-full max-[860px]:grid-cols-1 max-[860px]:px-8 max-[860px]:pt-16 max-[560px]:gap-0 max-[560px]:px-[13px] max-[560px]:pt-9 max-[560px]:pb-7">
        <div className="mt-9 max-[860px]:mt-0">
          <Link
            className="text-[56px] leading-none tracking-[-2px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[560px]:text-[40px]"
            href="#top"
          >
            <strong>Money</strong>Back
          </Link>

          <Link
            className="mt-14 hidden min-h-11 w-full place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-lg font-semibold text-black max-[860px]:grid"
            href="#get-started"
          >
            Start Free
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-20 max-[860px]:mt-14 max-[860px]:block">
          <div>
            <FooterNav column={columns[1]} />
            <div className="mt-[68px] max-[860px]:mt-12">
              <FooterNav column={columns[0]} />
            </div>
          </div>

          <div className="max-[860px]:mt-12">
            <FooterNav column={columns[2]} />
            <div className="mt-[108px] flex gap-4 max-[860px]:mt-16">
              {socials.map((label) => (
                <Link
                  className="grid size-9 place-items-center rounded-full border border-[#aaa] text-[#aaa] transition-colors hover:border-white hover:text-white"
                  href="#"
                  aria-label={label}
                  key={label}
                >
                  <SocialIcon label={label} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sr-only">
        <p className="max-w-300 text-lg leading-[1.45] text-[#68686b]">
          © 2025 IceBack. All content, images, graphics, logos, designs, and text on this website are the property of IceBack and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any content on this site is strictly prohibited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
