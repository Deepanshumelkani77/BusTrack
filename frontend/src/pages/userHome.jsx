import UserNavbar from '../components/UserNavbar'
import UserFooter from '../components/UserFooter'
import Header from '../components/Header'
import Why from '../components/Why'
import Slider from '../components/Slider'
import City from '../components/City'


const userHome = () => {
  return (
    <div>
      <UserNavbar />
      <Header />
      <Why />
     
      <Slider />
      <City/>
      <UserFooter />
    
      
    </div>
  )
}

export default userHome
