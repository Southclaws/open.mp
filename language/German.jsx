import React from "react";

export const BODY = (faq) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Eine kommende Mehrspieler-Modifikation für <em>Grand Theft Auto: San Andreas</em>, die vollständig mit der bereits existierenden Modifikation <em>San Andreas Multiplayer</em> rückwärtskompatibel ist.
    </p>
    <br />
    <p>
      Somit <strong>funktionieren sowohl der originale SA:MP Client, als auch die existierenden SA:MP Skripte mit open.mp</strong> und darüber hinaus werden viele der im SA:MP Server existierenden Bugs behoben, ohne dass Hacks und Workarounds nötig sind.
    </p>
    <p>
      Falls du dich fragst, wann der erste öffentliche Release geplant ist oder wie du zum Projekt beitragen kannst, dann <a href="https://www.burgershot.gg/showthread.php?tid=99">lese diesen Forum-Thread</a> für weitere Informationen.
    </p>
    <h1>
      <a href={faq}>FAQ</a>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Was ist open.mp?</h2>
    <p>
      open.mp (Open Multiplayer, OMP) ist eine Mehrspieler-Modifikation für <em>San Andreas</em>, der durch die aufkommenden Probleme aufgrund von fehlenden Updates und schlechtem Management von SA:MP initiiert wurde. Die erste Version wird nur ein Ersatz für die bereits existierende SA:MP Serversoftware sein, somit können bereits existierende SA:MP Clients sich mit diesem Server verbinden. In Zukunft wird ein neuer open.mp Client verfügbar sein, der es ermöglicht, mehrere interessante Updates zu erhalten.
    </p>
    <hr />
    <h2>Ist es eine Abzweigung von SA:MP?</h2>
    <p>Nein. Der Quellcode wurde komplett von Anfang an selbst geschrieben, der auf jahrzehntelangem Wissen und Erfahrung basiert. Es gab zuvor bereits Versuche eine Abzweigung vom originalen SA:MP Quellcode zu erstellen, wir glauben aber, dass diese Abzweigungen zwei grosse Probleme hatten:</p>
    <ol>
      <li>Sie basierten auf geleaktem SA:MP Quellcode. Die Autoren dieser Modifikationen hatten nicht die Rechte den Quellcode zu benutzen und haben somit sowohl ethisch als auch rechtlich gesehen nicht korrekt gehandelt. Wir wollen uns von solchen Praktiken fernhalten. Zwar dauert so die Entwicklung etwas länger, jedoch ist es langfristig gesehen, der richtige Schritt.</li>
      <li>Sie haben versucht zu viele Dinge zur gleichen Zeit neu zu erfinden. Es wurde entweder versucht die Skripting-Engine zu ersetzen, existierende Features zu löschen und neue hinzuzufügen oder einfach nur Dinge auf inkompatibler Art und Weise zu optimieren. Dies hindert bereits bestehende Server mit riesigen Skripts und einer grossen Spieleranzahl umzuziehen, da sie einige, wenn nicht sogar all ihre Skripts neu schreiben müssten. Auch wir wollen neue Funktionen hinzufügen und Dinge verändern, jedoch werden wir uns als Hauptziel setzen, immer rückwärtskompatibel zu bleiben, um den Serverbesitzern zu erlauben, unseren Code benutzen zu können, ohne dafür den eigenen anpassen zu müssen.</li>
    </ol>
    <hr />
    <h2>Wieso macht ihr euch diese Arbeit?</h2>
    <p>Obwohl die Community bereits mehrmals durch Vorschläge, Kritik und dem Anbieten von Hilfe versucht hat, die offizielle SA:MP-Entwicklung wieder in Gang zu bringen, gab es keine Besserungen. Dies ist wahrscheinlich auf ein fehlendes Interesse der SA:MP Entwickler zurückzuführen. An sich ist dieses fehlende Interesse nicht verwerflich, jedoch gab es leider keinen Nachfolger und somit keine Weiterentwicklung. Anstatt die Entwicklung, an die die daran interessiert sind, weiterzugeben, entschied der Gründer alles mit ins Grab zu nehmen und dabei solange wie nur irgendwie möglich alles mit minimal nötigem Aufwand am Leben zu halten. Einige behaupten, dies sei aus passiven Einkommensgründen, aber es gibt keinen Beweis dafür. Trotz des großen Interesse der starken und sehr familiären Community, glaubte der Gründer, dass die Modifikation nur 1 oder 2 weitere Jahre überleben würde und die Community, die so hart gearbeitet hatte, um SA:MP zu dem zu machen, was es heute ist, keine Fortführung der Entwicklung verdiene.</p>
    <br />
    <p>Wir sind anderer Meinung.</p>
    <hr />
    <h2>Was haltet ihr von Kalcor/SA:MP/was auch immer?</h2>
    <p>Wir lieben SA:MP, deshalb sind wir überhaupt hier - und das verdanken wir Kalcor. Er hat im Laufe der Jahre viel für die Modifikation getan und diese Beiträge sollen nicht vergessen oder ignoriert werden. Die Massnahmen, die zu open.mp führten, wurden ergriffen da wir mit mehreren aktuellen Entscheidungen nicht einverstanden waren und trotz wiederholter Versuche, die Modifikation in einer anderen Richtung zu lenken, keine Lösung in Sicht war. So waren wir gezwungen, die unglückliche Entscheidung zu treffen, SA:MP im Geiste weiterzuführen, ohne Kalcor. Das war keine Entscheidung gegen ihn persönlich und sollte nicht als Angriff aufgegriffen werden. Wir werden keine persönlichen Beleidigungen gegen niemanden tolerieren - egal wo sie in der open.mp Problematik stehen; wir sollten in der Lage sein, eine vernünftige Debatte zu führen, ohne, dass auf Ad-Hominem-Angriffe zurückgegriffen werden muss.</p>
    <hr />
    <h2>Spaltet das nicht die Community?</h2>
    <p>Das ist nicht unsere Absicht. Im Idealfall wäre überhaupt keine Spaltung nötig gewesen, aber sich von etwas zu trennen und dieses zu behalten, anstatt das ganze Ding welken zu sehen, ist wesentlich besser. Tatsächlich haben sich seit der Ankündigung dieser Modifikation eine grosse Anzahl nicht-englischer Communities, mit der englischen Community wiederverbunden. Diese Communities wurden zuvor langsam herausgedrängt und ausgegrenzt, sodass ihre Wiedereingliederung sogar eine gespaltene Gemeinschaft wieder zusammenführt. Eine grosse Anzahl an Mitgliedern des offiziellen SA:MP-Forums wurde gebannt (und in einigen Fällen sogar all deren Posts gelöscht), aber Kalcor selbst hat darauf hingewiesen, dass das offizielle SA:MP Forum nicht SA:MP ist, sondern nur ein Teil von SA:MP. Viele Spieler und Serverbesitzer haben noch nie in diesem Forum gepostet oder sich sogar registriert; also ist es umso wichtiger, mit diesen Leuten zu kommunizieren und so, noch mehr Teile der Community zu vereinen.</p>
    <hr />
    <h2>Da es "Open" Multiplayer heißt, wird es auch quelloffen sein?</h2>
    <p>Irgendwann ist das der Plan, ja. Vorerst konzentrieren wir uns auf eine offene Kommunikation und Transparenz (was an sich schon eine Verbesserung ist) und arbeiten auf eine Veröffentlichung des Quellcodes hin, sobald alles geklärt und geregelt ist.</p>
    <hr />
    <h2>Wann wird es veröffentlicht?</h2>
    <p>Diese uralte Frage, bekommt leider auch eine uralte Antwort: sobald es fertig ist. Es ist einfach nicht möglich zu wissen, wie lange ein solches Projekt dauern wird. Es wurde seit längerem im Hintergrund daran gearbeitet und hat bereits einige Schwankungen im Aktivitätsniveau erlebt, je nachdem, wie beschäftigt die Entwickler waren, aber wir sind zuversichtlich, dass es auf dem besten Weg ist und dank einigen grundlegenden Designentscheidungen (wir werden später mehr über die Architektur verraten) schnell voran kommt.</p>
    <hr />
    <h2>Wie kann ich helfen?</h2>
    <p>Behalte das Forum im Auge. Wir haben einen Thread für dieses Thema gemacht und versuchen ihn immer aktuell zu halten und mit Neuigkeiten zu versehen, sobald mehr Arbeit zur Verfügung steht. Obwohl das Projekt etwas eher an die Öffentlichkeit gelangt ist als geplant und wir bereits auf gutem Wege zu einem ersten Release sind, ist trotzdem jede Hilfe willkommen. Schon vorab danken wir dir für dein Interesse und dass du an dieses Projekt glaubst:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"How to help" Thread (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Was ist burgershot.gg?</h2>
    <p>burgershot.gg ist hauptsächlich ein Gaming-Forum. Einige der dort angemeldeten Leute sind sowohl Gamer als auch in der OMP Entwicklung beteiligt. Zudem werden dort die relevanten Neuigkeiten bezüglich OMP veröffentlicht, jedoch sind burgershot.gg und OMP nicht ein und dasselbe Projekt. Auch ist OMP nicht das Eigentum von burgershot.gg. Sobald OMP eine eigene Seite im Betrieb hat, können die OMP Inhalte von burgershot.gg wegmigriert werden (dies ist vergleichbar mit SA:MP, welches damals noch kein eigenes Forum hatte, sondern die GTAForums nutzte).</p>
    <hr />
    <h2>Was ist mit OpenMP?</h2>
    <p>Dies ist das "Open Multi-Processing (OpenMP)" Projekt, aber wir sind "open.mp". Sehr großer Unterschied!</p>
  </div>
);
