import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [showPopup, setShowPopup] = useState(false)
  // 检查 cookie 是否存在
  const checkCookie = () => {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith('popupAllowed='));
    return cookieValue ? cookieValue.split('=')[1] === 'true' : false;
  }

  // 设置 cookie
  const allowPopup = () => {
    document.cookie = "popupAllowed=true; path=/";
    setShowPopup(false);
  }



  // 在组件加载时检查 cookie
  useEffect(() => {
    if (!checkCookie()) {
      setShowPopup(true);
    }
  }, []);

  return (
    <>
      <nav className='w-full px-8 py-6 flex justify-between items-center bg-[#FEFBED]'>
        <div className='text-lg font-bold hidden sm:block'>LEONA STUDYGRAM®</div>
        <div className='flex space-x-4 h-[28px] items-end'>
          <Link className='text-foreground hover:text-primary' to='/'>
            Home
          </Link>
          <Link className='text-foreground hover:text-primary' to='/about'>
            About Us
          </Link>
          <div
            onClick={()=>{}}
            className='text-foreground hover:text-primary font-medium'
          >
            Suggest
          </div> 
         </div>
        
      </nav>

      <div className='pb-[148px]'>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/privacy' element={<Events />} />
        <Route path='/about' element={<About />} /> */}
      </Routes>
      </div>

      <footer className='bg-background text-foreground fixed bottom-0 left-0 w-full'>
        <div className='container mx-auto px-4 py-8'>
          <p className='mb-1'>
            If you have any questions or need support, please reach out to us:
          </p>
          <div className='space-y-2'>
            <p>
              <i className='fas fa-envelope mr-2'></i> Email:
              yhua0633@uni.sydus.ney.edu.au
            </p>
            <p>
              <i className='fas fa-phone mr-2'></i> Phone: +61 0461368290
            </p>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="fixed bottom-0 left-0 p-6 w-[380px] rounded-md z-[9999999] flex flex-col items-center justify-center p-5 bg-[#131323] text-white left-5 bottom-5 absolute">
          <p className="text-sm leading-5 text-white font-custom">Este sitio web utiliza cookies y solicita sus datos personales para mejorar su experiencia de navegación. La navegación de este sitio, supone que usted acepta la política de privacidad y cookies.</p>
          
          <div className='mt-4 text-sm'>
            <a className="float-left w-[153px] py-4 mr-4 text-center relative uppercase bg-[#5e5cc7] border border-[#5e5cc7] no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300 -ml-1" onClick={allowPopup}>Ok, estoy de acuerdo</a>
            {/* TODO: 跳转隐页 */}
            <a className="float-right w-[153px] py-4 text-center relative uppercase bg-transparent border border-white no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300" onClick={allowPopup}>Política de Privacidad y Cookies</a>
       </div> 
       </div>
      )}
    </>
  )
}

export default App
