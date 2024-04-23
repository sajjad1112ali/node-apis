const httpStatus = require('http-status');

const catchAsync = require('../../utils/catchAsync');

const { petService } = require('../../services/v1');

const getAll = catchAsync(async (req, res) => {
  const allQuotes = await petService.getPetsForHomePage();
  res.status(httpStatus.OK).send(allQuotes);
});

const getByType = catchAsync(async (req, res) => {
  const { type } = req.params;
  const allQuotes = await petService.getPetsByType(type);
  res.status(httpStatus.OK).send(allQuotes);
});

const getSingle = catchAsync(async (req, res) => {
  const { id } = req.params;
  const pet = await petService.getSingle(id);
  res.status(httpStatus.OK).send(pet);
});
const offer = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const { id } = req.params;
  const { amount } = req.body;
  const pet = await petService.getById(id);
  if (!pet.is_active) return res.status(httpStatus.OK).send({ message: 'Pet sold', pet });
  await petService.createOffer({ pet_id: id, user_id: userId, amount });
  const petOffers = await petService.getPetOffers(id);
  res.status(httpStatus.OK).send({ message: 'Offer saved successfully', petOffers });
});
const getPetOffers = catchAsync(async (req, res) => {
  const { id } = req.params;
  const pet = await petService.getById(id);
  if (!pet.is_active) return res.status(httpStatus.OK).send({ message: 'Pet sold', pet });
  const petOffers = await petService.getPetOffers(id);
  res.status(httpStatus.OK).send({ message: 'Offer fetched successfully', petOffers });
});

module.exports = {
  getAll,
  getByType,
  getSingle,
  offer,
  getPetOffers,
};
