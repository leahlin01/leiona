import { useEffect, useState } from 'react';
import './App.css';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  // 检查 cookie 是否存在
  const checkCookie = () => {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('popupAllowed='));
    return cookieValue ? cookieValue.split('=')[1] === 'true' : false;
  };

  // 设置 cookie
  const allowPopup = () => {
    document.cookie = 'popupAllowed=true; path=/';
    setShowPopup(false);
  };

  // 在组件加载时检查 cookie
  useEffect(() => {
    if (!checkCookie()) {
      setShowPopup(true);
    }
  }, []);

  return (
    <>
      <nav className='w-full px-8 py-6 flex justify-between items-center bg-[#FFFFFF] fixed top-0 shadow-lg z-[10]'>
        <div
          className='text-lg font-bold hidden sm:block'
          onClick={() => navigate('/')}
        >
          LEONA STUDYGRAM®
        </div>
        <div className='flex space-x-4 h-[28px] items-end'>
          <Link className='text-foreground hover:text-primary' to='/'>
            Home
          </Link>
          <Link className='text-foreground hover:text-primary' to='/legal'>
            Aviso Legal
          </Link>
          <Link
            to='https://www.instagram.com/leonastudygram?igsh=YmUyN2RieHVrZWFj&utm_source=qr'
            target='_blank'
            className='text-foreground hover:text-primary font-medium'
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className='py-[148px]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/legal' element={<Legal />} />
        </Routes>
      </div>

      <footer className='bg-[#FFFFFF] text-foreground fixed bottom-0 left-0 w-full py-4'>
        <p className='text-[1em]'>© All rights reserved.</p>
      </footer>

      {showPopup && (
        <div className='fixed w-[380px] rounded-md z-[9999999] flex flex-col items-center justify-center p-5 bg-[#131323] text-white left-5 bottom-5'>
          <p className='text-sm leading-5 text-white font-custom'>
            Este sitio web utiliza cookies y solicita sus datos personales para
            mejorar su experiencia de navegación. La navegación de este sitio,
            supone que usted acepta la política de privacidad y cookies.
          </p>

          <div className='mt-4 text-sm'>
            <a
              className='float-left w-[153px] py-4 mr-4 text-center relative uppercase bg-[#5e5cc7] border border-[#5e5cc7] no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300 -ml-1'
              onClick={allowPopup}
            >
              Ok, estoy de acuerdo
            </a>
            {/* TODO: 跳转隐页 */}
            <a
              className='float-right w-[153px] py-4 text-center relative uppercase bg-transparent border border-white no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300'
              onClick={() => {
                navigate('/privacy');
              }}
            >
              Política de Privacidad y Cookies
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
