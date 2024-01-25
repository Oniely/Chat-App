const User = require("../models/User");
const { BadRequestError, UnauthenticatedError } = require("../errors/");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
	const { username, password } = req.body;

	if (!username || !password) {
		throw new BadRequestError("Please provide email and password");
	}

	const user = await User.findOne({ username: username });
	if (!user) {
		throw new UnauthenticatedError("Invalid Credentials");
	}

	const passOk = await user.comparePassword(password);
	if (!passOk) {
		throw new UnauthenticatedError("Invalid Credentials");
	}
	const token = await user.createJWT();
	res.status(StatusCodes.OK).json({
		user: { id: user._id, name: user.name },
		token,
	});
};

const register = async (req, res) => {
	const { name, username, password } = req.body;

	const user = await User.create({ name, username, password });
	const token = await user.createJWT();
	res.status(StatusCodes.CREATED).json({
		user: { id: user._id, name: user.name },
		token,
	});
};

module.exports = {
	login,
	register,
};
