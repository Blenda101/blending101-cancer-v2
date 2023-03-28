/* eslint-disable @next/next/no-img-element */
import { WaffleTooltip } from "../Shared/Tooltip";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { filtersVar, IGender } from "@/graphql/store";
import useDiseases from "@/hooks/useDiseases";
import Tippy from "@tippyjs/react";
import React, { ReactElement, useCallback, useMemo } from "react";

interface CompositionProps {
  version: IGender;
}

const Composition = (props: CompositionProps) => {
  const { version } = props;
  const filters = filtersVar();
  const category = useCategory();
  const { diseases } = useDiseases();

  const onWaffleClick = useCallback(
    (disease) => {
      console.log(disease);
      if (disease === "Others") return;
      filtersVar({
        ...filters,
        [category]: {
          ...filters[category],
          disease: {
            ...filters[category].disease,
            [version]: disease,
          },
        },
      });
    },
    [category, filters, version],
  );

  const boxes = useMemo(() => {
    const boxes: ReactElement[] = [];
    [...diseases[version]].sort()?.forEach((disease, index) => {
      const percantages = Math.round(disease?.percentage);
      for (let i = 0; i < percantages; i++) {
        boxes.push(
          <Tippy
            key={disease.type + i}
            content={
              <WaffleTooltip
                title={disease?.type || ""}
                value={percantages || 0}
                gender={version}
              />
            }
            placement="bottom"
            delay={[1000, 200]}
          >
            <span
              onClick={() => onWaffleClick(disease?.type)}
              className={
                filters[category].disease[version] === disease?.type
                  ? `composition__box--active-${version}`
                  : index % 2 === 0
                  ? `composition__box--even-${version}`
                  : `composition__box--odd-${version}`
              }
            />
          </Tippy>,
        );
      }
    });
    return boxes;
  }, [category, diseases, filters, onWaffleClick, version]);

  return (
    <div className="col-lg-6 col-sm-6 col-6 mb-sm-3 mb-xs-4">
      <div className="composition">
        <h3 className="composition__title">Proportion</h3>
        <div className="composition__box">{boxes}</div>
      </div>
    </div>
  );
};

export default Composition;
