const router = require('express').Router();

const notes = require('../../db/db.json');

router.get('/db', (req, res) => {
    let saved = notes;
    res.json(saved);
});

module.exports = router;