import MainPanel from "././MainPanel";
import SidePanel from "../Movies/SidePanel";

function box() {
  return (
    <div className="flex justify-center">
      <SidePanel />
      <MainPanel />
    </div>
  );
}

export default box;
