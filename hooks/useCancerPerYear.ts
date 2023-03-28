import { useQuery } from "@apollo/client";
import { useCategory, useFilters } from "@/context/CategoryProvider";
import { GET_YEARWISE_CANCER } from "@/graphql/query";

const useCancerPerYear = () => {
  const category = useCategory();
  const filters = useFilters();

  const { data } = useQuery(GET_YEARWISE_CANCER, {
    variables: {
      dataSet: category,
      race: filters.race,
      maleDisease: filters.disease.Male,
      femaleDisease: filters.disease.Female,
      age: filters.age,
      state: filters.state,
    },
  });

  return {
    Male: data?.getCancerPerYear?.maleData || [],
    Female: data?.getCancerPerYear?.femaleData || [],
  };
};

export default useCancerPerYear;
