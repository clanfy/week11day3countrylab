var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  makeRequest(url, requestCompleted);

  // var select = document.querySelector('select');
  // select.onchange = handleSelectChanged;

};

var makeRequest = function(url, callback){
  //create a new XMLHttpRequest, available in the browser
  var request = new XMLHttpRequest();
  //open the request and tell it what http method we want it to use
  request.open("GET", url);
  //set the callback we want it to run when the request object has completed it's request
  request.onload = callback;
  //send the request
  request.send();
};

var requestCompleted = function(){

  console.log("Whoot! Success");
  if(this.status !== 200) return;
  var countries = getCountries(this.responseText);
  // populateList(countries);
  populateSelect(countries);



};

var getCountries = function(responseText){
  var jsonString = responseText;
  var countries = JSON.parse(jsonString);
  return countries;
};

// // function for just sticking the info onto the page - goes to the DOM and populates the page with all the countries
// var populateList = function(countries){
//   var ul = document.getElementById('country-list');
//   countries.forEach(function(country){
//     var li = document.createElement('li');
//     li.innerText = country.name;
//     ul.appendChild(li);
//   });

// };

var populateSelect = function(countries){
  console.log(countries);
  var select = document.getElementById('country-select');

  countries.forEach(function(country, index){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = index;
    select.appendChild(option);
  });
  select.addEventListener('change', function(){
    console.log(this.value);
    console.log(countries[this.value]);
    // populatePTags(country)
  });

};

// var handleSelectChanged = function(event){
//   console.log(event.target);
//   var country = findCountry( event.target.value );
//   // console.log(event.target.value);
//   console.log(event.target.value);
//   var pTag = document.querySelector('#select-result');
//   console.log(country);
//   pTag.innerText = country.name;
// };

// var findCountry = function(index){
//   var countries = getCountries(responseText);
//   console.log(countries);
//   var country = countries[index];
//   return country;
// };


window.onload = app;