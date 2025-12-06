# 🎂 Interactive Birthday E-Card for Kari

A personalized, interactive birthday card featuring memory games, hidden easter eggs, and beautiful animations. Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Interactive Envelope Opening** - Click to reveal the birthday card
- **Step-by-Step Message Reveal** - Tap through heartfelt birthday messages
- **Memory Matching Game** - Complete the game to unlock a special surprise
- **Birthday Cake with Candles** - Click each candle to blow them out and make a wish
- **Polaroid Photo Gallery** - Flip through memories from Sky: Children of the Light, Genshin Impact, and Infinity Nikki
- **Hidden Easter Egg Hunt** - Find 4 hidden flowers (🪻🌻) to unlock a secret Welkin Moon reward
- **Background Music Control** - Toggle the Genshin Impact soundtrack
- **Particle Effects** - Sparkles, confetti, and interactive click effects
- **Sound Effects** - Audio feedback for interactions
- **Fully Responsive** - Works beautifully on desktop and mobile

## 🎮 Easter Egg

There's a hidden scavenger hunt! Find all 4 flowers hidden in the first message section to unlock a special Welkin Moon surprise. The flowers are almost invisible but glow slightly when you hover over them. Good luck! 🔍

## 📁 Project Structure

```
birthday-card/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
└── assets/
    ├── audio/
    │   ├── The long way home - genshin.mp3  # Background music
    │   ├── card-flip.mp3                     # Card flip sound
    │   ├── match.mp3                         # Match sound
    │   ├── win.mp3                           # Win celebration
    │   ├── blow.mp3                          # Candle blow sound
    │   └── click.mp3                         # Click sound
    └── images/
        ├── sky1.webp - sky8.webp            # Sky: COTL photos
        ├── gi1.webp - gi3.webp              # Genshin Impact photos
        └── nikki1.webp - nikki2.webp        # Infinity Nikki photos
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended for audio playback)

### Installation

1. **Clone or download** this repository
2. **Add your audio files** to `/assets/audio/`:
   - Background music: `The long way home - genshin.mp3`
   - Sound effects: `card-flip.mp3`, `match.mp3`, `win.mp3`, `blow.mp3`, `click.mp3`
3. **Add your photos** to `/assets/images/`:
   - Sky photos: `sky1.webp` through `sky8.webp`
   - Genshin photos: `gi1.webp` through `gi3.webp`
   - Nikki photos: `nikki1.webp` through `nikki2.webp`

## 🎨 Customization

### Colors
The color scheme uses CSS variables defined in `:root`:
```css
--lavender-light: #f8f5ff
--lavender-mid: #dcd0f4
--lavender-deep: #b8a4e8
--sunflower: #f2d36b
--sunflower-dark: #e8c34d
--genshin-gold: #d8c27b
```

### Messages
Edit the message content in the HTML file under `.message-section` divs.

### Photos
Replace the images in `/assets/images/` with your own memories. Keep the same file names or update the `src` attributes in the HTML.

### Music
Replace the background music file, keeping the same filename or updating the `<audio>` element's `src` attribute.

## 🎵 Audio Files

You can use the current audio files. If you want to change it, you'll need to source your own audio files. Here are recommendations:

### Background Music
- **Current**: "The Long Way Home" from Genshin Impact
- Any calm, instrumental track works well

### Sound Effects (Free Resources)
- [Freesound.org](https://freesound.org/)

**Recommended sounds:**
- Card flip: Soft whoosh or paper sound
- Match: Pleasant chime or ding
- Win: Celebratory fanfare
- Blow: Gentle wind sound
- Click: Soft button click

## 📱 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Audio autoplay may be restricted by browser policies. Users may need to interact with the page first.

## 🎯 Interactive Elements

### Memory Game
- Match 4 pairs of icons (🌻, 💜, 🌸, ✨)
- Reveals a special Genshin Impact Battle Pass reward

### Candle Blowing
- Click each of the 3 candles to blow them out
- Reveals a birthday wish message
- Shows the polaroid gallery and footer

### Polaroid Gallery
- Click each photo stack to flip through memories
- 3 stacks: Sky: COTL, Genshin Impact, Infinity Nikki
- Each photo has a "developing" animation on first view

### Easter Egg Hunt
- 4 hidden flowers scattered in the first message box
- Almost invisible (opacity: 0.15)
- Glow slightly on hover
- Collect all 4 to unlock Welkin Moon surprise

## 🐛 Troubleshooting

**Music won't play:**
- Check that the audio file path is correct
- Try running on a local server instead of opening directly
- Some browsers block autoplay - user interaction is required

**Images not loading:**
- Verify all image files are in `/assets/images/`
- Check that file names match exactly (case-sensitive)
- Ensure image format is supported (.webp, .jpg, .png)

**Easter egg not working:**
- Make sure the flowers are inside the `#message1` div
- Check that JavaScript is enabled
- Try hovering slowly to find the hidden flowers

## 💝 Credits

**Created with love for Kari's Birthday**

- Design & Development: Kathy
- Libraries Used:
  - [tsParticles](https://particles.js.org/) - Particle effects
  - Google Fonts: Cormorant Garamond, Playfair Display, Inter
- Inspiration: Genshin Impact, Sky: Children of the Light, Infinity Nikki

## 📄 License

This is a personal birthday gift project. Feel free to use it as inspiration for your own projects!

---

**Happy Birthday, Kari! May your days stay lavender-calm and sunflower-bright! 🌻💜✨**