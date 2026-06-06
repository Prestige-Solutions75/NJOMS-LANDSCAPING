document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.querySelector('form');
    const serviceButtons = document.querySelectorAll('a[href="#estimate-form"]');
    const messageTextArea = document.querySelector('textarea');

    // 1. Interactive Conversion Handler: Personalize Message Based On Selected Niche Card
    serviceButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Find the closest card component title text
            const card = e.target.closest('.group, .bg-white');
            if (card) {
                const serviceTitle = card.querySelector('h3').textContent.trim();
                if (messageTextArea) {
                    messageTextArea.value = `Hi Njoms Landscaping, I'm reviewing your official site (www.njomslandscaping.co.za) and I would like to get a custom quote regarding your professional: "${serviceTitle}" niche service options.`;
                    messageTextArea.focus();
                }
            }
        });
    });

    // 2. High-Converting Form Submission Event Handler
    if (leadForm) {
        leadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // Gather input fields data
            const nameInput = leadForm.querySelector('input[placeholder="Your Name"]').value;
            const phoneInput = leadForm.querySelector('input[placeholder="069 570 4918"]').value;
            
            if (!nameInput || !phoneInput) {
                alert('Please provide a contact name and valid Durban mobile routing number to request pricing.');
                return;
            }

            // Mock successful submission processing state 
            const submitBtn = leadForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner animate-spin mr-2"></i> Registering Details...';

            setTimeout(() => {
                // Return a clear, delightful confirmation dialog
                alert(`Thank you, ${nameInput}! Your quote query has been processed successfully. Our Durban field operations crew will reach out to you at ${phoneInput} within the next hour.`);
                
                // Reset form state variables
                leadForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }, 1500);
        });
    }
});