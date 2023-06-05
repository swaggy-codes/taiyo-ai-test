import { getApiWithoutToken } from "./ApiMethods";

export const getAllCountries = () => {
  return getApiWithoutToken(`https://disease.sh/v3/covid-19/countries`);
};

export const getHistoryDataForChart = () => {
  return getApiWithoutToken(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`);
};
