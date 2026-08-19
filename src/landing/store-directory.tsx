import Image from "next/image";
import Link from "next/link";

const stores = [
  { id: "new-balance", name: "New Balance", logo: "/nb.png", width: 167, height: 92 },
  { id: "nike", name: "Nike", logo: "/nike.png", width: 145, height: 56 },
  { id: "ca", name: "C&A", logo: "/ca.png", width: 149, height: 81 },
  { id: "converse", name: "Converse", logo: "/converse.png", width: 184, height: 111 },
  { id: "jbl", name: "JBL", logo: "/jbl.png", width: 130, height: 110 },
  { id: "seed-kitten", name: "SeedKitten", logo: "/nb.png", width: 167, height: 92 },
] as const;

type Store = (typeof stores)[number];

function StoreLogo({ store }: { store: Store }) {
  if ("logo" in store) {
    return (
      <Image
        className="h-auto max-h-36 w-[90%] object-contain max-[560px]:max-h-24 max-[560px]:w-[86%]"
        src={store.logo}
        alt={store.name}
        width={store.width}
        height={store.height}
      />
    );
  }

  return (
    <div className="text-center text-black">
      <div className="text-[60px] leading-none max-[560px]:text-[44px]">🐱</div>
      <div className="mt-1 font-serif text-[24px] font-bold max-[560px]:text-[17px]">SeedKitten</div>
    </div>
  );
}

function StoreCard({ store }: { store: Store }) {
  return (
    <article className="flex h-71 w-54.5 shrink-0 flex-col overflow-hidden rounded-2xl bg-white text-black max-[560px]:h-54 max-[560px]:w-40 max-[560px]:rounded-xl">
      <div className="grid flex-1 place-items-center px-4">
        <StoreLogo store={store} />
      </div>

      <dl className="grid gap-3 px-4 pb-5 max-[560px]:gap-2 max-[560px]:px-3 max-[560px]:pb-3">
        <div className="flex items-end justify-between">
          <dt className="text-[13px] font-semibold text-[#777] max-[560px]:text-[10px]">ICEBACK</dt>
          <dd className="text-[25px] font-bold text-[#777] max-[560px]:text-[18px]">8%</dd>
        </div>
        <div className="flex items-end justify-between">
          <dt className="max-w-25 text-[13px] leading-[1.05] font-bold max-[560px]:max-w-20 max-[560px]:text-[9px]">
            ICEBACK +<br />MASTERCARD
          </dt>
          <dd className="text-[25px] font-bold max-[560px]:text-[18px]">16%</dd>
        </div>
      </dl>
    </article>
  );
}

export function StoreDirectory() {
  return (
    <section
      className="overflow-hidden bg-black py-24 text-white [font-family:Inter,Arial,sans-serif] max-[560px]:py-16"
      aria-labelledby="stores-heading"
    >
      <div className="mx-auto w-full max-w-[1438px] px-30 max-[1100px]:px-16 max-[860px]:px-8 max-[560px]:px-[17px]">
        <h2
          id="stores-heading"
          className="text-[70px] leading-none font-bold tracking-[0px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[860px]:text-[54px] max-[560px]:max-w-84 max-[560px]:text-[48px] max-[560px]:leading-[1.06] max-[560px]:tracking-[-2px]"
        >
          Shop from +860 Stores
        </h2>
        <p className="mt-8 text-[26px] leading-relaxed max-[560px]:mt-6 max-[560px]:text-[18px] max-[560px]:leading-[1.5]">
          Discover top brands and earn cashback on every purchase.
        </p>

        <div className="mt-8 -mr-[calc((100vw-min(100vw,1438px))/2+120px)] flex snap-x snap-mandatory gap-4.5 overflow-x-auto pr-8 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[560px]:mt-6 max-[560px]:-mr-[17px] max-[560px]:gap-3 max-[560px]:pr-[17px]">
          {stores.map((store) => (
            <div className="snap-start" key={store.id}>
              <StoreCard store={store} />
            </div>
          ))}
        </div>

        <Link
          className="mt-6 grid min-h-15 w-90.5 place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-lg font-bold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none max-[560px]:mt-5 max-[560px]:min-h-12 max-[560px]:w-full max-[560px]:text-base"
          href="#all-stores"
        >
          View All
        </Link>
      </div>
    </section>
  );
}
