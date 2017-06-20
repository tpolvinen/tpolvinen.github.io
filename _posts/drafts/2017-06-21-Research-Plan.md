---
layout: post
categories: drafts
share: true
comments: true
title: 'Research Plan'
excerpt: "Initial research plan"
date: '2017-06-21T01:15:00+03:00'
modified: '2017-06-21T01:52:00+03:00'
tags: [meta, research plan, github]
author: Author1
hidelogo: true
relatedposts:
---
You can find my initial research plan in my Github repository, [here](https://github.com/tpolvinen/Agri/blob/master/tPolvinenOppariTutkimussuunnitelma.docx). This still needs a lot of work! :P

The file itself is in Word (.docx) format and you can download it from it's Github page by clicking on 'Download' button.

Following is the text transformed to markdown format:

# Tutkimussuunnitelma: IoT -teknologioiden sovellukset kasvintuotannossa

#### Tekijä: Tatu Polvinen

#### Koulutusohjelma: Tietojenkäsittelyn koulutusohjelma

## Tiivistelmä
Kasvintuotannossa laajasti käytössä olevat digitaaliset teknologiaratkaisut ovat pitkään olleet korkeintaan M2M –periaatteella toimivia (Machine to Machine, laitteelta laitteelle) jolloin tuotettu raakadata jää yleensä esimerkiksi traktorin tai puimurin tietokoneelle. IoT–teknologioiden mahdollistaman laitteiden välisen tiedonsiirron, sensorien tuottaman raakadatan analysoinnin ja siitä saatavan tietämyksen hyödyntämisen nähdään yleisesti tuot-tavan huomattavaa lisäarvoa.

Tämän tutkimuksen tavoitteena on selvittää I) millaisia IoT–teknologioita (Internet of Things, esineiden internet) on sovellettu ja tutkittu kasvintuotannon alalla sekä II) millaisia kokemuksia ja näkemyksiä kasvintuotannossa toimivalla suomalaisella yrittäjällä on IoT –teknologioiden hyödyntämisestä ja mahdollisuuksista.

Tutkimus toteutetaan kahdella tutkimusmenetelmällä: kirjallisuuskatsauksena ja yksilöteemahaastatteluna. Kirjallisuuskatsauksessa perehdytään kasvintuotannossa käytettäviin IoT –teknologioihin joiden sovelluksista on saatavilla joko tutkimustietoa tai muuten luotettaviksi arvioitavia lehtiartikkeleja tai valmistajan tiedotteita. Yksilöteemahaastattelussa pyritään hahmottamaan millaisia henkilökohtaisia kokemuksia ja näkemyksiä IoT–teknologioiden hyödyntämisestä haastateltavalla maatalousalan toimijalla itsellään on.
Tutkimuksen toteutus ajoitetaan vuoden 2017 keväälle viikoille 13 – 21. Viikolla 21 tutkimussuunnitelma esitellään työpajassa jonka jälkeen toteutetaan haastattelu. Haastattelun jälkeen kirjoitetaan tutkimusraportti ja palautetaan se arvioitavaksi kesäkuun alussa.
Tutkimuksen tuloksia voidaan käyttää hyväksi tekijän myöhemmin toteutettavassa samasta tai sitä sivuavasta aiheesta kirjoitettavassa opinnäytetyössä.

Tässä suunnitelmassa käytetään lähdeviittauksissa Harvard Reference format 1 (author-date):a.

Asiasanat: Esineiden internet, Teollinen Internet, kasvintuotanto, kasvitehdas, täsmäviljely
 
## Sisällys 
1   Johdanto

2   Teoriatausta

2.1 Taustaa

2.2 AIoT:n käytännön sovelluksia ja tutkimustuloksia

2.2.1   AIoT-täsmäviljely peltokasvituotannossa

2.2.2   AIoT-täsmäviljely puutarhatuotannossa

3   Tutkimuksen tavoitteet

3.1 Tutkimusongelmat

3.2 Työhypoteesit:

4   Tutkimusmenetelmät

5   Tutkimusaikataulu

6   Tuloksen hyväksikäyttömahdollisuudet

7   Lähteet
 

## 1    Johdanto
Maatalouden esineiden internet (Agriculture Internet of Things, AIoT) on teollisen esinei-den internetin (Industrial Internet of Things, IIoT) merkittävänä osana viimeaikaisen edullisten ja tehokkaiden pilvipalveluiden, sensori- ja verkkoteknologioiden kehityksen myötä mahdollistunut tavalla joka on saanut monet tahot ennustamaan ennennäkemätöntä tuot-tavuuden kasvua seuraavan vuosikymmenen aikana (Gilchrist (2016), 2). Koska AIoT:tä pidetään yleisesti IIoT:n osana, käsittelen tässä työssä myös IIoT:tä soveltuvin osin.

