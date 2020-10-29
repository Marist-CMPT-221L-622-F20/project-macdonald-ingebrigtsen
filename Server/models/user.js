/* User model represents a user
 * having the following properties:
 *   - name (a String)
 *   - ID (an integer)
 *   - dateJoined (a string)
 *   - currentLocation (a string)
 *   - tourType (a string)
 */

let nextID = 0;

// Constructor for instances of the User model
function User(name, currentLocation, tourType) {
    const date = new Date();

    this.name = name;
    this.ID = nextID++;
    this.dateJoined=date.toISOString();
    this.currentLocation = currentLocation ? currentLocation : "Home";
    this.tourType = tourType ? tourType : "Short";
}

exports.User = User
exports.users = [
    new User("Alice"),
    new User("Bob", "Jungle", "Long"),
    new User("Carol", "Lanes")
];
