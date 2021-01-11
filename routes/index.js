var express = require('express');
const crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const text = req.rawBody;
  const key = 'abcdeg' // Secret key

  const digest = crypto.createHmac('sha1', key)
    .update(text)
    .digest('hex')
    .toString("base64");
  const signature = req.headers["X-MMS-Signature"];
  console.log(`Computed signature: ${digest}`);
  console.log(`Expected Signature: ${signature}`);
  console.log(`Signature ${(digest == signature) ? "matches": "doesn't match"}`);
});

module.exports = router;
