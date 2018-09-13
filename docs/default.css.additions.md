# `default.css` Additions

Add to the bottom of the file `default.css`. This allows showing of a loading image before `app.min.js` is loaded, preventing [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)

```css
/* Custom styles */
html, 
body {
    height: 100%;
}

body {
	background-image: url('/user/files/loading.gif');
	background-position: center;
	background-repeat: no-repeat;	
}

#bodywrapper { display: none; }
```