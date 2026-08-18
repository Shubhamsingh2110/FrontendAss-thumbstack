import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    text: "I love how easy it is to earn cashback while shopping at my favorite stores. Even better, I get to donate some of it to causes I care about!",
  },
  {
    id: 2,
    text: "Wasn’t expecting much, but I’ve already earned over CHF 40 back this month. The Mastercard makes it even better with double cashback!",
  },
  {
    id: 3,
    text: "I love how easy it is to earn cashback while shopping at my favorite stores. Even better, I get to donate some of it to causes I care about!",
  },
  {
    id: 4,
    text: "Wasn’t expecting much, but I’ve already earned over CHF 40 back this month. The Mastercard makes it even better with double cashback!",
  },
  {
    id: 5,
    text: "I love how easy it is to earn cashback while shopping at my favorite stores. Even better, I get to donate some of it to causes I care about!",
  },
] as const;

type Testimonial = (typeof testimonials)[number];

function Stars() {
  return (
    <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          className="grid size-6 place-items-center bg-[#159653] text-[17px] leading-none text-white max-[560px]:size-5.5 max-[560px]:text-[15px]"
          key={index}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="min-h-54 rounded-xl bg-[#1b1b1b] px-10 py-10 max-[860px]:w-90 max-[860px]:shrink-0 max-[860px]:snap-start max-[560px]:min-h-54 max-[560px]:w-[267px] max-[560px]:px-5.5 max-[560px]:py-6">
      <div className="flex items-center gap-4">
        <div className="relative size-11 shrink-0 overflow-hidden rounded-full">
          <Image
            className="scale-[3.7] object-cover object-[78%_16%]"
            src="/girl2.png"
            alt="Sarah M."
            fill
            sizes="44px"
          />
        </div>
        <div>
          <h3 className="text-[16px] font-semibold">Sarah M.</h3>
          <p className="mt-1 text-[12px] text-[#999]">Zürich, Switzerland</p>
        </div>
      </div>

      <Stars />

      <p className="mt-3 text-[12px] leading-[1.55] text-[#aaa] max-[560px]:leading-[1.6]">
        {testimonial.text}
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="overflow-hidden bg-[#141414] py-20 text-white [font-family:Inter,Arial,sans-serif] max-[560px]:py-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto grid w-full max-w-[1438px] grid-cols-2 items-start gap-9 px-30 max-[1100px]:px-16 max-[860px]:grid-cols-1 max-[860px]:px-8 max-[560px]:block max-[560px]:px-[13px]">
        <div>
          <h2
            id="testimonials-heading"
            className="text-[68px] leading-[1.16] font-bold tracking-[-2.5px] [font-family:'Helvetica_Neue',Helvetica,Arial,sans-serif] max-[560px]:text-[44px] max-[560px]:leading-[1.05] max-[560px]:tracking-[-1.8px]"
          >
            What Our
            <br />
            Users Say
          </h2>

          <p className="mt-10 text-[24px] max-[560px]:mt-6 max-[560px]:text-[18px]">
            Real voices. Real savings. Real impact.
          </p>

          <Link
            className="mt-9 grid min-h-14 w-85 place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-lg font-bold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none max-[560px]:hidden"
            href="#all-testimonials"
          >
            View All
          </Link>

          <div className="mt-6 grid gap-7 max-[860px]:hidden">
            <TestimonialCard testimonial={testimonials[0]} />
            <TestimonialCard testimonial={testimonials[2]} />
          </div>
        </div>

        <div className="grid gap-7 max-[860px]:hidden">
          <TestimonialCard testimonial={testimonials[1]} />
          <TestimonialCard testimonial={testimonials[3]} />
          <TestimonialCard testimonial={testimonials[4]} />
        </div>

        <div className="mt-5 -mr-[13px] hidden snap-x snap-mandatory gap-3 overflow-x-auto pr-[13px] pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden max-[860px]:flex max-[560px]:flex">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>

        <article className="relative mt-19 hidden h-[347px] overflow-hidden rounded-xl bg-[#1b3039] max-[560px]:block">
          <Image
            className="absolute right-0 bottom-0 h-auto w-full"
            src="/gift.png"
            alt=""
            width={587}
            height={315}
            sizes="calc(100vw - 26px)"
          />

          <div className="relative z-10 flex h-full flex-col items-start px-7.5 pt-8.5">
            <h3 className="text-[34px] leading-[1.35] font-semibold tracking-[-0.8px]">
              Invite Friends,
              <br />
              Get Rewarded
            </h3>
            <p className="mt-3 text-[21px] leading-[1.55]">
              Share your link and earn
              <br />
              CHF 5 or double it for a
              <br />
              cause 🌱
            </p>
            <Link
              className="mt-6 grid min-h-15.5 w-52 place-items-center rounded-full bg-gradient-to-r from-[#17dce8] to-[#229cff] text-[16px] font-semibold text-[#071015] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 focus-visible:brightness-110 motion-reduce:transition-none"
              href="#refer-a-friend"
            >
              Refer Now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
