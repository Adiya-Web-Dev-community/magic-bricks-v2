const loadingData = ["a", "b", "c"];

const LoadingTable = () => {
  return (
    <table className="w-max md:w-full rounded-md overflow-hidden">
      <tr className="bg-slate-100 h-10">
        <th className="pl-2.5">
          <div className="h-5 w-10 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
        <th className="pl-2.5">
          <div className="h-5 w-16 rounded-sm bg-slate-300 animate-pulse"></div>
        </th>
      </tr>
      {loadingData.map((i) => (
        <tr
          key={i}
          className="text-slate-500 h-8 text-sm border-b border-b-slate-200"
        >
          <td className="pl-2.5">
            <div className="h-5 w-5 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="pl-2.5">
            <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="pl-2.5">
            <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="pl-2.5">
            <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="pl-2.5">
            <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="pl-2.5">
            <div className="h-5 w-20 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
          <td className="flex items-center pl-2.5 pt-2 space-x-2.5">
            <div className="h-5 w-5 rounded-sm bg-slate-300 animate-pulse"></div>
            <div className="h-5 w-5 rounded-sm bg-slate-300 animate-pulse"></div>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default LoadingTable;
