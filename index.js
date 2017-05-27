#!/usr/bin/env node

var path = require("path");

var program = require("commander");
var term = require("terminal-kit").terminal;
var GetStringColors = require("get-string-colors");

require("dotenv-safe").load({
    path: path.join(__dirname, ".env"),
    sample: path.join(__dirname, ".env.example")
});
var query = null;

program
    .version("0.0.1")
    .arguments("<query>")
    .action(function(query_string) {
        query = query_string;
    })
    .parse(process.argv);

term.dim.italic("Searching...\n");
var getStringColors = GetStringColors(process.env.GOOGLE_CSE_ID, process.env.GOOGLE_API_KEY);
getStringColors(query).then(colors => {
    var primeColor = colors[0];
    term.bold.colorRgb(...primeColor.rgb(), `${query}: ${primeColor.hex()}\n`);
});

