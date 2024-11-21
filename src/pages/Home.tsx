import React from 'react';
import city from '../assets/city.png';
import panda from '../assets/panda.png';
import caligra from '../assets/caligra.png';
import avatar from '../assets/avatar.png';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center'>
      <div className='px-4 py-8 mx-[20px] md:mx-36'>
        <div
          className='bg-white rounded-lg p-6 mb-6 text-left'
          onClick={() => {
            navigate('/course1');
          }}
        >
          <h1 className='text-3xl font-bold mb-4'>
            El curso de español ideal para principiantes.
          </h1>
          <img
            src={city}
            alt='课程图片'
            className='w-full h-auto rounded-lg mt-4'
          />
        </div>

        <div
          className='bg-white rounded-lg p-6 mb-6 text-left'
          onClick={() => {
            navigate('/course2');
          }}
        >
          <h1 className='text-3xl font-bold mb-4'>
            Aprender chino adaptado al pensamiento de las lenguas occidentales.
            适合西方语言思维的中文学习
          </h1>
          <img
            src={panda}
            alt='Panda'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        <div className='bg-white rounded-lg p-6 mb-6 text-left'>
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
