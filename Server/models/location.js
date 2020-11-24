/* location model represents a location
 * having the following properties:
 *   - name (a String)
 *   - paragraph1 (a String)
 *   - paragraph2 (a String)
 *   - paragraph3 (a String)
 *   - paragraph4 (a String)
 *   - image1 (a String)
 *   - image2 (a String)
 *   - image3 (a String)
 *   - image4 (a String)
 */


const Seq = require("sequelize");
const db = new Seq("database", "username", "password", {
    dialect: "sqlite",
    storage: "server/db/students.sqlite"
});

const Location = db.define("location", {
    name: { type: Seq.STRING, allowNull: false },
    paragraph1: { type: Seq.STRING },
    paragraph2: { type: Seq.STRING },
    paragraph3: { type: Seq.STRING },
    paragraph4: { type: Seq.STRING },
    image1: { type: Seq.STRING },
    image2: { type: Seq.STRING },
    image3: { type: Seq.STRING },
    image4: { type: Seq.STRING },

});

db.sync()
    .then(async function () {
        if ((await Location.count()).valueOf() == 0) {
            await Location.create({
                name: "Location",
                paragraph1: "paragraph",
                paragraph2: "paragraph",
                paragraph3: "paragraph",
                paragraph4: "paragraph",
                image1: "/images/img.png",
                image2: "/images/img.png",
                image3: "/images/img.png",
                image4: "/images/img.png",

            });

            await Location.create({
                name: "Location",
                paragraph1: "paragraph",
                paragraph2: "paragraph",
                paragraph3: "paragraph",
                paragraph4: "paragraph",
                image1: "/images/img.png",
                image2: "/images/img.png",
                image3: "/images/img.png",
                image4: "/images/img.png",

            });
            console.log("Populated default locations");
        }

    });

module.exports = Location;