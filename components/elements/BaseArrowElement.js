import {DrawDiagram} from "@components/utils/DiagramaticsAdaptor";

export const ArrowType = {
    SINGLE: Symbol("single"),
    DOUBLE: Symbol("double")
};
export class BaseArrowElement {
    constructor(position1, position2, size, type) {
        this.position1 = position1;
        this.position2 = position2;
        this.size = size;
        this.type = type;
    }
    render() {
        switch (this.type) {
            case ArrowType.SINGLE: return new DrawDiagram().drawArrow1(this.position1, this.position2, this.size).getDiagram();
            case ArrowType.DOUBLE: return new DrawDiagram().drawArrow2(this.position1, this.position2, this.size).getDiagram();
        }
    }
}