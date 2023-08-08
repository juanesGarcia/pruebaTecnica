import React, { useState } from 'react';
import '../style/UserP.css'
import Avatar from '@mui/material/Avatar';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const UserP = ({ filteredUsers, posts }) => {
  const [deletedPostIds, setDeletedPostIds] = useState([]);

  function handleDelete(postId, userId) {
    setDeletedPostIds(prevDeletedIds => [...prevDeletedIds, postId]);
  }

  const visibleUsers = filteredUsers.filter(user => {
    const userPosts = posts.filter(post => post.userId === user.id);
    const remainingPosts = userPosts.filter(post => !deletedPostIds.includes(post.id));
    return remainingPosts.length > 0;
  });

  return (
    <div className='perfil'>
      <h2 className='perfiles'>Perfiles</h2>
      {visibleUsers.length > 0 ? (
        visibleUsers.map((user) => (
          <div key={user.id} className='containerU'>
            <div className='userInfo'>
            <Avatar sx={{ width: 60, height: 60 }} className='avatar'>{user.username[0]}</Avatar>
              <div className='post-for'>Report for</div>
              <div className='username'>{user.username}</div>
              <div className='email'>{user.email}</div>
              <div className='email'>{user.phone}</div>
              <div className='userColor'>
                <div className='company'>Company</div>
                <div className='companyName'>{user.company.name}</div>
              </div>
            </div>

            <div className="grid-container">
              {posts
                .filter((post) => post.userId === user.id && !deletedPostIds.includes(post.id))
                .slice(0, 6)
                .map((post) => (
                  <div key={post.id} className='grid-item'>
                    <div className={`post-container svg-color-${getRandomInt(1, 11)}`}></div>
                    <div className='into-post'>
                    <div className='titulos'>Title</div>
                      <div className='post-body'>{post.title}</div>
                      <div className='titulos'>Description</div>
                      <div className='post-body'>{post.body}</div>
                      <button className='but' onClick={() => handleDelete(post.id, user.id)}>eliminar<span></span></button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p className='p'>No se encontro informacion del perfil o perfiles</p>
      )}
    </div>
  );
};

export default UserP;



