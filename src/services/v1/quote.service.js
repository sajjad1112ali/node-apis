const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { includeDateAndTime, excludeDates, getDateTimeAttr } = require('../../helpers/DBHelpers');

const {
  Quote, User, LikeQuote, favouriteQuote,
} = require('../../models');

const create = async (data) => Quote.create(data);
const like = async (data) => LikeQuote.create(data);
const addFavourite = async (data) => favouriteQuote.create(data);
const removeFavourite = async (data) => {
  const { user_id, quote_id } = data;
  const quote = await favouriteQuote.findOne({
    where: {
      user_id,
      quote_id,
    },
  });

  if (!quote) throw new ApiError(httpStatus.NOT_FOUND, 'Quote not found in favourite list');
  await quote.destroy();
  return true;
};

const getAll = async (id) => {
  let whereClause = {};
  if (id) whereClause = { user_id: id };

  const results = await Quote.findAll({
    attributes: {
      exclude: excludeDates,
      include: getDateTimeAttr('quotes'),
    },
    include: [
      {
        model: User,
        attributes: ['id', 'name'],
      },
      {
        model: LikeQuote,
        attributes: ['id', 'user_id', 'quote_id'],
      },
      {
        model: favouriteQuote,
        attributes: ['id', 'user_id', 'quote_id'],
      },
    ],
    where: { is_active: 1, ...whereClause },
    order: [['id', 'DESC']],
  });
  const dataWithCount = results.map((elem) => {
    const currentItem = elem.get({ plain: true });
    const item = currentItem.like_quotes;
    const favouriteItem = currentItem.favourite_quotes;
    const likeCounts = item.length;
    const likeBy = item.map((u) => u.user_id);
    const favouriteBy = favouriteItem.map((u) => u.user_id);
    const favouriteCounts = favouriteBy.length;

    return {
      ...currentItem, likeCounts, likeBy, favouriteCounts, favouriteBy,
    };
  });
  return { quotes: dataWithCount };
};

const getSingle = async (id) => {
  const quote = await Quote.findOne({
    attributes: {
      exclude: excludeDates,
      include: includeDateAndTime,
    },
    where: {
      id,
    },
  });

  if (!quote) throw new ApiError(httpStatus.NOT_FOUND, 'Quote not found');
  return quote;
};

const update = async (data, id) => {
  const {
    user_id, quote,
  } = data;

  const quoteToUpdate = await Quote.findOne({
    where: {
      id,
      user_id,
    },
  });
  if (!quoteToUpdate) throw new ApiError(httpStatus.NOT_FOUND, 'Quote not found');
  quoteToUpdate.quote = quote;
  await quoteToUpdate.save();
  const updatedQuote = await Quote.findOne({
    where: {
      id,
      user_id,
    },
  });
  return updatedQuote;
};

const updateStatus = async (id, user_id) => {
  const deletedQuote = await Quote.findOne({
    where: {
      id,
      user_id,
    },
  });
  if (!deletedQuote) throw new ApiError(httpStatus.NOT_FOUND, 'Quote not found');

  deletedQuote.is_active = false;
  await deletedQuote.save();
};

module.exports = {
  create,
  getAll,
  getSingle,
  update,
  updateStatus,
  like,
  addFavourite,
  removeFavourite,
};
