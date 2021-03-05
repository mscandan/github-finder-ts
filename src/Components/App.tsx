import React, { useState, useEffect } from 'react';

// Components
import Header from './Layout/Header';
import Search from './Layout/Search';
import UserCard from './Layout/UserCard';

import '../Styles/App.css';

export interface User {
  login?: string;
  id?: number;
  html_url?: string;
  avatar_url?: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<Array<object>>([]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <Header />
      <Search getUsers={setUsers} />
      <div className='users-container'>
        {users &&
          users.map((user: User) => {
            return <UserCard {...user} key={user.id} />;
          })}
      </div>
    </>
  );
};

export default App;
