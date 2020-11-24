const serverURL = "http://localhost:3000";
const apiBase = serverURL + "/api";

window.addEventListener("load", function () {

    const LogInButton = document.getElementById("Login")
    LogInButton.addEventListener("click", function (evt) {

        const Username = document.getElementById("InputField").value;
        if (Username !== "") {
            fetch(apiBase + "/users/" + Username)
                .then(res => res.json()) // parse response as JSON
                .then(User => {
                    // save data to SessionStorage (persists as long as the current browser session)
                    window.sessionStorage.setItem('userName', User.name);

                    // get the student names and display on the page
                    const outputElem = document.querySelector("output");
                    outputElem.innerHTML = "";
                    outputElem.innerHTML += "<p>Successfully logged in as " + User.name + "</p>";

                });
        }
    })
});
