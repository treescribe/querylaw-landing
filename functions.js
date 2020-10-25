function toggleMenu() {
    var menu = document.getElementById("nav-menu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
}
function openWindow(val) {
    const template_url = 'https://app.trytreescribe.com'
    window.open(template_url + val, '_blank')
}