document.addEventListener("DOMContentLoaded", function() {
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");

    function showFooter() {
        var scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    }

    document.addEventListener("scroll", showFooter);
});