import { useEffect, useState } from "react";
import axios from "../../helper/axios";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { toast } from "react-hot-toast";
import LoadingTable from "../LoadingTable";

const Listings = () => {
  const [DocsList, setDocsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = localStorage.getItem("token");
  const getData = async () => {
    await axios
      .get("/get-data", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setIsLoading(true);
        // console.log(res);
        setDocsList(res.data.DocsList);
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

  // handle delete
  const handleDelete = async (id) => {
    console.log(id);
    try {
      toast.loading("Deleting...");
      const resp = await axios.delete(`/delete/${id}`);
      console.log("resp=>", resp);
      getData();
      toast.dismiss();
      toast.success("Deleted successfully");
    } catch (err) {
      console.log(err);
    }
  };

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
              Unique Property ID
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Property Type
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Total Shares
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Availabe Shares
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Price/Share
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2 border-r-[1px] border-r-gray-300">
              Approval
            </th>
            <th className="text-start font-extralight font-serif text-slate-700  pl-2.5 px-2">
              Actions
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
                {i.uniqueId}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.propertyType || "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.totalShares || "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.availableShares || "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.perSharePrice ? `₹${i.perSharePrice}` : "---"}
              </td>
              <td className="pl-2.5 px-2 border-r-[1px] border-r-gray-300">
                {i.isVerified === false ? (
                  <p className="text-red-500">Pending</p>
                ) : (
                  <p className="text-green-500">Confirmed</p>
                )}
              </td>
              <td className="flex items-center pl-2.5 px-2 pt-2 space-x-2.5">
                <BsPencilSquare className="text-blue-500 text-lg cursor-pointer" />
                <BsTrash
                  className="text-red-500 text-lg cursor-pointer"
                  onClick={() => handleDelete(i._id)}
                />
              </td>
            </tr>
          ))}
        </table>
      ) : (
        <span className="text-slate-500">
          Data not found. Post property to render data here.
        </span>
      )}
    </main>
  );
};

export default Listings;

// uniqueid, property type,  total share, available share, per share price
