var getresturant = function(){
    $.ajax({
        type: "get", 
        url: url,
        beforeSend: function(request) {
            request.setRequestHeader("user-key", "42c88d2c39a9d4fe06ffed3c463e3cd5");
          },
    })
    .then(function(data) {
        console.log(data)
    })
}
getresturant()