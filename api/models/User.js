const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide name"],
		},
		username: {
			type: String,
			required: [true, "Please provide username"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
		},
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
	return jwt.sign(
		{ userId: this._id, name: this.name },
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_LIFETIME,
		}
	);
};

UserSchema.methods.comparePassword = async function (canditatePassword) {
	const isMatch = await bcrypt.compare(canditatePassword, this.password);
	return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
