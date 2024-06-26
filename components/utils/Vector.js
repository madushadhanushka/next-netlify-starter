export class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        return this
    }
    addY(size) {
        this.y = this.y + size;
        return this;
    }
}