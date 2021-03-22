// retrieves a list of payment methods for a given customer

const stripeAPI = require("../stripe");
const getCustomer = require("../helpers/getCustomer");

async function getCards(req, res) {
  const { currentUser } = req;
  const customer = await getCustomer(currentUser.uid);

  let cards;
  try {
    cards = await stripeAPI.paymentMethods.list({
      customer: customer.id,
      type: "card",
    });
    res.status(200).json(cards.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "There was an error, unable to get cards" });
  }
}

module.exports = getCards;
