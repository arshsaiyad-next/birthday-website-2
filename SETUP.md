# Premium Birthday Surprise Website - Setup Guide

## 🎂 Quick Start

### 1. Installation

```bash
# Navigate to the project directory
cd birthday-surprise-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:3000`.

### 2. Quick Personalization

Open `src/App.jsx` and find the `birthdayData` object at the top. This is where you customize everything:

```javascript
const birthdayData = {
  name: "Sarah",                    // ← Change to her name
  birthday: "2026-09-20",           // ← Change to birthday date (YYYY-MM-DD)
  photos: [...],                    // ← Add your photos
  memories: [...],                  // ← Photo captions
  specialReasons: [...],            // ← Why she's special
  loveLetter: "...",                // ← Your heartfelt message
  finalMessage: "...",              // ← Final words
  song: "/assets/birthday-song.mp3" // ← Path to background music
};
```

---

## 📸 Adding Photos

### Method 1: Use URLs (Easiest)
Replace the photo URLs in the `photos` array with your own image URLs:

```javascript
photos: [
  "https://your-image-url-1.jpg",
  "https://your-image-url-2.jpg",
  "https://your-image-url-3.jpg",
  "https://your-image-url-4.jpg",
],
```

**Image recommendations:**
- Size: 400x500px or similar aspect ratio
- Format: JPG or PNG
- Optimized: Compressed to <500KB each
- Free hosting options: Imgur, Cloudinary, AWS S3

### Method 2: Local Files
1. Create a `public/images` folder
2. Add your images there
3. Reference them as:
   ```javascript
   photos: [
     "/images/photo1.jpg",
     "/images/photo2.jpg",
     "/images/photo3.jpg",
     "/images/photo4.jpg",
   ],
   ```

**Hot tip:** Use free image optimization tools like:
- TinyPNG (tinypng.com)
- ImageOptim (imageoptim.com)
- CloudConvert (cloudconvert.com)

---

## 🎵 Adding Background Music

### Option 1: Use a URL
```javascript
song: "https://your-audio-url.mp3"
```

### Option 2: Local File
1. Create a `public/assets` folder
2. Place your MP3 file: `public/assets/birthday-song.mp3`
3. Reference it as:
   ```javascript
   song: "/assets/birthday-song.mp3"
   ```

**Music recommendations:**
- Duration: 2-4 minutes (loops)
- Format: MP3
- Volume: Not too loud (fits background)
- Mood: Romantic, soft instrumental
- Free sources: Bensound, FreePD, YouTube Audio Library

**Tip:** The music only plays when she clicks the player. No autoplay.

---

## ✍️ Writing the Love Letter

The love letter appears in Section 6. Make it personal:

```javascript
loveLetter: `Happy Birthday ❤️

[Your message here - as many paragraphs as you want]

Keep smiling.
Keep being you.

Happy Birthday, Sarah. ❤️`
```

