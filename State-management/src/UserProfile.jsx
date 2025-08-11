import React  from 'react';
import { UserContext } from './contexts/Context API/UserContextProvider';

import {useUserStore} from  './contexts/zustand/useUserStore';

const UserProfile = () => {
 const { user, login, logout} = useUserStore();

  return (
    <div>
  {user ? (
    <div> 
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email} </p>
      <button onClick={logout}>Logout</button>
    
    </div>
  ) : (
     <div>
       <p>Please log in</p>
       <button onClick={login}>Login</button>
     
     </div>
  )}

    </div>
  );
}

export default UserProfile;