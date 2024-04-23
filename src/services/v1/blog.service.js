const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { includeDateAndTime, excludeDates, getDateTimeAttr } = require('../../helpers/DBHelpers');

const {
  Blog, BlogUser, BlogComment,
} = require('../../models');

const create = async (data) => Blog.create(data);
const getAll = async (id) => {
  let whereClause = {};
  if (id) whereClause = { user_id: id };
  const blogs = await Blog.findAll({
    attributes: {
      exclude: excludeDates,
      include: getDateTimeAttr('blogs'),
    },
    include: [
      {
        model: BlogUser,
        as: 'user',
        attributes: ['id', 'name'],
      },
    ],
    where: { is_active: 1, ...whereClause },
    order: [['id', 'DESC']],
  });
  return blogs;
};

const getSingle = async (id) => {
  const blog = await Blog.findOne({
    attributes: {
      exclude: excludeDates,
      include: includeDateAndTime,
    },
    where: {
      id,
    },
  });

  if (!blog) throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  return blog;
};

const getImageName = (imgUrl) => imgUrl.substring(imgUrl.lastIndexOf('/') + 1);

const update = async (data, id) => {
  const {
    user_id, title, body,
  } = data;

  const { image: imageToUpdate } = data;
  const blog = await Blog.findOne({
    where: {
      id,
      user_id,
    },
  });
  if (!blog) throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');
  const existingImage = getImageName(blog.image);
  blog.title = title;
  blog.body = body;
  if (imageToUpdate) {
    blog.image = imageToUpdate;
  } else {
    blog.image = existingImage;
  }
  await blog.save();
  const updatedBlog = await Blog.findOne({
    where: {
      id,
      user_id,
    },
  });
  return updatedBlog;
};

const updateStatus = async (id, user_id) => {
  const blog = await Blog.findOne({
    where: {
      id,
      user_id,
    },
  });
  if (!blog) throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');

  blog.is_active = false;
  blog.image = getImageName(blog.image);
  await blog.save();
};

const BlogWithComments = async (id) => {
  const blog = await Blog.findOne({
    attributes: {
      exclude: excludeDates,
      include: getDateTimeAttr('blogs'),
    },
    include: [
      {
        model: BlogUser,
        as: 'user',
        attributes: ['id', 'name'],
      },
      {
        model: BlogComment,
        // attributes: ['id', 'comment'],
        attributes: {
          exclude: excludeDates,
          include: getDateTimeAttr('blog_comments'),
        },
        include: [
          {
            model: BlogUser,
            as: 'user',
            attributes: ['id', 'name'],
          },
        ],
      },
    ],
    where: {
      id,
      is_active: 1,
    },
  });
  if (!blog) throw new ApiError(httpStatus.NOT_FOUND, 'Blog not found');

  return blog;
};

const addComment = async (data) => BlogComment.create(data);

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  updateStatus,
  BlogWithComments,
  addComment,
};
