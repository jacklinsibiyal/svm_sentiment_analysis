document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('sentiment-form');
    const result = document.getElementById('result');
    const loading = document.getElementById('loading');
    const sentimentSpan = document.getElementById('sentiment');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        
        // Show loading spinner
        loading.style.display = 'flex';
        result.classList.remove('show');

        fetch('/predict', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newSentiment = doc.getElementById('sentiment').textContent;
            
            // Update the sentiment text
            sentimentSpan.textContent = newSentiment;
            
            // Hide loading spinner and show result
            loading.style.display = 'none';
            result.classList.add('show');

            // Add color based on sentiment
            if (newSentiment === 'positive') {
                sentimentSpan.style.color = '#27ae60';
            } else if (newSentiment === 'negative') {
                sentimentSpan.style.color = '#c0392b';
            } else {
                sentimentSpan.style.color = '#7f8c8d';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            loading.style.display = 'none';
        });
    });
});