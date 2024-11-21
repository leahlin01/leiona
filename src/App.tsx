import { useEffect, useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Legal from "./pages/Legal";
import CourseOne from "./pages/Course1";
import CourseTwo from "./pages/Course2";
import logo from "./assets/logo.png";
import ins from "./assets/ins.svg";
import CourseThree from "./pages/Course3";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  // 检查 cookie 是否存在
  const checkCookie = () => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("popupAllowed="));
    return cookieValue ? cookieValue.split("=")[1] === "true" : false;
  };

  // 设置 cookie
  const allowPopup = () => {
    document.cookie = "popupAllowed=true; path=/";
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
      <nav className="w-full px-8 py-6 flex justify-between items-center bg-[#FFFFFF] fixed top-0 shadow-lg z-[10]">
        <div
          className="text-lg font-bold hidden sm:block"
          onClick={() => navigate("/")}
        >
          LEONA STUDYGRAM®
        </div>
        <div className="flex space-x-4 h-[28px] items-end">
          <Link className="text-foreground hover:text-primary" to="/">
            Home
          </Link>
          <Link className="text-foreground hover:text-primary" to="/legal">
            Aviso Legal
          </Link>
          <Link
            to="mailto:hosea0814@gmail.com"
            target="_blank"
            className="text-foreground hover:text-primary font-medium"
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className="py-[148px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course1" element={<CourseOne />} />
          <Route path="/course2" element={<CourseTwo />} />
          <Route path="/course3" element={<CourseThree />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>

      <footer className="bg-[#FFFFFF]">
        <div className="flex flex-col items-center gap-y-[32px] px-[64px] py-[80px] w-full bg-[var(--Background-color-primary,#ffffff)] overflow-hidden font-['Roboto'] text-[14px] leading-[21px] tracking-[0px] text-left whitespace-normal">
          <div className="shrink-0 flex items-start gap-x-[64px] border-solid border-[var(--Border-primary,#000000)] border-[1px] p-[47px] w-full font-[600]">
            <div className="shrink-0 flex flex-col items-start gap-y-[32px] w-[864px] overflow-hidden text-[var(--Text-primary,#000000)]">
              <div className="shrink-0 flex items-center px-[7px] py-[0px] h-[36px] overflow-hidden">
                <img src={logo} className="w-[70px] h-[70px] overflow-hidden" />
              </div>
              <div className="self-stretch shrink-0 flex flex-col items-start gap-y-[24px]">
                <div className="self-stretch shrink-0 flex flex-col items-start gap-y-[4px]">
                  <p className="self-stretch shrink-0">Contacto:</p>
                  <div className="self-stretch shrink-0 flex flex-col items-start text-[var(--Link-primary,#000000)] font-[400]">
                    <a
                      className="self-stretch shrink-0"
                      href="mailto:hosea0814@gmail.com"
                    >
                      hosea0814@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="shrink-0 inline-flex items-start gap-x-[12px]">
                <a
                  href="https://www.instagram.com/leonastudygram?igsh=YmUyN2RieHVrZWFj&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ins}
                    className="shrink-0 w-[24px] h-[24px] overflow-hidden"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="self-stretch shrink-0 flex justify-between items-start font-[400]">
            <p className="text-[var(--Text-primary,#000000)] shrink-0 min-w-[302px]">
              © 2024 Relume. Todos los derechos reservados.
            </p>
            <div className="shrink-0 inline-flex items-start gap-x-[24px] text-[var(--Link-primary,#000000)]">
              <a
                onClick={() => {
                  navigate("/privacy"); // 跳转到隐私政策页面
                }}
              >
                <p className="shrink-0 min-w-[135px]">Política de Privacidad</p>
              </a>
              {/* <p className="shrink-0 min-w-[131px]">Términos de Servicio</p>
              <p className="shrink-0 min-w-[160px]">Configuración de Cookies</p> */}
            </div>
          </div>
        </div>
      </footer>

      {showPopup && (
        <div className="fixed w-[380px] rounded-md z-[9999999] flex flex-col items-center justify-center p-5 bg-[#131323] text-white left-5 bottom-5">
          <p className="text-sm leading-5 text-white font-custom">
            Este sitio web utiliza cookies y solicita sus datos personales para
            mejorar su experiencia de navegación. La navegación de este sitio,
            supone que usted acepta la política de privacidad y cookies.
          </p>

          <div className="mt-4 text-sm">
            <a
              className="float-left w-[153px] py-4 mr-4 text-center relative uppercase bg-[#5e5cc7] border border-[#5e5cc7] no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300 -ml-1"
              onClick={allowPopup}
            >
              Ok, estoy de acuerdo
            </a>
            {/* TODO: 跳转隐页 */}
            <a
              className="float-right w-[153px] py-4 text-center relative uppercase bg-transparent border border-white no-underline tracking-wider rounded-[3px] text-[12px] text-white transition-all duration-300"
              onClick={() => {
                navigate("/privacy");
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
