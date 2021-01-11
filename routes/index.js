var express = require('express');
const crypto = require('crypto');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  const text = req.rawBody;
  const key = 'abcdeg' // Secret key

  const digest = crypto.createHmac('sha1', key)
    .update(text)
    .digest('base64');
  const signature = req.headers["x-mms-signature"];
  console.debug(text);
  console.log(`Computed signature: ${digest}`);
  console.log(`Expected signature: ${signature}`);
  console.log(`Signature ${(digest == signature) ? "matches": "doesn't match"}`);
  res.send({ok: 1});
});

module.exports = router;
