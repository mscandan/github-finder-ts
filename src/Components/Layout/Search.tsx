import React, { useState } from 'react';

import '../../Styles/Search.css';

type Props = {
  getUsers: (users: Array<object>) => void;
};

const Search: React.FC<Props> = ({ getUsers }: Props) => {
  const [username, setUsername] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async () => {
    const query: string = `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`;
    const res = await (await fetch(query, { method: 'GET' })).json();
    getUsers(res.items);
  };

  return (
    <div className='search-container'>
      <input
        type='text'
        value={username}
        onChange={handleChange}
        className='search-input'
      />
      <button id='search-submit' onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Search;
