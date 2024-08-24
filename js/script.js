// Check If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  // console.log("Local Storage Is Not Empty");
}

// Toggle Spin Class On Icon
let toggleBtn = (document.querySelector(".toggle-settings .fa-gear").onclick =
  function () {
    // Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

    // Toggle Class Open On Main Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
  });

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {
  // Click On Every List Item
  li.addEventListener("click", (e) => {
    // console.log(e.target.dataset.color);
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main--color",
      e.target.dataset.color
    );

    // Remove Active Class From All Colors List Items

    document.querySelectorAll(".colors-list li").forEach((element) => {
      element.classList.remove("active");

      // Add Active class On Element With Data Color === Local Storage Item
      if (element.dataset.color === mainColors) {
        //Add Active Class
        element.classList.add("active");
      }
    });

    // Set Color On Local Strorage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Active Class From All Childrens
    e.target.parentElement.querySelectorAll(".active").forEach((el) => {
      el.classList.remove("active");
    });
    // Add Active Class On Self
    e.target.classList.add("active");
  });
});
// Background Image Options
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Check If There's Local Storage Random Background Item

let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;

    // console.log(backgroundLocalItem);
  }

  // Remove Active Class From All Spans

  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document

      .querySelector(".random-background span.yes")

      .classList.add("active");
  } else {
    document

      .querySelector(".random-background span.no")

      .classList.add("active");
  }
}

// Switch Random Background Options
const randomBackgroundEl = document.querySelectorAll(".random-background span");

// Loop On All Spans
randomBackgroundEl.forEach((span) => {
  // Click On Every List Item
  span.addEventListener("click", (e) => {
    handleActive(e);

    // // Remove Active Class From All Childrens
    // document.querySelectorAll(".active").forEach((element) => {

    //   element.classList.remove("active");

    // });

    // // Add Active Class On Self
    // e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImg();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});
// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array of imgs
let imgsArray = ["02.jpg", "03.jpg", "04.jpg", "05.jpg"]; // 5 images

// Change Background Image Url
// landingPage.style.backgroundImage = `url(./imgs/08.jpg)`;
// landingPage.style.backgroundImage = `url(./imgs/${
//   imgsArray[Math.floor(Math.random() * imgsArray.length)]
// })`;

// Function To Randomize  Background Image
function randomizeImg() {
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
      // Get Random Number
      let randomNum = Math.floor(Math.random() * imgsArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imgs/' + imgsArray[randomNum] + '")';
    }, 10000);
  } else {
  }
}
randomizeImg();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // console.log(window.scrollY);
  // console.log(ourSkills.offsetTop);

  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skills-box .skills-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Element)
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = "popup-overlay";

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create The Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append Text To Heading
      imgHeading.appendChild(imgText);

      // Append The heading To The Popup Box
      popupBox.appendChild(imgHeading);
    }

    // create The Image
    let popupImg = document.createElement("img");

    // Set Image Source

    popupImg.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImg);

    // Append The Popup Box To The Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.className = "close-button";

    // Append Close Button To The Popup Box
    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", function (e) {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    e.target.parentElement.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// Select All Bullets
// const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach((bullet) => {
//   bullet.addEventListener("click", (e) => {
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
// Select All Links

// const allLinks = document.querySelectorAll(".links a");

// allLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     document.querySelector(e.target.dataset.section).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".links a");
function scrollTosomewhere(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollTosomewhere(allBullets);
scrollTosomewhere(allLinks);

// Handle Active State

function handleActive(ev) {
  // Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
  });
  // Add Active Class On Self
  ev.target.classList.add("active");
}

// Handle Bullets

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalStorage = localStorage.getItem("bullets_option");

if (bulletLocalStorage !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalStorage === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";
      localStorage.setItem("bullets_option", "none");
    }

    handleActive(e);
  });
});

// Reset Button
document.querySelector(".reset-options").onclick = function () {
  localStorage.clear();
  // localStorage.removeItem("color_option");
  // localStorage.removeItem("background_option");
  // localStorage.removeItem("bullets_option");

  // Reload The Page
  window.location.reload();
};

// Toggle Menu
let toggleMenu = document.querySelector(".toggle-menu");
let linksMenu = document.querySelector(".links");

toggleMenu.onclick = function (e) {
  e.stopPropagation();
  // Toggle Class "Menu-active" On Button
  e.target.classList.toggle("menu-active");
  // Toggle Class "open" On Links
  linksMenu.classList.toggle("open");
};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
  if (e.target !== toggleMenu && e.target !== linksMenu) {
    // Check If Menu Is Open
    if (linksMenu.classList.contains("open")) {
      // Toggle Class "Menu-active" On Button
      toggleMenu.classList.toggle("menu-active");
      // Toggle Class "open" On Links
      linksMenu.classList.toggle("open");
    }
  }
});

// Stop Propagation On Menu
linksMenu.onclick = function (e) {
  e.stopPropagation();
};
