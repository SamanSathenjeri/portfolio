"use client";

//https://www.youtube.com/watch?v=JYfiaSKeYhE

import { useEffect, useRef, useState } from "react";
import "./project.css";
import GlowingCard from "./projectCard/projectCard";

const ProjectSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`body flex min-h-[100vh] w-full p-10 transition-colors duration-700 ease-out
        ${active ? "bg-black" : "bg-[#f5f5f7]"}`}
    >
      <div
        className={`grid-container w-full grid gap-4 transition-all duration-700
  ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <GlowingCard className="item" style={{ gridArea: "box-1" }}>
          <h3>Item 1</h3>
        </GlowingCard>
        <GlowingCard className="item" style={{ gridArea: "box-2" }}>
          <h3>Item 2</h3>
        </GlowingCard>
        <GlowingCard className="item" style={{ gridArea: "box-3" }}>
          <h3>Item 3</h3>
        </GlowingCard>
        <GlowingCard className="item" style={{ gridArea: "box-4" }}>
          <h3>Item 4</h3>
        </GlowingCard>
        <GlowingCard className="item" style={{ gridArea: "box-5" }}>
          <h3>Item 5</h3>
        </GlowingCard>
      </div>
    </section>
  );
};

export default ProjectSection;
