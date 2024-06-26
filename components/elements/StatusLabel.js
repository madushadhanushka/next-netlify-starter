import {BaseDrawElement} from "@components/elements/BaseDrawElement";
import {
    diagramCombine, DrawDiagram
} from "@components/utils/DiagramaticsAdaptor";
import {Vector} from "@components/utils/Vector";

export const LabelType = {
    "NONE": Symbol("None"),
    "PROCESSING": Symbol("Processing"),
    "IDLE": Symbol("Idle"),
    "FAILED": Symbol("Failed")
}
export class StatusLabel extends BaseDrawElement{
    constructor(position, labelType) {
        super();
        this.position = position;
        this.labelType = labelType;
    }
    generateProcessingLabel(position) {
        let outerShell =new DrawDiagram().drawRectangle(100,20)
            .setPosition(position).fillElement('green')
        let textToView = new DrawDiagram().drawText("Processing")
            .setPosition(position.addY(-2)).setTextFillColor('white').setFontSize(15).setFontScale(1)
        return diagramCombine(outerShell.getDiagram(), textToView.getDiagram());
    }

    generateIdleLabel(position) {
        let outerShell = new DrawDiagram().drawRectangle(50,20).setPosition(position)
            .fillElement('#aaaa00')
        let textToShow = new DrawDiagram().drawText("Idle").setPosition(position.addY(-2))
            .setTextFillColor('white').setFontSize(15).setFontScale(1);
        return diagramCombine(outerShell.getDiagram(), textToShow.getDiagram());
    }

    generateFailedLabel(position) {
        let outerShell = new DrawDiagram().drawRectangle(80,20)
            .setPosition(position).fillElement('#aa0000')
        let textToShow = new DrawDiagram().drawText("Failed")
            .setPosition(position.addY(-2)).setTextFillColor('white').setFontSize(15).setFontScale(1);
        return diagramCombine(outerShell.getDiagram(), textToShow.getDiagram());
    }

    render() {
        switch (this.labelType) {
            case LabelType.PROCESSING: return this.generateProcessingLabel(this.position);
            case LabelType.IDLE: return this.generateIdleLabel(this.position);
            case LabelType.FAILED: return this.generateFailedLabel(this.position);
        }
    }

}