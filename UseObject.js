const employee={
    empId: 101,
    empName: "John",
    empSalary: 50000,
    designation: "Software Engineer",
    techstack:[{
        plang: "JavaScript",
        server: "Node.js",
        database: "MongoDB"
        
    },
    {
    plang: "Python",
    server: "Django",
    database: "PostgreSQL"
    },
    {
        plang: "React",
        server: "Express.js",
        database: "MySQL"

    },
]
};
console.log(employee);
console.log(employee.empId);
console.log(employee.empName);
console.log(employee.empSalary);
console.log(employee.designation);
console.log(employee.techstack.database);
console.log(employee.techstack[0].plang);
console.log(employee.techstack[1].server);
console.log(employee.techstack[2].database);