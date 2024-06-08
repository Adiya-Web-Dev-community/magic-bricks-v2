import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import "./MoreDetails.css";

const MoreDetails = ({
  property_type,
  propertyData,
  additionalRooms,
  approvals,
}) => {
  const [viewAllDetails, setViewAllDetails] = useState(false);

  return (
    <section className="more-details">
      <h1>More Details</h1>
      <div className="info">
        <div>
          <p>Name</p>
          <p>{propertyData.apartmentName || "---"}</p>
        </div>
        <div>
          <p>Super Area</p>
          {property_type === "land" ? (
            <p>{propertyData.plotSize || "---"}</p>
          ) : (
            <p>{propertyData.area || "---"}</p>
          )}
        </div>
        {property_type === "land" ? null : (
          <div>
            <p>Carpet Area</p>
            <p>{propertyData.carpetArea || "---"}</p>
          </div>
        )}
        {property_type === "land" ? null : (
          <div>
            <p>Furnishing</p>
            <p>{propertyData.furnishing || "---"}</p>
          </div>
        )}
      </div>
      {viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="view-button"
        >
          <span>Hide Details</span>
          <span>
            <MdKeyboardArrowUp style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}
      {!viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="view-button"
        >
          <span>View All Details</span>
          <span>
            <MdKeyboardArrowDown style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}

      {viewAllDetails && (
        <div className="info">
          {property_type === "land" ? (
            <>
              <div>
                <p>Length</p>
                <p>{propertyData.dimensionLength || "---"}</p>
              </div>
              <div>
                <p>Breadth</p>
                <p>{propertyData.dimensionBreadth || "---"}</p>
              </div>
            </>
          ) : (
            <>
              {property_type === "shop" ? null : (
                <>
                  <div>
                    <p>Bedrooms</p>
                    <p>{propertyData.bedroom || "---"}</p>
                  </div>
                  <div>
                    <p>Bathrooms</p>
                    <p>{propertyData.bathroom || "---"}</p>
                  </div>
                  <div>
                    <p>Total Floors</p>
                    <p>{propertyData.totalFloors || "---"}</p>
                  </div>
                  <div>
                    <p>Floor No</p>
                    <p>{propertyData.totalFloors || "---"}</p>
                  </div>
                  <div>
                    <p>Facing</p>
                    <p>{propertyData.facing || "---"}</p>
                  </div>
                  <div>
                    <p>Overlooking</p>
                    <p>{propertyData.overlooking || "---"}</p>
                  </div>
                  <div>
                    <p>Flooring Type</p>
                    <p>{propertyData.flooringType || "---"}</p>
                  </div>
                  <div>
                    <p>Total Balconies</p>
                    <p>{propertyData.totalBalconies || "---"}</p>
                  </div>
                  <div>
                    <p>Total Lifts</p>
                    <p>{propertyData.totalLifts || "---"}</p>
                  </div>
                  <div>
                    <p>Water Availability</p>
                    <p>{propertyData.waterAvailability || "---"}</p>
                  </div>
                </>
              )}
            </>
          )}
          {property_type === "land" ? (
            <div>
              <p>Possession Status</p>
              <p>Under Constrution</p>
            </div>
          ) : (
            <div>
              <p>Possession Status</p>
              <p>{propertyData.possessionStatus || "---"}</p>
            </div>
          )}

          <div>
            <p>Ownership Type </p>
            <p>{propertyData.typeOfOwnership || "---"}</p>
          </div>
        </div>
      )}
      <p className="description">
        <span>Description:</span> This Designer Builder floor apartment is
        beautifully designed and comes with high end and rich specifications.
      </p>
      {/* <button className="contact-button">Contact Agent</button> */}
    </section>
  );
};

export default MoreDetails;
