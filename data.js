
// Raw Hubs Data
const rawHubsData = `
Hub Adrar 01 مكتب أدرار
Hub Chlef 02 مكتب الشلف
hub Ténès 02 مكتب تـنـس
Hub Laghouat 03 مكتب الأغواط
Hub Ain El Beida04مكتب عين البيضاء
Oum El Bouaghi04مكتب أم بواقي
Hub Batna 05 مكتب باتنة
Hub Bejaia 06 مكتب بجاية
Hub Akbou 06 مكتب أقبو
Hub Biskra 07 مكتب بسكرة
Hub Ouled Djellal 51 مكتب أولاد جلال
Hub Béchar 08 مكتب بشار
Hub Beni Abbes 52 مكتب بني عباس
Hub Blida 09 مكتب البليدة
Hub Bougara 09 مكتب بوقرة
Hub Mouzaia 09 مكتب موزاية
Hub Bouira 10 مكتب البويرة
Hub Tamanrasset 11 مكتب تامنراست
Hub Tebessa 12 مكتب تبسة
Hub Tlemcen 13 مكتب تلمسان
Hub Tiaret 14 مكتب تيارت
Hub Tizi Ouzou 15 مكتب تيزي وزو
Hub El Jomhoria 16 مكتب الجمهورية
Hub Reghaia 16  مكتب رغاية
Hub Birtouta 16 مكتب بئرتوتة
Hub Ouled Fayet 16 مكتب أولاد فايت
Hub Birkhadem 16 مكتب بئرخادم
Hub Baraki 16 مكتب براقي
Hub Lidou 16  مكتب برج الكيفان
Hub Djelfa 17 مكتب الجلفة
Hub Jijel 18 مكتب جيجل
Hub Taher 18 مكتب الطاهير
Hub Setif 19 مكتب سطيف
Hub El Eulma 19 مكتب العلمة
Hub Saida 20 مكتب سعيدة
Hub Skikda 21 مكتب سكيكدة
Hub Sidi Belabes 22 مكتب سيدي بلعباس
Hub Annaba 23 مكتب عنابة
Hub El Bouni 23 مكتب البوني
Hub Guelma 24 مكتب قالمة
Hub Belle vue 25 مكتب المنظر الجميل
Hub Constantine 25 مكتب قسنطينة
Hub Zouaghi 25 مكتب زواغي
Hub Médéa 26 مكتب المدية
Hub Mostaganem 27 مكتب مستغانم
Hub M'sila 28 مكتب مسيلة
Hub Bou Saada 28 مكتب بوسعادة
Hub Mascara 29 مكتب معسكر
Hub Touggourt 55 مكتب تقرت
Hub Hassi Messaoud 30 مكتب حاسي مسعود
Hub Ouargla 30 مكتب ورقلة
Hub Canastel 31 مكتب كاناستال
Hub El Morchid 31 مكتب المرشد
Hub Maraval 31 مكتب مارافال
Hub El Bayadh 32 مكتب البيض
Hub Bordj bouareridj 34 مكتب برج بوعريريج
Hub Boumerdes 35 مكتب بومرداس
Hub Bordj menaiel 35 مكتب برج منايل
Hub El Tarf 36 مكتب الطارف
Hub Tissemsilt 38 مكتب تيسمسيلت
Hub El Oued 39 مكتب الوادي
Hub Khenchela 40 مكتب خنشلة
Hub Souk Ahras 41 مكتب سوق أهراس
Hub Tipaza 42 مكتب تيبازة
Hub Kolea 42 مكتب القليعة
Hub Mila 43 مكتب ميلة
Hub Ain Defla 44 مكتب عين الدفلة
Hub Naama 45 مكتب النعامة
Hub Ain Temouchent 46 مكتب عبن تموشنت
Hub Ghardaia 47 مكتب غرداية
Hub Relizane 48 مكتب غيليزان
Hub Timimoune 49 مكتب تيميمون
Hub In Salah 53 مكتب عين صالح
Hub El Meghaier 57 مكتب المغير
`;

