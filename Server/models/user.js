/* User model represents a user
 * having the following properties:
 *   - name (a String)
 *   - dateJoined (a string)
 *   - currentLocation (a string)
 *   - tourType (a string)
 */

const Seq = require("sequelize");
const db = new Seq("database", "username", "password", {
    dialect: "sqlite",
    storage: "server/db/students.sqlite"
});

const User = db.define("user", {
    name: { type: Seq.STRING, allowNull: false },
    dateJoined: { type: Seq.STRING },
    currentLocation: { type: Seq.STRING, defaultValue: "Home" },
    tourType: { type: Seq.STRING, defaultValue: "Short" }
});

db.sync()
    .then(async function () {
        if ((await User.count()).valueOf() == 0) {
            await User.create({
                name: "User",

            });
            console.log("Populated default user");
        }

    });

module.exports = User;
