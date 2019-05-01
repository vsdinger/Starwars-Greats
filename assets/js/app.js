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

// Linking Recipes API
var type = $(this).attr("data-type");
var queryURL = "https://api.edamam.com/search?q=shrimp&r=coconut&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b"
console.log(queryURL);
// still need to get the "r" search term to work

$.ajax({
    url: queryURL,
    method: "GET",
  });

// grab search fields
$("#future-button").on("click", function(event) {
  event.preventDefautl();

  var recipe = $("#recipe-input").val().trim();
  var restaurant = $("#restaurant-recipe").val().trim();
  console.log(recipe);
  console.log(restaurant);
  
  //send our data to firebase
  var searchFirebase = {
      sRecipe: recipe,
      sRestaurant:restaurant,
  };
})

firebase.database().ref().on("child_added", function(snapshot){
    $()
})