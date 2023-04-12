import { Fragment } from "react";
import { RxSection, RxComponent1 } from "react-icons/rx";
import ButtonIcon from "../../../components/UI/ButtonIcon";

const data = [
  {
    Icon: RxComponent1,
    dataTip: "Create New Element",
  },
  {
    Icon: RxSection,
    dataTip: "Create New Section",
  },
];

export default function LayersPanel() {
  return (
    <div className="flex justify-between py-2 px-4 border-b border-indigo-300">
      <div>Layers</div>
      <div className="flex justify-center gap-4">
        {data.map(({ Icon, dataTip }: any, index) => {
          return (
            <Fragment key={index}>
              <ButtonIcon dataTip={dataTip}>
                <Icon />
              </ButtonIcon>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
