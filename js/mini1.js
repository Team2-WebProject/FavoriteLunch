let menubtn = document.getElementById("menubtn");
let mapbtn = document.getElementById("mapbtn");
let menuTable = document.getElementById("menuTable");
let mapTable = document.querySelector('.mapTable');
let rightBox = document.getElementById("rightBox");
let menuHtmlTable = document.getElementById("menuHtmlTable");

menubtn.addEventListener("click", (e) => {
  menuTable.style.display = "block";
  mapTable.style.display = "none";
  menubtn.style.display = "none";
  mapbtn.style.display = "block";
});

mapbtn.addEventListener("click", (e) => {
  menuTable.style.display = "none";
  mapTable.style.display = "block";
  menubtn.style.display = "block";
  mapbtn.style.display = "none";
  rightBox.style.backgroundImage = `url('https://blog.kakaocdn.net/dn/cABAWe/btsNWOkn6KM/p9xq4IK8fBfg1kSVCJioIK/img.png')`;
});

menuTable.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "BUTTON") {
    const img = target.dataset.img;

    rightBox.style.backgroundImage = `url('${img}')`;
  }
});
