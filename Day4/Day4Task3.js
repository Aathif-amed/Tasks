function task3() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://restcountries.com/v2/all");
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = function displayResult() {
    const countries = xhr.response;
    for (var i in countries) {
      console.log(`${Number(i) + 1} Country Name : ${countries[i].name}
    Region: ${countries[i].region}
    Sub Region:${countries[i].subregion}
    Population:${countries[i].population}`);
    }
  };
}
