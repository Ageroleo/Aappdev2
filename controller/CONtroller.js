module.exports = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    contact: (req, res) => {
        res.render('contact');
    },
    gallery: (req, res) => {
        res.render('gallery');
    },
    shop: (req, res) => {
        res.render('shop');
    }
};