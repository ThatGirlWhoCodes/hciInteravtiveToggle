function goToStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the selected step
    const currentStep = document.getElementById(`step-${stepNumber}`);
    currentStep.classList.add('active');
}
//Step 2
function goToStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the selected step
    const currentStep = document.getElementById(`step-${stepNumber}`);
    currentStep.classList.add('active');
}