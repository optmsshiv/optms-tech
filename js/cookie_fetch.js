fetch('/cookie-banner.html')  // Update this URL with the final destination
    .then(response => {
    console.log('Response Headers:', response.headers);
    if (response.ok) {
        return response.text();
    } else if (response.status === 302) {
        // Handle redirection
        const redirectUrl = response.headers.get('Location');
        console.log('Redirect URL:', redirectUrl);
        return fetch(redirectUrl);
    } else {
        throw new Error('Failed to fetch');
    }
});
