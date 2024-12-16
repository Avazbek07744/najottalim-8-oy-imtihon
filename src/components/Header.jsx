import { useContext } from 'react';
import logo from '../assets/logo.svg';
import { ThemeContext } from '../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const hendelClik = (v) => {
        setTheme(v)
    }

    return (
        <div className='bg-[#0000001F]'>
            <div className="flex justify-between bace-container py-4">
                <Link to='/' className='py-4'>
                    <img src={logo} alt="Logo" />
                </Link>
                <div className="flex gap-4">
                    <select onClick={(e) => { hendelClik(e.target.value) }} className="select select-bordered w-full max-w-24 text-white">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>JPY</option>
                    </select>
                    <button className="btn bg-[#87CEEB] w-[133px] h-10 hover:text-white text-[#000000de]">
                        Watch List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
