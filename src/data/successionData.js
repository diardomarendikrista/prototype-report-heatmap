// data.js

// Departments (Columns)
export const DEPARTMENTS = [
  { id: "ceo", name: "CEO" },
  { id: "commerce", name: "Commerce" },
  { id: "mkt_brand", name: "Marketing & Branding" },
  { id: "biz_dev", name: "Business Development" },
  { id: "prod_ops", name: "Production Operation" },
  { id: "non_prod_ops", name: "Non-Production Operation" },
  { id: "finance", name: "Finance" },
  { id: "corp_plan", name: "Corporate Planning" },
  { id: "gov_comp", name: "Governance, Compliance & Internal Control" },
  { id: "corp_svcs", name: "Corporate Services" },
  { id: "it_digital", name: "IT & Digital" },
];

// Levels (Rows)
export const LEVELS = [
  { id: "strategic", name: "Strategic Leaders" },
  { id: "senior_ops", name: "Senior Operational Leaders" },
];

// Status Definitions for Color Coding
export const STATUSES = {
  READY: "READY",
  READY_DEV: "READY_DEV",
  NOT_READY: "NOT_READY",
};

// Helper to generate mock employees
const generateEmployees = () => {
  const employees = [];
  const names = [
    "Eko S",
    "Irma G",
    "Dody D",
    "Denny T",
    "Ifan M",
    "Michael R",
    "Wan M I",
    "Suwardi",
    "Tjahyo S",
    "Christian J",
    "Yuni P",
    "Sony S",
    "Widayanto",
    "Brian M",
    "Riana B",
    "Sisca I",
    "Timotius",
    "Martin R",
    "Supariyo",
    "Sarwo A",
    "Bernadus",
    "Roy Isa",
    "I Wayan S",
    "TEST",
    "Eko S",
    "Irma G",
    "Dody D",
    "Denny T",
    "Ifan M",
    "Michael R",
    "Wan M I",
    "Suwardi",
    "Tjahyo S",
    "Christian J",
    "Yuni P",
    "Sony S",
    "Widayanto",
    "Brian M",
    "Riana B",
    "Sisca I",
    "Timotius",
    "Martin R",
    "Supariyo",
    "Sarwo A",
    "Bernadus",
    "Roy Isa",
    "I Wayan S",
    "Eko S",
    "Irma G",
    "Dody D",
    "Denny T",
    "Ifan M",
    "Michael R",
    "Wan M I",
    "Suwardi",
    "Tjahyo S",
    "Christian J",
    "Yuni P",
    "Sony S",
    "Widayanto",
    "Brian M",
    "Riana B",
    "Sisca I",
    "Timotius",
    "Martin R",
    "Supariyo",
    "Sarwo A",
    "Bernadus",
    "Roy Isa",
    "I Wayan S",
    "Eko S",
    "Irma G",
    "Dody D",
    "Denny T",
    "Ifan M",
    "Michael R",
    "Wan M I",
    "Suwardi",
    "Tjahyo S",
    "Christian J",
    "Yuni P",
    "Sony S",
    "Widayanto",
    "Brian M",
    "Riana B",
    "Sisca I",
    "Timotius",
    "Martin R",
    "Supariyo",
    "Sarwo A",
    "Bernadus",
    "Roy Isa",
    "I Wayan S",
    "Eko S",
    "Irma G",
    "Dody D",
    "Denny T",
    "Ifan M",
    "Michael R",
    "Wan M I",
    "Suwardi",
    "Tjahyo S",
    "Christian J",
    "Yuni P",
    "Sony S",
    "Widayanto",
    "Brian M",
    "Riana B",
    "Sisca I",
    "Timotius",
    "Martin R",
    "Supariyo",
    "Sarwo A",
    "Bernadus",
    "Roy Isa",
    "I Wayan S",
  ];

  // Randomly distribute names across dept/levels
  names.forEach((name, index) => {
    // Create multiple entries per name to fill the grid like the image
    for (let i = 0; i < 3; i++) {
      employees.push({
        id: `${index}-${i}`,
        name: name,
        departmentId:
          DEPARTMENTS[Math.floor(Math.random() * DEPARTMENTS.length)].id,
        levelId: LEVELS[Math.floor(Math.random() * LEVELS.length)].id,
        status:
          Object.values(STATUSES)[
            Math.floor(Math.random() * Object.values(STATUSES).length)
          ],
        isFocusStream: Math.random() > 0.8,
      });
    }
  });
  return employees;
};

export const MOCK_EMPLOYEES = generateEmployees();
