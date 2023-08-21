const inputID = document.getElementById("inputId");
const inputPW = document.getElementById("inputPw");
const loginBtn = document.getElementById("login-button");
function onInput() {
  const id = inputID.value;
  const pw = inputPW.value;
}
// id 와 pw value값의 길이를 측정해 1보다 작거나 크면 트루를 반환한다.
if (id.length >= 1 && pw.length >= 1) {
  // 버튼을 활성화 하는 로식
  //* console.log("버튼 활성화");
  loginBtn.disabled = false;
  loginBtn.style.opacity = "1";
  loginBtn.style.cursor = "pointer";
} else {
  // 버튼을 비활성화 하는 로직
  //* console.log("버튼 비활성화");
  loginBtn.disabled = true;
  loginBtn.style.opacity = "0.5";
  loginBtn.style.cursor = "default";
}

loginBtn.addEventListener("click", () => {});

// ID Event
inputID.addEventListener("input", onInput);

// PW Event
inputPW.addEventListener("input", onInput);
