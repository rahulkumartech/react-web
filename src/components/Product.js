import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Prodact = () => {
  const [data, setData] = useState("");
  const [lodign, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const respons = await fetch(`https://fakestoreapi.com/products/`);
        if (!respons.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${respons.status}`
          );
        }
        let acthualData = await respons.json();
        setData(acthualData);
      } catch (err) {
        console.log(err, "err");
        setData(null);
      }
    };
    getData();
  });

  // <div className="col-md-7 col-lg-6 ">
  //         <div className="card">
  //           {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
  //           <div className="card-body">
  //             <h5 className="card-title">Card title</h5>
  //             <p className="card-text">
  //               Some quick example text to build on the card title and make up
  //               the bulk of the card's content.
  //             </p>
  //             <Link href="#" className="btn btn-primary">
  //               Go somewhere
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  const Listing = () => {
    console.log(data);
    return data.map((val, ind) => (
      <div className="col-md-4 col-lg-3 " key={val.id}>
        <div className="card">
          <img className="card-img-top" src={val.image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">
              {val.title}
              <span> {val.price}</span>
            </h5>
            <p className="card-text">{val.description}</p>
            <Link to="/product-list" className="btn btn-primary" id={val.id}>
              By Now
            </Link>

            <Link to="/product-list" className="btn btn-primary" id={val.id}>
              Buy now
            </Link>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <div className="Prodact">
      <div className="container">
        <div className="row">{data == "" ? "" : <Listing />}</div>
      </div>
    </div>
  );
};

export default Prodact;
