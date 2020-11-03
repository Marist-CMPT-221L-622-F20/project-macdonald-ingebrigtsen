/* area model represents an area
 * having the following properties:
 *   - ID (an integer)
 *   - name (a String)
 *   - sublocation (a String)
 *   - description (a String)
 */

let nextID = 0;

// Constructor for instances of the area model
function Area(location, sublocation, description) {

    this.ID = nextID++;
    this.location = location;
    this.sublocation = sublocation;
    this.description = description ? description : "";

}

exports.Area = Area
exports.areas = [
    new Area("Lane", "Top"),
    new Area("Lane", "Mid"),
    new Area("Lane", "Bot"),
    new Area("Jungle", "Redside")
];
