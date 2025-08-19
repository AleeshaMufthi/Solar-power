import React from 'react'
import video from '../assets/solar_video.mp4'

const AboutSection = () => {
  return (
    <>
    <div className="max-w-5xl mx-auto px-6 mt-12">
  {/* Title */}
  {/* <h1 className="text-3xl font-bold text-center mb-6">Ajalugu</h1> */}

  {/* Paragraph */}
  <p className="text-gray-700 leading-relaxed text-justify mb-10">
    Meil on Eestis pikk äritegevuse ajalugu, mis ulatub aastasse 1997. Sellest ajast alates oleme pakkunud oma klientidele erinevaid lahendusi, kasutades uusimaid tehnoloogilisi edusamme.
    <br /><br />
    2014. aastal ühinesime Soome ettevõttega Areva Solar OY, moodustades sellega ühisettevõtte ArevaSolar Estonia OÜ. Oleme aastatega kasvanud ja laienenud nii Soomes kui Eestis.
    <br /><br />
    2023. aastal taastati seoses ärisuundade muutusega tegevus Eestis eraldi ning täna põhineb ettevõte taas 100% Eesti kapitalil.
    Ettevõtte juhtkonna liikmed ei ole pelgalt ärimehed, vaid neil on ka erialane haridus. See on olnud meie edu saladus.
    <br /><br />
    Meie missiooniks on pakkuda klientidele päikeseenergia turul suurimat usaldust, kiireimat teenindust ja pikaajalist garantiid.
  </p>
</div>

<div className="relative mt-10 mb-10">
    {/* <p className='uppercase text-center text-green-600 font-semibold mb-4'>
        Kuidas me töötame
    </p> */}
  <h2 className="text-4xl font-semibold text-center mb-12">
    Meie tööprotsess etappidena
  </h2>
  {/* Background Image */}
  {/* <img
    className="w-[950px] h-[700px] object-cover"
    src="https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg"
    alt="background"
  /> */}
    <video
    className="w-[1000px] h-[500px] object-cover"
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Text Overlay Section */}
  <div className="absolute bottom-10 right-64 bg-gray-500 text-white p-10 w-[32%] h-[400px]">
    {/* <p className="uppercase font-bold text-center mb-2">võtmed kätte lahendused</p> */}
 <img className='object-cover w-[1000px] h-[300px]'
 src='https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg'
 alt='image' />
    
  </div>
</div>


  </>
  )
}

export default AboutSection