Aineiston keräämisen alkuvaiheessa löytyi lehtiartikkeli, jossa G. Monbiot kirjoitti sensaa-tiomaiseen tyyliin YK:n julkaisemista laskelmista viljelysmaan eroosiosta. Artikkelissa hän väittää, että viljelyskelpoinen maa kulutetaan nykyisillä maata kuluttavilla viljelystekniikoilla loppuun keskimäärin maailmanlaajuisesti 60:ssä vuodessa, Englannissa saman lukeman ollessa 100 vuotta. (Monbiot (2015)) Vaikka kyseinen lukujen tulkinta ja esitetyt väitteet osoittautuisivat tarkemmin tutkittaessa puutteellisiksi, tarve uusille ja tehokkaammille vilje-lytekniikoille on selkeä: kirjallisuuskatsauksessa “Internet of Things in agriculture” Ver-douw et al. mainitsevat ruokaturvan kriittisyyden korostuvan lähivuosikymmeninä väes-tönkasvun ja kehittyvillä markkinoilla tapahtuvan elintason nousun myötä (Verdouw et al. (2016)). Samoin FAO:n vuoden 2012 raportissa “World agriculture towards 2030/2050” arvioidaan vuoteen 2050 mennessä tarvittavien tuotannon kasvuksi 940 miljoonaa tonnia viljakasvien osalta (Alexandratos, N. & Bruinsma J. (2012), 17).

Lisäksi Verdouw et al. mainitsevat ruokaturvaa heikentävänä seikkana maapallon kanto-kyvyn ylittymisen nykyisin köytössä olevilla maatalouden tuotantomenetelmillä. Globaalin ruokaturvan ja ympäristönsuojelun erityisiksi haasteiksi he kuvaavat globalisaation, ilmastonmuutoksen, polttoaineperusteisesta bioperusteiseen talouteen siirtymisen sekä maan, makean veden ja työvoiman käytön kilpailun vaikutukset. IoT-teknologioiden odotetaan auttavan näihin haasteisiin vastaamisessa entistä tarkemmalla tuotannon ja tuotantoympäristön seuraamisella, tuotannon etäohjauksella, tuotteiden laadun tarkkailulla sekä ku-luttajien ymmärryksen lisäämisellä. (Verdouw et al. (2016))

Erityisesti IoT-teknologioita hyödyntävää kasvintuotantoa toteutetaan kasvihuoneissa ja kasvitehtaina tunnetuissa laitoksissa, joissa täysin kontrolloiduissa olosuhteissa kasvatuk-seen käytettyjen resurssien kuten pinta-alan, lannoitteiden ja kasvuajan tehokkuus on saatu moninkertaistettua. Suomessa ollaan ottamassa kaupallista kasvitehdasta tuotantoon vuonna 2017 Fujitsu Greenhouse Technology Finland Oy:n ja Robbes Lilla Trädgård Ab:n yhteishakkeena Fujitsu (2016) Schäfer (2016).

Tutkittavaksi ilmiöksi on näin materiaaliin tutustuttaessa muodostunut IoT-teknologioiden hyödyntäminen kasvintuotannossa viljelyn tehostamiseksi ja samalla viljelyn aiheuttaman ympäristökuormituksen minimoimiseksi. Uutta tietoa odotetaan syntyvän tässä tutkimuksessa vain vähän toteutettavassa yksilöteemahaastattelussa ja tutkimukseen käytettävissä olevan ajan rajallisuuden myötä, mutta tutkimuksen tuloksia voidaan käyttää apuna päätettäessä jatkotutkimuksen tarpeellisuudesta ja toteutuksen mahdollisuuksista.

## 2    Teoriatausta
Tässä osassa käsitellään AIoT:n taustaa sekä sen käytännön sovelluksia ja tutkimustu-loksia.

### 2.1 Taustaa
FAO:n vuoden 2012 raportissa arvioidaan väestönkasvun myötä tarvittavan globaalin ruo-antuotannon kasvun olevan saavutettavissa mutta vaativan investointeja. Raportissa käsi-teltyjen Maailmanpankin ennusteiden mukaan köyhyys ei ole katoamassa maailmasta vuoteen 2050 mennessä vaan tuloerot maiden välillä tulevat olemaan huomattavat, jolloin ruoantuotantoon tehtävät investoinnit tulevat jakautumaan epätasaisesti. (Alexandratos, N. & Bruinsma J. (2012), 37) Tämä puolestaan asettaa vaatimuksia kustannustehokkaampien viljelytekniikoiden kehittämiselle —erityisesti ilmastonmuutoksen todennäköisten vaikutusten vaikeuttaessa maanviljelyä suuressa osassa maailmaa.

