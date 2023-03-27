const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const relations = {
  User: [
    { model: Comment, foreignKey: 'user_id', onDelete: 'CASCADE' },
    { model: Post, foreignKey: 'user_id', onDelete: 'CASCADE' }
  ],
  Post: [
    { model: Comment, foreignKey: 'post_id', onDelete: 'CASCADE' },
    { model: User, foreignKey: 'user_id', onDelete: 'CASCADE' }
  ],
  Comment: [
    { model: User, foreignKey: 'user_id' },
    { model: Post, foreignKey: 'post_id' }
  ]
};

Object.values(relations).forEach(models => {
  models.forEach(({ model, foreignKey, onDelete }) => {
    model.belongsTo(model === Comment ? User : Post, { foreignKey, onDelete });
  });
});

module.exports = { User, Post, Comment };
