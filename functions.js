function toggleMenu() {
    var menu = document.getElementById("nav-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
function openWindow(val) {
    const template_url = 'treescribe.com'
    window.open('http://' + template_url + val, '_blank')
}