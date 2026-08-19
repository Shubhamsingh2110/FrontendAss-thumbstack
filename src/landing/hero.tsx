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
    <header className="grid min-h-22 grid-cols-[auto_1fr_auto] items-center rounded-full border border-[#333] bg-[#171717]/70 px-8 backdrop-blur-lg max-[860px]:min-h-19 max-[860px]:px-5.5 max-[560px]:min-h-20 max-[560px]:grid-cols-[1fr_auto] max-[560px]:rounded-none max-[560px]:border-0 max-[560px]:bg-transparent max-[560px]:px-0 max-[560px]:backdrop-blur-none">
      <a
        className="text-[30px] font-bold tracking-[-1.5px] text-white [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[860px]:text-2xl max-[560px]:text-[24px] max-[560px]:tracking-[-1px]"
        href="#top"
        aria-label="MoneyBack home"
      >
        Money <span className="font-normal -ml-1">Back</span>
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
        className="grid min-h-13 min-w-40 place-items-center rounded-full border border-[#11ccf5] text-[19px] font-bold text-[#000] transition duration-200 hover:-translate-y-0.5 hover:bg-[#12cef7] hover:text-[#071114] focus-visible:-translate-y-0.5 focus-visible:bg-[#12cef7] focus-visible:text-[#071114] motion-reduce:transition-none max-[860px]:min-h-11 max-[860px]:min-w-29.5 max-[860px]:text-base max-[560px]:hidden"
        href="#get-started"
      >
        Start free
      </a>

      <button
        className="hidden size-10 place-items-center max-[560px]:grid"
        type="button"
        aria-label="Open navigation menu"
      >
        <span className="relative block h-4 w-6 border-y-2 border-white before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-6 before:-translate-y-1/2 before:bg-white" />
      </button>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="min-h-svh overflow-hidden bg-[#111] text-[#f8f8f8] [background-image:radial-gradient(circle_at_80%_62%,rgb(12_64_79_/_42%),transparent_31rem)] [font-family:Inter,Arial,sans-serif] max-[560px]:[background-image:none]"
    >
      <div className="mx-auto w-[min(calc(100%-48px),1180px)] pt-16 max-[860px]:w-[min(calc(100%-32px),680px)] max-[860px]:pt-5 max-[560px]:w-[calc(100%-34px)] max-[560px]:pt-4">
        <Header />

        <section
          className="grid min-h-[calc(100svh-153px)] grid-cols-[minmax(0,1fr)_minmax(430px,.74fr)] items-center gap-9.5 max-[1100px]:grid-cols-[minmax(0,1fr)_minmax(380px,.7fr)] max-[860px]:min-h-0 max-[860px]:grid-cols-1 max-[860px]:pt-20 max-[860px]:text-center max-[560px]:pt-[88px] max-[560px]:text-left"
          aria-labelledby="hero-heading"
        >
          <div className="relative z-10 pb-[5vh] max-[860px]:pb-0">
            <h1
              id="hero-heading"
              className="max-w-190 text-[clamp(60px,5.55vw,80px)] leading-[1.27] font-bold tracking-[-4px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[1100px]:text-[clamp(57px,6.7vw,76px)] max-[860px]:text-[clamp(47px,12vw,72px)] max-[860px]:leading-[1.08] max-[860px]:tracking-[-3px] max-[560px]:text-[clamp(52px,14.4vw,58px)] max-[560px]:leading-[1.1] max-[560px]:tracking-[-3px]"
            >
              Shop. Save.
              <br />
              Support the Planet
            </h1>

            <p className="mt-11 text-[clamp(20px,1.67vw,24px)] leading-[1.45] text-[#f2f2f2] max-[860px]:mx-auto max-[860px]:mt-7.5 max-[860px]:max-w-142.5 max-[860px]:text-xl max-[560px]:mx-0 max-[560px]:mt-8 max-[560px]:text-[18px] max-[560px]:leading-[1.55]">
              Get cashback on your purchases &amp; turn it into climate impact.
            </p>

            <a
              id="get-started"
              className="mt-12.5 grid min-h-17 w-[min(100%,435px)] place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-xl font-bold text-[#000000] shadow-[0_16px_45px_rgb(23_192_244_/_13%)] transition duration-200 hover:-translate-y-0.75 hover:brightness-110 focus-visible:-translate-y-0.75 focus-visible:brightness-110 motion-reduce:transition-none max-[860px]:mx-auto max-[860px]:mt-8.5 max-[860px]:min-h-15.5 max-[860px]:w-[min(100%,390px)] max-[560px]:mt-6.5 max-[560px]:min-h-12 max-[560px]:w-full max-[560px]:text-base"
              href="#mastercard"
            >
              Start Free
            </a>
          </div>

          <div
            className="relative h-[min(690px,calc(100svh-220px))] min-h-142.5 w-full self-end max-[860px]:mx-auto max-[860px]:h-155 max-[860px]:w-[min(100%,580px)] max-[560px]:mt-16 max-[560px]:h-[calc((100vw-34px)*1.17)] max-[560px]:min-h-0"
            aria-label="MoneyBack payment cards and member activity"
          >
            <div className="absolute inset-[16%_-35%_-20%] bg-[radial-gradient(circle,rgb(16_112_132_/_38%),transparent_67%)] blur-xl" />
            <Image
              className="absolute right-[4%] bottom-[-3px] h-auto w-[min(78%,398px)] drop-shadow-[0_30px_45px_rgb(0_0_0_/_34%)] max-[860px]:right-[17%] max-[860px]:w-[min(70%,390px)] max-[560px]:hidden"
              src="/Group 5.png"
              alt="Two MoneyBack payment cards"
              width={398}
              height={544}
              priority
            />

            <Image
              className="absolute top-0 left-[5%] hidden h-auto w-[58%] drop-shadow-[0_30px_45px_rgb(0_0_0_/_34%)] max-[560px]:block"
              src="/mob2.png"
              alt="Blue MoneyBack card"
              width={297}
              height={408}
              priority
            />
            <Image
              className="absolute top-[4%] right-[8%] z-[1] hidden h-auto w-[64%] drop-shadow-[0_30px_45px_rgb(0_0_0_/_34%)] max-[560px]:block"
              src="/mob1.png"
              alt="MoneyBack card"
              width={225}
              height={382}
              priority
            />

            <ActivityBadge
              className="top-[19%] right-[7%] max-[860px]:right-[9%] max-[560px]:top-[5%] max-[560px]:right-auto max-[560px]:left-[1%]"
              icon="👨🏻"
              message="Ryan earned ₹1000 in cashback today"
            />
            <ActivityBadge
              className="top-[43%] md:-right-[20%] max-[860px]:left-[4%] max-[560px]:top-[27%] max-[560px]:left-[15%]"
              icon="🌱"
              message="Your spending helps plant trees & offset carbon"
            />
            <ActivityBadge
              className="right-[-20%] bottom-[19%] max-[860px]:right-0 max-[560px]:right-auto max-[560px]:bottom-auto max-[560px]:top-[61%] max-[560px]:left-[-1%]"
              icon="🌎"
              message="Join 500,000+ members making every purchase count"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
