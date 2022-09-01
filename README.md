# Video Speed Up Chrome Extension

Modifies the playback speed of all `video` elements on the page. This was originally a Tampermonkey script used only on YouTube. 

### Download the repo
```
git clone https://github.com/brokencommit/Video-Speed-Up-Chrome
```
or download the zip directly.

### To Load in Google Chrome:
```
Navigate to chrome://extensions/
Enable Developer Mode at the top right
Click "Load unpacked"
Load the cloned repo
```

### Examples Of Playback Speeds:
```
0.5 = half speed
1 = normal speed
10 = 10 times speed
```

### Sites Confirmed Working:
- YouTube
- Vimeo
- Coursera
- Instagram
- Facebook
- Netflix
- TikTok
- Gfycat

### Sites Confirmed *NOT* Working:
- Amazon Prime Video
- MIT OCW

---

### How it Works:
`inject.js` is the entirety of the script
```js
javascript:(function(){var r=document.querySelectorAll("video"),p=prompt("Speed",r[0].playbackRate);r.forEach(v=>v.playbackRate=p||v.playbackRate);}());
```

It may be expanded in the future to work on multiple video players.

It also functions as a bookmarklet if you don't want to install the full extension. Simply bookmark the code snippet above.

---

### Future:
- test on more websites and collect a list of where it currently works
- expand script to work on websites that it currently doesn't work on
- ~~change querySelector to querySelectorAll?~~

