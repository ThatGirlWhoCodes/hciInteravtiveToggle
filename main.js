document.addEventListener('DOMContentLoaded', function () {
    // Initialize Slick slider
    $('.size-slider').slick({
        infinite: false,  // Disable infinite loop for size selection
        slidesToShow: 4,  // Show 4 sizes at a time
        slidesToScroll: 1, // Scroll one size at a time
        responsive: [
            {
                breakpoint: 768, // For smaller screens
                settings: {
                    slidesToShow: 2,  // Show 2 sizes at a time
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // For even smaller screens
                settings: {
                    slidesToShow: 1,  // Show 1 size at a time
                    slidesToScroll: 1
                }
            }
        ]
    });
});

//Step 2
function goToStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the selected step
    const currentStep = document.getElementById(`step-${stepNumber}`);
    currentStep.classList.add('active');
}