Ilmastonmuutoksen aiheuttama lämpötilojen nousu lisää kasteluntarvetta ja saattaa sa-malla rajoittaa kasteluveden saatavuutta. Tällöin tarvitaan entistä tarkempaa tietoa kaste-lun todellisesta tarpeesta sekä tarkempaa kastelun hallintaa — myös kotimaisessa kasvintuotannossa. Ruokakaupan jatkuvan hintakilpailun ja kasvavan luomuruoan kysynnän myötä on myös tarve kehittää viljelytekniikoita joilla voidaan säästää lannoituksessa ja saada silti enemmän irti samasta kasvatuspinta-alasta.

Täsmäviljelyn kehityksellä ollaan aikaisemmilla vuosikymmenillä saavutettu säästöjä lan-noituksessa ja tehostettu viljelypinta-alan käyttöä. IoT-teknologioiden nähdään mahdollistavan täsmäviljelyn eteneminen ns. Smart Farming:iin, missä maatilasta muodostuu älykäs, keskenään toimivien laitteiden verkko. Tällöin voidaan yhdistää tosiaikainen sensorien tuottama havaintodata, datan automaattinen älykäs analysointi ja tuotantosuunnittelu sekä tuotantoprosessien kontrollointi. Täsmäviljelyn käyttöönotto ei ole kuitenkaan mainittavasti edennyt pienen innovatiivisen viljelijäjoukon ulkopuolelle ja täsmäviljelyssä tuotetun datan älykäs käyttö on edelleen hyvin vähäistä. (Verdouw et al. (2016))

Valtiollisille toimijoille IIoT:n ja sen mukana AIoT:n kehityksen tukemisen nähdään olevan kannattavaa niiden mahdollistaessa tehokkaamman kotimaisen tuotannon. Tämän tehok-kuuden lisäyksen ennustetaan kääntävän halvempien tuotantokustannusten maihin kohdistuvan teollisen tuotannon ulkoistamisen trendin. Lisäksi tehostuneen tuotannon ennustetaan johtavan ennennäkemättömään taloudellisen kasvuun seuraavan vuosikymmenen aikana. (Gilchrist (2016), 2, 222)

Elinkeinoelämän tutkimuslaitoksen (ETLA) raportissa Suomalaisen teollisen internetin taustoista kerrotaan Valtioneuvoston kanslian (VNK) nimenneen teollisen internetin yh-deksi kärkiteemoistaan (Ahlqvist et al. (2015), 3). Hallituksen kärkihankkeeseen “Digitaalisen liiketoiminnan kasvuympäristön rakentaminen” ensimmäisenä toimenpiteenä on “Edistetään esineiden internetiä” (Berner (2016), 2).

Tämän kärkihankkeen vaikutuksia suomalaisella maataloussektorilla käsitellään tarkem-min Kimmo Tammen opinnäytetyössä Digitalisaatio maatalouden B2B-liiketoiminnassa, missä kerrotaan hallitusohjelman huomioivan entistä datalähtöisempien toimintatapojen kehittämisen, tukien hakemisen helppouden sekä erilaiset kokeiluhankkeet rahoituksineen uusien liiketoimintamallien kehittämisessä. (Tammi (2016), 17)
Suomessa IoT -teknologioiden hyödyntämiseen suuntautuvia tuotteita ja palveluita on tarjolla ainakin Telialla Telia (2017) ja Digitalla Digita (2017), joiden tarjoamat tietoliikenneratkaisut ovat sovitettu IoT-teknologioiden vaatimuksiin. Molemmat toimijat kannustavat asiakkaitaan kehittämään uusia IoT -ratkaisuita ja tarjoavat niiden tueksi laajaa osaamistaan ja tietoliikenneverkkoaan. Laitteiden väliset verkkoyhteydet ovat haasteellisia monissa peltokasvintuotannon IoT-hankkeissa, mikä tekee tarjotuista palveluista mielenkiintoisia niiden tarjoaman kattavan langattoman tietoliikenneverkon takia. Kattava verkko mah-dollistaa ja helpottaa myös osaltaan kokeiluhankkeiden kasvua prototyypeistä tuotantojärjestelmiksi.

Verkkoyhteydet kuvaillaan “Internet of Things in agriculture”-kirjallisuuskatsauksessa myös yhtenä kolmesta IoT-arkkitehtuurien tasoista, muiden tasojen ollessa laitetaso sekä sovelustaso. Laitetasolla tapahtuvan sensorien, havaintolaitteiden ja ohjattavien laitteiden käyttöön tarvittavan verkkoliikenteen tapahtuessa verkkotasolla, lopuksi kokonaisuuden hallinnan ja tiedon analysoinnin tapahtuessa vastaavasti sovellustasolla. Katsauksessa eritellään myös AIoT:n tulevaisuuden haasteiksi hyvin erilaisten laitteiden yhteiskäytettävyys, tosielämän käytön skaalautuminen aikaisten omaksujien joukon ulkopuolelle, teknologiaratkaisujen kehittäminen sopimaan toimialan erityistarpeisiin sekä oikeiden käyttöym-päristöjen olosuhteisiin, luotettavien verkkoyhteyksien toiminnan varmistaminen myös etäisillä käyttöpaikoilla, energiatehokkaiden IoT-teknologioiden kehittäminen, kolmannen osapuolen tuottaman datan yhdistäminen data-analytiikkaan ja luotettavien tietoturvapalveluiden sekä datan omistajuuden varmistavien palveluiden kehittäminen. (Verdouw et al. (2016))

