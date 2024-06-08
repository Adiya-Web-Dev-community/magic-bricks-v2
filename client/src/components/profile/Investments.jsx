import { useEffect, useState } from "react";
import axios from "../../helper/axios";

import LoadingTable from "../LoadingTable";

const Investments = () => {
  const [DocsList, setDocsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const getData = async () => {
    await axios
      .get("/user-investments", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setIsLoading(true);
        // console.log("investments", res);
        setDocsList(res.data.list);
        setIsLoading(false);
      })
      .catch((error) => {
        // console.log(error);
        setDocsList([]);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="w-full overflow-x-scroll md:w-full md:overflow-x-auto">
      {isLoading ? (
        <LoadingTable />
      ) : DocsList.length ? (
        <table className="w-max md:w-full rounded-md overflow-hidden">
          <tr className="bg-slate-100 h-10">
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Sr.No.
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Property ID
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Property Type
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Buy Shares
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Total Investment
            </th>
          </tr>
          {DocsList.map((i, j) => (
            <tr
              key={i.uniqueId}
              className="text-slate-500 h-8 text-sm border-b border-b-slate-200"
            >
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {j + 1}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300 ">
                {i.propertyId}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.propertyType || "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.noOfShares || "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.totalAmount || "---"}
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <span className="text-slate-500">You do not have any investments.</span>
      )}
    </main>
  );
};

export default Investments;
