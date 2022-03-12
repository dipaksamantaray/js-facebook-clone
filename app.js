let settingmenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById("dark-btn");
function settingMenuToggle() {
  settingmenu.classList.toggle("settings-menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle("dark-theme");
  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};
if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add("dark-theme");
} else {
  localStorage.setItem("theme", "light");
}
/*for notification*/
let notificationmenu = document.querySelector(".notification-menu");
function notificationToggle() {
  notificationmenu.classList.toggle("notification-menu-height");
}
/*for profile*/
function profilelinktoggle() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/profile-page/index.html";
}
/*search box*/

let messagemenu = document.querySelector(".main-2");
function messageToggle() {
  messagemenu.classList.toggle("main-2-menu-height");
}
/*for menubar (right-bar)*/
function barclickToggle() {
  let menubar = document.querySelector(".hr-menu");
  if (menubar.classList.contains("d-none")) {
    menubar.classList.remove("d-none");
  } else {
    menubar.classList.add("d-none");
  }
}
/*for game link*/
function gametoggle() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/game/index.html#";
}
/*for home menu*/

function homeclick() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/main%20page-2/index.html";
}
/*for watch*/
function watch() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/watch/index.html#";
}
/* forgroup*/
function group() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/group/index.html#";
}
/*for market place*/
function store() {
  window.location =
    "file:///D:/projects/face%20book%20clone%20page/main%20page/market%20place/index.html";
}

/*for like button*/
const Likebtn = document.querySelector(".like-btn");
const likeIcon = document.querySelector("#icon");
const count = document.querySelector("#count");

let clicked = false;
Likebtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
  }
});

/* for  change the color of  like button*/
const thumsup = document.querySelector(".like-btn");
const textstyle = document.querySelector("#icon");
const thumsdown = document.querySelector("#count");

thumsup.addEventListener("click", () => (thumsup.style.color = "blue"));

textstyle.addEventListener("click", () => (textstyle.style.color = "blue"));

thumsdown.addEventListener("click", () => (thumsdown.style.color = "blue"));

/*for second like button*/
const likebtn1 = document.querySelector(".like-btn1");
const likeicon1 = document.querySelector("#icon1");
const count1 = document.querySelector("#count1");

let clicked1 = false;
likebtn1.addEventListener("click", () => {
  if (!clicked1) {
    clicked1 = true;
    likeicon1.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count1.textContent++;
  } else {
    clicked1 = false;
    likeicon1.innerHTML = `<i class="far fa-thumbs-up"></i>`;
  }
});

/* for  change the color of  2 like button*/
const thumsup1 = document.querySelector(".like-btn1");
const textstyle1 = document.querySelector("#icon1");
const thumsdown1 = document.querySelector("#count1");

thumsup1.addEventListener("click", () => (thumsup1.style.color = "blue"));

textstyle1.addEventListener("click", () => (textstyle1.style.color = "blue"));

thumsdown1.addEventListener("click", () => (thumsdown1.style.color = "blue"));
/*third like button*/
const likebtn2 = document.querySelector(".like-btn2");
const likeicon2 = document.querySelector("#icon2");
const count2 = document.querySelector("#count2");

let clicked2 = false;
likebtn2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    likeicon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count2.textContent++;
  } else {
    clicked2 = false;
    likeicon2.innerHTML = `<i class="far fa-thumbs-up"></i>`;
  }
});

/* for  change the color of  third like button*/
const thumsup2 = document.querySelector(".like-btn2");
const textstyle2 = document.querySelector("#icon2");
const thumsdown2 = document.querySelector("#count2");

thumsup2.addEventListener("click", () => (thumsup2.style.color = "blue"));

textstyle2.addEventListener("click", () => (textstyle2.style.color = "blue"));

thumsdown2.addEventListener("click", () => (thumsdown2.style.color = "blue"));

/*for fourth like button*/

const likebtn3 = document.querySelector(".like-btn3");
const likeicon3 = document.querySelector("#icon3");
const count3 = document.querySelector("#count3");

let clicked3 = false;
likebtn3.addEventListener("click", () => {
  if (!clicked3) {
    clicked3 = true;
    likeicon3.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count3.textContent++;
  } else {
    clicked3 = false;
    likeicon3.innerHTML = `<i class="far fa-thumbs-up"></i>`;
  }
});

/*color change of fourth like btn*/
const thumsup3 = document.querySelector(".like-btn2");
const textstyle3 = document.querySelector("#icon2");
const thumsdown3 = document.querySelector("#count2");

thumsup3.addEventListener("click", () => (thumsup2.style.color = "blue"));

textstyle3.addEventListener("click", () => (textstyle2.style.color = "blue"));

thumsdown3.addEventListener("click", () => (thumsdown2.style.color = "blue"));

/*for comment box*/

var post = document.getElementsByClassName("post1");

function narze() {
  var commentBoxValue = document.getElementById("comment-box").value;
  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxValue);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
}

/*for 2comment box*/

var post1 = document.getElementsByClassName("post1");

function narze1() {
  var commentBoxValue1 = document.getElementById("comment-box1").value;
  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxValue1);
  li.appendChild(text);
  document.getElementById("unordered1").appendChild(li);
}
/*for 3rd comment box*/
var post2 = document.getElementsByClassName("post1");
function narze2() {
  var commentboxvalue2 = document.getElementById("comment-box2").value;
  var li = document.createElement("li");
  var text = document.createTextNode(commentboxvalue2);
  li.appendChild(text);
  document.getElementById("unordered2").appendChild(li);
}
/*fourth comment box*/
var post3 = document.getElementsByClassName("post1");
function narze3() {
  var commentboxvalue3 = document.getElementById("comment-box3").value;
  var li = document.createElement("li");
  var text = document.createTextNode(commentboxvalue3);
  li.appendChild(text);
  document.getElementById("unordered3").appendChild(li);
  input.value = "";
}