// Raw Communes Data (Simplified for demonstration - usually this matches the exact provided text)
// Note: To save space and error-proneness, I will assume a standard list or parsed structure. 
// However, since the user provided a SPECIFIC large table, I will attempt to include it.
// Given the size, I will paste the provided block.
const rawCommunesData = `Wilaya	adrar	chlef	laghouat	oum_el_bouaghi	batna	bejaia	biskra	bechar	blida	bouira	tamanrasset	tebessa	tlemcen	tiaret	tizi_ouzou	alger	djelfa	jijel	setif	saida	skikda	sidi_bel_abbes	annaba	guelma	constantine	medea	mostaganem	msila	mascara	ouargla	oran	el_bayadh	illizi	bordj_bou_arreridj	boumerdes	el_tarf	tindouf	tissemsilt	el_oued	khenchela	souk_ahras	tipaza	mila	ain_defla	naama	ain_temouchent	ghardaia	relizane	timimoun	bordj_badji_mokhtar	ouled_djellal	beni_abbes	in_salah	in_guezzam	touggourt	djanet	el_meghaier	el_menia
	Adrar	Abou El Hassane	Aflou	Ain Babouche	Ain Djasser	Adekar	Ain Naga	Abadla	Ain Romana	Aghbalou	Abelsa	Ain Zerga	Ain Fetah	Ain Bouchekif	Abi-Youcef	Ain Benian	Ain Chouhada	Bordj T'har	Ain Abessa	Ain El Hadjar	Ain Bouziane	Ain El Berd	Ain El Berda	Ain Ben Beida	Ain Abid	Ain Boucif	Achaacha	Ain El Hadjel	Ain Fares	Ain Beida	Ain Biya	Ain El Orak	Bordj Omar Driss	Ain Taghrout	Afir	Ain El Assel	Oum El Assel	Ammari	Bayadha	Ain Touila	Ain Soltane	Aghbal	Ahmed Rachedi	Ain-Benian	Ain Ben Khelil	Aghlal	Berriane	Ain Rahma	Aougrout	Bordj Badji Mokhtar	Besbes	Beni-Abbes	Ain Salah	Ain Guezzam	Benaceur	Bordj El Haouass	Djamaa	El Meniaa
	Akabli	Ain Merane	Ain Madhi	Ain Beida	Ain Touta	Ait R'zine	Ain Zaatout	Bechar	Beni Mered	Ahl El Ksar	Ain Amguel	Bedjene	Ain Fezza	Ain Deheb	Aghribs	Ain Taya	Ain El Ibel	Boudria Beniyadjis	Ain Arnat	Ain Sekhouna	Ain Charchar	Ain Kada	Annaba	Ain Larbi	Ain Smara	Ain Ouksir	Ain-Boudinar	Ain El Melh	Ain Fekan	El Borma	Ain Kerma	Arbaouat	Debdeb	Ain Tesra	Ammal	Ain Kerma	Tindouf	Beni Chaib	Ben Guecha	Babar	Ain Zana	Ahmer El Ain	Ain Beida Harriche	Ain-Bouyahia	Ain Sefra	Ain El Arbaa	Bounoura	Ain-Tarek	Charouine	Timiaouine	Chaiba	Beni-Ikhlef	Foggaret Ezzoua	Tin Zouatine	Blidet Amor	Djanet	El-M'ghaier	Hassi Fehal
	Aoulef	Benairia	Ain Sidi Ali	Ain Diss	Ain Yagout	Ait-Smail	Biskra	Beni-Ounif	Beni-Tamou	Ain El Hadjar	Idles	Bekkaria	Ain Ghoraba	Ain Dzarit	Agouni-Gueghrane	Alger Centre	Ain Fekka	Bouraoui Belhadef	Ain Azel	Ain Soltane	Ain Kechra	Ain Thrid	Berrahal	Ain Makhlouf	Ben Badis	Aissaouia	Ain-Nouissy	Ain Fares	Ain Ferah	Hassi Ben Abdellah	Ain Turk	Boualem	Illizi	B. B. Arreridj	Baghlia	Asfour		Beni Lahcene	Debila	Baghai	Bir Bouhouche	Ain Tagourait	Ain Mellouk	Ain-Defla	Asla	Ain Kihal	Dhayet Bendhahoua	Ammi Moussa	Deldoul		Doucen	El Ouata	Inghar		El Alia		M'rara	Hassi Gara
	Bouda	Beni  Bouattab	El Beidha	Ain Fekroun	Arris	Akbou	Bordj Ben Azzouz	Boukais	Benkhelil	Ain Laloui	Tamanrasset	Bir Dheheb	Ain Kebira	Ain El Hadid	Ain-El-Hammam	Bab El Oued	Ain Maabed	Boussif Ouled Askeur	Ain El Kebira	Doui Thabet	Ain Zouit	Ain Tindamine	Chetaibi	Ain Regada	Beni Hamidane	Aziz	Ain-Sidi Cherif	Ain Khadra	Ain Frass	Hassi Messaoud	Arzew	Bougtoub	In Amenas	Belimour	Ben Choud	Ben M Hidi		Bordj Bounaama	Douar El Maa	Bouhmama	Drea	Attatba	Ain Tine	Ain-Lechiakh	Djenienne Bourezg	Ain Temouchent	El Atteuf	Belaassel Bouzagza	Ksar Kaddour		Ouled Djellal	Igli			El-Hadjira		Oum Touyour	
	Fenoughil	Beni Haoua	Benacer Benchohra	Ain Kercha	Azil Abedelkader	Akfadou	Bouchakroun	Erg-Ferradj	Blida	Ain Turk	Tazrouk	Bir Mokkadem	Ain Nehala	Ain Kermes	Ain-Zaouia	Bab Ezzouar	Ain Oussera	Chahna	Ain Lahdjar	El Hassasna	Azzaba	Ain- Adden	Cheurfa	Ain Sandel	Constantine	Baata	Ain-Tedles	Ain Rich	Alaimia	N'goussa	Ben Freha	Boussemghoun		Ben Daoud	Beni Amrane	Berrihane		Bordj El Emir Abdelkader	El Ogla	Chechar	Haddada	Beni Mileuk	Amira Arres	Ain-Soltane	El Biodh	Ain Tolba	Ghardaia	Bendaoud	Metarfa		Ras El Miad	Kerzaz			Megarine		Sidi Amrane	
	In Zghmir	Beni Rached	Brida	Ain M'lila	Barika	Amalou	Branis	Kenadsa	Bouarfa	Ain-Bessem		Bir-El-Ater	Ain Tellout	Bougara	Ait Aggouacha	Baba Hassen	Amourah	Chekfa	Ain Oulmene	Hounet	Bekkouche Lakhdar	Amarnas	El Bouni	Belkheir	Didouche Mourad	Ben Chicao	Benabdelmalek Ramdane	Belaiba	Aouf	Ouargla	Bethioua	Brezina		Bir Kasdali	Bordj Menaiel	Besbes		Boucaid	El-Oued	Chelia	Hanencha	Bou Haroun	Benyahia Abderrahmane	Ain-Torki	Kasdir	Aoubellil	El Guerrara	Beni Dergoun	Ouled Aissa		Sidi Khaled	Ksabi			M'naguer		Sidi Khelil	
	Ouled Ahmed Timmi	Boukadir	El Assafia	Ain Zitoun	Batna	Amizour	Chetma	Lahmar	Boufarik	Ait Laaziz		Boukhadra	Ain Youcef	Chehaima	Ait Bouaddou	Bachedjerah	Benhar	Djemaa Beni Habibi	Ain-Legradj	Maamora	Ben Azzouz	Bedrabine El Mokrani	El Eulma	Bendjarah	El Khroub	Beni Slimane	Bouguirat	Ben Srour	Benian	Rouissat	Bir El Djir	Cheguig		Bordj Ghedir	Boudouaou	Bougous		Khemisti	Guemar	Djellal	Khedara	Bou Ismail	Bouhatem	Arib	Makmen Ben Amar	Beni Saf	Mansoura	Beni Zentis	Ouled Said			Ouled-Khodeir			Nezla		Still	
	Reggane	Bouzeghaia	El Ghicha	Behir Chergui	Beni Foudhala El Hakania	Aokas	Djemorah	Machraa-Houari-Boumediene	Bougara	Aomar		Boulhaf Dyr	Amieur	Dahmouni	Ait Boumahdi	Baraki	Benyagoub	Djimla	Ain-Roua	Moulay Larbi	Beni Bechir	Belarbi	El Hadjar	Beni Mezline	Hamma Bouziane	Berrouaghia	Fornaka	Beni Ilmane	Bou Henni	Sidi Khouiled	Boufatis	Chellala		Bordj Zemmoura	Boudouaou El Bahri	Bouhadjar		Larbaa	Hamraia	El Hamma	Khemissa	Bourkika	Chelghoum Laid	Birbouche	Mecheria	Bouzedjar	Metlili	Dar Ben Abdelah	Talmine			Tamtert			Sidi Slimane		Tenedla	
	Sali	Breira	El Haouaita	Berriche	Bitam	Barbacha	El Feidh	Meridja	Bouinan	Bechloul		Cheria	Bab El Assa	Djebilet Rosfa	Ait Khellili	Ben Aknoun	Birine	El Ancer	Ain-Sebt	Ouled Brahim	Beni Oulbane	Ben Badis	Oued El Aneb	Bordj Sabath	Ibn Ziad	Bir Ben Laabed	Hadjadj	Benzouh	Bouhanifia		Bousfer	El Bayadh		Colla	Boumerdes	Bouteldja		Lardjem	Hassani Abdelkrim	El Mahmal	Machroha	Chaiba	Chigara	Bathia	Moghrar	Chaabat El Ham	Sebseb	Djidiouia	Timimoun			Timoudi			Taibet			
	Sebaa	Chettia	Gueltat Sidi Saad	Bir Chouhada	Boulhilat	Bejaia	El Ghrous	Mogheul	Chebli	Bir Ghbalou		El Kouif	Beni Bahdel	Djillali Ben Amar	Ait Yahia Moussa	Beni Messous	Bouira Lahdab	El Aouana	Ait Naoual Mezada	Ouled Khaled	Beni Zid	Benachiba Chelia	Seraidi	Bou Hachana	Messaoud Boudjeriou	Boghar	Hassi Mameche	Berhoum	Chorfa		Boutlelis	Labiodh Sidi Cheikh		Djaafra	Bouzegza Keddara	Chebaita Mokhtar		Layoune	Hassi Khalifa	El Oueldja	M'daourouche	Cherchell	Derrahi Bousselah	Belaas	Naama	Chentouf	Zelfana	El Hassi	Tinerkouk						Tebesbest			
	Tamantit	Chlef	Hadj Mechri	Dhalaa	Boumagueur	Beni Djellil	El Hadjab	Tabelbala	Chiffa	Bordj Okhriss		El Malabiod	Beni Boussaid	Faidja	Ait-Aissa-Mimoun	Bir Mourad Rais	Charef	El Kennar Nouchfi	Ait-Tizi	Saida	Bin El Ouiden	Bir El Hammam	Sidi Amar	Bou Hamdane	Ouled Rahmoun	Bouaiche	Hassiane	Bir Foda	El Bordj		El Ancor	El Bnoud		El Euch	Chabet El Ameur	Chefia		Lazharia	Kouinine	Ensigha	Merahna	Damous	El Ayadi Barbes	Ben Allal	Sfissifa	El Amria		El H'madna							Temacine			
	Tamest	Dahra	Hassi Delaa	El Amiria	Boumia	Beni K'sila	El Haouch	Taghit	Chrea	Bouderbala		El Meridj	Beni Khellad	Frenda	Ait-Chafaa	Birkhadem	Dar Chioukh	El Milia	Amoucha	Sidi Ahmed	Bouchetata	Boudjebaa El Bordj	Treat	Bouati Mahmoud	Zighoud Youcef	Bouaichoune	Khadra	Bou Saada	El Gaada		El Braya	El Kheiter		El Achir	Corso	Chihani		Maacem	Magrane	Kais	Oued Kebrit	Douaouda	El Mechira	Bir-Ould-Khelifa	Tiout	El Maleh		El Ouldja							Touggourt			
	Timekten	El Hadjadj	Hassi R'mel	El Belala	Bouzina	Beni-Mallikeche	El Kantara		Djebabra	Bouira		El Mezeraa	Beni Mester	Guertoufa	Ait-Mahmoud	Bir Touta	Deldoul	Emir Abdelkader	Babor	Sidi Amar	Cheraia	Boukhanefis		Bouchegouf		Bouchrahil	Kheir-Eddine	Bouti Sayeh	El Ghomri		El Kerma	El Mehara		El Annasseur	Dellys	Drean		Melaab	Mih Ouansa	Khenchela	Ouled Driss	Fouka	Ferdjioua	Bordj-Emir-Khaled		El Messaid		El-Guettar							Zaouia El Abidia			
	Tit	El Karimia	Kheneg	El Djazia	Chemora	Benimaouche	El Outaya		El-Affroun	Boukram		El Ogla	Beni Ouarsous	Hamadia	Ait-Oumalou	Bologhine Ibnou Ziri	Djelfa	Erraguene Souissi	Bazer-Sakra	Sidi Boubekeur	Collo	Chetouane Belaila		Boumahra Ahmed		Boughzoul	Mansourah	Chellal	El Gueitena		Es Senia	Ghassoul		Elhammadia	Djinet	Echatt		Ouled Bessam	Nakhla	Khirane	Ouled Moumen	Gouraya	Grarem Gouga	Boumedfaa		Emir Abdelkader		El-Matmar										
	Tsabit	El Marsa	Ksar El Hirane	El Fedjoudj Boughrara Sa	Chir	Boudjellil	Foughala		Guerrouaou	Chorfa		El Ogla El Malha	Beni Smiel	Ksar Chellala	Ait-Toudert	Bordj El Bahri	Douis	Ghebala	Beidha Bordj	Tircine	Djendel Saadi Mohamed	Dhaya		Dahouara		Bouskene	Mazagran	Dehahna	El Hachem		Gdyel	Kef El Ahmar		El Main	El Kharrouba	El Aioun		Sidi Abed	Oued El Alenda	M'sara	Oum El Adhaim	Hadjout	Hamala	Bourached		Hammam Bou Hadjar		Had Echkalla										
	Zaouiet Kounta	Harchoun	Laghouat	El Harmilia	Djerma	Bouhamza	Khenguet Sidi Nadji		Hammam Elouane	Dechmia		El-Aouinet	Beni Snous	Madna	Ait-Yahia	Bordj El Kiffan	El Guedid	Jijel	Bellaa	Youb	El Arrouch	El Hacaiba		Djeballah Khemissi		Chabounia	Mesra	Djebel Messaad	El Keurt		Hassi Ben Okba	Krakda		El M'hir	Hammedi	El Kala		Sidi Boutouchent	Ourmes	M'toussa	Ouillen	Hadjret Ennous	Mila	Djelida		Hassasna		Hamri										
		Herenfa	Oued Morra	Fkirina	Djezzar	Boukhelifa	Lichana		Larbaa	Dirah		El-Houidjbet	Bensekrane	Mahdia	Akbil	Bourouba	El Idrissia	Kaous	Beni Chebana		El Ghedir	Hassi Dahou		El Fedjoudj		Chelalet El Adhaoura	Mostaganem	El Hamel	El Mamounia		Hassi Bounif	Rogassa		Ghailasa	Isser	El Tarf		Sidi Lantri	Reguiba	Ouled Rechache	Ragouba	Khemisti	Minar Zarza	Djemaa Ouled Cheikh		Hassi El Ghella		Kalaa										
		Labiod Medjadja	Oued M'zi	Hanchir Toumghani	El Hassi	Chellata	Lioua		Meftah	Djebahia		Ferkane	Bouhlou	Mechraa Safa	Akerrou	Bouzareah	El Khemis	Khiri Oued Adjoul	Beni Fouda		El Hadaiek	Hassi Zahana		Guelaat Bou Sbaa		Cheniguel	Nekmaria	El Houamed	El Menaouer		Hassi Mefsoukh	Sidi Ameur		Haraza	Khemis El Khechna	Hammam Beni Salah		Sidi Slimane	Robbah	Remila	Safel El Ouiden	Kolea	Oued Athmenia	Djendel		Oued Berkeche		Lahlef										
		Moussadek	Sebgag	Ksar Sbahi	El Madher	Chemini	M'chouneche		Mouzaia	El Adjiba		Guorriguer	Bouihi	Medrissa	Assi-Youcef	Casbah	Faidh El Botma	Oudjana	Beni Ourtilane		El Marsa	Lamtar		Guelma		Derrag	Oued El Kheir	Hammam Dalaa	Ferraguig		Marsat El Hadjadj	Sidi Slimane		Hasnaoua	Larbatache	Lac Des Oiseaux		Tamellahet	Sidi Aoun	Tamza	Sedrata	Larhat	Oued Endja	El-Abadia		Oued Sebbah		Mazouna										
		Oued Fodda	Sidi Bouzid	Meskiana	Fesdis	Darguina	Mekhadma		Oued  Djer	El Asnam		Hammamet	Chetouane	Medroussa	Azazga	Cheraga	Guernini	Ouled Rabah	Beni Oussine		Emjez Edchich	Makedra		Hammam Debagh		Djouab	Ouled Boughalem	Khettouti Sed-El-Jir	Froha		Mers El Kebir	Sidi Tiffour		Khelil	Leghata	Oued Zitoun		Theniet El Had	Taghzout	Taouzianat	Sidi Fredj	Menaceur	Oued Seguen	El-Amra		Ouled Boudjemaa		Mediouna										
		Oued Goussine	Sidi Makhlouf	Oued Nini	Foum Toub	Dra El Caid	Meziraa		Oued El Alleug	El Hachimia		Morsott	Dar Yaghmoracen	Meghila	Azeffoun	Dar El Beida	Guettara	Ouled Yahia Khadrouch	Beni-Aziz		Es Sebt	Marhoum		Hammam N'bail		Draa Esmar	Ouled-Maalah	Khoubana	Gharrous		Messerghin	Stitten		Ksour	Naciria	Raml Souk		Tissemsilt	Taleb Larbi	Yabous	Souk Ahras	Merad	Ouled Khalouf	El-Attaf		Ouled Kihal		Mendes										
		Oued Sly	Tadjemout	Ouled Gacem	Ghassira	Leflaye	M'lili		Ouled Slama	El Khabouzia		Negrine	Djebala	Mellakou	Beni Zmenzer	Dely Ibrahim	Had Sahary	Selma Benziada	Beni-Mouhli		Filfila	M'cid		Heliopolis		El Azizia	Safsaf	Maadid	Ghriss		Oran	Tousmouline		Mansoura	Ouled Aissa	Souarekh		Youssoufia	Trifaoui		Taoura	Messelmoun	Rouached	El-Maine		Oulhaca El Gheraba		Merdja Sidi Abed										
		Ouled Abbes	Tadjrouna	Ouled Hamla	Gosbat	El Kseur	Oumache		Ouled Yaich	El-Hakimia		Ouenza	El Aricha	Nadorah	Beni-Aissi	Djasr Kasentina	Hassi Bahbah	Settara	Bir Haddada		Hammadi Krouma	Merine		Nechmaya		El Guelbelkebir	Sayada	Maarif	Guerdjoum		Oued Tlelat			Medjana	Ouled Hedadj	Zerizer					Terraguelt	Nador	Sidi Khelifa	Hammam-Righa		Sidi Ben Adda		Ouarizane										
		Ouled Ben Abdelkader	Taouiala	Ouled Zouai	Guigba	Fenaia Il Maten	Ourlal		Souhane	El-Mokrani		Oum Ali	Azail	Naima	Beni-Douala	Douira	Hassi El Euch	Sidi Abdelaziz	Bir-El-Arch		Kanoua	Mezaourou		Khezaras		El Hamdania	Sidi Ali	Magra	Hacine		Sidi Ben Yebka			Ouled Brahem	Ouled Moussa	Zitouna					Tiffech	Sidi Ghiles	Sidi Merouane	Hassania		Sidi Boumediene		Oued El Djemaa										
		Ouled Fares		Oum El Bouaghi	Hidoussa	Feraoun	Sidi Okba		Soumaa	Guerrouma		Saf Saf El Ouesra	El Fehoul	Oued Lilli	Beni-Yenni	Draria	Hassi Fedoul	Sidi Marouf	Bouandas		Kerkara	Mostefa  Ben Brahim		Medjez Amar		El Haoudane	Sidi Belaattar	M'cif	Khalouia		Sidi Chami			Ouled Dahmane	Si Mustapha						Zaarouria	Sidi Rached	Tadjenanet	Hoceinia		Sidi Ouriache		Oued Essalem										
		Oum Drou		Rahia	Ichemoul	Ouzellaguen	Tolga			Hadjera Zerga		Stah Guentis	El Gor	Rahouia	Beni-Zikki	El Achour	Messaad	Taher	Bougaa		Khenag Maoune	Moulay Slissen		Medjez Sfa		El Omaria	Sidi-Lakhdar	Medjedel	Makhda		Tafraoui			Ouled Sidi-Brahim	Sidi Daoud						Zouabi	Sidi Semiane	Tassadane Haddada	Khemis-Miliana		Sidi Safi		Oued-Rhiou										
		Sendjas		Sigus	Inoughissen	Ighil-Ali	Zeribet El Oued			Haizer		Tebessa	Fellaoucene	Rechaiga	Boghni	El Biar	M'liliha	Texenna	Bousselam		Oued Zhour	Oued Sebaa		Houari Boumedienne		El Ouinet	Sirat	Menaa	Maoussa					Rabta	Souk El Had							Sidi-Amar	Teleghma	Mekhatria		Tamzoura		Ouled Aiche										
		Sidi Abderrahmane		Souk Naamane	Kimmel	Ighram				Hanif		Telidjen	Ghazaouet	Sebaine	Boudjima	El Harrach	Moudjebara	Ziama Mansouriah	Boutaleb		Ouldja Boulbalout	Oued Sefioun		Oued Cheham		Hannacha	Souaflia	Mohamed Boudiaf	Mascara					Ras El Oued	Taourga							Tipaza	Terrai Bainen	Miliana		Terga		Ouled Sidi Mihoub										
		Sidi Akkacha		Zorg	Ksar Bellezma	Kendira				Kadiria			Hammam Boughrara	Sebt	Bounouh	El Madania	Oum Laadham		Dehamcha		Ouled Attia	Oued Taourira		Oued Ferragha		Kef Lakhdar	Sour	M'sila	Matemore					Sidi-Embarek	Thenia								Tassala Lematai	Oued Chorfa				Ramka										
		Sobha			Larbaa	Kherrata				Lakhdaria			Hennaya	Serghine	Bouzeguene	El Magharia	Sed Rahal		Djemila		Ouled Habbaba	Ras El Ma		Oued Zenati		Khams Djouamaa	Stidia	M'tarfa	Mocta-Douz					Tefreg	Tidjelabine								Tiberguent	Oued Djemaa				Relizane										
		Tadjena			Lazrou	M'cisna				M Chedallah			Honnaine	Si Abdelghani	Draa-Ben-Khedda	El Marsa	Selmana		Draa-Kebila		Oum Toub	Redjem Demouche		Ras El Agba		Ksar El Boukhari	Tazgait	Ouanougha	Mohammadia					Taglait	Timezrit								Yahia Beniguecha	Rouina				Sidi Khettab										
		Talassa			Lemcene	Melbou				Maala			Maghnia	Sidi Abderrahmane	Draa-El-Mizan	El Mouradia	Sidi Baizid		El Eulma		Ramdane Djamel	Sehala Thaoura		Roknia		Maghraoua	Touahria	Ouled Addi Guebala	Nesmot					Tassamert	Zemmouri								Zeghaia	Sidi-Lakhdar				Sidi Lazreg										
		Taougrit			M Doukal	Oued Ghir				Maamora			Mansourah	Sidi Ali Mellal	Freha	Hammamet	Sidi Laadjel		El Ouricia		Salah Bouchaour	Sfisef		Sellaoua Announa		Medea		Ouled Derradj	Oggaz					Teniet En Nasr										Tacheta Zegagha				Sidi M'hamed Benali										
		Tenes			Maafa	Seddouk				Mezdour			Marsa Ben M'hidi	Sidi Bakhti	Frikat	Herraoua	Taadmit		El-Ouldja		Sidi Mezghiche	Sidi Ali Benyoub		Tamlouka		Medjebar		Ouled Madhi	Oued El Abtal					Tixter										Tarik-Ibn-Ziad				Sidi M'hamed Benaouda										
		Zeboudja			Menaa	Sidi Ayad				Oued El Berdi			M'sirda Fouaga	Sidi Hosni	Iboudrarene	Hussein Dey	Zaafrane		Guellal		Skikda	Sidi Ali Boussidi				Mezerana		Ouled Mansour	Oued Taria															Tiberkanine				Sidi Saada										
					Merouana	Sidi-Aich				Ouled Rached			Nedroma	Sougueur	Idjeur	Hydra	Zaccar		Guelta Zerka		Tamalous	Sidi Bel-Abbes				M'fatha		Ouled Sidi Brahim	Ras El Ain Amirouche															Zeddine				Souk El Had										
					N Gaous	Smaoun				Raouraoua			Oued Lakhdar	Tagdempt	Iferhounene	Khraissia			Guenzet		Zerdezas	Sidi Brahim				Mihoub		Ouled Slimane	Sedjerara																			Yellel										
					Oued Chaaba	Souk El Tenine				Ridane			Ouled Mimoun	Takhemaret	Ifigha	Kouba			Guidjel		Zitouna	Sidi Chaib				Ouamri		Oulteme	Sehailia																			Zemmoura										
					Oued El Ma	Souk Oufella				Saharidj			Ouled Riyah	Tiaret	Iflissen	Les Eucalyptus			Hamam Soukhna			Sidi Dahou Zairs				Oued Harbil		Sidi Aissa	Sidi Abdeldjebar																													
					Oued Taga	Tala Hamza				Souk El Khemis			Remchi	Tidda	Illilten	Maalma			Hamma			Sidi Hamadouche				Ouled Antar		Sidi Ameur	Sidi Abdelmoumene																													
					Ouled Ammar	Tamokra				Sour El Ghozlane			Sabra	Tousnina	Illoula Oumalou	Mohamed Belouzdad			Hammam Guergour			Sidi Khaled				Ouled Bouachra		Sidi Hadjeres	Sidi Boussaid																													
					Ouled Aouf	Tamridjet				Taghzout			Sebbaa Chioukh	Zmalet El Emir Abdelkade	Imsouhal	Mohammadia			Harbil			Sidi Lahcene				Ouled Brahim		Sidi M'hamed	Sidi Kada																													
					Ouled Fadel	Taourit Ighil				Taguedite			Sebdou		Irdjen	Oued Koriche			Kasr El Abtal			Sidi Yacoub				Ouled Deid		Slim	Sig																													
					Ouled Sellem	Taskriout				Ath Mansour			Sidi Abdelli		Larbaa Nath Irathen	Oued Smar			Maaouia			Tabia				Ouled Emaaraf		Souamaa	Tighennif																													
					Ouled Si Slimane	Tazmalt				Z'barbar (El Isseri )			Sidi Djillali		Maatkas	Ouled Chebel			Maouaklane			Taoudmout				Ouled Hellal		Tamsa	Tizi																													
					Ouyoun El Assafir	Tibane							Sidi Medjahed		Makouda	Ouled Fayet			Mezloug			Tefessour				Oum El Djellil		Tarmount	Zahana																													
					Rahbat	Tichy							Souahlia		Mechtras	Rahmania			Oued El Bared			Teghalimet				Ouzera		Zarzour	Zelamta																													
					Ras El Aioun	Tifra							Souani		Mekla	Rais Hamidou			Ouled Addouane			Telagh				Rebaia																																
					Sefiane	Timezrit							Terny Beni Hediel		M'kira	Rouiba			Ouled Sabor			Tenira				Saneg																																
					Seriana	Tinebdar							Tianet		Ouacif	Sehaoula			Ouled Tebben			Tilmouni				Seghouane																																
					T Kout	Toudja							Tlemcen		Ouadhias	Sidi M'hamed			Rosfa			Zerouala				Si Mahdjoub																																
					Talkhamt								Zenata		Ouaguenoun	Sidi Moussa			Salah Bey							Sidi Demed																																
					Taxlent										Sidi Namane	Souidania			Serdj-El-Ghoul							Sidi Naamane																																
					Tazoult										Souama	Staoueli			Setif							Sidi Rabie																																
					Teniet El Abed										Souk-El-Tenine	Tessala El Merdja			Tachouda							Sidi Zahar																																
					Tighanimine										Tadmait	Zeralda			Tala-Ifacene							Sidi Ziane																																
					Tigharghar										Tigzirt				Taya							Souagui																																
					Tilatou										Timizart				Tella							Tablat																																
					Timgad										Tirmitine				Tizi N'bechar							Tafraout																																
					Zanet El Beida										Tizi N'tleta											Tamesguida																																
															Tizi-Gheniff											Tizi Mahdi																																
															Tizi-Ouzou											Tletat Ed Douair																																
															Tizi-Rached											Zoubiria																																
															Yakourene																																											
															Yatafene																																											
															Zekri																																											
`;

