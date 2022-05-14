const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// router.get('/', (req, res) => {
//   // Add query to get all genres
  
//   res.sendStatus(500)
// });



router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM genres WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then((result) => { res.send(result.rows); })
    console.log(result)
    .catch((err) => {
      console.log('Error in GET/Genres', err);
      res.sendStatus(500);
    });
});

module.exports = router;