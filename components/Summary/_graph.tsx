import { useDeath, useFilters } from "@/context/CategoryProvider";
import { IGender } from "@/graphql/store";
import useCancerPerYear from "@/hooks/useCancerPerYear";
import React from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";

interface GraphProps {
  version: IGender;
}

const Graph = (props: GraphProps) => {
  const { version } = props;
  const cancer = useCancerPerYear();
  return (
    <div className="graph">
      <ResponsiveContainer
        width="100%"
        height={300}
        className={`graph__box ${
          version === "Female" ? "graph__box--female" : "graph__box--male"
        }`}
      >
        <AreaChart data={cancer[version]}>
          <defs>
            <linearGradient id="female" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffece6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffece6" stopOpacity={0} />
            </linearGradient>
            <linearGradient
              gradientTransform="rotate(0, 0.5, 0.5)"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="male"
            >
              <stop stop-color="#c2f58d" stop-opacity="1" offset="0%"></stop>
              <stop stop-color="#ffffff" stop-opacity="1" offset="100%"></stop>
            </linearGradient>
            <filter
              id="ffflux-filter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.001 0.001"
                numOctaves="1"
                seed="2"
                stitchTiles="stitch"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                result="turbulence"
              ></feTurbulence>
              <feGaussianBlur
                stdDeviation="0 0"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="turbulence"
                edgeMode="duplicate"
                result="blur"
              ></feGaussianBlur>
              <feBlend
                mode="color-dodge"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                in2="blur"
                result="blend"
              ></feBlend>
            </filter>
          </defs>
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            content={<CustomTooltip gender={version} />}
          />
          <XAxis dataKey="_id" hide />
          <Area
            type="monotone"
            dataKey="percentage"
            stroke={version === "Male" ? "#7CBC39" : "#fe5e21"}
            strokeWidth={4}
            fillOpacity={1}
            fill={version === "Male" ? "url(#male)" : "url(#female)"}
            activeDot={<CustomActiveDot version={version} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = (props: any) => {
  const { active, payload, label, gender } = props;
  const filters = useFilters();

  if (active && payload && payload.length) {
    let appliedFilters: string[] = [];
    filters?.disease[gender] && appliedFilters.push(filters?.disease[gender]);
    filters?.race && appliedFilters.push(filters?.race);
    filters?.state && appliedFilters.push(filters?.state);
    return (
      <div className="graph__tooltip">
        <p>
          {label} <span>{appliedFilters?.join(", ")}</span>
        </p>
        <h6 className={gender === "Female" ? "value__female" : "value__male"}>
          {Math.round(payload[0].value)}%
        </h6>
      </div>
    );
  }

  return null;
};

const CustomActiveDot = (props: any) => {
  const { cx, cy, version } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={10}
      stroke={version === "Female" ? "#FFA27E" : "#aae669"}
      stroke-width={5}
      fill={version === "Female" ? "#FE5717" : "#7CBC39"}
    />
  );
};

export default Graph;
