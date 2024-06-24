import Header from '../components/Header';
import Erreur from '../assets/images/404.png';
import Footer from '../components/Footer';
import '../style/error.scss';

export default function Error() {
    return (
        <>
        <Header/>
        <img src={Erreur} alt='erreur'className='erreur-img'/>
        <p>Oups! La Page que vous demandez n'existe pas.</p>
        <Footer/>
        </>       
    )
};
