import Image from "next/image";

const features = [
  {
    icon: "story",
    title: "Our Story",
    description:
      "We’re a group of developers and dreamers building ICEBack — a platform where everyday shopping meets climate action.",
  },
  {
    icon: "cart",
    title: "Shop & Earn",
    description:
      "Buy from top brands and earn cashback on every order — no strings attached.\nThen you choose what happens next.",
  },
  {
    icon: "impact",
    title: "Make an Impact",
    description:
      "Keep the money in your pocket or donate it to verified climate projects. Your Money. Your Impact",
  },
] as const;

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  if (name === "cart") {
    return (
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path d="M3 5h4l3.2 15h14.3l3-10.5H9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="25" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="25" r="2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  if (name === "impact") {
    return (
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path d="M14.5 3.5c.8 6.8 3.2 9.2 10 10-6.8.8-9.2 3.2-10 10-.8-6.8-3.2-9.2-10-10 6.8-.8 9.2-3.2 10-10Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M25 3v6M22 6h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
      <path d="M3.5 7.5h8.2c2.4 0 4.3 1.9 4.3 4.3V27c0-2.4-1.9-4.3-4.3-4.3H3.5V7.5ZM28.5 7.5h-8.2c-2.4 0-4.3 1.9-4.3 4.3V27c0-2.4 1.9-4.3 4.3-4.3h8.2V7.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21 12h4M21 16h4M21 20h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function WhoWeAre() {
  return (
    <section
      className="bg-[#131313] py-31 text-white [font-family:Inter,Arial,sans-serif] max-[560px]:py-20"
      aria-labelledby="who-we-are-heading"
    >
      <div className="mx-auto w-full max-w-[1438px] px-30 max-[1100px]:px-16 max-[860px]:px-8 max-[560px]:px-[19px]">
        <h2
          id="who-we-are-heading"
          className="text-[68px] leading-none font-bold tracking-[-2.5px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[560px]:text-[52px] max-[560px]:tracking-[-2px]"
        >
          Who We Are
        </h2>

        <p className="mt-9 text-[26px] leading-relaxed max-[560px]:hidden">
          Learn how ICEBack turns your spending into sustainable impact.
        </p>
        <p className="mt-7 hidden text-[19px] leading-[1.5] max-[560px]:block">
          We’re building a better future by combining technology, transparency,
          and impact.
        </p>

        <div className="mt-8 grid grid-cols-4 gap-5 max-[860px]:grid-cols-2 max-[560px]:mt-5 max-[560px]:block">
          <div className="overflow-hidden rounded-xl max-[560px]:h-[150px] max-[560px]:w-full">
            <Image
              className="h-full w-full object-full"
              src="/image.png"
              alt="A green planet covered with trees"
              width={285}
              height={316}
            />
          </div>

          <div className="contents max-[560px]:mt-5 max-[560px]:flex max-[560px]:snap-x max-[560px]:snap-mandatory max-[560px]:gap-3 max-[560px]:overflow-x-auto max-[560px]:pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {features.map((feature) => (
              <article
                className="flex min-h-79 flex-col justify-center rounded-xl bg-[#201e1e] px-6 max-[560px]:min-h-48 max-[560px]:w-[257px] max-[560px]:shrink-0 max-[560px]:snap-start max-[560px]:justify-start max-[560px]:px-4 max-[560px]:py-8"
                key={feature.title}
              >
                <div className="mb-5 text-[#10d9f4] max-[560px]:hidden">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-[23px] font-semibold max-[560px]:text-[18px]">
                  {feature.title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-[17px] leading-[1.55] text-[#aaa] max-[560px]:text-[15px] max-[560px]:leading-[1.6]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
