const Details = ({ data }) => {
  return (
    <>
      <section>
        <div className="villa-details-table">
          <section>
            <p>Seller</p>
            <p className="villa-details-table-value">
              {data.sellerName || "---"}
            </p>
          </section>
          <div className="villa-details-table-dummy-border"></div>
          <section>
            <p>Seller Type</p>
            <p className="villa-details-table-value">
              {data.sellerType || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Posted On</p>
            <p className="villa-details-table-value">
              {data.postedOn ? `${data.postedOn} sqft` : "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Total Shares</p>
            <p className="villa-details-table-value">
              {data.totalShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Available Shares</p>
            <p className="villa-details-table-value">
              {data.availableShares || "---"}
            </p>
          </section>
          <p className="villa-details-table-dummy-border"></p>
          <section>
            <p>Price Per Share</p>
            <p className="villa-details-table-value">
              {data.perSharePrice || "---"}
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Details;
