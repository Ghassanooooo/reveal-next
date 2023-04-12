import LayersPanel from "./LayersPanel";

export default function LeftPanel() {
  return (
    <div className="bg-white w-80 fixed top-16 z-10 h-screen border-r border-indigo-300">
      <LayersPanel />
      <ul style={{ width: "100%" }} className="menu h-full">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a className="active">Item 2</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
  );
}
