import bear_begging from './begging.gif';
import bear_kissing from './milk-and-mocha-hug.gif';
import { useState } from 'react';
import './App.css';

const phrases = [
  "No",
  "Are you sure?",
  "Baby, really sure",
  "My handsome pookie, please!!!",
  "Don't do this to me!",
  "You're killing me!",
  "My heart is broken!!!!!"
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="Valentine">
      {
        yesPressed ? (
          <>
            <img src={bear_kissing} className="BearKissing" alt="bear-kissing"/>
            <div className='text'>YAY!!!!!</div>
          </>
        ) : (
          <>
            <img src={bear_begging} className="BearBegging" alt="bear-begging"/>
            <div className='ValentineQuestion'> Will You Be My Valentine?</div>
            <div>
              <button 
                className="yesButton"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
                >
                  Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
