import React from 'react';
import city from '../assets/city.png';
import panda from '../assets/panda.png';
import caligra from '../assets/caligra.png';
import avatar from '../assets/avatar.png';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex gap-[20px] flex-wrap sm:mx-[20px] md:mx-[40px] lg:mx-36 text-left'>
        <div className='max-w-[400px] mx-auto my-8 p-8 rounded-[40px] shadow-lg'>
          <h1 className='text-3xl font-bold mb-4'>
            Curso de escucha y conversación de español A1 de 4 Semanas
          </h1>
          <p className='text-xl text-brown-600 mb-4'>€129</p>
          <div className='flex items-center mb-4'>
            <span className='text-yellow-500'>★★★★☆</span>
            <span className='ml-2'>
              Curso en línea
            </span>
          </div>
          <p className='mb-4'>
            Comienza con los auténticos hábitos lingüísticos de los nativos y
            practica integralmente la comprensión auditiva, la expresión oral,
            la lectura y la escritura. Desde el principio, podrás conversar.
          </p>
          <p className='mb-4'>
            Curso en línea en grupos pequeños de alta calidad, con un máximo de
            10 personas, donde se supervisan mutuamente en el aprendizaje.
          </p>
          <p>
            Partiendo de textos de noticias o historias de 10 minutos, completar
            en cuatro semanas los temas básicos del nivel A1: saludar, preguntar
            sobre el clima, preguntar sobre el estado de salud y expresar
            actividades que uno mismo u otras personas están realizando.
          </p>
        </div>
        <div className='max-w-[500px] mx-auto my-8 bg-white p-8 rounded-lg'>
          <h2 className='text-2xl font-bold mt-6 mb-4'>Plan del curso:</h2>
          <p className='mb-2'>De lunes a viernes, de 7:30 p.m. a 9:30 p.m.</p>
          <ul className='list-disc list-outside mb-4 text-left text-[1rem] leading-[1.5rem]'>
            <li>
              Lunes: lectura guiada del vocabulario nuevo del texto de
              comprensión auditiva de la semana.
            </li>
            <li>
              Martes: escucha detallada del texto de comprensión auditiva, frase
              por frase.
            </li>
            <li>
              Miércoles: lectura guiada del texto de comprensión auditiva y
              resolución de dudas gramaticales.
            </li>
            <li>
              Jueves: lectura guiada del texto de comprensión auditiva y
              memorización de expresiones comunes.
            </li>
            <li>
              Viernes: conversación sobre el tema del texto de comprensión
              auditiva de la semana con el profesor.
            </li>
          </ul>
          <p>从真实的语言习惯入手，全面练习听、说、读、写，开启即口。</p>
          <p>
            从10分钟新闻/故事文本入手，四周的时间完成A1基础的主题：打招呼、询问天气、询问身体状况、表达自己或他人正在进行的活动。
          </p>

          <h2 className='text-2xl font-bold mt-6 mb-4'>Plan del curso:</h2>
          <p className='mb-2'>De lunes a viernes, de 7:30 p.m. a 9:30 p.m.</p>
          <ul className='list-disc list-inside mb-4 text-left'>
            <li>Lunes: 带读本周听力文本的生词</li>
            <li>周二: 逐句精听本周听力文本</li>
            <li>周三: 带读听力文本并解答语法</li>
            <li>周四: 带读听力文本并背诵常用表达</li>
            <li>周五: 用本周听力的主题和老师进行口语对话</li>
          </ul>
        </div>
      </div>

      <div className='p-6 px-4 py-8 mx-[20px] md:mx-36'>
        <div className='bg-white rounded-lg p-6 mb-6 text-left'>
          <h2 className='text-2xl font-bold mb-4 text-left'>课程特点</h2>
          <ul className='list-disc list-inside text-left'>
            <li>habla rápida</li>
            <li> Aprendizaje con acompañamiento durante todo el día</li>
            <li> Introducción rápida al español</li>
            <li> Lugar de estudio flexible.</li>
          </ul>
          <button className='bg-[#451a03] text-white font-bold py-2 px-4 rounded my-4'>
              Contáctanos
            </button>
            <img
              src={city}
              alt='课程图片'
              className='w-full h-auto rounded-lg mt-4'
            />
          <div className='bg-white p-8'>
            <h1 className='text-3xl font-bold mb-4'>
              Curso de chino de tres meses
            </h1>
            <p className='text-lg mb-2'>
              Plan del curso： Clases en línea 1 a 1
            </p>
            <p className='text-xl font-semibold mb-4'>25€/H</p>
            <img
              src={panda}
              alt='Panda'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <p className='my-8'>
              Dirigido a personas cuya lengua materna no es el chino, el primer
              mes del curso se centra en aprender la pronunciación del chino. El
              segundo y tercer mes se enfocan en el aprendizaje básico de
              caracteres y frases, así como en la memorización de tres poemas
              clásicos chinos.
            </p>

            <img
              src={caligra}
              alt='caligra'
              className='w-full h-auto rounded-lg shadow-lg'
            />
            <p className='my-8'>
              Este curso es un complemento del curso de chino, y solo se permite
              una reserva por semana para experimentar la cultura tradicional de
              la caligrafía china. Cada sesión de caligrafía dura 45 minutos.
            </p>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto text-white bg-[#451a03] overflow-hidden'>
        <div className='p-6 flex flex-col items-center justify-center'>
          <blockquote>
            <p className='max-w-[660px] mx-[32px] text-[2em] font-semibold'>
              "Aprendí rápidamente a leer poemas famosos chinos, ¡y me encantan
              por su ritmo! La clase de caligrafía me parece fascinante; parece
              sencilla, pero no lo es."
            </p>
          </blockquote>
          <div className='mt-4 flex flex-col justify-center items-center'>
            <img
              src={avatar}
              alt='Teresa'
              className='w-10 h-10 rounded-full border-solid border-[2px] border-[#ccc]'
            />
            <div className='mt-2'>
              <p className='text-sm font-medium'>Teresa</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-4xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>
          ¿Preguntas sobre los cursos?
        </h1>
        <div className='space-y-4'>
          <div className='p-4 rounded-lg'>
            <h2 className='font-semibold'>
              ¿Cuánto tiempo hay que dedicar al estudio cada día para ver un
              progreso notable?
            </h2>
            <p>Al menos tres horas de práctica después de clase.</p>
          </div>
          <div className='p-4 rounded-lg'>
            <h2 className='font-semibold'>
              ¿Pueden aprender incluso aquellos que no tienen conocimientos
              previos de español?
            </h2>
            <p>
              El curso A1 está diseñado para estudiantes sin ninguna base en
              español, con práctica integral de comprensión auditiva, expresión
              oral, lectura y escritura, comenzando a hablar desde el primer
              día.
            </p>
          </div>
          <div className='p-4 rounded-lg'>
            <h2 className='font-semibold'>
              ¿Pueden aprender incluso aquellos que no tienen ninguna base en
              chino?
            </h2>
            <p>
              Claro, nuestro curso es impartido en línea con clases 1 a 1, así
              que no tienes que preocuparte por no poder aprender.
            </p>
          </div>
          <div className='p-4 rounded-lg'>
            <h2 className='font-semibold'>西语零基础也可以学习吗？</h2>
            <p>A1课程就是针对西语零基础学生，听说读写全面练习，开始即开口。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
