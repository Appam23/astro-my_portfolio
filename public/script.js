const projectTitle = document.querySelector("#projects h3");
const projectButton = document.querySelector("#projectButton");
const projectStatus = document.querySelector("#projectStatus");

let isFeatured = true;

projectButton.addEventListener("click", function () {
    projectTitle.style.animation = "none";
    void projectTitle.offsetWidth;

    if (isFeatured) {
        projectTitle.textContent = "My Latest Web Design Project";
        projectButton.textContent = "Show Original Title";
        projectStatus.textContent = "Showing the latest project";
        projectStatus.style.color = "green";
        isFeatured = false;
    } else {
        projectTitle.textContent = "Personal Portfolio Website";
        projectButton.textContent = "Change Project";
        projectStatus.textContent = "Showing the original project";
        projectStatus.style.color = "blue";
        isFeatured = true;
    }

    projectTitle.style.animation = "titleFade 0.5s ease";
});