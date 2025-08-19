import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#0d1117] text-gray-300 py-12 px-6 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

    {/* Company Info */}
    <div>
      <img
        src="/logo.png" // Replace with your logo path
        alt="Solar Estonia"
        className="mb-4 w-40"
      />
      <p className="text-sm leading-relaxed">
        Solar Estonia on Eesti energiaettevõte, mis keskendub peamiselt
        taastuvenergia lahenduste pakkumisele.
      </p>
      <p className="text-sm leading-relaxed mt-4">
        Ettevõte on tuntud eriliste ja tehniliselt keerulisemate
        päikeseenergiasüsteemide lahenduste projekteerimise ja ehitamise
        poolest. Aitame oma klientidel energiatõhusust maksimeerida,
        vähendades sõltuvust traditsioonilistest energiaallikatest.
      </p>
    </div>

    {/* Categories */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        TOOTEKATEGORIAAD
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>› Akupangad koos inverteriga</li>
        <li>› Hübriidinverterid</li>
        <li>› Akupangad</li>
        <li>› Päikesepaneelide komplektid</li>
        <li>› Autovarjualused</li>
        <li>› Tooted koos paigaldusega</li>
        <li>› Akupangad koos inverteriga – kõik ühes tornid</li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        MEIE TEENUSED
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>› Päikesepaneelide paigaldus viilkatusetele</li>
        <li>› Päikesepaneelide paigaldus lamekatusetele</li>
        <li>› Päikesepaneelide paigaldus maapealselt</li>
        <li>› Päikesepaneelide paigaldus fassaadidele</li>
        <li>› Päikesepaneelide paigaldus autovarjualusena</li>
        <li>› Päikesepaneelide paigaldus katusematerjalina</li>
        <li>› Energia salvestussüsteemid</li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h3 className="text-white font-semibold mb-4 relative">
        REKVISIIDIID
        <span className="absolute left-0 -bottom-1 w-12 h-0.5 bg-green-500"></span>
      </h3>
      <ul className="space-y-2 text-sm">
        <li>Solar Estonia OÜ</li>
        <li>Registrikood: 12647942</li>
        <li>KMKR nr: EE101716510</li>
        <li>Telefon: +372 5340 9016</li>
        <li>E-post: info@solar.ee</li>
        <li>
          Aadress: Urda tee 3, Jälgimäe, 76404
          <br />
          Harju maakond, Eesti
        </li>
      </ul>
      <div className="mt-6">
        <img
          src="/badge.png" // Replace with your badge image path
          alt="Usaldusväärne ettevõte"
          className="w-36"
        />
      </div>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-10 pt-6">
    Copyright © 2025 Solar Estonia, All Rights Reserved.
  </div>
</footer>

  )
}

export default Footer
