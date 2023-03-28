/* eslint-disable @next/next/no-img-element */
import { IGender } from "@/graphql/store";
import React from "react";

interface RateProps {
  version: IGender;
  rate: number | string;
  population: number | string;
}

const Rate = (props: RateProps) => {
  const { version, rate, population } = props;
  return (
    <div
      className="col-lg-6 col-sm-6 col-6 mb-sm-3 mb-xs-4 flex-center"
      style={{ transform: "translateY(20px)" }}
    >
      <div className="rate">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 228 182"
          fill="none"
        >
          <g clip-path="url(#a)">
            <path
              fill="#fff"
              d="M218 40.09H10c-5.523 0-10 4.477-10 10v121.834c0 5.522 4.477 10 10 10h208c5.523 0 10-4.478 10-10V50.09c0-5.523-4.477-10-10-10Z"
            />
            <path
              fill={version === "Female" ? "#FE5717" : "#7CBC39"}
              d="M0 15.263v75.66h228v-75.66a8.932 8.932 0 0 0-8.932-8.932H8.932C3.999 6.337 0 10.336 0 15.263Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M34.464 29.83a5.284 5.284 0 1 0 0-10.568 5.284 5.284 0 0 0 0 10.567Z"
            />
            <path
              fill="#fff"
              d="M34.463 26.526a3.025 3.025 0 0 1-3.027-3.027V3.027A3.025 3.025 0 0 1 34.462 0a3.025 3.025 0 0 1 3.027 3.027V23.5a3.025 3.025 0 0 1-3.027 3.027Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M66.682 29.83a5.284 5.284 0 1 0 0-10.569 5.284 5.284 0 0 0 0 10.569Z"
            />
            <path
              fill="#fff"
              d="M66.682 26.526a3.025 3.025 0 0 1-3.028-3.027V3.027A3.025 3.025 0 0 1 66.682 0a3.025 3.025 0 0 1 3.027 3.027V23.5a3.025 3.025 0 0 1-3.027 3.027Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M98.907 29.83a5.284 5.284 0 1 0 0-10.569 5.284 5.284 0 0 0 0 10.569Z"
            />
            <path
              fill="#fff"
              d="M98.906 26.526A3.025 3.025 0 0 1 95.88 23.5V3.027A3.025 3.025 0 0 1 98.906 0a3.026 3.026 0 0 1 3.028 3.027V23.5a3.026 3.026 0 0 1-3.028 3.027Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M131.133 29.828a5.284 5.284 0 1 0 0-10.568 5.284 5.284 0 0 0 0 10.568Z"
            />
            <path
              fill="#fff"
              d="M131.132 26.525a3.026 3.026 0 0 1-3.028-3.027V3.026A3.026 3.026 0 0 1 131.132 0a3.025 3.025 0 0 1 3.027 3.027v20.472a3.025 3.025 0 0 1-3.027 3.027Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M163.346 29.83a5.283 5.283 0 1 0 .001-10.567 5.283 5.283 0 0 0-.001 10.566Z"
            />
            <path
              fill="#fff"
              d="M163.346 26.526a3.026 3.026 0 0 1-3.028-3.027V3.027A3.026 3.026 0 0 1 163.346 0a3.025 3.025 0 0 1 3.027 3.027V23.5a3.025 3.025 0 0 1-3.027 3.027Z"
            />
            <path
              fill={version === "Female" ? "#D2440E" : "#61A11E"}
              d="M195.571 29.83a5.284 5.284 0 1 0 0-10.569 5.284 5.284 0 0 0 0 10.569Z"
            />
            <path
              fill="#fff"
              d="M195.57 26.526a3.025 3.025 0 0 1-3.027-3.027V3.027A3.025 3.025 0 0 1 195.57 0a3.026 3.026 0 0 1 3.028 3.027V23.5a3.026 3.026 0 0 1-3.028 3.027ZM82.6 75v-7.86h2.58L90.97 75h4.47l-6.57-8.58c1.74-.6 4.05-2.4 4.05-6 0-3.63-1.89-6.48-7.62-6.48-.6 0-5.22.06-6.39.06v21h3.69Zm2.52-17.61c3 0 3.9 1.41 3.9 3.06 0 2.16-1.89 3.24-4.02 3.24h-2.4v-6.24c.99-.03 1.83-.06 2.52-.06ZM95.78 75h3.72l2.19-5.37h8.97l2.19 5.37h3.93l-8.88-21.06h-3.24L95.78 75Zm10.41-16.29 3.06 7.47h-6.15l3.09-7.47Zm9.28-1.26h6.81V75h3.69V57.45h6.81V54h-17.31v3.45ZM135.98 75h12.45v-3.45h-8.76v-5.43h7.56v-3.45h-7.56v-5.22h8.46V54h-12.15v21Z"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h228v181.924H0z" />
            </clipPath>
          </defs>
          <text className="rate__label" x="50%" y="150">
            {rate || 0}
          </text>
        </svg>
      </div>
      <h5 className="rate__population">
        #{population.toLocaleString("en-US")}
      </h5>
    </div>
  );
};

export default Rate;
