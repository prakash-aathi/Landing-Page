// const navLinks = document.querySelectorAll(".header_menus>a");
const nav = document.querySelector(".header_icon")
const navLinks = document.querySelectorAll(".header_menus>li>a");
nav.addEventListener("click", changemenu);

function changemenu(){
  const menu = document.querySelector(".header_menus");
  const icon = document.querySelectorAll(".header_ic");
  menu.classList.toggle("show");

  icon.forEach(i => {
    i.classList.toggle("hidden");
  });
}

function navbarfixed() {
  const header_dom = document.querySelector(".header")
  const nav_top = header_dom.clientHeight + 50;

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= nav_top) {
      header_dom.classList.add('nav-fixed');
    } else {
      header_dom.classList.remove("nav-fixed");
    }
  })
}


function setMenuActive() {
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {

      li.classList.remove("active");
      if (current == li.getAttribute("href").split('#')[1]) { li.classList.add("active"); }

    });

  });

}


function onmenuclick(){
  
  for (let i=0; i<navLinks.length; i++){
     navLinks[i].addEventListener("click",changemenu);
  }
}
// function setMenuActive() {
//   const sections = document.querySelectorAll("section");

//   window.addEventListener("scroll", () => {
//     let current = "";
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (pageYOffset >= sectionTop - sectionHeight / 3) {
//         current = section.getAttribute("id");
//       }
//     });

//     navLinks.forEach((li) => {
//       li.classList.remove("active");
//       if (current == li.getAttribute("href").split("#")[1]) {
//         li.classList.add("active");
//       }
//     });
//   });
// }


// function onmenuclick(){
//   console.log(navLinks);
// }


navbarfixed();
setMenuActive();
onmenuclick();


