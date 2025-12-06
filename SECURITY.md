# Security Policy

## Overview

This interactive birthday e-card is a static web project that runs entirely in the browser with no backend server or data collection.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | ✅                 |
| Older   | ❌                 |

## Reporting a Vulnerability

If you discover a security issue, please report it responsibly:

**Email:** kathleenpacinojavier@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge receipt within 48 hours and provide updates on resolution.

## Security Considerations

### What This Project Does
- ✅ Runs entirely client-side (HTML/CSS/JS)
- ✅ Uses public CDN resources (tsParticles)
- ✅ Plays local audio files
- ✅ Displays images

### What This Project Does NOT Do
- ❌ Collect user data
- ❌ Use cookies or local storage
- ❌ Make external API calls
- ❌ Process payments or sensitive information
- ❌ Require user authentication

### Recommendations for Users

When deploying this project:
1. **Host on HTTPS** - Use secure connections
2. **Review CDN scripts** - tsParticles is from a trusted source
3. **Scan audio files** - Ensure media files are safe
4. **Keep dependencies updated** - Check for tsParticles updates periodically

## Known Limitations

- Browser autoplay policies may restrict background music
- Some features require JavaScript enabled
- Designed for modern browsers (Chrome, Firefox, Safari, Edge)

## Disclaimer

This is a **personal birthday gift project** and not a production application. While we follow web development best practices, this project is intended for personal, non-commercial use among friends.