### 2.2 AIoT:n käytännön sovelluksia ja tutkimustuloksia
Tässä osassa käsitellään AIoT:n teknologiasovelluksia peltokasvituotannossa ja puutarhatuotannossa.

#### 2.2.1  AIoT-täsmäviljely peltokasvituotannossa
AIoT-täsmäviljelyn kokeiluhankkeilla ollaan yleiseti saavutettu hyviä kokemuksia. Erityisesti parantuneen resurssienhallinnan myötä käyttöönoton kustannukset saadaan yleensä katettua kohtuullisessa ajassa. Kokeiluhankkeet ovat edistäneet täsmäviljelyn sovelluksia niin pitkälle, että monet viljelijät ovat voineet ottaa ne laajamittaiseen käyttöön omassa tuotannossaan. (Buyya & Dastjerdi (2016), 137) Tärkeä osa peltokasvituotannon tehostamista on traktorien automaattiohjaus, joka tehostaa käytetyn peltopinta-alan käyttöä (DuBravac & Shapiro (2015), 133).

Samankaltaisista hyvistä kokemuksista sekä viljelytekniikoiden tehostamisesta automatisoinnilla kerrotaan lyhyesti Luonnonvarakeskuksen tiedotteessa jonka mukaan traktorin automaattiohjauksen avulla on saatu peltopinta-ala tehokkaampaan käyttöön ja kuljettajan työtaakkaa kevennettyä (Luonnonvarakeskus (2015–2015-06-16T07:06:50+02:00)). Samankaltaista työnjaosta mainitaan kirjassa “Industry 4.0: The Industrial Internet of Things”, jossa tutkijoiden hahmottelemassa tulevaisuudenkuvassa ihmisten työtä ei ole korvattu robottien tekemällä työllä vaan ihmisten ja robottien yhteistyöllä (Gilchrist (2016), 11).

Yksi sovellus peltokasvituotannossa sovellettavista AIoT-teknologioista on J. Tiusasen väitöskirjassa “Langattoman Peltotiedustelijan maanalainen toimintaympäristö ja laite-suunnittelu” kehitetty peltoon kaivettavien langattomien sensorilaitteiden toteutus jota tes-tattiin käytössä vuoden ajan (Tiusanen (2008), 4). Tämän kaltainen ratkaisu mahdollistaa maaperän tilan jatkuvan tarkkailun ilman erikseen tehtävää näytteidenottoa. Peltotiedustelijan kaupallinen sovellus on julkaistu PocketVenture -joukkorahoitusalustalla rahoitettavaksi Skelly (2015).

Toisenlainen jo laajassa käytössä oleva ratkaisu pellon maaperän tutkimiseen on maaperän EM-skannaus esim. Veris Technologies:in kehittämillä laitteilla. Skannaus tehdään ennen kasvukautta pellon maaperän koostumuksen selvittämiseksi ja skannauksessa tuotettua tietoa voidaan käyttää hyödyksi lannoituksen ja kastelun suunnittelussa, mutta mittauksia ei voida tehdä kesken kasvukautta sen vaatiessa ajoa työkoneella pellon yli Veris Technologies (2017).

Kirjallisuuskatsauksessa “Internet of Things in agriculture” peltotuotantoa (arable farming) käsittelevistä tutkimuksista suurin osa käsitteli kasvatusympäristön tarkkailua ja säätelyä edistyneiden IoT-laitteiden avulla. Toinen merkittävä aihealue oli yleinen informaation kerääminen pelloista kolmannen aihealuuen ollessa ennakoivat kasvumallit. Näitä lähestymismalleja käyttäen tutkittiin erityisen usein ekologiaan, luonnon monimuotoisuuteen ja luonnonvaroihin kuten veteen liittyviä aiheita. (Verdouw et al. (2016))