// Helper: Parse Hubs
function parseHubs() {
	const hubs = [];
	if (!rawHubsData) return hubs;

	// Split by newline, handle both \n and \r\n
	const lines = rawHubsData.trim().split(/\r?\n/);

	lines.forEach(line => {
		if (!line.trim()) return;

		// Try standard format: Name EN - Code - Name AR
		// Adjust regex to be flexible with spaces
		const matches = line.match(/(.*?)\s+(\d{1,2})\s+(.*)/);
		if (matches) {
			hubs.push({
				nameEn: matches[1].trim(),
				wilayaCode: matches[2].padStart(2, '0'), // Ensure 01 not 1
				nameAr: matches[3].trim()
			});
		}
	});
	return hubs;
}

// Helper: Parse Communes
function parseCommunes() {
	const data = {};
	if (!rawCommunesData) return data;

	const lines = rawCommunesData.trim().split(/\r?\n/);
	if (lines.length < 2) return data;

	// Detect separator: Tab or multiple spaces?
	// User provided data usually copied from Excel is Tab separated.
	// If copied from chat/text, might become spaces.
	// Let's assume Tab first, fallback to regex if needed.
	// Actually, looking at the previous file content, it seemed to be tab separated.

	// Header row
	const headerLine = lines[0];
	// Split by tab or 2+ spaces
	const headers = headerLine.split(/\t|\s{2,}/).map(h => h.trim().toLowerCase());

	// Process rows
	for (let i = 1; i < lines.length; i++) {
		const line = lines[i];
		if (!line.trim()) continue;

		const row = line.split(/\t|\s{2,}/); // Split by tab or 2+ spaces

		row.forEach((commune, index) => {
			if (commune && commune.trim() !== '') {
				// Wilaya codes align with columns 1-58 (index 1 to 58 in raw data usually? No, "Wilaya" col is 0)
				// Let's look at header: "Wilaya", "adrar", "chlef"...
				// "adrar" is column 1. So it corresponds to Wilaya 01.
				// "chlef" is column 2. Wilaya 02.

				// Adjust index: column 1 -> code 01
				const wilayaCode = index.toString().padStart(2, '0');

				// Skip column 0 (The row label usually) if it's not a wilaya
				if (wilayaCode === '00') return;

				if (!data[wilayaCode]) data[wilayaCode] = [];
				data[wilayaCode].push(commune.trim());
			}
		});
	}
	return data;
}

