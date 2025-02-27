const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const description = document.querySelector(".description");

const descriptions = [
    "Add contact details for further communications.",
    "Add shipping address for successful delivery.",
    "Complete the payment to complete the order.",
    "Ready to get delivered!",
    "Order Delivered Successfully!"
]

let currentStep = 0;
function toRunStepper() {
    for (let i = 0; i < circles.length; i++) {
        if (i < currentStep) {
            circles[i].classList.add("active");
            circles[i].style.backgroundColor = "green";
            circles[i].innerText = "✔";
            circles[i].style.color = "white";
        } else if (i === currentStep) {
            circles[i].classList.add("active");
            circles[i].style.backgroundColor = "blue";
            circles[i].innerText = i + 1;
            circles[i].style.color = "white";
        } else {
            circles[i].classList.remove("active");
            circles[i].style.backgroundColor = "gray";
            circles[i].innerText = i + 1;
        }
    }

    for (let i = 0; i < lines.length; i++) {
        if (i < currentStep) {
            lines[i].style.backgroundColor = "green";
        } else {
            lines[i].style.backgroundColor ="gray";
        }
    }
    if(currentStep == 4){
        nextBtn.style.color = 'gray';
    }else{
        nextBtn.style.color = 'black';
    }

    description.innerHTML = `<b>${descriptions[currentStep]}</b>`;
    nextBtn.textContent = currentStep === circles.length  ? "Finish" : "Next";
}

nextBtn.addEventListener("click", function(){
    if (currentStep < circles.length ) {
        currentStep++;
        toRunStepper(); 
    }

});
prevBtn.addEventListener("click", function() {
    if (currentStep > 0) {
        currentStep--;
        toRunStepper();
    }
});

toRunStepper();


