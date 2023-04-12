import RecursiveElements from "./RecursiveElements";
import SelectElement from "./SelectElement";

const Builder = ({ document }: any) => {
  return (
    <SelectElement document={document}>
      <RecursiveElements {...document} />
    </SelectElement>
  );
};

export default Builder;
