
import {useEffect, useRef} from "react";
import {PingPongServer} from "@components/elements/PingPongServer";
import {SimpleObjectDB} from "@components/elements/SimpleObjectDB"
import {DesktopClient} from "@components/elements/DesktopClient"
import {createInteractive, diagramCombine} from "@components/utils/DiagramaticsAdaptor"
import {ArrowType, BaseArrowElement} from "@components/elements/BaseArrowElement";
import {renderAll, renderScene} from "@components/utils/RenderElement";
import {StatusLabel, LabelType} from "@components/elements/StatusLabel";
import {Vector} from "@components/utils/Vector";
export default function Header({ title }) {
  const wasAlreadyRequested = useRef(false);
  useEffect(() => {

    let mysvg = document.getElementById('mysvg');
    let scene = {};

    if (wasAlreadyRequested.current===false) {
      let controldiv = document.getElementById('controldiv');
      let int = createInteractive(controldiv, mysvg);
      int.slider('x', 0, 100, 0);

      let desktopClientObj = new DesktopClient(50, 50, new Vector(0, 0));
      desktopClientObj.showStatusLabel(LabelType.FAILED)
      desktopClientObj.setCaption("Client");
      let serverObj = new PingPongServer(50, 50, new Vector(200, 0));
      serverObj.showStatusLabel(LabelType.IDLE)
      serverObj.setCaption("Server1");
      let databaseObj = new SimpleObjectDB(50, 50, new Vector(400, 0))
      databaseObj.showStatusLabel(LabelType.PROCESSING);
      databaseObj.setCaption("DB")
      let arrowObject = new BaseArrowElement(new Vector(25, 0), new Vector(75, 0), 10, ArrowType.DOUBLE);
      scene['Server1'] = serverObj;
      scene['Database1'] = databaseObj;
      scene['Desktop1'] = desktopClientObj;
      scene['Arrow1'] = arrowObject;
      int.draw_function = (inp) => {
        let x = inp['x'];
        if (x < 1) {
          renderScene(mysvg, scene);
        } else if (x < 2) {

        }

      }
      int.draw();
    }
    wasAlreadyRequested.current = true





  }, [wasAlreadyRequested])
  return <h1 className="title">{title}</h1>
}