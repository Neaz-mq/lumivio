import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ setLoading }) {
  const circleRef = useRef(null);
  const progressRef = useRef(null); // Ref for the percentage element
  const [progress, setProgress] = useState(0);

  // Animate percentage smoothly
  useEffect(() => {
    gsap.to({ val: 0 }, {
      val: 100,
      duration: 2.5, // 2.5 seconds total
      ease: "power1.out",
      onUpdate: function () {
        setProgress(Math.floor(this.targets()[0].val));
      },
      onComplete: () => {
        setTimeout(() => setLoading(false), 300);
      },
    });
  }, [setLoading]);

  // Animate the circular text rotation
  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        rotation: 360,
        transformOrigin: "50% 50%",
        repeat: -1,
        ease: "linear",
        duration: 6,
      });
    }
  }, []);

  const circularText = " LUMIVIO • ".repeat(10);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-darkBg z-50">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Rotating circular text */}
        <svg className="w-64 h-64" viewBox="0 0 220 220" ref={circleRef}>
          <defs>
            <path
              id="circlePath"
              d="M110,110 m -95,0 a 95,95 0 1,1 190,0 a 95,95 0 1,1 -190,0"
            />
          </defs>

          <text
            className="font-extrabold text-2xl fill-white"
            dominantBaseline="middle"
            textAnchor="middle"
          >
            <textPath
              href="#circlePath"
              startOffset="0"
              className="fill-white"
              method="align"
              spacing="auto"
            >
              {circularText}
            </textPath>
          </text>
        </svg>

        {/* Center percentage */}
        <div className="absolute flex flex-col items-center justify-center">
          <h1
            ref={progressRef}
            className="text-4xl font-bold text-lightText"
          >
            {progress}%
          </h1>
        </div>
      </div>
    </div>
  );
}
