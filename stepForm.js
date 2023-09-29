document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const steps = document.querySelectorAll(".page");
    const prevBtns = document.querySelectorAll(".prevBtn");
    const nextBtns = document.querySelectorAll(".nextBtn");
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
  
    // Function to handle "Next" button click
    function nextStep() {
      if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
      }
    }
  
    // Function to handle "Previous" button click
    function prevStep() {
      if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
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
  });
  