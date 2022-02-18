const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("clicked"); //class에 없으면 추가, 있으면 제거
}

h1.addEventListener("click", handleTitleClick);
