const express = require('express');

const validate = require('../../middlewares/validate');
const { quoteValidation } = require('../../validations');
const quoteController = require('../../controllers/v2/quote.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/add', [auth(), validate(quoteValidation.add)], quoteController.add);
router.get('/', quoteController.getAll);
router.get('/get/my', auth(), quoteController.getAll);
router.get('/:id', validate(quoteValidation.singlequote), quoteController.getSingle);
router.put('/:id', [auth(), validate(quoteValidation.add), validate(quoteValidation.singlequote)], quoteController.update);
router.delete('/:id', [auth(), validate(quoteValidation.quoteWithID)], quoteController.updateStatus);
router.post('/:id/like', [auth(), validate(quoteValidation.quoteWithID)], quoteController.likeQuote);
router.post('/:id/add-favourite', [auth(), validate(quoteValidation.quoteWithID)], quoteController.addFavourite);
router.post('/:id/remove-favourite', [auth(), validate(quoteValidation.quoteWithID)], quoteController.removeFavourite);

module.exports = router;
