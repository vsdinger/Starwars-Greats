// Linking Recipes API
var type = $(this).attr("data-type");
var queryURL = "https://api.edamam.com/search?q=&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b"
// still need to get the "r" search term to work

$.ajax({
    dataType: "json",
    url: queryURL,
    method: "GET",
  });

