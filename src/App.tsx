import { useEffect, useState } from "react";
import FilterOption from "./components/FilterOption";
import jsonData from "./events-cds.json";
import PlatformGraph from "./components/PlatformGraph";
import VersionGraph from "./components/VersionGraph";

function App() {
  const [filterSelected, setFilterSelected] = useState("platform");
  const [startDataArr, setStartDataArr] = useState<DataRecord[]>([]);
  const [interactionDataArr, setInteractionDataArr] = useState<DataRecord[]>(
    []
  );
  const [shopClickDataArr, setShopClickDataArr] = useState<DataRecord[]>([]);

  //load data into local state
  const loadData = () => {
    const dataArr = Object.values(jsonData);

    const startArray = dataArr.filter((d) => d.name === "start");
    const interactionArray = dataArr.filter((d) => d.name === "interaction");
    const shopClickArray = dataArr.filter((d) => d.name === "shop_click");

    setStartDataArr(startArray);
    setInteractionDataArr(interactionArray);
    setShopClickDataArr(shopClickArray);
  };

  useEffect(() => {
    loadData();
  }, []);

  const setFilter = (filter: string) => {
    if (filter === filterSelected) setFilterSelected("");
    else setFilterSelected(filter);
  };

  //find count by platform for each group
  const findPlatformCount = (dataArray: DataRecord[], platform: string) => {
    const filtered = dataArray.filter((d) => d.platform === platform);
    const total = filtered.reduce((accumulator, s) => accumulator + s.count, 0);
    return total;
  };

  //find count by version for each group
  const findVersionCount = (dataArray: DataRecord[], version: string) => {
    const filtered = dataArray.filter((d) => d.version === version);
    const total = filtered.reduce((accumulator, s) => accumulator + s.count, 0);
    return total;
  };

  //put data into form expected by recharts library
  const platformData = [
    {
      name: "start",
      android: findPlatformCount(startDataArr, "android"),
      ios: findPlatformCount(startDataArr, "ios"),
      unknown: findPlatformCount(startDataArr, "unknown"),
    },
    {
      name: "interaction",
      android: findPlatformCount(interactionDataArr, "android"),
      ios: findPlatformCount(interactionDataArr, "ios"),
      unknown: findPlatformCount(interactionDataArr, "unknown"),
    },
    {
      name: "shop_click",
      android: findPlatformCount(shopClickDataArr, "android"),
      ios: findPlatformCount(shopClickDataArr, "ios"),
      unknown: findPlatformCount(shopClickDataArr, "unknown"),
    },
  ];
  const versionData = [
    {
      name: "start",
      "1.0.0.swordupgradekillstickman.iec": findVersionCount(
        startDataArr,
        "1.0.0.swordupgradekillstickman.iec"
      ),
      "1.0.0.swordupgradekillstickman.sip": findVersionCount(
        startDataArr,
        "1.0.0.swordupgradekillstickman.sip"
      ),
      "1.0.0.swordupgradekillstickman.std": findVersionCount(
        startDataArr,
        "1.0.0.swordupgradekillstickman.std"
      ),
    },
    {
      name: "interaction",
      "1.0.0.swordupgradekillstickman.iec": findVersionCount(
        interactionDataArr,
        "1.0.0.swordupgradekillstickman.iec"
      ),
      "1.0.0.swordupgradekillstickman.sip": findVersionCount(
        interactionDataArr,
        "1.0.0.swordupgradekillstickman.sip"
      ),
      "1.0.0.swordupgradekillstickman.std": findVersionCount(
        interactionDataArr,
        "1.0.0.swordupgradekillstickman.std"
      ),
    },
    {
      name: "shop_click",
      "1.0.0.swordupgradekillstickman.iec": findVersionCount(
        shopClickDataArr,
        "1.0.0.swordupgradekillstickman.iec"
      ),
      "1.0.0.swordupgradekillstickman.sip": findVersionCount(
        shopClickDataArr,
        "1.0.0.swordupgradekillstickman.sip"
      ),
      "1.0.0.swordupgradekillstickman.std": findVersionCount(
        shopClickDataArr,
        "1.0.0.swordupgradekillstickman.std"
      ),
    },
  ];
  return (
    <div className=" pt-4 ">
      <div className=" w-fit mx-auto my-4">
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
        </div>
        <div>
          {filterSelected ? (
            <div className="flex">
              Data filtered by:{" "}
              <label className=" ml-2 font-bold">{filterSelected}</label>
            </div>
          ) : (
            <div>Please select filter to view data</div>
          )}
        </div>
      </div>

      <div className=" w-full flex flex-col justify-center items-center">
        {filterSelected === "platform" && <PlatformGraph data={platformData} />}
        {filterSelected === "version" && <VersionGraph data={versionData} />}
      </div>
    </div>
  );
}

export default App;
