
const rows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
];

function Keyboard({keyStatuses, onKeyPress}){
  return(
    <>
    <div className="keyboard-row">
      {rows[0].map((key, index) => (
        <button key={index} className='keysquare' onClick={() => onKeyPress(key)}>{key}</button>
      ))}
    </div>
    <div className="keyboard-row">
      {rows[1].map((key, index) => (
        <button key={index} className='keysquare' onClick={() => onKeyPress(key)}>{key}</button>
      ))}
    </div>
    <div className="keyboard-row">
      {rows[2].map((key, index) => (
        <button 
          key={index} 
          className={`keysquare ${key === 'ENTER' || key === 'BACKSPACE' ? 'special-key' : ''}`}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </button>
      ))}
    </div>
    </>
  )
}

export default Keyboard;
