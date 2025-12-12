import React from "react";
import {
  DEPARTMENTS,
  LEVELS,
  MOCK_EMPLOYEES,
  STATUSES,
} from "data/successionData";
import EmployeeBadge from "./EmployeeBadge";
import MatrixLegend from "./MatrixLegend";
import { cn } from "lib/utils";

const SuccessionMatrixV1 = ({
  departments = DEPARTMENTS,
  levels = LEVELS,
  employees = MOCK_EMPLOYEES,
}) => {
  const STATUS_PRIORITY = {
    [STATUSES.READY]: 1, // Green (Top)
    [STATUSES.READY_DEV]: 2, // Yellow (Middle)
    [STATUSES.NOT_READY]: 3, // Red (Bottom)
  };

  // Find employees for a specific cell intersection
  const getEmployeesForCell = (deptId, levelId) => {
    // Data
    const filteredList = employees.filter(
      (e) => e.departmentId === deptId && e.levelId === levelId
    );

    // Sort by STATUS_PRIORITY (Hijau -> Kuning -> Merah)
    return filteredList.sort((a, b) => {
      const priorityA = STATUS_PRIORITY[a.status] || 99; // Default to 99 if unknown
      const priorityB = STATUS_PRIORITY[b.status] || 99;

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return a.name.localeCompare(b.name);
    });
  };

  return (
    <div
      className={cn(
        "w-full flex flex-col h-screen max-h-[900px]",
        "bg-white shadow-xl rounded-xl p-6 border border-gray-200"
      )}
    >
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Talent Readiness Heatmap
        </h2>
        <div className="text-sm text-gray-500 italic">
          Succession Planning 2024
        </div>
      </div>

      {/* Grid Container - Scrollable */}
      <div className="flex-1 overflow-auto border border-gray-300 rounded-lg relative">
        <div className="min-w-max">
          {/* Body Rows (Levels) */}
          {levels.map((level, rowIndex) => (
            <div
              key={level.id}
              className={`flex`}
            >
              {/* Row Label (Sticky Left) */}
              <div
                className={cn(
                  "w-48 sticky left-0 z-10 flex items-center justify-center text-center ",
                  "bg-white p-4 font-bold text-gray-600 shadow-[4px_0_5px_-2px_rgba(0,0,0,0.1)] border-r-4 border-black-200"
                )}
              >
                {level.name}
              </div>

              {departments.map((dept, colIndex) => {
                const cellEmployees = getEmployeesForCell(dept.id, level.id);

                return (
                  <div
                    key={`${level.id}-${dept.id}`}
                    className={cn(
                      "w-48 p-1 bg-white transition-colors hover:bg-gray-50 flex flex-col gap-1",
                      "h-[280px] overflow-y-auto",
                      "*:shrink-0",
                      // STYLE SCROLLBAR
                      "[&::-webkit-scrollbar]:w-1.5",
                      "[&::-webkit-scrollbar-track]:bg-transparent",
                      "[&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400",
                      // "min-h-[180px]",
                      {
                        "border-r-3 border-dashed border-gray-200":
                          colIndex !== departments.length - 1,
                        "border-b-3 border-gray-200":
                          rowIndex !== levels.length - 1,
                      }
                    )}
                  >
                    {cellEmployees.length > 0 ? (
                      cellEmployees.map((emp, i) => (
                        <EmployeeBadge
                          key={`${emp.id}-${i}`}
                          employee={emp}
                        />
                      ))
                    ) : (
                      <div className="min-h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-xs text-gray-300 font-light text-center border border-dashed border-gray-200 p-2 rounded">
                          Empty Slot
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Header Row (Departments) */}
          <div
            className={cn(
              "flex sticky bottom-0 z-20"
              // "shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"
            )}
          >
            <div className="w-48 sticky left-0 z-30 bg-white"></div>
            {/* Department Columns Headers */}
            {departments.map((dept, index) => (
              <div
                key={dept.id}
                className={cn(
                  "w-48 p-3 flex items-start justify-center",
                  "text-sm font-bold text-center text-gray-700",
                  "border-t-4 bg-white"
                )}
              >
                {dept.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <MatrixLegend />
    </div>
  );
};

export default SuccessionMatrixV1;
