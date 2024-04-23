const express = require('express');
const auth = require('../../middlewares/auth');

const validate = require('../../middlewares/validate');
const { petsValidation } = require('../../validations');
const petController = require('../../controllers/v2/pet.controller');

const router = express.Router();

router.get('/', petController.getAll);
router.get('/type/:type', validate(petsValidation.petTypes), petController.getByType);
router.get('/:id', validate(petsValidation.petID), petController.getSingle);
router.post('/:id/offer', [auth(), validate(petsValidation.petID), validate(petsValidation.petOffer)], petController.offer);
router.get('/:id/offers', validate(petsValidation.petID), petController.getPetOffers);
module.exports = router;
