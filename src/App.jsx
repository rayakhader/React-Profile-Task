import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import ProfileContainer from './components/ProfilePage/components/ProfileContainer';
import AdditionalSection from './components/AdditionalSection/components/AdditionalSection';

function App() {
  
  
  return (
    <div className="App">
      <main>
        <Sidebar />
        <ProfileContainer />
        <AdditionalSection />
       

      </main>
    </div>
  );
}

export default App;
