function goDetail(name) {
  window.location.href = "detail.html?name=" + name;
}

const data = {
  cyclops: {
    title: "키클롭스",
    content: "긴장 → 공포 → 탈출 체험"
  },
  poseidon: {
    title: "포세이돈의 분노",
    content: "협동 기반 생존 어트랙션"
  },
  underworld: {
    title: "저승 (Nekyia)",
    content: "영혼 소환과 예언 체험"
  },
  sirens: {
    title: "세이렌",
    content: "유혹 속에서 살아남는 체험"
  },
  thrinacia: {
    title: "트리나키아",
    content: "금기와 선택의 결과 체험"
  }
};

const params = new URLSearchParams(window.location.search);
const name = params.get("name");

if (name && data[name]) {
  document.getElementById("title").innerText = data[name].title;
  document.getElementById("content").innerText = data[name].content;
}
