import React from 'react';
import { User } from '../model/user';

interface Props {
  user: User;
}

const UserDisplayName: React.FC<Props> = ({ user }) => {
  return <span>{user.displayName}</span>;
};

export default UserDisplayName;
