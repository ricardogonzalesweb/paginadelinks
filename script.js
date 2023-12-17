document.addEventListener('DOMContentLoaded', function() {
    var cookieBanner = document.getElementById('cookie-banner');
    var acceptButton = document.getElementById('accept-cookies');

    if (localStorage.getItem('cookiesAccepted') !== 'true') {
        cookieBanner.style.display = 'block';
    }

    acceptButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
});
