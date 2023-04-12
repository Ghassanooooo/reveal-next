const data = [
  {
    title: "Layout",
  },
  {
    title: "Flexbox & Grid",
  },
  {
    title: "Spacing & Sizing",
  },
  {
    title: "Typography",
  },
  {
    title: "Backgrounds & Borders",
  },
  {
    title: "Effects & Filters",
  },
  {
    title: "Animation",
  },

  {
    title: "Interactivity",
  },

  {
    title: "Tables",
  },
];

export default function PropertiesPanel() {
  return (
    <div className="w-80 ">
      <div className=" bg-white w-80 border-l border-indigo-300 fixed top-16 right-0 z-10 h-full">
        <ul
          style={{ width: "100%" }}
          className="scroll scroll--white flex snap-mandatory snap-x flex-nowrap  pt-4 pb-3   px-4 overflow-x-scroll  gap-4 "
        >
          {data.map((item, index) => (
            <li
              className="text-xs  snap-center opacity-70 text-slate-700 hover:text-indigo-700 hover:opacity-100  font-bold whitespace-nowrap cursor-pointer"
              key={index}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
