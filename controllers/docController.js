const mongoose = require('mongoose');
const Doc = mongoose.model('Doc');

exports.addDoc = (req, res) => {
    res.render('editDoc', { title: 'Add Doc' });
}

exports.createDoc = async (req, res) => {
    const doc = await (new Doc(req.body)).save();
    req.flash('success', `Successfully saved ${doc.name}.`);
    res.redirect(`/doc/${doc.slug}`);
}