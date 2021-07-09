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