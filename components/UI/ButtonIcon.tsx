import React from "react";

export default function ButtonIcon({ children, dataTip }: any) {
  return (
    <div className="tooltip tooltip-bottom" data-tip={dataTip}>
      <div className="cursor-pointer text-stone-700 hover:text-indigo-700  text-lg">
        {children}
      </div>
    </div>
  );
}
