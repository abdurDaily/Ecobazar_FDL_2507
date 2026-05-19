$(function () {


    let searchInput = document.getElementById("search-input");
    let searchBody = document.getElementById("search-bar");
    let mobileFooterSearchIcon = document.querySelector('.mobile_footer_search_icon');


    searchInput.addEventListener("click", function () {
        searchBody.classList.add("search_active");
    })
    mobileFooterSearchIcon.addEventListener("click", function () {
        searchBody.classList.toggle("search_active");
    })

    searchBody.addEventListener("click", function (e) {
        if (e.target.classList.contains("search_active")) {
            searchBody.classList.remove("search_active");
        }
    })


    $('.hero_section').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type="button" class="hero_prev"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l6 6m-6-6l6-6" />
</svg>
</button>`,
    });




});