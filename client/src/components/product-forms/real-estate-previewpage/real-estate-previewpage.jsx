import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { ImCross } from "react-icons/im";
import "./real-estate-previewpage.css";
// import overviewIcon from "../../../assets/overview_icon.svg";
// import facilityIcon from "../../../assets/towel-rack.png";
import MoreDetails from "./more-details/MoreDetails";

const RealEstatePreviewPage = ({
  property_type,
  propertyData,
  locality,
  images,
  aminities,
  approvals,
  additionalRooms,
  whyInvest,
  additionalDetails,
  handleClose,
  handleUploadImages,
}) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [imgArr, setImgArr] = useState([]);

  useEffect(() => {
    setImgArr(images);
  }, []);

  return (
    <div className="villa-details-container">
      <header className="real-estate-form-preview-header">
        <h2>Preview Property</h2>
        <h2>
          <button onClick={handleClose}>
            <ImCross />
          </button>
        </h2>
      </header>
      <section className="villa-details-r1">
        <h4>
          <span>
            <MdLocationPin />
          </span>
          {locality.landmark}, {locality.city}, {locality.state}, {locality.pin}
        </h4>
        <div className="villa-details-table">
          <section>
            <p>Seller Type</p>
            <p className="villa-details-table-value">
              {propertyData.sellerType || "---"}
            </p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Seller Name</p>
            <p className="villa-details-table-value">
              {propertyData.sellerName || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Posted On</p>
            <p className="villa-details-table-value">
              {propertyData.postedOn || "---"}
            </p>
          </section>
          {/* <p className="villa-details-table-dummy-border"></p> */}
          {/* <section>
            <p>Total Shares</p>
            <p className="villa-details-table-value">
              {propertyData.totalShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Available Shares</p>
            <p className="villa-details-table-value">
              {propertyData.availableShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p> */}
          <section>
            <p>Property Value</p>
            <p className="villa-details-table-value">
              {propertyData.rentPrice || "---"}
            </p>
          </section>
        </div>

        {/* details table in mobile view */}
        <div className="villa-details-mobile-table">
          <table>
            <thead>
              <tr>
                <th scope="col">Seller Type</th>
                <th scope="col">Seller Name</th>
                <th scope="col">Posted On</th>
                {/* <th scope="col">Total Shares</th> */}
                {/* <th scope="col">Available Shares</th> */}
                {/* <th scope="col">Price Per Share</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td propertyData-label="Seller">
                  {propertyData.sellerType || "---"}
                </td>
                <td propertyData-label="Seller Type">
                  {propertyData.sellerName 
                  
                  || "---"}
                </td>
                <td propertyData-label="Posted On">
                  {propertyData.postedOn || "---"}
                </td>
                {/* <td propertyData-label="Total Shares">
                  {propertyData.totalShares || "---"}
                </td> */}
                {/* <td propertyData-label="Available Shares">
                  {propertyData.availableShares || "---"}
                </td> */}
                {/* <td propertyData-label="Price Per Share">
                  {propertyData.perSharePrice || "---"}
                </td> */}
              </tr>
            </tbody>
          </table>
        </div>

        {/* details table in mobile view ends */}
      </section>
      {images.length > 0 ? (
        <section className="villa-details-r2">
          <div className="villa-corousel-current-img">
            <img src={URL.createObjectURL(currentImg)} alt="" />
          </div>
          <div className="villa-corousel-all-img">
            {imgArr.map((image) => {
              return (
                <>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="loading..."
                    onClick={() => {
                      setCurrentImg(image);
                    }}
                  />
                </>
              );
            })}
          </div>
        </section>
      ) : null}

      <MoreDetails
        property_type={property_type}
        propertyData={propertyData}
        additionalRooms={additionalRooms}
        approvals={approvals}
      />
      <section className="villa-details-r3">
        <div className="overview">
          <h4>
            <span>
              {/* <img src={overviewIcon} alt="overview-img-icon" /> */}
            </span>
            About Property
          </h4>
          {additionalDetails ? (
            <p>{additionalDetails}</p>
          ) : (
            <p>
              An excellent opportunity that features a French multinational
              brand 'Mane' as a tenant, occupying the space since 2016. The
              asset features an office space and a research lab that caters to
              prominent FMCG players like Unilever, P&G and more. Their
              infrastructure gives an obvious indication of the stickiness of
              the tenant. Mane, a global leader of the Fragrance and Flavour
              sector, is headquartered in France with a 1.6 billion dollar
              turnover as of 2020. The asset is in a commercial building,
              Imperium located in Andheri, near the metro and airport. The entry
              yield for this property is 10.04% annually, and the targeted IRR
              is 16.33%. The lease agreement term is for five years and the
              lock-in period is for three years.
            </p>
          )}
        </div>
        {/* facilities & aminities */}
        <div className="facility-outer-wrap">
          <h4>
            <span>
              {/* <img src={facilityIcon} alt="overview-img-icon" /> */}
            </span>
            Facilities
          </h4>
          <div className="facility-inner-wrap">
            {aminities.map((aminity, i) => {
              return (
                <section key={i}>
                  <h6>{aminity}</h6>
                </section>
              );
            })}
          </div>
        </div>
      </section>
      {/* why invest here */}
      <section className="villa-details-r3">
        {/* <h4>
          <span></span>
          Why Invest Here?
        </h4> */}
        {/* {whyInvest.length > 0 ? (
          <ul className="why-invest-here-ul">
            {whyInvest.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        ) : (
          <p>---</p>
        )} */}
      </section>

      {/* map location */}
      <section>
        <section className="map-wrapper">
          <h5>Locate on map</h5>
          <iframe
            id="mapIframe"
            src={`https://maps.google.com/maps?q=${locality.street},${locality.landmark},${locality.city}&hl=es;&output=embed`}
            title="locationOnMap"
          ></iframe>
        </section>
      </section>

      {/* post button */}
      <section className="preview-property-post-btn-wrapper">
        <button
          className="preview-property-post-btn"
          onClick={handleUploadImages}
        >
          POST
        </button>
      </section>
    </div>
  );
};

export default RealEstatePreviewPage;
