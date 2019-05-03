//Firebase
  var config = {
    apiKey: "AIzaSyAQ9LlCCGsxumNoOpvX1BCNHA-zTmEYZ98",
    authDomain: "recipetorestaurant.firebaseapp.com",
    databaseURL: "https://recipetorestaurant.firebaseio.com",
    projectId: "recipetorestaurant",
    storageBucket: "recipetorestaurant.appspot.com",
    messagingSenderId: "49045247832"
  };
  firebase.initializeApp(config);


//shortcut for our firebase - firebase.database() will grab anything in our firebase
var database = firebase.database();

// grab search fields
$("#future-button").on("click", function(event) {
  event.preventDefautl();

  var recipe = $("#recipe-input").val().trim();
  console.log(recipe);

  //send our data to firebase
  var rFirebase = {
      sRecipe: recipe,
  };
  database.ref().push(rFirebase);
})

firebase.database().ref().on("child_added", function(snapshot){
    $("#future-div").append("<p>" + snapshot.val().sRecipe+"</p>");
})

// Linking Recipes API
var type = $(this).attr("data-type");
var queryURL = "https://api.edamam.com/search?q=shrimp&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b";
console.log(queryURL);

// Grabbing our API results
$.ajax({
    url: queryURL,
    method: "GET",
  })
    .then (function(response) {
      $(".card-text").html("Recipe: " + response.hits[0].recipe.label);
      $(".card-text").html(response.hits[0].recipe.image);
      $(".card-text").html(response.hits[0].recipe.ingredientLines);
      console.log(response);
    })
