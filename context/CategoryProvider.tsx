import { filtersVar } from "@/graphql/store";
import React, { useState, useContext, createContext, useRef } from "react";

interface IAuthContext {
  isDeath: boolean;
  onIncidence: () => void;
  onDeath: () => void;
}

const VariantContext = createContext<IAuthContext>({
  isDeath: false,
  onIncidence: () => {},
  onDeath: () => {},
});

interface CategoryProviderProps {
  children: React.ReactNode;
}

const CategoryProvider: React.FC<CategoryProviderProps> = (props) => {
  const { children } = props;
  const [death, setDeath] = useState<any>(false);

  const onIncidenceSelect = () => {
    setDeath(false);
    const root: any = document.querySelector(":root");
    if (!root) return;

    root.style.setProperty("--body", "#fff");
    root.style.setProperty("--header", "#fff");

    root.style.setProperty("--bg-summary", "#f6f6f6");
    root.style.setProperty("--bg-item", "#EFEAEA");

    root.style.setProperty("--shadow-summary", "none");
    root.style.setProperty("--shadow-gender", "none");
    root.style.setProperty("--shadow-composition", "none");
    root.style.setProperty("--shadow-graph", "none");
    root.style.setProperty("--shadow-figure", "none");
    root.style.setProperty("--shadow-item", "none");
    root.style.setProperty("--shadow-state-range", "none");
  };

  const onDeathSelect = () => {
    setDeath(true);

    const root: any = document.querySelector(":root");
    if (!root) return;

    root.style.setProperty("--body", "#e2e2e2");
    root.style.setProperty("--header", "#e4e4e4");

    root.style.setProperty("--bg-summary", "#efeff2");
    root.style.setProperty("--bg-item", "#efeff2");

    root.style.setProperty(
      "--shadow-summary",
      `7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4),
    -7.43046px -7.43046px 14.8609px rgba(255, 255, 255, 0.5),
    7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4)`,
    );
    root.style.setProperty(
      "--shadow-gender",
      `7.43046px 7.43046px 18.5761px rgb(174 174 192 / 40%), -7.43046px -7.43046px 14.8609px #ffffff, -7.43046px -7.43046px 14.8609px #ffffff, 7.43046px 7.43046px 18.5761px rgb(174 174 192 / 40%)`,
    );
    root.style.setProperty(
      "--shadow-composition",
      `drop-shadow(7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4))
      drop-shadow(-7.43046px -7.43046px 14.8609px #ffffff)
      drop-shadow(-7.43046px -7.43046px 14.8609px #ffffff)
      drop-shadow(7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4))`,
    );
    root.style.setProperty(
      "--shadow-graph",
      `drop-shadow(7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4)) drop-shadow(-7.43046px -7.43046px 14.8609px #ffffff) drop-shadow(-7.43046px -7.43046px 14.8609px #ffffff) drop-shadow(7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4))`,
    );
    root.style.setProperty(
      "--shadow-figure",
      `15px 15px 30px #cbc9c9, -15px -15px 30px #f3f1f1`,
    );
    root.style.setProperty(
      "--shadow-item",
      `drop-shadow(-13px -2px 6px #fff) drop-shadow(2px 4px 6px #e9e7e7) drop-shadow(12px 4px 18px rgba(0, 0, 0, 0.1098039216))`,
    );
    root.style.setProperty(
      "--shadow-state-range",
      `7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4),
    -7.43046px -7.43046px 14.8609px #ffffff,
    -7.43046px -7.43046px 14.8609px #ffffff,
    7.43046px 7.43046px 18.5761px rgba(174, 174, 192, 0.4)`,
    );
  };

  return (
    <VariantContext.Provider
      value={{
        isDeath: death,
        onIncidence: onIncidenceSelect,
        onDeath: onDeathSelect,
      }}
    >
      {children}
    </VariantContext.Provider>
  );
};

export default CategoryProvider;

export const useDeath = () => {
  const { isDeath } = useContext(VariantContext);
  return { isDeath, isIncidence: !isDeath };
};

export const useCategory = () => {
  const { isDeath } = useContext(VariantContext);
  return isDeath ? "Death" : "Incidence";
};

export const useFilters = () => {
  const filters = filtersVar();
  const { isDeath } = useContext(VariantContext);
  return isDeath ? filters.Death : filters.Incidence;
};

export const useCategoryToggler = () => {
  const { onIncidence, onDeath } = useContext(VariantContext);
  return { onIncidence, onDeath };
};
