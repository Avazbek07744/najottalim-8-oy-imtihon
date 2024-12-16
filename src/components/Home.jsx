import { useContext } from 'react';
import Cripto from './Cripto';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import { ThemeContext } from '../App';

const Home = () => {
    const { bar } = useContext(ThemeContext)

    return (
        <div>
            <Header />
            <div className="relative flex">
                <div className="flex-1">
                    <Main />
                    <Cripto />
                </div>
                <div className="fixed top-0 right-0 z-50">
                    {
                        bar.length ?
                            <Sidebar /> :
                            <p></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
