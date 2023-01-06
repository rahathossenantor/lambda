let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "come back :(";
} );
window.addEventListener("focus", () => {
    document.title = docTitle;
});