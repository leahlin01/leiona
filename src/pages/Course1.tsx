import React from 'react';

const CourseOne: React.FC = () => {
  return (
    <div className='flex flex-col justify-center sm:mx-[20px] md:mx-[40px] lg:mx-36 text-left'>
      <div className='flex gap-[20px] flex-wrap'>
        <div className='max-w-[400px] mx-auto my-8 p-8 card shadow-lg'>
          <h1 className='text-3xl font-bold mb-4'>
            Curso de escucha y conversación de español A1 de 4 Semanas
          </h1>
          <p className='text-xl text-brown-600 mb-4'>€129</p>
          <div className='flex items-center mb-4'>
            <span className='text-yellow-500'>★★★★☆</span>
            <span className='ml-2 text-gray-500'>
              Ruta de aprendizaje única | Curso en línea
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
        <div className='max-w-[500px] mx-auto my-8 p-8'>
          <h2 className='text-2xl font-bold mt-6 mb-4'>Plan del curso:</h2>
          <p className='mb-2'>De lunes a viernes, de 7:30 p.m. a 9:30 p.m.</p>
          <ul className='list-disc list-outside mb-4 text-left'>
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

      <div className='p-8 text-left'>
        <h2 className='text-2xl font-bold mb-4'>课程特点</h2>
        <ul className='list-disc list-outside text-left'>
          <li>habla rápida</li>
          <li> Aprendizaje con acompañamiento durante todo el día</li>
          <li> Introducción rápida al español</li>
          <li> Lugar de estudio flexible.</li>
        </ul>
      </div>

      <div>
        <p>¿Por qué aprender español?</p>
        <p>
          El español es una de las lenguas más habladas en el mundo, con más de
          500 millones de hablantes nativos repartidos por más de 20 países.
          Aprender español no solo es una herramienta práctica para comunicarse,
          sino también una ventana para conocer la rica cultura y la historia de
          los países hispanohablantes.
        </p>
        <p>
          En primer lugar, el español es el segundo idioma más utilizado en la
          comunicación internacional y el tercero más usado en internet. Si
          aprendes español, puedes conectarte con personas de América Latina,
          España y otras regiones, ampliando tus horizontes culturales y
          profesionales. Además, en el mundo globalizado de hoy, hablar un
          segundo idioma como el español puede abrir puertas a nuevas
          oportunidades laborales en sectores como el turismo, la educación, los
          negocios internacionales y la traducción.
        </p>
        <p>
          En segundo lugar, el español es una lengua hermosa y accesible. Su
          pronunciación es clara y consistente, lo que facilita el aprendizaje
          para principiantes. Además, aprender español te permitirá disfrutar de
          obras literarias clásicas como las de Gabriel García Márquez, Miguel
          de Cervantes o Pablo Neruda en su idioma original.
        </p>
        <p>
          Finalmente, el aprendizaje de un nuevo idioma, como el español,
          también mejora tus habilidades cognitivas, aumenta tu confianza y te
          ayuda a entender y respetar otras culturas. Estudiar español no es
          solo adquirir una habilidad práctica, sino también una forma de
          crecimiento personal.
        </p>
        <p>
          En resumen, aprender español no es solo aprender un idioma, sino
          también explorar un mundo lleno de posibilidades culturales,
          profesionales y personales. ¡Empieza hoy y descubre todo lo que el
          español tiene para ofrecer!
        </p>
      </div>
    </div>
  );
};
export default CourseOne;
