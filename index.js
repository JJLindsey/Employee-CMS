function roles() {
    let sql = `SELECT * FROM roles ORDER BY id`;
    // Get Data - Query DB
    dbData.query(sql, (err, result) => {
        if (err) throw err;
        // Display Data
        console.table(result)
        //add a 4 loop or for each to get through all the info, read more about the queries on Mysql
        for (let i = 0; i < roles.length; i++) {
            result.forEach(row => {
                console.table(row)
            }).then(userPrompt())
        }
    })
}

//functionalize all options
//view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

//WHEN I choose to view all departments
//presented with a formatted table showing department names and department ids
const init = () => {
    inquirer.prompt([
        {   
            type: 'list',
            name: 'viewAll',
            message: 'What would you like to do?',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
        }
    ]).then((answer) =>{
        console.log(answer.viewAll)

        if(answer.viewAll == 'View all Departments') {
            //call department function
            getDeptData();
        } else if (answer.viewAll == 'View all Roles') {
            
        }
    })
}


//select

//insert

//update
