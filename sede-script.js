document.addEventListener("DOMContentLoaded", () => {
    
    const hideFrame=document.getElementById("hideFrame");
    const toggleButton=document.getElementById("toggleButton");
    const rotateArrow=document.getElementById("rotateArrow");

    toggleButton.addEventListener("click",()=>{
        hideFrame.classList.toggle("frame");
        hideFrame.classList.toggle("frame-visible");
        rotateArrow.classList.toggle("down-arrow");
        rotateArrow.classList.toggle("down-arrow-rotate");
    });

    const buttons = document.querySelectorAll('.toggleButtons');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = document.querySelector(button.dataset.target);
            if (target) {
                target.classList.toggle('frame');
                target.classList.toggle('frame-visible');
            }
        });
    });
});