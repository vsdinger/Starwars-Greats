var getresturant = function(locationId, searchKeyword, cuisines){
    $.ajax({
        type: "get", 
        url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + locationId + "&entity_type=city&q=" + searchKeyword + "&cuisines=" + cuisines,
        beforeSend: function(request) {
            request.setRequestHeader("user-key", "42c88d2c39a9d4fe06ffed3c463e3cd5");
            console.log(url);
          },
    })
    .then(function(data) {
        $("#test").text(data.restaurants[0].restaurant.location.address)
        console.log(data)
    })
}

$("#zomatoSearch").on("click", function(e){
    e.preventDefault()
    var locationId=$("#locationId").text()
    var searchKeyword=$("#searchKeyword").text()
    var cuisines=$("#cuisines").text()
    getresturant(locationId, searchKeyword, cuisines)
})

//getresturant()

//https://developers.zomato.com/api/v2.1/search?entity_id=davis&entity_type=city&q=pizza&cuisines=Italian