// Debug to Console
const parsedHubs = parseHubs();
const parsedCommunes = parseCommunes();
console.log('Hubs Loaded:', parsedHubs.length);
console.log('Communes Loaded (Keys):', Object.keys(parsedCommunes).length);

// Wilaya List (Order 1-58)
const wilayas = [
	{ code: '01', name: 'أدرار' }, { code: '02', name: 'الشلف' }, { code: '03', name: 'الأغواط' }, { code: '04', name: 'أم البواقي' },
	{ code: '05', name: 'باتنة' }, { code: '06', name: 'بجاية' }, { code: '07', name: 'بسكرة' }, { code: '08', name: 'بشار' },
	{ code: '09', name: 'البليدة' }, { code: '10', name: 'البويرة' }, { code: '11', name: 'تمنراست' }, { code: '12', name: 'تبسة' },
	{ code: '13', name: 'تلمسان' }, { code: '14', name: 'تيارت' }, { code: '15', name: 'تيزي وزو' }, { code: '16', name: 'الجزائر' },
	{ code: '17', name: 'الجلفة' }, { code: '18', name: 'جيجل' }, { code: '19', name: 'سطيف' }, { code: '20', name: 'سعيدة' },
	{ code: '21', name: 'سكيكدة' }, { code: '22', name: 'سيدي بلعباس' }, { code: '23', name: 'عنابة' }, { code: '24', name: 'قالمة' },
	{ code: '25', name: 'قسنطينة' }, { code: '26', name: 'المدية' }, { code: '27', name: 'مستغانم' }, { code: '28', name: 'المسيلة' },
	{ code: '29', name: 'معسكر' }, { code: '30', name: 'ورقلة' }, { code: '31', name: 'وهران' }, { code: '32', name: 'البيض' },
	{ code: '33', name: 'إليزي' }, { code: '34', name: 'برج بوعريريج' }, { code: '35', name: 'بومرداس' }, { code: '36', name: 'الطارف' },
	{ code: '37', name: 'تيندوف' }, { code: '38', name: 'تيسمسيلت' }, { code: '39', name: 'الوادي' }, { code: '40', name: 'خنشلة' },
	{ code: '41', name: 'سوق أهراس' }, { code: '42', name: 'تيبازة' }, { code: '43', name: 'ميلة' }, { code: '44', name: 'عين الدفلى' },
	{ code: '45', name: 'النعامة' }, { code: '46', name: 'عين تموشنت' }, { code: '47', name: 'غرداية' }, { code: '48', name: 'غليزان' },
	{ code: '49', name: 'تيميمون' }, { code: '50', name: 'برج باجي مختار' }, { code: '51', name: 'أولاد جلال' }, { code: '52', name: 'بني عباس' },
	{ code: '53', name: 'عين صالح' }, { code: '54', name: 'عين قزام' }, { code: '55', name: 'تقرت' }, { code: '56', name: 'جانت' },
	{ code: '57', name: 'المغير' }, { code: '58', name: 'المنيعة' }
];

