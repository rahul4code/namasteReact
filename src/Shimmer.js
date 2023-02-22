const Shimmer = () => {
  return (
    <div className="resList">
      {Array.apply(0, Array(10)).map((item) => {
        return (
          <div className="card shimmerCard">
            <div className="imgDivShimmer" />
            <h2> </h2>
            <h2> </h2>
            <h2> </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
