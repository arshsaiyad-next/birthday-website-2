# Quick Personalization Guide (No Coding Required!)

## Step 1: Find the Birthday Data

Open `src/App.jsx` in any text editor. Look for this section near the top:

```javascript
const birthdayData = {
  name: "Sarah",
  birthday: "2026-09-20",
  photos: [...],
  // ... more fields
};
```

This is where you customize everything. Follow the steps below.

---

## Step 2: Change Her Name

Find this line:
```javascript
name: "Sarah",
```

Change to her actual name:
```javascript
name: "Jennifer",
```

**Done!** This appears in Sections 3, 6, and 9.

---

## Step 3: Set the Birthday Date

Find this line:
```javascript
birthday: "2026-09-20",
```

Change to her actual birthday (keep the format YYYY-MM-DD):
```javascript
birthday: "2025-03-15",  // Example: March 15, 2025
birthday: "1999-07-04",  // Example: July 4, 1999
birthday: "2026-12-25",  // Example: December 25, 2026
```

**Format:** Always use `YYYY-MM-DD`
- YYYY = Year (4 digits)
- MM = Month (01-12)
- DD = Day (01-31)

---

## Step 4: Add Photos

### Simple Way (Use Image URLs)

Find this section:
```javascript
photos: [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  "https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=500&fit=crop",
],
```

Replace with your photo URLs:
```javascript
photos: [
  "https://imgur.com/YOUR_PHOTO_1.jpg",
  "https://imgur.com/YOUR_PHOTO_2.jpg",
  "https://imgur.com/YOUR_PHOTO_3.jpg",
  "https://imgur.com/YOUR_PHOTO_4.jpg",
],
```

**How to get photo URLs:**
1. Go to imgur.com
2. Upload your photos (no account needed)
3. Right-click the image → Copy image address
4. Paste the URL here

**You need 4 photos minimum.** Can add more by copying the pattern.

---

## Step 5: Update Photo Captions

Find this section:
```javascript
memories: [
  "One of my favourite memories ❤️",
  "That smile...",
  "A moment I'll always remember.",
  "Some moments deserve to stay forever.",
],
```

Change to your captions (one per photo):
```javascript
memories: [
  "Our first trip together ❤️",
  "You, being you",
  "That Sunday we won't forget",
  "Pure happiness",
],
```

Must have same number of captions as photos!

---

## Step 6: Edit "Why You're Special"

Find this section:
```javascript
specialReasons: [
  { title: "Your Smile", message: "The way you smile..." },
  { title: "Your Nature", message: "Your kindness..." },
  { title: "Your Little Things", message: "It's the little things..." },
  { title: "The Way You Care", message: "You care so deeply..." },
  { title: "The Way You Make Me Feel", message: "You make me feel..." },
],
```

Update each reason:
```javascript
specialReasons: [
  { 
    title: "Your Laugh",
    message: "Your laugh is infectious and makes every moment better."
  },
  { 
    title: "Your Kindness",
    message: "You care about everyone around you genuinely."
  },
  { 
    title: "How You Look At Me",
    message: "The way your eyes light up when you see me."
  },
  { 
    title: "Your Strength",
    message: "You handle everything with grace and courage."
  },
  { 
    title: "How You Inspire Me",
    message: "You make me want to be a better person every day."
  },
],
```

Each must have:
- `title` (short, bold point)
- `message` (1-2 sentences explaining it)

---

## Step 7: Write the Love Letter

Find this section:
```javascript
loveLetter: `Happy Birthday ❤️

I don't know if words will ever be enough...
...
Happy Birthday, Sarah. ❤️`,
```

Replace with your letter:
```javascript
loveLetter: `Happy Birthday ❤️

From the moment you came into my life, everything got better.

You're not just my girlfriend, you're my best friend, my adventure buddy, and my home.

The way you laugh, the kindness you show everyone, and how you make ordinary moments special—these are the things I love most about you.

This year, I want you to know how deeply you're loved and appreciated.

You deserve all the happiness in the world.

Happy Birthday to the most amazing person I know. ❤️`,
```

**Tips for writing:**
- Use line breaks for paragraphs
- Be specific about what you love
- Mix sweet with funny
- Keep it real, not too cheesy
- End with something personal from you

---

## Step 8: Write the Final Message

Find this section:
```javascript
finalMessage: `20 September will always be a little more special because it's your day.`,
```

Change to your message:
```javascript
finalMessage: `March 15 will always be extra special because it's your day.

You bring so much joy and light into my world. I'm grateful for every moment with you.`,
```

Keep it short (2-3 sentences max).

---

## Step 9: Add Background Music (Optional)

Find this section:
```javascript
song: "/assets/birthday-song.mp3",
```

### Option A: Use an online URL

```javascript
song: "https://your-audio-url.mp3",
```

Get music from:
- YouTube (convert with tool like ytmp3.com)
- Bensound.com (free, no login needed)
- FreePD.com (free music)
- Premium music sites (Spotify, Apple Music)

### Option B: Use local file

1. Create folder: `public/assets/`
2. Put MP3 file there
3. Keep it as:
```javascript
song: "/assets/birthday-song.mp3",
```

### Option C: No music

```javascript
song: "",  // Music player will be hidden
```

---

## Step 10: Save and Test

1. Save your changes to `src/App.jsx`
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open browser (should auto-open at http://localhost:3000)
4. Test all sections:
   - [ ] Click "Enter My Little Surprise"
   - [ ] Countdown displays
   - [ ] Photos show up
   - [ ] Scroll through all sections
   - [ ] Click all buttons
   - [ ] Play music
   - [ ] Test on mobile if possible

---

## Common Changes Reference

### Change birthday to New Year's Day 2025
```javascript
birthday: "2025-01-01",
name: "Emily",
```

### Change birthday to Christmas
```javascript
birthday: "2026-12-25",
name: "Sophie",
```

### Add a 5th or 6th photo
```javascript
photos: [
  "https://imgur.com/photo1.jpg",
  "https://imgur.com/photo2.jpg",
  "https://imgur.com/photo3.jpg",
  "https://imgur.com/photo4.jpg",
  "https://imgur.com/photo5.jpg",  // Added
  "https://imgur.com/photo6.jpg",  // Added
],
memories: [
  "Caption 1",
  "Caption 2",
  "Caption 3",
  "Caption 4",
  "Caption 5",  // Added
  "Caption 6",  // Added
],
```

---

## Testing Checklist

- [ ] All text shows correctly (no weird characters)
- [ ] All photos load
- [ ] Countdown works (shows correct days/hours/minutes/seconds)
- [ ] Can scroll smoothly through all sections
- [ ] All buttons are clickable
- [ ] Music plays when you click the player
- [ ] Website works on mobile phone
- [ ] No errors in browser console

---

## That's It!

You've successfully personalized the website. Share the link with her and watch her reaction! 🎉❤️

**Quick Review:**
- [ ] Changed her name
- [ ] Set correct birthday date
- [ ] Added 4+ photos with captions
- [ ] Edited the 5 reasons she's special
- [ ] Wrote a love letter
- [ ] Added music (optional)
- [ ] Tested everything

You're all set! Have fun sharing this special gift. 💝
