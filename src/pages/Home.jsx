import { useSelector, useDispatch } from 'react-redux' 
import { changeName } from '../store/slices/username.slice'
import { useNavigate } from 'react-router-dom'
import Ash_Ketchum from '../images/Ash_Ketchum.png'


const Home = () => {

  const name = useSelector( state => state.username )

  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = e.target[0].value 
    dispatch( changeName(user ))

    navigate( "/pokedex" )
  }


    return (
        <div className='home-page'> 
            <h2>Hello trainer!</h2>
            <img src={Ash_Ketchum} alt="Ash" />
            
            <form action="" onSubmit={ (e) => handleSubmit(e) }>
            <p>Give me your name to start</p>
            <input type="text" placeholder="Your name here"/>
            <button>Start</button>
            </form>

            
        </div>
    )
}

export default Home