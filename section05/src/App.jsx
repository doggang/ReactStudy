import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

function App() {
  const obj = {
    text:"김김",
    color:"orange",
    a:"A",
    b:"B"
  }
  return (
    <>
      <Button {...obj}/>
      <Button text={"메일"} color={"red"}/>
      <Button text={"카페"}color={"blue"}/>
      <Button text={"머더라.."}/>
    </>
  )
}

export default App;