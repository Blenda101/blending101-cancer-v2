import { gql } from "@apollo/client";

export const GET_DISEASES = gql`
  query GetDiseases(
    $dataSet: String
    $state: String
    $race: String
    $year: String
  ) {
    getCancerTypes: getAllCancerTypes(
      dataSet: $dataSet
      race: $race
      state: $state
      year: $year
    ) {
      maleData {
        type: _id
        weightedAverage
        percentage
        totalPopulation
        totalCount
      }
      femaleData {
        type: _id
        weightedAverage
        percentage
        totalPopulation
        totalCount
      }
    }
  }
`;

export const GET_YEARWISE_CANCER = gql`
  query GetCancerPerYear(
    $dataSet: String
    $state: String
    $maleDisease: String
    $femaleDisease: String
    $race: String
  ) {
    getCancerPerYear: getYearBasedAggregationForAllCancer(
      dataSet: $dataSet
      state: $state
      maleDisease: $maleDisease
      femaleDisease: $femaleDisease
      race: $race
    ) {
      maleData {
        year: _id
        weightedAverage
        percentage
      }
      femaleData {
        year: _id
        weightedAverage
        percentage
      }
    }
  }
`;

export const GET_RACE_DATA = gql`
  query GetRaceData(
    $dataSet: String
    $state: String
    $maleDisease: String
    $femaleDisease: String
    $year: String
  ) {
    getAllCancerRaceData(
      dataSet: $dataSet
      state: $state
      maleDisease: $maleDisease
      femaleDisease: $femaleDisease
      year: $year
    ) {
      maleData {
        type: _id
        weightedAverage
        totalCount
      }
      femaleData {
        type: _id
        weightedAverage
        totalCount
      }
    }
  }
`;

export const GET_STATE_DATA = gql`
  query GetState(
    $dataSet: String
    $race: String
    $maleDisease: String
    $femaleDisease: String
    $year: String
  ) {
    getStateDataForAllCancer(
      dataSet: $dataSet
      race: $race
      maleDisease: $maleDisease
      femaleDisease: $femaleDisease
      year: $year
    ) {
      maleData
      femaleData
    }
  }
`;

export const GET_FILTERS = gql`
  query Filters {
    filters @client {
      Incidence {
        disease {
          Male
          Female
        }
        race
        state
      }
      Death {
        disease {
          Male
          Female
        }
        race
        state
      }
    }
  }
`;

export const GET_ALL_RATES = gql`
  query GetAllCancerRates(
    $dataSet: String
    $state: String
    $race: String
    $year: String
  ) {
    getAllCancerRate: getallCancerProportionMatrix(
      dataSet: $dataSet
      race: $race
      state: $state
      year: $year
    ) {
      maleData {
        weightedAverage
        totalCount
      }
      femaleData {
        weightedAverage
        totalCount
      }
    }
  }
`;
