const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    // console.log('req:', req);
    pool.query(`SELECT * FROM "item";`)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
});


/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
const shelfItem = req.body;
    console.log(shelfItem);

//   const password = encryptLib.encryptPassword(req.body.password);
  const queryText = 'INSERT INTO "item" (description, image_url, user_id) VALUES ($1, $2, $3)';
  pool
      .query(queryText, [shelfItem.tempItemDescription, shelfItem.tempItemImageUrl, shelfItem.tempItemUserId])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

router.delete('/:id', (req, res) => {
    const deleteId =req.params.id;
    console.log(deleteId);
    const queryText = `DELETE FROM "item" WHERE "id" =$1`;
    pool
        .query(queryText, [deleteId])
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
});




/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {

});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;