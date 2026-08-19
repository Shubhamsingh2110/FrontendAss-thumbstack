import Image from "next/image";
import Link from "next/link";

const vouchers = [1, 2, 3].map((id) => ({
  id,
  discount: "25% OFF",
  brand: "Nike",
  validUntil: "Valid until 03 March 2022",
}));

type Voucher = (typeof vouchers)[number];

function VoucherCard({ voucher }: { voucher: Voucher }) {
  return (
    <article className="relative flex h-26.5 w-70.5 shrink-0 overflow-hidden rounded-xl lg:h-56 lg:w-155 lg:rounded-2xl">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-xl border border-[#12cdef] lg:rounded-2xl"
      />

      <div className="relative w-30 shrink-0 overflow-hidden bg-white lg:w-54.5">
        <Image
          className="object-contain px-6 lg:px-8"
          src="/nike.png"
          alt="Nike"
          fill
          sizes="(max-width: 1023px) 120px, 218px"
        />
      </div>

      <span
        aria-hidden="true"
        className="absolute top-1/2 left-[-18px] z-20 size-9 -translate-y-1/2 rounded-full bg-[#111] lg:left-[-36px] lg:size-18"
      />

      <span
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-[119px] z-10 border-l border-dashed border-[#777]/45 lg:left-[217px]"
      />

      <div className="relative flex flex-1 flex-col justify-center bg-[#111] px-5 lg:justify-start lg:px-10 lg:pt-7">
        <span
          aria-hidden="true"
          className="absolute top-1/2 right-[-19px] z-20 size-9 -translate-y-1/2 rounded-full border border-[#12cdef] bg-[#111] lg:right-[-37px] lg:size-18"
        />

        <h3 className="text-[19px] leading-[1.15] font-normal tracking-[-0.3px] lg:text-[36px] lg:tracking-[-0.8px]">
          <span className="lg:hidden">
            {voucher.discount}
            <br />
            {voucher.brand}
          </span>
          <span className="hidden lg:inline">
            {voucher.discount} | {voucher.brand}
          </span>
        </h3>

        <p className="mt-4 hidden text-[15px] leading-[1.35] text-[#aaa] lg:block">
          Buy at for min. 40 EUR and enjoy a 10%
          <br />
          discount on everything, with an exclusive code.
        </p>

        <p className="mt-3 text-[11px] text-[#888] lg:text-[13px]">
          {voucher.validUntil}
        </p>

        <div className="absolute bottom-6 left-10 hidden items-center gap-2.5 text-lg lg:flex" aria-label="Available countries">
          <span>🇩🇪</span>
          <span className="text-xl text-[#ff315b]">+</span>
          <span>🇨🇭</span>
          <span>🇬🇧</span>
          <span>🇩🇪</span>
          <span>🇪🇺</span>
          <span>🇩🇪</span>
        </div>
      </div>
    </article>
  );
}

export default function VouchersSection() {
  return (
    <section
      id="vouchers"
      className="overflow-hidden bg-[#000] pt-16 pb-20 text-white [font-family:Inter,Arial,sans-serif] lg:pt-32 lg:pb-32"
      aria-labelledby="vouchers-heading"
    >
      <div className="mx-auto w-full max-w-[1438px] px-[17px] lg:px-30">
        <h2
          id="vouchers-heading"
          className="text-[52px] leading-[1.08] font-bold tracking-[0px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] lg:text-[76px] lg:leading-none lg:tracking-[-3px]"
        >
          <span className="lg:hidden">
            Save More
            <br />
            with Vouchers
          </span>
          <span className="hidden lg:inline">Save More with Vouchers</span>
        </h2>

        <p className="mt-7 max-w-170 text-[18px] leading-[1.55] lg:mt-9 lg:max-w-none lg:text-[27px] lg:leading-relaxed">
          Enjoy handpicked offers designed to help you shop smarter.
        </p>

        <div className="mt-6 -mr-[17px] flex snap-x snap-mandatory gap-4 overflow-x-auto pr-[17px] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-10 lg:mr-[calc((1438px-100vw)/2-120px)] lg:gap-5 lg:pr-0">
          {vouchers.map((voucher) => (
            <div className="snap-start" key={voucher.id}>
              <VoucherCard voucher={voucher} />
            </div>
          ))}
        </div>

        <Link
          className="mt-5 grid min-h-12 w-full place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-base font-bold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none lg:mt-8 lg:min-h-15 lg:w-97.5 lg:text-lg"
          href="#all-vouchers"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
