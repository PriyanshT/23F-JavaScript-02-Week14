// constants from html using query selector
const search = document.querySelector(".searchInput");
const submitBtn = document.querySelector("#searchButton");
const tableBody = document.querySelector("#tableBody");

// creating base URL and parameters as constants
const baseURL = "https://www.omdbapi.com/";
const apiKey = "8127fd11";

// create a function that completes the url and do a fetch request
function fetchDataFromAPI() {
    // store the search data
    let searchData = search.value;

    // check if search data is null or not
    if (searchData === "") {
        alert("Please Enter a Movie Name!");
    } else {
        // build the complete url
        let url = `${baseURL}?apikey=${apiKey}&s=${searchData}`;
        console.log(url);

        // fetch the data from the API
        fetch(url).then(response => response.json()).then(json => displayTableBody(json));
    }
}

// function which displays json data to html
function displayTableBody(json) {
    console.log(json);
}

// add a listener to the submit button to call the fuction
submitBtn.addEventListener("click", fetchDataFromAPI);