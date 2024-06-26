import {image, V2, diagram_combine, arrow1, arrow2, draw_to_svg, rectangle, text, Interactive} from "diagramatics";

export function diagramCombine(...args) {
    return diagram_combine(...args)
}

export function drawToSVG(htmlElement, elements, size) {
    draw_to_svg(htmlElement, elements, size)
}
export function createInteractive(controldiv, svgItem) {
    return new Interactive(controldiv, svgItem)
}

export class DrawDiagram {
    diagram;
    // Draw function
    drawText(textToShow) {
        this.diagram = text(textToShow);
        return this;
    }
    drawImage(src, width, height) {
        this.diagram = image(src, width, height);
        return this;
    }
    drawRectangle(width, height) {
        this.diagram = rectangle(width, height);
        return this;
    }
    drawArrow1(position1, position2) {
        this.diagram = arrow1(V2(position1.x, position1.y), V2(position2.x, position2.y));
        return this;
    }
    drawArrow2(position1, position2, size) {
        this.diagram = arrow2(V2(position1.x, position1.y), V2(position2.x, position2.y), size);
        return this;
    }
    // Util functions
    setFontSize(size) {
        this.diagram = this.diagram.fontsize(size);
        return this;
    }
    setFontScale(scale) {
        this.diagram = this.diagram.fontscale(scale);
        return this;
    }
    setPosition(position) {
        this.diagram = this.diagram.position(V2(position.x, position.y));
        return this;
    }
    setTextFillColor(color) {
        this.diagram = this.diagram.textfill(color);
        return this;
    }
    fillElement(color) {
        this.diagram = this.diagram.fill(color);
        return this;
    }
    getDiagram() {
        return this.diagram;
    }
}