import { v4 as uuidv4 } from "uuid";
import { pxToThreeFloatUnit } from "../utils/unitsConversion";

export const documentObjectModel = {
  head: {},
  body: {
    children: [
      {
        three: {
          isActive: true,
          fontSize: 0.32,
          positionX: -pxToThreeFloatUnit(1632 / 2 - 16) + 0.4,
          positionY: pxToThreeFloatUnit(100 / 2 - 16) - 0.4,
          height: pxToThreeFloatUnit(100),
          width: pxToThreeFloatUnit(1632) - 0.5,
          backgroundColor: 0xff00ff,
          color: 0x00ff00,
          anchorX: "left",
          anchorY: "middle",
        },
        style: {
          color: "#00ff00",
          width: "100vw",
          height: "100px",
          backgroundColor: "#ff00ff",
        },
        type: "section",
        element: "nav",
        classes: ["divToPrint"],
        elementId: uuidv4(),
        children: [
          {
            type: "element",
            element: "span",
            elementId: uuidv4(),
            children: "Logo",
          },

          {
            type: "element",
            element: "div",
            elementId: uuidv4(),
            style: {
              display: "flex",
            },
            children: [
              {
                type: "element",
                element: "div",
                elementId: uuidv4(),
                children: "Home",
              },
              {
                type: "element",
                element: "div",
                elementId: uuidv4(),
                children: "About",
              },
              {
                type: "element",
                element: "div",
                elementId: uuidv4(),
                children: "Contact",
              },
            ],
          },
        ],
      },
      {
        style: {
          color: "red",
          backgroundColor: "blue",
        },
        type: "section",
        element: "div",
        classes: ["divToPrint"],
        elementId: uuidv4(),
        children: "Hello World",
      },
    ],
  },
};
