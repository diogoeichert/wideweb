"use strict";

const wideweb = require("wideweb");

wideweb.route({
	getRoot: (req, res) => {
		res.render("index.html");
	}
});
