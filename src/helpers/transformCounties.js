export const transformCountriesData = data => {
  return data.map(({ name, capital, flag, population, languages }) => ({
    id: name,
    country: name,
    flag: flag.medium,
    capital,
    population,
    languages,
  }));
};

export const transformCountryData = data => {
  return data.map(
    ({ official_name, flag, capital, population, languages }) => ({
      id: official_name,
      countryName: official_name,
      flag: flag.medium,
      capital,
      population,
      languages: Object.values(languages),
    }),
  );
};