#### 2.2.2  AIoT-täsmäviljely puutarhatuotannossa
Peltokasvituotantoa paremmin IoT-teknologioiden käyttöönottoon on soveltunut puutarhatuotanto, jonka toimintaympäristöissä sensoreita voidaan asentaa helpommin ja jossa ympäristö on usein tarkemmin kontrolloitua kuin avoimilla pelloilla kuten kasvihuoneissa. Puutarhakasvien tuotannossa markkinahintainen tuotto viljelypinta-alaa kohti on huomattavasti suurempi kuin peltokasvituotannon vastaava ((Anon 2003), 36). Tästä voi päätellä, että automatisoidulla ja tarkemmin hallitulla resurssien käytöllä voidaan saavuttaa kilpailuetua erityisesti puutarhatuotannossa.

Puutarhatuotannossa selkeitä esimerkkejä uusien teknologioiden hyödyntämisestä ovat automatisoidut kasvihuoneet sekä ns. kasvitehtaat, joissa kasvien kasvatus tapahtuu mahdollisimman tarkasti kontrolloidussa ympäristössä ja yleensä keinovalossa. Luonteel-taan kasvitehtaat vastaavatkin yleistä käsitystä tehtaasta automaatiolinjoineen ja tarkkoine hallintalaitteineen ja ne sopivatkin tuotantoon tiheästi asutuissa kaupungeissa, joissa on pulaa viljelysmaasta mutta tarpeeksi kysyntää ruokakasveille investointien kattamiseksi. Esimerkkinä tällaisistä kasvihuonetoteutuksesta on New Yorkissa toimiva Gotham Greens:in suomalaisen Green Automationin kasvatustekniikalla toimiva kasvihuone (Öhrnberg (2016a)) (Öhrnberg (2016b)).

Näissä laitoksissa maatalouden esineiden internetin ja teollisuuden esineiden internetin käsitteiden raja on käytännössä hävinnyt. Kasvitehtaista on rakennettu monenlaisia prototyyppilaitoksia, joista yksi tunnettu esimerkki on avoimen lähdekoodin periaatteella toimiva MIT Media Lab:issa (Massachusetts Institute of Technology) alkunsa saanut MIT Open Agriculture Initiative (OpenAG):n päätuote “Food Computer” jonka kehitys alkoi osana MIT City FARM projektia. Termillä “Food Computer” tarkoitetaan kasvitehtaan omaista tietokoneohjattua ja kasvatusympäristöä jossa kasvien kasvua tarkkaillaan hyvin tarkasti. Kasvatusympäristön ominaisuuksia kuten hiilidioksidin määrää ilmassa, ilman lämpötilaa, säh-könjohtavuutta, kosteutta, juurialueiden lämpötilaa ja liuenneen hapen määrää voidaan tarkkailla ja säätää. Lisäksi kasteluveden / ravinneliuoksen tasoa, energian ja mineraalien kulutusta tarkkaillaan erilaisilla sensoreilla ja mittareilla. Mikä tahansa käyttökelpoiseksi havaittu ympäristömuuttujien yhdistelmä voidaan ottaa ns. kasvureseptiksi/ilmastoreseptiksi (climate recipe) tietylle kasville ja jakaa vapaasti käytettäväksi internetissä. Asiasta kiinnostuneille on tarjolla kirjasto standardireseptejä joita kasvattaja voi muunnella omiin tarpeisiinsa sopiviksi. (Goyal (2016), 22)

“Internet of Things in agriculture”-kirjallisuuskatsauksen viittaamista tutkimuksista kasvi-huonetuotannon osalta suurin osa käsittelee kasvuympäristön tarkkailua ja säätelyä, samaan tapaan kuin peltotuotannon alueella. Muita tutkimusaiheita olivat kasvihuoneen hal-lintajärjestelmät, energiankulutuksen hallinta ja Big Data. (Verdouw et al. (2016))

Kokonaan kasvitehtaisiin keskittyneessä kirjallisuuskatsauksessa “Editorial: Advances and Trends in Development of Plant Factories” käsitellään uusia tutkimustrendejä kuten älyk-käitä kasvatusympäristön mittausjärjestelmiä, kasvatusympäristön hallintaa ja optimointia, lääkeaineiden tuotantoa, geenitekniikkaa ja bakteerilannoitteita. Näistä selkeimmin IoT-teknologioihin perustuvat mittausjärjestelmät sekä kasvuympäristön hallinta ja optiminti, joista useissa tutkimuksissa ollaan saavutettu hyviä tuloksia erilaisilla valon hallinnan keinoilla. Tutkimuksissa ollaan kokeiltu muun muassa valon vuorokausirytmitystä, valaisun suuntaamista kasveihin myös kasvin alapuolelta, valon aallonpituuden säätelyä ja eri aallonpituudellisten valojen rytmitystä. Lisäksi on tutkittu yhdenväristen (monochromic) LEDien valaisun, korkean hiilidioksidipitoisuuden ja voimakkaan lannoittamisen yhdistelmää kasvatusympäristössä. (Luna-Maldonado et al. (2016))

