/* FighterType model represents a FighterType of a Champion
 * having the following properties:
 *   - ArchType (a String)
 *   - Location (a String)
 *   - NumofChampions (a Int)
 */

// Constructor for instances of the FighterType model
function FighterType(ArchType, Location, NumofChampions) {

    this.ArchType = ArchType;
    this.Location = Location;
    this.NumofChampions = NumofChampions;
}

exports.FighterType = FighterType
exports.FighterTypes = [
    new FighterType("ADC","BOT ","3"),
    new FighterType("Tank","Top","2"),
    new FighterType("Mage","Mid","3"),
];
