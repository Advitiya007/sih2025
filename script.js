document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const splashScreen = document.getElementById('splash-screen');
    const loginScreen = document.getElementById('login-screen');
    const signupScreen = document.getElementById('signup-screen');
    const loginButton = document.getElementById('login-button');
    const signupButtonSplash = document.getElementById('signup-button-splash');
    const loginLink = document.getElementById('login-link');
    const signupLink = document.getElementById('signup-link');

    function showScreen(screen) {
        appContainer.querySelectorAll('div').forEach(s => {
            if (s.id.includes('-screen')) {
                s.classList.remove('translate-x-0');
                s.classList.add('translate-x-full');
                setTimeout(() => s.classList.add('hidden'), 500);
            }
        });
        screen.classList.remove('hidden', 'translate-x-full');
        screen.classList.add('translate-x-0');
    }

    loginButton.addEventListener('click', () => {
        showScreen(loginScreen);
    });

    signupButtonSplash.addEventListener('click', () => {
        showScreen(signupScreen);
    });

    loginLink.addEventListener('click', () => {
        showScreen(loginScreen);
    });

    signupLink.addEventListener('click', () => {
        showScreen(signupScreen);
    });
});
