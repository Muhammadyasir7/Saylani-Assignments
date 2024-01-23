import CategoriesList from "../components/CategoriesList";
import NavbarList from "../components/NavItems"
import ControlledCarousel from "../components/Carousel";

function HomePage(){
    return(
        <>
            <NavbarList />
            <CategoriesList />
            <ControlledCarousel />
        </>
    )
}
export default HomePage;