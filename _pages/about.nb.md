---
permalink: /nb/
title: "Academic Pages er en klar-til-bruk GitHub Pages-mal for akademiske personlige nettsteder"
author_profile: true
lang: nb
redirect_from:
  - /nb/about/
  - /nb/about.html
---

Dette er forsiden til et nettsted som drives av [Academic Pages-malen](https://github.com/academicpages/academicpages.github.io) og hostes på GitHub Pages. [GitHub Pages](https://pages.github.com) er en gratis tjeneste der nettsteder bygges og hostes fra kode og data lagret i et GitHub-repositorium, og oppdateres automatisk når en ny commit gjøres til repositoriet. Denne malen ble forket fra [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) laget av Michael Rose, og deretter utvidet for å støtte den typen innhold akademikere har: publikasjoner, foredrag, undervisning, en portefølje, blogginnlegg og en dynamisk generert CV. Tilfeldigvis gjør disse samme funksjonene den til en flott mal for alle som trenger å vise frem en profesjonell mal!

Du kan forke [denne malen](https://github.com/academicpages/academicpages.github.io) akkurat nå, endre konfigurasjons- og Markdown-filene, legge til dine egne PDF-filer og annet innhold, og ha ditt eget nettsted gratis, uten annonser!

Et datadrevet personlig nettsted
======
Som mange andre Jekyll-baserte GitHub Pages-maler, får Academic Pages deg til å skille nettstedets innhold fra formen. Innholdet og metadataene på nettstedet ditt er i strukturerte Markdown-filer, mens forskjellige andre filer utgjør temaet, og spesifiserer hvordan du transformerer innholdet og metadataene til HTML-sider. Du oppbevarer disse forskjellige Markdown (.md), YAML (.yml), HTML- og CSS-filene i et offentlig GitHub-repositorium. Hver gang du committer og pusher en oppdatering til repositoriet, oppretter [GitHub Pages](https://pages.github.com)-tjenesten statiske HTML-sider basert på disse filene, som hostes gratis på GitHubs servere.

Mange av funksjonene til dynamiske innholdsstyringssystemer (som Wordpress) kan oppnås på denne måten, ved å bruke en brøkdel av beregningsressursene og med langt mindre sårbarhet for hacking og DDoS-angrep. Du kan også endre temaet så mye du vil uten å berøre innholdet på nettstedet ditt. Hvis du kommer til et punkt der du har ødelagt noe i Jekyll/HTML/CSS hinsides reparasjon, er Markdown-filene dine som beskriver foredragene, publikasjonene osv. trygge. Du kan rulle tilbake endringene eller til og med slette repositoriet og starte på nytt - bare sørg for å lagre Markdown-filene! Du kan også skrive skript som behandler de strukturerte dataene på nettstedet, for eksempel [dette](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) som analyserer metadata på sider om foredrag for å vise [et kart over alle steder du har holdt foredrag](https://academicpages.github.io/talkmap.html).

For de brukerne som trenger mer avansert funksjonalitet, støtter malen også følgende populære verktøy:
- [MathJax](https://www.mathjax.org/) for matematiske ligninger
- [Mermaid](https://mermaid.js.org/) for diagrammer
- [Plotly](https://plotly.com/javascript/) for plotting

Komme i gang
======
1. Registrer en GitHub-konto hvis du ikke har en, og bekreft e-posten din (påkrevd!)
2. Fork [denne malen](https://github.com/academicpages/academicpages.github.io) ved å klikke på "Use this template"-knappen øverst til høyre.
3. Gå til repositoriets innstillinger (elementet lengst til høyre i fanene som starter med "Code", skal være under "Unwatch"). Gi nytt navn til repositoriet "[ditt GitHub-brukernavn].github.io", som også vil være nettstedets URL.
4. Angi nettstedsomfattende konfigurasjon og opprett innhold og metadata (se nedenfor - se også [dette settet med differanser](http://archive.is/3TPas) som viser hvilke filer som ble endret for å sette opp [et eksempelnettsted](https://getorg-testacct.github.io) for en bruker med brukernavnet "getorg-testacct")
5. Last opp eventuelle filer (som PDF-er, .zip-filer osv.) til files/-katalogen. De vil vises på https://[ditt GitHub-brukernavn].github.io/files/example.pdf.
6. Sjekk status ved å gå til repositoriets innstillinger, i "GitHub Pages"-delen.

Nettstedsomfattende konfigurasjon
------
Hovedkonfigurasjonsfilen for nettstedet er i rotkatalogen i [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), som definerer innholdet i sidefeltene og andre nettstedsomfattende funksjoner. Du må erstatte standardvariablene med variabler om deg selv og nettstedets GitHub-repositorium. Konfigurasjonsfilen for toppmenyen er i [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). Hvis du for eksempel ikke har en portefølje eller blogginnlegg, kan du fjerne disse elementene fra den navigation.yml-filen for å fjerne dem fra overskriften.

Opprett innhold og metadata
------
For nettstedsinnhold er det én Markdown-fil for hver type innhold, som lagres i kataloger som _publications, _talks, _posts, _teaching eller _pages. For eksempel er hvert foredrag en Markdown-fil i [_talks-katalogen](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). Øverst i hver Markdown-fil er det strukturerte data i YAML om foredraget, som temaet vil parse for å gjøre mange kule ting. De samme strukturerte dataene om et foredrag brukes til å generere listen over foredrag på [Foredrag-siden](https://academicpages.github.io/talks), hver [enkelt side](https://academicpages.github.io/talks/2012-03-01-talk-1) for spesifikke foredrag, foredragsseksjonen for [CV-siden](https://academicpages.github.io/cv), og [kartet over steder du har holdt foredrag](https://academicpages.github.io/talkmap.html) (hvis du kjører denne [python-filen](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) eller [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), som oppretter HTML-koden for kartet basert på innholdet i _talks-katalogen).

**Markdown-generator**

Repositoriet inkluderer [et sett med Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) som konverterer en CSV-fil som inneholder strukturerte data om foredrag eller presentasjoner til individuelle Markdown-filer som vil bli riktig formatert for Academic Pages-malen. Eksempel-CSV-ene i den katalogen er de jeg brukte til å lage mitt eget personlige nettsted på stuartgeiger.com. Min vanlige arbeidsflyt er at jeg holder et regneark over publikasjonene og foredragene mine, kjører deretter koden i disse notebookene for å generere Markdown-filene, og committer og pusher dem deretter til GitHub-repositoriet.

Slik redigerer du nettstedets GitHub-repositorium
------
Mange bruker en git-klient til å lage filer på sin lokale datamaskin og deretter pushe dem til GitHubs servere. Hvis du ikke er kjent med git, kan du redigere disse konfigurasjons- og Markdown-filene direkte i github.com-grensesnittet. Naviger til en fil (som [denne](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) og klikk på blyantikonet øverst til høyre i forhåndsvisningen av innholdet (til høyre for "Raw | Blame | History"-knappene). Du kan slette en fil ved å klikke på søppelbøtteikonet til høyre for blyantikonet. Du kan også opprette nye filer eller laste opp filer ved å navigere til en katalog og klikke på "Create new file"- eller "Upload files"-knappene.

Eksempel: redigering av en Markdown-fil for et foredrag
![Redigering av en Markdown-fil for et foredrag](/images/editing-talk.png)

For mer info
------
Mer informasjon om konfigurering av Academic Pages finner du i [guiden](https://academicpages.github.io/markdown/), den [voksende wikien](https://github.com/academicpages/academicpages.github.io/wiki), og du kan alltid [stille et spørsmål på GitHub](https://github.com/academicpages/academicpages.github.io/discussions). [Guidene for Minimal Mistakes-temaet](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (som dette temaet ble forket fra) kan også være nyttige.
