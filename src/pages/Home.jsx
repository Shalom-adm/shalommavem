import { CCTV } from '../components/cctv/CCTV';
import { Contactos } from '../components/contacto/contacto';
import { FooterShalom } from '../components/footer/footerShalom';
import { HeaderShalom} from '../components/headerShalom';
import { Muebleria } from '../components/muebleria/Muebleria';
import { Presentacion } from '../components/presentacion/presentacion';
import { Soldadura } from '../components/soldaduras/soldadura';

export const Home = () => {
    return(
        <>
        <HeaderShalom/>
        <main>
            <Presentacion/>
            <Muebleria/>
            <Soldadura/>
            <CCTV/>   
            <Contactos/>         
        </main>
        <FooterShalom/>
        </>

    )
}