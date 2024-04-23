const httpStatus = require('http-status');

const catchAsync = require('../../utils/catchAsync');

const { quoteService } = require('../../services/v1');

const add = catchAsync(async (req, res) => {
  const { body, user } = req;

  const { quote } = body;
  const user_id = user.id;
  const quoteData = {
    user_id,
    quote,
  };
  const addedQuote = await quoteService.create(quoteData);
  res.status(httpStatus.CREATED).send(addedQuote);
});

const getAll = catchAsync(async (req, res) => {
  let id;
  const { user } = req;
  if (user) id = user.id;
  const allQuotes = await quoteService.getAll(id);
  res.status(httpStatus.OK).send(allQuotes);
});

const getSingle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const quote = await quoteService.getSingle(id);
  res.status(httpStatus.OK).send(quote);
});

const update = catchAsync(async (req, res) => {
  const { body, user } = req;

  const { id } = req.params;

  const { quote } = body;
  const user_id = user.id;
  const quoteData = {
    user_id,
    quote,
  };
  const updatedQuote = await quoteService.update(quoteData, id);
  res.status(httpStatus.OK).send(updatedQuote);
});

const updateStatus = catchAsync(async (req, res) => {
  const { user } = req;
  const user_id = user.id;
  const { id } = req.params;
  await quoteService.updateStatus(id, user_id);
  res.status(httpStatus.OK).send({ message: 'Quote deleted successfully' });
});

const getBlogWithComments = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blogComments = await quoteService.BlogWithComments(id);
  res.status(httpStatus.OK).send(blogComments);
});

const extractUserAndQuoteID = (req) => {
  const { id: quote_id } = req.params;
  const { id: user_id } = req.user;
  return { user_id, quote_id };
};

const likeQuote = catchAsync(async (req, res) => {
  const body = extractUserAndQuoteID(req);
  await quoteService.like(body);
  res.status(httpStatus.OK).send({ message: 'Quote liked successfully', data: body });
});

const addFavourite = catchAsync(async (req, res) => {
  const body = extractUserAndQuoteID(req);
  await quoteService.addFavourite(body);
  res.status(httpStatus.OK).send({ message: 'Quote added to favourite list successfully', data: body });
});
const removeFavourite = catchAsync(async (req, res) => {
  const body = extractUserAndQuoteID(req);
  await quoteService.removeFavourite(body);
  res.status(httpStatus.OK).send({ message: 'Quote remove from favourite list successfully', data: body });
});

module.exports = {
  add,
  getAll,
  getSingle,
  update,
  updateStatus,
  getBlogWithComments,
  likeQuote,
  addFavourite,
  removeFavourite,
};
