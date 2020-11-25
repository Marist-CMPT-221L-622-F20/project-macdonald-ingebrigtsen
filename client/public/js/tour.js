const serverURL = "http://localhost:3000";
const apiBase = serverURL + "/api";

window.addEventListener("load", function () {

    const AlliedSideButton = document.getElementById("alliedSide");
    AlliedSideButton.addEventListener("click", function (evt) {

        fetch(apiBase + "/locations/" + "AlliedSide")
            .then(res => res.json()) // parse response as JSON
            .then(location => {
                updateData(location);

            });

    });

    const JungleButton = document.getElementById("jungle");
    JungleButton.addEventListener("click", function (evt) {

        fetch(apiBase + "/locations/" + "Jungle")
            .then(res => res.json()) // parse response as JSON
            .then(location => {
                updateData(location);

            });

    });
    const LaneButton = document.getElementById("lanes");
    LaneButton.addEventListener("click", function (evt) {

        fetch(apiBase + "/locations/" + "Lanes")
            .then(res => res.json()) // parse response as JSON
            .then(location => {
                updateData(location);

            });
    });

    const RiverButton = document.getElementById("river");
    RiverButton.addEventListener("click", function (evt) {

        fetch(apiBase + "/locations/" + "River")
            .then(res => res.json()) // parse response as JSON
            .then(location => {
                updateData(location);

            });
    });

    run();
    function run() {
        const favoriteAlliedImg = document.getElementById("favoriteAllied");
        const userName = window.sessionStorage.getItem('userName');
        fetch(apiBase + "/users/" + userName)
            .then(res => res.json()) // parse response as JSON
            .then(user => {
                let favs = JSON.parse(user.favorites);
                if (favs.alliedSide == true) {
                    favoriteAlliedImg.src = "/images/favorite.jpg"
                } else {
                    favoriteAlliedImg.src = "/images/non-favorite.png"
                }
            });
    }

    //////////////////////////////////////

    const favoriteAlliedImg = document.getElementById("favoriteAllied");
    favoriteAlliedImg.addEventListener("click", function (evt) {
        const userName = window.sessionStorage.getItem('userName');
        fetch(apiBase + "/users/" + userName)
            .then(res => res.json()) // parse response as JSON
            .then(user => {
                let favs = JSON.parse(user.favorites);
                if (favs.hasOwnProperty("alliedSide") && favs.alliedSide == true) {
                    console.log("already there " + favs.alliedSide);
                    favs.alliedSide = false;
                    console.log(favs);
                } else {
                    console.log("not there or is false");
                    favs.alliedSide = true;
                    console.log(favs);
                }

                if (favs.alliedSide == true) {
                    favoriteAlliedImg.src = "/images/favorite.jpg"
                } else {
                    favoriteAlliedImg.src = "/images/non-favorite.png"
                }

                const messageData = { favorites: favs };
                fetch(apiBase + "/users/" + userName, {
                    method: "PUT",
                    body: JSON.stringify(messageData),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(res => {
                        if (res.status === 500) {
                            const outputElem = document.querySelector("output");
                            outputElem.innerHTML = "Something went wrong";
                        }
                        else if (res.status === 204) {
                            const outputElem = document.querySelector("output");
                            outputElem.innerHTML = "Favorite modified";
                        }

                        // TODO add some error-handling
                    });


            });
    });
});


//////////////////////////////////

function updateData(location) {
    // get the location data and display on the page

    const title = document.querySelector("h2");
    title.textContent = "Location: " + location.name;

    const paragraph1 = document.getElementById("paragraph1");
    paragraph1.textContent = location.paragraph1;
    const paragraph2 = document.getElementById("paragraph2");
    paragraph2.textContent = location.paragraph2;
    const paragraph3 = document.getElementById("paragraph3");
    paragraph3.textContent = location.paragraph3;
    const paragraph4 = document.getElementById("paragraph4");
    paragraph4.textContent = location.paragraph4;

    const image1 = document.getElementById("image1");
    image1.src = location.image1;
    const image2 = document.getElementById("image2");
    image2.src = location.image2;
    const image3 = document.getElementById("image3");
    image3.src = location.image3;
    const image4 = document.getElementById("image4");
    image4.src = location.image4;
}






