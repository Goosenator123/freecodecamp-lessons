const htmlButton = document.getElementById("html-button");
const htmlArrow = document.getElementById("html-arrow");
let isOn = false;

function toggleSubNav() {
    const subNav = document.getElementById("html-sub-nav");

    // Toggle the "show" class to trigger the transition
    subNav.classList.toggle("show");

    if (!isOn) {
        htmlArrow.style.transform = "rotate(0deg)";
        isOn = true;
    } else {
        htmlArrow.style.transform = "rotate(90deg)";
        isOn = false;
    }
}

// if (subNav.style.maxHeight === '0px') {
//     subNav.style.maxHeight = '200px';
//     console.log('sdf')
// } else {
//     subNav.style.maxHeight = '0px';
//     console.log('asdasd')
// }

htmlButton.addEventListener('click', toggleSubNav);