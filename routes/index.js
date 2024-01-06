var express = require('express');
const ensureLoggedIn = require('../auth');
const path = require('path');
var router = express.Router();

router.use(ensureLoggedIn('/app/auth'))
router.use("/", express.static(path.join(__dirname, '../build')))

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,"../build/index.html"))
})

module.exports = router;
