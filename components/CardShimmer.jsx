const CardShimmer = () => {
  // const array = new Array(10).fill('')
  //            or
  // const array = Array.from({length:12}) //create custom quick array
  return (
    <>
      {Array.from({ length: 12 }).map((el, i) => {
        return (
          <div key={i} className="card">
            <div className="shimmer2"></div>
            <div className="heading-shimmer"></div>
            <div className="text-shimmer"></div>
            <div className="text-shimmer"></div>
          </div>
        );
      })}
    </>
  );
};

export default CardShimmer;
