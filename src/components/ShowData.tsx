// export const ShowData = ({data} : {data: object}) => {
//   console.log('from showData', data);
//   return (
//     <div className="border w-3/4 flex flex-col rounded-lg bg-slate-500">
//       <h1 className="mt-3 ml-3 text-xl font-semibold">Data</h1>
//       <div className="w-11/12 border mt-3 mb-3 ml-3 rounded-lg bg-slate-600">
//         <p className=" p-3">
//           {`${JSON.stringify(data?.config, null, 2)}`}
//         </p>
//       </div>
//     </div>
//   );
// };

export const ShowData = ({
  data,
  items,
}: {
  data: object | string;
  items: string;
}) => {
  const jsonData = JSON.stringify(data, null, 2);
  return (
    <div className="border w-3/4  mt-3 flex flex-col rounded-lg bg-slate-500">
      <h1 className="mt-3 ml-3 text-xl font-semibold">{items}</h1>
      <div className="w-[98%] border mt-3 mb-3 ml-3 rounded-lg bg-slate-600">
        <pre
          style={{
            whiteSpace: "break-spaces", // Preserve newlines and spaces
            fontFamily: "monospace", // Use a monospaced font for consistent spacing
            padding: "1rem", // Add some padding for better readability
            backgroundColor: "#587289", // Set a background color
            borderRadius: "5px", // Add rounded corners
            margin: "1em",
            color: "#ffffff",
          }}
        >
          {jsonData}
        </pre>
      </div>
    </div>
  );
};
