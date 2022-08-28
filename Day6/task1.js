function task1() {
  class Movie {
    // a) Write a constructor for the class Movie
    constructor(title, studio, rating = "PG") {
      //b) set the class property rating to "PG" as default when no rating is provided
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movie) {
      // c) Write a method getPG
      return movie.filter((m) => m.rating == "PG");
    }
  }

  // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio  "Eon Productions", and the rating “PG­13”
  let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
  let movie2 = new Movie("Harry Potter", "Warner Bros"); //without rating
  let movie3 = new Movie("Annabelle", "Columbia Pictures", "PG13");
  let movie4 = new Movie("Iron Man", "Marvel Studio", "PG13");
  let movie5 = new Movie("The BatMan", "DC Entertainments"); //without rating

  let dum = new Movie();
  let arr = dum.getPG([movie1, movie2, movie3, movie4, movie5]);
  console.log("Movies with rating PG");
  console.log(arr);
}
