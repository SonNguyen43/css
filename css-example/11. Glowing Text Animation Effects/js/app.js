/* DOUBLE CLICK */
var touchtime = 0;
$(".target").on("click", function() {
    if (touchtime == 0) {
        // set first click
        touchtime = new Date().getTime();
    } else {
        // compare first click to this click and see if they occurred within double click threshold
        if (((new Date().getTime()) - touchtime) < 800) {
            // double click occurred
            // $("body").css({"color":"yellow","background-image":"url('images/1.jpg')"});

            var h2 = document.querySelector("h2");
            h2.style.display = "none";

            var x = document.getElementById("myAudio"); 
            x.volume = 0.1;
            x.play(); 

            var slideshow = document.getElementById("slideshow-img");
            slideshow.style.display = "block";

            document.getElementById("yeuem").innerHTML = 'Yêu em.. <i class="fas fa-heart" style="color:red"></i>'
            touchtime = 0;
        } else {
            // not a double click so set as a new first click
            touchtime = new Date().getTime();
        }
    }
});

/* HEART EFFECT */
document.addEventListener("mousemove", function(e){
    var body = document.querySelector('body');
    var heart = document.createElement('p');
    var x = e.offsetX;
    var y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    var size = Math.random() * 100;
    heart.style.width = 20+size + 'px';
    heart.style.height = 20+size + 'px';
    body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    },3000);
});