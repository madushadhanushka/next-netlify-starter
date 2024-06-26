import {diagramCombine, drawToSVG} from "@components/utils/DiagramaticsAdaptor";
import {text, V2} from "diagramatics";

export function renderAll(htmlElement, ...args) {
    let combined = null;
    args.forEach((arg) => {
        if (combined != null) {
            combined = diagramCombine(combined, arg.draw());
        } else {
            combined = arg.draw();
        }
    });
    let txb = text('absolute').fontsize(24).fontscale(1);
    diagramCombine(combined,txb)
    drawToSVG(htmlElement, combined);
}

export function renderScene(htmlElement, scene) {
    let combined = null;
    for (const key in scene) {
        if (combined != null) {
            combined = diagramCombine(combined, scene[key].render());
        } else {
            combined = scene[key].render();
        }
    }
    let txb = text('absolute').fontsize(24).fontscale(100);
    txb.append_tags("test")
    diagramCombine(combined,txb)
    console.log("render ele", combined)

    drawToSVG(htmlElement, combined);
}