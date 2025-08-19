import React from 'react'
import video from '../assets/solar_video.mp4'

const ImageSection = () => {
  return (
<div className="relative mt-10">
  {/* Background Image */}
  {/* <img
    className="w-[950px] h-[700px] object-cover"
    src="https://solarestonia.ee/wp-content/uploads/2024/10/Avaleht-2-scaled.jpg"
    alt="background"
  /> */}
    <video
    className="w-[950px] h-[700px] object-cover"
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />

  {/* Text Overlay Section */}
  <div className="absolute bottom-14 right-64 bg-green-600 text-white p-12 w-[32%] h-[550px]">
    <p className="uppercase font-bold tracking-wide">võtmed kätte lahendused</p>
    <h1 className="text-4xl font-bold mt-2">Me pakume</h1>
    <h1 className="text-4xl font-bold mt-1">täisteenust!</h1>
    <div className="text-lg mt-2 text-gray-200">
        <p>Pakume teenust täislahendusena, alustades</p>
        <p>projekteerimisest kuni kasutusloa saamiseni. Omame</p>
        <p>projekteerimisest kuni kasutusloa saamiseni. Omame meeskonnas kõikide alade spetsialiste. Näiteks on meil</p>
        <p>enda paigalduse meeskond, ehk me teeme kõik tööd</p>
        <p>algusest lõpuni ise. Valides meid, võid kindel olla, et</p>
        <p>saad parima, ilusaima ja kvaliteetseima teenuse! Oleme</p>
        <p>olemas ka tulevikus kõiksugu garantiiliste probleemide</p>
        <p>lahendamisel.</p>
    </div>
    <button className="mt-5 bg-white text-black font-semibold px-6 py-4 rounded">
      LOE LÄHEMALT
    </button>
  </div>
</div>

  )
}

export default ImageSection
