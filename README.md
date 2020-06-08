#ha-noh.github.io
A website to catalog my various personal projects, including artwork, software, and music.

## Testing 
1) run `python -m http.server 8000` in terminal from site's root directory
2) open `localhost:8000` in browser
## Sass
1) `sass --watch css/scss:css`
## TODO
1) ~~Have home page panels redirect to the appropriate gallery category~~ 
2) ~~Add dark borders to panels & try out background images~~
3) ~~Pass nightmode state between pages~~
4) ~~Localize navbar html & css to one file~~
5) ~~Maybe move the gallery hamburger icon to somewhere closer to the rest of the content~~
6) ~~Move down taborder of non-menu items when side navigation bar is open~~
7) ~~Add Aria labels to all buttons?~~
8) Have navbar icons look more organized and not floating in space
9) Change how image height is determined in the gallery
10) Create a landing page or page overlay for every panel -  right now some panels just link to external pages without any context
11) ~~Remove jquery calls and fontawesome icons from navbar & gallery~~
## Browser Compatibility
- Keyboard navigation in Firefox is weird; it allows you to focus the body DOM element if you tab to the bottom of any given page. Issue is not present in Chrome.
