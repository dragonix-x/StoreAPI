const express = require('express');
const { createRole, getRoles, getRole, updateRole, deleteRole } = require('../controllers/role');
const roleRouter = express.Router();

roleRouter.route('/')
	.post(createRole)
	.get(getRoles)
;
roleRouter.route('/:id')
	.get(getRole)
	.patch(updateRole)
	.delete(deleteRole)
;

module.exports = roleRouter;