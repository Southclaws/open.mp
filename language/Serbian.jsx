import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Надолазећи мултиплејер мод за <em>Grand Theft Auto: San Andreas</em> који ће бити у потпуности компатибилан са већ постојећим мултиплејер модом, <em>San Andreas Multiplayer.</em>
    </p>
    <br />
    <p>
      То значи да ће <strong>постојећи SA:MP клијент и све постојеће SA:MP скрипте бити компатибилне са open.mp-om,</strong>а осим тога, многе грешке ће бити исправљене и у самом серверу што значи да више неће бити потребе за заобилазним решењима.
    </p>
    <p>
      Уколико се питате када је јавно издање планирано или како Ви можете допринети пројекту, молимо посетите <a href="https://www.burgershot.gg/showthread.php?tid=99">ову тему</a> за више информација.
    </p>
    <h1>
      <a href={faq}>Често постављана питања</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>Често постављана питања</h1>
    <hr />
    <h2>Шта је open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) је заменски мултиплејер мод за GTA: San Andreas, покренут као одговор на све бројније проблеме у вези нових ажурирања и у вођењу SA:MP-а. Прво издање ће бити инстант замена само за сервер. Постојећи SA:MP клијенти моћи ће се спојити на овај сервер. Нешто касније ће се развити и нови open.mp клијент, који ће омогућити још занимљивија нова ажурирања.</p>
    <hr />
    <h2>Је ли ово само још једна копија?</h2>
    <p>Не. Ово је у потпуности нови кôд, узимајући у обзир деценије знања и искуства. Било је покушаја копирања SA:MP-a и раније, али верујемо да су имали два главна проблема:</p>
    <ol>
      <li>Базирани су на SA:MP изворном коду који је процурео. Аутори тих модова нису имали законско право коришћења тог кода и увек су због тога били један корак уназад, морално и законски. Ми одбијамо користити тај кôд. Ово мало спутава брзину развоја али је исправан потез на крају.</li>
      <li>Покушали су променити превише тога одједном. Било то заменом целог језика скрипте или уклањањем могућности док су додаване нове, или једноставно некомпатибилним подешавањем. То је заузврат спречило пребацивање сервера са великим базним кôдом и великим бројем играча, јер би поново требали написати део, ако не и читав свој кôд, што је велик подухват. Ми ћемо у потпуности настојати да додајемо могућности и изгладимо ствари током времена али се исто тако фокусирамо подржати постојеће сервере и омогућити им коришћење нашег кôда без потребе да мењају свој.</li>
    </ol>
    <hr />
    <h2>Зашто радите ово?</h2>
    <p>Упркос бројним покушајима да "погурамо" развој SA:MP-а службеним каналима, у облику предлога, дружења и понуда помоћи из тима бета тестера; уз целу заједницу која је вапила за нечим новим; није било напретка. Веровало се да је то једноставно због недостатка интереса од стране водства мода, што није проблем само по себи, али није било линије надследства. Уместо да преда "кључеве царства" онима који су заинтересовани радити на моду, оснивач је желео све повући доле са собом, док је истовремено развлачио ствари што је дуже могуће, уз минималан напор. Неки тврде да је то из разлога пасивних прихода, али за то нема доказа. Упркос великом заинтересовању те јакој и пријатељској заједници, веровао је да је преостало још годину-две животу мода и да је заједница, која је радила толико напорно да учини SA:MP оним што је данас, није заслужила наставак.</p>
    <br />
    <p>Ми се не слажемо.</p>
    <hr />
    <h2>Из назива "Open" Multiplayer, хоће ли ово бити отвореног кôда?</h2>
    <p>На завршетку то је план, да. За сада се трудимо учинти развој отворен у смислу комуникације и транспарентности (што је само по себи напредак), и покушати ћемо објавити кôд када можемо, након што се све среди.</p>
    <hr />
    <h2>Како ја могу помоћи?</h2>
    <p>Направили смо тему управо за то, и ажурирати ћемо је када још посла буде доступно. Иако је пројекат откривен нешто раније него што је планирано, већ смо на добром путу према првом издању, али то не значи да још помоћи није добродошло. Хвала Вам унапред за ваше интересовање, и зато што верујете у овај пројекат:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Како помоћи" тема (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Шта је burgershot.gg?</h2>
    <p>burgershot.gg је гејминг форум, ништа више. Пуно људи је укључено у обоје и део објава везаних за развитак OMP-а се тамо објављује, но то су два независна пројекта. То није OMP форум, нити је OMP власништво burgershot-а. Једном када потпуна OMP страница буде покренута, то двоје може бити одвојено једно од другог (једнако како је и SA:MP био хостован од стране GTAForums странице пре него што су отворили властиту).</p>
    <hr />
    <h2>А шта је са OpenMP?</h2>
    <p>Open Multi-Processing пројект је "OpenMP", ми смо "open.mp". Потпуно невезано.</p>
  </div>
);

