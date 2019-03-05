module.exports = {
    getAll: (req,res) => {
        req.app.get('db').get_inventory().then((products) => {
            res.status(200).send(products);
        }).catch((error) => {
            res.status(500).send('Failed to get products');
        });
    },

    create: (req,res) => {
        let { name, price, img } = req.body;
        req.app.get('db').create_product([name, price, img]).then((dbResponse) => {
            res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('Failed to create');
        });
    }
}