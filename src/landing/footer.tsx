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

const socials = [
  ["f", "Facebook"],
  ["◎", "Instagram"],
  ["in", "LinkedIn"],
  ["♪", "TikTok"],
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#191919] text-white [font-family:Inter,Arial,sans-serif]">
      <div className="mx-auto grid w-full max-w-[1438px] grid-cols-[1fr_400px] gap-x-16 px-30 pt-23 pb-19 max-[860px]:grid-cols-1 max-[860px]:px-8 max-[560px]:gap-0 max-[560px]:px-[13px] max-[560px]:pt-9 max-[560px]:pb-7">
        <div>
          <Link
            className="text-[40px] tracking-[-1.5px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[560px]:text-[40px]"
            href="#top"
          >
            <strong>Money</strong>Back
          </Link>

          <Link
            className="mt-14 hidden min-h-11 w-full place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-[13px] font-semibold text-black max-[860px]:grid"
            href="#get-started"
          >
            Start Free
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-10 max-[860px]:block">
          {columns.map((column) => (
            <nav
              className={`${column.title === "IceBack" ? "col-start-1 row-start-2 mt-10" : column.title === "Services" ? "col-start-1 row-start-1" : "col-start-2 row-start-1"} max-[860px]:mt-12`}
              aria-label={column.title}
              key={column.title}
            >
              <h2 className="text-[13px] font-medium max-[560px]:text-[16px]">{column.title}</h2>
              <ul className="mt-4 grid gap-3 text-[12px] leading-[1.35] text-[#b2b2b8] max-[560px]:mt-4 max-[560px]:gap-4 max-[560px]:text-[16px]">
                {column.links.map((item) => (
                  <li key={item}>
                    <Link className="transition-colors hover:text-white focus-visible:text-white" href="#">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="col-start-2 mt-8 flex gap-3 max-[860px]:col-auto max-[860px]:mt-16">
          {socials.map(([mark, label]) => (
            <Link
              className="grid size-7 place-items-center rounded-full border border-[#aaa] text-[13px] font-semibold text-[#aaa] transition-colors hover:border-white hover:text-white"
              href="#"
              aria-label={label}
              key={label}
            >
              {mark}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1438px] px-30 pb-10 max-[860px]:px-8 max-[560px]:px-[13px] max-[560px]:pt-3 max-[560px]:pb-6">
        <p className="max-w-300 text-[9px] leading-[1.45] text-[#68686b]">
          © 2025 IceBack. All content, images, graphics, logos, designs, and text on this website are the property of IceBack and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any content on this site is strictly prohibited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
