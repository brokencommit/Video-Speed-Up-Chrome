# Video Speed Up Chrome Extension

This was originally a Tampermonkey script for YouTube. Incredibly, it worked on way more sites than I expected. Maybe every website casually uses the exact same video player.

## Beta POC
```
git clone https://github.com/jatr6994/Video-Speed-Up-Chrome
```
or download the zip directly.

### To Load in Google Chrome:
```
Navigate to chrome://extensions/
Enable Developer Mode
Click Load Unpacked
Load the cloned repo
```

### Speed Settings:
```
0.5 = half speed
1 = normal speed
10 = 10 times speed
... etc.
```

## Sites Confirmed Working:
- YouTube
- Vimeo
- Coursera

---

## How it Works:
`inject.js` is the entirety of the script
```
javascript:(function(){var r;(r=document.querySelector("video")).playbackRate=prompt("Speed",r.playbackRate)||r.playbackRate;}());
```

It may be expanded in the future to work on multiple video players.

It also functions as a bookmarklet if you don't want to install the full extension.
