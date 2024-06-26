import {BaseDrawElement} from "@components/elements/BaseDrawElement";
import {DrawDiagram} from "@components/utils/DiagramaticsAdaptor";

export class CaptionLabel extends BaseDrawElement {
    constructor(position, caption) {
        super();
        this.position = position;
        this.caption = caption;
    }

    render() {
        return new DrawDiagram().drawText(this.caption).setPosition(this.position).getDiagram();
    }
}