// Exposure
window.appData = {
	hubs: parsedHubs,
	communes: parsedCommunes,
	wilayas: wilayas,
	pricing: {
		'01': { home: 1400, desk: 900 },
		'02': { home: 850, desk: 450 },
		'03': { home: 750, desk: 450 },
		'04': { home: 850, desk: 450 },
		'05': { home: 900, desk: 450 },
		'06': { home: 850, desk: 450 },
		'07': { home: 950, desk: 550 },
		'08': { home: 1100, desk: 650 },
		'09': { home: 850, desk: 450 },
		'10': { home: 850, desk: 450 },
		'11': { home: 1700, desk: 1100 },
		'12': { home: 900, desk: 450 },
		'13': { home: 900, desk: 500 },
		'14': { home: 850, desk: 450 },
		'15': { home: 850, desk: 450 },
		'16': { home: 650, desk: 450 },
		'17': { home: 900, desk: 500 }, // Est (Jelfa usually around here, inferred or default)
		'18': { home: 900, desk: 450 },
		'19': { home: 850, desk: 450 },
		'20': { home: 900, desk: 500 },
		'21': { home: 900, desk: 450 },
		'22': { home: 900, desk: 450 },
		'23': { home: 900, desk: 450 },
		'24': { home: 900, desk: 450 },
		'25': { home: 850, desk: 450 },
		'26': { home: 850, desk: 450 },
		'27': { home: 900, desk: 450 },
		'28': { home: 850, desk: 500 },
		'29': { home: 900, desk: 450 },
		'30': { home: 950, desk: 600 },
		'31': { home: 850, desk: 450 },
		'32': { home: 1100, desk: 600 },
		'33': { home: 0, desk: 0 },
		'34': { home: 800, desk: 450 },
		'35': { home: 800, desk: 450 },
		'36': { home: 850, desk: 450 },
		// Defaults for others not in image (37+) or use logic to fallback
		'default': { home: 900, desk: 500 }
	}
};
