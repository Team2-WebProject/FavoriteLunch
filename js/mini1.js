const menubtn = document.getElementById("menubtn");
const mapbtn = document.getElementById("mapbtn");
const menuTable = document.getElementById("menuTable");
const mapTable = document.querySelector('.mapTable');
const rightBox = document.getElementById("rightBox");
const menuHtmlTable = document.getElementById("menuHtmlTable");
const foodImage = document.getElementById("foodImage");
const priceBox = document.getElementById("priceBox");
const priceResetBtn = document.getElementById("priceResetBtn");
const instruction = document.getElementById("instruction");
const description = document.getElementById("description");

menubtn.addEventListener("click", (e) => {
  menuTable.style.display = "block";
  mapTable.style.display = "none";
  menubtn.style.display = "none";
  mapbtn.style.display = "block";
});

mapbtn.addEventListener("click", (e) => {
  description.style.display = 'none';
  foodImage.style.display = 'none';
  priceBox.style.display = "none";
  priceResetBtn.style.display = "none";
  instruction.style.display = "none";
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
    const price = target.dataset.price;
    const des = target.dataset.text;

    instruction.style.display = "block";
    priceBox.style.display = "block";
    priceResetBtn.style.display = "block";
    foodImage.style.display = 'block';
    foodImage.src = img;
    foodImage.dataset.price = price;
    description.innerHTML = des;
  }
});



foodImage.addEventListener("click", () => {
  const price = parseInt(foodImage.dataset.price || 0);
  if (price && confirm("이 메뉴를 장바구니에 추가하시겠습니까?")) {
    
    const current = parseInt(priceBox.dataset.total || 0);
    const updated = current + price;

    priceBox.dataset.total = updated;
    priceBox.innerText = `총 금액: ${updated.toLocaleString()}원`;
  }
});


priceResetBtn.addEventListener("click", () => {
    priceBox.dataset.total = 0;
    priceBox.innerText = `총 금액: 0원`;
});
