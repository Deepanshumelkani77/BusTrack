import userNavbar from '../components/userNavbar'
import userFooter from '../components/userFooter'
import Header from '../components/Header'
import Why from '../components/Why'
import Slider from '../components/Slider'
import City from '../components/City'


const userHome = () => {
  return (
    <div>
      <userNavbar />
      <Header />
      <Why />
     
      <Slider />
      <City/>
      <userFooter />
    
      
    </div>
  )
}

export default userHome
