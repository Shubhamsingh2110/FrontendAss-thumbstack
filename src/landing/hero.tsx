import Image from "next/image";

const navigation = [
  ["Mastercard", "#mastercard"],
  ["Cashback shops", "#cashback"],
  ["Special deals", "#deals"],
  ["Donation projects", "#donations"],
] as const;

type ActivityBadgeProps = {
  className: string;
  icon: string;
  message: string;
};

function ActivityBadge({ className, icon, message }: ActivityBadgeProps) {
  return (
    <div
      className={`absolute z-10 flex min-h-14 items-center gap-3 whitespace-nowrap rounded-full border border-white/50 bg-gradient-to-r from-slate-500/90 to-slate-600/90 py-2 pr-5 pl-2.5 text-sm font-bold text-white shadow-[inset_0_1px_0_rgb(255_255_255_/_18%),0_16px_32px_rgb(0_0_0_/_18%)] backdrop-blur-2xl max-[1100px]:text-[13px] max-[560px]:min-h-12 max-[560px]:gap-2 max-[560px]:py-1.5 max-[560px]:pr-3 max-[560px]:pl-1.5 max-[560px]:text-[10px] ${className}`}
    >
      <span
        className="grid size-[38px] shrink-0 place-items-center rounded-full bg-lime-100 text-[22px] max-[560px]:size-[34px] max-[560px]:text-[19px]"
        aria-hidden="true"
      >
        {icon}
      </span>
      <span>{message}</span>
    </div>
  );
}

function Header() {
  return (
    <header className="grid min-h-26 grid-cols-[auto_1fr_auto] items-center rounded-full border border-[#333] bg-[#171717]/70 px-8 backdrop-blur-lg max-[860px]:min-h-19 max-[860px]:px-5.5 max-[560px]:min-h-16.5 max-[560px]:pr-2.5 max-[560px]:pl-4.5">
      <a
        className="text-[30px] font-bold tracking-[-1.5px] text-white max-[860px]:text-2xl max-[560px]:text-[21px] max-[560px]:tracking-[-1px]"
        href="#top"
        aria-label="MoneyBack home"
      >
        MoneyBack
      </a>

      <nav
        className="flex justify-center gap-[clamp(28px,3.3vw,48px)] px-7 max-[1100px]:gap-5.5 max-[860px]:hidden"
        aria-label="Main navigation"
      >
        {navigation.map(([label, href]) => (
          <a
            className="whitespace-nowrap text-lg text-[#b7b7b7] transition-colors duration-200 hover:text-white focus-visible:text-white motion-reduce:transition-none max-[1100px]:text-[15px]"
            key={href}
            href={href}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="grid min-h-13 min-w-40 place-items-center rounded-full border border-[#11ccf5] text-[19px] font-bold text-[#12cef7] transition duration-200 hover:-translate-y-0.5 hover:bg-[#12cef7] hover:text-[#071114] focus-visible:-translate-y-0.5 focus-visible:bg-[#12cef7] focus-visible:text-[#071114] motion-reduce:transition-none max-[860px]:min-h-11 max-[860px]:min-w-29.5 max-[860px]:text-base max-[560px]:min-h-10.5 max-[560px]:min-w-26 max-[560px]:text-sm"
        href="#get-started"
      >
        Start free
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <main
      id="top"
      className="min-h-svh overflow-hidden bg-[#111] text-[#f8f8f8] [background-image:radial-gradient(circle_at_80%_62%,rgb(12_64_79_/_42%),transparent_31rem)]"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1180px)] pt-12 max-[860px]:w-[min(calc(100%-32px),680px)] max-[860px]:pt-5 max-[560px]:w-[min(calc(100%-24px),440px)]">
        <Header />

        <section
          className="grid min-h-[calc(100svh-153px)] grid-cols-[minmax(0,1fr)_minmax(430px,.74fr)] items-center gap-9.5 max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(380px,.7fr)] max-[860px]:min-h-0 max-[860px]:grid-cols-1 max-[860px]:pt-20 max-[860px]:text-center max-[560px]:pt-16"
          aria-labelledby="hero-heading"
        >
          <div className="relative z-10 pb-[5vh] max-[860px]:pb-0">
            <h1
              id="hero-heading"
              className="max-w-190 text-[clamp(60px,5.55vw,80px)] leading-[1.27] font-bold tracking-[-4px] max-[1100px]:text-[clamp(57px,6.7vw,76px)] max-[860px]:text-[clamp(47px,12vw,72px)] max-[860px]:leading-[1.08] max-[860px]:tracking-[-3px] max-[560px]:text-[clamp(42px,12.5vw,60px)] max-[560px]:tracking-[-2.5px]"
            >
              Shop. Save.
              <br />
              Support the Planet
            </h1>

            <p className="mt-11 text-[clamp(20px,1.67vw,24px)] leading-[1.45] text-[#f2f2f2] max-[860px]:mx-auto max-[860px]:mt-7.5 max-[860px]:max-w-142.5 max-[860px]:text-xl max-[560px]:text-[17px]">
              Get cashback on your purchases &amp; turn it into climate impact.
            </p>

            <a
              id="get-started"
              className="mt-12.5 grid min-h-17 w-[min(100%,435px)] place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-xl font-bold text-[#071015] shadow-[0_16px_45px_rgb(23_192_244_/_13%)] transition duration-200 hover:-translate-y-0.75 hover:brightness-110 focus-visible:-translate-y-0.75 focus-visible:brightness-110 motion-reduce:transition-none max-[860px]:mx-auto max-[860px]:mt-8.5 max-[860px]:min-h-15.5 max-[860px]:w-[min(100%,390px)]"
              href="#mastercard"
            >
              Start Free
            </a>
          </div>

          <div
            className="relative h-[min(690px,calc(100svh-220px))] min-h-142.5 w-full self-end max-[860px]:mx-auto max-[860px]:h-155 max-[860px]:w-[min(100%,580px)] max-[560px]:mt-5 max-[560px]:h-130 max-[560px]:min-h-0"
            aria-label="MoneyBack payment cards and member activity"
          >
            <div className="absolute inset-[16%_-35%_-20%] bg-[radial-gradient(circle,rgb(16_112_132_/_38%),transparent_67%)] blur-xl" />
            <Image
              className="absolute right-[4%] bottom-[-3px] h-auto w-[min(78%,398px)] drop-shadow-[0_30px_45px_rgb(0_0_0_/_34%)] max-[860px]:right-[17%] max-[860px]:w-[min(70%,390px)] max-[560px]:right-[12%] max-[560px]:w-[76%]"
              src="/Group 5.png"
              alt="Two MoneyBack payment cards"
              width={398}
              height={544}
              priority
            />

            <ActivityBadge
              className="top-[19%] right-[7%] max-[860px]:right-[9%] max-[560px]:top-[20%] max-[560px]:right-[2%]"
              icon="👨🏻"
              message="Ryan earned ₹1000 in cashback today"
            />
            <ActivityBadge
              className="top-[43%] left-[2%] max-[860px]:left-[4%] max-[560px]:top-[42%] max-[560px]:left-0"
              icon="🌱"
              message="Your spending helps plant trees & offset carbon"
            />
            <ActivityBadge
              className="right-[-20%] bottom-[19%] max-[860px]:right-0 max-[560px]:right-[-3%] max-[560px]:bottom-[18%]"
              icon="🌎"
              message="Join 500,000+ members making every purchase count"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
