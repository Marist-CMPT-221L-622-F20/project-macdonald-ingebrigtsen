window.addEventListener("load", eventObj => {
    const question = document.querySelector("h3");
    const answer = document.querySelector("h3+p");

    question.addEventListener("click", () => {
        answer.textContent == "" ? answer.textContent = "This site is all about the League of Legends map." : answer.textContent = "";

    });
});