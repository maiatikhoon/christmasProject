import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

var emojiDictionary = {
  "🎄": "Christmas Tree",
  "🎅": "Santa Claus",
  "🦌": "Reindeer",
  "🎁": "Gift",
  "❄️": "Snowflake",
  "☃️": "Snowman",
  "🍪": "Cookie",
  "🕯️": "Candle",
  "🔔": "Bells",
  "🎀": "Ribbon",
  "🎉": "Party",
};

const array = Object.keys(emojiDictionary) ; 

function App() {

   const [emoji, setEmoji] = useState() ;  

  return (
      <div className='flex flex-col justify-center items-center'>
            <div className='bg-yellow-300 w-screen p-8 mb-10'> 
                  <h1 className='text-2xl text-center'> Jingle Bells </h1>
            </div> 

             
             <div className=''>
                <h4>Type your emoji here 👇to know its meaning </h4>
             </div> 

            <form >
                <input 
                  className='w-[200px] p-2 mt-4'
                  type='text' 
                  value={emoji} 
                  onChange={ (e)=>{setEmoji(e.target.value)} }
                /> 

                <p> {emoji && (array.includes(emoji) ? " " : "incorrect value ") }</p>
            </form>




           <p className='mt-10'> Click on the emoji to know its meaning :</p>   
            
             
            <h3 className='mt-4 text-2xl'> {emojiDictionary[emoji]}</h3>
           

             <div className=''>

                 <ul className='flex space-x-4 text-3xl mt-10'>

                        {array.map( (emoji) => (
                            <button 
                             key={emoji} 
                             onClick={() => setEmoji(emoji)}> {emoji}</button>
                        ))} 

                 </ul>
             </div>



      </div>
  )
}

export default App
