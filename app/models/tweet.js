'use strict';

const Nodal = require('nodal');

class Tweet extends Nodal.Model {}

Tweet.setDatabase(Nodal.require('db/main.js'));
Tweet.setSchema(Nodal.my.Schema.models.Tweet);

module.exports = Tweet;
