import {diagramCombine, DrawDiagram} from "@components/utils/DiagramaticsAdaptor";
import {BaseDrawElement} from "@components/elements/BaseDrawElement";
import {LabelType, StatusLabel} from "@components/elements/StatusLabel";
import {CaptionLabel} from "@components/elements/CaptionLabel";
import {Vector} from "@components/utils/Vector";

export class BaseDrawImageElement extends BaseDrawElement {
    constructor(img, width, height, position) {
        super();
        this.width = width;
        this.height = height;
        this.position = position;
        this.image = img;
    }

    setCaption(caption) {
        this.caption = caption;
    }

    showStatusLabel(labelType) {
        this.labelType = labelType;
    }
    hideStatusLabel() {
        this.labelType = LabelType.NONE;
    }

    render() {
        let renderDiagram;
        renderDiagram = new DrawDiagram().drawImage(this.image, this.width, this.height)
            .setPosition(this.position).getDiagram();
        if (this.labelType !== LabelType.NONE) {
            let statusLabel = new StatusLabel(new Vector(this.position.x, this.position.y + 40), this.labelType);
            renderDiagram = diagramCombine(renderDiagram, statusLabel.render());
        }
        if (this.caption) {
            let captionText = new CaptionLabel(new Vector(this.position.x, this.position.y - 40), this.caption);
            let result = captionText.render().fontsize(15).fontscale(1);
            renderDiagram = diagramCombine(renderDiagram, result);
        }
        return renderDiagram;
    }
}