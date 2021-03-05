import React from 'react';

import { User } from '../App';
import '../../Styles/UserCard.css';

const UserCard: React.FC<User> = ({ login, html_url, avatar_url }) => {
  return (
    <div className='card-container'>
      <img className='avatar' src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <button className='visit-btn'>
        <a href={html_url} target='_blank' rel='noreferrer'>
          Visit on GitHub
        </a>
      </button>
    </div>
  );
};

export default UserCard;
