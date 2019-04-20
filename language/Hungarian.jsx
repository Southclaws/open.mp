import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Egy közelgő módosítás a <em>Grand Theft Auto: San Andreas</em> nevű játékhoz ami teljesen kompatibilis lesz a már jól ismert <em>San Andreas Multiplayer</em> móddal.
    </p>
    <br />
    <p>
      Ez azt jelenti hogy a <strong>már létező SA:MP kliens és minden SA:MP script működni fog az open.mp-vel</strong> és ezen túlmenően sok hiba rögzítésre, és javításra kerül ami azt eredményezi hogy nem lesz szükség megoldásokat keresni alapvető problémákra.
    </p>
    <p>
      Ha kíváncsi vagy mikor lesz elérhető a projekt, vagy szeretnél közreműködni, kérlek látogasd meg <a href="https://www.burgershot.gg/showthread.php?tid=99">ezt a fórum témát</a> további információért.
    </p>
    <h1>
      <FAQLink>GYIK</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>GYIK</h1>
    <hr />
    <h2>Mi az az open.mp?</h2>
    <p>Az open.mp (Open Multiplayer, OMP) egy többjátékos modifikáció a San Andreas számára ami a SA:MP frissítésével és kezelésével kapcsolatos problémák miatt indult. A kezdeti kiadás csak a szerverfájlok cseréje lesz, és a meglévő SA:MP klienssel rendelkezők csatlakozhatnak ezekhez a szerverekhez. A jövőben egy új open.mp kliens lesz elérhető, amely több érdekes frissítést tesz lehetővé.</p>
    <hr />
    <h2>Ez egy "fork"?</h2>
    <p>Nem. Ez a mód teljesen nulláról írt, kihasználva az évtizedes tudást és tapasztalatot. A SA:MP-ot többször is megpróbálták korábban újraírni, de úgy gondoljuk ezeknek két fő problémájuk volt:</p>
    <ol>
      <li>Legtöbbjük a kiszivárgott SA:MP forráskódon alapultak. Ezeknek a modifikációknak a fejlesztői nem rendelkeztek törvényes joggal a kód felhasználásához, és így mindig hátrányos helyzetben voltak, mind morálisan, mind pedig jogilag.</li>
      <li>Túl sok mindent próbáltak egyszerre elkészíteni. Vagy ki szerették volna cserélni a fejlesztési motort, vagy eltávolítani funkciókat miközben újakat hoznak létre, vagy csak kissebb dolgokat rosszul csinálni. Ez megakadályozza, hogy a meglévő szerverek hatalmas kódbázisokkal és játékosbázisokkal előre haladjanak, mivel át kell írniuk egy részét, ha nem az egészét a forráskódnak- ami borzasztóan nagy feladat. Az idő múlásával szeretnénk új funkciókat, és további dolgokat is készíteni de legfőképp arra összpontosítunk hogy támogassuk a meglévő szervereket, lehetővé téve számukra hogy saját forráskódjukat ne kelljen gyökeresen megváltoztatniuk.</li>
    </ol>
    <hr />
    <h2>Miért készül ez az egész?</h2>
    <p>Hogy a SA:MP fejlesztését megsűrgessük, segíteni kezdtünk javaslatok formájában, és a béta tesztelő csoport is megpróbálta a tőle tellhetőt; mindeközben a közösség már könyörgött valami újért; de semmi változás nem látszott. Ezt a legtöbben úgy vélték, hogy egyszerűen az érdeklődés hiánya a fejlesztő részéről, ami önmagában nem probléma, de nem volt ki tovább vigye a projektet. Ahelyett, hogy a fejlesztést átadná azoknak, akik érdeklődnek a mód folytatásáért, az alapító egyszerűen mindent magáévá tudott, miközben a lehető legkisebb erőfeszítés látszott rajta. Néhányan azt állítják hogy ezt a passzív jövedelem miatt csinálta, de erre nincs bizonyíték. Annak ellenére hogy hatalmas érdeklődés és erős családias közösség van az egész mögött, azt hitte hogy csak 1-2 év maradt hátra a mód számára, és amit az emberek eddig felépítettek, az nem érdemel folytatást. </p>
    <br />
    <p>Mi nem értünk egyet.</p>
    <hr />
    <h2>Mivel "Open" Muliplayer, ezért nyílt forráskódú lesz?</h2>
    <p>Ez a terv, igen. Átmenetileg próbáljuk a fejlesztést kommunikáció és átláthatóság szempontjából nyitottnak titulálni (ami önmagában is javulás), és a jövőben próbálunk a nyílt forráskód felé haladni miután a felhajtás lecsillapult.</p>
    <hr />
    <h2>Hogy tudok segíteni?</h2>
    <p>Tartsd szemmel a fórumot. Van egy témánk kifejezetten erre a célra ami aktívan frissül ahogy több segítségre lesz szükségünk. Míg a projekt a tervezettnél rövidebb idün belül kiderült, már jó úton vagyunk az első kiadás felé, de ez nem azt jelenti hogy a segítséget nem értékeljük. Előre is köszönjük hogy érdeklődsz, és hiszel a projektben:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Hogyan tudsz segíteni" téma(burgershot.gg)</u>
    </a>
    <hr />
    <h2>Mi az a burgershot.gg?</h2>
    <p>burgershot.gg egy játékfórum, semmi több. Sokan részt vesznek mindkettőben, néhány OMP frissítés közzé van téve ott, de két független projekt. Ez nem az OMP fórum, sem az OMP egy burgershot tulajdon. Miután az OMP weboldal futni fog, a kettő teljesen elkülöníthető lesz egymástól (mint mikor a SA:MP weboldal a GTAForums által volt futtatva, mielőtt a SA:MP elkülönült).</p>
    <hr />
    <h2>Mi van az OpenMP-vel?</h2>
    <p>Az Open Multi-Processing projekt az "OpenMP". Mi "open.mp" vagyunk. Teljesen különböző.</p>
  </div>
);
