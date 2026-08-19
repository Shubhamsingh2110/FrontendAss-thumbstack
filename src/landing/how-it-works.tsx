const steps = [
  {
    number: "1",
    title: "Choose a shop & order",
    description: "Choose your favourite shop,\norder & benefit.",
  },
  {
    number: "2",
    title: "Cashback",
    description: "After the return deadline, the money\nwill be credited to your account.",
  },
  {
    number: "3",
    title: "Donate for environment",
    description:
      "Make a difference and make our world a better place.\nYou can donate your cashback to various projects.",
  },
] as const;

export function HowItWorks() {
  return (
    <section
      className="bg-black py-28 text-white [font-family:Inter,Arial,sans-serif] max-[560px]:py-20"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto grid min-h-133.5 w-full max-w-[1438px] grid-cols-[minmax(0,480px)_602px] items-center justify-between gap-12 px-30 max-[1100px]:grid-cols-[minmax(0,380px)_minmax(500px,1fr)] max-[1100px]:px-16 max-[860px]:grid-cols-1 max-[860px]:gap-14 max-[860px]:px-8 max-[560px]:gap-12 max-[560px]:px-[17px]"
      >
        <div>
          <h2
            id="how-it-works-heading"
            className="text-[68px] leading-[1.16] font-bold tracking-[-2.5px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[1100px]:text-[58px] max-[560px]:text-[52px] max-[560px]:leading-[1.08] max-[560px]:tracking-[-2px]"
          >
            How ICEBack
            <br />
            Works
          </h2>
          <p className="mt-7 text-[24px] leading-[1.75] max-[560px]:mt-6 max-[560px]:text-[18px] max-[560px]:leading-[1.55]">
            Learn how ICEBack turns your
            <br className="max-[400px]:hidden" /> spending into sustainable impact.
          </p>
        </div>

        <ol className="grid gap-5">
          {steps.map((step) => (
            <li
              className="flex min-h-41 items-center gap-6 rounded-[10px] bg-[#201e1e] px-6 max-[560px]:min-h-36 max-[560px]:gap-4 max-[560px]:px-4"
              key={step.number}
            >
              <span className="grid h-26 w-19.5 shrink-0 place-items-center rounded-xl bg-[#292727] text-[26px] font-bold max-[560px]:h-22 max-[560px]:w-16 max-[560px]:text-xl">
                {step.number}
              </span>
              <span>
                <strong className="block text-[23px] leading-tight font-medium max-[560px]:text-lg">
                  {step.title}
                </strong>
                <span className="mt-2 block whitespace-pre-line text-[16px] leading-[1.65] text-[#aaa] max-[560px]:text-sm">
                  {step.description}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
