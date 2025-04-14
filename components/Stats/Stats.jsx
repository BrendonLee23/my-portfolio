"use client"

import CountUp  from "react-countup"

const stats = [
  { number: 4, text: "Years of experience" },
  { number: 48, text: "Projects completed" },
  { number: 12, text: "Technologies mastered" },
  { number: 652, text: "Code commits" },
]
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div key={index} className="flex flex-1 items-center gap-4 justify-center xl:justify-start">
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
