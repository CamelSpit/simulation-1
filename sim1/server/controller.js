module.exports= {
    // sim1:74M
    getShelf: (req, res) => {
        const db = req.app.get('db');
        const shelfid = req.params.id;
        db.pullBins([shelfid]).then((bins)=>{
                // sim1:74L
                res.status(200).send(bins);
        })
    }

}