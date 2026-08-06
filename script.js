const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector('.miniCircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
  })
}

circleMouseFollower();