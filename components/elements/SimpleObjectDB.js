import {BaseDrawImageElement} from "@components/elements/BaseDrawImageElement"
import {LabelType} from "@components/elements/StatusLabel";


export class SimpleObjectDB extends BaseDrawImageElement {

    constructor(width, height, position) {
        let serverImage = "images/Database.png";
        super(serverImage, width, height, position);
        this.labelType = LabelType.NONE;
    }
}