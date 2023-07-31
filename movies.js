let movieList = [];
let movieCounter = 0;

$(function() {

  $("#submit").on("click", function (e){
    e.preventDefault();
  
  let movieTitle = $("#movie-name").val(); 
  let movieRating = $("#movie-rating").val();
  let movies = {movieTitle, movieRating, movieCounter};
   movieCounter++;
  
  
  
  console.log(movies);// this works 
  

  $('ul').append(`<li id="new-movie">Movie Title: ${movieTitle}  <br> Movie Rating: ${movieRating} </li><input type="button" id="remove" value="Remove"/>`); // add to movieList also, template literals DO work in this manner
  $('datalist').append(`<option> Movie Title: ${movieTitle}  Movie Rating: ${movieRating}</option>`);
  movieList.push(movies);//this works, adds object to array of movies. json.stringify?
  console.log(movieList);
 
 });


 $('ul').on("click", '#remove', function (e){
    $(e.target).prev('li').remove(); 
    $(e.target).remove('#remove'); //this deletes both the movie and rating as well as clears the delete button!
  });

 
 //figure out how to delete the movie from not only the displayed list but also the Dropdown and the Array 
 

    
    
});

 

 


//.each for sorting or .sort .filter as above




