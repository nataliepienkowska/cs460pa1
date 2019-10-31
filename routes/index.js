const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to our assignment!' });
});

router.post('/', function (req, res, next) {
  console.log(req.body.command);
  res.send('Post page');
});

/*
module.exports = {
  getHomePage: (req, res) => {
    let query = "SELECT u.user id FROM Users u WHERE u.review_count >= 1";

    // execute query
    db.query(query, (err, result) => {
      if (err) {
        res.redirect('/');
      }
      res.render(WHAT WOULD WE RENDER HERE?
      });
    });
  },
};
*/
module.exports = router;
