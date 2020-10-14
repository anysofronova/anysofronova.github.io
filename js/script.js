const html_skill = document.getElementById("html_skill");
const css_skill = document.getElementById("css_skill");
const js_skill = document.getElementById("js_skill");
const python_skill = document.getElementById("python_skill");
const git_skill = document.getElementById("git_skill");
const react_skill = document.getElementById("react_skill");
const jQuery_skill = document.getElementById("jQuery_skill");
const sass_skill = document.getElementById("sass_skill");
const typeScript_skill = document.getElementById("typeScript_skill");
const vue_skill = document.getElementById("vue_skill");

let last_known_scroll_position = 0;
let ticking = false;

// ---------------SCROLL_PAGE---------------
function doSomething(scroll_pos) {
    if(scroll_pos > 1300){
        html_skill.classList.add("html-skill");
        css_skill.classList.add("css-skill");
        js_skill.classList.add("js-skill");
        python_skill.classList.add("python-skill");
        git_skill.classList.add("git-skill");
        react_skill.classList.add("react-skill");
        jQuery_skill.classList.add("jQuery-skill");
        sass_skill.classList.add("sass-skill");
        typeScript_skill.classList.add("typeScript-skill");
        vue_skill.classList.add("vue-skill");
    }
}
window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
    }
});
