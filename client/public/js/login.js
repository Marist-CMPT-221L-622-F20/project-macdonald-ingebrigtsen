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
    });

    const SignUpButton = document.getElementById("Sign_Up")
    SignUpButton.addEventListener("click", function (evt) {

        const Username = document.getElementById("InputField").value;
        if (Username !== "") {
            const messageData = { name: Username };
            fetch(apiBase + "/users/", {
                method: "POST",
                body: JSON.stringify(messageData),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => {
                    if (res.status === 500) {
                        const outputElem = document.querySelector("output");
                        outputElem.innerHTML = "UserName Already In Use";
                    }
                    else if (res.status === 201) {
                        const outputElem = document.querySelector("output");
                        outputElem.innerHTML = "User successfully Created";
                    }

                    // TODO add some error-handling
                });
        }
    });
});
