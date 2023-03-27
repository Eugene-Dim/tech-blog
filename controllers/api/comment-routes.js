const express = require('express');
const router = express.Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.use(express.json());

router.post('/', withAuth, async (req, res) => {
  const { comment_content, post_id } = req.body;
  const user_id = req.session.user_id;

  try {
    const newComment = await Comment.create({
      comment_content,
      post_id,
      user_id,
    });
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