Materiaalia etsittäessä on löytynyt pääasiassa uutisartikkelien kautta muutamia mielenkiintoisia kaupallisia toimijoita. Aiemmin mainittua MIT:n “Food Computer”:ia vastaavan kaltaisia kaupallisia tuotteita on tullut markkinoille useampien kasvuyritysten kuten Freight Farm:in Freight Farms (2017) ja Square Roots:in Square Roots (2017) toimesta. Näiden yritysten tuotteet ovat kontteihin rakennettuja pienikokoisia kasvitehtaita. Samantyyppisiä teknologiaratkaisuja myyvän ZipGrow:n tuotteet taas voidaan asentaa kasvihuoneisiin tai muihin sopiviin tiloihin Bright Agrotech (2017–2017-01-18T09:29:33+00:00). Suuremmassa teollisessa mittakaavassa toimivat mm. amerikkalainen AeroFarms Aerofarms (2017) sekä japanilaiset Spread Spread (2017) ja Mirai Mirai (2017), jotka operoivat suuria kasvitehtaita. Belgialainen Urban Crop taas toimii teknologiatuottajana, joka tarjoaa ratkaisuja sekä kontteihin rakennettaviin että tehdaskokoisiin kasvitehtaisiin Urban Crop Solutions (2017).

Suomalainen esimerkki tällaisesta kehityksestä on lapinjärveläisen Robbe’s Lilla Trädgård Oy:n ja Fujitsu Greenhouse Technology Finland Oy:n yhteishankkeena toteuttama kasvitehdas Fujitsu (2016) Schäfer (2016), josta uutisoitiin mm. Maaseudun tulevaisuus -lehden verkkosivuilla Ala-Siurua (2016) Schäfer (2016).

Aamulehden jutussa ‘Erikoistutkija vesiviljelystä: “Kasvitehdasbuumi käy maailmalla kuu-mana”’ kasvitehdas-konseptia tutkinut erikoistutkija, dosentti Kari Jokinen kertoo “Kasvi-tehdasbuumi käy maailmalla kuumana. Japanissa on satakunta tehdasta. Mittakaava on maaseudun isoista laitoksia tokiolaisen ravintolan omaan salaattituotantoon.” Suojanen (2016–2016-04-10T08:24:00+00:00).

## 3    Tutkimuksen tavoitteet
Tässä osiossa kuvaillaan tutkimusongelmat ja työhypoteesit.

### 3.1 Tutkimusongelmat
Tutkimuksessa haetaan vastauksia kahteen tutkimusongelmaan, jotka alaongelmineen ovat:

I) Miten kasvintuotannossa hyödynnetään IoT-teknologioita? 

- Miten peltotuotannon ja puutarhatuotannon erot vaikuttavat IoT-teknologioiden sovelluksiin? 
- Minkä tyyppiset sovellukset tulevat tutkimusmateriaalissa selkeimmin esille, eli millaisista sovelluksista ja teknologioista kirjoitetaan ja tehdään tutkimusta tällä hetkellä?

II) Millaisia IoT-teknologioita haastateltavalla toimijalla on joko käytettävissään tai millai-sista hän on tietoinen?

–   Mitä vaikutuksia niillä on tuotantoon ja/tai työntekoon?
–   Millaisia kokemuksia niistä haastateltavalla on?
–   Millaisia muita sovelluksia haastateltava tuntee tai tietää?
–   Millainen käsitys haastateltavalla on edelllä mainituista sovelluksista (sekä käyttämistään että tietämistään)?
–   Millaisia toiveita tai tarpeita haastateltavalla on IoT-teknologioille?

3.2 Työhypoteesit:
Tutkimusongelman I vastaukseksi odotetaan saatvaksi teoriaosuudessa käytettyjen materiaalien mukaisen kuvailun. Tutkimusongelman II vastaukseksi odotetaan saatavaksi aikaisempien keskustelujen perusteella vastaukseksi Valtran tuotevalikoiman mukaisia tek-nologiaratkaisuita, joissa hyödynnetään ainakin automaattiohjausta ja maaperän rakenteen kartoitusta viljelyn suunnittelussa. 

Todennäköistä on, että näillä teknologioilla saavu-tetut hyödyt ovat linjassa teoriaosuudessa käsiteltyjen löydösten kanssa. Epävarmaa on voidaanko työkoneista saada tietoa analysoitavaksi ja hyödynnettäväksi muualla eli voidaanko niitä edes pitää IoT-teknologioina. Ei ole tiedossa, millaisia tarpeita tai toiveita haastateltava on tiedostanut IoT-teknologioita kohtaan.

## 4    Tutkimusmenetelmät
Tutkimusmenetelmiksi on valittu kummallekin tutkimusongelmalle omansa niiden soveltuvuuden perusteella: Tutkimusongelma I:een perehdytään kirjallisuuskatsauksella ja tutkimusongelma II:een yksilöteemahaastattelulla.

