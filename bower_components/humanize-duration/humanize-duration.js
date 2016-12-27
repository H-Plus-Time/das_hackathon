!function(){function n(n){var t=function(n,e){var i=r({},t,e||{});return u(n,i)};return r(t,{language:"en",delimiter:", ",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}function u(n,u){var r,e,i;n=Math.abs(n);var o=u.languages[u.language]||c[u.language];if(!o)throw new Error("No language "+o+".");var m,s,a,f=[];for(r=0,e=u.units.length;r<e;r++)m=u.units[r],s=u.unitMeasures[m],a=r+1===e?n/s:Math.floor(n/s),f.push({unitCount:a,unitName:m}),n-=a*s;var d=0;for(r=0;r<f.length;r++)if(f[r].unitCount){d=r;break}if(u.round){var l,h;for(r=f.length-1;r>=0&&(i=f[r],i.unitCount=Math.round(i.unitCount),0!==r);r--)h=f[r-1],l=u.unitMeasures[h.unitName]/u.unitMeasures[i.unitName],(i.unitCount%l===0||u.largest&&u.largest-1<r-d)&&(h.unitCount+=i.unitCount/l,i.unitCount=0)}var y=[];for(r=0,f.length;r<e&&(i=f[r],i.unitCount&&y.push(t(i.unitCount,i.unitName,o,u)),y.length!==u.largest);r++);return y.length?u.conjunction&&1!==y.length?2===y.length?y.join(u.conjunction):y.length>2?y.slice(0,-1).join(u.delimiter)+(u.serialComma?",":"")+u.conjunction+y.slice(-1):void 0:y.join(u.delimiter):t(0,u.units[u.units.length-1],o,u)}function t(n,u,t,r){var e;e=void 0===r.decimal?t.decimal:r.decimal;var i,o=n.toString().replace(".",e),m=t[u];return i="function"==typeof m?m(n):m,o+r.spacer+i}function r(n){for(var u,t=1;t<arguments.length;t++){u=arguments[t];for(var r in u)u.hasOwnProperty(r)&&(n[r]=u[r])}return n}function e(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function i(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function o(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10===0?0:n%10===1?1:n>1?2:0}function m(n){return 1===n||n%10===1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}var c={ar:{y:function(n){return 1===n?"سنة":"سنوات"},mo:function(n){return 1===n?"شهر":"أشهر"},w:function(n){return 1===n?"أسبوع":"أسابيع"},d:function(n){return 1===n?"يوم":"أيام"},h:function(n){return 1===n?"ساعة":"ساعات"},m:function(n){return 1===n?"دقيقة":"دقائق"},s:function(n){return 1===n?"ثانية":"ثواني"},ms:function(n){return 1===n?"جزء من الثانية":"أجزاء من الثانية"},decimal:","},ca:{y:function(n){return"any"+(1!==n?"s":"")},mo:function(n){return"mes"+(1!==n?"os":"")},w:function(n){return"setman"+(1!==n?"es":"a")},d:function(n){return"di"+(1!==n?"es":"a")},h:function(n){return"hor"+(1!==n?"es":"a")},m:function(n){return"minut"+(1!==n?"s":"")},s:function(n){return"segon"+(1!==n?"s":"")},ms:function(n){return"milisegon"+(1!==n?"s":"")},decimal:","},cs:{y:function(n){return["rok","roku","roky","let"][e(n)]},mo:function(n){return["měsíc","měsíce","měsíce","měsíců"][e(n)]},w:function(n){return["týden","týdne","týdny","týdnů"][e(n)]},d:function(n){return["den","dne","dny","dní"][e(n)]},h:function(n){return["hodina","hodiny","hodiny","hodin"][e(n)]},m:function(n){return["minuta","minuty","minuty","minut"][e(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][e(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][e(n)]},decimal:","},da:{y:"år",mo:function(n){return"måned"+(1!==n?"er":"")},w:function(n){return"uge"+(1!==n?"r":"")},d:function(n){return"dag"+(1!==n?"e":"")},h:function(n){return"time"+(1!==n?"r":"")},m:function(n){return"minut"+(1!==n?"ter":"")},s:function(n){return"sekund"+(1!==n?"er":"")},ms:function(n){return"millisekund"+(1!==n?"er":"")},decimal:","},de:{y:function(n){return"Jahr"+(1!==n?"e":"")},mo:function(n){return"Monat"+(1!==n?"e":"")},w:function(n){return"Woche"+(1!==n?"n":"")},d:function(n){return"Tag"+(1!==n?"e":"")},h:function(n){return"Stunde"+(1!==n?"n":"")},m:function(n){return"Minute"+(1!==n?"n":"")},s:function(n){return"Sekunde"+(1!==n?"n":"")},ms:function(n){return"Millisekunde"+(1!==n?"n":"")},decimal:","},en:{y:function(n){return"year"+(1!==n?"s":"")},mo:function(n){return"month"+(1!==n?"s":"")},w:function(n){return"week"+(1!==n?"s":"")},d:function(n){return"day"+(1!==n?"s":"")},h:function(n){return"hour"+(1!==n?"s":"")},m:function(n){return"minute"+(1!==n?"s":"")},s:function(n){return"second"+(1!==n?"s":"")},ms:function(n){return"millisecond"+(1!==n?"s":"")},decimal:"."},es:{y:function(n){return"año"+(1!==n?"s":"")},mo:function(n){return"mes"+(1!==n?"es":"")},w:function(n){return"semana"+(1!==n?"s":"")},d:function(n){return"día"+(1!==n?"s":"")},h:function(n){return"hora"+(1!==n?"s":"")},m:function(n){return"minuto"+(1!==n?"s":"")},s:function(n){return"segundo"+(1!==n?"s":"")},ms:function(n){return"milisegundo"+(1!==n?"s":"")},decimal:","},fi:{y:function(n){return 1===n?"vuosi":"vuotta"},mo:function(n){return 1===n?"kuukausi":"kuukautta"},w:function(n){return"viikko"+(1!==n?"a":"")},d:function(n){return"päivä"+(1!==n?"ä":"")},h:function(n){return"tunti"+(1!==n?"a":"")},m:function(n){return"minuutti"+(1!==n?"a":"")},s:function(n){return"sekunti"+(1!==n?"a":"")},ms:function(n){return"millisekunti"+(1!==n?"a":"")},decimal:","},fr:{y:function(n){return"an"+(1!==n?"s":"")},mo:"mois",w:function(n){return"semaine"+(1!==n?"s":"")},d:function(n){return"jour"+(1!==n?"s":"")},h:function(n){return"heure"+(1!==n?"s":"")},m:function(n){return"minute"+(1!==n?"s":"")},s:function(n){return"seconde"+(1!==n?"s":"")},ms:function(n){return"milliseconde"+(1!==n?"s":"")},decimal:","},gr:{y:function(n){return 1===n?"χρόνος":"χρόνια"},mo:function(n){return 1===n?"μήνας":"μήνες"},w:function(n){return 1===n?"εβδομάδα":"εβδομάδες"},d:function(n){return 1===n?"μέρα":"μέρες"},h:function(n){return 1===n?"ώρα":"ώρες"},m:function(n){return 1===n?"λεπτό":"λεπτά"},s:function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},ms:function(n){return 1===n?"χιλιοστό του δευτερολέπτου":"χιλιοστά του δευτερολέπτου"},decimal:","},hu:{y:"év",mo:"hónap",w:"hét",d:"nap",h:"óra",m:"perc",s:"másodperc",ms:"ezredmásodperc",decimal:","},id:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"menit",s:"detik",ms:"milidetik",decimal:"."},is:{y:"ár",mo:function(n){return"mánuð"+(1!==n?"ir":"ur")},w:function(n){return"vik"+(1!==n?"ur":"a")},d:function(n){return"dag"+(1!==n?"ar":"ur")},h:function(n){return"klukkutím"+(1!==n?"ar":"i")},m:function(n){return"mínút"+(1!==n?"ur":"a")},s:function(n){return"sekúnd"+(1!==n?"ur":"a")},ms:function(n){return"millisekúnd"+(1!==n?"ur":"a")},decimal:"."},it:{y:function(n){return"ann"+(1!==n?"i":"o")},mo:function(n){return"mes"+(1!==n?"i":"e")},w:function(n){return"settiman"+(1!==n?"e":"a")},d:function(n){return"giorn"+(1!==n?"i":"o")},h:function(n){return"or"+(1!==n?"e":"a")},m:function(n){return"minut"+(1!==n?"i":"o")},s:function(n){return"second"+(1!==n?"i":"o")},ms:function(n){return"millisecond"+(1!==n?"i":"o")},decimal:","},ja:{y:"年",mo:"月",w:"週",d:"日",h:"時間",m:"分",s:"秒",ms:"ミリ秒",decimal:"."},ko:{y:"년",mo:"개월",w:"주일",d:"일",h:"시간",m:"분",s:"초",ms:"밀리 초",decimal:"."},lt:{y:function(n){return n%10===0||n%100>=10&&n%100<=20?"metų":"metai"},mo:function(n){return["mėnuo","mėnesiai","mėnesių"][m(n)]},w:function(n){return["savaitė","savaitės","savaičių"][m(n)]},d:function(n){return["diena","dienos","dienų"][m(n)]},h:function(n){return["valanda","valandos","valandų"][m(n)]},m:function(n){return["minutė","minutės","minučių"][m(n)]},s:function(n){return["sekundė","sekundės","sekundžių"][m(n)]},ms:function(n){return["milisekundė","milisekundės","milisekundžių"][m(n)]},decimal:","},ms:{y:"tahun",mo:"bulan",w:"minggu",d:"hari",h:"jam",m:"minit",s:"saat",ms:"milisaat",decimal:"."},nl:{y:"jaar",mo:function(n){return 1===n?"maand":"maanden"},w:function(n){return 1===n?"week":"weken"},d:function(n){return 1===n?"dag":"dagen"},h:"uur",m:function(n){return 1===n?"minuut":"minuten"},s:function(n){return 1===n?"seconde":"seconden"},ms:function(n){return 1===n?"milliseconde":"milliseconden"},decimal:","},no:{y:"år",mo:function(n){return"måned"+(1!==n?"er":"")},w:function(n){return"uke"+(1!==n?"r":"")},d:function(n){return"dag"+(1!==n?"er":"")},h:function(n){return"time"+(1!==n?"r":"")},m:function(n){return"minutt"+(1!==n?"er":"")},s:function(n){return"sekund"+(1!==n?"er":"")},ms:function(n){return"millisekund"+(1!==n?"er":"")},decimal:","},pl:{y:function(n){return["rok","roku","lata","lat"][i(n)]},mo:function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][i(n)]},w:function(n){return["tydzień","tygodnia","tygodnie","tygodni"][i(n)]},d:function(n){return["dzień","dnia","dni","dni"][i(n)]},h:function(n){return["godzina","godziny","godziny","godzin"][i(n)]},m:function(n){return["minuta","minuty","minuty","minut"][i(n)]},s:function(n){return["sekunda","sekundy","sekundy","sekund"][i(n)]},ms:function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][i(n)]},decimal:","},pt:{y:function(n){return"ano"+(1!==n?"s":"")},mo:function(n){return 1!==n?"meses":"mês"},w:function(n){return"semana"+(1!==n?"s":"")},d:function(n){return"dia"+(1!==n?"s":"")},h:function(n){return"hora"+(1!==n?"s":"")},m:function(n){return"minuto"+(1!==n?"s":"")},s:function(n){return"segundo"+(1!==n?"s":"")},ms:function(n){return"milissegundo"+(1!==n?"s":"")},decimal:","},ru:{y:function(n){return["лет","год","года"][o(n)]},mo:function(n){return["месяцев","месяц","месяца"][o(n)]},w:function(n){return["недель","неделя","недели"][o(n)]},d:function(n){return["дней","день","дня"][o(n)]},h:function(n){return["часов","час","часа"][o(n)]},m:function(n){return["минут","минута","минуты"][o(n)]},s:function(n){return["секунд","секунда","секунды"][o(n)]},ms:function(n){return["миллисекунд","миллисекунда","миллисекунды"][o(n)]},decimal:","},uk:{y:function(n){return["років","рік","роки"][o(n)]},mo:function(n){return["місяців","місяць","місяці"][o(n)]},w:function(n){return["неділь","неділя","неділі"][o(n)]},d:function(n){return["днів","день","дні"][o(n)]},h:function(n){return["годин","година","години"][o(n)]},m:function(n){return["хвилин","хвилина","хвилини"][o(n)]},s:function(n){return["секунд","секунда","секунди"][o(n)]},ms:function(n){return["мілісекунд","мілісекунда","мілісекунди"][o(n)]},decimal:","},sv:{y:"år",mo:function(n){return"månad"+(1!==n?"er":"")},w:function(n){return"veck"+(1!==n?"or":"a")},d:function(n){return"dag"+(1!==n?"ar":"")},h:function(n){return"timm"+(1!==n?"ar":"e")},m:function(n){return"minut"+(1!==n?"er":"")},s:function(n){return"sekund"+(1!==n?"er":"")},ms:function(n){return"millisekund"+(1!==n?"er":"")},decimal:","},tr:{y:"yıl",mo:"ay",w:"hafta",d:"gün",h:"saat",m:"dakika",s:"saniye",ms:"milisaniye",decimal:","},vi:{y:"năm",mo:"tháng",w:"tuần",d:"ngày",h:"giờ",m:"phút",s:"giây",ms:"mili giây",decimal:","},zh_CN:{y:"年",mo:"个月",w:"周",d:"天",h:"小时",m:"分钟",s:"秒",ms:"毫秒",decimal:"."},zh_TW:{y:"年",mo:"個月",w:"周",d:"天",h:"小時",m:"分鐘",s:"秒",ms:"毫秒",decimal:"."}},s=n({});s.getSupportedLanguages=function(){var n=[];for(var u in c)c.hasOwnProperty(u)&&n.push(u);return n},s.humanizer=n,"function"==typeof define&&define.amd?define(function(){return s}):"undefined"!=typeof module&&module.exports?module.exports=s:this.humanizeDuration=s}();