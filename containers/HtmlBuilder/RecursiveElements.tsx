import { Fragment } from "react";
import SelectElement from "./SelectElement";

const RecursiveElements = (props: any) => {
  if (!props) return <></>;
  if (typeof props.children === "string") {
    return <SelectElement document={props}>{props.children}</SelectElement>;
  }
  if (!Array.isArray(props.children)) return <></>;
  if (Array.isArray(props.children) && props.children.length < 1) return <></>;

  return props.children.map((i: any, idx: any) => {
    return (
      <Fragment key={idx}>
        <SelectElement document={i}>
          <RecursiveElements {...i} />
        </SelectElement>
      </Fragment>
    );
  });
};

export default RecursiveElements;
