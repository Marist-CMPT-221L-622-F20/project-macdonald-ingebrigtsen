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
});

    function updateData(location) {
        // get the location data and display on the page

        const title = document.querySelector("h2");
        title.textContent = "Location: "+location.name;

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