import {BaseDrawImageElement} from "@components/elements/BaseDrawImageElement";

export class DesktopClient extends BaseDrawImageElement {
    constructor(width, height, position) {
        let serverImage = "images/ClientComputer.png"
        super(serverImage, width, height, position);
    }
}