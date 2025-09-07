# Email Setup Guide

This guide will help you set up email functionality using Nodemailer in your portfolio.

## Prerequisites

1. A Gmail account
2. Gmail App Password (not your regular password)

## Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled

## Step 2: Generate App Password

1. In Security settings, find "App passwords"
2. Select "Mail" as the app and "Other" as the device
3. Click "Generate"
4. Copy the 16-character password

## Step 3: Environment Configuration

1. Copy `env.example` to `.env`
2. Update the `.env` file with your credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

## Step 4: Start the Server

```bash
# Development mode (with auto-restart)
npm run dev:server

# Production mode
npm run server
```

The server will run on port 5000.

## Step 5: Test the Contact Form

1. Start your React app: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your email for the message

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords, not your main Gmail password
- The server includes CORS protection for security

## Troubleshooting

### Common Issues:

1. **Authentication failed**: Check your app password and 2FA settings
2. **CORS errors**: Ensure the server is running on the correct port
3. **Email not received**: Check spam folder and app password validity

### Gmail Settings:

- Make sure "Less secure app access" is not required (use app passwords instead)
- Verify your Gmail account is not blocked

## API Endpoints

- `POST /api/send-email` - Send contact form emails
- `GET /api/health` - Server health check

## Contact Form Usage

The `ContactForm` component is ready to use in your React app:

```tsx
import ContactForm from './components/ContactForm';

// In your component
<ContactForm />
```

The form includes:
- Name, email, subject, and message fields
- Form validation
- Loading states
- Success/error notifications
- Automatic form reset after successful submission
