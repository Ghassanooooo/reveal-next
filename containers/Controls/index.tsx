"use client";

import Toolbar from "./Toolbar";
import LeftPanel from "./LeftPanel";
import View from "./View";
import PropertiesPanel from "./PropertiesPanel";

export default function Controls({ controls }: any) {
  return (
    <>
      <Toolbar />
      <LeftPanel />
      <PropertiesPanel />
      <View />
    </>
  );
}
