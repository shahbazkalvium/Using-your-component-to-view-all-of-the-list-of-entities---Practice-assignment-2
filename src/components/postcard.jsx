import React from 'react';
import LikeButton from './likebutton';

const PostCard = ({ post, onToggleLike }) => {
  const { profileImage, username, content, isLiked } = post;

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={profileImage} alt={username} className="profile-image" />
        <h3 className="username">{username}</h3>
      </div>
      <p className="content">{content}</p>
      <LikeButton isLiked={isLiked} onToggle={() => onToggleLike(post.id)} />
    </div>
  );
};

export default PostCard;