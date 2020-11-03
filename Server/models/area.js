/* area model represents a user
 * having the following properties:
 *   - name (a String)
 *   - sublocation (a String)
 */

// Constructor for instances of the area model
function Area(location, sublocation) {

    this.location = location;
    this.sublocation = sublocation;

}

exports.Area = Area
exports.areas = [
    new Area("Lanes","Top"),
    new Area("Lanes","Mid"),
    new Area("Lanes","Bot"),
    new Area("Jungle","Redside")
];
