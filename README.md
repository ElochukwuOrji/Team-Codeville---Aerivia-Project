# Aerivia - Flight Booking Website

**Beyond the clouds, above expectations.**

Aerivia is a modern flight booking website that offers seamless travel experiences with curated destinations and smart booking tools. Built for both business and leisure travelers.

**Deployed Link:** 

## Features

- **User Authentication**: Sign up and login system with secure credential storage
- **Flight Search & Booking**: Search flights between Canada, London, and France
- **Destination Explorer**: Interactive carousel showcasing popular destinations
- **Payment Processing**: Support for credit/debit cards and bank transfers
- **Responsive Design**: Mobile-friendly interface with smooth animations

## Project Structure

```
aerivia/
├── index.html              # Landing page (pre-login)
├── signin.html             # User login page
├── createAcc.html          # Account creation page
├── landing.html            # Main dashboard (post-login)
├── Destination.html        # Destinations showcase page
├── booking.html            # Flight search and booking page
├── Paymentmethod.html      # Payment processing page
├── auth.js                 # Authentication logic
├── paymentmethod.js        # Payment form validation
├── paymentmethod.css       # Payment page styles
├── images/                 # Image assets directory
│   ├── Aerivia logo 1.png
│   ├── aircraft passengers.png
│   ├── canada-1.png
│   └── ... (other images)
└── [CSS files]            # Individual stylesheets for each page
    ├── style.css           # Home page styles
    ├── landing.css         # Landing page styles
    ├── destination.css     # Destinations page styles
    ├── booking.css         # Booking page styles
    ├── sigin.css           # Sign-in page styles
    └── createAcc.css       # Create account page styles
```

## Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Create an account or use the demo authentication system
4. Explore destinations and book flights

## Pages Overview

### Authentication Flow
- **index.html**: Welcome page with navigation to sign-in
- **signin.html**: User login with email/password
- **createAcc.html**: New user registration
- **landing.html**: Authenticated user dashboard

### Main Features
- **Destination.html**: Interactive destination carousel (Canada, London, Paris)
- **booking.html**: Flight search with filters and booking options
- **Paymentmethod.html**: Secure payment processing

## Technical Details

### Authentication System
- Local storage-based user management
- Session persistence across pages
- Form validation and error handling
- Automatic redirects based on authentication status

### Flight Booking
- Dynamic flight filtering by origin/destination
- Date selection with validation
- Real-time flight card display
- Integration with payment system

### Payment Processing
- Credit/debit card payment form
- Bank transfer option
- Input validation and formatting
- Success confirmation modal

## Browser Compatibility

- Modern browsers with JavaScript enabled
- Responsive design for mobile and desktop
- CSS Grid and Flexbox support required

## Dependencies

- Google Fonts (Poppins)
- Modern browser with localStorage support
- No external JavaScript libraries required

## Development Notes

- Uses vanilla JavaScript for all functionality
- CSS custom properties for consistent theming
- Mobile-first responsive design approach
- Semantic HTML structure for accessibility

## Demo Credentials

The authentication system stores user data locally. Create a new account or use any email/password combination you register.

---

*This project was created as a flight booking website demonstration with focus on user experience and modern web design principles.*
