import { useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const coreElements = [
  { id: "1", label: "UseState", to: "/use-state" },
  { id: "2", label: "UseEffect", to: "/use-effect" },
  { id: "3", label: "UseContext", to: "/use-context" },
  { id: "4", label: "UseRef", to: "/use-ref" },
];

const efficientElements = [
  { id: "1", label: "UseMemo", to: "/use-memo" },
  { id: "2", label: "UseTransition", to: "/use-transition" },
  { id: "3", label: "UseCallback", to: "/use-callback" },
];

const componentElements = [
  { id: "1", label: "Fragment", to: "/fragment" },
  { id: "2", label: "Suspense", to: "/suspense" },
  { id: "3", label: "Profiler", to: "/profiler" },
];

export default function Tree() {
  // Container ref for the entire flowchart
  const containerRef = useRef<HTMLDivElement>(null);

  // Main node refs
  const reactRef = useRef<HTMLDivElement>(null);
  const hooksRef = useRef<HTMLDivElement>(null);
  const componentsRef = useRef<HTMLDivElement>(null);

  // Sub-category refs
  const coreRef = useRef<HTMLDivElement>(null);
  const efficientRef = useRef<HTMLDivElement>(null);

  // Element refs (using arrays to hold multiple refs)
  const coreElementRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const efficientElementRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const componentElementRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  return (
    <div className="flex flex-col items-center justify-centertext-white p-4 min-h-[72vh] overflow-x-auto border border-purple-800 rounded-2xl">
      <div
        className="relative w-full min-w-[1200px] max-w-[90vw] mx-auto my-5"
        ref={containerRef}
      >
        {/* Root Node - React */}
        <div className="flex flex-col items-center mb-20">
          <div
            ref={reactRef}
            className="bg-indigo-800 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md shadow-indigo-900/50 z-10"
          >
            <span className="text-lg font-bold">React</span>
          </div>
        </div>

        {/* Main branches container */}
        <div className="flex justify-around relative mt-16">
          {/* Hooks Branch */}
          <div className="flex flex-col items-center mb-16">
            <div
              ref={hooksRef}
              className="bg-emerald-800 text-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg shadow-emerald-900/50 z-10"
            >
              <span className="text-sm font-bold">Hooks</span>
            </div>
            <div className="text-sm text-gray-400 mt-2 mb-8">
              State & Effects
            </div>

            {/* Sub-branches for Hooks */}
            <div className="flex justify-around gap-32 relative">
              {/* Core Hooks */}
              <div className="flex flex-col items-center">
                <div
                  ref={coreRef}
                  className="bg-amber-700 text-white w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg shadow-amber-900/50 z-10"
                >
                  <span className="text-xs font-bold">Core</span>
                </div>
                <div className="text-xs text-gray-400 mt-2 mb-8">Essential</div>

                {/* Core Hook Items */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-wrap justify-center gap-6 max-w-[300px]">
                    {coreElements.map((item, index) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        ref={(el) => {
                          coreElementRefs.current[index] = el;
                        }}
                        className={`bg-cyan-800 text-white w-16 h-16 flex items-center justify-center rounded-xl hover:bg-cyan-700 transition shadow-md hover:shadow-md hover:shadow-white shadow-cyan-900/50 z-10 ${
                          index % 2 === 1 ? "mx-2" : ""
                        }`}
                      >
                        <span className="text-xs font-bold text-white">
                          {item.label.slice(3)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Efficient Hooks */}
              <div className="flex flex-col items-center">
                <div
                  ref={efficientRef}
                  className="bg-violet-800 text-white w-18 h-14 flex items-center justify-center rounded-2xl shadow-lg shadow-violet-900/50 z-10"
                >
                  <span className="text-xs font-bold">Efficiency</span>
                </div>
                <div className="text-xs text-gray-400 mt-2 mb-8">
                  Performance
                </div>

                {/* Efficient Hook Items */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap justify-center gap-3 max-w-[300px]">
                    {efficientElements.map((item, index) => (
                      <Link
                        key={item.id}
                        to={item.to}
                        ref={(el) => {
                          efficientElementRefs.current[index] = el;
                        }}
                        className={`bg-purple-800 text-white w-16 h-16 flex items-center justify-center rounded-xl hover:bg-purple-700 transition shadow-md hover:shadow-md hover:shadow-white shadow-purple-900/50 z-10 ${
                          index % 2 === 1 ? "mx-2" : ""
                        }`}
                      >
                        <span className="text-xs font-bold text-white">
                          {item.label.slice(3)}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Components Branch */}
          <div className="flex flex-col items-center">
            <div
              ref={componentsRef}
              className="bg-rose-800 text-white w-20 h-16 flex items-center justify-center rounded-2xl shadow-lg shadow-rose-900/50 z-10"
            >
              <span className="text-xs font-bold">Components</span>
            </div>
            <div className="text-sm text-gray-400 mt-2 mb-8">UI Building</div>

            {/* Component Items */}
            <div className="grid grid-cols-3 gap-3">
              {componentElements.map((item, index) => (
                <Link
                  key={item.id}
                  to={item.to}
                  ref={(el) => {
                    componentElementRefs.current[index] = el;
                  }}
                  className="bg-pink-800 text-white w-16 h-16 flex items-center justify-center rounded-md hover:bg-pink-700 transition shadow-md hover:shadow-md hover:shadow-white shadow-pink-900/50 z-10"
                >
                  <span className="text-xs font-bold text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Beams */}
        {/* React to Hooks */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reactRef}
          toRef={hooksRef}
          pathColor="#475569"
          pathWidth={3} // Increased from 1.5 to 3
          pathOpacity={0.5} // Increased from 0.3 to 0.5
          curvature={20}
          gradientStartColor="#4338ca"
          gradientStopColor="#065f46"
          delay={0.2}
        />

        {/* React to Components */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={reactRef}
          toRef={componentsRef}
          pathColor="#475569"
          pathWidth={3} // Increased from 1.5 to 3
          pathOpacity={0.5} // Increased from 0.3 to 0.5
          curvature={20}
          gradientStartColor="#4338ca"
          gradientStopColor="#9f1239"
          delay={0.4}
        />

        {/* Hooks to Core */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hooksRef}
          toRef={coreRef}
          pathColor="#475569"
          pathWidth={3} // Increased from 1.5 to 3
          pathOpacity={0.5} // Increased from 0.3 to 0.5
          curvature={10}
          gradientStartColor="#065f46"
          gradientStopColor="#b45309"
          delay={0.6}
        />

        {/* Hooks to Efficient */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={hooksRef}
          toRef={efficientRef}
          pathColor="#475569"
          pathWidth={3} // Increased from 1.5 to 3
          pathOpacity={0.5} // Increased from 0.3 to 0.5
          curvature={10}
          gradientStartColor="#065f46"
          gradientStopColor="#6d28d9"
          delay={0.8}
        />

        {/* Connect Core to its elements */}
        {coreElements.map((_, index) => (
          <AnimatedBeam
            key={`core-beam-${index}`}
            containerRef={containerRef}
            fromRef={coreRef}
            toRef={{ current: coreElementRefs.current[index] }}
            pathColor="#475569"
            pathWidth={2} // Increased from 1 to 2
            pathOpacity={0.4} // Increased from 0.2 to 0.4
            curvature={5}
            gradientStartColor="#b45309"
            gradientStopColor="#0e7490"
            delay={1 + index * 0.1}
          />
        ))}

        {/* Connect Efficient to its elements */}
        {efficientElements.map((_, index) => (
          <AnimatedBeam
            key={`efficient-beam-${index}`}
            containerRef={containerRef}
            fromRef={efficientRef}
            toRef={{ current: efficientElementRefs.current[index] }}
            pathColor="#475569"
            pathWidth={2} // Increased from 1 to 2
            pathOpacity={0.4} // Increased from 0.2 to 0.4
            curvature={5}
            gradientStartColor="#6d28d9"
            gradientStopColor="#7e22ce"
            delay={1.5 + index * 0.1}
          />
        ))}

        {/* Connect Components to its elements */}
        {componentElements.map((_, index) => (
          <AnimatedBeam
            key={`component-beam-${index}`}
            containerRef={containerRef}
            fromRef={componentsRef}
            toRef={{ current: componentElementRefs.current[index] }}
            pathColor="#475569"
            pathWidth={2} // Increased from 1 to 2
            pathOpacity={0.4} // Increased from 0.2 to 0.4
            curvature={5}
            gradientStartColor="#9f1239"
            gradientStopColor="#be185d"
            delay={2 + index * 0.1}
          />
        ))}
      </div>

      <p className="flex flex-col text-gray-400 text-xl mt-12">
        <span className="text-md text-red-700">
          NOTE: Click on Leaf Nodes to Navigate
        </span>
        Interactive React Ecosystem Flowchart
      </p>
    </div>
  );
}
