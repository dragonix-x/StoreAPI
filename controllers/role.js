const { StatusCodes } = require('http-status-codes');
const NotFound = require('../errors/NotFound');

const createRole = async(req, res) => {
	const role = await Role.create({...req.body});
	res.status(StatusCodes.CREATED).json({ role });
}

const getRoles = async (req, res) => {
	const roles = await Role.find({});
	res.status(StatusCodes.OK).json({ roles });
}

const getRole = async (req, res) => {
	const { id: roleID } = req.params;
	const role =  await Role.find({ _id: roleID });
	if(!role)
		throw new NotFound(`No role with id ${roleID}`);
	res.status(StatusCodes.OK).json({ role });
}

const updateRole = async (req, res) => {
	const { id: roleID } = req.params;
	const role =  await Role.findOneAndUpdate({ _id: roleID }, { ...req.body }, { runValidators: true, new: true });
	if(!role)
		throw new NotFound(`No role with id ${roleID}`);
	res.status(StatusCodes.OK).json({ role });
}

const deleteRole = async (req, res) => {
	const { id: roleID } = req.params;
	const role =  await Role.findOneAndDelete({ _id: roleID });
	if(!role)
		throw new NotFound(`No role with id ${roleID}`);
	res.status(StatusCodes.OK).json({  });
}


module.exports = { createRole, getRoles, getRole, updateRole, deleteRole };