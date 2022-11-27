var slideImg = document.getElementById("slideImg");
var images = new Array(
    "banner.jpg",
    "banner2.jpg",
    "banner3.jpg"
);

var len = images.length;
var i = 0;

function slider(){
    if(i > len-1){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',8000);
}