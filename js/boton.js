window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    
    var btnScrollToTop = document.getElementById("btnScrollToTop");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }

    if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
        btnScrollToTop.style.display = "none";
    }
}

document.getElementById("btnScrollToTop").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
