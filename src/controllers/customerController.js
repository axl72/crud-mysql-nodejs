const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM customers', (err, customers)=>{
            if(err){
                res.json(err);
            }
            res.render('customers', {
                data: customers
            })
        })
    });
}

controller.add = (req, res) => {
    const data = req.body
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO customers set ?', [data], (err, customer) => {
            console.log('works')
            res.redirect('/')
        })
    })
}


controller.delete = (req, res) => {
    req.getConnection((err, conn) =>{
        const { id } = req.params
        conn.query('DELETE FROM customers WHERE id = ?', [id], (err, rows) => {
            res.redirect('/')
        })
    })
}

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customers WHERE id = ?', [id], (err, customer) =>{
            res.render('customers_edit', {data: customer[0]})
        })
    })
}

controller.update = (req, res) => {
    req.getConnection((err, conn) => {
        const {id} = req.params;
        newCustomer = req.body;
            conn.query('UPDATE customers SET ? WHERE id = ?', [newCustomer, id], (err, rows) => {
                res.redirect('/')
        })
    })
}

module.exports = controller