import Footer from './footer'
import MainNavigation from "../share/mainNavigation";
function Layout(){
    return(
        <div className="main-wrapper">
            <MainNavigation />
            <Footer />
        </div>
    )
}
export default Layout;