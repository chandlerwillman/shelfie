module.exports = {
    getBins: (req,res) => {
        const db = req.app.get('db');

        db.get_bins().then((response) => {
            res.status(200).send(response);
        }).catch((error) => {
            console.log('getBins:', error)
        });
    }
}