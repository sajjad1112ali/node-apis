const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');

const catchAsync = require('../../utils/catchAsync');

const { blogService } = require('../../services/v1');

const add = catchAsync(async (req, res) => {
  const { body, user, file } = req;
  if (!file) throw new ApiError(httpStatus.BAD_REQUEST, 'Image is required');

  const { filename } = file;
  const { title, content } = body;
  const user_id = user.id;
  const blogData = {
    user_id,
    title,
    body: content,
    image: filename,
  };
  const blog = await blogService.create(blogData);
  res.status(httpStatus.CREATED).send(blog);
});

const getAll = catchAsync(async (req, res) => {
  let id;
  const { user } = req;
  if (user) id = user.id;
  const blogs = await blogService.getAll(id);
  res.status(httpStatus.OK).send(blogs);
});

const getSingle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blog = await blogService.getSingle(id);
  res.status(httpStatus.OK).send(blog);
});

const update = catchAsync(async (req, res) => {
  const { body, user, file } = req;
  let filename;

  if (file) ({ filename } = file);

  const { id } = req.params;

  const { title, content } = body;
  const user_id = user.id;
  const blogData = {
    user_id,
    title,
    body: content,
    image: filename,
  };
  const blog = await blogService.update(blogData, id);
  res.status(httpStatus.OK).send(blog);
});

const updateStatus = catchAsync(async (req, res) => {
  const { user } = req;
  const user_id = user.id;
  const { id } = req.params;
  await blogService.updateStatus(id, user_id);
  res.status(httpStatus.OK).send({ message: 'Blog deleted successfully' });
});

const getBlogWithComments = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blogComments = await blogService.BlogWithComments(id);
  res.status(httpStatus.OK).send(blogComments);
});

const addComment = catchAsync(async (req, res) => {
  const { body } = req;
  const { id: user_id } = req.user;
  body.user_id = user_id;
  await blogService.addComment(body);
  res.status(httpStatus.OK).send({ message: 'Comment saved successfully' });
});

module.exports = {
  add,
  getAll,
  getSingle,
  update,
  updateStatus,
  getBlogWithComments,
  addComment,
};
