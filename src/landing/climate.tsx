"use client";

import Image from "next/image";
import Link from "next/link";

interface ClimateProject {
  id: number;
  title: string;
  plastic: string;
  impact: string;
  image: string;
}

const projects: ClimateProject[] = [
  {
    id: 1,
    title: "Plastic-Free Alpine Rivers",
    plastic: "3,200 kg plastic removed",
    impact: "Cleaner lakes & rivers",
    image: "/rhino.png",
  },
  {
    id: 2,
    title: "Plastic-Free Alpine Rivers",
    plastic: "3,200 kg plastic removed",
    impact: "Cleaner lakes & rivers",
    image: "/girl.png",
  },
  {
    id: 3,
    title: "Plastic-Free Alpine Rivers",
    plastic: "3,200 kg plastic removed",
    impact: "Cleaner lakes & rivers",
    image: "/rhino.png",
  },
];

function ClimateCard({ project }: { project: ClimateProject }) {
  return (
    <article
      className="
        relative
        box-border
        flex
        h-[270px]
        w-[590px]
        shrink-0
        overflow-hidden
        rounded-[13px]
        bg-[#1b1b1b]

        max-lg:h-[155px]
        max-lg:w-[340px]
        max-lg:rounded-[11px]
      "
    >
      {/* CONTENT */}
      <div
        className="
          flex
          h-full
          w-[355px]
          shrink-0
          flex-col
          px-[27px]
          pt-[36px]

          max-lg:w-[225px]
          max-lg:px-[20px]
          max-lg:pt-[25px]
        "
      >
        {/* TITLE */}
        <h3
          className="
            m-0
            text-[23px]
            font-normal
            leading-[1.2]
            tracking-[-0.5px]
            text-white

            max-lg:text-[15px]
            max-lg:leading-[18px]
          "
        >
          {project.title}
        </h3>

        {/* PLASTIC */}
        <p
          className="
            m-0
            mt-[21px]
            text-[17px]
            font-normal
            leading-[1.2]
            tracking-[-0.2px]
            text-[#aaa6aa]

            max-lg:mt-[12px]
            max-lg:text-[11px]
            max-lg:leading-[14px]
          "
        >
          <span className="text-[16px] max-lg:text-[11px]">♻</span>{" "}
          {project.plastic}
        </p>

        {/* IMPACT */}
        <p
          className="
            m-0
            mt-[14px]
            text-[17px]
            font-normal
            leading-[1.2]
            tracking-[-0.2px]
            text-[#aaa6aa]

            max-lg:mt-[9px]
            max-lg:text-[11px]
            max-lg:leading-[14px]
          "
        >
          <span className="text-[16px] max-lg:text-[11px]">🌊</span>{" "}
          {project.impact}
        </p>

        {/* DONATE */}
        <Link
          href="#donate"
          className="
            mt-[22px]
            flex
            h-[50px]
            w-[205px]
            items-center
            justify-center
            rounded-full
            border
            border-[#20dce5]
            text-[15px]
            font-semibold
            leading-[18px]
            text-[#20dce5]

            max-lg:hidden
          "
        >
          Donate
        </Link>
      </div>

      {/* IMAGE */}
      <div
        className="
          relative
          h-full
          w-[235px]
          shrink-0
          overflow-hidden

          max-lg:w-[115px]
        "
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="235px"
          className="object-cover"
        />
      </div>
    </article>
  );
}

export default function ClimateProjects() {
  return (
    <section
      id="climate-projects"
      className="
        w-full
        overflow-hidden
        bg-[#111111]
        text-white
      "
    >
      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div
        className="
          hidden
          w-full
          pb-[37px]
          pt-[18px]

          lg:block
        "
      >
        {/* HEADER */}
        <div className="ml-[138px]">
          <h2
            className="
              m-0
              text-[88px]
              font-semibold
              leading-[1]
              tracking-[-4px]
            "
          >
            Support Climate Projects
          </h2>

          <p
            className="
              m-0
              mt-[38px]
              text-[31px]
              font-normal
              leading-[1.2]
              tracking-[-0.5px]
            "
          >
            Turn your cashback into real-world impact by donating to initiatives
            that protect the planet.
          </p>
        </div>

        {/* PROJECT CAROUSEL */}
        <div
          className="
            mt-[47px]
            flex
            gap-[25px]
            overflow-x-auto
            overflow-y-hidden
            pl-[138px]
            pr-0

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {projects.map((project) => (
            <ClimateCard key={project.id} project={project} />
          ))}
        </div>

        {/* VIEW ALL */}
        <Link
          href="#all-projects"
          className="
            ml-[138px]
            mt-[30px]
            flex
            h-[73px]
            w-[453px]
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[#20dce5]
            to-[#2495f3]
            text-[23px]
            font-semibold
            leading-[24px]
            text-black
          "
        >
          View All
        </Link>
      </div>

      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div
        className="
          block
          w-full
          px-[17px]
          pb-[37px]
          pt-[46px]

          lg:hidden
        "
      >
        {/* HEADER */}
        <h2
          className="
            m-0
            max-w-[410px]
            text-[56px]
            font-normal
            leading-[1.02]
            tracking-[-2.7px]
          "
        >
          Support Climate
          <br />
          Projects
        </h2>

        {/* SUBTITLE */}
        <p
          className="
            m-0
            mt-[28px]
            max-w-[410px]
            text-[23px]
            font-normal
            leading-[1.52]
            tracking-[-0.35px]
          "
        >
          Turn your cashback into real-world
          <br />
          impact by donating to initiatives that
          <br />
          protect the planet.
        </p>

        {/* MOBILE CAROUSEL */}
        <div
          className="
            -ml-[17px]
            mt-[26px]
            flex
            w-screen
            gap-[15px]
            overflow-x-auto
            overflow-y-hidden
            pl-[17px]
            pr-0
            pb-[2px]

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {projects.map((project) => (
            <ClimateCard key={project.id} project={project} />
          ))}
        </div>

        {/* VIEW ALL */}
        <Link
          href="#all-projects"
          className="
            mt-[23px]
            flex
            h-[59px]
            w-full
            items-center
            justify-center
            rounded-full
            bg-gradient-to-r
            from-[#20dce5]
            to-[#2495f3]
            text-[17px]
            font-medium
            leading-[20px]
            text-black
          "
        >
          View All
        </Link>
      </div>
    </section>
  );
}