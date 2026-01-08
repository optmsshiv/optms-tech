// Show the banner if the user has not accepted or rejected cookies
console.log("Script is running");
    window.onload = function () {
        if (getCookie("cookieConsent") === "") {
            document.getElementById("cookie-banner").style.display = "block";
        }
    };

    function acceptCookies() {
        setCookie("cookieConsent", "accepted", 1);
        hideBanner();
    }

    function rejectCookies() {
        setCookie("cookieConsent", "rejected", 1);
        hideBanner();
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function hideBanner() {
        document.getElementById("cookie-banner").style.display = "none";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return "";
    }