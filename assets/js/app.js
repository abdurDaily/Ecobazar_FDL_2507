let searchInput = document.getElementById("search-input");
let searchBody = document.getElementById("search-bar");



searchInput.addEventListener("click", function(){
    searchBody.classList.add("search_active");
})

searchBody.addEventListener("click", function(e){
    if(e.target.classList.contains("search_active")){
        searchBody.classList.remove("search_active");
    }    
})