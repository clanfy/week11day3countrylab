var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  makeRequest(url, requestCompleted);

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;

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
  //callback called successfully
  console.log("Whoot! Success");
  //checking our status
  if(this.status !== 200) return;
// this = request object, responseText is what we've got back from the API
var jsonString = this.responseText;
  //parse the json string into objects
  var countries = JSON.parse(jsonString);
  // populateList(countries);
  populateSelect(countries);
};

// function for just sticking the info onto the page - goes to the DOM and populates the page with all the countries
// var populateList = function(countries){
//   var ul = document.getElementById('country-list');

//   //loop through all the countries, create an li and then append it to the ul
//   countries.forEach(function(country){
//     var li = document.createElement('li');
//     li.innerText = country.name;
//     ul.appendChild(li);
//   });

// };

var populateSelect = function(countries){

  var select1 = document.getElementById('country-select');

  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;
    select1.appendChild(option);
  });
};


var handleSelectChanged = function(e){
  var pTag = document.querySelector('#select-result');
  pTag.innerText = this.value;
  console.log(e);
};


window.onload = app;