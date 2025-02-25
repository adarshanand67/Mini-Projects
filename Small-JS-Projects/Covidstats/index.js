// Covid api call
url = "https://api.covid19api.com/summary";

// Country: "Afghanistan";
// CountryCode: "AF";
// Date: "2022-07-25T07:46:40.633Z";
// ID: "a69c8873-7fac-446b-99f3-7b6a5ddf804b";
// NewConfirmed: 0;
// NewDeaths: 0;
// NewRecovered: 0;
// Slug: "afghanistan";
// TotalConfirmed: 184587;
// TotalDeaths: 7738;
// TotalRecovered: 0;

// initalize the jquery
// $(document).ready(function () {
//   $("#covid-table").DataTable();
// });


// hit a request to the covid api
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    let countryData = data.Countries;
    // console.log(countryData);
    // console.log(countryData[0]);
    // let date = countryData[i].Date;
    // let datetime = document.createElement("td");
    // datetime.innerHTML = date;
    // document.getElementById("time").appendChild(datetime);

    for (var i = 0; i < countryData.length; i++) {
      let country =
        countryData[i].Country + " (" + countryData[i].CountryCode + ")";
      let cases = countryData[i].TotalConfirmed;
      let deaths = countryData[i].TotalDeaths;
      let recovered = countryData[i].TotalRecovered;
      let active =
        countryData[i].TotalConfirmed -
        countryData[i].TotalRecovered -
        countryData[i].TotalDeaths;

      let countryRow = document.createElement("tr"); // create a row for each country
      let countryName = document.createElement("td");
      let countryCases = document.createElement("td");
      let countryDeaths = document.createElement("td");
      let countryRecovered = document.createElement("td");
      let countryActive = document.createElement("td");

      countryName.innerHTML = country;
      countryCases.innerHTML = cases;
      countryDeaths.innerHTML = deaths;
      countryRecovered.innerHTML = recovered;
      countryActive.innerHTML = active;

      countryRow.appendChild(countryName);
      countryRow.appendChild(countryCases);
      countryRow.appendChild(countryDeaths);
      countryRow.appendChild(countryRecovered);
      countryRow.appendChild(countryActive);

      document.getElementById("covid-table").appendChild(countryRow);
    }
  })
  .catch((error) => {
    console.log(error);
  });

// document.readyState(function () {
let covidTable = document.getElementById("covid-table");
covidTable.DataTable();
// })