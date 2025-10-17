import calendar from '/calendar.png'
import dial from '/dial.png'
import contacts from '/contact.png'
import games from '/games.png'
import message from '/message.png'
import stopwatch from '/stopwatch.png'
import browser from '/browser.png'
import notes from '/notes.png'
import radio from '/radio.png'
import sim from '/sim.png'
import alarm from '/alarm.png'
import security from '/security.png'
import { Link } from 'react-router'


const Menu = () => {
  return (
       <div className="w-full max-w-xs mx-auto border-r-12 border-l-12  border-gray-800 bg-gray-900 h-[160px] p-4 text-white rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="grid grid-cols-4 space-x-4 space-y-1">
        <div>
          <Link to='/calendar'>
           <img src={calendar} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/dial'>
           <img src={dial} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/contacts'>
           <img src={contacts} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/games'>
            <img src={games} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/message'>
            <img src={message} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/stopwatch'>
            <img src={stopwatch} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/browser'>
            <img src={browser} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/alarm'>
            <img src={alarm} className='w-10 h-10' alt="" />
          </Link>
          </div>
        <div>
          <Link to='/notes'>
            <img src={notes} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/radio'>
            <img src={radio} className='w-12 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/sim'>
            <img src={sim} className='w-12 h-12' alt="" />
          </Link>
          </div>
        <div>
          <Link to='/security'>
            <img src={security} className='w-12 h-12' alt="" />
          </Link>
        </div>
      </div>
      {/* <p>selected icons</p> */}
    </div>

  )
}

export default Menu