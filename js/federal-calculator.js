console.log('External JavaScript file loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing federal calculator...');
    
    const form = document.getElementById('federalForm');
    const resultsSection = document.getElementById('resultsSection');

    console.log('Form found:', form ? 'YES' : 'NO');
    console.log('Results section found:', resultsSection ? 'YES' : 'NO');

    if (!form) {
        console.error('Form not found!');
        return;
    }

    form.addEventListener('submit', function(e) {
        console.log('Form submit event triggered');
        e.preventDefault();
        calculateFederalAid();
    });

    // Test button click separately
    const button = form.querySelector('button[type="submit"]');
    console.log('Button found:', button ? 'YES' : 'NO');
    
    if (button) {
        button.addEventListener('click', function(e) {
            console.log('Button clicked directly');
        });
    }
});

function calculateFederalAid() {
    console.log('Calculate function called');
    
    try {
        const creditsAttempted = parseFloat(document.getElementById('creditsAttempted').value);
        const creditsEarned = parseFloat(document.getElementById('creditsEarned').value);
        const currentGPA = parseFloat(document.getElementById('currentGPA').value);
        const programCredits = parseFloat(document.getElementById('programCredits').value);

        console.log('Input values:', {
            creditsAttempted,
            creditsEarned,
            currentGPA,
            programCredits
        });

        // Validate inputs
        if (isNaN(creditsAttempted) || isNaN(creditsEarned) || isNaN(currentGPA) || isNaN(programCredits)) {
            console.error('Invalid input values');
            alert('Please fill in all fields with valid numbers');
            return;
        }

        // Calculate completion rate
        const completionRate = (creditsEarned / creditsAttempted) * 100;

        // GPA requirement FOR BACHELOR PROGRAMS
        let requiredGPA;
        if (creditsAttempted >= 0.001 && creditsAttempted <= 12.999) {
            requiredGPA = 1.50;
        } else if (creditsAttempted >= 13 && creditsAttempted <= 24.999) {
            requiredGPA = 1.75;
        } else if (creditsAttempted >= 25) {
            requiredGPA = 2.00;
        }

        // CUNY Pace requirement FOR BACHELOR PROGRAMS
        let requiredCompletionRate = 0;
        if (creditsAttempted >= 25 && creditsAttempted <= 30.999) {
            requiredCompletionRate = 14.99;
        } else if (creditsAttempted >= 31 && creditsAttempted <= 36.999) {
            requiredCompletionRate = 24.99;
        } else if (creditsAttempted >= 37 && creditsAttempted <= 45.999) {
            requiredCompletionRate = 34.99;
        } else if (creditsAttempted >= 46) {
            requiredCompletionRate = 39.99;
        }

        // Maximum time frame (150% of bachelor program length)
        const maxCreditsAllowed = programCredits * 1.5;

        // Check all requirements
        const gpaPass = currentGPA >= requiredGPA;
        const completionPass = completionRate >= requiredCompletionRate;
        const timeFramePass = creditsAttempted <= maxCreditsAllowed;
        const overallPass = gpaPass && completionPass && timeFramePass;

        console.log('Calculations:', {
            completionRate: completionRate.toFixed(2),
            requiredGPA,
            requiredCompletionRate,
            gpaPass,
            completionPass,
            timeFramePass,
            overallPass
        });

        // Display results
        displayResults(currentGPA, requiredGPA, completionRate, requiredCompletionRate, 
                      creditsAttempted, maxCreditsAllowed, gpaPass, completionPass, 
                      timeFramePass, overallPass);

        // Save to localStorage
        const results = {
            creditsAttempted: creditsAttempted.toFixed(3),
            creditsEarned: creditsEarned.toFixed(3),
            currentGPA: currentGPA.toFixed(2),
            programCredits: programCredits,
            completionRate: completionRate.toFixed(2),
            requiredGPA: requiredGPA.toFixed(2),
            gpaPass: gpaPass,
            completionPass: completionPass,
            timeFramePass: timeFramePass,
            overallPass: overallPass,
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('federalAidResults', JSON.stringify(results));
        console.log('Results saved to localStorage');

    } catch (error) {
        console.error('Error in calculation:', error);
        alert('Error calculating results: ' + error.message);
    }
}

function displayResults(currentGPA, requiredGPA, completionRate, requiredCompletionRate, 
                       creditsAttempted, maxCreditsAllowed, gpaPass, completionPass, 
                       timeFramePass, overallPass) {
    
    console.log('Displaying results...');

    // Show results section
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';

    // GPA Results
    const gpaStatus = document.getElementById('gpaStatus');
    const gpaContent = document.getElementById('gpaContent');
    gpaStatus.className = gpaPass ? 'status-pass' : 'status-fail';
    gpaStatus.textContent = gpaPass ? '✓ Meets GPA requirement' : '✗ Below required GPA';
    gpaContent.innerHTML = `
        <p><strong>Your GPA:</strong> ${currentGPA.toFixed(2)}</p>
        <p><strong>Required GPA:</strong> ${requiredGPA.toFixed(2)}</p>
        <p>Based on ${creditsAttempted.toFixed(3)} credits attempted</p>
    `;

    // Completion Rate Results
    const completionStatus = document.getElementById('completionStatus');
    const completionContent = document.getElementById('completionContent');
    completionStatus.className = completionPass ? 'status-pass' : 'status-fail';
    completionStatus.textContent = completionPass ? '✓ Meets completion requirement' : '✗ Below required completion rate';
    completionContent.innerHTML = `
        <p><strong>Your completion rate:</strong> ${completionRate.toFixed(2)}%</p>
        <p><strong>Required completion rate:</strong> ${requiredCompletionRate.toFixed(2)}%</p>
        <p>Credits earned ÷ Credits attempted</p>
    `;

    // Time Frame Results
    const timeFrameStatus = document.getElementById('timeFrameStatus');
    const timeFrameContent = document.getElementById('timeFrameContent');
    timeFrameStatus.className = timeFramePass ? 'status-pass' : 'status-fail';
    timeFrameStatus.textContent = timeFramePass ? '✓ Within time frame' : '✗ Exceeds maximum time frame';
    timeFrameContent.innerHTML = `
        <p><strong>Credits attempted:</strong> ${creditsAttempted.toFixed(3)}</p>
        <p><strong>Maximum allowed:</strong> ${maxCreditsAllowed.toFixed(1)} (150% of program)</p>
        <p><strong>Remaining:</strong> ${Math.max(0, maxCreditsAllowed - creditsAttempted).toFixed(1)} credits</p>
    `;

    // Overall Results
    const overallContent = document.getElementById('overallContent');
    if (overallPass) {
        overallContent.innerHTML = `
            <div class="status-pass">✓ You meet ALL Federal SAP requirements for bachelor programs</div>
            <p>Meeting minimums is not the goal - aim higher for academic success!</p>
        `;
    } else {
        const failedRequirements = [];
        if (!gpaPass) failedRequirements.push('GPA requirement');
        if (!completionPass) failedRequirements.push('Completion rate requirement');
        if (!timeFramePass) failedRequirements.push('Maximum time frame requirement');

        overallContent.innerHTML = `
            <div class="status-fail">✗ You do not meet Federal SAP requirements for bachelor programs</div>
            <p><strong>Failed requirement(s):</strong></p>
            <ul>${failedRequirements.map(req => `<li>${req}</li>`).join('')}</ul>
            <p>Meeting minimums is not the goal - aim higher for academic success!</p>
        `;
    }

    console.log('Results displayed successfully');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}