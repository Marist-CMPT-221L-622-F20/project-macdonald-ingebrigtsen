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
                name: "AlliedSide",
                paragraph1: "This is your base, it where you spawn in and its your job to protect.",
                paragraph2: "This is your nexus, if it breaks you lose",
                paragraph3: "This is your Inhibitor, it is protected by 3 layers of turrets, if this breaks your enemies will spawn superminions for 5 minutes.",
                paragraph4: "This is a minion, they spawn every 30 seconds, we will cover them more in the lanes section.",
                image1: "/images/Blue_Base.png",
                image2: "/images/Blue_Nexus.webp",
                image3: "/images/Blue_Inhibitor.webp",
                image4: "/images/Red_Superminion.webp",

            });

            await Location.create({
                name: "Jungle",
                paragraph1: "As there are 5 people per team, and only 4 go into lanes . That leaves 1 person left over in the jungle.",
                paragraph2: "Its the junglers job to kill monsters in the jungle for gold instead of minions, they also control the buffs like red buff here.",
                paragraph3: "Thats not the only thing they do, they also gank the lanes when they are not taking monster, this means they go into the lane and attempt to 2v1 the enemy and kill them.",
                paragraph4: "Also its the junglers job to try and kill the dragon, often they need their team. So when they dont have their team its their job to keep it warded until bot lane is available.",
                image1: "/images/Jungle_Map.jpg",
                image2: "/images/Red_Buff.jpg",
                image3: "/images/Blue_Buff.webp",
                image4: "/images/River_Dragon.webp",

            });            await Location.create({
                name: "Lanes",
                paragraph1: "There are 3 lanes in league of legends as show on the map, ill get more indepth in the individual lane slides but for now heres an overview of each",
                paragraph2: "Often called an island, top lane is fairly isolated as its away from the dragon, you put your tanks and fighters here cause they are best in solo 1v1's",
                paragraph3: "Located in the middle of the map, mid lane has the power to swing games. You put mobile assassins or long range mages in the mid lane in order to ensure you have influence around mid as so much is going on around it.",
                paragraph4: "The most crowded lane in league, bot lane is a duo consisting of an attack damage carry (adc) and a support. The adc needs a long time to become powerful so the support has to baby them until they come online. This will be the lane that influences how many dragons you get most of the time",
                image1: "/images/Lanes.jpg",
                image2: "/images/Sion.webp",
                image3: "/images/Malzahar.jpg",
                image4: "/images/Birds.jpg",

            });
            await Location.create({
                name: "River",
                paragraph1: "The river is an extension of the jungle connecting the two halves of the map, it is essential you control this portion to prevent the enemy from sneaking into you jungle and taking your monsters, this is why we have rift scuttlers. When they die they spawn a circle that gives important vision",
                paragraph2: "Also in the baron pit, before the baron spawns a rift herald spawns, this is a important buff but is often less valuable then something like dragon because it only gives a temproary reward.",
                paragraph3: "I give vision when I die",
                paragraph4: "This is the dragon, there are 4 types of dragons wind, fire, water, and earth. They give a perment buff each time you slay them.",
                image1: "/images/Scuttle_Buff.png",
                image2: "/images/Rift_Herald.webp",
                image3: "/images/Rift_Scuttler_Render.webp",
                image4: "/images/River_Dragon.webp",

            });
            console.log("Populated default locations");
        }

    });

module.exports = Location;