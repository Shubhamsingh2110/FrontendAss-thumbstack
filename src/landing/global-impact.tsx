import Image from "next/image";

const impactMetrics = [
  { label: "Trees planted", value: "85K+" },
  { label: "CO₂ offset", value: "1.1M kg" },
  { label: "Plastic removed", value: "460 tons" },
  { label: "Homes powered", value: "7.8 K" },
] as const;

export function GlobalImpact() {
  return (
    <section
      className="bg-black py-24 text-white [font-family:Inter,Arial,sans-serif] max-[560px]:py-16"
      aria-labelledby="global-impact-heading"
    >
      <div className="mx-auto w-full max-w-[1438px] px-30 max-[1100px]:px-16 max-[860px]:px-8 max-[560px]:px-[19px]">
        <h2
          id="global-impact-heading"
          className="text-[70px] leading-none font-bold tracking-[0px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[860px]:text-[54px] max-[560px]:max-w-88 max-[560px]:text-[44px] max-[560px]:leading-[1.08] max-[560px]:tracking-[-2px]"
        >
          ICEBack’s Global Impact
        </h2>

        <p className="mt-8 font-light text-[26px] leading-relaxed max-[560px]:hidden">
          Learn how ICEBack turns your spending into sustainable impact.
        </p>

        <div className="mt-8 grid grid-cols-[535px_651px] items-start gap-3 max-[1100px]:grid-cols-[minmax(430px,535px)_minmax(0,651px)] max-[860px]:grid-cols-1 max-[560px]:mt-4">
          <div>
            <dl className="grid grid-cols-2 gap-3">
              {impactMetrics.map((metric) => (
                <div
                  className="grid min-h-38.5 place-content-center rounded-xl bg-[#211f1f] text-center max-[560px]:min-h-[121px] max-[560px]:rounded-[10px]"
                  key={metric.label}
                >
                  <dt className="text-[15px] max-[560px]:text-[14px]">
                    {metric.label}
                  </dt>
                  <dd className="mt-2 text-[27px] font-bold max-[560px]:mt-2 max-[560px]:text-[27px]">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              className="mt-6 grid min-h-15 w-90.5 place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-lg font-bold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none max-[560px]:mt-3 max-[560px]:min-h-12 max-[560px]:w-full max-[560px]:text-[16px]"
              href="#contact"
            >
              Request Charity
            </a>
          </div>

          <Image
            className="h-[318px] w-full rounded-xl object-cover max-[860px]:mt-5 max-[560px]:hidden"
            src="/fish.png"
            alt="A whale tail rising above the ocean"
            width={651}
            height={318}
          />
        </div>
      </div>
    </section>
  );
}
