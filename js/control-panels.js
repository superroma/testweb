var choices = document.querySelectorAll('.panel');
var maxWidth = 0;
// read
for (i = 0; i < choices.length; ++i) {
    maxWidth = Math.max(maxWidth, choices[i].offsetWidth)
};

// write
for (i = 0; i < choices.length; ++i) {
    choices[i].style.width = maxWidth + "px";
};
