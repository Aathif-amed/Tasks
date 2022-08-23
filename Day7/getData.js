const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all", true);
xhr.send();
xhr.responseType = "json";

xhr.onload = function displayResult() {
  const countries = xhr.response;

  //a)Get all the countries from the Asia continent /region using the Filter function

  let regionOfasia = countries.filter((connames) => {
    return connames.region == "Asia";
  });
  console.log("All the countries from the Asia continent /region");
  console.log(regionOfasia);

  //-----------------------------------------------------------------------------
  // b) Get all the countries with a population of less than 2 lakhs usingFilter function

  let population = countries.filter((connames) => {
    return connames.population <= 200000;
  });
  console.log(
    " b) Get all the countries with a population of less than 2 lakhs"
  );
  console.log(population);

  //-----------------------------------------------------------------------------
  //c) Print the following details name, capital, flag using forEach function

  console.log(" c)Name, capital, flag using forEach function");
  countries.forEach((con) =>
    console.log(`Name:${con.name}
  Capital:${con.capital}
  Flag:${con.flag}`)
  ); //printed in the console because foreach always returns undefined

  //-----------------------------------------------------------------------------
  //d) Print the total population of countries using reduce function

  let totalPopulation = countries
    .map((x) => x.population) // iterated using map function because previous function value will be undefiened as we access as accu.population.
    .reduce((accu, curr) => {
      return accu + curr;
    });
  console.log("d)Total Population of the Countries:" + totalPopulation);

  //-----------------------------------------------------------------------------
  //e) Print the country which uses US Dollars as currency

  let filterCountries = countries.filter((element) => {
    return element.currencies !== undefined;
  }); // countires are filtered because antartica has no currency .
  //it throws an error while itertaing for countries using usd dollars as one country value is not defined.
  // console.log(filterCountries);

  let usdCountries = filterCountries.filter((counnames) => {
    for (let i in counnames.currencies) {
      if (counnames.currencies[i].code === "USD") {
        return counnames;
      }
    }
  });
  console.log("e) Print the country which uses US Dollars as currency.");
  console.log(usdCountries);

  //-----------------------------------------------------------------------------
};
