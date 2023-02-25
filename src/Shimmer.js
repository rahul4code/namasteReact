const Shimmer = () => {
  return (
    <div className="resList">
      {Array(10).fill("").map((item,index) => 
          <div key={index} className="card shimmerCard">
            <div className="imgDivShimmer" />
            <h2> </h2>
            <h2> </h2>
            <h2> </h2>
          </div>
       )}
    </div>
  );
};

export default Shimmer;
