import { gql } from "@apollo/client";

export const GET_DISEASES = gql`
  query GetDiseases(
    $dataSet: String
    $age: String
    $state: String
    $race: String
    $year: String
  ) {
    getCancerTypes(
      dataSet: $dataSet
      age: $age
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
    $age: String
    $state: String
    $maleDisease: String
    $femaleDisease: String
    $race: String
  ) {
    getCancerPerYear: getYearBasedAggregationForCancer(
      dataSet: $dataSet
      age: $age
      state: $state
      maleDisease: $maleDisease
      femaleDisease: $femaleDisease
      race: $race
    ) {
      maleData {
        _id
        weightedAverage
        percentage
      }
      femaleData {
        _id
        weightedAverage
        percentage
      }
    }
  }
`;

export const GET_RACE_DATA = gql`
  query GetRaceData(
    $dataSet: String
    $age: String
    $state: String
    $maleDisease: String
    $femaleDisease: String
    $year: String
  ) {
    getRaceData(
      dataSet: $dataSet
      age: $age
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

export const GET_AGE_DATA = gql`
  query GetAgeData(
    $dataSet: String
    $race: String
    $state: String
    $maleDisease: String
    $femaleDisease: String
    $year: String
  ) {
    getAgeData(
      dataSet: $dataSet
      race: $race
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
    $age: String
    $race: String
    $maleDisease: String
    $femaleDisease: String
    $year: String
  ) {
    getStateDataForCancer(
      dataSet: $dataSet
      age: $age
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
        age
        race
        state
      }
      Death {
        disease {
          Male
          Female
        }
        age
        race
        state
      }
    }
  }
`;
