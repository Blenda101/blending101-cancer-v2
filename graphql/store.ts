import { makeVar, ReactiveVar } from "@apollo/client";

export type IGender = "Male" | "Female";
export type ICategory = "Incidence" | "Death";

export interface TypeState {
  disease: {
    Male: string;
    Female: string;
  };
  age: string;
  race: string;
  state: string;
  year: string;
}

export interface CategoryState {
  Incidence: TypeState;
  Death: TypeState;
}

const InitialState: CategoryState = {
  Incidence: {
    disease: {
      Male: "Bladder",
      Female: "Breast",
    },
    age: "",
    race: "",
    state: "",
    year: "2018",
  },
  Death: {
    disease: {
      Male: "Bladder",
      Female: "Brain",
    },
    age: "",
    race: "",
    state: "",
    year: "2018",
  },
};

export const filtersVar: ReactiveVar<CategoryState> =
  makeVar<CategoryState>(InitialState);
