// const navBar = require("./app.js");
define([], function(){
    let apiUrl = "data.json";

    function loadMoreRequest() {
        fetch(apiUrl)
        .then(response => {
            return response.json()
        })
        .then(data =>  {
            console.log(data);
            // template.appendData(data);
        })
    }

    return {
        loadMoreRequest: loadMoreRequest
    }
}) 