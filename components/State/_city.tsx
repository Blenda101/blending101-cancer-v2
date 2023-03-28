import React, { useEffect, useMemo, useRef } from "react";
import Tippy from "@tippyjs/react";

import Tooltip from "../Shared/Tooltip";

import { useCategory, useDeath } from "@/context/CategoryProvider";
import { filtersVar, IGender } from "@/graphql/store";
import { STATE_FULL_FORM } from "@/data/State";

interface StateProps {
  id: string;
  maps: any;
  gender: IGender;
  children: React.ReactNode;
}
const City = (props: StateProps) => {
  const { id, maps, gender, children } = props;

  const { isDeath } = useDeath();
  const type = useCategory();
  const filters = filtersVar();

  console.log("first");

  const stateRef = useRef<SVGGElement>(null);
  const [color, textColor] = useMemo(() => {
    const value = maps ? (maps as any)[id]?.quartile : 0;
    let color = "",
      text = "black";
    if (value === 1) {
      color =
        gender === "Female"
          ? "rgba(var(--rgb-female), 0.2)"
          : "rgba(var(--rgb-male), 0.2)";
    } else if (value === 2) {
      color =
        gender === "Female"
          ? "rgba(var(--rgb-female), 0.4)"
          : "rgba(var(--rgb-male), 0.4)";
    } else if (value === 3) {
      color =
        gender === "Female"
          ? "rgba(var(--rgb-female), 0.6)"
          : "rgba(var(--rgb-male), 0.6)";
    } else if (value === 4) {
      color =
        gender === "Female"
          ? "rgba(var(--rgb-female), 0.8)"
          : "rgba(var(--rgb-male), 0.8)";
    } else {
      color = "rgba(0,0,0,0.1)";
    }
    return [color, text];
  }, [gender, id, maps]);

  useEffect(() => {
    if (!stateRef.current) return;
    const text: SVGPathElement = stateRef.current.children[1] as any;
    const polygon: SVGPathElement = stateRef.current.children[0] as any;

    polygon.style.opacity = "1";
    polygon.style.fill = color;
    polygon.style.outline = "none";
    text.style.fill = textColor;

    if (id === filters[type].state) {
      // IF THAT STATE IS ALREADY SELECTED -> UNSELECT
      polygon.style.stroke = isDeath ? "#fff" : "#333";
      polygon.style.strokeWidth = "3";
      text.style.stroke = "none";
    } else {
      polygon.style.stroke = "none";
    }
  }, [color, filters, id, isDeath, textColor, type]);

  const stateSelectHandler = () => {
    if (id !== filters[type].state) {
      filtersVar({
        ...filters,
        [type]: {
          ...filters[type],
          state: id,
        },
      });
    } else {
      filtersVar({
        ...filters,
        [type]: {
          ...filters[type],
          state: "",
        },
      });
    }
  };

  return (
    <Tippy
      content={
        <Tooltip
          title={maps ? maps[id]?.fullForm || STATE_FULL_FORM[id] : ""}
          value={maps ? maps[id]?.percentage : 0}
          dot={maps && maps[id]?.fullForm ? color : "#fff"}
          gender={gender}
        />
      }
      placement="bottom"
      delay={[2000, 200]}
    >
      <g
        id={id}
        ref={stateRef}
        style={{ cursor: "pointer" }}
        onClick={stateSelectHandler}
      >
        {children}
      </g>
    </Tippy>
  );
};
export default City;
