$(document).ready(function(){

    $(document).on("click", "button", function(){
        const randomNumber = Math.ceil(Math.random() * 88);
        const $character = $("#starwars-characters")

        $.get(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`, function(data){
            $character.html(`<h1 class=".name">${data.name}</h1> <img src= ${data.image} alt=${data.name}>`)
        })

    })
})