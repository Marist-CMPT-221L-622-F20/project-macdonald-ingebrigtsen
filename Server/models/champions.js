/* Champion model represents a Champion
 * having the following properties:
 *   - ChampName (a String)
 *   - ArchType (a String)
 *   - Difficulty (a String)
 */

// Constructor for instances of the Champion model
function Champion(ChampName, ArchType, Difficulty) {

    this.ChampName = ChampName;
    this.ArchType = ArchType;
    this.Difficulty = Difficulty
}

exports.Champion = Champion
exports.Champions = [
    new Champion("Ryze","Mage","Hard"),
    new Champion("Sion","Tank","Easy"),
    new Champion("Warwick","Fighter","Easy"),
    new Champion("Jhin","ADC","Medium"),
    new Champion("Soraka","Support","Easy")
];
