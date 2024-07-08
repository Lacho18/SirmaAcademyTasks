let link = document.getElementById("link");
let text = document.getElementById("text");

let words = Array.from(text.querySelectorAll("span"));

link.addEventListener("mouseenter", () => {
    console.log("123");
    words.forEach(word => {
        word.style.fontWeight = "bold";
    });
});

link.addEventListener("mouseleave", () => {
    console.log("123");
    words.forEach(word => {
        word.style.fontWeight = "100";
    });
})