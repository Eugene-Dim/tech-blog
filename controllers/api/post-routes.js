const express = require('express');
const router = express.Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    console.log('New post:', newPost);
    res.json(newPost);
  } catch (err) {
    console.error('Failed to create post:', err);
    res.status(500).json({ error: 'Failed to create post.' });
  }
});


router.put('/:id', withAuth, async (req, res) => {
  try {
    const [rowsUpdated] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (rowsUpdated === 1) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'Post not found.' });
    }
  } catch (err) {
    console.error('Failed to update post:', err);
    res.status(500).json({ error: 'Failed to update post.' });
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const rowsDeleted = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (rowsDeleted === 1) {
      res.status(200).json({ success: true });
    } else {
      res.status(404).json({ error: 'Post not found.' });
    }
  } catch (err) {
    console.error('Failed to delete post:', err);
    res.status(500).json({ error: 'Failed to delete post.' });
  }
});

module.exports = router;
