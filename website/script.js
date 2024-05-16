const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function (e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";

  //   console.log(e.clientX, e.clientY);
});

window.addEventListener("mousemove", function (e) {
  console.log(e.target.classList.contains("video"));
  if (e.target.classList.contains("video")) {
    cursor.innerHTML = "play";
    cursor.classList.add("videostyle");
  } else {
    cursor.classList.remove("videostyle");
    cursor.innerHTML = "";
  }
});
