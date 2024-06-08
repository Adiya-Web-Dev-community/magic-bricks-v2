import { FaUserClock } from "react-icons/fa";

const SiteVisitTable = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      {data.length ? (
        <table className="w-[98%] text-md text-left text-white mx-auto">
          <thead className="text-md uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
            <tr>
              <th scope="col" className="pl-9 py-3">
                Visit Status
              </th>
              <th scope="col" className="py-3">
                Visit Date
              </th>
              <th scope="col" className="py-3">
                Visit Time
              </th>
              <th scope="col" className="py-3">
                Visitor Name
              </th>
              <th scope="col" className="py-3">
                Visitor Phn No
              </th>
              <th scope="col" className="py-3">
                Property Type
              </th>
              <th scope="col" className="py-3">
                Seller Name
              </th>
              <th scope="col" className="py-3 text-center">
                Seller Phn no
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
                  scope="row"
                  className={`text-md pl-9 font-normal  ${
                    j % 2 === 0 ? "py-3" : "py-2.5"
                  }`}
                >
                  {i.siteVisitStatus === "pending" ? (
                    <p style={{ display: "flex" }}>
                      <span>
                        <FaUserClock style={{ color: "orangered" }} />
                      </span>
                      <span style={{ marginLeft: ".5rem" }}>Pending...</span>
                    </p>
                  ) : null}
                  {/* {i.siteVisitStatus || "---"} */}
                </th>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.date || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.time || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.name || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.contact || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.propertyType || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.sellerName || "---"}
                </td>
                <td
                  className={`text-md text-center ${
                    j % 2 === 0 ? "py-3" : "py-2.5"
                  }`}
                >
                  {i.sellercontact || "---"}
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

export default SiteVisitTable;
