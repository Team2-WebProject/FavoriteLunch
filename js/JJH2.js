const menu = [
  {
    id: 1,
    title: "수육국밥",
    category: "수육국밥",
    price: 10000,
    img: "https://ldb-phinf.pstatic.net/20210227_30/16144151855504rKzx_JPEG/jPLLF48kXPy27vaCcHMPZ3dE.jpg",
    desc: "부드럽게 삶은 돼지고기와 맑고 진한 육수, 밥이 어우러진 국밥. 담백하면서도 깊은 맛이 특징이며, 깍두기와 함께 먹으면 더욱 맛있습니다." // [2][5][6]
  },
  {
    id: 2,
    title: "순대국밥",
    category: "순대국밥",
    price: 10000,
    img: "https://ldb-phinf.pstatic.net/20210227_238/1614415198470hq4Ld_JPEG/VYaGTo08-V63BsjZdoGTffYO.jpg",
    desc: "쫄깃한 순대와 다양한 돼지고기 부속 고기, 진한 돼지육수, 밥이 어우러진 국밥. 새우젓이나 들깨가루로 간을 맞춰 먹으면 더욱 고소합니다." // [3]
  },
  {
    id: 3,
    title: "얼큰국밥",
    category: "얼큰국밥",
    price: 10000,
    img: "https://ldb-phinf.pstatic.net/20210227_26/1614415208408vt8aQ_JPEG/d8s78l2wvvBjJTSG1BPjCcqk.jpg",
    desc: "얼큰한 양념과 돼지고기, 각종 채소가 듬뿍 들어가 칼칼하게 즐길 수 있는 국밥. 해장용으로도 인기입니다." // [4]
  },
  {
    id: 4,
    title: "부대찌개수육국밥",
    category: "부대찌개수육국밥",
    price: 10000,
    img: "https://ldb-phinf.pstatic.net/20210227_139/1614415222321Yw6Hm_JPEG/Cd8Vdf0zxxnp-Y50kFMnfwgx.jpg",
    desc: "부대찌개의 풍부한 재료와 수육, 국밥의 조화. 햄, 소시지, 돼지고기, 각종 채소가 어우러진 얼큰한 맛이 특징입니다."
  },
  {
    id: 5,
    title: "수육정식",
    category: "수육정식",
    price: 15000,
    img: "https://ldb-phinf.pstatic.net/20210227_253/1614415357090WXVat_JPEG/toF7qM5Bhyw8i9tqgBCuIGz6.jpg",
    desc: "두툼하고 부드럽게 삶은 돼지고기 수육을 다양한 반찬과 함께 즐기는 정식 메뉴. 고기의 풍미와 담백함을 제대로 느낄 수 있습니다."
  },
  {
    id: 6,
    title: "착한보쌈",
    category: "착한보쌈",
    price: 25000,
    img: "https://ldb-phinf.pstatic.net/20210227_60/16144153938585no9z_JPEG/ohYkQQLeTmcAuXisBvPJOSTc.jpg",
    desc: "야들야들하게 삶은 돼지고기와 신선한 채소, 새우젓, 쌈장 등과 함께 즐기는 보쌈. 가족, 친구들과 함께 푸짐하게 나눠먹기 좋은 메뉴입니다."
  }
];


// 카테고리 추출 및 버튼 생성
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

function getCategories(menu) {
  const categories = ["전체"];
  menu.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  return categories;
}

function categoryList() {
  const categories = getCategories(menu);
  btnContainer.innerHTML = categories.map(cat =>
    `<button class="btn-item" data-id="${cat}">${cat}</button>`
  ).join("");
  // 버튼 클릭 이벤트
  document.querySelectorAll(".btn-item").forEach(btn => {
    btn.addEventListener("click", e => {
      const category = e.currentTarget.dataset.id;
      if (category === "전체") {
        menuList(menu);
      } else {
        menuList(menu.filter(item => item.category === category));
      }
    });
  });
}

// 메뉴 리스트 렌더링
function menuList(menuItems) {
  section.innerHTML = menuItems.map(item => `
    <div class="menu-items">
      <img src="${item.img}" alt="${item.title}">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${item.title}</h4>
          <h4 class="price">₩${item.price.toLocaleString()}</h4>
        </div>
        <div class="menu-text">${item.desc}</div>
      </div>
    </div>
  `).join("");
}

// 초기화
menuList(menu);
categoryList();



const btn = document.getElementById('showBtn');
const info = document.getElementById('moreInfo');
let shown = false;
btn.addEventListener('click', function() {
  shown = !shown;
  info.style.display = shown ? 'block' : 'none';
  btn.textContent = shown ? '닫기' : '담미온 더 알아보기';
});
