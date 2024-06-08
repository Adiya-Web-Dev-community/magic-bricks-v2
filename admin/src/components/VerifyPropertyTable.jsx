import { Link } from "react-router-dom";

const Table = ({ data }) => {
  return (
    <main className="absolute w-full h-full shadow-md font-sans">
      {data.length ? (
        <table className="w-[98%] text-md text-left text-white mx-auto">
          <thead className="text-md uppercase bg-gray-700 text-gray-400 sticky top-0 font-serif">
            <tr>
              <th scope="col" className="pl-9 py-3">
                Unique Id
              </th>
              <th scope="col" className="py-3">
                Posted On
              </th>
              <th scope="col" className="py-3">
                Seller Type
              </th>
              <th scope="col" className="py-3">
                Seller Name
              </th>
              <th scope="col" className="py-3 ">
                Property Type
              </th>
              <th scope="col" className=" py-3 text-center">
                Action
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
                  className={`text-md pl-9 font-normal ${
                    j % 2 === 0 ? "py-3" : "py-2.5"
                  }`}
                >
                  {i.uniqueId || "---"}
                </th>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.postedOn || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.sellerType || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.sellerName || "---"}
                </td>
                <td className={`text-md ${j % 2 === 0 ? "py-3" : "py-2.5"}`}>
                  {i.propertyType || "---"}
                </td>
                <td
                  className={`text-center ${j % 2 === 0 ? "py-3" : "py-2.5"}`}
                >
                  <Link
                    to={`/home/view/${i._id}`}
                    className="font-medium text-blue-500 hover:underline"
                  >
                    View
                  </Link>
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

export default Table;
