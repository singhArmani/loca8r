let express = require('express');
let router = express.Router();
let ctrLocations = require('../controllers/locations')
let ctrOthers = require('../controllers/others');

/* Locations Pages */
router.get('/', ctrLocations.homeList);
router.get('/location',ctrLocations.locationInfo);
router.get('/location/review/new', ctrLocations.addReview);

/*Other Pages */
router.get('/about', ctrOthers.about);

module.exports = router;
