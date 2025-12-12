import { STATUSES } from "data/successionData";

const EmployeeBadge = ({ employee }) => {
  const getBaseColors = (status) => {
    switch (status) {
      case STATUSES.READY:
        return "bg-green-600 text-white";
      case STATUSES.READY_DEV:
        return "bg-yellow-300 text-black";
      case STATUSES.NOT_READY:
        return "bg-red-600 text-white";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const getBorderStyles = (status, isFocusStream) => {
    if (isFocusStream) {
      // The "Stacking" logic: Thick Black Border
      return "border-3 border-black font-bold";
    }

    // Default borders (subtle to match background)
    switch (status) {
      case STATUSES.READY:
        return "border border-green-700";
      case STATUSES.READY_DEV:
        return "border border-yellow-400";
      case STATUSES.NOT_READY:
        return "border border-red-700";
      default:
        return "border border-gray-300";
    }
  };

  return (
    <div
      className={`
        px-2 py-1 text-xs rounded shadow-sm text-center truncate w-full
        ${getBaseColors(employee.status)}
        ${getBorderStyles(employee.status, employee.isFocusStream)}
      `}
      title={`${employee.name} ${employee.isFocusStream ? "(Focus Stream)" : ""}`}
    >
      {employee.name}
    </div>
  );
};

export default EmployeeBadge;
