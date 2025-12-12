// Legend : Displays the color key at the bottom. (Keterangan)
const MatrixLegend = () => (
  <div className="flex flex-wrap gap-4 mt-6 p-4 bg-gray-50 border rounded-lg text-sm text-gray-700">
    <div className="flex items-center">
      <span className="w-4 h-4 bg-green-600 rounded mr-2"></span> Potentially
      Ready
    </div>
    <div className="flex items-center">
      <span className="w-4 h-4 bg-yellow-300 rounded mr-2"></span> Ready with
      Development
    </div>
    <div className="flex items-center">
      <span className="w-4 h-4 bg-red-600 rounded mr-2"></span> Not Ready Yet
    </div>
    <div className="flex items-center">
      <span className="w-4 h-4 bg-white border-2 border-black rounded mr-2"></span>{" "}
      Focus Stream 1
    </div>
  </div>
);

export default MatrixLegend;
