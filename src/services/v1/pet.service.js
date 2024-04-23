const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');

const { APP } = require('../../config/config');
const { PETS } = require('../../config/constants');

const { excludeDates, includeDateAndTime, getDateTimeAttr } = require('../../helpers/DBHelpers');

const {
  Pet,
  PetImage,
  petBazzarUser,
  PetOffer,
  Breed,
} = require('../../models');

const setImageURL = (elem) => {
  const currentPet = elem.get({ plain: true });
  const petImages = currentPet.pet_images;
  currentPet.pet_images = petImages.map((pimg) => ({ ...pimg, image: `${APP.BASE_URL}/uploads/petsxx/${pimg.image}` }));
  return currentPet;
};

const getPetsByType = async (type, isHomePage = true) => {
  let limit = {};
  if (!isHomePage) limit = { limit: 2 };
  const whereClause = { species_id: PETS[type] };
  const results = await Pet.findAll({
    attributes: ['id', 'name', 'description', ...getDateTimeAttr('pets')],
    where: { is_active: 1, ...whereClause },
    order: [['id', 'DESC']],
    include: [
      {
        model: PetImage,
        attributes: ['id', 'image', 'is_main'],
        where: { is_main: 1 },
      },
    ],
    ...limit,
  });

  return results.map((elem) => setImageURL(elem));
};

const getPetsForHomePage = async () => {
  const [dogs, cats, birds] = await Promise.all([getPetsByType('dogs'), getPetsByType('cats'), getPetsByType('birds')]);
  return { dogs, cats, birds };
};

const getSingle = async (id) => {
  const pet = await Pet.findOne({
    attributes: {
      exclude: excludeDates,
      include: includeDateAndTime,
    },
    include: [
      {
        model: PetImage,
        attributes: ['id', 'image', 'is_main'],
      },
      {
        model: petBazzarUser,
        attributes: ['id', 'name', 'email'],
      },
      {
        model: Breed,
        attributes: ['id', 'name'],
      },
      {
        model: PetOffer,
        attributes: ['id', 'user_id', 'pet_id', 'amount', ...getDateTimeAttr('pet_offers')],
        include: [
          {
            model: petBazzarUser,
            attributes: ['id', 'name', 'email'],
          },
        ],
      },
    ],
    order: [[PetOffer, 'amount', 'DESC']],
    where: {
      id,
    },
  });

  if (!pet) throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  return setImageURL(pet);
};

const getById = async (id) => {
  const pet = await Pet.findOne({
    where: {
      id,
    },
    raw: true,
  });

  if (!pet) throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  return pet;
};

const createOffer = async (data) => PetOffer.create(data);

const getPetOffers = async (id) => {
  const pet = await PetOffer.findAll({
    attributes: ['id', 'user_id', 'pet_id', 'amount', ...getDateTimeAttr('pet_offers')],
    where: {
      pet_id: id,
    },
    include: [
      {
        model: petBazzarUser,
        attributes: ['id', 'name', 'email'],
      },
    ],
    order: [['amount', 'DESC']],
  });

  if (!pet) throw new ApiError(httpStatus.NOT_FOUND, 'Pet not found');
  return pet;
};
module.exports = {
  getPetsForHomePage,
  getPetsByType,
  getSingle,
  getById,
  createOffer,
  getPetOffers,
};
