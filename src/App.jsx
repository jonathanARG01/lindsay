import Menu           from "./components/Menu";
import Banners        from "./sections/Banners";
import Servicios      from "./sections/Servicios";
import Nosotros       from "./sections/Nosotros";
import Funcionamiento from "./sections/Funcionamiento";
import Testimonios    from "./sections/Testimonios";
import Contactanos    from "./sections/Contactanos";
import Footer         from "./components/Footer";



const App = () => {
    return (
        <>
        
            <Menu />
            <Banners />
            <Servicios />
            <Nosotros />
            <Funcionamiento />
            <Testimonios />
            <Contactanos />
            <Footer />

        </>
    )
}



export default App;
