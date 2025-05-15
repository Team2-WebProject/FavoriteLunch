document.addEventListener("DOMContentLoaded", () => {
	// 이미지 확대 기능
	const img = document.getElementById("menuImg");
	let zoomed = false;

	if (img) {
		img.addEventListener("click", () => {
			zoomed = !zoomed;
			img.style.transform = zoomed ? "scale(1.5)" : "scale(1)";
		});
	}

	// 찜하기 버튼
	const likeBtn = document.getElementById("likeBtn");

	if (likeBtn) {
		likeBtn.addEventListener("click", () => {
			alert("찜 완료!");
		});
	}

	// 더보기 버튼
	const btn = document.getElementById("toggleBtn");
	const target = document.getElementById("moreIntro");

	if (btn && target) {
		btn.addEventListener("click", () => {
			if (target.style.display === "none") {
				target.style.display = "block";
				btn.textContent = "🔼 접기";
			} else {
				target.style.display = "none";
				btn.textContent = "👀 더보기";
			}
		});
	}
});
