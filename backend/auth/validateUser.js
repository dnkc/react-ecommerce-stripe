// check that we have current user in request

function validateUser(req, res, next) {
  const user = req["currentUser"];
  if (!user) {
    return res.status(401).send();
  }
}

module.exports = validateUser;
