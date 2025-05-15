const menu = [
  {
    id: 1,
    title: "발효버터 소금빵",
    category: "브레드",
    price: 2000,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2025/02/%EB%B0%9C%ED%9A%A8%EB%B2%84%ED%84%B0%EC%86%8C%EA%B8%88%EB%B9%B5-%EC%8D%B8%EB%84%AC1.jpg",
    desc: "발효버터를 넣은 반죽을 고온에 구워 속은 촉촉, 빵 밑면은 바삭 두 가지 식감과 고소한 풍미를 느낄 수 있는 소금빵" // 
  },
  {
    id: 2,
    title: "부드럽고 촉촉한 굿모닝롤",
    category: "브레드",
    price: 3000,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/07/%EA%B5%BF%EB%AA%A8%EB%8B%9D%EB%A1%A4-%EB%88%84%EB%81%BC-1280x1280.jpg",
    desc: "촉촉하고 부드러워 그냥 먹어도 맛있는 식사대용 굿모닝롤" // 
  },
  {
    id: 3,
    title: "블랙올리브치즈 베이글",
    category: "브레드",
    price: 3500,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/02/%EB%B8%94%EB%9E%99%EC%98%AC%EB%A6%AC%EB%B8%8C%EC%B9%98%EC%A6%88%EB%B2%A0%EC%9D%B4%EA%B8%80_001-1280x1280.jpg",
    desc: "끓는 물로 만든 반죽을 데쳐서 한번, 고온에 빠르게 구워 쫄깃함이 남달라요" // [4]
  },
  {
    id: 4,
    title: "별이 빛나는 밤에",
    category: "케이크",
    price: 25000,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/05/%EB%B3%84%EC%9D%B4-%EB%B9%9B%EB%82%98%EB%8A%94-%EB%B0%A4%EC%97%90.jpg",
    desc: "부드러운 초코 케이크 위에 달콤한 초코별이 장식되어 밤 하늘에 별이 수놓아진 듯한 깊은 풍미의 초코케이크"
  },
  {
    id: 5,
    title: "딸기 블라썸 케이크",
    category: "케이크",
    price: 30000,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2024/07/%EB%B8%94%EB%9D%BC%EC%8D%B8_%EC%98%A4%EC%9E%90%EB%AA%BD.jpg",
    desc: "촉촉한 화이트, 딸기 시트에 상큼한 딸기 콤포트가 어우러진 우유 생크림 케이크"
  },
  {
    id: 6,
    title: "마이넘버원3",
    category: "케이크",
    price: 28000,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2025/04/%EB%A7%88%EC%9D%B4%EB%84%98%EB%B2%84%EC%9B%90%EB%A6%AC%EB%89%B4%EC%96%BC%EC%B9%B4%EB%84%A4%EC%9D%B4%EC%85%98-%EC%8D%B8%EB%84%AC.jpg",
    desc: "총 6가지 맛! 파바의 인기 케이크만 모은 조각 모둠케이크"
  },  {
    id: 7,
    title: "햄치즈 오리지널 머핀",
    category: "샌드위치/샐러드",
    price: 7500,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2024/05/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%8B%E1%85%A6%E1%84%80%E1%85%B3%E1%84%86%E1%85%A9%E1%84%82%E1%85%B5%E1%86%BC-1280x1280-2.jpg",
    desc: "에그패티, 햄, 치즈를 넣어 부드럽고 담백한 따뜻하게 즐기는 정통 잉글리쉬머핀 샌드위치"
  },  {
    id: 8,
    title: "치킨커틀릿 샐러드랩",
    category: "샌드위치/샐러드",
    price: 9900,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/11/%EB%B0%98%EC%A0%9C-%EA%B1%B4%EA%B0%95%ED%95%9C%EC%B9%98%ED%82%A8%EC%BB%A4%ED%8B%80%EB%A0%9B%EC%83%90%EB%9F%AC%EB%93%9C%EB%9E%A9_1000x1000.jpg",
    desc: "치킨커틀릿과 건강한 야채가 듬뿍 어우러져 한 손에 들고 먹기 간편한 샐러드 랩"
  },  {
    id: 9,
    title: "에그샐러드샌드위치",
    category: "샌드위치/샐러드",
    price: 6500,
    img: "https://d2afncas1tel3t.cloudfront.net/wp-content/uploads/2023/06/%EC%97%90%EA%B7%B8%EC%83%90%EB%9F%AC%EB%93%9C%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98-1280x1280.png",
    desc: "부드러운 식빵에 고소하면서도 새콤달콤한 계란샐러드와 햄, 당근 등 신선한 야채를 듬뿍 넣은 샌드위치"
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
  btn.textContent = shown ? '닫기' : '파리바게뜨 더 알아보기';
});
