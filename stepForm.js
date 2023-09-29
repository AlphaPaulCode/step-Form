document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const steps = document.querySelectorAll(".page");
    const prevBtns = document.querySelectorAll(".prevBtn");
    const nextBtns = document.querySelectorAll(".nextBtn");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    let currentStep = 0;
  
    // Function to show the current step and hide other steps
    function showStep(stepIndex) {
      steps.forEach((step, index) => {
        if (index === stepIndex) {
          step.style.display = "block";
        } else {
          step.style.display = "none";
        }
      });
    }

    // Function to update the progress bar
  function updateProgressBar() {
    progressText.forEach((text, index) => {
      if (index < currentStep) {
        text.style.color = "#51a351"; // Completed steps text color
        progressCheck[index].style.display = "block"; // Show checkmark for completed steps
        bullet[index].classList.add("completed"); // Add completed class to the step bullet
      } else {
        text.style.color = "#000"; // Incomplete steps text color
        progressCheck[index].style.display = "none"; // Hide checkmark for incomplete steps
        bullet[index].classList.remove("completed"); // Remove completed class from the step bullet
      }
    });
  }
  
    // Function to handle "Next" button click
    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
      }
    }
  
    // Function to handle "Previous" button click
    function prevStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
      }
    }
  
    // Event listeners for "Next" and "Previous" buttons
    nextBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        nextStep();
      });
    });
  
    prevBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        prevStep();
      });
    });
  
    // Initial setup to show the first step
    showStep(currentStep);
    updateProgressBar();
  });
  