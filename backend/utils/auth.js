import jwt from 'jsonwebtoken';

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

export async function authMiddleware(req, res, next) {
  // allows token to be sent via  req.query or headers
  let token = req.query.token || req.headers.authorization; // JWTtoken from inspmnia headers

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'You have no token!' });
  }

  // verify token and get user data out of it
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
    return res.status(400).json({ message: 'invalid token!' });
  }

  // send to next endpoint
  next();
}

export async function signToken({ name, email, _id }) {
  const payload = { name, email, _id };

  const newJwtSecret = jwt.sign({ data: payload }, secret, {
    expiresIn: expiration,
  });

  return newJwtSecret;
}
