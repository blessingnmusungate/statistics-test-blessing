import { useEffect, useState } from "react";
import FilterOption from "./components/FilterOption";
import jsonData from "./events-cds.json";

function App() {
  const [filterSelected, setFilterSelected] = useState("");

  const readFile = async () => {
    const dataArr = Object.values(jsonData);
    console.log("add", dataArr);

    // try {
    //   const res = await fetch("./events-cds.json");
    //   const json = await res.json();
    //   console.log("jsonnnn", json);
    // } catch (error) {
    //   console.log("error", error);
    // }
  };
  useEffect(() => {
    readFile();
  }, []);

  const setFilter = (filter: string) => {
    if (filter === filterSelected) setFilterSelected("");
    else setFilterSelected(filter);
  };
  return (
    <div className="">
      <div className=" w-fit mx-auto pt-8">
        <div className=" font-bold text-center">Compare by</div>
        <div className="flex gap-2 border p-2 my-2 rounded-md w-fit">
          <FilterOption
            title="platform"
            onClickFunction={() => setFilter("platform")}
            isActive={filterSelected === "platform"}
          />
          <FilterOption
            title="version"
            onClickFunction={() => setFilter("version")}
            isActive={filterSelected === "version"}
          />
          <FilterOption
            title="network"
            onClickFunction={() => setFilter("network")}
            isActive={filterSelected === "network"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