Kirjallisuuskatsaus soveltuu jo olemassaolevasta materiaalista kokonaiskuvan ja yleisten ominaisuuksien hahmottamiseen ja raportointiin, kun taas yksilöteemahaastattelulla voidaan kohtuulisen vapaamuotoisesti hahmottaa kuva sekä haastateltavan yleisitä kokemuksista että tarkemmin tutkimuksen aiheeseen liittyvistä seikoista.

## 5    Tutkimusaikataulu
Tutkimus/opinnäytetyö kirjoitetaan tämän tutkimussuunnitelman pohjalta lisäten haastattelujen määrää ja syventäen teoriataustan keskeisiä osa-alueita. Tutkimus- ja kirjoitustyö tehdään 1.6.-13.8.2017 välisenä aikana.

## 6    Tuloksen hyväksikäyttömahdollisuudet
Tutkimustuloksia ja tutkimuksen aikana kertyneitä kokemuksia voidaan hyödyntää arvioitaessa aiheen soveltuvuutta tekijän opinnäytetyön aiheeksi.

Jatkotutkimukselle on todennäköisesti löydetyn materiaalin laajuuden ja AIoT:n mielenkiintoisen kehitysvaiheen perusteella tarvetta ja motivaatio, mutta tutkimuksen rajaus ja tutkimuksen sovittaminen koulutusohjelmaan tavoitteisiin tulee tehdä huolella.
 
##7 Lähteet
Aerofarms, 2017. AeroFarms is on a mission to transform agriculture. AeroFarms. Availa-ble at: http://aerofarms.com/ [Accessed March 13, 2017].

Ahlqvist, T. et al., 2015. Suomalainen teollinen internet – haasteesta mahdollisuudeksi: Taustoittava kooste, Available at: https://www.etla.fi/wp-content/uploads/ETLA-Raportit-Reports-42.pdf [Accessed February 9, 2016].

Ala-Siurua, M., 2016. Fujitsu mukaan ruuantuotantoon – Suomeen perustetaan kokeilu-kasvihuone. Maaseudun Tulevaisuus. Available at: http://www.maaseuduntulevaisuus.fi/maatalous/fujitsu-mukaan-ruuantuotantoon-suomeen-perustetaan-kokeilukasvihuone-1.146938 [Accessed March 13, 2017].

Alexandratos, N. & Bruinsma J., 2012. World agriculture towards 2030/2050: The 2012 revision, Rome: FAO.

Anon, 2003. Selvitys Suomen kastelutilanteesta – esimerkkialueena Varsinais-Suomi, Suomen ympäristökeskus. Available at: http://hdl.handle.net/10138/40552 [Accessed March 11, 2017].

Berner, A., 2016. Kärkihanke 2 - toimenpiteet. Rakennetaan digitaalisen liiketoiminnan kasvuympäristö. Available at: http://valtioneuvosto.fi/hallitusohjelman-toteutus/digitalisaatio/karkihanke2 [Accessed April 13, 2017].

Bright Agrotech, 2017–2017-01-18T09:29:33+00:00. Appropriate Vertical Farming Tech-nology - Powered by ZipGrow™. Bright Agrotech. Available at: https://brightagrotech.com/technology/ [Accessed March 13, 2017].

Buyya, R. & Dastjerdi, A., 2016. Internet of Things: Principles and Paradigms, Elsevier Science. Available at: https://books.google.fi/books?id=_k11CwAAQBAJ.

Digita, 2017. IoT-ratkaisut ja palvelut. Digita mahdollistaa. Available at: https://digitamahdollistaa.fi/internet-of-things/ [Accessed March 11, 2017].

DuBravac, S. & Shapiro, G., 2015. Digital Destiny: How the New Age of Data Will Trans-form the Way We Work, Live, and Communicate, Regnery Publishing. Available at: https://books.google.fi/books?id=E86DBQAAQBAJ.

Freight Farms, 2017. Leafy Green Machine™. Freight Farms. Available at: https://www.freightfarms.com/ [Accessed April 13, 2017].

Fujitsu, 2016. Fujitsu Launches Company in Finland to Produce and Sell Vegetables Year-Round with Artificial-Light Plant Factory. Press Releases. Available at: http://www.fujitsu.com/global/about/resources/news/press-releases/2016/1128-01.html [Accessed March 14, 2017].

Gilchrist, A., 2016. Industry 4.0: The Industrial Internet of Things, Apress. Available at: https://books.google.fi/books?id=YuOODAAAQBAJ.

Goyal, N.K., 2016. Hydrobase: An IoT Gardening Application, San Jose State University. Available at: http://scholarworks.sjsu.edu/etd_projects/503 [Accessed March 11, 2017].

