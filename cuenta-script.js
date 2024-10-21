document.addEventListener("DOMContentLoaded", () => {
    const sectionHide = document.getElementById('section-hide');
    const showSection = document.getElementById('show-section');
    const closeButtons = document.getElementById('closeOverlay');

    showSection.addEventListener('click', () => {
        sectionHide.style.display = "flex";
    });

    closeButtons.addEventListener('click', () => {
        sectionHide.style.display = "none";
    });
});