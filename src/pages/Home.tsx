import React from "react";
import city from "../assets/city.png";
import panda from "../assets/panda.png";
import caligra from "../assets/caligra.png";
import avatar from "../assets/avatar.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import { useNavigate } from "react-router-dom";
import HomeCompose from "@/components/HomeCompose";
import HomeImg from "@/components/HomeImg";
import strike from "../assets/strike.svg";
import up from "../assets/up.svg";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <HomeCompose
        place="left"
        onClick={() => navigate("/course1")}
        imgNode={
          <HomeImg
            src={city}
            title={
              <>
                El curso de español
                <br />
                ideal para principiantes.
                <br />
              </>
            }
            caption={
              <>
                ¿Por qué es importante aprender chino mandarín
                <br />
                para los niños...
              </>
            }
          />
        }
        contentNode={
          <div className="max-w-[550px] p-8 card shadow-lg text-black">
            <h1 className="text-3xl font-bold mb-4">
              Curso de escucha y conversación de español A1 de 4 Semanas
            </h1>
            <p className="text-xl text-brown-600 mb-4">€129</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-500">
                Ruta de aprendizaje única | Curso en línea
              </span>
            </div>
            <p className="mb-4">
              Comienza con los auténticos <strong>hábitos lingüísticos</strong>{" "}
              de los nativos y practica integralmente la{" "}
              <strong>comprensión auditiva</strong>, la{" "}
              <strong>expresión oral</strong>, la <strong>lectura</strong> y la{" "}
              <strong>escritura</strong>. Desde el principio, podrás conversar.
            </p>
            <p className="mb-4">
              <strong>Curso en línea</strong> en grupos pequeños de alta
              calidad, con un máximo de <strong>10 personas</strong>, donde se
              supervisan mutuamente en el aprendizaje.
            </p>
            <p>
              Partiendo de <strong>textos de noticias</strong> o{" "}
              <strong>historias de 10 minutos</strong>, completar en{" "}
              <strong>cuatro semanas</strong> los temas básicos del nivel A1:
              <strong> saludar</strong>,{" "}
              <strong>preguntar sobre el clima</strong>,{" "}
              <strong>preguntar sobre el estado de salud</strong> y expresar{" "}
              <strong>actividades</strong> que uno mismo u otras personas están
              realizando.
            </p>
          </div>
        }
      />
      <HomeCompose
        place="right"
        onClick={() => navigate("/course2")}
        imgNode={
          <HomeImg
            src={panda}
            title={
              <div className="text-[2rem] line-[2rem] text-right">
                <span>
                  Aprender chino adaptadoal pensamiento de laslenguas
                  occidentales.
                </span>
                <br />
                <span>适合西方语言思维的中文学习</span>
                <br />
              </div>
            }
            caption={<></>}
          />
        }
        contentNode={
          <div className="max-w-[300px] flex-1 text-black pt-10 pl-10">
            <div className="text-lg font-bold">
              Nombre del curso:{" "}
              <strong>Curso de Introducción al Chino para Principiantes</strong>{" "}
              520€/人
            </div>
            <div className="text-lg mt-2">
              <strong>Objetivo del curso:</strong> Ayudar a los estudiantes sin{" "}
              <strong>conocimientos previos</strong> de chino a dominar el{" "}
              <strong>pinyin</strong>, el <strong>vocabulario</strong> y las{" "}
              <strong>estructuras básicas</strong> en <strong>8 semanas</strong>
              , desarrollando la capacidad de mantener{" "}
              <strong>conversaciones sencillas</strong> y de expresar{" "}
              <strong>necesidades básicas</strong> en situaciones cotidianas.
            </div>
          </div>
        }
      />

      <HomeCompose
        place="left"
        onClick={() => navigate("/course3")}
        imgNode={
          <HomeImg
            src={caligra}
            title={
              <div className="text-[2rem] line-[2rem] text-right">
                <span>
                  Aprender chino adaptadoal pensamiento de laslenguas
                  occidentales.
                </span>
                <br />
                <span>中国传统文化之美--书法</span>
                <br />
              </div>
            }
            caption={<></>}
          />
        }
        contentNode={
          <div className="max-w-[500px] flex-1 text-black pt-10">
            <div className="text-lg font-bold">
              Nombre del curso:{" "}
              <strong>
                Curso básico de caligrafia: Introducción alestilo
                Kaishy(escritura regular)
              </strong>{" "}
              699€/人
            </div>
            <div className="text-lg mt-2">
              <strong>Objetivo del curso:</strong> A través de un aprendizaje
              sistemático, dominar los trazos yestructuras básicas del estilo
              Kaishu desarrollando el interés porla caligrafia y mejorando las
              habilidades de escritura. Este curso esideal para principiantes o
              personas con conocimientos básicos encaligrafia.
            </div>
          </div>
        }
      />

      <div className="flex flex-col items-start gap-y-[80px] px-[64px] py-[112px] w-[1440px] bg-[var(--Background-color-primary,#ffffff)] overflow-hidden text-[var(--Text-primary,#000000)] font-['Roboto'] font-[700] text-left whitespace-normal tracking-[0px]">
        <div className="shrink-0 flex flex-col items-start gap-y-[24px] w-[560px]">
          <p className="text-[48px] leading-[58px] self-stretch shrink-0">
            Testimonios de clientes
          </p>
          <p className="text-[18px] leading-[27px] font-[400] self-stretch shrink-0">
            Aprender chino ha cambiado mi vida por completo.
          </p>
        </div>
        <div className="self-stretch shrink-0 flex justify-center items-start gap-x-[64px]">
          <div className="grow basis-0 flex flex-col items-start gap-y-[32px] overflow-hidden">
            <div className="flex w-[116px] h-[19px] overflow-hidden">
              {Array.from({ length: 5 }).map((_i) => (
                <img src={strike} className="shrink-0 pr-[4px]" />
              ))}
            </div>
            <p className="text-[20px] leading-[28px] self-stretch shrink-0">
              "El programa es increíble y muy efectivo para aprender chino."
            </p>
            <div className="shrink-0 relative flex items-center px-[0px] py-[3px] w-[403px] text-[16px] leading-[24px]">
              <img
                src={avatar3}
                className="object-cover w-[56px] h-[56px] rounded-[50%]"
              />
              <div className="ml-[20px] mr-[0px] my-[0px] inline-flex flex-col items-start">
                <p className="font-[600] shrink-0">Juan Pérez</p>
                <p className="font-[400] shrink-0">Estudiante, Universidad</p>
              </div>
            </div>
          </div>
          <div className="grow basis-0 flex flex-col items-start gap-y-[32px] overflow-hidden">
            <div className="flex w-[116px] h-[19px] overflow-hidden">
              {Array.from({ length: 5 }).map((_i) => (
                <img src={strike} className="shrink-0 pr-[4px]" />
              ))}
            </div>
            <p className="text-[20px] leading-[28px] self-stretch shrink-0">
              "Gracias a este curso, ahora puedo comunicarme en chino."
            </p>
            <div className="shrink-0 relative flex items-center px-[0px] py-[3px] w-[385px] text-[16px] leading-[24px]">
              <img
                src={avatar2}
                className="object-cover w-[56px] h-[56px] rounded-[50%]"
              />
              <div className="ml-[20px] mr-[0px] my-[0px] inline-flex flex-col items-start">
                <p className="font-[600] shrink-0 min-w-[89px]">María López</p>
                <p className="font-[400] shrink-0 min-w-[149px]">
                  Profesora, Academia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto text-white bg-[#451a03] overflow-hidden">
        <div className="p-6 flex flex-col items-center justify-center">
          <blockquote>
            <p className="max-w-[660px] mx-[32px] text-[2em] font-semibold">
              "Aprendí rápidamente a leer poemas famosos chinos, ¡y me encantan
              por su ritmo! La clase de caligrafía me parece fascinante; parece
              sencilla, pero no lo es."
            </p>
          </blockquote>
          <div className="mt-4 flex flex-col justify-center items-center">
            <img
              src={avatar}
              alt="Teresa"
              className="w-10 h-10 rounded-full border-solid border-[2px] border-[#ccc]"
            />
            <div className="mt-2">
              <p className="text-sm font-medium">Teresa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-y-[80px] px-[336px] py-[112px] w-[1440px] bg-[#ffffff] text-[var(--Text-primary,#000000)] font-['Roboto'] text-[16px] leading-[24px] tracking-[0px] font-[400] whitespace-normal">
        <div className="shrink-0 flex flex-col items-center gap-y-[24px] w-[768px] text-center">
          <p className="text-[48px] leading-[58px] font-[700] self-stretch shrink-0">
            Preguntas
          </p>
          <p className="text-[18px] leading-[27px] self-stretch shrink-0">
            Aquí respondemos las preguntas más frecuentes sobre nuestro programa
            de aprendizaje del idioma chino.
          </p>
        </div>
        <div className="self-stretch shrink-0 flex flex-col items-start border-solid border-[var(--Border-primary,#000000)] border-x-[0px] border-t-[0px] border-b-[1px] text-left">
          {[
            {
              q: `¿Cuánto tiempo hay que dedicar al estudio cada día para ver un progreso notable?`,
              a: `Al menos tres horas de práctica después de clase.`,
            },
            {
              q: `¿Pueden aprender incluso aquellos que no tienen conocimientos previos de español?`,
              a: `El curso A1 está diseñado para estudiantes sin ninguna base en español, con práctica integral de comprensión auditiva, expresión oral, lectura y escritura, comenzando a hablar desde el primer día.`,
            },
            {
              q: `¿Pueden aprender incluso aquellos que no tienen ninguna base en chino?`,
              a: `Claro, nuestro curso es impartido en línea con clases 1 a 1, así que no tienes que preocuparte por no poder aprender.`,
            },
            {
              q: `西语零基础也可以学习吗？`,
              a: `A1课程就是针对西语零基础学生，听说读写全面练习，开始即开口。`,
            },
            {
              q: `¿Es adecuado para principiantes?`,
              a: `Sí, nuestro curso está diseñado para todos los niveles,
                incluyendo principiantes. Comenzamos desde lo básico y avanzamos
                gradualmente. No necesitas experiencia previa en el idioma
                chino.`,
            },
          ].map((item) => (
            <div className="self-stretch shrink-0 flex flex-col items-start">
              <div className="self-stretch shrink-0 flex items-center gap-x-[24px] border-solid border-[var(--Border-primary,#000000)] border-x-[0px] border-t-[1px] border-b-[0px] px-[0px] pt-[19px] pb-[20px] overflow-hidden text-[18px] leading-[27px] font-[700]">
                <p className="grow basis-0">{item.q}</p>
                <img
                  src={up}
                  className="shrink-0 w-[32px] h-[32px] overflow-hidden"
                />
              </div>

              <div className="self-stretch shrink-0 flex items-start gap-x-[16px] px-[0px] pt-[0px] pb-[24px]">
                <p className="grow basis-0">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