Luna-Maldonado, A.I., Vidales-Contreras, J.A. & Rodríguez-Fuentes, H., 2016. Editorial: Advances and Trends in Development of Plant Factories. Frontiers in Plant Science, 7. Available at: http://journal.frontiersin.org/article/10.3389/fpls.2016.01848/abstract [Acces-sed March 12, 2017].

Luonnonvarakeskus, 2015–2015-06-16T07:06:50+02:00. Asiakkaan ääni: Automaatio yleistyy pelloilla. Luonnonvarakeskus. Available at: https://www.luke.fi/asiakkaan-aani-automaatio-yleistyy-pelloilla/ [Accessed March 9, 2017].

Mirai, 2017. Mirai Co., Ltd. Mirai Co. homepage EN. Available at: http://miraigroup.jp/en/ [Accessed April 13, 2017].

Monbiot, G., 2015. We’re treating soil like dirt. It’s a fatal mistake, as our lives depend on it. The Guardian: Opinion. Available at: https://www.theguardian.com/commentisfree/2015/mar/25/treating-soil-like-dirt-fatal-mistake-human-life [Accessed March 10, 2017].

Schäfer, H., 2016. Fujitsun täysautomatisoitu kasvihuone etenee - tuotanto käynnistyy ensi vuonna. Maaseudun Tulevaisuus. Available at: http://www.maaseuduntulevaisuus.fi/maatalous/fujitsun-t%C3%A4ysautomatisoitu-kasvihuone-etenee-tuotanto-k%C3%A4ynnistyy-ensi-vuonna-1.170177 [Accessed March 13, 2017].

Skelly, J., 2015. Soil Scout - PocketVenture. PocketVenture Soil Scout Crowd Funding. Available at: http://www.pocketventure.com/en/projects/soil-scout [Accessed April 13, 2017].

Spread, 2017. SPREAD Co., Ltd. Spread Co. homepage EN. Available at: http://spread.co.jp/en/ [Accessed March 14, 2017].

Square Roots, 2017. Square Roots. Square Roots Home. Available at: http://www.squarerootsgrow.com/ [Accessed April 13, 2017].

Suojanen, S., 2016–2016-04-10T08:24:00+00:00. Erikoistutkija vesiviljelystä: “Kasviteh-dasbuumi käy maailmalla kuumana”. Aamulehti. Available at: http://www.aamulehti.fi/kotimaa/erikoistutkija-vesiviljelysta-kasvitehdasbuumi-kay-maailmalla-kuumana-23570184/ [Accessed March 13, 2017].

Tammi, K., 2016. DIGITALISAATIO MAATALOUDEN B2B-LIIKETOIMINNASSA. Turku: Turun ammattikorkeakoulu. Available at: http://urn.fi/URN:NBN:fi:amk-201605239138 [Ac-cessed March 11, 2017].

Telia, 2017. IoT-ratkaisut - IoT-ratkaisut - Tietoverkot - Tuotteet - Yrityksille. Kaikki yrityk-sen IoT-ratkaisut. Available at: https://www.telia.fi/yrityksille/tuotteet/liittymat/iot-ratkaisut/kaikki-ratkaisut [Accessed April 13, 2017].

Tiusanen, J., 2008. Langattoman peltotiedustelijan maanalainen toim- intaymp ̈arist ̈o ja laitesuunnittelu. Helsinki: University of Helsinki. Available at: http://urn.fi/URN:ISBN:978-952-10-4360-4 [Accessed March 14, 2017].

Urban Crop Solutions, 2017. Urban Crop Solutions. Urban Crop Solutions homepage. Available at: https://urbancropsolutions.com [Accessed April 13, 2017].

Verdouw, C., Wolfert, J. & Tekinerdogan, B., 2016. Internet of Things in agriculture. CAB Reviews: Perspectives in Agriculture, Veterinary Science, Nutrition and Natural Resour-ces, 11. Available at: http://edepot.wur.nl/403060.

Veris Technologies, 2017. What drives soil EC, drives productivity. Veris Technologies / Soil EC. Available at: http://www.veristech.com/the-soil/soil-ec [Accessed March 12, 2017].

Öhrnberg, P., 2016a. 30-kertainen tuotto avomaahan verrattuna. Kauppalehti: Uutiset. Available at: http://www.kauppalehti.fi/uutiset/30-kertainen-tuotto-avomaahan-verrattuna/NwUMfsJ6 [Accessed March 13, 2017].

Öhrnberg, P., 2016b. Suomalaistekniikka tuottaa satoa New Yorkin kattokasvihuoneissa. Kauppalehti: Uutiset. Available at: http://www.kauppalehti.fi/uutiset/suomalaistekniikka-tuottaa-satoa-new-yorkin-kattokasvihuoneissa/Cxv4itmX?ref=email:d031 [Accessed March 13, 2017].
