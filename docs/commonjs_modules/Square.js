/**
 * module.exports is used for defining what a module exports and makes available through require().
 */


//M: require(id)
// id string module name or path
// Returns: any exported module content
module.exports = class Square {
    constructor(r) {
        this.area = r;
    }

    getArea() {
        return this.area * this.area;
    }
}
