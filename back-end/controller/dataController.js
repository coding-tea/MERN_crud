const data = require('../model/Data');

module.exports = {
    getAll : (req, res) => {
        data.find()
        .then(datas => {
            res.status(200).json({
                success : true,
                data : datas
            });
        })
        .catch(err => {
            res.json({
                success : false,
                message : err
            });
        })
    },

    create : (req, res) => {
        const new_data = new data(req.body);
        new_data.save()
        .then(() => {
            res.json({
                success : true,
                message : 'data is added'
            });
        })
        .catch(err => {
            res.json({
                success : false,
                message : err
            });
        });
    },

    show : (req, res) => {
        data.findById(req.params.id)
        .then(the_data => {
            res.status(200).json({
                success : true,
                data : the_data
            });
        })
        .catch(err => {
            res.json({
                success : false,
                message : err
            });
        });
    },

    edit : (req, res) => {
        
    },

    destroy : (req, res) => {
        data.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({
                success : true,
                message : 'data deleted successfuly'
            });
        })
        .catch(err => {
            res.json({
                success : false,
                message : err
            });
        });
    }
};