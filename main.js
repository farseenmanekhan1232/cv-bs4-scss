window.addEventListener("scroll", () => {
  const position = document.documentElement.scrollTop;

  console.log(position);
  if (position >= 400) {
    document.querySelector(".circ").style.visibility = "hidden";
  } else {
    document.querySelector(".circ").style.visibility = "visible";
  }
});
