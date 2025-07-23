console.log("clone of a twogood website");
 // here we are making bubble play button effect
let videoContainer = document.getElementsByClassName("video_container")[0];
let playBtn = document.getElementsByClassName("play")[0];

videoContainer.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
        scale: 1,
        opacity: 1,
    });
});


videoContainer.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
        scale: 0,
        opacity: 0,
    });
});

videoContainer.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
        left: dets.x-50,
        top : dets.y-50, 
    });
});