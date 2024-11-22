import React from "react";
import city from "../assets/city.png";
import panda from "../assets/panda.png";
import caligra from "../assets/caligra.png";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import HomeCompose from "@/components/HomeCompose";
import HomeImg from "@/components/HomeImg";
import up from "../assets/up.svg";
import homeimg1 from "../assets/homeimg1.png";
import homeimg2 from "../assets/homeimg2.png";
import caligra3 from "../assets/caligra3.png";
import strike from "../assets/strike.svg";

const Home: React.FC = () => {
  const navigateTo = useNavigate();

  const navigate = (val: string) => {
    navigateTo(val);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center gap-y-[32px] px-[20%] py-[112px] w-full bg-[#ffffff] text-[var(--Text-primary,#000000)] font-['Roboto'] text-[16px] leading-[24px] tracking-[0px] font-[400] whitespace-normal">
        <div className="self-stretch shrink-0 flex flex-col items-center gap-y-[24px] text-center">
          <p className="text-[56px] leading-[67px] font-[700] self-stretch shrink-0">
            Aprender idiomas no tiene por qué ser complicado.
          </p>
          <p className="text-[56px] leading-[67px] font-[700] self-stretch shrink-0">
            学习语言无需复杂理论
          </p>

          <p className="text-[18px] leading-[27px] self-stretch shrink-0">
            En LEONASTUDYGRAM utilizamos el método de “entrada comprensible”
            para enseñar chino y español, facilitando una adquisición rápida y
            efectiva. Con nuestras clases en línea, puedes aprender desde
            cualquier lugar y en cualquier momento. Nuestro servicio único
            incluye un acompañamiento personalizado y supervisión diaria para
            asegurar que cada estudiante complete con éxito su proceso de
            aprendizaje.
          </p>
          <p className="text-[18px] leading-[27px] self-stretch shrink-0">
            LEONASTUDYGRAM以“可理解输入法”教学中文与西班牙语，帮助学生高效入门。无论您身在何处，线上教学让学习随时随地变得轻松。我们的特色服务包括全程陪伴式支持，每日学业监督，确保每位学生都能稳步跟上学习节奏，真正实现语言学习目标。
          </p>
          <p className="text-[26px] leading-[30px] font-[700] self-stretch shrink-0">
            ¡Empieza hoy tu camino hacia el aprendizaje de idiomas con facilidad
            y éxito!
          </p>
          <p className="text-[26px] leading-[30px] font-[700] self-stretch shrink-0">
            开始您的语言学习之旅，体验轻松高效的成长！
          </p>
        </div>

        <div className="flex gap-[50px]">
          <p className="text-left text-[15px] leading-[27px] self-stretch shrink-0 max-w-[400px] card shadow rounded-lg">
            <strong>Resumen de características:</strong>
            <br />
            {[
              "Aprendizaje efectivo: Método científico para dominar los fundamentos rápidamente.",
              "Flexibilidad total: Clases en línea adaptadas a tu ritmo y horario.",
              "Acompañamiento constante: Supervisión diaria que te ayuda a mantener el progreso.",
            ].map((i) => (
              <div className="flex text-left">{i}</div>
            ))}
          </p>
          <p className="text-left flex-1 min-w-[400px] h-fit text-[15px] leading-[27px] self-stretch shrink-0  card shadow rounded-lg">
            <strong>特色摘要：</strong>
            <br />
            {[
              "高效入门：科学方法，让您快速掌握基础。",
              "随时随地：线上教学灵活安排，无学习障碍。",
              "全程陪伴：每日监督，助您坚持到底。",
            ].map((i) => (
              <div className="flex center text-left items-center">
                <img src={strike} className="mr-2 w-[10px] h-[10px]" />
                {i}
              </div>
            ))}
          </p>
        </div>
        <div className="shrink-0 inline-flex items-start gap-x-[16px] text-left">
          <div
            className="shrink-0 inline-flex justify-center items-center gap-x-[8px] px-[24px] py-[12px] bg-[var(--Color-Neutral-black,#000000)] outline-[1px] outline-[var(--Color-Neutral-black,#000000)] outline text-[var(--Text-alternate,#ffffff)]"
            onClick={() =>
              window.open(
                "https://www.instagram.com/leonastudygram?igsh=YmUyN2RieHVrZWFj&utm_source=qr",
                "_blank" // 在新标签页中打开
              )
            }
          >
            <p className="shrink-0 min-w-[71px]">Inscríbete</p>
          </div>
          <div
            className="shrink-0 inline-flex justify-center items-center gap-x-[8px] px-[24px] py-[12px] outline-[1px] outline-[var(--Color-Neutral-black,#000000)] outline"
            onClick={() => navigate("./course1")}
          >
            <p className="shrink-0 min-w-[63px]">Más Info</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
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
                  西班牙语入门课程简介
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
                Comienza con los auténticos{" "}
                <strong>hábitos lingüísticos</strong> de los nativos y practica
                integralmente la <strong>comprensión auditiva</strong>, la{" "}
                <strong>expresión oral</strong>, la <strong>lectura</strong> y
                la <strong>escritura</strong>. Desde el principio, podrás
                conversar.
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
                <strong>actividades</strong> que uno mismo u otras personas
                están realizando.
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
                  <span>最适合西方人学习的中文课程</span>
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
                <strong>
                  Curso de Introducción al Chino para Principiantes
                </strong>{" "}
                520€/人
              </div>

              <div className="text-lg mt-2">
                <strong>Objetivo del curso:</strong> Ayudar a los estudiantes
                sin <strong>conocimientos previos</strong> de chino a dominar el{" "}
                <strong>pinyin</strong>, el <strong>vocabulario</strong> y las{" "}
                <strong>estructuras básicas</strong> en{" "}
                <strong>8 semanas</strong>, desarrollando la capacidad de
                mantener <strong>conversaciones sencillas</strong> y de expresar{" "}
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
              width={700}
              title={
                <div className="text-[2rem] line-[2rem] text-right">
                  <span>La belleza de la cultura</span>
                  <br></br>
                  tradicional china -- Caligrafía
                  <br />
                  <span>中国传统艺术——书法课程简介</span>
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
                360€/人
              </div>
              <div className="text-lg mt-2">
                <strong>Objetivo del curso:</strong> A través de un aprendizaje
                sistemático, dominar los trazos yestructuras básicas del estilo
                Kaishu desarrollando el interés porla caligrafia y mejorando las
                habilidades de escritura. Este curso esideal para principiantes
                o personas con conocimientos básicos encaligrafia.
              </div>
            </div>
          }
        />
      </div>

      {/* articles */}
      <div className="flex flex-col items-center gap-y-[80px] px-[64px] py-[112px] w-full font-['Roboto'] font-[700] text-left whitespace-normal tracking-[0px]">
        <HomeImg
          width={900}
          onClick={() => navigate("/article1")}
          src={homeimg1}
          title={
            <>
              ¿Cómo aplicar el enfoque
              <br />
              de input comprensible?
              <br />
              如何应用可输入理解法？
            </>
          }
          caption={
            <>El español es una de las lenguas más habladas en el mundo</>
          }
        />

        <HomeImg
          src={homeimg2}
          width={900}
          title={
            <>
              ¿Por qué aprender español?
              <br />
              如何学习西语？
            </>
          }
          caption={
            <>El español es una de las lenguas más habladas en el mundo</>
          }
          onClick={() => navigate("/article2")}
        />

        <HomeImg
          src={caligra3}
          width={900}
          title={
            <div>
              <span>¿Por qué aprender chino?</span>
              <br />
              <span>如何学习中文？</span>
              <br />
            </div>
          }
          caption={<></>}
          onClick={() => navigate("/article3")}
        />
      </div>

      {/* <div className="flex flex-col items-start gap-y-[80px] px-[64px] py-[112px] w-full bg-[var(--Background-color-primary,#ffffff)] overflow-hidden text-[var(--Text-primary,#000000)] font-['Roboto'] font-[700] text-left whitespace-normal tracking-[0px]">
        <div className="shrink-0 flex flex-col items-start gap-y-[24px] w-[560px]">
          <p className="text-[48px] leading-[58px] self-stretch shrink-0">
            Testimonios de clientes
          </p>
          <p className="text-[18px] leading-[27px] font-[400] self-stretch shrink-0">
            Aprender chino ha cambiado mi vida por completo.
          </p>
        </div>
        <div className="self-stretch shrink-0 flex justify-center items-start flex-wrap gap-x-[64px] flex-wrap">
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
      </div> */}

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

      <div className="flex flex-col items-center gap-y-[80px] px-[336px] py-[112px] bg-[#ffffff] text-[var(--Text-primary,#000000)] font-['Roboto'] text-[16px] leading-[24px] tracking-[0px] font-[400] whitespace-normal">
        <div className="shrink-0 flex flex-col items-center gap-y-[24px] w-[768px] text-center">
          <p className="text-[48px] leading-[58px] font-[700] self-stretch shrink-0">
            Preguntas
          </p>
          <p className="text-[18px] leading-[27px] self-stretch shrink-0">
            Aquí respondemos las preguntas más frecuentes sobre nuestro programa
            de aprendizaje del idioma chino.
          </p>
        </div>
        <div className="self-stretch mx-auto shrink-0 flex flex-col items-start border-solid border-[var(--Border-primary,#000000)] border-x-[0px] border-t-[0px] border-b-[1px] text-left">
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
