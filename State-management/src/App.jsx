import "./App.css";
import UserProfile from "./userProfile";
import {UserContextProvider} from './contexts/Context API/UserContextProvider';

function App() {
  return (
    <div>
      <UserContextProvider>
      <UserProfile />
      </UserContextProvider>
      
    </div>
  );
}

export default App;