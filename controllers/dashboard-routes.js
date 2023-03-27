const express = require('express');
const router = express.Router();
const { Post, User, Comment } = require('../models/');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: ['username'],
          },
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/new', (req, res) => {
  res.render('new-post');
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('edit-post', { post });
    } else {
      res.status(404).send('Post Not Found');
    } 
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
