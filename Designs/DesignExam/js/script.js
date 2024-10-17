document.querySelector(".burger-icon").addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
    document.querySelector("header").style.height = "200px";
    document.querySelector(".navigation>ul").style.display = "flex";
});

if (window.innerWidth <= 768) {
    document.querySelector(".navigation ul").addEventListener('click', (e) => {
        e.currentTarget.style.display = 'none';
        document.querySelector("header").style.height = "72px";
        document.querySelector(".burger-icon").style.display = 'block';
    });
}

document.querySelector(".tabs").addEventListener('click', (e) => {
    e.target.style.backgroundColor = "rgb(227, 148, 2)";

    document.querySelectorAll(".tabs div").forEach(tab => {
        if (tab !== e.target) {
            tab.style.backgroundColor = "rgb(36, 35, 35)";
        }
    })
})