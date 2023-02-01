import './App.css';
import Header from "./components/Header/Header";
import TopContainer from './components/TopContainer/TopContainer';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <SkillContainer/>
      <ProjectContainer/>
      <Contact/>
    </div>
  );
}

export default App;
