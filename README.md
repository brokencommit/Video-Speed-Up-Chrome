# Video Speed Up Chrome Extension

Modifies the playback speed of all `video` elements on the page. This was originally a Tampermonkey script used only on YouTube. 

### Beta POC
```
git clone https://github.com/brokencommit/Video-Speed-Up-Chrome
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

It also functions as a bookmarklet if you don't want to install the full extension.

---

### Future:
- test on more websites and collect a list of where it currently works
- expand script to work on websites that it currently doesn't work on
- add (optionally per-site) shortcuts to run the script with a keypress
  - i've used `s` on YouTube for a long time, perhaps a control key would be better for general sites
- ~~change querySelector to querySelectorAll?~~

