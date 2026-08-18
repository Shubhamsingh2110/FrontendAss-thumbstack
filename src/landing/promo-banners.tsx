import Image from "next/image";
import Link from "next/link";

const ctaClassName =
  "grid min-h-14 w-47 place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-[16px] font-bold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none max-[560px]:min-h-10 max-[560px]:w-32 max-[560px]:text-[12px]";

export function PromoBanners() {
  return (
    <section
      className="bg-[#111] pt-16 pb-10 text-white [font-family:Inter,Arial,sans-serif] max-[860px]:py-12"
      aria-label="Featured offers"
    >
      <div className="mx-auto grid w-full max-w-[1438px] grid-cols-2 gap-6 px-30 max-[1100px]:px-16 max-[860px]:grid-cols-1 max-[860px]:px-8 max-[560px]:gap-4 max-[560px]:px-[17px]">
        <article className="relative aspect-[587/315] overflow-hidden rounded-xl">
          <Image
            className="object-cover"
            src="/girl2.png"
            alt=""
            fill
            sizes="(max-width: 860px) calc(100vw - 34px), 587px"
          />
          <div className="relative z-10 flex h-full flex-col items-start justify-center px-7 max-[560px]:px-4">
            <h2 className="text-[31px] leading-tight font-semibold tracking-[-0.5px] max-[560px]:max-w-44 max-[560px]:text-[18px]">
              Get 2.5% Cashback
            </h2>
            <p className="mt-3 text-[20px] leading-[1.5] max-[560px]:mt-1.5 max-[560px]:max-w-40 max-[560px]:text-[12px]">
              on New balance Clothing
              <br />
              and Footwear Range
            </p>
            <Link className={`${ctaClassName} mt-5 max-[560px]:mt-3`} href="#new-balance-offer">
              Activate Offer
            </Link>
          </div>

          <div className="absolute top-[14%] right-[23.5%] z-10 grid h-24 w-36 place-items-center rounded-xl bg-white max-[560px]:h-12 max-[560px]:w-18 max-[560px]:rounded-lg">
            <Image
              className="h-auto w-[78%] object-contain"
              src="/nb.png"
              alt="New Balance"
              width={167}
              height={92}
            />
          </div>
        </article>

        <article className="relative aspect-[587/315] overflow-hidden rounded-xl">
          <Image
            className="object-cover"
            src="/gift.png"
            alt=""
            fill
            sizes="(max-width: 860px) calc(100vw - 34px), 587px"
          />
          <div className="relative z-10 flex h-full flex-col items-start justify-center px-7 max-[560px]:px-4">
            <h2 className="text-[31px] leading-tight font-semibold tracking-[-0.5px] max-[560px]:max-w-48 max-[560px]:text-[18px]">
              Invite Friends, Get Rewarded
            </h2>
            <p className="mt-3 text-[20px] leading-[1.5] max-[560px]:mt-1.5 max-[560px]:max-w-44 max-[560px]:text-[12px]">
              Share your link and earn CHF 5 or
              <br className="max-[420px]:hidden" /> double it for a cause 🌱
            </p>
            <Link className={`${ctaClassName} mt-5 max-[560px]:mt-3`} href="#refer-a-friend">
              Refer Now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
