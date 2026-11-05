
/* RAYUDU CLICKZ STUDIO */


/* FOOTER YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* MOBILE NAVIGATION */

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector(".site-header nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.textContent = isOpen ? "✕" : "☰";

    });

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuButton.setAttribute("aria-expanded", "false");

            menuButton.textContent = "☰";

        });

    });

}


/* CONTACT FORM PREVIEW */

const enquiryForm = document.getElementById("enquiry");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for your enquiry! Please contact Rayudu Clickz Studio directly to confirm your booking."
        );

    });

}
