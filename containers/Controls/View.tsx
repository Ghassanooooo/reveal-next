import { Fragment, Suspense, useRef } from "react";
import { OrbitControls, Html, Plane, Center } from "@react-three/drei";
import Builder from "../HtmlBuilder";
import { documentObjectModel } from "../../apiData/document";
import TextPlaceholder from "../../components/Loadings/TextPlaceholder";
import { useThree } from "@react-three/fiber";
import CanvasComponent from "../../components/Canvas";
import * as THREE from "three";

// https://codesandbox.io/s/compassionate-sea-nn3svl?file=/src/App.jsx

export default function View() {
  return (
    <CanvasComponent>
      <Suspense fallback={<TextPlaceholder />}>
        <directionalLight intensity={1.5} position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        {/**   <Grid size={10} />*/}
        <OrbitControls
          enableRotate={false}
          enablePan={true}
          mouseButtons={{
            LEFT: THREE.MOUSE.PAN,
            RIGHT: THREE.MOUSE.ROTATE,
          }}
        >
          <Html
            className="scene"
            transform
            occlude="blending"
            position={[0, 10, 0]}
          >
            {documentObjectModel?.body?.children?.map(
              (element: any, idx: number) => {
                return (
                  <Fragment key={idx}>
                    <div>
                      <Builder document={element} />
                    </div>
                  </Fragment>
                );
              }
            )}
          </Html>
        </OrbitControls>
      </Suspense>
    </CanvasComponent>
  );
}
