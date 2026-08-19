"use client";

import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  readTime: string;
  date: string;
  category: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "THREE reasons why iceback is worth it!",
    description:
      "Explore how your everyday shopping habits can fund planet-positive projects.",
    image: "/panda.png",
    readTime: "3 min read",
    date: "24 April",
    category: "Sustainability",
  },
  {
    id: 2,
    title: "THREE reasons why iceback is worth it!",
    description:
      "Explore how your everyday shopping habits can fund planet-positive projects.",
    image: "/icepanda.png",
    readTime: "3 min read",
    date: "24 April",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "THREE reasons why iceback is worth it!",
    description:
      "Explore how your everyday shopping habits can fund planet-positive projects.",
    image: "/panda.png",
    readTime: "3 min read",
    date: "24 April",
    category: "Sustainability",
  },
];

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="8.5" stroke="white" strokeWidth="1.5" />
      <path
        d="M10 5.5V10L13 12"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.2 2.8L1.8 4.2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="4.5"
        width="14"
        height="13"
        rx="1.5"
        stroke="white"
        strokeWidth="1.5"
      />
      <path d="M3 8H17" stroke="white" strokeWidth="1.5" />
      <path
        d="M6.5 2.5V5.5M13.5 2.5V5.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article
      className="
        relative
        box-border
        h-[300px]
        w-[590px]
        shrink-0
        rounded-[14px]
        bg-[#1b1b1b]
        px-[26px]
        py-[24px]

        max-lg:h-[225px]
        max-lg:w-[340px]
        max-lg:px-[14px]
        max-lg:py-[18px]
      "
    >
      {/* TOP CONTENT */}
      <div
        className="
          flex
          h-[170px]
          w-full
          items-start
          justify-between

          max-lg:h-[125px]
        "
      >
        {/* TEXT */}
        <div
          className="
            flex
            w-[340px]
            flex-col

            max-lg:w-[205px]
          "
        >
          <h3
            className="
              m-0
              text-[23px]
              font-normal
              leading-[1.45]
              tracking-[-0.5px]
              text-white

              max-lg:text-[16px]
              max-lg:leading-[1.45]
            "
          >
            THREE reasons why
            <br />
            iceback is worth it!
          </h3>

          <p
            className="
              m-0
              mt-[15px]
              max-w-[330px]
              text-[17px]
              font-normal
              leading-[1.55]
              tracking-[-0.2px]
              text-[#aaa6aa]

              max-lg:mt-[8px]
              max-lg:max-w-[205px]
              max-lg:text-[12px]
              max-lg:leading-[1.5]
            "
          >
            Explore how your everyday shopping
            <br className="max-lg:hidden" />
            habits can fund planet-positive projects.
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
    relative
    h-[135px]
    w-[145px]
    shrink-0
    overflow-hidden
    rounded-[10px]

    max-lg:h-[90px]
    max-lg:w-[70px]
    max-lg:rounded-[8px]
  "
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="145px"
            className="object-cover"
          />
        </div>
      </div>

      {/* CENTERED BORDER */}
      <div className="flex justify-center">
        <div
          className="
            h-px
            w-full
            bg-[#2F2F31]

            max-lg:w-[82%]
          "
        />
      </div>

      {/* BOTTOM META */}
      <div
        className="
          mt-[18px]
          flex
          w-full
          items-center
          justify-between

          max-lg:mt-[11px]
        "
      >
        {/* LEFT META */}
        <div
          className="
            flex
            items-center
            gap-[8px]
            text-[16px]
            font-semibold
            leading-[20px]
            text-white

            max-lg:gap-[5px]
            max-lg:text-[10px]
            max-lg:leading-[14px]
          "
        >
          <div className="flex items-center gap-[5px]">
            <div className="scale-[0.8] max-lg:scale-[0.6]">
              <ClockIcon />
            </div>

            <span>{blog.readTime}</span>
          </div>

          <span
            className="
              h-[6px]
              w-[6px]
              rounded-full
              bg-white

              max-lg:h-[4px]
              max-lg:w-[4px]
            "
          />

          <div className="flex items-center gap-[5px]">
            <div className="scale-[0.8] max-lg:scale-[0.6]">
              <CalendarIcon />
            </div>

            <span>{blog.date}</span>
          </div>
        </div>

        {/* CATEGORY */}
        <span
          className="
            flex
            h-[46px]
            min-w-[150px]
            items-center
            justify-center
            rounded-full
            bg-[#383838]
            px-[16px]
            text-[16px]
            font-semibold
            leading-[20px]
            text-white

            max-lg:h-[26px]
            max-lg:min-w-[85px]
            max-lg:px-[8px]
            max-lg:text-[10px]
            max-lg:leading-[13px]
          "
        >
          {blog.category}
        </span>
      </div>
    </article>
  );
}

export default function LatestBlogs() {
  return (
    <section
      id="blogs"
      className="
        w-full
        overflow-hidden
        bg-[#000]
        text-white
        pb-32
      "
    >
      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <div
        className="
          hidden
          w-full
          pb-[11px]
          pt-[36px]

          lg:block
        "
      >
        {/* HEADER */}
        <div className="ml-[164px]">
          <h2
            className="
              m-0
              text-[72px]
              font-semibold
              leading-[1]
              tracking-[0px]
            "
          >
            Latest Blogs
          </h2>

          <p
            className="
              m-0
              mt-[40px]
              text-[31px]
              font-normal
              leading-[1.2]
              tracking-[-0.6px]
            "
          >
            Discover smarter ways to save and give back.
          </p>
        </div>

        {/* BLOG CAROUSEL */}
        <div
          className="
            mt-[47px]
            flex
            gap-[25px]
            overflow-x-auto
            overflow-y-hidden
            pl-[164px]
            pr-0

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* VIEW ALL */}
        <Link
          href="#all-blogs"
          className="
            ml-[164px]
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
          px-[23px]
          pb-[34px]
          pt-[39px]

          lg:hidden
        "
      >
        {/* HEADER */}
        <h2
          className="
            m-0
            text-[54px]
            font-normal
            leading-[1.02]
            tracking-[-2.4px]
          "
        >
          Latest Blogs
        </h2>

        <p
          className="
            m-0
            mt-[27px]
            max-w-[380px]
            text-[23px]
            font-normal
            leading-[1.55]
            tracking-[-0.4px]
          "
        >
          Discover smarter ways to save
          <br />
          and give back.
        </p>

        {/* MOBILE CAROUSEL */}
        <div
          className="
            -ml-[23px]
            mt-[25px]
            flex
            w-screen
            gap-[15px]
            overflow-x-auto
            overflow-y-hidden
            pl-[23px]
            pr-0
            pb-[2px]

            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* VIEW ALL */}
        <Link
          href="#all-blogs"
          className="
            mt-[23px]
            flex
            h-[60px]
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