import { SidebarShimmer } from "./SidebarShimmer";
import { CardShimmer } from "./CardShimmer";

const Shimmer = () => {
  const loopInSidebar = Array(6).fill(null);

  return (
    <>
      <div className="grid md:grid-cols-4 gap-10 mx-5">
        <SidebarShimmer loopInSidebar={loopInSidebar} />
        <div className="grid md:grid-rows-2 mt-6">
          <CardShimmer />
          <CardShimmer />
        </div>
        <div className="grid md:grid-rows-2 mt-6">
          <CardShimmer />
          <CardShimmer />
        </div>
        <div className="grid md:grid-rows-2 mt-6">
          <CardShimmer />
          <CardShimmer />
        </div>
      </div>
    </>
  );
};

export default Shimmer;
