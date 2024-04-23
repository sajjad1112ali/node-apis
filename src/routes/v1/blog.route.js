const express = require('express');

const validate = require('../../middlewares/validate');
const { blogValidation } = require('../../validations');
const blogController = require('../../controllers/v2/blog.controller');
const auth = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');

const router = express.Router();

router.post('/add', [upload.single('image'), validate(blogValidation.add), auth()], blogController.add); // upload.array('image', 2)
router.get('/', blogController.getAll);
router.get('/get/my', auth(), blogController.getAll);
router.get('/:id', validate(blogValidation.singleBlog), blogController.getSingle);
router.put('/:id', [upload.single('image'), validate(blogValidation.add), validate(blogValidation.singleBlog), auth()], blogController.update);
router.delete('/:id', auth(), blogController.updateStatus);
router.get('/:id/comments', blogController.getBlogWithComments);
router.post('/comment', [auth(), validate(blogValidation.addComment)], blogController.addComment);

module.exports = router;
