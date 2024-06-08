const ReservedSharesDataTable = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      {data.length ? (
        <table className="w-[98%] text-md text-left text-white mx-auto">
          <thead className="text-md uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
            <tr>
              <th scope="col" className="pl-9 py-3">
                Buyer Name
              </th>
              <th scope="col" className="py-3">
                Buyer Email
              </th>
              <th scope="col" className="py-3">
                Buyer Phn no
              </th>
              <th scope="col" className="py-3 ">
                Purchased Shares
              </th>
              <th scope="col" className=" py-3 text-center">
                Seller Id
              </th>
              <th scope="col" className=" py-3 text-center">
                Seller Name
              </th>
              <th scope="col" className=" py-3 text-center">
                Property Type
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((i, j) => (
              <tr
                key={i._id}
                className={`border-b border-gray-700 capitalize font-montserrat ${
                  j % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                }`}
              >
                <th
                  style={{ textTransform: "uppercase" }}
                  scope="row"
                  className={`text-sm pl-9 font-normal  ${
                    j % 2 === 0 ? "py-3" : "py-2.5"
                  }`}
                >
                  {`${i.firstName} ${i.lastName}` || "---"}
                </th>
                <td className={`text-sm ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.email || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.contact || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.noOfShares || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.sellerId || "---"}
                </td>
                <td
                  className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}
                >
                  {i.sellerName || "---"}
                </td>
                <td
                  className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}
                >
                  {i.propertyType || "---"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="flex justify-center items-center h-[100vh]">
          <p className=" text-6xl text-gray-700">No Data Listed </p>
        </div>
      )}
    </main>
  );
};

export default ReservedSharesDataTable;
