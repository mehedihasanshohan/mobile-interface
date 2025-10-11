import calendar from '/calendar.png'
import dial from '/dial.png'
import contacts from '/contact.png'
import games from '/games.png'
import message from '/message.png'
import stopwatch from '/stopwatch.png'
import { Link } from 'react-router'


const Menu = () => {
  return (
       <div className="w-full max-w-xs mx-auto border-r-12 border-l-12  border-gray-800 h-[160px] p-4 bg-gray-900 text-white rounded-lg shadow-md flex flex-col items-center justify-center">
      <div className="text-xl font-bold grid grid-cols-4 gap-1">
        <div>
          <Link to='/calendar'>
           <img src={calendar} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/dial'>
           <img src={dial} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/contacts'>
           <img src={contacts} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/games'>
            <img src={games} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/message'>
            <img src={message} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='stopwatch'>
            <img src={stopwatch} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/calendar'>
            <img src={calendar} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/dial'>
            <img src={dial} className='w-16 h-12' alt="" />
          </Link>
          </div>
        <div>
          <Link to='/contacts'>
            <img src={contacts} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/calendar'>
            <img src={calendar} className='w-16 h-12' alt="" />
          </Link>
        </div>
        <div>
          <Link to='/dial'>
            <img src={dial} className='w-16 h-12' alt="" />
          </Link>
          </div>
        <div>
          <Link to='/contacts'>
            <img src={contacts} className='w-16 h-12' alt="" />
          </Link>
        </div>
      </div>
    </div>

  )
}

export default Menu