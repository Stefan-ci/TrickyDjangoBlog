if ("undefined" == typeof jQuery) throw new Error("jQuery plugins need to be before this file.");



/************************************************** HANDLE SCROLL TO TOP **************************************************/
$(document).ready(function () {
    $(".scroll-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1e1);
    });
});
var scrollBtn = document.querySelector(".scroll-top"),
rootElement = document.documentElement;

function scrollTop() {
    rootElement.scrollTo({ top: 0, behaviour: "smooth"});
}
function handleScroll() {
    var root = rootElement.scrollHeight - rootElement.clientHeight;
    rootElement.scrollTop / root > 0.1 ? scrollBtn.classList.add("showBtn") : scrollBtn.classList.remove("showBtn");
}
document.addEventListener("scroll", handleScroll)
