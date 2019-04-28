// Linking Recipes API
var type = $(this).attr("data-type");
var queryURL = "https://api.edamam.com/search?q=shrimp&r=coconut&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b"
console.log(queryURL);
// still need to get the "r" search term to work

$.ajax({
    url: queryURL,
    method: "GET",
  });

// click
document.getElementById('NAV').click();
