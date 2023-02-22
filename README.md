# SPA-countries-app

## preparation:
- clone the repo
- install the dependencies: npm i

## tasks:

1) In App.js, route to the pages components you find in folder `views` using react-router-dom.
2) in AllCountries component:
- fetch all the countries on load (which hook do we use for this?) from restcountries using this URL https://restcountries.com/v2/all

- save the received array of countries in a local state {countries}

- show each country in the array {countries} using the template component CountryCard

3) in ByRegion component, you find a local state called {region} already exists with an initial value:
- fetch the countries by region on load (which hook do we use for this?) and make sure it gets executed every time the state {region} changes (what should you add to that hook?) using this URL https://restcountries.com/v2/region/{region} 

- save the received array of countries in a local state {countries}

- show each country in the array {countries} using the template component CountryCard

- add a change event to the radio inputs to save their values in the state {region} when they change.

4) in ByName component:
- save the user input in a local state then use it to fetch a country by name onSubmit using this URL https://restcountries.com/v2/name/{name}

- save the received object of the searched country in a local state {country} then show it using the component SearchResult

First Page:
<img src='./mockups/mock1.png' alt='all'/>
Second Page:
<img src='./mockups/mock2.png' alt='region'/>
Third Page:
<img src='./mockups/mock3.png' alt='search'/>

5) New task:

- create a new page component and call it OneCountry
- make a Route for it that accepts a parameter in it's path, name it (:code)
- make the link that leads to this page so it contains CountryCard so that when we click anywhere inside that card it should take us to the page OneCountry along with the :code param which is coming from the country object under a property called alpha2Code (country.alpha2Code)
- finally, make a fetch in OneCountry on page load, to fetch the country with the code you received in the URL parameter (:code), use this URL to do the fetch: 
`https://restcountries.com/v2/alpha/${code}` then save the response object in a local state (country) and show at least 9 or 10 of its properties to the user