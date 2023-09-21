// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let avg = moviesFromDirector.reduce((prev, cur) => prev + cur.score,0)/moviesFromDirector.length;
  return parseFloat(avg.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titles = array.map((movie) => movie.title);
  let sortedTitles = titles.sort((a, b) => a.localeCompare(b));
  let sortedTitles20 = sortedTitles.slice(0,20);
  return sortedTitles20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayClone = [...array];
  let sortYear = arrayClone.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return sortYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let moviesCategory = array.filter((movie) => movie.genre.includes(category) && movie.score != "");
  let avg = moviesCategory.reduce((prev, cur) => prev + cur.score,0)/moviesCategory.length;
  return parseFloat(avg.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
