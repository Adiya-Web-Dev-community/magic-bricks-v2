import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

// import "./MoreDetails.css";

const MoreDetails = ({ data }) => {
  const [viewAllDetails, setViewAllDetails] = useState(false);

  return (
    <section className="bg-slate-100 rounded-lg p-5 text-sm">
      <div className="space-y-2.5">
        <div className="relative flex">
          <p>Name</p>
          <p className="absolute left-52">{data.apartmentName || "---"}</p>
        </div>
        <div className="relative flex">
          <p>Super Area</p>
          {data.propertyType === "land" || data.propertyType === "agri-land" ? (
            <p className="absolute left-52">{data.plotSize || "---"}</p>
          ) : (
            <p className="absolute left-52">{data.area || "---"}</p>
          )}
        </div>
        {data.propertyType === "land" ||
        data.propertyType === "agri-land" ? null : (
          <div className="relative flex">
            <p>Carpet Area</p>
            <p className="absolute left-52">{data.carpetArea || "---"}</p>
          </div>
        )}

        {data.propertyType === "land" ||
        data.propertyType === "agri-land" ? null : (
          <div className="relative flex">
            <p>Furnishing</p>
            <p className="absolute left-52">{data.furnishing || "---"}</p>
          </div>
        )}
      </div>
      {viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="flex items-center text-blue-500 my-2.5 font-medium"
        >
          <span className="cursor-pointer">Hide details</span>
          <span>
            <MdKeyboardArrowUp style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}
      {!viewAllDetails && (
        <p
          onClick={() => setViewAllDetails(!viewAllDetails)}
          className="flex items-center text-blue-500 my-2.5 font-medium"
        >
          <span className="cursor-pointer">View all details</span>
          <span>
            <MdKeyboardArrowDown style={{ fontSize: "larger" }} />
          </span>
        </p>
      )}
      {viewAllDetails && (
        <div>
          {data.propertyType === "land" || data.propertyType === "agri-land" ? (
            <div className="space-y-2.5">
              <div className="relative flex">
                <p>Length</p>
                <p className="absolute left-52">
                  {data.dimensionLength || "---"}
                </p>
              </div>
              <div className="relative flex">
                <p>Breadth</p>
                <p className="absolute left-52">
                  {data.dimensionBreadth || "---"}
                </p>
              </div>
              <div className="relative flex">
                <p>Soil Texture</p>
                <p className="absolute left-52">{data.soilTexture || "---"}</p>
              </div>
              <div className="relative flex">
                <p>Soil PH value</p>
                <p className="absolute left-52">{data.soilPHValue || "---"}</p>
              </div>
              <div className="relative flex">
                <p>Soil Organic Matter Content</p>
                <p className="absolute left-52">
                  {data.organicMatterContent || "---"}
                </p>
              </div>
            </div>
          ) : (
            <>
              {data.propertyType === "shop" ? null : (
                <div className="space-y-2.5">
                  <div className="relative flex">
                    <p>Bedrooms</p>
                    <p className="absolute left-52">{data.bedroom || "---"}</p>
                  </div>
                  <div className="relative flex">
                    <p>Bathrooms</p>
                    <p className="absolute left-52">{data.bathroom || "---"}</p>
                  </div>
                  <div className="relative flex">
                    <p>Total Floors</p>
                    <p className="absolute left-52">
                      {data.totalFloors || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Floor No</p>
                    <p className="absolute left-52">
                      {data.totalFloors || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Facing</p>
                    <p className="absolute left-52">{data.facing || "---"}</p>
                  </div>
                  <div className="relative flex">
                    <p>Overlooking</p>
                    <p className="absolute left-52">
                      {data.overlooking || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Flooring Type</p>
                    <p className="absolute left-52">
                      {data.flooringType || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Total Balconies</p>
                    <p className="absolute left-52">
                      {data.totalBalconies || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Total Lifts</p>
                    <p className="absolute left-52">
                      {data.totalLifts || "---"}
                    </p>
                  </div>
                  <div className="relative flex">
                    <p>Water Availability</p>
                    <p className="absolute left-52">
                      {data.waterAvailability || "---"}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
          {data.propertyType === "land" || data.propertyType === "agri-land" ? (
            <div className="relative flex my-2.5">
              <p>Possession Status</p>
              <p className="absolute left-52">Under Constrution</p>
            </div>
          ) : (
            <div className="relative flex my-2.5">
              <p>Possession Status</p>
              <p className="absolute left-52">
                {data.possessionStatus || "---"}
              </p>
            </div>
          )}

          <div className="relative flex my-2.5">
            <p>Ownership Type </p>
            <p className="absolute left-52">{data.typeOfOwnership || "---"}</p>
          </div>
        </div>
      )}
      <p>
        <span className="text-slate-900 font-medium">Description:</span> This
        Designer Builder floor apartment is beautifully designed and comes with
        high end and rich specifications.
      </p>
      {/* <button className="contact-button">Contact Agent</button> */}
    </section>
  );
};

export default MoreDetails;
