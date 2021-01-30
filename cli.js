#!/usr/bin/env node

"use strict";

const app = require("./package.json");
const boot = require("package-boot");
const cli = require("cli-boot");

cli(app, {
	new: (name) => {
		boot(name,
			app,
			`${__dirname}/skel`,
			{
				created: {
					at: Date.now(),
					with: app
				},
				scripts: {
					test: "node ./test.js"
				}
			});
	}
});
