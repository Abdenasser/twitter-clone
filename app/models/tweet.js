'use strict';

const Nodal = require('nodal');
const User = require('app/models/user.js');

class Tweet extends Nodal.Model {}

Tweet.setDatabase(Nodal.require('db/main.js'));
Tweet.setSchema(Nodal.my.Schema.models.Tweet);

Tweet.joinsTo(user, {multiple: true});

Tweet.validates('body', 'must be at least 5 characters', v => v && v.length >= 5);

module.exports = Tweet;
