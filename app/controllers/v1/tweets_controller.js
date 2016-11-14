'use strict';

const Nodal = require('nodal');
const Tweet = Nodal.require('app/models/tweet.js');

const AuthController = Nodal.require('app/controllers/auth_controller.js');

class V1TweetsController extends AuthController {

  index() {

    Tweet.query()
      .join('user')
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models, ['id', 'body', 'created_at', {user: ['id', 'username', 'created_at']}]);

      });

  }

  show() {

    Tweet.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    this.authorize((err, accessToken, user) => {

      if(err) {
        return this.respond(err);
      }
      
      Tweet.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    });

  }

  update() {

    Tweet.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Tweet.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1TweetsController;
