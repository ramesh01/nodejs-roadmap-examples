module.exports = class Square {
    constructor(r) {
        this.area = r;
    }

    getArea() {
        return this.area * this.area;
    }
}
