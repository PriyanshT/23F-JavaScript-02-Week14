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

    // check if movie is found or not
    if (json.Response === "False") {
        alert("Error: " + json.Error);
    } else {
        // store the array of movies
        let movieArray = json.Search;

        // loop through all the movies
        for (let i = 0; i < movieArray.length; i++) {
            console.log(movieArray[i]);

            // create html elements
            let tableTr = document.createElement("tr"); // <tr></tr>
            let movieIdTd = document.createElement("td"); // <td></td>
            let titleTd = document.createElement("td"); // <td></td>
            let yearTd = document.createElement("td"); // <td></td>
            let posterTd = document.createElement("td"); // <td></td>

            tableTr.setAttribute("class", "table-danger");

            // add data to td elements
            movieIdTd.textContent = movieArray[i].imdbID;
            titleTd.textContent = movieArray[i].Title;
            yearTd.textContent = movieArray[i].Year;

            // create image element and add data
            let image = document.createElement("img"); // <img>
            image.setAttribute("src", movieArray[i].Poster); // <img src="...">
            image.setAttribute("alt", movieArray[i].Title + " image"); // <img src="..." alt="...">
            posterTd.appendChild(image);

            // append elements to the body tag
            tableTr.appendChild(movieIdTd);
            tableTr.appendChild(titleTd);
            tableTr.appendChild(yearTd);
            tableTr.appendChild(posterTd);

            tableBody.appendChild(tableTr);
        }
    }

    let searchDataArray = json.Search;
}

// add a listener to the submit button to call the fuction
submitBtn.addEventListener("click", fetchDataFromAPI);