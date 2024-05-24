function HomeProductItem() {
  return (
    <div className="productCard">
      <div className="productMedia">
        <img src="" alt="" />
        <span>label</span>
      </div>
      <div className="productInfo">
        <span>Duration: </span> -<span>Type</span> -<span>Etc..</span>
      </div>
      <div className="productDetails">
        <h4>Product Title</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse sed,
          quod suscipit non ipsum corporis quae.
        </p>
      </div>
      <div className="productButtons">
        <button>Book Now</button>
        <button>Vie Details</button>
      </div>
    </div>
  );
}

export default HomeProductItem;