**Pro tips:**
- Use line breaks for paragraph spacing
- Keep sentences short and meaningful
- Mix humor with sincerity
- Use actual details from your relationship
- Not too long (she'll read it on mobile)
- End with something personal from you

---

## 💝 Customizing "Why You're Special"

These are 5 cards that flip to reveal messages. Edit them in the `specialReasons` array:

```javascript
specialReasons: [
  { 
    title: "Your Smile",
    message: "Write what makes her smile special to you..."
  },
  { 
    title: "Your Nature",
    message: "What do you love about her personality?..."
  },
  // ... more reasons
]
```

Each reason should be:
- Specific (not generic)
- Authentic (your actual feelings)
- 1-2 sentences (readable on mobile)
- Genuine (avoid clichés)

---

## 📱 Mobile Optimization

This website is mobile-first and fully responsive:

**Tested on:**
- iPhone 12/13/14/15 (375-430px)
- Samsung Galaxy (360-412px)
- iPad (768px)
- Desktop (1024px+)

**Performance tips:**
- Images are lazy-loaded
- Animations respect `prefers-reduced-motion`
- No horizontal scrolling
- Touch-friendly buttons (44px+ tap targets)
- Fast scroll transitions

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

Vercel is free, fast, and perfect for this:

1. **Create a Vercel account:** vercel.com
2. **Connect your Git repo:** 
   - Push to GitHub
   - Import from GitHub to Vercel
3. **Deploy:**
   - Vercel auto-builds and deploys
   - Get a live URL immediately
   - Automatic HTTPS
   - Fast global CDN

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Deploy to Netlify

1. **Create a Netlify account:** netlify.com
2. **Connect GitHub**
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**

### Deploy to GitHub Pages

```bash
# Build the project
npm run build

# The dist folder is ready to deploy
# Push to GitHub and enable Pages in settings
```

### Self-hosted (VPS/Server)

```bash
# Build for production
npm run build

# Upload the dist folder to your server
# Configure your web server (nginx/Apache) to serve index.html
```

---

## 🎨 Customizing the Look

### Colors
The website uses a dark luxury theme with pink/red accents. To change colors, edit `src/App.jsx`:

```javascript
// Main accent colors are in className attributes like:
// from-pink-500 to-red-500
// from-pink-400 to-red-400
// text-pink-400, etc.

// Change to different colors:
// - blue: from-blue-500 to-cyan-500
// - purple: from-purple-500 to-pink-500
// - coral: from-orange-400 to-red-500
```

### Typography
Change font sizes:
- Desktop headings: `text-6xl`
- Mobile headings: `text-5xl`
- Adjust in the `className` attributes

---

## 🐛 Troubleshooting

### Photos not showing?
1. Check the URL is correct
2. Image isn't blocked by CORS
3. File size isn't too large
4. Try a different image URL

**Solution:** Use a placeholder image host:
- Upload to Imgur (free, no account needed)
- Get the image URL
- Paste in `photos` array

### Music not playing?
1. Browser might block autoplay
2. Check the file path is correct
3. Audio format might not be supported

**Solution:** 
- She needs to click the player first
- Ensure MP3 format (not WAV)
- Check browser console for errors

### Text not displaying correctly?
1. Check for special characters
2. Ensure line breaks are properly formatted
3. Test in different browsers

---

## 📋 Checklist Before Sending

- [ ] Changed her name in `birthdayData`
- [ ] Set correct birthday date
- [ ] Added 4+ photos (or valid URLs)
- [ ] Wrote personalized "Why You're Special" messages
- [ ] Wrote the love letter
- [ ] Added background music (or set to silent)
- [ ] Tested on mobile phone
- [ ] Tested on desktop
- [ ] Tested all interactions (scroll, buttons, clicks)
- [ ] Tested countdown accuracy
- [ ] Deployed or shared the link
- [ ] Confirmed all images load
- [ ] Verified music volume is appropriate

---

## 💻 For Developers

### Project Structure

```
birthday-surprise-website/
├── src/
│   ├── App.jsx           # Main component with all sections
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles + Tailwind
├── public/
│   ├── images/           # Place photos here
│   └── assets/           # Place music here
├── index.html            # HTML entry point
├── package.json          # Dependencies
├── vite.config.js        # Vite config
├── tailwind.config.js    # Tailwind config
└── SETUP.md              # This file
```

### Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool (fast!)
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (vanilla JS)

### Running Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build

# Output in dist/ folder
```

### Environment Variables

Create `.env.local`:
```
VITE_BIRTHDAY_DATE=2026-09-20
VITE_BIRTHDAY_NAME=Sarah
```

---

## 📞 Support

**Common issues and fixes:**

1. **Blank screen on load**
   - Check browser console for errors
   - Verify index.html exists
   - Check Node version (v16+)

2. **Images failing to load**
   - Use direct image URLs, not shortened links
   - Check CORS settings
   - Compress large images

3. **Music won't play**
   - Ensure MP3 format
   - Check volume isn't muted
   - Browser may block autoplay

4. **Slow performance**
   - Compress images
   - Use CDN for images
   - Clear browser cache

---

## 🎉 You're All Set!

This website is built with love for a special moment. Every detail has been crafted to make her feel how special she is to you.

**Final tips:**
- Test on her actual phone if possible
- Prepare the link for easy sharing
- Consider what time to send it
- Have fun with it—your effort will shine through

Good luck! 🎂❤️
