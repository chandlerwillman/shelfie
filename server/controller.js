module.exports = {
    getBins: (req,res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.get_bins([id]).then((response) => {
            res.status(200).send(response);
        }).catch((error) => {
            console.log('getBins:', error)
        });
    }
}