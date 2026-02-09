import Login from "../Components/Login"
import TopHeader from '../Components/TopHeader'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import "../Pages/Responsive.css"

const LoginPage = () => {
    return (
        <div>
            <div className='hidden md:flex'>
                <TopHeader />
            </div>
            <div className='flex flex-col gap-8'>
                <NavBar />
                <Login />
                <div className='mt-16'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
