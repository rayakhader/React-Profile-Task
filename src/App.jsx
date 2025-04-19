import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/ProfilePage/components/ProfileContainer';

function App() {
  
  return (
    <div className="App">
      <main>
        <Sidebar />
        <ProfileContainer />
      </main>
    </div>
  );
}

export default App;
