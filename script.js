document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('coop-application-form');
    const resumeInput = document.getElementById('resume-file');
    const promptText = document.getElementById('upload-prompt-text');
    const fileSelectedState = document.getElementById('file-selected-state');
    const fileNameDisplay = document.getElementById('file-name-display');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');
    const successBanner = document.getElementById('success-banner');

    // Handle file selection display
    resumeInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            fileNameDisplay.textContent = file.name;
            promptText.classList.add('hidden');
            fileSelectedState.classList.remove('hidden');
            document.getElementById('error-resume').classList.add('hidden');
        }
    });

    // Form submission & validation logic
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Validate First Name
        const firstName = document.getElementById('first-name');
        const errFirstName = document.getElementById('error-first-name');
        if (!firstName.value.trim()) {
            errFirstName.classList.remove('hidden');
            firstName.classList.add('border-red-500');
            isValid = false;
        } else {
            errFirstName.classList.add('hidden');
            firstName.classList.remove('border-red-500');
        }

        // Validate Last Name
        const lastName = document.getElementById('last-name');
        const errLastName = document.getElementById('error-last-name');
        if (!lastName.value.trim()) {
            errLastName.classList.remove('hidden');
            lastName.classList.add('border-red-500');
            isValid = false;
        } else {
            errLastName.classList.add('hidden');
            lastName.classList.remove('border-red-500');
        }

        // Validate Email
        const email = document.getElementById('email');
        const errEmail = document.getElementById('error-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            errEmail.classList.remove('hidden');
            email.classList.add('border-red-500');
            isValid = false;
        } else {
            errEmail.classList.add('hidden');
            email.classList.remove('border-red-500');
        }

        // Validate Phone
        const phone = document.getElementById('phone');
        const errPhone = document.getElementById('error-phone');
        if (!phone.value.trim()) {
            errPhone.classList.remove('hidden');
            phone.classList.add('border-red-500');
            isValid = false;
        } else {
            errPhone.classList.add('hidden');
            phone.classList.remove('border-red-500');
        }

        // Validate LinkedIn
        const linkedin = document.getElementById('linkedin');
        const errLinkedin = document.getElementById('error-linkedin');
        if (!linkedin.value.trim() || !linkedin.value.includes('linkedin.com')) {
            errLinkedin.classList.remove('hidden');
            linkedin.classList.add('border-red-500');
            isValid = false;
        } else {
            errLinkedin.classList.add('hidden');
            linkedin.classList.remove('border-red-500');
        }

        // Validate Resume Upload
        const errResume = document.getElementById('error-resume');
        if (!resumeInput.files || resumeInput.files.length === 0) {
            errResume.classList.remove('hidden');
            isValid = false;
        } else {
            errResume.classList.add('hidden');
        }

        if (!isValid) {
            // Scroll to first error
            const firstError = form.querySelector('.border-red-500');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Simulate demo submission state
        btnText.textContent = 'Submitting Application...';
        btnSpinner.classList.remove('hidden');
        submitBtn.disabled = true;

        setTimeout(() => {
            btnSpinner.classList.add('hidden');
            submitBtn.classList.add('hidden');
            form.querySelectorAll('input, textarea').forEach(el => el.disabled = true);
            successBanner.classList.remove('hidden');
            successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1200);
    });

    // Reset form button
    document.getElementById('reset-form-btn').addEventListener('click', function() {
        form.reset();
        form.querySelectorAll('input, textarea').forEach(el => el.disabled = false);
        submitBtn.disabled = false;
        btnText.textContent = 'Submit Application';
        submitBtn.classList.remove('hidden');
        successBanner.classList.add('hidden');
        promptText.classList.remove('hidden');
        fileSelectedState.classList.add('hidden');
    });
});