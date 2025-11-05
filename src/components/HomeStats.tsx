import { useState, useEffect } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
};

const stats: Stat[] = [
  { label: "Social Media Reach", value: 4500, suffix: "+" }, // 45M+
  { label: "Community Members", value: 1000, suffix: "+" },   // 500K+
  { label: "Events Hosted", value: 30, suffix: "+" },          // 200+
  { label: "Leaders Trained", value: 15, suffix: "+" },        // 500+
];

type AnimatedNumberProps = {
  value: number;
  duration: number;
  suffix: string;
};

const AnimatedNumber = ({ value, duration, suffix }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // ~60fps
    const step = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [value, duration]);

  const formatNumber = (num: number): string => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(0) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const HomeStats = () => (
  <section className="bg-gray-100 py-10 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
    {stats.map((stat, i) => (
      <div key={i}>
        <h3 className="text-2xl font-bold text-purple-700">
          <AnimatedNumber value={stat.value} duration={5000} suffix={stat.suffix} />
        </h3>
        <p className="text-gray-600">{stat.label}</p>
      </div>
    ))}
  </section>
);

export default HomeStats;
