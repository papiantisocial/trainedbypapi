document.addEventListener("DOMContentLoaded", function() {
    // Function to show loading screen
    function showLoadingScreen() {
        document.querySelector(".loading-container").style.display = "flex";
    }

    // Function to hide loading screen
    function hideLoadingScreen() {
        document.querySelector(".loading-container").style.display = "none";
    }

    // Function to load content dynamically
    function showLoadingScreen() {
    document.querySelector(".loading-container").style.display = "flex";
}

function hideLoadingScreen() {
    document.querySelector(".loading-container").style.display = "none";
}
    document.getElementById("products").addEventListener("click", function() {
        loadContent("products.html"); // Specify the URL for the page to load
    });

    document.getElementById("aboutus").addEventListener("click", function() {
        loadContent("aboutus.html"); // Specify the URL for the page to load
    });

    // Add more event listeners for other links as needed
});