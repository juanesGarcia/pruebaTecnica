import { useEffect, useState } from 'react';
import * as Apis from './FunApi';
import UserP from './screens/UserP';
import './style/App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Apis.getUser().then(setUsers);
    Apis.getPost().then(setPosts);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className='total'>
      <div className='containerS'>
      <div className='search' htmlFor="search">Buscar por nombre:</div>
      <input
      className='input'
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>  
    <UserP filteredUsers={filteredUsers} posts={posts} />
    </div>
    
  );
}

export default App;
