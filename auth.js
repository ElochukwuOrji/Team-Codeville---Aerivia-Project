// auth.js - Authentication logic for Aerivia

// Check if user is logged in when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page and user is not logged in
    if (window.location.pathname.endsWith('landing.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (!isLoggedIn || isLoggedIn !== 'true') {
            window.location.href = 'index.html';
        }
    }
    
    // Check if we're on signin/createAcc pages and user is already logged in
    if (window.location.pathname.endsWith('signin.html') || 
        window.location.pathname.endsWith('createAcc.html')) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            window.location.href = 'landing.html';
        }
    }
    
    // Setup form submissions
    setupAuthForms();
});

function setupAuthForms() {
    // Login form submission
    const loginForm = document.querySelector('.login-container');
    if (loginForm && window.location.pathname.endsWith('signin.html')) {
        const loginBtn = loginForm.querySelector('.login-btn');
        if (loginBtn) {
            loginBtn.addEventListener('click', handleLogin);
        }
    }
    
    // Create account form submission
    const createAccForm = document.querySelector('.login-container');
    if (createAccForm && window.location.pathname.endsWith('createAcc.html')) {
        const continueBtn = createAccForm.querySelector('.continue-btn');
        if (continueBtn) {
            continueBtn.addEventListener('click', handleCreateAccount);
        }
    }
    
    // Back button functionality
    const backButtons = document.querySelectorAll('.back-arrow');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.history.back();
        });
    });
}

function handleLogin(e) {
    e.preventDefault();
    
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    if (!emailInput || !passwordInput) {
        alert('Please fill in all fields');
        return;
    }
    
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'landing.html';
    } else {
        alert('Invalid email or password. Please try again or create an account.');
    }
}

function handleCreateAccount(e) {
    e.preventDefault();
    
    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    if (!nameInput || !emailInput || !passwordInput) {
        alert('Please fill in all fields');
        return;
    }
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some(u => u.email === email);
    
    if (userExists) {
        alert('User with this email already exists. Please login instead.');
        return;
    }
    
    // Create new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after account creation
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    alert('Account created successfully!');
    window.location.href = 'landing.html';
}

// Logout function (to be called from landing page)
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}