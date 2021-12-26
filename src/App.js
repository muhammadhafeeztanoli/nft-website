import './App.css';
import Wallet from './Wallet';
import Header from "./Header";
import ReactPlayer from "react-player";


function App() {
  return (
    <div className="App">
      <Header />
      <div id="logo" className="bannerImg">
        <div className='content'>
          <h1>10,000 Unique and diverse gamers competing for survival in the more than gamers metaverse</h1>
        </div>
        <Wallet />
        <div>
        </div>
      </div>
      <div id="What">
        <div className='main' id="Whats">
          <div className='firstContent'>
            <h1 className='heading'>What is MTG?</h1>
            <span className='content'><br />More than Gamers is a collection of 10,000 <br />generative 3D side profile Characters fighting<br /> for Survival in the Gamers Metaverse. Smarts<br /> and determination through struggle and unique <br />styles are what they’ll need to beat the game</span>
            <span className='content2'><br />before their time is up.</span>
          </div>
          <div className='secondContent'>
            <ReactPlayer
              url="https://youtu.be/F5ZN1CLWSs8"
            />
          </div>
        </div>
        <div className='content3'>
          <div className='firstContent'>
            <h1 className='heading'>What is MTG?</h1>
            <span className='content'><br />The world as they know it is long gone. The rise of an elite royalty class has sent the <br />rest of society into turmoil. Economic inequality, hate, and division have become the <br />norm. Gamers must now battle across the metaverse to earn $Arcada to survive<br /> .$Arcada rules the game Society class is determined by how much $Arcada one <br />holds. The more one plays, the more $Arcada they earn. $Arcada is needed to <br />purchase all essential items. However, a rumor has been spreading… Collect enough<br /> $Arcada and you may be able to break out of the constraints of your economic <br />class. Are the elite truly satisfied or are they also under the secret control of a <br />higher power? But that is just the beginning of the journey…
            </span>
          </div>
        </div>
      </div>
      {/* <div id="Community">
        <h1>Community</h1>
      </div>
      <div id="Mint">
        <h1>Mint</h1>
      </div>
      <div id="FAQ">
        <h1>FAQ</h1>
      </div>
      <div id="Roadmap">
        <h1>Roadmap</h1>
      </div> */}
    </div>
  );
}

export default App;