import React from 'react';
import '../style/UserP.css'
import Avatar from '@mui/material/Avatar';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const UserP = ({ filteredUsers, posts }) => {
  
  return (
    <div className='perfil'>
      <h2 className='perfiles'>Perfiles</h2>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <div key={user.id} className='containerU'>
            <div className='userInfo'>
              <Avatar  sx={{ width: 60, height: 60 }} className='avatar'>{user.username[0]}</Avatar>
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
                .filter((post) => post.userId === user.id)
                .slice(0, 6)
                .map((post) => (
                  <div key={post.id} className='grid-item'>    <div className={`post-container svg-color-${getRandomInt(1, 11)}`} >
                  
                  </div>
                  <div className='into-post'>
                    <div className='titulos'>Title</div>
                    <div className='post-body'>{post.title}</div>
                    <div className='titulos'>Description</div>
                    <div className='post-body'>{post.body}</div>
                        <button className='but'>editar<span></span></button>  
                            
                  </div>
      
     
                  </div>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron coincidencias</p>
      )}
    </div>
  );
};

export default UserP;
