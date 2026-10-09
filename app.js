
// v0.14.9 — WozzaWatch-style Android status bar + web-only install control.
const syncSystemBarTheme=()=>{
  let meta=document.querySelector('meta[name="theme-color"]');
  if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta);}
  meta.setAttribute('content','#075E78');
};
syncSystemBarTheme();
document.addEventListener('visibilitychange',()=>{if(!document.hidden)syncSystemBarTheme()});
const flags={"Central African Rep.":"cf","Central African Republic":"cf","Dem. Rep. Congo":"cd","Democratic Republic of the Congo":"cd","Aruba":"aw","Afghanistan":"af","Islamic Republic of Afghanistan":"af","Angola":"ao","Republic of Angola":"ao","Anguilla":"ai","Åland Islands":"ax","Albania":"al","Republic of Albania":"al","Andorra":"ad","Principality of Andorra":"ad","United Arab Emirates":"ae","Argentina":"ar","Argentine Republic":"ar","Armenia":"am","Republic of Armenia":"am","American Samoa":"as","Antarctica":"aq","French Southern Territories":"tf","Antigua and Barbuda":"ag","Australia":"au","Austria":"at","Republic of Austria":"at","Azerbaijan":"az","Republic of Azerbaijan":"az","Burundi":"bi","Republic of Burundi":"bi","Belgium":"be","Kingdom of Belgium":"be","Benin":"bj","Republic of Benin":"bj","Bonaire, Sint Eustatius and Saba":"bq","Burkina Faso":"bf","Bangladesh":"bd","People's Republic of Bangladesh":"bd","Bulgaria":"bg","Republic of Bulgaria":"bg","Bahrain":"bh","Kingdom of Bahrain":"bh","Bahamas":"bs","Commonwealth of the Bahamas":"bs","Bosnia and Herzegovina":"ba","Republic of Bosnia and Herzegovina":"ba","Bosnia and Herz.":"ba","Saint Barthélemy":"bl","Belarus":"by","Republic of Belarus":"by","Belize":"bz","Bermuda":"bm","Bolivia, Plurinational State of":"bo","Plurinational State of Bolivia":"bo","Bolivia":"bo","Brazil":"br","Federative Republic of Brazil":"br","Barbados":"bb","Brunei Darussalam":"bn","Bhutan":"bt","Kingdom of Bhutan":"bt","Bouvet Island":"bv","Botswana":"bw","Republic of Botswana":"bw","Central African Republic":"cf","Canada":"ca","Cocos (Keeling) Islands":"cc","Switzerland":"ch","Swiss Confederation":"ch","Chile":"cl","Republic of Chile":"cl","China":"cn","People's Republic of China":"cn","Côte d'Ivoire":"ci","Republic of Côte d'Ivoire":"ci","Cameroon":"cm","Republic of Cameroon":"cm","Congo, The Democratic Republic of the":"cd","Congo":"cg","Republic of the Congo":"cg","Cook Islands":"ck","Colombia":"co","Republic of Colombia":"co","Comoros":"km","Union of the Comoros":"km","Cabo Verde":"cv","Republic of Cabo Verde":"cv","Costa Rica":"cr","Republic of Costa Rica":"cr","Cuba":"cu","Republic of Cuba":"cu","Curaçao":"cw","Christmas Island":"cx","Cayman Islands":"ky","Cyprus":"cy","Republic of Cyprus":"cy","Czechia":"cz","Czech Republic":"cz","Germany":"de","Federal Republic of Germany":"de","Djibouti":"dj","Republic of Djibouti":"dj","Dominica":"dm","Commonwealth of Dominica":"dm","Denmark":"dk","Kingdom of Denmark":"dk","Dominican Republic":"do","Algeria":"dz","People's Democratic Republic of Algeria":"dz","Ecuador":"ec","Republic of Ecuador":"ec","Egypt":"eg","Arab Republic of Egypt":"eg","Eritrea":"er","the State of Eritrea":"er","Western Sahara":"eh","Spain":"es","Kingdom of Spain":"es","Estonia":"ee","Republic of Estonia":"ee","Ethiopia":"et","Federal Democratic Republic of Ethiopia":"et","Finland":"fi","Republic of Finland":"fi","Fiji":"fj","Republic of Fiji":"fj","Falkland Islands (Malvinas)":"fk","France":"fr","French Republic":"fr","Faroe Islands":"fo","Micronesia, Federated States of":"fm","Federated States of Micronesia":"fm","Gabon":"ga","Gabonese Republic":"ga","United Kingdom":"gb","United Kingdom of Great Britain and Northern Ireland":"gb","Georgia":"ge","Guernsey":"gg","Ghana":"gh","Republic of Ghana":"gh","Gibraltar":"gi","Guinea":"gn","Republic of Guinea":"gn","Guadeloupe":"gp","Gambia":"gm","Republic of the Gambia":"gm","Guinea-Bissau":"gw","Republic of Guinea-Bissau":"gw","Equatorial Guinea":"gq","Republic of Equatorial Guinea":"gq","Greece":"gr","Hellenic Republic":"gr","Grenada":"gd","Greenland":"gl","Guatemala":"gt","Republic of Guatemala":"gt","French Guiana":"gf","Guam":"gu","Guyana":"gy","Republic of Guyana":"gy","Hong Kong":"hk","Hong Kong Special Administrative Region of China":"hk","Heard Island and McDonald Islands":"hm","Honduras":"hn","Republic of Honduras":"hn","Croatia":"hr","Republic of Croatia":"hr","Haiti":"ht","Republic of Haiti":"ht","Hungary":"hu","Indonesia":"id","Republic of Indonesia":"id","Isle of Man":"im","India":"in","Republic of India":"in","British Indian Ocean Territory":"io","Ireland":"ie","Iran, Islamic Republic of":"ir","Islamic Republic of Iran":"ir","Iran":"ir","Iraq":"iq","Republic of Iraq":"iq","Iceland":"is","Republic of Iceland":"is","Israel":"il","State of Israel":"il","Italy":"it","Italian Republic":"it","Jamaica":"jm","Jersey":"je","Jordan":"jo","Hashemite Kingdom of Jordan":"jo","Japan":"jp","Kazakhstan":"kz","Republic of Kazakhstan":"kz","Kenya":"ke","Republic of Kenya":"ke","Kyrgyzstan":"kg","Kyrgyz Republic":"kg","Cambodia":"kh","Kingdom of Cambodia":"kh","Kiribati":"ki","Republic of Kiribati":"ki","Saint Kitts and Nevis":"kn","Korea, Republic of":"kr","South Korea":"kr","Kuwait":"kw","State of Kuwait":"kw","Lao People's Democratic Republic":"la","Laos":"la","Lebanon":"lb","Lebanese Republic":"lb","Liberia":"lr","Republic of Liberia":"lr","Libya":"ly","Saint Lucia":"lc","Liechtenstein":"li","Principality of Liechtenstein":"li","Sri Lanka":"lk","Democratic Socialist Republic of Sri Lanka":"lk","Lesotho":"ls","Kingdom of Lesotho":"ls","Lithuania":"lt","Republic of Lithuania":"lt","Luxembourg":"lu","Grand Duchy of Luxembourg":"lu","Latvia":"lv","Republic of Latvia":"lv","Macao":"mo","Macao Special Administrative Region of China":"mo","Saint Martin (French part)":"mf","Morocco":"ma","Kingdom of Morocco":"ma","Monaco":"mc","Principality of Monaco":"mc","Moldova, Republic of":"md","Republic of Moldova":"md","Moldova":"md","Madagascar":"mg","Republic of Madagascar":"mg","Maldives":"mv","Republic of Maldives":"mv","Mexico":"mx","United Mexican States":"mx","Marshall Islands":"mh","Republic of the Marshall Islands":"mh","North Macedonia":"mk","Republic of North Macedonia":"mk","Mali":"ml","Republic of Mali":"ml","Malta":"mt","Republic of Malta":"mt","Myanmar":"mm","Republic of Myanmar":"mm","Montenegro":"me","Mongolia":"mn","Northern Mariana Islands":"mp","Commonwealth of the Northern Mariana Islands":"mp","Mozambique":"mz","Republic of Mozambique":"mz","Mauritania":"mr","Islamic Republic of Mauritania":"mr","Montserrat":"ms","Martinique":"mq","Mauritius":"mu","Republic of Mauritius":"mu","Malawi":"mw","Republic of Malawi":"mw","Malaysia":"my","Mayotte":"yt","Namibia":"na","Republic of Namibia":"na","New Caledonia":"nc","Niger":"ne","Republic of the Niger":"ne","Norfolk Island":"nf","Nigeria":"ng","Federal Republic of Nigeria":"ng","Nicaragua":"ni","Republic of Nicaragua":"ni","Niue":"nu","Netherlands":"nl","Kingdom of the Netherlands":"nl","Norway":"no","Kingdom of Norway":"no","Nepal":"np","Federal Democratic Republic of Nepal":"np","Nauru":"nr","Republic of Nauru":"nr","New Zealand":"nz","Oman":"om","Sultanate of Oman":"om","Pakistan":"pk","Islamic Republic of Pakistan":"pk","Panama":"pa","Republic of Panama":"pa","Pitcairn":"pn","Peru":"pe","Republic of Peru":"pe","Philippines":"ph","Republic of the Philippines":"ph","Palau":"pw","Republic of Palau":"pw","Papua New Guinea":"pg","Independent State of Papua New Guinea":"pg","Poland":"pl","Republic of Poland":"pl","Puerto Rico":"pr","Korea, Democratic People's Republic of":"kp","Democratic People's Republic of Korea":"kp","North Korea":"kp","Portugal":"pt","Portuguese Republic":"pt","Paraguay":"py","Republic of Paraguay":"py","Palestine, State of":"ps","the State of Palestine":"ps","French Polynesia":"pf","Qatar":"qa","State of Qatar":"qa","Réunion":"re","Romania":"ro","Russian Federation":"ru","Rwanda":"rw","Rwandese Republic":"rw","Saudi Arabia":"sa","Kingdom of Saudi Arabia":"sa","Sudan":"sd","Republic of the Sudan":"sd","Senegal":"sn","Republic of Senegal":"sn","Singapore":"sg","Republic of Singapore":"sg","South Georgia and the South Sandwich Islands":"gs","Saint Helena, Ascension and Tristan da Cunha":"sh","Svalbard and Jan Mayen":"sj","Solomon Islands":"sb","Sierra Leone":"sl","Republic of Sierra Leone":"sl","El Salvador":"sv","Republic of El Salvador":"sv","San Marino":"sm","Republic of San Marino":"sm","Somalia":"so","Federal Republic of Somalia":"so","Saint Pierre and Miquelon":"pm","Serbia":"rs","Republic of Serbia":"rs","South Sudan":"ss","Republic of South Sudan":"ss","Sao Tome and Principe":"st","Democratic Republic of Sao Tome and Principe":"st","Suriname":"sr","Republic of Suriname":"sr","Slovakia":"sk","Slovak Republic":"sk","Slovenia":"si","Republic of Slovenia":"si","Sweden":"se","Kingdom of Sweden":"se","Eswatini":"sz","Kingdom of Eswatini":"sz","Sint Maarten (Dutch part)":"sx","Seychelles":"sc","Republic of Seychelles":"sc","Syrian Arab Republic":"sy","Syria":"sy","Turks and Caicos Islands":"tc","Chad":"td","Republic of Chad":"td","Togo":"tg","Togolese Republic":"tg","Thailand":"th","Kingdom of Thailand":"th","Tajikistan":"tj","Republic of Tajikistan":"tj","Tokelau":"tk","Turkmenistan":"tm","Timor-Leste":"tl","Democratic Republic of Timor-Leste":"tl","Tonga":"to","Kingdom of Tonga":"to","Trinidad and Tobago":"tt","Republic of Trinidad and Tobago":"tt","Tunisia":"tn","Republic of Tunisia":"tn","Türkiye":"tr","Turkey":"tr","Republic of Türkiye":"tr","Tuvalu":"tv","Taiwan, Province of China":"tw","Taiwan":"tw","Tanzania, United Republic of":"tz","United Republic of Tanzania":"tz","Tanzania":"tz","Uganda":"ug","Republic of Uganda":"ug","Ukraine":"ua","United States Minor Outlying Islands":"um","Uruguay":"uy","Eastern Republic of Uruguay":"uy","United States":"us","United States of America":"us","Uzbekistan":"uz","Republic of Uzbekistan":"uz","Holy See (Vatican City State)":"va","Saint Vincent and the Grenadines":"vc","Venezuela, Bolivarian Republic of":"ve","Bolivarian Republic of Venezuela":"ve","Venezuela":"ve","Virgin Islands, British":"vg","British Virgin Islands":"vg","Virgin Islands, U.S.":"vi","Virgin Islands of the United States":"vi","Viet Nam":"vn","Socialist Republic of Viet Nam":"vn","Vietnam":"vn","Vanuatu":"vu","Republic of Vanuatu":"vu","Wallis and Futuna":"wf","Samoa":"ws","Independent State of Samoa":"ws","Yemen":"ye","Republic of Yemen":"ye","South Africa":"za","Republic of South Africa":"za","Zambia":"zm","Republic of Zambia":"zm","Zimbabwe":"zw","Republic of Zimbabwe":"zw","Russia":"ru","Brunei":"bn","Ivory Coast":"ci","Côte d’Ivoire":"ci","Cote d’Ivoire":"ci","Democratic Republic of the Congo":"cd","DR Congo":"cd","Palestine":"ps","Kosovo":"xk"}
const seed={statuses:{Norway:'going',Italy:'bucket',Spain:'visited',France:'visited'},places:{Italy:['Lake Como','Roscioli'],Norway:['Flåm railway']},trips:[{id:'seed1',name:'Norway',start:'2027-05-01',end:'2027-05-08',countries:['Norway'],cities:{Norway:['Flåm']},plan:'Cruise itinerary',status:'upcoming'}]};
const oldState=JSON.parse(localStorage.getItem('myworld-state')||'null'),savedState=JSON.parse(localStorage.getItem('wozzaworld-state')||'null');let state=savedState||oldState||structuredClone(seed);state.statuses??={};Object.keys(state.statuses).forEach(c=>{if(state.statuses[c]==='wishlist')state.statuses[c]='bucket'});state.visitHistory??=[];state.companions??={};state.memories??={};state.recycleBin??=[];state.tripRecycleBin??=[];state.companionRecycleBin??=[];state.vibeRecycleBin??=[];state.places??={};state.trips??=[];state.cities??={};state.countryAddedAt??={};state.visitedListPrefs??={sort:'default',year:'all',rating:'all'};state.visitedListPrefs.rating??='all';state.companionBank??=[];state.vibeBank??=['City Break','Beach Holiday','Spa & Wellness','Adventure','Road Trip','Snow & Ski','Cruise','Visiting Friends & Family','Celebration','Great Outdoors','Camping'];state.vibeBank=state.vibeBank.map(v=>v==='Relax & Recharge'?'Spa & Wellness':v==='Winter & Snow'?'Snow & Ski':v).filter(v=>v!=='Once in a Lifetime');if(!state.vibeBank.some(v=>String(v).toLowerCase()==='cruise'))state.vibeBank.push('Cruise');state.trips.forEach(t=>{if(Array.isArray(t.vibes))t.vibes=[...new Set(t.vibes.map(v=>v==='Relax & Recharge'?'Spa & Wellness':v==='Winter & Snow'?'Snow & Ski':v).filter(v=>v!=='Once in a Lifetime'))]});state.bucketOrder??=[];state.recycleSelection??=[];state.customDestinations??=[];state.extraStatuses??={};Object.values(state.companions).flat().forEach(n=>{if(n&&!state.companionBank.some(x=>x.toLowerCase()===String(n).toLowerCase()))state.companionBank.push(n)});state.trips.forEach(t=>(t.companions||[]).forEach(n=>{if(n&&!state.companionBank.some(x=>x.toLowerCase()===String(n).toLowerCase()))state.companionBank.push(n)}));
const mapFilterPrefs=(()=>{try{return Object.assign({visited:true,going:true,bucket:false},JSON.parse(localStorage.getItem('wozzaworld-map-filters')||'{}'))}catch(e){return {visited:true,going:true,bucket:false}}})();
// Migrate old one-country trips into multi-country trips without losing data.
state.trips=state.trips.map((t,i)=>({...t,id:t.id||`trip-${Date.now()}-${i}`,countries:t.countries||[t.country].filter(Boolean),cities:t.cities||{}}));
for(const c of Object.keys(state.statuses)){if(state.statuses[c]==='visited'&&!state.visitHistory.includes(c))state.visitHistory.push(c);if(!state.countryAddedAt[c])state.countryAddedAt[c]=new Date(Date.now()-(Object.keys(state.statuses).indexOf(c)*1000)).toISOString()}
let availableCountries=[],currentCountry=null,holdTimer=null,longPressed=false,countrySlide=0,pendingRemoveCountry=null,lastRemoved=null,editingTripId=null;const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}function save(){localStorage.setItem('wozzaworld-state',JSON.stringify(state));render()}function pretty(d){if(!d)return'';return new Date(d+'T12:00:00').toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}function monthPretty(m){if(!m)return'Date not set';const [y,mo]=m.split('-');return new Date(+y,+mo-1,1).toLocaleDateString('en-GB',{month:'short',year:'numeric'})}
function flagUrl(c){const code=flags[c];return code?`https://flagcdn.com/w160/${code}.png`:''}function flagMarkup(c,cls='flag-img'){const u=flagUrl(c);return u?`<img class="${cls}" src="${u}" alt="">`:`<span class="flag-fallback">◉</span>`}
function tripCountries(t){return t.countries||[t.country].filter(Boolean)}function orderedTripDates(t){const stops=(t.destinations||[]).filter(Boolean);if(stops.length){const first=stops[0]||{},last=stops[stops.length-1]||{};return {start:first.start||'',end:(stops.length===1?first.end:last.end)||''}}return {start:t.start||'',end:t.end||''}}function tripStars(t){const r=Math.max(0,Math.min(5,Number(t.rating)||0));return r?`<div class="trip-stars trip-stars-readonly" aria-label="${r} star${r===1?'':'s'}">${Array.from({length:r},(_,i)=>`<button type="button" data-rate="${i+1}" tabindex="-1" aria-hidden="true">★</button>`).join('')}</div>`:''}function travelModeIcon(mode){const m=String(mode||'').toLowerCase();const icons={air:'air',plane:'air',sea:'sea',ferry:'sea',cruise:'sea',train:'transport-train',car:'car',campervan:'campervan',motorhome:'campervan',narrowboat:'narrowboat',motorbike:'motorbike',bicycle:'bicycle','on foot':'on-foot',other:'other'};const icon=icons[m]||(m.includes('coach')||m.includes('bus')?'coach-bus':'');return icon?`<img class="travel-mode-icon" src="${icon}.png" alt="" aria-hidden="true">`:''}function tripTravelModes(t){const modes=[...(t.destinations||[]).map(d=>d.travelMode),t.travelMode].filter(Boolean);return [...new Set(modes)].filter(m=>travelModeIcon(m))}function tripTravelIcons(t){const modes=tripTravelModes(t);return modes.length?`<div class="trip-travel-icons" aria-label="Travel methods: ${esc(modes.join(', '))}">${modes.map(m=>`<span title="${esc(m)}">${travelModeIcon(m)}</span>`).join('')}</div>`:''}function vibeIcon(vibe){const k=String(vibe||'').toLowerCase(),icons={'city break':'vibe-city.png','beach holiday':'vibe-beach.png','spa & wellness':'vibe-spa-wellness.png','adventure':'vibe-adventure.png','road trip':'vibe-road-trip.png','snow & ski':'vibe-snow-ski.png','cruise':'sea.png','visiting friends & family':'vibe-friends-family.png','celebration':'vibe-celebration.png','great outdoors':'vibe-great-outdoors.png','camping':'vibe-camping.png'},icon=icons[k];return icon?`<img class="vibe-icon" src="${icon}" alt="" aria-hidden="true">`:''}function tripVibeIcons(t){const travelModes=tripTravelModes(t).map(m=>String(m).toLowerCase()),vibes=[...new Set(t.vibes||[])].filter(v=>vibeIcon(v)&&!(String(v).toLowerCase()==='cruise'&&travelModes.includes('cruise')));return vibes.length?`<div class="trip-vibe-icons" aria-label="Trip vibes: ${esc(vibes.join(', '))}">${vibes.map(v=>`<span title="${esc(v)}">${vibeIcon(v)}</span>`).join('')}</div>`:''}function tripCard(t){const cs=tripCountries(t),td=orderedTripDates(t),dates=td.start?`${pretty(td.start)}${td.end?' – '+pretty(td.end):''}`:'Dates to be confirmed',days=countdownDays(td.start),count=days===null&&tripIsOnHorizon(t)?'PLANNING':days===0?'TODAY ✈':days>0?`${days} DAYS TO GO`:'';const countries=cs.length?`<div class="trip-card-country">${cs.map(esc).join(' · ')}</div>`:'';const dateLine=dates?`<div class="trip-card-date">${dates}</div>`:'';return `<div class="trip-card premium-trip editable-trip" data-open-trip="${esc(t.id||'')}" role="button" tabindex="0" aria-label="Open ${esc(t.name)} trip"><div class="trip-card-copy"><div class="trip-card-title-row"><strong class="${String(t.name||'').length>32?'trip-title-long ':''}${String(t.name||'').length>42?'trip-title-xlong':''}">${esc(t.name)}</strong></div>${countries}${dateLine}<div class="trip-card-meta-row">${tripStars(t)}${tripFlapIcons(t)}${tripAdaptiveFlags(cs)}</div></div><div class="trip-card-side">${count?`<span class="countdown-badge">${count}</span>`:''}</div></div>`}function countdownDays(d){if(!d)return null;const today=new Date();today.setHours(0,0,0,0);const target=new Date(d+'T00:00:00');return Math.ceil((target-today)/86400000)}
function countryKey(c){const aliases={'Dominican Rep.':'Dominican Republic','S. Sudan':'South Sudan','eSwatini':'Eswatini'};c=aliases[c]||c;const code=flags[c];return code?code:String(c||'').trim().toLowerCase().replace(/[^a-z0-9]+/g,' ')}
function sameCountry(a,b){return countryKey(a)===countryKey(b)}
/* One visible country name per real country. The map/common name wins; official-name aliases remain valid for old saved data. */
const COUNTRY_NAME_OVERRIDES={us:'United States',gb:'United Kingdom',fr:'France',be:'Belgium',at:'Austria',cz:'Czech Republic',tr:'Turkey',kr:'South Korea',kp:'North Korea',ir:'Iran',la:'Laos',md:'Moldova',tz:'Tanzania',bo:'Bolivia',ve:'Venezuela',vn:'Vietnam',sy:'Syria',tw:'Taiwan',ru:'Russia',bn:'Brunei',cv:'Cape Verde',ps:'Palestine',mk:'North Macedonia',cd:'Democratic Republic of the Congo',cg:'Congo'};
function preferredCountryName(code,names){
 const forced=COUNTRY_NAME_OVERRIDES[code];if(forced)return forced;
 const formal=/^(republic|kingdom|commonwealth|federal|federative|democratic|people'?s|islamic|arab|state|principality|grand duchy|sultanate|union|independent|plurinational|eastern|swiss|argentine|portuguese|italian|hellenic|rwandese|gabonese|togolese|lebanese)|\b(republic|kingdom|confederation|federation)\b/i;
 return names.slice().sort((a,b)=>(formal.test(a)?1000:0)+a.length-(formal.test(b)?1000:0)-b.length||a.localeCompare(b))[0];
}
function countryCatalog(){const groups=new Map;for(const c of Object.keys(flags)){const code=flags[c];if(!groups.has(code))groups.set(code,[]);groups.get(code).push(c)}return [...groups].map(([code,names])=>preferredCountryName(code,names)).filter(Boolean).sort((a,b)=>a.localeCompare(b))}
function countryHasStatus(c,status){return allStatusCountriesRaw().some(x=>sameCountry(x,c)&&(state.statuses[x]===status||(state.extraStatuses?.[x]||[]).includes(status)))}
function setCountryStatus(c,status,on=true){state.extraStatuses??={};const primary=state.statuses[c],extras=new Set(state.extraStatuses[c]||[]);if(on){if(primary!==status)extras.add(status)}else{if(primary===status){const replacement=[...extras][0]||'';if(replacement){state.statuses[c]=replacement;extras.delete(replacement)}else delete state.statuses[c]}else extras.delete(status)}if(extras.size)state.extraStatuses[c]=[...extras];else delete state.extraStatuses[c]}
function allStatusCountriesRaw(){return [...new Set([...Object.keys(state.statuses||{}),...Object.keys(state.extraStatuses||{})])]}
function allStatusCountries(){const grouped=new Map;for(const c of allStatusCountriesRaw()){const k=countryKey(c),prev=grouped.get(k);if(!prev||String(c).length<String(prev).length)grouped.set(k,c)}return [...grouped.values()]}
function countryTrips(c){return state.trips.filter(t=>tripCountries(t).some(x=>sameCountry(x,c)))}function countryRows(status){let a=allStatusCountries().filter(c=>countryHasStatus(c,status));if(status==='visited'){const prefs=state.visitedListPrefs||{sort:'default',year:'all',rating:'all'};if(prefs.year&&prefs.year!=='all')a=a.filter(c=>countryVisitMonths(c).some(m=>m.startsWith(prefs.year+'-')));if(prefs.rating&&prefs.rating!=='all'){const min=Number(prefs.rating);a=a.filter(c=>(countryRating(c)||0)>=min)}const r=new Map(state.visitHistory.map((c,i)=>[c,i])),dateKey=c=>countryVisitMonths(c)[0]||'',added=c=>state.countryAddedAt?.[c]||'';switch(prefs.sort){case'az':a.sort((x,y)=>x.localeCompare(y));break;case'za':a.sort((x,y)=>y.localeCompare(x));break;case'added-new':a.sort((x,y)=>added(y).localeCompare(added(x)));break;case'added-old':a.sort((x,y)=>added(x).localeCompare(added(y)));break;case'trip-new':a.sort((x,y)=>{const dx=dateKey(x),dy=dateKey(y);if(!dx&&!dy)return x.localeCompare(y);if(!dx)return 1;if(!dy)return-1;return dy.localeCompare(dx)});break;case'trip-old':a.sort((x,y)=>{const dx=dateKey(x),dy=dateKey(y);if(!dx&&!dy)return x.localeCompare(y);if(!dx)return 1;if(!dy)return-1;return dx.localeCompare(dy)});break;case'people-high':a.sort((x,y)=>countryCompanions(y).length-countryCompanions(x).length||x.localeCompare(y));break;case'people-low':a.sort((x,y)=>countryCompanions(x).length-countryCompanions(y).length||x.localeCompare(y));break;case'rating-high':a.sort((x,y)=>(countryRating(y)||0)-(countryRating(x)||0)||x.localeCompare(y));break;case'rating-low':a.sort((x,y)=>(countryRating(x)||0)-(countryRating(y)||0)||x.localeCompare(y));break;default:a.sort((x,y)=>(r.get(y)??-1)-(r.get(x)??-1))}}else if(status==='bucket'){const order=state.bucketOrder||[];a.sort((x,y)=>{const ix=order.findIndex(c=>sameCountry(c,x)),iy=order.findIndex(c=>sameCountry(c,y));return (ix<0?9999:ix)-(iy<0?9999:iy)||x.localeCompare(y)})}else if(status==='going'){const nextDate=c=>{const dates=countryTrips(c).map(t=>t.start).filter(d=>d&&countdownDays(d)>=0).sort();return dates[0]||''},added=c=>state.countryAddedAt?.[c]||'';a.sort((x,y)=>{const dx=nextDate(x),dy=nextDate(y);if(dx&&dy)return dx.localeCompare(dy);if(dx)return-1;if(dy)return 1;return added(x).localeCompare(added(y))||x.localeCompare(y)})}else a.sort((a,b)=>a.localeCompare(b));return a}
function countryRating(c){const rs=countryTrips(c).map(t=>Number(t.rating)||0).filter(Boolean);return rs.length?rs.reduce((a,b)=>a+b,0)/rs.length:0}function ratingMarkup(c){const r=countryRating(c);if(!r)return '';const rounded=Math.round(r);return `<small class="country-rating" title="Average trip rating ${r.toFixed(1)} out of 5">${'★'.repeat(rounded)}${'☆'.repeat(5-rounded)}${rsafe(r)}</small>`}function rsafe(r){return r%1?` <b>${r.toFixed(1)}</b>`:''}
function countryVisitMonths(c){const months=[];for(const t of countryTrips(c)){if(t.start)months.push(t.start.slice(0,7))}for(const city of state.cities[c]||[])for(const m of city.visits||[]){if(m)months.push(String(m).slice(0,7))}return [...new Set(months.filter(m=>/^\d{4}-\d{2}$/.test(m)))].sort().reverse()}
function countryVisitMonth(c){const latest=countryVisitMonths(c)[0];return latest?monthPretty(latest):''}
function countryYear(c){const latest=countryVisitMonths(c)[0];return latest?latest.slice(0,4):''}
function countryVisitMeta(c){const month=countryVisitMonth(c),trips=countryTrips(c).filter(t=>!t.start||countdownDays(t.start)<0).length;return {month,trips,label:month,repeat:trips>1?(trips===2?'Visited twice':`Visited ${trips} times`):''}}
function countryCompanions(c){const names=[...(state.companions[c]||[])];countryTrips(c).forEach(t=>(t.companions||[]).forEach(n=>names.push(n)));return [...new Map(names.filter(Boolean).map(n=>[String(n).trim().toLowerCase(),String(n).trim()])).values()]}
function countryCityNames(c){const names=(state.cities[c]||[]).map(x=>x.name);countryTrips(c).forEach(t=>{(t.destinations||[]).forEach(d=>{if(sameCountry(d.country||tripCountries(t)[0],c))names.push(d.name)});const map=t.cities||{};Object.entries(map).forEach(([country,cities])=>{if(sameCountry(country,c))names.push(...(cities||[]))})});return [...new Set(names.map(x=>String(x).trim().toLowerCase()).filter(Boolean))]}
function uniqueCities(c){return countryCityNames(c).length}function peopleCount(c){return countryCompanions(c).length+1}
function peopleIcon(){return `<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3.5 19v-1.2c0-3 2.4-5.2 5.5-5.2s5.5 2.2 5.5 5.2V19"/><circle cx="17" cy="9" r="2.3"/><path d="M15.6 13.7c2.8-.4 4.9 1.3 4.9 3.8V19"/></svg>`}function cityIcon(){return `<svg viewBox="0 0 24 24"><path d="M4 20V9l5-3v14M9 20V4l6 3v13M15 20v-8l5-2v10M2 20h20"/></svg>`}
function attachCountryListSwipe(){
  /* Swipe handling is owned by #countryCarousel only.
     Keeping a single gesture owner prevents one physical swipe firing twice. */
}
function renderCountryLists(){[['visited','visitedCountries'],['going','goingCountries'],['bucket','bucketCountries']].forEach(([status,id])=>{const list=$('#'+id),names=countryRows(status);list.innerHTML=names.length?names.map((c,idx)=>{const visitMeta=status==='visited'?countryVisitMeta(c):{month:'',trips:0,label:''},pc=peopleCount(c),cc=uniqueCities(c),tc=visitMeta.trips,next=status==='going'?countryTrips(c).filter(tripIsOnHorizon).sort(tripSortUpcoming)[0]:null,days=next?countdownDays(orderedTripDates(next).start):null;return `<div class="country-row premium-country-row${status==='bucket'?' bucket-rank-row':''}" data-open-country="${esc(c)}" ${status==='bucket'?`data-bucket-country="${esc(c)}"`:''} role="button" tabindex="0">${status==='bucket'?`<span class="bucket-rank">${idx+1}</span>`:''}<span class="overview-flag">${flagMarkup(c,'overview-flag-img')}</span><span class="country-row-copy"><strong>${esc(c)}</strong>${next?`<small class="trip-countdown">${days===null?'PLANNING':days===0?'TODAY ✈':days+' days to go'+(orderedTripDates(next).start?' · '+pretty(orderedTripDates(next).start):'')}</small>`:visitMeta.label?`<small class="country-row-year">${visitMeta.label}</small>`:''}${ratingMarkup(c)}</span><span class="row-metrics">${status==='visited'||countryCompanions(c).length?`<button class="country-people" data-people-country="${esc(c)}">${peopleIcon()}<span>${pc}</span></button>`:''}${status==='visited'||cc?`<button class="country-cities" data-cities-country="${esc(c)}">${cityIcon()}<span>${cc}</span></button>`:''}${status==='bucket'?`<button type="button" class="bucket-remove-btn" data-bucket-remove="${esc(c)}" aria-label="Remove ${esc(c)} from bucket list"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button>`:''}</span></div>`}).join(''):`<div class="country-empty">${status==='visited'?'No countries visited yet.':status==='going'?'No upcoming countries yet.':'Nothing on your bucket list yet.'}</div>`;if(names.length>10)list.insertAdjacentHTML('beforeend','<div class="jump-top-wrap"><button type="button" class="jump-top-btn" aria-label="Jump to top"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14l6-6 6 6"/></svg></button></div>')});attachListRowEvents();attachBucketRanking();attachCountryListSwipe();document.querySelectorAll('.jump-top-btn').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();window.scrollTo({top:0,behavior:'smooth'})});requestAnimationFrame(()=>setCountrySlide(countrySlide,false))}
function attachListRowEvents(){
  ['visitedCountries','goingCountries','bucketCountries'].forEach(id=>{
    const list=$('#'+id); if(!list)return;
    list.querySelectorAll('[data-open-country]').forEach(row=>{
      const c=row.dataset.openCountry;
      let timer=null,longPress=false,startX=0,startY=0;
      row.onclick=e=>{if(e.target.closest('button')||longPress)return;openCountry(c)};
      row.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('button')){e.preventDefault();openCountry(c)}};
      if(id!=='bucketCountries'){
        row.addEventListener('pointerdown',e=>{if(e.target.closest('button'))return;longPress=false;startX=e.clientX;startY=e.clientY;timer=setTimeout(()=>{longPress=true;navigator.vibrate?.(20);openRemoveDialog(c,id==='visitedCountries'?'visited':'going')},600)});
        row.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-startX,e.clientY-startY)>10){clearTimeout(timer);timer=null}});
        row.addEventListener('pointerup',()=>{clearTimeout(timer);timer=null;setTimeout(()=>{longPress=false},0)});
        row.addEventListener('pointercancel',()=>{clearTimeout(timer);timer=null;longPress=false});
      }
    });
    list.querySelectorAll('[data-people-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();showPeople(b.dataset.peopleCountry)});
    list.querySelectorAll('[data-cities-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();showCities(b.dataset.citiesCountry)});
    list.querySelectorAll('[data-bucket-remove]').forEach(b=>{b.onpointerdown=e=>e.stopPropagation();b.onpointerup=e=>e.stopPropagation();b.onclick=e=>{e.preventDefault();e.stopImmediatePropagation();openRemoveDialog(b.dataset.bucketRemove,'bucket')}});
  });
}
function attachBucketRanking(){
  const list=$('#bucketCountries');if(!list)return;
  if(!document.getElementById('bucket-ranking-style')){
    const style=document.createElement('style');style.id='bucket-ranking-style';style.textContent=`
      #bucketCountries .bucket-rank-row{cursor:grab;-webkit-user-select:none;user-select:none;touch-action:pan-y;-webkit-touch-callout:none;display:grid!important;grid-template-columns:52px 76px minmax(0,1fr) 42px!important;align-items:center!important;column-gap:0!important;padding-left:4px!important;padding-right:28px!important}
      #bucketCountries .bucket-rank-row .overview-flag{justify-self:start!important;margin-left:4px!important}
      #bucketCountries .bucket-rank-row .country-row-copy{justify-self:start!important;min-width:0!important}
      #bucketCountries .bucket-rank-row .row-metrics{grid-column:4!important;justify-self:end!important;margin-left:0!important}
      #bucketCountries .bucket-rank{background:none!important;border:0!important;width:52px!important;min-width:52px!important;height:auto!important;padding:0!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;color:#0b1d3b!important;font-size:30px!important;line-height:1!important;font-weight:900!important;box-shadow:none!important;font-variant-numeric:tabular-nums}
      #bucketCountries .bucket-remove-btn{margin-left:auto!important;width:42px!important;height:42px!important;min-width:42px!important;padding:9px!important;border:0!important;background:transparent!important;color:#9aa4aa!important;opacity:.72!important;display:inline-flex!important;align-items:center!important;justify-content:center!important}
      #bucketCountries .bucket-remove-btn svg{width:22px!important;height:22px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
      #bucketCountries>.bucket-drag-marker{display:block!important;box-sizing:border-box!important;border:0!important;background:transparent!important;padding:0!important;visibility:hidden!important}
      .bucket-drag-live{display:grid!important;position:fixed!important;z-index:2147483647!important;pointer-events:none!important;opacity:.94!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important}
      .bucket-drag-live{grid-template-columns:52px 76px minmax(0,1fr) 42px!important;align-items:center!important;column-gap:0!important;padding-left:4px!important;padding-right:28px!important}
      .bucket-drag-live .bucket-rank{background:none!important;border:0!important;border-radius:0!important;width:52px!important;min-width:52px!important;height:auto!important;padding:0!important;display:inline-flex!important;align-items:center!important;justify-content:flex-start!important;color:#0b1d3b!important;font-size:30px!important;line-height:1!important;font-weight:900!important;box-shadow:none!important;font-variant-numeric:tabular-nums}
      .bucket-drag-live .overview-flag{justify-self:start!important;margin-left:4px!important}
      .bucket-drag-live .country-row-copy{justify-self:start!important;min-width:0!important}
      .bucket-drag-live .row-metrics{grid-column:4!important;justify-self:end!important;margin-left:0!important}
      .bucket-drag-live .bucket-remove-btn{margin-left:auto!important;width:42px!important;height:42px!important;min-width:42px!important;padding:9px!important;border:0!important;border-radius:0!important;background:transparent!important;color:#9aa4aa!important;opacity:.72!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;box-shadow:none!important}
      .bucket-drag-live .bucket-remove-btn svg{width:22px!important;height:22px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important}
      @media(max-width:620px){#bucketCountries .bucket-rank-row,.bucket-drag-live{grid-template-columns:50px 72px minmax(0,1fr) 42px!important}#bucketCountries .bucket-rank,.bucket-drag-live .bucket-rank{width:50px!important;min-width:50px!important;font-size:29px!important}}
    `;document.head.appendChild(style)
  }
  const rows=()=>[...list.querySelectorAll('[data-bucket-country]')];
  const updateRanks=()=>rows().forEach((row,i)=>{const n=row.querySelector('.bucket-rank');if(n)n.textContent=i+1});
  rows().forEach(row=>{
    let holdTimer=null,startX=0,startY=0,lastY=0,dragging=false,marker=null,grabY=0,activeTouchId=null,suppressClick=false;
    const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
    const pointFromTouch=e=>{const a=[...(e.touches||[]),...(e.changedTouches||[])];return a.find(t=>activeTouchId==null||t.identifier===activeTouchId)||a[0]||null};
    const placeMarker=y=>{
      const cards=rows().filter(el=>el!==row);let before=null;
      for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}
      if(before)list.insertBefore(marker,before);else list.appendChild(marker);
    };
    const startDrag=(x,y)=>{
      dragging=true;window.__wozzaBucketReorderActive=true;
      const r=row.getBoundingClientRect(),cs=getComputedStyle(row);
      grabY=Math.max(10,Math.min(r.height-10,y-r.top));
      marker=document.createElement('div');marker.className='bucket-drag-marker';
      marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
      list.insertBefore(marker,row);
      row.dataset.dragStyle=row.getAttribute('style')||'';row.classList.add('bucket-drag-live');
      Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
      document.body.appendChild(row);navigator.vibrate?.(20);
    };
    const moveDrag=(x,y)=>{if(!dragging)return;row.style.top=`${y-grabY}px`;placeMarker(y)};
    const finishDrag=()=>{
      clearHold();if(!dragging){activeTouchId=null;return}
      dragging=false;if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);marker?.remove();marker=null;
      const prior=row.dataset.dragStyle||'';row.classList.remove('bucket-drag-live');if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');delete row.dataset.dragStyle;
      state.bucketOrder=rows().map(x=>x.dataset.bucketCountry);localStorage.setItem('wozzaworld-state',JSON.stringify(state));updateRanks();
      window.__wozzaBucketReorderActive=false;activeTouchId=null;suppressClick=true;setTimeout(()=>{suppressClick=false},120);
    };
    row.addEventListener('touchstart',e=>{
      if(e.target.closest('button,input,select,textarea,a')||e.touches.length!==1)return;
      const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;lastY=t.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
    },{passive:true});
    document.addEventListener('touchmove',e=>{
      if(activeTouchId==null)return;const t=pointFromTouch(e);if(!t)return;
      if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}
      if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold();lastY=t.clientY;
    },{passive:false,capture:true});
    document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
    document.addEventListener('touchcancel',finishDrag,{capture:true});
    row.addEventListener('pointerdown',e=>{
      if(e.pointerType==='touch'||e.target.closest('button,input,select,textarea,a'))return;startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
      const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};
      const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);finishDrag()};
      document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true});
    });
    row.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true);
  });
}

function setCountrySlide(i,animate=true,direction='next'){countrySlide=(i+3)%3;
if(window.WozzaSagBars)window.WozzaSagBars.set(countrySlide,animate);const t=$('#carouselTrack'),carousel=$('#countryCarousel');if(!t)return;t.style.transition='none';t.style.transform=`translateX(-${countrySlide*33.333333}%)`;requestAnimationFrame(()=>{const panel=t.children[countrySlide];if(carousel&&panel)carousel.style.height=panel.scrollHeight+'px'});if(animate){const s=$('#countryCarousel');s.classList.remove('list-in-next','list-in-prev');void s.offsetWidth;s.classList.add(direction==='next'?'list-in-next':'list-in-prev');setTimeout(()=>s.classList.remove('list-in-next','list-in-prev'),230)}}
function tripSortUpcoming(a,b){const ad=orderedTripDates(a),bd=orderedTripDates(b),da=ad.start||'',db=bd.start||'';if(da&&db)return da.localeCompare(db);if(da)return-1;if(db)return 1;return String(a.id||'').localeCompare(String(b.id||''))}
function tripSortRearview(a,b){const ad=orderedTripDates(a),bd=orderedTripDates(b),da=ad.start||ad.end||'',db=bd.start||bd.end||'';if(da&&db)return db.localeCompare(da);if(da)return-1;if(db)return 1;return String(b.id||'').localeCompare(String(a.id||''))}
function tripIsOnHorizon(t){const td=orderedTripDates(t),today=new Date();today.setHours(0,0,0,0);const start=td.start?new Date(td.start+'T00:00:00'):null,end=td.end?new Date(td.end+'T00:00:00'):null;if(end)return end>=today;if(start)return start>=today;const status=String(t.status||'').toLowerCase(),countries=tripCountries(t);return status==='upcoming'||status==='planning'||countries.some(c=>countryHasStatus(c,'going'))}function reconcileTripCountryStatuses(countries){[...new Set((countries||[]).filter(Boolean))].forEach(c=>{const trips=countryTrips(c),hasUpcoming=trips.some(tripIsOnHorizon),hasPast=trips.some(t=>!tripIsOnHorizon(t));setCountryStatus(c,'going',hasUpcoming);if(hasPast){setCountryStatus(c,'visited',true);if(!state.visitHistory.some(x=>sameCountry(x,c)))state.visitHistory.push(c)}})}
let rearviewExpanded=false,rearviewSort='date-new',rearviewYears=new Set();
function rearviewYear(t){const d=orderedTripDates(t);return String(d.start||d.end||'').slice(0,4)}
function rearviewSortedTrips(items){let a=items.filter(t=>!rearviewYears.size||rearviewYears.has(rearviewYear(t)));if(rearviewSort==='az')a.sort((x,y)=>String(x.name||'').localeCompare(String(y.name||'')));else if(rearviewSort==='za')a.sort((x,y)=>String(y.name||'').localeCompare(String(x.name||'')));else if(rearviewSort==='rating-high')a.sort((x,y)=>(Number(y.rating)||0)-(Number(x.rating)||0)||tripSortRearview(x,y));else if(rearviewSort==='rating-low')a.sort((x,y)=>(Number(x.rating)||0)-(Number(y.rating)||0)||tripSortRearview(x,y));else if(rearviewSort==='date-old')a.sort((x,y)=>-tripSortRearview(x,y));else a.sort(tripSortRearview);return a}
function rearviewFilterPanel(all){const years=[...new Set(all.map(rearviewYear).filter(Boolean))].sort((a,b)=>b.localeCompare(a));return `<div class="rearview-filter-panel" hidden><strong>Sort trips</strong><div class="rearview-sort-options"><button data-rear-sort="az" class="${rearviewSort==='az'?'active':''}">A–Z</button><button data-rear-sort="za" class="${rearviewSort==='za'?'active':''}">Z–A</button><button data-rear-sort="rating-high" class="${rearviewSort==='rating-high'?'active':''}">Rating: high to low</button><button data-rear-sort="rating-low" class="${rearviewSort==='rating-low'?'active':''}">Rating: low to high</button><button data-rear-sort="date-new" class="${rearviewSort==='date-new'?'active':''}">Newest first</button><button data-rear-sort="date-old" class="${rearviewSort==='date-old'?'active':''}">Oldest first</button></div>${years.length?`<strong>Filter by year</strong><div class="rearview-year-options"><button data-rear-year="all" class="${!rearviewYears.size?'active':''}">All years</button>${years.map(y=>`<button data-rear-year="${y}" class="${rearviewYears.has(y)?'active':''}">${y}</button>`).join('')}</div>`:''}</div>`}


/* v0.18.xx — adaptive three-zone trip-card footer + split-flap overflow */
function tripFlapIconItems(t){
  const modes=tripTravelModes(t);
  const modeKeys=modes.map(m=>String(m).toLowerCase());
  const vibes=[...new Set(t.vibes||[])].filter(v=>vibeIcon(v)&&!(String(v).toLowerCase()==='cruise'&&modeKeys.includes('cruise')));
  return [...modes.map(m=>({label:m,html:travelModeIcon(m)})),...vibes.map(v=>({label:v,html:vibeIcon(v)}))];
}
function tripFlapIcons(t){
  const items=tripFlapIconItems(t);if(!items.length)return '';
  // Paint immediately. The adaptive pass only trims/cycles if real overflow exists.
  const initial=items.map((x,i)=>`<span class="trip-flap-slot" data-flap-slot="${i}" title="${esc(x.label)}">${x.html}</span>`).join('');
  return `<div class="trip-flap-icons" data-trip-flap="${esc(t.id||'')}" data-flap-items="${encodeURIComponent(JSON.stringify(items))}" aria-label="Travel methods and trip vibes: ${esc(items.map(x=>x.label).join(', '))}">${initial}</div>`;
}
function tripAdaptiveFlags(cs){
  if(!cs.length)return '';
  const items=cs.map(c=>({label:c,html:`<button type="button" class="trip-country-flag" data-trip-country="${esc(c)}" aria-label="Open ${esc(c)} country card">${flagMarkup(c,'trip-country-flag-img')}</button>`}));
  const shown=Math.min(items.length,4),initial=items.slice(0,shown).map((x,i)=>`<span class="trip-flag-slot" data-flag-slot="${i}" title="${esc(x.label)}">${x.html}</span>`).join('');
  return `<div class="trip-card-flags" data-count="${items.length}" data-visible="${shown}" data-flag-items="${encodeURIComponent(JSON.stringify(items))}" aria-label="Trip countries">${initial}</div>`;
}
(function setupAdaptiveTripFooter(){
  if(document.getElementById('wozza-adaptive-trip-footer-style'))return;
  const st=document.createElement('style');st.id='wozza-adaptive-trip-footer-style';st.textContent=`
    #tripList .trip-card-copy{width:100%!important;padding-right:0!important}
    #tripList .trip-card-meta-row{display:grid!important;grid-template-columns:max-content minmax(0,1fr) max-content!important;align-items:center!important;column-gap:9px!important;width:calc(100% + 118px)!important;max-width:calc(100% + 118px)!important;min-width:0!important;padding-right:0!important;box-sizing:border-box!important}
    #tripList .trip-stars{flex:0 0 auto!important;display:flex!important;gap:1px!important;margin:0!important;white-space:nowrap!important}
    #tripList .trip-flap-icons{width:100%!important;min-width:0!important;display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:4px!important;overflow:visible!important;perspective:240px!important;padding-right:3px!important;box-sizing:border-box!important}
    #tripList .trip-flap-slot{width:26px;height:26px;display:grid;place-items:center;flex:0 0 26px;transform-origin:50% 50%;backface-visibility:hidden;overflow:visible!important}
    #tripList .trip-flap-slot img{display:block;max-width:24px;max-height:24px;object-fit:contain}
    #tripList .trip-card-flags{position:static!important;top:auto!important;bottom:auto!important;left:auto!important;right:auto!important;transform:none!important;justify-self:end!important;width:auto!important;max-width:118px!important;min-width:34px!important;margin:0 15px 0 0!important;display:flex!important;align-items:center!important;align-self:center!important;justify-content:flex-end!important;overflow:visible!important;gap:5px!important;perspective:240px!important}
    #tripList .trip-card-flags[data-visible="1"]{width:34px!important;min-width:34px!important}
    #tripList .trip-card-flags[data-visible="2"]{width:73px!important}
    #tripList .trip-card-flags[data-visible="3"]{width:92px!important;gap:0!important}#tripList .trip-card-flags[data-visible="3"] .trip-flag-slot+ .trip-flag-slot{margin-left:-5px}
    #tripList .trip-card-flags[data-visible="4"]{width:118px!important;gap:0!important}#tripList .trip-card-flags[data-visible="4"] .trip-flag-slot+ .trip-flag-slot{margin-left:-6px}
    #tripList .trip-card-flags[data-count="4"]{width:118px!important;gap:0!important}
    #tripList .trip-card-flags[data-count="4"] .trip-flag-slot+ .trip-flag-slot{margin-left:-6px}
    #tripList .trip-card-flags[data-count="5"],#tripList .trip-card-flags[data-count="6"],#tripList .trip-card-flags[data-count="7"],#tripList .trip-card-flags[data-count="8"],#tripList .trip-card-flags[data-count="9"]{width:118px!important;gap:0!important}
    #tripList .trip-card-flags[data-count="5"] .trip-flag-slot+ .trip-flag-slot{margin-left:-15px}
    #tripList .trip-card-flags[data-count="6"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="7"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="8"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="9"] .trip-flag-slot+ .trip-flag-slot{margin-left:-19px}
    #tripList .trip-flag-slot{width:34px;height:34px;display:grid;place-items:center;flex:0 0 34px;transform-origin:50% 50%;backface-visibility:hidden}
    #tripList .trip-flag-slot{overflow:visible!important}
    #tripList .trip-flag-slot .trip-country-flag{width:34px!important;height:34px!important;min-width:34px!important;min-height:34px!important;max-width:34px!important;max-height:34px!important;padding:0!important;margin:0!important;border:0!important;border-radius:50%!important;overflow:hidden!important;background:transparent!important;display:block!important;box-shadow:none!important}
    #tripList .trip-flag-slot .trip-country-flag-img{display:block!important;width:34px!important;height:34px!important;min-width:34px!important;min-height:34px!important;max-width:34px!important;max-height:34px!important;object-fit:cover!important;border-radius:50%!important;margin:0!important;padding:0!important;background:transparent!important}
    #tripList .trip-card-side{pointer-events:none!important}
    #tripList .trip-card-side .countdown-badge{pointer-events:auto!important}
    #tripList .trip-flap-slot.flap-out,#tripList .trip-flag-slot.flap-out{animation:wozzaAdaptiveFlapOut .16s ease-in forwards}
    #tripList .trip-flap-slot.flap-in,#tripList .trip-flag-slot.flap-in{animation:wozzaAdaptiveFlapIn .20s ease-out forwards}
    @keyframes wozzaAdaptiveFlapOut{0%{transform:rotateX(0);opacity:1}100%{transform:rotateX(-88deg);opacity:.15}}
    @keyframes wozzaAdaptiveFlapIn{0%{transform:rotateX(88deg);opacity:.15}100%{transform:rotateX(0);opacity:1}}
    @media(max-width:420px){#tripList .trip-card-meta-row{gap:7px!important;padding-right:12px!important}#tripList .trip-card-flags{max-width:108px!important}#tripList .trip-card-flags[data-count="3"],#tripList .trip-card-flags[data-count="4"],#tripList .trip-card-flags[data-count="5"],#tripList .trip-card-flags[data-count="6"],#tripList .trip-card-flags[data-count="7"],#tripList .trip-card-flags[data-count="8"],#tripList .trip-card-flags[data-count="9"]{width:108px!important}#tripList .trip-card-flags[data-count="3"] .trip-flag-slot+ .trip-flag-slot{margin-left:-3px}#tripList .trip-card-flags[data-count="4"] .trip-flag-slot+ .trip-flag-slot{margin-left:-9px}#tripList .trip-card-flags[data-count="5"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="6"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="7"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="8"] .trip-flag-slot+ .trip-flag-slot,#tripList .trip-card-flags[data-count="9"] .trip-flag-slot+ .trip-flag-slot{margin-left:-20px}}

    #tripList .trip-card-flags[data-visible]{max-width:none!important}
    @media(prefers-reduced-motion:reduce){#tripList .flap-out,#tripList .flap-in{animation:none!important}}
  `;document.head.append(st);
  const states=new WeakMap();
  const parse=(el,key)=>{try{return JSON.parse(decodeURIComponent(el.dataset[key]||''))}catch(e){return[]}};
  const flap=(slots,items,offset)=>slots.forEach((slot,i)=>{const item=items[(offset+i)%items.length];setTimeout(()=>{slot.classList.remove('flap-in');slot.classList.add('flap-out');setTimeout(()=>{slot.innerHTML=item.html;slot.title=item.label;slot.classList.remove('flap-out');void slot.offsetWidth;slot.classList.add('flap-in')},155)},i*55)});
  function footerAllocation(meta){
    const stars=meta?.querySelector('.trip-stars'),icons=meta?.querySelector('.trip-flap-icons'),flags=meta?.querySelector('.trip-card-flags');
    const iconItems=icons?parse(icons,'flapItems'):[],flagItems=flags?parse(flags,'flagItems'):[];
    const metaWidth=Math.floor(meta?.getBoundingClientRect().width||meta?.clientWidth||0);
    if(!metaWidth)return null;
    const starWidth=stars?Math.ceil(stars.getBoundingClientRect().width||stars.scrollWidth||0):0;
    const gap=parseFloat(getComputedStyle(meta).columnGap)||9;
    const rightInset=15,safety=8;
    const usable=Math.max(0,metaWidth-starWidth-(starWidth?gap:0)-rightInset-safety);
    const iconW=n=>n>0?n*26+Math.max(0,n-1)*4:0;
    const flagW=n=>n>0?34+Math.max(0,n-1)*26:0;
    const between=(i,f)=>i>0&&f>0?gap:0;

    // Equal-share first: each visible item owns one primary slot. If the number
    // of slots is odd, the middle/vibe side gets shotgun. Any share it cannot
    // use is immediately handed to the other side. We then verify against real
    // pixel widths so the two groups can never overlap.
    const maxLogical=Math.max(1,Math.floor((usable+4)/30));
    let iShare=Math.ceil(maxLogical/2),fShare=Math.floor(maxLogical/2);
    let i=Math.min(iconItems.length,iShare),f=Math.min(flagItems.length,fShare);
    let spare=maxLogical-i-f;
    while(spare>0){
      if(i<iconItems.length){i++;spare--;if(!spare)break}
      if(f<flagItems.length){f++;spare--}
      if(i>=iconItems.length&&f>=flagItems.length)break;
    }
    if(!iconItems.length){f=Math.min(flagItems.length,maxLogical);i=0}
    if(!flagItems.length){i=Math.min(iconItems.length,maxLogical);f=0}

    const fits=(a,b)=>iconW(a)+flagW(b)+between(a,b)<=usable;
    // If optical/real widths make the logical split too wide, trim from the side
    // currently holding more slots. On a tie, preserve the vibe/middle slot.
    while((i>0||f>0)&&!fits(i,f)){
      if(f>i&&f>0)f--;else if(i>f&&i>0)i--;else if(f>0)f--;else i--;
    }
    // Reclaim every safe pixel. Alternate offers, with the middle/vibe side first.
    let changed=true;
    while(changed){changed=false;
      if(i<iconItems.length&&fits(i+1,f)){i++;changed=true}
      if(f<flagItems.length&&fits(i,f+1)){f++;changed=true}
    }
    return {iconItems,flagItems,iconsShown:i,flagsShown:f,metaWidth,usable,flagWidth:flagW(f)};
  }
  function initIcons(row,allocation){
    const items=allocation?.iconItems||parse(row,'flapItems');if(!items.length)return;
    const shown=Math.min(items.length,Math.max(0,allocation?.iconsShown??items.length));
    const mode=(shown<=0||items.length===1||shown>=items.length)?'static':'flap';
    const signature=`equal:${mode}:${shown}:${items.length}:${allocation?.usable||0}`;
    if(row.dataset.renderSig===signature)return;row.dataset.renderSig=signature;
    const old=states.get(row);if(old?.timer)clearInterval(old.timer);states.delete(row);
    row.innerHTML=shown?items.slice(0,shown).map((x,i)=>`<span class="trip-flap-slot" data-flap-slot="${i}" title="${esc(x.label)}">${x.html}</span>`).join(''):'';
    if(mode==='static'||shown<=0)return;
    const state={offset:0,timer:null};states.set(row,state);state.timer=setInterval(()=>{if(!row.isConnected){clearInterval(state.timer);return}state.offset=(state.offset+shown)%items.length;flap([...row.querySelectorAll('.trip-flap-slot')],items,state.offset)},4200);
  }
  function initFlags(row,allocation){
    const items=allocation?.flagItems||parse(row,'flagItems');if(!items.length)return;row.dataset.count=String(items.length);
    const shown=Math.min(items.length,Math.max(0,allocation?.flagsShown??Math.min(items.length,4)));
    row.dataset.visible=String(shown);
    const flagWidth=shown?34+Math.max(0,shown-1)*26:0;
    row.style.setProperty('width',flagWidth+'px','important');row.style.setProperty('min-width',flagWidth+'px','important');row.style.setProperty('max-width',flagWidth+'px','important');
    const signature=`equal:${shown}:${items.length}:${allocation?.usable||0}`;if(row.dataset.renderSig===signature)return;row.dataset.renderSig=signature;
    row.innerHTML=shown?items.slice(0,shown).map((x,i)=>`<span class="trip-flag-slot" data-flag-slot="${i}" title="${esc(x.label)}">${x.html}</span>`).join(''):'';
    [...row.querySelectorAll('.trip-flag-slot')].forEach((slot,i)=>slot.style.marginLeft=i?'-8px':'0');
    const old=states.get(row);if(old?.timer)clearInterval(old.timer);if(items.length<=shown||shown<=0){states.delete(row);return}
    const state={offset:0,timer:null};states.set(row,state);state.timer=setInterval(()=>{if(!row.isConnected){clearInterval(state.timer);return}state.offset=(state.offset+shown)%items.length;flap([...row.querySelectorAll('.trip-flag-slot')],items,state.offset)},4700);
  }
  let scanQueued=false;
  function scan(){document.querySelectorAll('#tripList .trip-card-meta-row').forEach(meta=>{const icons=meta.querySelector('.trip-flap-icons'),flags=meta.querySelector('.trip-card-flags'),allocation=footerAllocation(meta);if(!allocation)return;if(flags)initFlags(flags,allocation);if(icons)initIcons(icons,allocation)})}
  function queueScan(){
    if(scanQueued)return;
    scanQueued=true;
    // Cards are inserted before CSS grid sizing has necessarily settled. Give the
    // browser two paint/layout frames before taking the one cached measurement.
    requestAnimationFrame(()=>{scanQueued=false;scan()});
  }
  function retryUnmeasured(){
    let pending=false;
    document.querySelectorAll('#tripList .trip-flap-icons').forEach(row=>{
      if(row.dataset.renderSig)return;
      const w=Math.floor(row.getBoundingClientRect().width||row.clientWidth||0);
      if(w>0){const meta=row.closest('.trip-card-meta-row'),allocation=meta?footerAllocation(meta):null;if(allocation){const flags=meta.querySelector('.trip-card-flags');if(flags)initFlags(flags,allocation);initIcons(row,allocation)}}else pending=true;
    });
    // Finite retry only: never install a continuous layout observer / render loop.
    if(pending)setTimeout(()=>requestAnimationFrame(retryUnmeasured),32);
  }
  // Ignore mutations created by our own flap/flag slot updates. Only app-level
  // card/list changes should schedule another layout pass.
  const mo=new MutationObserver(muts=>{if(muts.some(m=>!m.target.closest?.('.trip-flap-icons,.trip-card-flags'))){queueScan();setTimeout(retryUnmeasured,40)}});
  mo.observe(document.documentElement,{childList:true,subtree:true});
  let resizeTimer=null;window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{document.querySelectorAll('#tripList .trip-flap-icons,#tripList .trip-card-flags').forEach(x=>delete x.dataset.renderSig);queueScan()},120)},{passive:true});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{queueScan();setTimeout(retryUnmeasured,48)});else{queueScan();setTimeout(retryUnmeasured,48)};
})();
function renderMyTrips(){if(!state.trips.length)return '<div class="hero-card"><p class="muted">No trips yet. Add your first adventure.</p></div>';const horizon=state.trips.filter(tripIsOnHorizon).sort(tripSortUpcoming),rearAll=state.trips.filter(t=>!tripIsOnHorizon(t)),rearview=rearviewSortedTrips([...rearAll]);const horizonHtml=`<section class="trip-category"><div class="trip-category-head"><h3 class="trip-category-title">ON THE HORIZON</h3></div><div class="trip-category-list">${horizon.length?horizon.map(tripCard).join(''):'<p class="trip-category-empty">No trips on the horizon yet.</p>'}</div></section>`;const rearHtml=`<section class="trip-category rearview-category${rearviewExpanded?'':' collapsed'}"><div class="trip-category-head"><h3 class="trip-category-title">IN THE REARVIEW</h3><div class="rearview-head-actions"><button type="button" class="rearview-filter-toggle" aria-label="Sort and filter past trips" ${rearviewExpanded?'':'hidden'}><span></span><span></span><span></span></button><button type="button" class="section-collapse-toggle rearview-toggle" aria-expanded="${rearviewExpanded}" aria-label="${rearviewExpanded?'Minimise':'Expand'} In the Rearview">${rearviewExpanded?'−':'+'}</button></div></div>${!rearviewExpanded?'<img class="rearview-handnote" src="rearview-past-adventures-illustrated.svg?v=20260917-19" alt="Click to see your past adventures">':''}${rearviewFilterPanel(rearAll)}<div class="trip-category-list" ${rearviewExpanded?'':'hidden'}>${rearview.length?rearview.map(tripCard).join(''):'<p class="trip-category-empty">No trips match this filter.</p>'}</div></section>`;return horizonHtml+rearHtml}
function renderExtraStats(){const grid=$('.screen[data-screen="me"] .stats-grid');if(!grid)return;const going=$('#meGoing'),trips=$('#meTrips');if(going?.parentElement){const label=going.parentElement.querySelector('span');if(label)label.textContent='Upcoming trips'}if(trips?.parentElement){trips.textContent=state.trips.filter(t=>!tripIsOnHorizon(t)).length;const label=trips.parentElement.querySelector('span');if(label)label.textContent='Trips completed'}grid.querySelectorAll('.wozza-extra-stat').forEach(x=>x.remove());const transportGroup=m=>{m=String(m||'').toLowerCase();if(m==='air'||m==='plane')return'By air';if(m==='sea'||m==='ferry'||m==='cruise'||m==='narrowboat')return'By water';if(['car','campervan','motorhome','train','coach / bus','motorbike','bicycle','on foot'].includes(m))return'By land';return m?'Other':''};const modes=state.trips.flatMap(tripTravelModes).map(transportGroup).filter(Boolean);const counts={};modes.forEach(m=>counts[m]=(counts[m]||0)+1);const fav=Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0]?.[0]||'';const ratings=state.trips.map(t=>Number(t.rating)||0).filter(Boolean);const avg=ratings.length?ratings.reduce((a,b)=>a+b,0)/ratings.length:0;const visited=countryRows('visited'),continents=milestoneContinents(visited),worldPct=visited.length?visited.length/193*100:0;const vibeCounts={};state.trips.filter(t=>!tripIsOnHorizon(t)).forEach(t=>{new Set(t.vibes||[]).forEach(v=>{v=String(v||'').trim();if(v)vibeCounts[v]=(vibeCounts[v]||0)+1})});const favVibe=Object.entries(vibeCounts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]))[0]?.[0]||'',vibeStatLabels={'City Break':'City','Beach Holiday':'Beach','Spa & Wellness':'Wellness','Snow & Ski':'Snow','Visiting Friends & Family':'Friends & Family','Great Outdoors':'Outdoors'},favVibeDisplay=vibeStatLabels[favVibe]||favVibe;const add=(value,label,cls='')=>{const card=document.createElement('div');card.className='stat wozza-extra-stat';card.innerHTML=`<strong class="${cls}">${value}</strong><span>${label}</span>`;grid.append(card)};add(`${continents} of 7`,'Continents travelled');add(worldPct?`${worldPct.toFixed(1)}%`:'0.0%','World explored');add(fav?esc(fav):'—','Favourite way to travel');add(favVibeDisplay?esc(favVibeDisplay):'—','Most travelled vibe',favVibeDisplay.length>12?'wozza-stat-vibe-value wozza-stat-vibe-long':'wozza-stat-vibe-value');add(avg?avg.toFixed(1)+' <em class="avg-rating-star">★</em>':'—','Average trip rating');const baseVisited=grid.querySelector('#meVisited')?.closest('.stat'),dest=grid.querySelector('#meCities')?.closest('.stat'),completed=grid.querySelector('#meTrips')?.closest('.stat'),upcoming=grid.querySelector('#meGoing')?.closest('.stat'),extras=[...grid.querySelectorAll('.wozza-extra-stat')];if(extras[0]){extras[0].dataset.stat='continents';extras[0].classList.add('passport-stat');extras[0].setAttribute('role','button');extras[0].tabIndex=0;}[baseVisited,extras[0],extras[1],dest,completed,upcoming,extras[2],extras[3],extras[4]].filter(Boolean).forEach(card=>grid.append(card));if(!document.getElementById('wozza-nine-stat-grid-style')){const st=document.createElement('style');st.id='wozza-nine-stat-grid-style';st.textContent='.stats-grid .wozza-stat-long-value{font-size:clamp(16px,4.4vw,21px)!important;line-height:1.05!important;overflow-wrap:anywhere}.stats-grid .wozza-stat-vibe-value{white-space:nowrap!important}.stats-grid .wozza-stat-vibe-long{font-size:clamp(13px,3.7vw,18px)!important;line-height:1!important;letter-spacing:-.025em!important}';document.head.appendChild(st)}}
function setupTripTitleScroll(){requestAnimationFrame(()=>{document.querySelectorAll('.trip-card-title-row strong').forEach(el=>{el.getAnimations?.().forEach(a=>a.cancel());el.style.transform='';const box=el.parentElement;if(!box)return;const fullWidth=Math.ceil(el.getBoundingClientRect().width||el.scrollWidth),visibleWidth=Math.floor(box.getBoundingClientRect().width||box.clientWidth),overflow=Math.max(0,fullWidth-visibleWidth);if(overflow>2){el.animate([{transform:'translateX(0)'},{transform:'translateX(0)',offset:.18},{transform:`translateX(-${overflow}px)`,offset:.72},{transform:`translateX(-${overflow}px)`,offset:.84},{transform:'translateX(0)'}],{duration:12000,iterations:Infinity,easing:'ease-in-out'})}});const input=$('#tripName');if(input){clearInterval(input._wozzaTitleTimer);clearTimeout(input._wozzaTitleStart);cancelAnimationFrame(input._wozzaTitleRaf||0);input.scrollLeft=0;const glide=(to,duration=6500)=>{cancelAnimationFrame(input._wozzaTitleRaf||0);const from=input.scrollLeft,start=performance.now(),delta=to-from;const tick=now=>{if(document.activeElement===input)return;const t=Math.min(1,(now-start)/duration),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;input.scrollLeft=from+delta*e;if(t<1)input._wozzaTitleRaf=requestAnimationFrame(tick)};input._wozzaTitleRaf=requestAnimationFrame(tick)};const run=()=>{const max=input.scrollWidth-input.clientWidth;if(max>2&&document.activeElement!==input){glide(max,6500);setTimeout(()=>{if(document.activeElement!==input)glide(0,4200)},8000)}};input._wozzaTitleStart=setTimeout(()=>{run();input._wozzaTitleTimer=setInterval(run,14000)},2200)}})}
function milestoneContinents(visited){const continentMap={Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova'],Africa:['Niger','Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria'],Asia:['China','Japan','Thailand','India','Vietnam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey'],"North America":['United States of America','United States','Canada','Mexico','Cuba','Jamaica'],"South America":['Brazil','Argentina','Chile','Peru','Colombia'],Oceania:['Australia','New Zealand','Fiji'],Antarctica:['Antarctica']};return Object.values(continentMap).filter(list=>visited.some(c=>list.some(x=>sameCountry(x,c)))).length}
function milestoneAwards(){const visited=countryRows('visited'),continents=milestoneContinents(visited),completed=state.trips.filter(t=>!tripIsOnHorizon(t)).length;return [{name:'First Stamp',desc:'Visit your first country.',img:'milestone-first-stamp.png',unlocked:visited.length>=1},{name:'Continental Drift',desc:'Visit 2 different continents.',img:'milestone-continental-drift.png',unlocked:continents>=2},{name:'Frequent Flyer',desc:'Complete 10 trips.',img:'milestone-frequent-flyer.png',unlocked:completed>=10},{name:'Quarter of the World',desc:"Visit 25% of the world’s countries.",img:'milestone-quarter-world.png',unlocked:visited.length>=Math.ceil(195*.25)},{name:'Seven Continents',desc:'Set foot on all 7 continents.',img:'milestone-seven-continents.png',unlocked:continents>=7}]}
function openMilestoneDialog(a){const d=$('#milestoneDialog');if(!d)return;$('#milestoneDialogArt').innerHTML=`<img src="${a.img}" alt="${esc(a.name)} milestone stamp">`;$('#milestoneDialogTitle').textContent=a.name;$('#milestoneDialogDesc').textContent=a.desc;$('#milestoneDialogStatus').textContent=a.unlocked?'Milestone unlocked':'Locked — keep exploring';d.showModal()}
function renderMilestones(){const grid=$('#milestonesGrid');if(!grid)return;const awards=milestoneAwards();const lock=`<span class="milestone-strap" aria-hidden="true"><i></i></span><span class="milestone-tag" aria-hidden="true"><b>lock</b></span>`;const tile=(a,i)=>`<button type="button" class="milestone-tile ${a.unlocked?'is-unlocked':'is-locked'}" data-milestone="${i}" aria-label="${esc(a.name)} — ${a.unlocked?'unlocked':'locked'}"><div class="milestone-stamp-wrap"><img src="${a.img}" alt="" class="milestone-stamp">${a.unlocked?'':lock}</div></button>`;const blanks=Array.from({length:15},()=>`<div class="milestone-tile milestone-blank is-locked" aria-label="Future milestone locked"><div class="milestone-stamp-wrap"><span class="blank-stamp-art" aria-hidden="true">⌁</span>${lock}</div></div>`).join('');grid.innerHTML=awards.map(tile).join('')+blanks;grid.querySelectorAll('[data-milestone]').forEach(b=>b.onclick=()=>openMilestoneDialog(awards[Number(b.dataset.milestone)]))}
function render(){ applyWorldViewName(); const passportName=$('#passportName');if(passportName&&document.activeElement!==passportName)passportName.value=(localStorage.getItem('wozzaworld-first-name')||'');$$('.country').forEach(p=>{p.classList.remove('visited','going','bucket','map-filter-bucket');['visited','going'].forEach(s=>{if(mapFilterPrefs[s]&&countryHasStatus(p.dataset.country,s))p.classList.add(s)});if(mapFilterPrefs.bucket&&countryHasStatus(p.dataset.country,'bucket'))p.classList.add('map-filter-bucket')});const vals=allStatusCountries(),visited=new Set(allStatusCountries().filter(c=>countryHasStatus(c,'visited')));$('#visitedCount').textContent=visited.size;const vh=$('#visitedCountriesHeading'),wp=$('#worldExploredPercent');if(vh)vh.textContent='VISITED';if(wp)wp.textContent=`${Math.round(visited.size/195*100)}% OF THE WORLD EXPLORED`;$('#goingCount').textContent=vals.filter(c=>countryHasStatus(c,'going')).length;$('#wishCount').textContent=vals.filter(c=>countryHasStatus(c,'bucket')).length;const meVisited=$('#meVisited');if(meVisited){const current=meVisited.querySelector('.visited-current');if(current)current.textContent=visited.size;else meVisited.textContent=visited.size;}$('#meCities').textContent=[...visited].reduce((n,c)=>n+uniqueCities(c),0);$('#meGoing').textContent=vals.filter(c=>countryHasStatus(c,'going')).length;$('#meTrips').textContent=state.trips.length;renderCompanionStats();renderMilestones();renderPassportCarouselStats();setPassportStatsSlide(passportStatsSlide);renderExtraStats();$('#tripList').innerHTML=renderMyTrips();setupTripTitleScroll();renderCountryLists();renderRecycleBin();renderDepartureBoard();attachTripRatingEvents();attachTripCardEvents();if(currentCountry)renderSheet()}
function showPeople(c){const p=countryCompanions(c);$('#peopleDialogTitle').textContent=`${c} — ${p.length+1} travellers`;$('#peopleDialogList').innerHTML=`<span class="you-chip">You</span>`+(p.length?p.map(n=>`<span>${esc(n)}</span>`).join(''):'');$('#peopleDialog').showModal()}function countryCityDisplay(c){const map=new Map();for(const x of state.cities[c]||[])map.set(String(x.name).trim().toLowerCase(),{name:x.name,type:x.type||'City',visits:[...(x.visits||[])]});for(const t of countryTrips(c)){for(const d of t.destinations||[]){if(!sameCountry(d.country||tripCountries(t)[0],c))continue;const k=String(d.name||'').trim().toLowerCase();if(!k)continue;const rec=map.get(k)||{name:d.name,type:d.type||'Other',visits:[]};const m=d.start?d.start.slice(0,7):(t.start?t.start.slice(0,7):'');if(m&&!rec.visits.includes(m))rec.visits.push(m);map.set(k,rec)}for(const [country,cities] of Object.entries(t.cities||{})){if(!sameCountry(country,c))continue;for(const name of cities||[]){const k=String(name).trim().toLowerCase();if(!k)continue;const rec=map.get(k)||{name,type:'City',visits:[]};const m=t.start?t.start.slice(0,7):'';if(m&&!rec.visits.includes(m))rec.visits.push(m);map.set(k,rec)}}}return [...map.values()]}
function openRemoveDialog(c,status=null){pendingRemoveCountry=c;pendingRemoveStatus=status||state.statuses[c];status=pendingRemoveStatus;const label=status==='visited'?'Visited':status==='going'?'Visiting':'Bucket List',bodyLabel=status==='visited'?'visited countries':status==='going'?'visiting countries':'Bucket List';$('#removeDialogTitle').textContent=`Remove from ${label}?`;const dialog=$('#removeDialog'),copy=dialog?.querySelector('p'),confirm=$('#confirmRemove');if(copy)copy.textContent=`Do you want to remove ${c} from your ${bodyLabel}? You can always add it back later.`;if(confirm)confirm.textContent='Remove';dialog.showModal()}function removeCountry(c,status=pendingRemoveStatus||state.statuses[c]){if(!status||!countryHasStatus(c,status))return;const item={country:c,status,removedAt:Date.now()};state.recycleBin=state.recycleBin.filter(x=>!(x.country===c&&x.status===status));state.recycleBin.unshift(item);setCountryStatus(c,status,false);lastRemoved=item;save();toast(`${c} removed — tap to undo`,undoLastRemove)}function undoLastRemove(){if(!lastRemoved)return;setCountryStatus(lastRemoved.country,lastRemoved.status,true);state.recycleBin=state.recycleBin.filter(i=>!(i.country===lastRemoved.country&&i.status===lastRemoved.status));lastRemoved=null;save();toast('Country restored')}
function permanentlyDeleteCountryAt(i){const x=state.recycleBin[i];if(!x)return;delete state.companions[x.country];delete state.memories[x.country];delete state.places[x.country];delete state.cities[x.country];state.trips=state.trips.map(t=>({...t,countries:tripCountries(t).filter(c=>!sameCountry(c,x.country))})).filter(t=>t.countries.length);state.recycleBin.splice(i,1)}
let permanentDeleteAction=null;function askPermanentDelete(title,text,action){permanentDeleteAction=action;$('#permanentDeleteTitle').textContent=title;$('#permanentDeleteText').textContent=text;$('#permanentDeleteDialog').showModal()}$('#cancelPermanentDelete').onclick=()=>{permanentDeleteAction=null;$('#permanentDeleteDialog').close()};$('#confirmPermanentDelete').onclick=()=>{const fn=permanentDeleteAction;permanentDeleteAction=null;$('#permanentDeleteDialog').close();fn?.()};
function preloadRecycleEmptyAssets(){if(window.__wozzaRecycleEmptyAssetsPreloaded)return;window.__wozzaRecycleEmptyAssetsPreloaded=true;['recycle-empty-desert.png','recycle-tumbleweed.png'].forEach(src=>{const img=new Image();img.decoding='async';img.src=src})}function renderRecycleBin(){const el=$('#recycleList');if(!el)return;preloadRecycleEmptyAssets();const saveAndKeepRecycleOpen=()=>{localStorage.setItem('wozzaworld-state',JSON.stringify(state));const tripList=$('#tripList');if(tripList){tripList.innerHTML=renderMyTrips();setupTripTitleScroll();attachTripRatingEvents();attachTripCardEvents()}renderCountryLists();renderDepartureBoard();renderPassportCarouselStats();renderExtraStats();const d=$('#recycleDialog');if(d?.open){el.style.transition='opacity 110ms ease';el.style.opacity='.15';setTimeout(()=>{renderRecycleBin();el.style.opacity='0';requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.opacity='1';setTimeout(()=>{el.style.removeProperty('transition');el.style.removeProperty('opacity')},140)}))},90)}else{render();requestAnimationFrame(()=>{if(d&&!d.open)d.showModal()})}};let selection=new Set(),selectMode=false;const undo=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5v-4M5.5 7.5A8 8 0 1 1 4 14"/></svg>`,bin=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>`;const countries=state.recycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="c:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.country)}" tabindex="-1">✓</button>${flagMarkup(x.country)}<span class="recycle-copy"><strong>${esc(x.country)}</strong><small>Country</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-country="${i}" aria-label="Restore ${esc(x.country)}">${undo}</button><button type="button" class="delete-btn" data-delete-country="${i}" aria-label="Delete ${esc(x.country)} permanently">${bin}</button></span></div>`);const companions=state.companionRecycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="p:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.name)}" tabindex="-1">✓</button><span class="recycle-copy"><strong>${esc(x.name)}</strong><small>Travel companion</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-companion="${i}" aria-label="Restore ${esc(x.name)}">${undo}</button><button type="button" class="delete-btn" data-delete-companion="${i}" aria-label="Delete ${esc(x.name)} permanently">${bin}</button></span></div>`);const vibes=state.vibeRecycleBin.map((x,i)=>`<div class="recycle-row" data-recycle-key="v:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(x.name)}" tabindex="-1">✓</button><span class="recycle-copy"><strong>${esc(x.name)}</strong><small>Custom vibe</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-vibe="${i}" aria-label="Restore ${esc(x.name)}">${undo}</button><button type="button" class="delete-btn" data-delete-vibe="${i}" aria-label="Delete ${esc(x.name)} permanently">${bin}</button></span></div>`);const trips=state.tripRecycleBin.map((t,i)=>`<div class="recycle-row" data-recycle-key="t:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(t.name)}" tabindex="-1">✓</button><span class="recycle-trip-icon">✈</span><span class="recycle-copy"><strong>${esc(t.name)}</strong><small>Trip · ${tripCountries(t).map(esc).join(' · ')}</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-trip="${i}" aria-label="Restore ${esc(t.name)}">${undo}</button><button type="button" class="delete-btn" data-delete-trip="${i}" aria-label="Delete ${esc(t.name)} permanently">${bin}</button></span></div>`);el.innerHTML=(countries.length||trips.length||companions.length||vibes.length||state.activityRecycleBin?.length||state.stopRecycleBin?.length)?`<div class="recycle-select-head"><span>Choose items to restore or permanently delete.</span><button type="button" data-enter-select>Select</button></div><div class="recycle-bulkbar" hidden><strong><span data-selected-count>0</span> selected</strong><button type="button" data-select-all>Select all</button><button type="button" data-delete-selected disabled>Delete selected</button><button type="button" data-cancel-selected>Done</button></div>${[...countries,...trips,...companions,...vibes].join('')}`:`<div class="recycle-empty-state recycle-desert-empty"><p class="recycle-empty-subtitle">Nothing to see here.</p><div class="recycle-desert-scene"><img class="recycle-desert-bg" src="recycle-empty-desert.png" alt="Open suitcase in a quiet desert"><img class="recycle-tumbleweed recycle-tumbleweed-back" src="recycle-tumbleweed.png" alt="" aria-hidden="true"><img class="recycle-tumbleweed recycle-tumbleweed-front" src="recycle-tumbleweed.png" alt="" aria-hidden="true"></div></div>`;const bar=el.querySelector('.recycle-bulkbar'),head=el.querySelector('.recycle-select-head'),deleteSelected=el.querySelector('[data-delete-selected]'),selectAll=el.querySelector('[data-select-all]');const rows=()=>[...el.querySelectorAll('.recycle-row')];const sync=()=>{el.classList.toggle('selection-mode',selectMode);if(head)head.hidden=selectMode;if(bar)bar.hidden=!selectMode;el.querySelector('[data-selected-count]')&&(el.querySelector('[data-selected-count]').textContent=selection.size);if(deleteSelected)deleteSelected.disabled=!selection.size;if(selectAll)selectAll.textContent=selection.size===rows().length&&rows().length?'Deselect all':'Select all';rows().forEach(r=>{const on=selection.has(r.dataset.recycleKey);r.classList.toggle('selected',on);r.querySelector('.recycle-select-dot')?.setAttribute('aria-pressed',String(on))})};const toggleRow=row=>{if(!selectMode)return;selection.has(row.dataset.recycleKey)?selection.delete(row.dataset.recycleKey):selection.add(row.dataset.recycleKey);sync()};el.querySelector('[data-enter-select]')?.addEventListener('click',()=>{selectMode=true;selection.clear();sync()});selectAll?.addEventListener('click',()=>{const all=rows();if(selection.size===all.length)selection.clear();else all.forEach(r=>selection.add(r.dataset.recycleKey));sync()});rows().forEach(row=>row.addEventListener('click',e=>{if(!selectMode||e.target.closest('.restore-btn,.delete-btn'))return;e.preventDefault();toggleRow(row)}));el.querySelectorAll('.recycle-select-dot').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();toggleRow(b.closest('.recycle-row'))});el.querySelectorAll('.delete-btn').forEach(btn=>btn.onclick=e=>{e.stopPropagation();if(selectMode)return;if(btn.dataset.deleteCountry!==undefined){const i=+btn.dataset.deleteCountry,x=state.recycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.country}? This cannot be undone.`,()=>{permanentlyDeleteCountryAt(i);saveAndKeepRecycleOpen()})}else if(btn.dataset.deleteCompanion!==undefined){const i=+btn.dataset.deleteCompanion,x=state.companionRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.name}? This cannot be undone.`,()=>{state.companionRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}else if(btn.dataset.deleteVibe!==undefined){const i=+btn.dataset.deleteVibe,x=state.vibeRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${x.name}? This cannot be undone.`,()=>{state.vibeRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}else{const i=+btn.dataset.deleteTrip,t=state.tripRecycleBin[i];askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${t.name}? This cannot be undone.`,()=>{state.tripRecycleBin.splice(i,1);saveAndKeepRecycleOpen()})}});el.querySelectorAll('[data-restore-country]').forEach(b=>b.onclick=e=>{e.stopPropagation();const x=state.recycleBin[+b.dataset.restoreCountry];state.statuses[x.country]=x.status;state.recycleBin.splice(+b.dataset.restoreCountry,1);saveAndKeepRecycleOpen();recycleBinToast(`${x.country} restored`)});el.querySelectorAll('[data-restore-companion]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreCompanion,x=state.companionRecycleBin[i];if(x&&!state.companionBank.some(n=>n.toLowerCase()===String(x.name).toLowerCase()))state.companionBank.push(x.name);state.companionRecycleBin.splice(i,1);saveAndKeepRecycleOpen();recycleBinToast(`${x.name} restored`)});el.querySelectorAll('[data-restore-vibe]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreVibe,x=state.vibeRecycleBin[i];if(x&&!state.vibeBank.some(n=>String(n).toLowerCase()===String(x.name).toLowerCase()))state.vibeBank.push(x.name);state.vibeRecycleBin.splice(i,1);saveAndKeepRecycleOpen();recycleBinToast(`${x.name} restored`)});el.querySelectorAll('[data-restore-trip]').forEach(b=>b.onclick=e=>{e.stopPropagation();const i=+b.dataset.restoreTrip,t=state.tripRecycleBin[i];state.trips.push(t);state.tripRecycleBin.splice(i,1);tripCountries(t).forEach(c=>{if(!state.statuses[c])state.statuses[c]=t.start&&countdownDays(t.start)>=0?'going':'visited'});saveAndKeepRecycleOpen();recycleBinToast(`${t.name} restored`)});el.querySelector('[data-cancel-selected]')?.addEventListener('click',()=>{selection.clear();selectMode=false;sync()});deleteSelected?.addEventListener('click',()=>{if(!selection.size)return;askPermanentDelete('Delete permanently?',`Are you sure you want to permanently delete ${selection.size} selected item${selection.size===1?'':'s'}? This cannot be undone.`,()=>{const ci=[...selection].filter(k=>k.startsWith('c:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),ti=[...selection].filter(k=>k.startsWith('t:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),pi=[...selection].filter(k=>k.startsWith('p:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),vi=[...selection].filter(k=>k.startsWith('v:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),ai=[...selection].filter(k=>k.startsWith('a:')).map(k=>+k.slice(2)).sort((a,b)=>b-a),si=[...selection].filter(k=>k.startsWith('s:')).map(k=>+k.slice(2)).sort((a,b)=>b-a);ci.forEach(permanentlyDeleteCountryAt);ti.forEach(i=>state.tripRecycleBin.splice(i,1));pi.forEach(i=>state.companionRecycleBin.splice(i,1));vi.forEach(i=>state.vibeRecycleBin.splice(i,1));ai.forEach(i=>state.activityRecycleBin?.splice(i,1));si.forEach(i=>state.stopRecycleBin?.splice(i,1));saveAndKeepRecycleOpen()})});sync()}
function closeCountrySearchPickers(fromPop=false){let closed=false;$$('.country-search').forEach(box=>{if(!box.hidden){box.hidden=true;closed=true}});if(closed&&!fromPop&&history.state?.wozzaCountryPicker)history.back();return closed}
function ensureCountrySearchClose(box){if(box.querySelector('.country-search-close'))return;const input=box.querySelector('input');if(!input)return;let field=input.closest('.country-search-field');if(!field){field=document.createElement('div');field.className='country-search-field';input.parentNode.insertBefore(field,input);field.appendChild(input)}const close=document.createElement('button');close.type='button';close.className='country-search-close';close.setAttribute('aria-label','Close country picker');close.textContent='×';close.onclick=e=>{e.preventDefault();e.stopPropagation();closeCountrySearchPickers()};field.appendChild(close)}
function setupCountrySearch(){if(!document.getElementById('country-search-close-style')){const st=document.createElement('style');st.id='country-search-close-style';st.textContent=`.country-search-field{position:relative!important;width:100%!important}.country-search-field>input{width:100%!important;box-sizing:border-box!important;padding-right:54px!important}.country-search-field>.country-search-close{position:absolute!important;z-index:5!important;right:14px!important;top:50%!important;transform:translateY(-50%)!important;width:30px!important;height:30px!important;border-radius:50%!important;border:0!important;background:#f1f0eb!important;color:#111!important;font-size:22px!important;line-height:1!important;font-weight:500!important;display:flex!important;align-items:center!important;justify-content:center!important;margin:0!important;padding:0!important}`;document.head.appendChild(st)}$$('.country-search').forEach(ensureCountrySearchClose);$$('.list-add').forEach(btn=>btn.onclick=()=>{const status=btn.dataset.addStatus,box=$(`.country-search[data-search-for="${status}"]`);$$('.country-search').forEach(x=>{if(x!==box)x.hidden=true});const opening=box.hidden;box.hidden=!box.hidden;if(opening){history.pushState({...history.state,wozzaCountryPicker:true},'');const input=box.querySelector('input');input.value='';renderSearchResults(box,status,'');input.focus()}else if(history.state?.wozzaCountryPicker)history.back()});$$('.country-search input').forEach(input=>input.oninput=()=>{const box=input.closest('.country-search');renderSearchResults(box,box.dataset.searchFor,input.value)})}
window.addEventListener('popstate',()=>closeCountrySearchPickers(true));
function renderSearchResults(box,status,q){const term=q.trim().toLowerCase(),names=countryCatalog().filter(c=>!countryHasStatus(c,status)&&(!term||c.toLowerCase().includes(term))).slice(0,12);box.querySelector('.country-search-results').innerHTML=names.map(c=>`<button class="country-search-result" data-add-country="${esc(c)}">${esc(c)}</button>`).join('')||'<div class="muted">No matches</div>';box.querySelectorAll('[data-add-country]').forEach(b=>b.onclick=()=>{const c=b.dataset.addCountry;state.statuses[c]=status;state.countryAddedAt[c]=new Date().toISOString();if(status==='visited'){state.visitHistory=state.visitHistory.filter(x=>x!==c);state.visitHistory.push(c)}if(status==='bucket'&&!state.bucketOrder.some(x=>sameCountry(x,c)))state.bucketOrder.push(c);box.hidden=true;if(history.state?.wozzaCountryPicker)history.back();save();toast(`${c} added`)})}
function attachCountryEvents(){$$('.country').forEach(p=>{
  /* World View countries now have one job: a normal tap/click opens the Country Card.
     D3 continues to own pan/pinch/zoom and suppresses clicks produced by a real drag. */
  p.onpointerdown=null;
  p.onpointermove=null;
  p.onpointerup=null;
  p.onpointerleave=null;
  p.onpointercancel=null;
  p.onclick=e=>{
    if(!document.body.classList.contains('map-view'))return;
    e.preventDefault();
    e.stopPropagation();
    openCountry(p.dataset.country,{type:'map'});
  };
  p.onkeydown=e=>{
    if(!document.body.classList.contains('map-view'))return;
    if(e.key==='Enter'||e.key===' '){
      e.preventDefault();
      openCountry(p.dataset.country,{type:'map'});
    }
  };
})}
let mapZoomBehavior=null;
function resetMapZoom(animate=true){const svg=d3.select('#worldMap');svg.select('#sphere').attr('transform',null);svg.select('#countries').attr('transform',null);svg.select('#countryLabels').selectAll('text').style('display','none').attr('transform',null);if(!mapZoomBehavior)return;svg.property('__zoom',d3.zoomIdentity);if(document.body.classList.contains('map-view'))svg.transition().duration(animate?260:0).call(mapZoomBehavior.transform,d3.zoomIdentity)}
async function buildMap(){try{const world=await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r=>r.json()),features=topojson.feature(world,world.objects.countries).features;availableCountries=[...new Set([
...features.map(d=>d.properties.name).filter(Boolean),
...Object.keys(flags).filter(c=>![
'Eastern Republic of Uruguay','Republic of Uzbekistan','Holy See (Vatican City State)',
'Bolivarian Republic of Venezuela','Venezuela, Bolivarian Republic of',
'Virgin Islands, British','Virgin Islands, U.S.','Virgin Islands of the United States',
'Socialist Republic of Viet Nam','Viet Nam','Republic of Yemen',
'Republic of South Africa'
].includes(c))
])].sort();const svg=d3.select('#worldMap'),projection=d3.geoEqualEarth().fitExtent([[24,28],[976,492]],{type:'Sphere'}),path=d3.geoPath(projection);const sphereD=path({type:'Sphere'});svg.select('#sphere').attr('d',sphereD);let defs=svg.select('defs');if(defs.empty())defs=svg.insert('defs',':first-child');let globeClip=defs.select('#worldGlobeClip');if(globeClip.empty())globeClip=defs.append('clipPath').attr('id','worldGlobeClip');globeClip.selectAll('path').data([null]).join('path').attr('d',sphereD);svg.select('#countries').attr('clip-path','url(#worldGlobeClip)');svg.select('#countries').selectAll('path').data(features).join('path').attr('class','country').attr('d',path).attr('data-country',d=>d.properties.name).attr('tabindex','0').attr('aria-label',d=>d.properties.name);function labelFeature(f){if(f.geometry?.type!=='MultiPolygon')return f;const polys=f.geometry.coordinates.map(coords=>({type:'Feature',properties:f.properties,geometry:{type:'Polygon',coordinates:coords}}));return polys.sort((a,b)=>d3.geoArea(b)-d3.geoArea(a))[0]||f}const labelData=features.map(f=>{const lf=labelFeature(f);return{feature:lf,name:f.properties.name==='eSwatini'?'Eswatini':f.properties.name,centroid:path.centroid(lf),bounds:path.bounds(lf)}}).filter(x=>Number.isFinite(x.centroid[0])&&Number.isFinite(x.centroid[1]));
const vietnamLabel=labelData.find(d=>d.name==='Vietnam');if(vietnamLabel){const vietnamAnchor=projection([107.75,16.2]);if(vietnamAnchor)vietnamLabel.centroid=vietnamAnchor;}
const kaliningradPt=projection([20.52,54.71]);
if(kaliningradPt)labelData.push({name:'Kaliningrad',country:'Russia',centroid:kaliningradPt,bounds:[[kaliningradPt[0]-7,kaliningradPt[1]-4],[kaliningradPt[0]+7,kaliningradPt[1]+4]]});const labels=svg.select('#countryLabels').selectAll('text').data(labelData).join('text').attr('class','map-country-label').text(d=>d.name).attr('text-anchor','middle').attr('dominant-baseline','central').style('display','none').attr('tabindex','0').attr('role','button').attr('aria-label',d=>d.name).on('click',(event,d)=>{if(!document.body.classList.contains('map-view'))return;event.preventDefault();event.stopPropagation();openCountry(d.country||d.name,{type:'map'})}).on('keydown',(event,d)=>{if(!document.body.classList.contains('map-view'))return;if(event.key==='Enter'||event.key===' '){event.preventDefault();openCountry(d.country||d.name,{type:'map'})}});let portraitLabelBand=0;
function updateCountryLabels(transform){
 if(!document.body.classList.contains('map-view')){labels.style('display','none');portraitLabelBand=0;return}
 const portrait=window.matchMedia('(orientation: portrait)').matches;
 if(!portrait){
  if(transform.k<2.15){labels.style('display','none');return}
  const occupied=[];
  labels.each(function(d){
   const pt=transform.apply(d.centroid),bw=(d.bounds[1][0]-d.bounds[0][0])*transform.k,bh=(d.bounds[1][1]-d.bounds[0][1])*transform.k,font=8,tw=Math.max(8,d.name.length*4.25);
   let show=bw>tw*1.25&&bh>font*1.7&&pt[0]>8&&pt[0]<992&&pt[1]>8&&pt[1]<512;
   if(show){const box=[pt[0]-tw/2-2,pt[1]-font/2-2,pt[0]+tw/2+2,pt[1]+font/2+2];if(occupied.some(b=>!(box[2]<b[0]||box[0]>b[2]||box[3]<b[1]||box[1]>b[3])))show=false;else occupied.push(box)}
   d3.select(this).attr('x',pt[0]).attr('y',pt[1]-(d.name==='Croatia'?(transform.k>=12?68:34):0)).style('display',show?null:'none')
  });
  return
 }
 const k=transform.k;
 if(k<2.15){portraitLabelBand=0;labels.style('display','none');return}
 /* Stable zoom bands. Different enter/leave thresholds stop labels chattering
    when a pinch gesture hovers around a boundary. */
 if(portraitLabelBand===0)portraitLabelBand=1;
 if(portraitLabelBand===1&&k>=3.45)portraitLabelBand=2;
 else if(portraitLabelBand===2&&k<3.10)portraitLabelBand=1;
 if(portraitLabelBand===2&&k>=5.35)portraitLabelBand=3;
 labels.each(function(d){
  const pt=transform.apply(d.centroid);
  const baseW=d.bounds[1][0]-d.bounds[0][0],baseH=d.bounds[1][1]-d.bounds[0][1],baseArea=baseW*baseH;
  const show=portraitLabelBand===3||(portraitLabelBand===2&&baseArea>=28)||(portraitLabelBand===1&&baseArea>=115);
  d3.select(this).attr('x',pt[0]).attr('y',pt[1]-(d.name==='Croatia'?(transform.k>=12?68:34):0)).style('display',show?null:'none')
 })
}function clearPortraitWorldCopies(){svg.selectAll('.portrait-world-copy').remove()}
function ensurePortraitOcean(){
 let ocean=svg.select('#portraitOcean');
 if(ocean.empty())ocean=svg.insert('rect',':first-child').attr('id','portraitOcean').attr('x',-5000).attr('y',-5000).attr('width',11000).attr('height',10520).attr('pointer-events','none');
 const sphereFill=getComputedStyle(svg.select('#sphere').node()).fill;
 ocean.attr('fill',sphereFill).style('display',document.body.classList.contains('map-view')&&window.matchMedia('(orientation: portrait)').matches?null:'none')
}
function ensurePortraitWorldCopies(){
 if(!document.body.classList.contains('map-view')||!window.matchMedia('(orientation: portrait)').matches)return;
 if(!svg.select('.portrait-countries-copy-left').empty())return;
 [-1,1].forEach(dir=>{
  const c=svg.select('#countries').node().cloneNode(true);
  c.removeAttribute('id');c.setAttribute('class',`portrait-world-copy portrait-countries-copy portrait-countries-copy-${dir<0?'left':'right'}`);c.setAttribute('pointer-events','auto');c.setAttribute('aria-hidden','true');
  svg.node().insertBefore(c,svg.select('#countryLabels').node());
  d3.select(c).selectAll('.country').attr('tabindex',null).on('click',(event,d)=>{
   if(!document.body.classList.contains('map-view'))return;
   event.preventDefault();event.stopPropagation();
   const country=event.currentTarget?.dataset?.country||d?.properties?.name;
   if(country)openCountry(country,{type:'map'})
  });
  const l=svg.select('#countryLabels').node().cloneNode(true);
  l.removeAttribute('id');l.setAttribute('class',`portrait-world-copy portrait-label-copy portrait-label-copy-${dir<0?'left':'right'}`);l.setAttribute('pointer-events','none');l.setAttribute('aria-hidden','true');
  svg.node().appendChild(l)
 })
}
function renderPortraitWorldCopies(t){
 ensurePortraitOcean();ensurePortraitWorldCopies();
 if(!document.body.classList.contains('map-view')||!window.matchMedia('(orientation: portrait)').matches)return;
 const period=952*t.k;
 [-1,1].forEach(dir=>{
  const suffix=dir<0?'left':'right',dx=dir*period;
  svg.select(`.portrait-countries-copy-${suffix}`).attr('transform',`translate(${t.x+dx},${t.y}) scale(${t.k})`);
  const copy=svg.select(`.portrait-label-copy-${suffix}`);
  copy.selectAll('text').each(function(_,i){
   const source=labels.nodes()[i];if(!source)return;
   const x=parseFloat(source.getAttribute('x')),y=parseFloat(source.getAttribute('y'));
   d3.select(this).attr('x',Number.isFinite(x)?x+dx:0).attr('y',Number.isFinite(y)?y:0).style('display',source.style.display)
  })
 })
}
mapZoomBehavior=d3.zoom().scaleExtent([1,56]).translateExtent([[0,0],[1000,520]]).extent([[0,0],[1000,520]]).filter(event=>document.body.classList.contains('map-view')&&(!event.ctrlKey||event.type==='wheel')).on('start',()=>{const portrait=window.matchMedia('(orientation: portrait)').matches;mapZoomBehavior.scaleExtent([portrait?1.15:1,56]).translateExtent(portrait?[[-1e9,0],[1e9,520]]:[[0,0],[1000,520]]);if(!portrait){clearPortraitWorldCopies();svg.select('#portraitOcean').style('display','none')}}).on('zoom',event=>{if(!document.body.classList.contains('map-view'))return;let t=event.transform;if(window.matchMedia('(orientation: portrait)').matches){const period=952*t.k,centre=500;let x=t.x;while(x>centre+period/2)x-=period;while(x<centre-period/2)x+=period;const baseY=(520-520*t.k)/2;const y=t.k<=1.7?baseY:t.y;t=d3.zoomIdentity.translate(x,y).scale(t.k);svg.property('__zoom',t)}svg.select('#sphere').attr('transform',t);svg.select('#countries').attr('transform',t);updateCountryLabels(t);renderPortraitWorldCopies(t);window.__wozzaWarmVisibleCountryHeroes?.()});
svg.call(mapZoomBehavior).on('dblclick.zoom',null);
$('#mapLoading').classList.add('hidden');attachCountryEvents();render()}catch(e){$('#mapLoading').textContent='Map could not load — check your connection'}}
let countryCardOrigin=null;
function currentCountryCardOrigin(){
 if(document.body.classList.contains('map-view'))return {type:'map'};
 const active=document.querySelector('.screen.active')?.dataset.screen||'home';
 return {type:'screen',screen:active,tripsView:document.body.classList.contains('trips-view')};
}
function openCountry(c,origin=null){const aliases={'Dominican Rep.':'Dominican Republic','S. Sudan':'South Sudan','eSwatini':'Eswatini'};c=aliases[c]||c;countryCardOrigin=origin||currentCountryCardOrigin();currentCountry=c;renderSheet();$('#countrySheet').classList.add('open');$('#sheetBackdrop').classList.add('open');$('#countrySheet').setAttribute('aria-hidden','false')}
async function closeSheet(){
 $('#countrySheet').classList.remove('open');$('#sheetBackdrop').classList.remove('open');$('#countrySheet').setAttribute('aria-hidden','true');
 const origin=countryCardOrigin;countryCardOrigin=null;
 if(origin?.type==='map'&&!document.body.classList.contains('map-view'))await showMap();
 else if(origin?.type==='screen'){
   document.body.classList.toggle('trips-view',!!origin.tripsView);
   $$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen===origin.screen));
   $$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target===origin.screen));
 } else if(origin?.type==='itinerary'){
   wwOpenTripItinerary();
   requestAnimationFrame(()=>{
     const d=wwMasterItineraryDialog();
     if(Number.isFinite(origin.scrollTop))d.scrollTop=origin.scrollTop;
   });
 }
}
function attachTripRatingEvents(){$$('[data-trip-rating] button').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const wrap=b.closest('[data-trip-rating]'),t=state.trips.find(x=>String(x.id)===String(wrap?.dataset.tripRating));if(!t)return;t.rating=Number(b.dataset.rate)||0;save();toast(`Rated ${t.rating} out of 5 ★`)})}
// Delegated country-flag navigation. Adaptive/multi-country flag rendering replaces
// flag button DOM nodes after trip cards are initially wired, so direct onclick
// handlers can be lost. Delegation keeps every current/future data-trip-country
// button clickable, including cycled multi-country flags.
if(!window.__wozzaTripCountryFlagDelegation){
  window.__wozzaTripCountryFlagDelegation=true;
  document.addEventListener('click',e=>{
    const flag=e.target.closest?.('[data-trip-country]');
    if(!flag)return;
    e.preventDefault();
    e.stopPropagation();
    openCountry(flag.dataset.tripCountry);
  });
}

function attachTripCardEvents(root=document){document.body.classList.remove('trip-selection-focus');let selected=new Set(),selectMode=false,longPressTimer=null,suppressOpen=false;const cards=()=>[...root.querySelectorAll?.('[data-open-trip]')||[]];let bar=root.querySelector?.('.trip-selection-bar');if(!bar&&root.querySelector?.('#tripList')){bar=document.createElement('div');bar.className='trip-selection-bar';bar.hidden=true;bar.innerHTML='<button type="button" class="trip-selection-cancel" aria-label="Cancel selection">×</button><button type="button" class="trip-selection-bin" aria-label="Send selected trips to recycle bin"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button>';root.querySelector('#tripList').prepend(bar)}const sync=()=>{if(bar)bar.hidden=!selectMode;document.body.classList.toggle('trip-selection-focus',selectMode);cards().forEach(c=>c.classList.toggle('trip-selected',selected.has(c.dataset.openTrip)))};const toggle=card=>{const id=card.dataset.openTrip;selected.has(id)?selected.delete(id):selected.add(id);if(!selected.size)selectMode=false;sync()};const begin=card=>{selectMode=true;selected.add(card.dataset.openTrip);suppressOpen=true;sync();setTimeout(()=>suppressOpen=false,450)};cards().forEach(card=>{const open=e=>{if(e?.target?.closest?.('[data-trip-rating],[data-trip-country]')||selectMode||suppressOpen)return;const t=state.trips.find(x=>String(x.id)===String(card.dataset.openTrip));if(t)openTripEditor(t)};card.onclick=e=>{if(selectMode){e.preventDefault();toggle(card);return}open(e)};card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();selectMode?toggle(card):open(e)}};let pressX=0,pressY=0;const down=e=>{if(e.target.closest('[data-trip-rating],[data-trip-country]'))return;pressX=e.clientX;pressY=e.clientY;clearTimeout(longPressTimer);longPressTimer=setTimeout(()=>begin(card),520)};const cancel=()=>clearTimeout(longPressTimer);const move=e=>{if(Math.hypot(e.clientX-pressX,e.clientY-pressY)>12)cancel()};card.addEventListener('pointerdown',down);card.addEventListener('pointerup',cancel);card.addEventListener('pointercancel',cancel);card.addEventListener('pointermove',move)});root.querySelectorAll?.('[data-trip-country]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();if(!selectMode)openCountry(b.dataset.tripCountry)});bar?.querySelector('.trip-selection-cancel')?.addEventListener('click',()=>{selected.clear();selectMode=false;sync()});bar?.querySelector('.trip-selection-bin')?.addEventListener('click',()=>{if(!selected.size)return;const n=selected.size;showWozzaConfirm(n===1?'Send trip to recycle bin?':'Send trips to recycle bin?',n===1?'Do you want to send this trip to the recycle bin?':'Do you want to send these trips to the recycle bin?',()=>{const ids=new Set(selected);const moving=state.trips.filter(t=>ids.has(String(t.id)));moving.forEach(t=>state.tripRecycleBin.unshift({...structuredClone(t),removedAt:Date.now()}));state.trips=state.trips.filter(t=>!ids.has(String(t.id)));selected.clear();selectMode=false;save();toast(`${n} trip${n===1?'':'s'} moved to recycle bin`)},'Send to recycle bin')});root.querySelectorAll?.('.rearview-toggle').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();rearviewExpanded=!rearviewExpanded;$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents()});root.querySelectorAll?.('.rearview-filter-toggle').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const p=b.closest('.rearview-category')?.querySelector('.rearview-filter-panel');if(p)p.hidden=!p.hidden});root.querySelectorAll?.('[data-rear-sort]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();rearviewSort=b.dataset.rearSort;$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents();document.querySelector('.rearview-filter-panel')?.removeAttribute('hidden')});root.querySelectorAll?.('[data-rear-year]').forEach(b=>b.onclick=e=>{e.preventDefault();e.stopPropagation();const y=b.dataset.rearYear;if(y==='all')rearviewYears.clear();else{rearviewYears.has(y)?rearviewYears.delete(y):rearviewYears.add(y)}$('#tripList').innerHTML=renderMyTrips();attachTripRatingEvents();attachTripCardEvents();document.querySelector('.rearview-filter-panel')?.removeAttribute('hidden')})}
function renderDepartureBoard(){const el=$('#departureBoard'),txt=$('#departureText');if(!el||!txt)return;const upcoming=state.trips.filter(t=>{const start=orderedTripDates(t).start;return start&&countdownDays(start)>=0}).sort((a,b)=>orderedTripDates(a).start.localeCompare(orderedTripDates(b).start))[0];if(!upcoming){el.hidden=true;return}const start=orderedTripDates(upcoming).start,days=countdownDays(start),dest=(upcoming.destinations||[]).find(d=>d&&d.country)?.country||tripCountries(upcoming)[0]||upcoming.name;txt.textContent=`YOUR NEXT TRIP TO ${String(dest).toUpperCase()} ${days===0?'DEPARTING TODAY':days===1?'DEPARTING TOMORROW':`DEPARTING IN ${days} DAYS`}`;el.hidden=false}
function renderCitiesSheet(){const a=state.cities[currentCountry]||[];$('#cityList').innerHTML=a.length?a.map((x,i)=>`<div class="city-entry"><div><strong>${esc(x.name)}</strong><small>${(x.visits||[]).length?(x.visits||[]).map(monthPretty).join(' · '):'Date not set'}</small></div><button data-remove-city="${i}" aria-label="Remove destination">×</button></div>`).join(''):'<p class="muted">No destinations recorded yet.</p>';$('#cityList').querySelectorAll('[data-remove-city]').forEach(b=>b.onclick=()=>{state.cities[currentCountry].splice(+b.dataset.removeCity,1);save()})}
function addToCompanionBank(name){name=String(name||'').trim();if(!name)return '';const existing=state.companionBank.find(x=>x.toLowerCase()===name.toLowerCase());if(existing)return existing;state.companionBank.push(name);return name}
function renderCompanionStats(){const el=$('#companionStats');if(!el)return;const counts={};state.trips.forEach(t=>{const seen=new Set();(t.companions||[]).forEach(n=>{const name=String(n).trim();if(!name||seen.has(name.toLowerCase()))return;seen.add(name.toLowerCase());counts[name]=(counts[name]||0)+1})});for(const [country,names] of Object.entries(state.companions||{})){const linked=countryTrips(country),linkedNames=new Set(linked.flatMap(t=>t.companions||[]).map(n=>String(n).trim().toLowerCase()));for(const raw of names||[]){const name=String(raw).trim();if(!name||linkedNames.has(name.toLowerCase()))continue;counts[name]=(counts[name]||0)+1}}const rows=Object.entries(counts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10);const max=rows[0]?.[1]||1;if(!rows.length){el.innerHTML='<p class="muted">Add companions to trips to build your chart.</p>';return}el.innerHTML=rows.map(([n,c])=>`<div class="companion-stat-row"><span>${esc(n)}</span><div><i style="width:${Math.max(12,c/max*100)}%"></i></div><strong>${c} ${c===1?'trip':'trips'}</strong></div>`).join('')}function renderPassportCarouselStats(){const track=$('#passportStatsTrack');if(track){const carousel=track.closest('.passport-stats-carousel');if(carousel&&!carousel.previousElementSibling?.classList.contains('passport-charts-heading')){const h=document.createElement('h2');h.className='passport-section-heading passport-charts-heading';h.textContent='CHARTS';carousel.before(h)}}if(track&&!$('#highestRatedStatsSlide')){const slide=document.createElement('article');slide.id='highestRatedStatsSlide';slide.className='passport-stats-slide';slide.innerHTML='<h4>Highest rated</h4><div id="highestRatedStats" class="passport-mini-list"></div>';track.appendChild(slide)}if(track&&!$('#tripsPerYearStatsSlide')){const slide=document.createElement('article');slide.id='tripsPerYearStatsSlide';slide.className='passport-stats-slide trips-per-year-slide';slide.innerHTML='<h4>Stops per year</h4><div id="tripsPerYearChart" class="trips-per-year-chart"></div>';track.appendChild(slide)}const yearCounts={};state.trips.forEach(t=>{const stops=(t.destinations||[]).filter(Boolean);if(stops.length){stops.forEach(d=>{const raw=d.start||d.end||t.start||t.end||'';const m=String(raw).match(/(\d{4})/);if(m){const yr=Number(m[1]);yearCounts[yr]=(yearCounts[yr]||0)+1}})}else{const raw=t.start||t.end||'';const m=String(raw).match(/(\d{4})/);if(m){const yr=Number(m[1]);yearCounts[yr]=(yearCounts[yr]||0)+1}}});const tripYears=Object.keys(yearCounts).map(Number).sort((a,b)=>a-b);if(tripYears.length>1){for(let yr=tripYears[0];yr<=tripYears[tripYears.length-1];yr++)if(yearCounts[yr]===undefined)yearCounts[yr]=0}const tripYearRows=Object.entries(yearCounts).map(([yr,count])=>[Number(yr),count]).sort((a,b)=>a[0]-b[0]);const tripYearEl=$('#tripsPerYearChart');if(tripYearEl){if(!tripYearRows.length){tripYearEl.innerHTML='<p class="muted">Add dated stops to build your chart.</p>'}else{const W=560,H=270,L=44,R=20,T=32,B=42,max=Math.max(1,...tripYearRows.map(row=>row[1])),span=Math.max(1,tripYearRows.length-1),px=i=>L+i*(W-L-R)/span,py=value=>T+(max-value)*(H-T-B)/max,ticks=[0,Math.ceil(max/2),max].filter((v,i,a)=>a.indexOf(v)===i).sort((a,b)=>a-b),guides=ticks.map(v=>{const gy=py(v);return `<g><line x1="${L}" y1="${gy}" x2="${W-R}" y2="${gy}"/><text class="trip-year-y-label" x="${L-12}" y="${gy+5}" text-anchor="end">${v}</text></g>`}).join(''),points=tripYearRows.map((row,i)=>`${px(i)},${py(row[1])}`).join(' '),area=`${L},${py(0)} ${points} ${W-R},${py(0)}`,labelEvery=tripYearRows.length>11?2:1,marks=tripYearRows.map((row,i)=>`<g><circle cx="${px(i)}" cy="${py(row[1])}" r="5"/>${row[1]>0?`<text class="trip-year-value" x="${px(i)}" y="${py(row[1])-12}" text-anchor="middle">${row[1]}</text>`:''}${(i%labelEvery===0||i===tripYearRows.length-1)?`<text class="trip-year-label" x="${px(i)}" y="${H-12}" text-anchor="middle">${row[0]}</text>`:''}</g>`).join('');tripYearEl.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Stops per year line chart"><defs><linearGradient id="stopYearArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#056b89" stop-opacity=".18"/><stop offset="100%" stop-color="#056b89" stop-opacity="0"/></linearGradient></defs><g class="trip-year-guides">${guides}</g><polygon class="trip-year-area" points="${area}"/><polyline class="trip-year-line" points="${points}"/>${marks}</svg>`}}const visited=countryRows('visited');const continentMap={Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova'],Africa:['Niger','Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria'],Asia:['China','Japan','Thailand','India','Vietnam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey'],"North America":['United States of America','United States','Canada','Mexico','Cuba','Jamaica'],"South America":['Brazil','Argentina','Chile','Peru','Colombia'],Oceania:['Australia','New Zealand','Fiji']};const continents=Object.entries(continentMap).map(([n,a])=>[n,visited.filter(c=>a.some(x=>sameCountry(x,c))).length]).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]);const countryCounts=visited.map(c=>[c,Math.max(1,countryTrips(c).length)]).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const cityCounts={};state.trips.forEach(t=>{(t.destinations||[]).forEach(d=>{const k=String(d.name||'').trim();if(k)cityCounts[k]=(cityCounts[k]||0)+1});Object.entries(t.cities||{}).forEach(([c,names])=>(names||[]).forEach(n=>{const k=String(n).trim();if(k)cityCounts[k]=(cityCounts[k]||0)+1}))});const cities=Object.entries(cityCounts).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0]));const bindMore=el=>{const btn=el?.querySelector('.stats-show-more');if(!btn)return;btn.onclick=()=>{const expanding=btn.dataset.expanded!=='true';el.querySelectorAll('.passport-mini-row').forEach((r,i)=>r.classList.toggle('is-stat-hidden',!expanding&&i>=5));btn.dataset.expanded=expanding?'true':'false';btn.textContent=expanding?'−':'＋';btn.setAttribute('aria-label',expanding?'Show less':'Show more');el.closest('.passport-stats-carousel')?.classList.toggle('stats-expanded',expanding)}};const fill=(id,rows,unit)=>{const el=$('#'+id);if(!el)return;if(!rows.length){el.innerHTML='<p class="muted">More travel data will appear here.</p>';return}el.innerHTML=rows.slice(0,10).map(([n,c],i)=>`<div class="passport-mini-row ${i>=5?'is-stat-hidden':''}"><b>${i+1}</b><span>${esc(n)}</span><strong>${c} ${c===1?unit:unit+'s'}</strong></div>`).join('')+(rows.length>5?'<button type="button" class="stats-show-more list-add" data-expanded="false" aria-label="Show more">＋</button>':'');bindMore(el)};fill('continentStats',continents,'country');fill('countryStats',countryCounts,'trip');fill('cityStats',cities,'visit');const rated=state.trips.filter(t=>Number(t.rating)>0).sort((a,b)=>(Number(b.rating)||0)-(Number(a.rating)||0)||String(a.name||'').localeCompare(String(b.name||'')));const ratedEl=$('#highestRatedStats');if(ratedEl){if(!rated.length)ratedEl.innerHTML='<p class="muted">Rate a trip to build your chart.</p>';else{ratedEl.innerHTML=rated.slice(0,10).map((t,i)=>`<div class="passport-mini-row highest-rated-row ${i>=5?'is-stat-hidden':''}"><b>${i+1}</b><span>${esc(t.name||'Untitled trip')}</span><strong>${Number(t.rating)} ★</strong></div>`).join('')+(rated.length>5?'<button type="button" class="stats-show-more list-add" data-expanded="false" aria-label="Show more">＋</button>':'');bindMore(ratedEl)}}}let passportStatsSlide=0;function setPassportStatsSlide(i){const track=$('#passportStatsTrack'),dots=$('#passportStatsDots');if(!track)return;const slides=[...track.querySelectorAll('.passport-stats-slide')],count=Math.max(1,slides.length);passportStatsSlide=(i+count)%count;track.style.transform='none';slides.forEach((slide,idx)=>slide.classList.toggle('is-active',idx===passportStatsSlide));if(dots)dots.textContent=slides.map((_,x)=>x===passportStatsSlide?'●':'○').join(' ')}
let passportStatsAutoTimer=0;function restartPassportStatsAuto(){clearInterval(passportStatsAutoTimer);const track=$('#passportStatsTrack');if(!track)return;passportStatsAutoTimer=setInterval(()=>{if(document.hidden||track.closest('.passport-stats-carousel')?.classList.contains('stats-expanded'))return;setPassportStatsSlide(passportStatsSlide+1)},6000)}
function renderCompanionBanks(){const selected=new Set(state.companions[currentCountry]||[]);const bank=$('#companionBank');if(bank)bank.innerHTML=state.companionBank.map(n=>`<button type="button" class="companion-tag ${selected.has(n)?'selected':''}" data-companion="${esc(n)}">${esc(n)}</button>`).join('');$$('#companionBank .companion-tag').forEach(b=>b.onclick=()=>{const n=b.dataset.companion;state.companions[currentCountry]??=[];state.companions[currentCountry]=state.companions[currentCountry].includes(n)?state.companions[currentCountry].filter(x=>x!==n):[...state.companions[currentCountry],n];save()})}

let countryGuideData=null,countryWeatherData=null;
const countryGuideAliases={
  'Dem. Rep. Congo':'Democratic Republic of the Congo',
  'Congo':'Republic of the Congo',
  'Central African Rep.':'Central African Republic',
  'Dominican Rep.':'Dominican Republic',
  'Eq. Guinea':'Equatorial Guinea',
  'S. Sudan':'South Sudan',
  'eSwatini':'Eswatini',
  'W. Sahara':'Western Sahara',
  'United States of America':'United States',
  'Bosnia and Herz.':'Bosnia and Herzegovina'
};
async function loadCountryGuideData(){
 if(countryGuideData&&countryWeatherData)return;
 const [g,w]=await Promise.all([
  fetch('country-guides.json').then(r=>{if(!r.ok)throw new Error('Country guide data unavailable');return r.json()}),
  fetch('country-typical-weather.json').then(r=>{if(!r.ok)throw new Error('Weather data unavailable');return r.json()})
 ]);
 countryGuideData=g;countryWeatherData=w;
}
function countryGuideName(name){return countryGuideAliases[name]||name}
function factRow(label,value){
 if(!value||!String(value).trim())return '';
 return `<div class="country-fact-row"><strong>${esc(label)}</strong><span>${esc(String(value))}</span></div>`
}
function factList(title,items){
 if(!Array.isArray(items)||!items.length)return '';
 return `<section class="country-fact-section"><h3>${esc(title)}</h3><ul>${items.map(x=>`<li>${esc(String(x))}</li>`).join('')}</ul></section>`
}

function properCaseCuisine(value){
 const s=String(value||'').trim();
 return s ? s.charAt(0).toUpperCase()+s.slice(1) : s;
}
function factListContent(items,googleSearch=false){
 if(!Array.isArray(items)||!items.length)return '<p class="country-facts-empty-inline">No information available yet.</p>';
 return `<ul class="country-facts-accordion-list">${items.map(x=>{const text=String(x);return googleSearch?`<li><button type="button" class="country-google-search-item" data-google-search="${esc(text)}">${esc(text)}</button></li>`:`<li>${esc(text)}</li>`}).join('')}</ul>`;
}
function countryInfoAccordion(title,content){
 const displayTitle=({WEATHER:'Weather','INTERESTING FACTS':'Interesting Facts',LANDMARKS:'Landmarks','FAMOUS CUISINE':'Famous Cuisine',LANDSCAPE:'Landscape',WILDLIFE:'Wildlife','GOOD TO KNOW':'Good to Know'})[title]||title;
 return `<details class="country-facts-accordion ww-roadmap-item">
   <summary>${esc(displayTitle)}</summary>
   <div class="country-facts-accordion-panel ww-roadmap-item-body">${content||'<p class="country-facts-empty-inline">No information available yet.</p>'}</div>
  </details>`;
}

function weatherBlock(weather,countryName=''){
 if(!weather?.typicalWeather?.length)return '';
 return `<section class="country-fact-section country-weather-section"><h3>Typical weather</h3>
  <div class="country-weather-grid">${weather.typicalWeather.map(x=>`<div class="country-weather-card country-google-weather" data-google-weather="${esc(countryName)}"><strong>${esc(x.months||'')}</strong><b>${esc(x.season||'')}</b><span>${Number.isFinite(x.typicalTemperatureC?.low)&&Number.isFinite(x.typicalTemperatureC?.high)?`${x.typicalTemperatureC.low}–${x.typicalTemperatureC.high}°C`:''}</span><p>${esc(x.summary||'')}</p></div>`).join('')}</div>
 </section>`
}
function ensureCountryGuidePhotoStyle(){
 if(document.getElementById('country-guide-photo-style'))return;
 const style=document.createElement('style');
 style.id='country-guide-photo-style';
 style.textContent=`
  .country-guide-photo{margin:0 0 18px;width:100%;aspect-ratio:16/9;border-radius:22px;overflow:hidden;background:#eef3f3;box-shadow:0 8px 20px rgba(6,52,66,.10)}
  .country-guide-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center}
  #countrySheet .country-hero-minimal.has-country-photo{background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;position:relative!important}
  #countrySheet .country-hero-minimal.has-country-photo .flag img{box-shadow:0 6px 14px rgba(0,0,0,.18)}
  #countrySheet .sheet-close{position:absolute!important;z-index:999!important}
  #countrySheet .country-hero-minimal{position:relative!important;z-index:1}
  @media (orientation:landscape){
   body.map-view #countryInfoBody:has(> .country-guide-photo){display:grid;grid-template-columns:minmax(0,45%) minmax(0,55%);column-gap:18px;align-items:stretch}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-facts-key{grid-column:1;grid-row:1;grid-template-columns:1fr!important;align-content:center;margin:0}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-guide-photo{grid-column:2;grid-row:1;margin:0!important;aspect-ratio:auto!important;min-height:180px;max-height:230px;height:100%}
   body.map-view #countryInfoBody:has(> .country-guide-photo) > .country-facts-accordion{grid-column:1 / -1}
  }
 `;
 document.head.appendChild(style);
}
async function openCountryInfo(){
 ensureCountryGuidePhotoStyle();
 const dialog=$('#countryInfoDialog'),body=$('#countryInfoBody');
 if(!dialog||!body)return;
 // Country Info uses the same one-at-a-time native details behaviour as the Roadmap.
 // Bind after the country-specific sections have been rendered (below).
 const name=countryGuideName(currentCountry);
 $('#countryInfoTitle').textContent=currentCountry;
 const u=flagUrl(currentCountry);
 $('#countryInfoFlag').innerHTML=u?`<img src="${u}" alt="${esc(currentCountry)} flag">`:'';
 body.innerHTML='<p class="country-facts-loading">Loading country guide…</p>';
 if(!dialog.open)dialog.showModal();
 try{
  await loadCountryGuideData();
  const guideName=name==='Turkey'?'Türkiye':name;
  const guide=countryGuideData.find(x=>x.country===guideName);
  const weather=countryWeatherData.find(x=>x.country===guideName);
  if(name==='Antarctica'){
   body.innerHTML=`<figure class="country-guide-photo"><img src="antarctica-country-hero.jpg" alt="Expedition ship in Antarctic waters"></figure>
   <section class="country-facts-key">${factRow('Capital','None')}${factRow('Permanent population','None')}${factRow('Governance','Antarctic Treaty System')}${factRow('Visitor season','October to April')}${factRow('Getting there','Primarily expedition ship')}</section>
   ${countryInfoAccordion('LANDSCAPE',factListContent(['Ice sheet, mountains, glaciers and ice shelves']))}
   ${countryInfoAccordion('WILDLIFE',factListContent(['Penguins, seals, whales and seabirds']))}
   ${countryInfoAccordion('GOOD TO KNOW',factListContent(['Antarctica is not owned by any one nation. The Antarctic Treaty System supports peaceful use and scientific cooperation.','Tourism is carefully managed to help protect the environment.']))}`;
   return;
  }
  if(name==='Greenland'){
   body.innerHTML=`<figure class="country-guide-photo"><img src="greenland-country-hero.jpg" alt="Iceberg and expedition boat in Greenland"></figure>
   <section class="country-facts-key">${factRow('Capital','Nuuk')}${factRow('Languages','Greenlandic (official), Danish widely used')}${factRow('Currency','Danish krone (DKK)')}${factRow('Plug sockets','C, E, F and K')}${factRow('Driving side','Right')}</section>
   ${countryInfoAccordion('WEATHER',`<div class="country-google-weather" data-google-weather="${esc(name)}">${factListContent(['Arctic climate with cool summers and very cold winters. Conditions vary considerably by region and season.'])}</div>`)}
   ${countryInfoAccordion('INTERESTING FACTS',factListContent(['Greenland is the world’s largest island that is not a continent.','Almost 80% of Greenland is covered by the ice cap and glaciers.','Greenland is self-governing within the Kingdom of Denmark.'],true))}
   ${countryInfoAccordion('LANDMARKS',factListContent(['Ilulissat Icefjord','Nuuk','Disko Bay','Greenland Ice Sheet'],true))}
   ${countryInfoAccordion('FAMOUS CUISINE',factListContent(['Suaasat, a traditional Greenlandic soup','Fish and seafood','Reindeer and musk ox'],true))}`;
   return;
  }
  if(!guide){
   body.innerHTML='<p class="country-facts-empty">Country information is not available yet.</p>';
   return;
  }
  const currency=(guide.currency||[]).map(x=>x.name?`${x.name}${x.code?` (${x.code})`:''}`:x.code).filter(Boolean).join(', ');
  const guidePhotos={Belgium:{src:'belgium-country-guide.jpg',alt:'Bruges canal and historic buildings in Belgium'},France:{src:'france-country-hero.jpg',alt:'Eiffel Tower in Paris, France',caption:'Champ de Mars, Eiffel Tower, Paris'},Antarctica:{src:'antarctica-country-hero.jpg',alt:'Expedition ship in Antarctic waters'},Morocco:{src:'morocco-country-hero.jpg',alt:'Camel on the Moroccan coast'},Portugal:{src:'portugal-country-hero.jpg',alt:'Canal and traditional boats in Portugal'},Switzerland:{src:'switzerland-country-hero.jpg',alt:'Historic bridge and waterfront in Switzerland'},Luxembourg:{src:'luxembourg-country-hero.jpg',alt:'Luxembourg cityscape'},Greece:{src:'greece-country-hero.jpg',alt:'Blue-domed church overlooking the sea in Greece'},Netherlands:{src:'netherlands-country-hero.jpg',alt:'Amsterdam waterfront at night'},Poland:{src:'poland-country-hero.jpg',alt:'Horse-drawn carriages in Poland'},Italy:{src:'italy-country-hero.jpg',alt:'Venice Grand Canal and historic skyline'},Germany:{src:'germany-country-hero.jpg',alt:'Brandenburg Gate and Berlin TV Tower'},Spain:{src:'spain-country-hero.jpg',alt:'Traditional Spanish festival dress in Valencia'},Denmark:{src:'denmark-country-hero.jpg',alt:'Nyhavn waterfront in Copenhagen'},Ireland:{src:'ireland-country-hero.jpg',alt:'Irish coastal cliffs and countryside'},'United Kingdom':{src:'united-kingdom-country-hero.jpg',alt:'Tower Bridge illuminated at night in London'},Norway:{src:'norway-country-hero.jpg',alt:'Norwegian fjord with mountains and ferry'},Hungary:{src:'hungary-country-hero.jpg',alt:'Hungarian Parliament Building in Budapest'},Austria:{src:'austria-country-hero.jpg',alt:'Hallstatt lakeside village and mountains in Austria'},Russia:{src:'russia-country-hero.jpg',alt:'St Basils Cathedral and Kremlin in Moscow'},China:{src:'china-country-hero.jpg',alt:'Great Wall of China through mountain landscape'},Japan:{src:'japan-country-hero.jpg',alt:'Neon-lit street in Shinjuku, Tokyo'},'Canada':{src:'canada-country-hero.jpg',alt:'Toronto skyline and CN Tower in Canada'},'Mexico':{src:'mexico-country-hero.jpg',alt:'Traditional procession and dress in Mexico'},'Brazil':{src:'brazil-country-hero.jpg',alt:'Rio de Janeiro coastline in Brazil'},'Jamaica':{src:'jamaica-country-hero.jpg',alt:'Beach and calm bay in Jamaica'},'Venezuela':{src:'venezuela-country-hero.jpg',alt:'Caribbean coastline and mangroves in Venezuela'},'Greenland':{src:'greenland-country-hero.jpg',alt:'Iceberg and expedition boat in Greenland'},'Iceland':{src:'iceland-country-hero.jpg',alt:'Reykjavik and snowy mountains in Iceland'},'Australia':{src:'australia-country-hero.jpg',alt:'Sydney Opera House and Harbour Bridge in Australia'},'Egypt':{src:'egypt-country-hero.jpg',alt:'Pyramids of Giza and camel in Egypt'},'India':{src:'india-country-hero.jpg',alt:'Taj Mahal in Agra, India'},'Rwanda':{src:'rwanda-country-hero.jpg',alt:'Green rolling hills and cultivated landscape in Rwanda'},'Sudan':{src:'sudan-country-hero.jpg',alt:'Nubian pyramid in the Sudanese desert'},'United Arab Emirates':{src:'united-arab-emirates-country-hero.jpg',alt:'Sheikh Zayed Grand Mosque in Abu Dhabi'},'Saudi Arabia':{src:'saudi-arabia-country-hero.jpg',alt:'Kaaba at Masjid al-Haram in Mecca, Saudi Arabia'},Turkey:{src:'turkey-country-hero.jpg',alt:'Hagia Sophia in Istanbul, Turkey'},Iran:{src:'iran-country-hero.jpg',alt:'Azadi Tower in Tehran, Iran'},Iraq:{src:'iraq-country-hero.png',alt:'Malwiya Minaret at the Great Mosque of Samarra, Iraq'},'South Africa':{src:'south-africa-country-hero.jpg',alt:'Cape Town coastline beneath the Twelve Apostles mountain range, South Africa'},'Bosnia and Herzegovina':{src:'bosnia-and-herzegovina-country-hero.jpg',alt:'Mostar and Stari Most in Bosnia and Herzegovina'},Croatia:{src:'croatia-country-hero.jpg',alt:'Split waterfront and mountains in Croatia'},Czechia:{src:'czechia-country-hero.jpg',alt:'Prague Castle and Charles Bridge in Czechia'},Slovenia:{src:'slovenia-country-hero.jpg',alt:'Lake Bled in Slovenia'},Slovakia:{src:'slovakia-country-hero.jpg',alt:'Calvary of Banska Stiavnica in Slovakia'},Romania:{src:'romania-country-hero.jpg',alt:'Palace of Culture in Iasi, Romania'},Serbia:{src:'serbia-country-hero.jpg',alt:'Zemun and the Danube in Belgrade, Serbia'},Montenegro:{src:'montenegro-country-hero.jpg',alt:'Bay of Kotor in Montenegro'},Sweden:{src:'sweden-country-hero.jpg',alt:'Stockholm waterfront in Sweden'},Finland:{src:'finland-country-hero.jpg',alt:'Northern Lights over Finland'},'United States':{src:'united-states-country-hero.jpg',alt:'Statue of Liberty and Manhattan skyline in New York'},Vietnam:{src:'vietnam-country-hero.jpg',alt:'Golden rice terraces of Mù Cang Chải, northern Vietnam',caption:'Golden rice terraces of Mù Cang Chải, northern Vietnam.'},Pakistan:{src:'pakistan-country-hero.jpg',alt:'Mountain landscape in northern Pakistan',caption:'The spectacular mountain landscapes of northern Pakistan.'}};
  const guidePhoto=guidePhotos[name];
  const countryPhoto=guidePhoto ? `<figure class="country-guide-photo"${guidePhoto.caption?` data-caption="${esc(guidePhoto.caption)}"`:''}><img src="${guidePhoto.src}" alt="${guidePhoto.alt}"></figure>` : '';
  body.innerHTML=`
   ${countryPhoto}
   <section class="country-facts-key">
    ${factRow('Capital',guide.capital)}
    ${factRow('Languages',(guide.officialLanguages||[]).join(', '))}
    ${factRow('Currency',currency)}
    ${factRow('Plug sockets',(guide.plugSocketTypes||[]).join(', '))}
    ${factRow('Driving side',guide.drivingSide?guide.drivingSide.charAt(0).toUpperCase()+guide.drivingSide.slice(1):'')}
   </section>
   ${countryInfoAccordion('WEATHER',weatherBlock(weather,name))}
   ${countryInfoAccordion('INTERESTING FACTS',factListContent(guide.interestingFacts,true))}
   ${countryInfoAccordion('LANDMARKS',factListContent(guide.notableLandmarks,true))}
   ${countryInfoAccordion('FAMOUS CUISINE',factListContent((guide.wellKnownCuisine||[]).map(properCaseCuisine),true))}
  `;
 }catch(err){
  body.innerHTML='<p class="country-facts-empty">Country information could not be loaded.</p>';
 }
}
function closeCountryInfo(){const d=$('#countryInfoDialog');if(d?.open)d.close()}

function renderSheet(){
 ensureCountryGuidePhotoStyle();
 const s=state.statuses[currentCountry],u=flagUrl(currentCountry),trips=countryTrips(currentCountry),cities=countryCityDisplay(currentCountry),companions=countryCompanions(currentCountry),rating=countryRating(currentCountry);
 const hero=$('#countrySheet .country-hero-minimal'),heroPhotos={Belgium:'belgium-country-guide.jpg',France:'france-country-hero.jpg',Antarctica:'antarctica-country-hero.jpg',Morocco:'morocco-country-hero.jpg',Portugal:'portugal-country-hero.jpg',Switzerland:'switzerland-country-hero.jpg',Luxembourg:'luxembourg-country-hero.jpg',Greece:'greece-country-hero.jpg',Netherlands:'netherlands-country-hero.jpg',Poland:'poland-country-hero.jpg',Italy:'italy-country-hero.jpg',Germany:'germany-country-hero.jpg',Spain:'spain-country-hero.jpg',Denmark:'denmark-country-hero.jpg',Ireland:'ireland-country-hero.jpg','United Kingdom':'united-kingdom-country-hero.jpg',Norway:'norway-country-hero.jpg',Hungary:'hungary-country-hero.jpg',Austria:'austria-country-hero.jpg',Russia:'russia-country-hero.jpg',China:'china-country-hero.jpg',Japan:'japan-country-hero.jpg','Canada':'canada-country-hero.jpg','Mexico':'mexico-country-hero.jpg','Brazil':'brazil-country-hero.jpg','Jamaica':'jamaica-country-hero.jpg','Venezuela':'venezuela-country-hero.jpg','Greenland':'greenland-country-hero.jpg','Iceland':'iceland-country-hero.jpg','Australia':'australia-country-hero.jpg','Egypt':'egypt-country-hero.jpg','India':'india-country-hero.jpg','Rwanda':'rwanda-country-hero.jpg','Sudan':'sudan-country-hero.jpg','United Arab Emirates':'united-arab-emirates-country-hero.jpg','Saudi Arabia':'saudi-arabia-country-hero.jpg',Turkey:'turkey-country-hero.jpg',Iran:'iran-country-hero.jpg',Iraq:'iraq-country-hero.png','South Africa':'south-africa-country-hero.jpg','Bosnia and Herzegovina':'bosnia-and-herzegovina-country-hero.jpg',Croatia:'croatia-country-hero.jpg',Czechia:'czechia-country-hero.jpg',Slovenia:'slovenia-country-hero.jpg',Slovakia:'slovakia-country-hero.jpg',Romania:'romania-country-hero.jpg',Serbia:'serbia-country-hero.jpg',Montenegro:'montenegro-country-hero.jpg',Sweden:'sweden-country-hero.jpg',Finland:'finland-country-hero.jpg','United States':'united-states-country-hero.jpg',Vietnam:'vietnam-country-hero.jpg',Pakistan:'pakistan-country-hero.jpg'},heroPhoto=heroPhotos[countryGuideName(currentCountry)]||'';if(hero){hero.classList.toggle('has-country-photo',!!heroPhoto);hero.style.backgroundImage=heroPhoto?`linear-gradient(90deg,rgba(0,126,143,.96) 0%,rgba(0,143,157,.88) 42%,rgba(0,116,137,.56) 100%),url("${heroPhoto}")`:'';hero.style.backgroundPosition=countryGuideName(currentCountry)==='France'?'center 54%':'center'}
 const countryFlagEl=$('#countryFlag');countryFlagEl.innerHTML=u?`<img src="${u}" alt="">`:'◉';const countryNameEl=$('#countryName');countryNameEl.textContent=currentCountry;countryNameEl.setAttribute('role','link');countryNameEl.setAttribute('tabindex','0');countryNameEl.setAttribute('title',`Search Google for ${currentCountry}`);const googleCountry=()=>window.open(`https://www.google.com/search?q=${encodeURIComponent(currentCountry)}`,'_blank','noopener');countryNameEl.onclick=googleCountry;countryNameEl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();googleCountry()}};if(countryFlagEl){countryFlagEl.setAttribute('role','link');countryFlagEl.setAttribute('tabindex','0');countryFlagEl.setAttribute('title',`Search Google for ${currentCountry}`);countryFlagEl.onclick=googleCountry;countryFlagEl.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();googleCountry()}}};
 const pills=$('#countrySummaryPills');if(pills){pills.innerHTML='';pills.style.display='none'};
 const cr=$('#countryRatingSummary');if(cr)cr.innerHTML=rating?`<span aria-label="Country rating ${rating.toFixed(1)} out of 5">${'★'.repeat(Math.round(rating))}${'☆'.repeat(5-Math.round(rating))}</span>`:'';const infoBtn=$('#countryInfoButton');if(infoBtn){infoBtn.onclick=e=>{e.preventDefault();openCountryInfo()}}
 $$('.choice-grid button').forEach(b=>{const selected=countryHasStatus(currentCountry,b.dataset.status);b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',selected?'true':'false');const tick=b.querySelector('.status-tick');if(tick)tick.textContent=selected?'✓':'';const bucket=b.querySelector('.status-bucket');if(bucket)bucket.classList.toggle('filled',selected);const clock=b.querySelector('.status-clock');if(clock)clock.classList.toggle('filled',selected)});
 $('#countryTrips').innerHTML=trips.length?trips.map(t=>{const td=orderedTripDates(t),dates=td.start?`${pretty(td.start)}${td.end&&td.end!==td.start?' – '+pretty(td.end):''}`:'Dates not set',r=Math.max(0,Math.min(5,Number(t.rating)||0)),days=countdownDays(td.start),count=days===null&&tripIsOnHorizon(t)?'PLANNING':days===0?'TODAY ✈':days>0?`${days} DAYS TO GO`:'';return `<div class="country-trip-card" data-open-trip="${esc(t.id||'')}" role="button" tabindex="0"><div class="country-trip-copy"><strong>${esc(t.name)}</strong><p>${dates}</p>${r?`<div class="country-trip-rating" aria-label="${r} out of 5 stars">${'★'.repeat(r)}${'☆'.repeat(5-r)}</div>`:''}</div><div class="country-trip-side">${count?`<span class="countdown-badge country-trip-countdown">${count}</span>`:''}<span class="country-trip-chevron" aria-hidden="true">›</span></div></div>`}).join(''):'<p class="muted country-no-trips">Add a trip to get started 😃</p>';
 const info=$('#countryInfoSummary');if(info){const cityNames=cities.map(x=>x.name),parts=[];if(cityNames.length)parts.push(`<div><strong>Destinations</strong><p>${cityNames.map(esc).join(' · ')}</p></div>`);if(companions.length)parts.push(`<div><strong>Travel companions</strong><p>${companions.map(esc).join(' · ')}</p></div>`);info.innerHTML=`<h3>SUMMARY</h3>${parts.join('')}`}
 attachTripCardEvents($('#countryTrips'));
}
function toast(t,action=null){const el=$('#toast');el.textContent=t;el.style.pointerEvents=action?'auto':'none';el.style.touchAction=action?'manipulation':'';Object.assign(el.style,{background:'#e3bd4d',color:'#17213f',border:'none',borderRadius:'999px',fontWeight:'800',boxShadow:'0 5px 16px rgba(15,56,70,.22)',padding:'12px 22px',maxWidth:'calc(100vw - 40px)',textAlign:'center'});el.classList.add('show');el.onpointerdown=action?e=>{e.preventDefault();e.stopPropagation()}:null;el.onclick=action?e=>{e.preventDefault();e.stopPropagation();action();el.classList.remove('show');el.style.pointerEvents='none';el.onpointerdown=null;el.onclick=null}:null;clearTimeout(el._timer);el._timer=setTimeout(()=>{el.classList.remove('show');el.style.pointerEvents='none';el.onpointerdown=null;el.onclick=null},action?4200:1800)}
$$('.choice-grid button').forEach(b=>b.onclick=()=>{const status=b.dataset.status,was=countryHasStatus(currentCountry,status);if(status==='bucket'&&!was){setCountryStatus(currentCountry,'bucket',true)}else setCountryStatus(currentCountry,status,!was);if(status==='visited'&&!was){state.visitHistory=state.visitHistory.filter(c=>c!==currentCountry);state.visitHistory.push(currentCountry)}save()});
async function leaveMapMode(){try{const m=d3.select('#worldMap');m.selectAll('.portrait-world-copy').remove();m.select('#portraitOcean').style('display','none')}catch(e){}document.body.classList.remove('map-view');resetMapZoom(false);try{screen.orientation?.unlock?.()}catch(e){}try{if(document.fullscreenElement)await document.exitFullscreen()}catch(e){}}

// Home <-> World View morph. This deliberately does not alter either animation system:
// the Home planes and World View clouds keep their existing markup, timing and styling.
// The browser transitions the existing map card between its two layouts as one shared element.
async function withWorldMapMorph(update){
 const reduce=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(!document.startViewTransition||reduce){await update();return}
 document.documentElement.classList.add('world-map-morphing');
 try{
  const transition=document.startViewTransition(()=>update());
  await transition.finished;
 }catch(e){await update()}
 finally{document.documentElement.classList.remove('world-map-morphing')}
}
async function showHome(){
 const fromMap=document.body.classList.contains('map-view');
 document.body.classList.remove('trips-view');
 const update=async()=>{await leaveMapMode();$$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target==='home'));$$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));applyWorldViewName();countrySlide=0;renderCountryLists();resetMapZoom(false);window.scrollTo({top:0})};
 if(fromMap)await withWorldMapMorph(update);else await update();
 requestAnimationFrame(()=>requestAnimationFrame(()=>setCountrySlide(0,false)));
}
async function showMap(){
 if(document.body.classList.contains('map-view'))return;
 const update=()=>{document.body.classList.remove('trips-view');document.body.classList.add('map-view');$$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target==='map'));$$('.screen').forEach(x=>x.classList.toggle('active',x.dataset.screen==='home'));const bar=document.querySelector('.topbar');if(bar)requestAnimationFrame(()=>document.documentElement.style.setProperty('--worldview-header-height',bar.getBoundingClientRect().height+'px'));window.scrollTo({top:0});ensureWorldViewClouds();if(window.matchMedia('(orientation: portrait)').matches&&mapZoomBehavior){const svg=d3.select('#worldMap'),k=1.52,t=d3.zoomIdentity.translate((1000-1000*k)/2,(520-520*k)/2).scale(k);mapZoomBehavior.scaleExtent([1.15,56]);svg.call(mapZoomBehavior.transform,t)}else if(mapZoomBehavior){mapZoomBehavior.scaleExtent([1,56])}};
 await withWorldMapMorph(update);
 try{await screen.orientation?.lock?.('landscape')}catch(e){}
}
async function showSection(target){
  if(target==='home')return showHome();
  if(target==='map')return showMap();
  const update=async()=>{
    await leaveMapMode();
    document.body.classList.toggle('trips-view',target==='trips');
    $$('.header-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.target===target));
    $$('.screen').forEach(x=>{x.style.transition='';x.style.opacity='';x.classList.toggle('active',x.dataset.screen===target)});
    window.scrollTo({top:0,behavior:'auto'});
  };
  await withWorldMapMorph(update);
}
window.addEventListener('resize',()=>{if(document.body.classList.contains('map-view')){const bar=document.querySelector('.topbar');if(bar)document.documentElement.style.setProperty('--worldview-header-height',bar.getBoundingClientRect().height+'px')}});

// WozzaWatch-style top pull navigation: when already at the top, a deliberate
// downward pull cycles the four top-level WozzaWorld sections and suppresses
// the browser/PWA pull-to-refresh gesture.
function initTopPullSectionCycle(){
  if(window.__wozzaTopPullSectionCycle)return;
  window.__wozzaTopPullSectionCycle=true;
  const order=['home','map','trips','me'];
  const threshold=92;
  let startY=0,startX=0,pulling=false,distance=0;
  const current=()=>{
    if(document.body.classList.contains('map-view'))return'map';
    const active=document.querySelector('.header-nav-item.active')?.dataset?.target;
    return order.includes(active)?active:null;
  };
  const blocked=target=>!!target?.closest?.('dialog[open],.sheet.open,.trip-selection-bar,input,textarea,select,[contenteditable="true"]');
  // On the World Map, a downward drag while zoomed in belongs to D3 map panning,
  // not top-level navigation. Keep pull-to-cycle available at the normal map view.
  const mapIsZoomedIn=()=>{
    if(!document.body.classList.contains('map-view'))return false;
    try{
      const node=document.querySelector('#worldMap');
      if(!node||typeof d3==='undefined')return false;
      const k=d3.zoomTransform(node).k||1;
      const normalK=window.matchMedia('(orientation: portrait)').matches?1.52:1;
      return k>normalK+0.06;
    }catch(e){return false;}
  };
  window.addEventListener('touchstart',e=>{
    if(e.touches.length!==1||window.scrollY>1||blocked(e.target)||!current()||mapIsZoomedIn())return;
    const t=e.touches[0];
    startY=t.clientY;startX=t.clientX;distance=0;pulling=true;
  },{passive:true,capture:true});
  window.addEventListener('touchmove',e=>{
    if(!pulling||e.touches.length!==1)return;
    const t=e.touches[0],dy=t.clientY-startY,dx=t.clientX-startX;
    if(dy<=0){distance=0;return;}
    if(window.scrollY>1||Math.abs(dx)>dy*.85){pulling=false;distance=0;return;}
    distance=dy;
    e.preventDefault();
  },{passive:false,capture:true});
  const finish=()=>{
    if(!pulling)return;
    pulling=false;
    const from=current(),travel=distance;
    distance=0;
    if(travel<threshold||!from)return;
    const next=order[(order.indexOf(from)+1)%order.length];
    showSection(next);
  };
  window.addEventListener('touchend',finish,{passive:true,capture:true});
  window.addEventListener('touchcancel',()=>{pulling=false;distance=0;},{passive:true,capture:true});
}
initTopPullSectionCycle();

function syncMapFilterUI(){document.querySelectorAll('[data-map-filter]').forEach(b=>b.setAttribute('aria-pressed',mapFilterPrefs[b.dataset.mapFilter]?'true':'false'))}
function applyMapFilters(){document.querySelectorAll('.country').forEach(p=>{p.classList.remove('visited','going','bucket','map-filter-bucket');if(mapFilterPrefs.visited&&countryHasStatus(p.dataset.country,'visited'))p.classList.add('visited');if(mapFilterPrefs.going&&countryHasStatus(p.dataset.country,'going'))p.classList.add('going');if(mapFilterPrefs.bucket&&countryHasStatus(p.dataset.country,'bucket'))p.classList.add('map-filter-bucket')});syncMapFilterUI()}
const mapFilterBtn=$('#mapFilterBtn'),mapFilterDialog=$('#mapFilterDialog'),mapFilterClose=$('#mapFilterClose');if(mapFilterBtn)mapFilterBtn.onclick=()=>{syncMapFilterUI();mapFilterDialog?.showModal()};if(mapFilterClose)mapFilterClose.onclick=()=>mapFilterDialog?.close();document.querySelectorAll('[data-map-filter]').forEach(b=>b.onclick=()=>{const key=b.dataset.mapFilter;mapFilterPrefs[key]=!mapFilterPrefs[key];localStorage.setItem('wozzaworld-map-filters',JSON.stringify(mapFilterPrefs));applyMapFilters()});if(mapFilterDialog)mapFilterDialog.addEventListener('click',e=>{if(e.target===mapFilterDialog)mapFilterDialog.close()});syncMapFilterUI();
$$('.header-nav-item').forEach(b=>b.onclick=()=>showSection(b.dataset.target));$('#homeLogo').onclick=null;$('#mapClose').onclick=showHome;$('#mapStage').addEventListener('click',()=>{if(!document.body.classList.contains('map-view'))showMap()});$('#sheetClose').onclick=closeSheet;$('#sheetBackdrop').onclick=closeSheet;
const countryInfoDialog=$('#countryInfoDialog');
$('#countryInfoClose').onclick=closeCountryInfo;
$('#countryInfoBody')?.addEventListener('toggle',e=>{
 const item=e.target;
 if(!item.matches?.('details.country-facts-accordion')||!item.open)return;
 item.parentElement.querySelectorAll('details.country-facts-accordion').forEach(other=>{if(other!==item)other.open=false});
},true);
$('#countryInfoBody')?.addEventListener('click',e=>{
 const searchItem=e.target.closest('[data-google-search]');
 if(searchItem){window.open(`https://www.google.com/search?q=${encodeURIComponent(searchItem.dataset.googleSearch||'')}`,'_blank','noopener');return}
 const weatherItem=e.target.closest('[data-google-weather]');
 if(weatherItem){window.open(`https://www.google.com/search?q=${encodeURIComponent((weatherItem.dataset.googleWeather||currentCountry)+' weather')}`,'_blank','noopener');return}
 // Country sections use the existing native Roadmap <details> accordion.
 // No custom toggle handler is needed; existing search actions above remain intact.
});
countryInfoDialog?.addEventListener('click',e=>{if(e.target===countryInfoDialog)closeCountryInfo()});
$('#sheetBackdrop').onclick=closeSheet;
let wozzaSelectOverlay=null;
function syncWozzaSelect(select){const btn=select?._wozzaButton;if(!btn)return;const opt=select.options[select.selectedIndex];btn.textContent=opt?.textContent||'';btn.classList.toggle('placeholder',!select.value)}
let wozzaSelectHistory=false;function closeWozzaSelect(fromHistory=false){wozzaSelectOverlay?.remove();wozzaSelectOverlay=null;document.body.classList.remove('wozza-select-open');if(wozzaSelectHistory&&!fromHistory){wozzaSelectHistory=false;history.back()}else if(fromHistory)wozzaSelectHistory=false}
window.addEventListener('popstate',()=>{if(wozzaSelectOverlay)closeWozzaSelect(true)});
function openWozzaSelect(select){if(wozzaSelectOverlay)closeWozzaSelect();const overlay=document.createElement('div');overlay.className='wozza-select-overlay';const panel=document.createElement('div');panel.className='wozza-select-panel';const title=document.createElement('div');title.className='wozza-select-title';title.textContent=select.getAttribute('aria-label')||'Choose an option';const closeBtn=document.createElement('button');closeBtn.type='button';closeBtn.className='wozza-select-close';closeBtn.setAttribute('aria-label','Close options');closeBtn.textContent='×';closeBtn.onclick=()=>closeWozzaSelect();panel.appendChild(title);panel.appendChild(closeBtn);[...select.options].forEach((opt,i)=>{const b=document.createElement('button');b.type='button';b.className='wozza-select-option'+(i===select.selectedIndex?' selected':'')+(opt.value?'':' placeholder-option');b.textContent=opt.textContent;b.onclick=()=>{select.selectedIndex=i;select.dispatchEvent(new Event('change',{bubbles:true}));syncWozzaSelect(select);closeWozzaSelect()};panel.appendChild(b)});overlay.appendChild(panel);overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)closeWozzaSelect()});const host=select.closest('dialog[open]')||document.body;host.appendChild(overlay);wozzaSelectOverlay=overlay;document.body.classList.add('wozza-select-open');requestAnimationFrame(()=>overlay.classList.add('shown'))}
function enhanceWozzaSelect(select){if(!select||select.dataset.wozzaEnhanced)return;select.dataset.wozzaEnhanced='1';const wrap=document.createElement('span');wrap.className='wozza-select-wrap';select.parentNode.insertBefore(wrap,select);wrap.appendChild(select);const btn=document.createElement('button');btn.type='button';btn.className='wozza-select-button';btn.setAttribute('aria-label',select.getAttribute('aria-label')||'Open options');btn.onclick=()=>openWozzaSelect(select);wrap.appendChild(btn);select.classList.add('wozza-native-select');select._wozzaButton=btn;syncWozzaSelect(select)}
function showWozzaAlert(message,title='WozzaWorld'){document.querySelector('.wozza-alert-overlay')?.remove();const overlay=document.createElement('div');overlay.className='wozza-alert-overlay';overlay.innerHTML=`<div class="wozza-alert-card" role="alertdialog" aria-modal="true"><strong>${esc(title)}</strong><p>${esc(message)}</p><button type="button">OK</button></div>`;const close=()=>overlay.remove();overlay.querySelector('button').onclick=close;overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)close()});const host=document.querySelector('#tripDialog[open]')||document.querySelector('dialog[open]')||document.body;host.appendChild(overlay);overlay.querySelector('button').focus()}
function showWozzaConfirm(title,message,onConfirm,confirmText='Confirm'){document.querySelector('.wozza-alert-overlay')?.remove();const overlay=document.createElement('div');overlay.className='wozza-alert-overlay';overlay.innerHTML=`<div class="wozza-alert-card" role="alertdialog" aria-modal="true"><strong>${esc(title)}</strong><p>${esc(message)}</p><div class="wozza-confirm-actions"><button type="button" class="secondary">Cancel</button><button type="button" class="danger">${esc(confirmText)}</button></div></div>`;const close=()=>overlay.remove();overlay.querySelector('.secondary').onclick=close;overlay.querySelector('.danger').onclick=()=>{close();onConfirm?.()};overlay.addEventListener('pointerdown',e=>{if(e.target===overlay)close()});(document.querySelector('#tripDialog[open]')||document.querySelector('dialog[open]')||document.body).appendChild(overlay)}
const DESTINATION_TYPES=['City','Town','Region','Island','Other'];
const TRAVEL_MODES=['Plane','Train','Cruise','Ferry','Car','Campervan','Motorhome','Narrowboat','Coach / Bus','Motorbike','Bicycle','On foot','Other'];
const CURATED_DESTINATIONS=[{name:'Algarve',type:'Region',country:'Portugal'},{name:'Madeira',type:'Island',country:'Portugal'},{name:'Azores',type:'Island',country:'Portugal'},{name:'Tuscany',type:'Region',country:'Italy'},{name:'Sicily',type:'Island',country:'Italy'},{name:'Sardinia',type:'Island',country:'Italy'},{name:'Mallorca',type:'Island',country:'Spain'},{name:'Ibiza',type:'Island',country:'Spain'},{name:'Canary Islands',type:'Island',country:'Spain'},{name:'Costa del Sol',type:'Region',country:'Spain'},{name:'Lake District',type:'Region',country:'United Kingdom'},{name:'Cotswolds',type:'Region',country:'United Kingdom'},{name:'Scottish Highlands',type:'Region',country:'United Kingdom'},{name:'Cornwall',type:'Region',country:'United Kingdom'},{name:'Provence',type:'Region',country:'France'},{name:'French Riviera',type:'Region',country:'France'},{name:'Bavaria',type:'Region',country:'Germany'},{name:'Santorini',type:'Island',country:'Greece'},{name:'Crete',type:'Island',country:'Greece'},{name:'Bali',type:'Island',country:'Indonesia'}];
function knownDestination(name,country=''){const q=String(name||'').trim().toLocaleLowerCase();return [...CURATED_DESTINATIONS,...(state.customDestinations||[])].find(d=>d.name.toLocaleLowerCase()===q&&(!country||!d.country||sameCountry(d.country,country)))||null}
function destinationSuggestions(query,country=''){const q=String(query||'').trim().toLocaleLowerCase();if(!q)return[];const custom=state.customDestinations||[],old=(state.cities[country]||[]).map(x=>({name:x.name,type:'City',country}));return [...CURATED_DESTINATIONS,...custom,...old].filter(d=>(!country||!d.country||sameCountry(d.country,country))&&d.name.toLocaleLowerCase().includes(q)).filter((d,i,a)=>a.findIndex(x=>x.name.toLocaleLowerCase()===d.name.toLocaleLowerCase()&&sameCountry(x.country||country,d.country||country))===i).slice(0,6)}
function countryOptions(selected=''){const pool=countryCatalog().slice().sort((a,b)=>a.localeCompare(b));return `<option value="">Choose a country...</option>${pool.map(c=>`<option${sameCountry(c,selected)?' selected':''}>${esc(c)}</option>`).join('')}`}
function destinationTypeOptions(selected=''){return `<option value="">Choose a destination type...</option>${DESTINATION_TYPES.map(t=>`<option value="${t}"${t===selected?' selected':''}>${t}</option>`).join('')}`}
function travelModeOptions(selected=''){const raw=String(selected||''),lower=raw.toLowerCase();const normalized=lower==='sea'?'Ferry':lower==='air'?'Plane':raw;return `<option value="">Choose transport...</option>${TRAVEL_MODES.map(t=>`<option value="${t}"${t===normalized?' selected':''}>${t}</option>`).join('')}`}
function tripCountryChoices(){return [...new Set($$('#tripDestinationStops .trip-stop-country').map(x=>canonicalCountry(x.value)||x.value.trim()).filter(Boolean))]}
function applyDestinationSuggestion(row,d){row.querySelector('.trip-destination-name').value=d.name;row.querySelector('.trip-destination-name').dataset.selected=d.name;const country=row.querySelector('.trip-stop-country');if(d.country&&(!country.value||sameCountry(country.value,d.country))){country.value=d.country;syncWozzaSelect(country)}selectDestinationType(row,d.type||'Other');row.querySelector('.destination-suggestions').hidden=true}
function selectDestinationType(row,type){row.dataset.destinationType=type;row.querySelectorAll('.destination-type-chip').forEach(b=>{const on=b.dataset.type===type;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on))})}
function renderDestinationSuggestions(row){const input=row.querySelector('.trip-destination-name'),box=row.querySelector('.destination-suggestions'),country=row.querySelector('.trip-stop-country').value,q=input.value.trim();if(!q){box.hidden=true;return}const matches=destinationSuggestions(q,country);box.innerHTML=matches.map((d,i)=>`<button type="button" data-suggestion="${i}"><strong>${esc(d.name)}</strong><small>${esc(d.type||'Other')}${d.country?' · '+esc(d.country):''}</small></button>`).join('')+(!matches.some(d=>d.name.toLocaleLowerCase()===q.toLocaleLowerCase())?`<button type="button" class="add-custom-destination" data-custom="1"><strong>＋ Add “${esc(q)}”</strong><small>as a custom destination</small></button>`:'');box.hidden=false;box.querySelectorAll('[data-suggestion]').forEach(b=>b.onclick=()=>applyDestinationSuggestion(row,matches[+b.dataset.suggestion]));box.querySelector('[data-custom]')?.addEventListener('click',()=>{const name=input.value.trim();if(!name)return;input.dataset.selected=name;const c=canonicalCountry(row.querySelector('.trip-stop-country')?.value||'');const type=row.querySelector('.trip-destination-type')?.value||'Other';if(!(state.customDestinations||[]).some(d=>d.name.toLowerCase()===name.toLowerCase()&&sameCountry(d.country,c)))state.customDestinations.push({id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name,type,country:c});box.innerHTML='';box.hidden=true;updateStopSummary(row);input.blur()})}
function updateStopLabels(){const rows=$$('#tripDestinationStops .trip-destination-stop'),multi=rows.length>1;rows.forEach((row,i)=>{const label=row.querySelector('.trip-stop-number');if(label)label.textContent=(multi||row.classList.contains('collapsed'))?`Stop ${i+1}`:'Details';row.classList.toggle('single-stop',!multi);updateStopSummary(row)});refreshTripEditorSummaryLine()}
function updateStopSummary(row){const name=row.querySelector('.trip-destination-name')?.value.trim(),country=row.querySelector('.trip-stop-country')?.value.trim(),summary=row.querySelector('.trip-stop-summary'),flagSlot=row.querySelector('.trip-stop-summary-flag-slot'),meta=row.querySelector('.trip-stop-collapsed-meta');const label=name||country||'';if(summary)summary.textContent=label;if(flagSlot)flagSlot.innerHTML=country?flagMarkup(country,'trip-stop-summary-flag'):'';if(meta){const rows=$$('#tripDestinationStops .trip-destination-stop'),single=rows.length===1,collapsed=row.classList.contains('collapsed'),start=row.querySelector('.trip-destination-from')?.value||'',end=row.querySelector('.trip-destination-to')?.value||'',mode=row.querySelector('.trip-travel-mode')?.value||'';meta.innerHTML=single&&collapsed?`${start?`<span class="single-stop-summary-date">${pretty(start)}${end?' – '+pretty(end):''}</span>`:''}${mode?`<span class="single-stop-summary-mode">${travelModeIcon(mode)}</span>`:''}`:''}}
function toggleStopCollapsed(row,force){const next=force===undefined?!row.classList.contains('collapsed'):force;row.classList.toggle('collapsed',next);const b=row.querySelector('.stop-collapse-toggle');if(b){b.textContent=next?'+':'−';b.setAttribute('aria-expanded',String(!next));b.setAttribute('aria-label',next?'Expand stop':'Minimise stop')}updateStopLabels()}
function enableStopReorder(row){
  let holdTimer=null,startX=0,startY=0,lastY=0,dragging=false,ghost=null,marker=null,grabY=0,activeTouchId=null;
  const wrap=$('#tripDestinationStops');
  const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
  const getScroller=()=>{
    const dlg=$('#tripDialog')||row.closest('dialog,.modal,.sheet');
    if(!dlg)return null;
    return [dlg,...dlg.querySelectorAll('*')].find(el=>{const cs=getComputedStyle(el);return /auto|scroll/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight+4})||dlg;
  };
  const pointFromTouch=e=>{
    const list=[...(e.touches||[]),...(e.changedTouches||[])];
    return list.find(t=>activeTouchId==null||t.identifier===activeTouchId)||list[0]||null;
  };
  const placeMarker=y=>{
    const cards=[...wrap.querySelectorAll('.trip-destination-stop')].filter(el=>el!==row);
    let before=null;
    for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}
    if(before)wrap.insertBefore(marker,before);else wrap.appendChild(marker);
  };
  const startDrag=(x,y)=>{
    dragging=true;
    const r=row.getBoundingClientRect(),cs=getComputedStyle(row);
    grabY=Math.max(10,Math.min(r.height-10,y-r.top));
    marker=document.createElement('div');
    marker.className='trip-stop-mobile-marker';
    marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
    wrap.insertBefore(marker,row);
    row.dataset.dragStyle=row.getAttribute('style')||'';
    row.classList.add('trip-stop-mobile-live');
    Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
    const dragLayer=$('#tripDialog[open]')||row.closest('dialog[open]')||document.body;
    dragLayer.appendChild(row);
    navigator.vibrate?.(20);
  };
  const moveDrag=(x,y)=>{
    if(!dragging)return;
    row.style.top=`${y-grabY}px`;
    placeMarker(y);
    const sc=getScroller();
    if(sc){
      const r=sc.getBoundingClientRect(),edge=Math.min(80,Math.max(50,r.height*.16));
      if(y<r.top+edge)sc.scrollTop-=Math.min(14,Math.max(4,(r.top+edge-y)/5));
      else if(y>r.bottom-edge)sc.scrollTop+=Math.min(14,Math.max(4,(y-(r.bottom-edge))/5));
    }
  };
  const finishDrag=()=>{
    clearHold();
    if(!dragging){activeTouchId=null;return}
    dragging=false;
    if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);
    marker?.remove();marker=null;
    const prior=row.dataset.dragStyle||'';
    row.classList.remove('trip-stop-mobile-live');
    if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');
    delete row.dataset.dragStyle;
    updateStopLabels();
    activeTouchId=null;
  };
  row.addEventListener('touchstart',e=>{
    if(e.target.closest('button,input,select,textarea,.destination-suggestions'))return;
    if(e.touches.length!==1)return;
    const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;lastY=t.clientY;clearHold();
    holdTimer=setTimeout(()=>startDrag(startX,startY),420);
  },{passive:true});
  document.addEventListener('touchmove',e=>{
    if(activeTouchId==null)return;
    const t=pointFromTouch(e);if(!t)return;
    if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}
    if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold();
    lastY=t.clientY;
  },{passive:false,capture:true});
  document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
  document.addEventListener('touchcancel',finishDrag,{capture:true});
  // Mouse/desktop fallback.
  row.addEventListener('pointerdown',e=>{
    if(e.pointerType==='touch'||e.target.closest('button,input,select,textarea,.destination-suggestions'))return;
    startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);
    const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};
    const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);finishDrag()};
    document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true});
  });
}
function addDestinationStop(data={}){const wrap=$('#tripDestinationStops'),row=document.createElement('section');row.className='trip-destination-stop';row.dataset.stopId=data.id||'';row.innerHTML=`<div class="trip-stop-card-head"><span class="trip-stop-summary-flag-slot" aria-hidden="true"></span><span class="trip-stop-number"></span><strong class="trip-stop-summary"></strong><span class="trip-stop-collapsed-meta"></span><div class="trip-stop-actions"><button type="button" class="stop-collapse-toggle" aria-expanded="true" aria-label="Minimise stop">−</button><button type="button" class="remove-destination-stop" aria-label="Delete stop"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg></button></div></div><div class="trip-stop-body"><div class="trip-stop-top"><select class="trip-stop-country" aria-label="Country">${countryOptions(data.country||'')}</select></div><div class="destination-autocomplete destination-name-label"><input class="trip-destination-name" aria-label="Destination name" autocomplete="off" placeholder="Start typing a destination…" value="${esc(data.name||'')}"><div class="destination-suggestions" hidden></div></div><div class="destination-type-field"><select class="trip-destination-type" aria-label="Destination type">${destinationTypeOptions(data.type||'')}</select></div><div class="travel-mode-field"><select class="trip-travel-mode" aria-label="Travelling by">${travelModeOptions(data.travelMode||'')}</select></div><div class="trip-stop-dates"><div class="date-field"><input class="trip-destination-from" type="date" aria-label="Start date" value="${esc(data.start||'')}" data-placeholder="Start"></div><span class="date-to-word">to</span><div class="date-field"><input class="trip-destination-to" type="date" aria-label="End date" value="${esc(data.end||'')}" data-placeholder="End"></div></div><div class="itinerary-swipe-prompt" aria-hidden="true"><span>→</span> Swipe to create itinerary</div></div>`;wrap.appendChild(row);row.querySelectorAll('select').forEach(enhanceWozzaSelect);const input=row.querySelector('.trip-destination-name');input.addEventListener('input',()=>{input.dataset.selected='';renderDestinationSuggestions(row);updateStopSummary(row)});input.addEventListener('focus',()=>renderDestinationSuggestions(row));row.querySelector('.trip-stop-country').addEventListener('change',()=>{renderDestinationSuggestions(row);updateStopSummary(row)});row.querySelector('.remove-destination-stop').onclick=()=>{row.remove();updateStopLabels()};row.querySelector('.stop-collapse-toggle').onclick=()=>toggleStopCollapsed(row);enableStopReorder(row);bindWozzaDateInputs(row);updateStopLabels();return row}
function collectDestinationStops(){const rows=$$('#tripDestinationStops .trip-destination-stop'),out=[];for(const row of rows){const country=canonicalCountry(row.querySelector('.trip-stop-country').value);if(!country)continue;const input=row.querySelector('.trip-destination-name'),typed=input.value.trim();let name='',type=row.querySelector('.trip-destination-type')?.value||'Other',custom=false;if(typed){const known=knownDestination(typed,country);name=known?.name||typed;type=type||known?.type||'Other';custom=!known;if(custom){const exists=(state.customDestinations||[]).some(d=>d.name.toLowerCase()===name.toLowerCase()&&sameCountry(d.country,country));if(!exists)state.customDestinations.push({id:`custom-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,name,type,country})}}out.push({id:row.dataset.stopId||crypto.randomUUID?.()||String(Date.now()+out.length),name,type,country,start:row.querySelector('.trip-destination-from').value,end:row.querySelector('.trip-destination-to').value,travelMode:row.querySelector('.trip-travel-mode')?.value||'',custom})}return out}
function legacyDestinations(t){if((t.destinations||[]).length){const ds=t.destinations.map(d=>({...d}));if((t.start||t.end)&&!ds.some(d=>d.start||d.end)){if(ds[0])ds[0].start=t.start||'';if(ds[ds.length-1])ds[ds.length-1].end=t.end||''}return ds;}const out=[];for(const [country,names] of Object.entries(t.cities||{}))for(const name of names||[])out.push({name,type:'City',country,start:t.start||'',end:t.end||''});if(!out.length)tripCountries(t).forEach(country=>out.push({name:'',type:'Other',country,start:t.start||'',end:t.end||''}));return out}
function setTripRatingInput(r=0){r=Math.max(0,Math.min(5,Number(r)||0));$('#tripRating').value=String(r);$$('#tripRatingInput button').forEach(b=>{const on=Number(b.dataset.rating)<=r;b.textContent=on?'★':'☆';b.classList.toggle('selected',on)})}
function populateTripCompanions(selected=[]){const wanted=new Set(selected.map(x=>String(x).toLowerCase()));const tb=$('#tripCompanionBank');if(!tb)return;tb.innerHTML=[...state.companionBank].sort((a,b)=>String(a).localeCompare(String(b),undefined,{sensitivity:'base'})).map(n=>`<button type="button" class="companion-tag ${wanted.has(n.toLowerCase())?'selected':''}" data-companion="${esc(n)}">${esc(n)}</button>`).join('');$$('#tripCompanionBank .companion-tag').forEach(b=>{let hold=null,longPressed=false,sx=0,sy=0;const cancelHold=()=>{clearTimeout(hold);hold=null};b.onclick=e=>{if(longPressed){e.preventDefault();e.stopPropagation();longPressed=false;return}b.classList.toggle('selected')};b.addEventListener('contextmenu',e=>e.preventDefault());b.addEventListener('pointerdown',e=>{if(e.button!=null&&e.button!==0)return;sx=e.clientX;sy=e.clientY;longPressed=false;cancelHold();try{b.setPointerCapture?.(e.pointerId)}catch{}hold=setTimeout(()=>{longPressed=true;const name=b.dataset.companion;showWozzaConfirm('Remove companion?',`Send “${name}” to the recycle bin?`,()=>{const selectedNow=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).filter(x=>x.toLowerCase()!==name.toLowerCase());state.companionRecycleBin=state.companionRecycleBin.filter(x=>String(x.name).toLowerCase()!==name.toLowerCase());state.companionRecycleBin.unshift({name,removedAt:Date.now()});state.companionBank=state.companionBank.filter(x=>x.toLowerCase()!==name.toLowerCase());populateTripCompanions(selectedNow);localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${name} moved to recycle bin`)},'Move to recycle bin');navigator.vibrate?.(20)},520)});b.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-sx,e.clientY-sy)>14)cancelHold()});b.addEventListener('pointerup',cancelHold);b.addEventListener('pointercancel',cancelHold)})}
function saveNewTripCompanion(){const input=$('#tripCompanions'),v=addToCompanionBank(input.value.trim());if(!v)return;input.value='';populateTripCompanions([v,...$$('#tripCompanionBank .companion-tag.selected').map(b=>b.dataset.companion)]);const match=$$('#tripCompanionBank .companion-tag').find(b=>b.dataset.companion.toLowerCase()===v.toLowerCase());match?.classList.add('selected');localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${v} saved ✓`)}
function setTripCompanionsCollapsed(collapsed){const section=document.querySelector('.trip-companions-section'),body=$('#tripCompanionsBody'),b=$('#tripCompanionsToggle'),summary=$('#tripSelectedCompanions');if(!section||!body||!b)return;const selected=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).filter(Boolean);if(summary)summary.textContent=selected.join(' · ');section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand travel companions':'Minimise travel companions')}
function toggleTripCompanions(){const section=document.querySelector('.trip-companions-section');if(section)setTripCompanionsCollapsed(!section.classList.contains('collapsed'))}

function ensureTripVibeSection(){
 if($('#tripVibeSection'))return;
 const companions=document.querySelector('.trip-companions-section');if(!companions)return;
 const section=document.createElement('div');section.id='tripVibeSection';section.className='trip-vibe-section trip-companions-section collapsed';
 section.innerHTML='<div class="trip-vibe-head trip-companions-head"><div class="trip-section-title">THE VIBE</div><div id="tripVibeSummary" class="trip-selected-summary"></div><button type="button" id="tripVibeToggle" class="section-collapse-toggle" aria-expanded="false" aria-label="Expand the vibe">+</button></div><div id="tripVibeBody"><div id="tripVibeBank" class="vibe-bank companion-bank"></div><div class="trip-new-vibe trip-new-companion"><input id="tripVibeCustom" autocomplete="off" placeholder="Add your own vibe"></div></div>';
 companions.insertAdjacentElement('afterend',section);
 const st=document.createElement('style');st.id='wozza-trip-vibe-style';st.textContent=`
 #tripVibeSection{margin-top:28px!important;margin-bottom:0!important;padding:0!important}
 #tripVibeSection .trip-vibe-head{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) 54px!important;column-gap:14px!important;align-items:start!important;min-height:54px!important;padding:0!important;margin:0!important}
 #tripVibeSection .trip-vibe-head>.trip-section-title{min-width:0!important;padding-top:7px!important}
 #tripVibeSection .trip-vibe-head>.trip-selected-summary{grid-column:1!important;margin-top:6px!important;padding:0!important}
 #tripVibeSection.collapsed .trip-vibe-head:has(.trip-selected-summary:empty)>.trip-section-title{padding-top:0!important;align-self:center!important;transform:translateY(11px)!important}
 #tripVibeSection.collapsed .trip-vibe-head:has(.trip-selected-summary:not(:empty))>.trip-section-title{transform:none!important}
 #tripVibeSection .section-collapse-toggle{grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:start!important;margin:0!important;position:static!important;transform:none!important;width:54px!important;height:54px!important}
 #tripVibeSection .vibe-tag{position:relative}
 `;
 document.head.appendChild(st);
 $('#tripVibeToggle').addEventListener('click',toggleTripVibe);
 $('#tripVibeCustom').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();saveNewTripVibe()}});
}
function populateTripVibes(selected=[]){
 ensureTripVibeSection();const bank=$('#tripVibeBank');if(!bank)return;
 const native=['City Break','Beach Holiday','Spa & Wellness','Adventure','Road Trip','Snow & Ski','Cruise','Visiting Friends & Family','Celebration','Great Outdoors','Camping'];
 const wanted=new Set((selected||[]).map(x=>String(x).toLowerCase())),all=[...state.vibeBank];(selected||[]).forEach(v=>{if(!all.some(x=>String(x).toLowerCase()===String(v).toLowerCase()))all.push(v)});all.sort((a,b)=>String(a).localeCompare(String(b),undefined,{sensitivity:'base'}));
 bank.innerHTML=all.map(n=>{const isNative=native.some(x=>x.toLowerCase()===String(n).toLowerCase());return `<button type="button" class="companion-tag vibe-tag ${wanted.has(String(n).toLowerCase())?'selected':''}" data-vibe="${esc(n)}" data-native="${isNative?'1':'0'}">${esc(n)}</button>`}).join('');
 $$('#tripVibeBank .vibe-tag').forEach(b=>{let hold=null,longPressed=false,sx=0,sy=0;const cancel=()=>{clearTimeout(hold);hold=null};b.onclick=e=>{if(longPressed){e.preventDefault();e.stopPropagation();longPressed=false;return}b.classList.toggle('selected');syncTripVibeSummary();refreshTripEditorSummaryLine()};if(b.dataset.native==='1')return;b.addEventListener('contextmenu',e=>e.preventDefault());b.addEventListener('pointerdown',e=>{if(e.button!=null&&e.button!==0)return;sx=e.clientX;sy=e.clientY;longPressed=false;cancel();hold=setTimeout(()=>{longPressed=true;const name=b.dataset.vibe;showWozzaConfirm('Add vibe to recycle bin?',`Are you sure you want to add this vibe to the recycle bin?`,()=>{const selectedNow=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe);state.vibeRecycleBin=state.vibeRecycleBin.filter(x=>String(x.name).toLowerCase()!==String(name).toLowerCase());state.vibeRecycleBin.unshift({name,removedAt:Date.now()});state.vibeBank=state.vibeBank.filter(x=>String(x).toLowerCase()!==String(name).toLowerCase());populateTripVibes(selectedNow.filter(x=>String(x).toLowerCase()!==String(name).toLowerCase()));localStorage.setItem('wozzaworld-state',JSON.stringify(state));toast(`${name} moved to recycle bin`);refreshTripEditorSummaryLine()},'Move to recycle bin');navigator.vibrate?.(20)},520)});b.addEventListener('pointermove',e=>{if(Math.hypot(e.clientX-sx,e.clientY-sy)>14)cancel()});b.addEventListener('pointerup',cancel);b.addEventListener('pointercancel',cancel)})
}
function saveNewTripVibe(){
 const input=$('#tripVibeCustom'),raw=String(input?.value||'').trim();if(!raw)return;
 const existing=state.vibeBank.find(x=>String(x).toLowerCase()===raw.toLowerCase()),v=existing||raw;
 if(!existing)state.vibeBank.push(v);
 const selected=[v,...$$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe)];
 input.value='';populateTripVibes(selected);
 localStorage.setItem('wozzaworld-state',JSON.stringify(state));syncTripVibeSummary();toast(`${v} saved ✓`);
}
function syncTripVibeSummary(){const summary=$('#tripVibeSummary');if(!summary)return;summary.textContent=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe).filter(Boolean).join(' · ')}
function setTripVibeCollapsed(collapsed){
 ensureTripVibeSection();const section=$('#tripVibeSection'),body=$('#tripVibeBody'),b=$('#tripVibeToggle'),summary=$('#tripVibeSummary');if(!section||!body||!b)return;
 syncTripVibeSummary();
 section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand the vibe':'Minimise the vibe');
}
function toggleTripVibe(){const section=$('#tripVibeSection');if(section)setTripVibeCollapsed(!section.classList.contains('collapsed'))}

function updateTripNotesSummary(){const summary=$('#tripNotesSummary'),notes=$('#tripNotes');if(summary)summary.textContent=(notes?.value||'').trim()}function setTripNotesCollapsed(collapsed){updateTripNotesSummary();const section=document.querySelector('.trip-notes-section'),body=$('#tripNotesBody'),b=$('#tripNotesToggle');if(!section||!body||!b)return;section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand notes':'Minimise notes')}
function toggleTripNotes(){updateTripNotesSummary();const section=document.querySelector('.trip-notes-section'),body=$('#tripNotesBody'),b=$('#tripNotesToggle');if(!section||!body||!b)return;const next=!section.classList.contains('collapsed');section.classList.toggle('collapsed',next);body.hidden=next;b.textContent=next?'+':'−';b.setAttribute('aria-expanded',String(!next));b.setAttribute('aria-label',next?'Expand notes':'Minimise notes')}
function normaliseTripTodos(items=[]){return (items||[]).map(x=>typeof x==='string'?{id:'',activityId:'',text:x,done:false}:{id:String(x?.id||''),activityId:String(x?.activityId||''),text:String(x?.text||''),done:!!x?.done}).filter(x=>x.text)}
const TODO_SCRIBBLE_VARIANTS=[
  {phase:.10,amp:5.2,bias:.15},{phase:.42,amp:4.6,bias:-.10},{phase:.73,amp:5.6,bias:.05},{phase:1.05,amp:4.9,bias:.18},{phase:1.38,amp:5.3,bias:-.16}
];
function tripTodoWrappedLines(input){const text=input.value.trim();if(!text)return[];const cs=getComputedStyle(input),canvas=tripTodoWrappedLines.canvas||(tripTodoWrappedLines.canvas=document.createElement('canvas')),ctx=canvas.getContext('2d');ctx.font=`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const max=Math.max(30,input.clientWidth-(parseFloat(cs.paddingLeft)||0)-(parseFloat(cs.paddingRight)||0));const words=text.split(/\s+/),lines=[];let line='';for(const word of words){const trial=line?line+' '+word:word;if(ctx.measureText(trial).width<=max||!line)line=trial;else{lines.push({text:line,width:Math.min(max,ctx.measureText(line).width)});line=word}}if(line)lines.push({text:line,width:Math.min(max,ctx.measureText(line).width)});return lines.slice(0,3)}
function scribblePath(width,variant,line=0){const v=TODO_SCRIBBLE_VARIANTS[variant%TODO_SCRIBBLE_VARIANTS.length],cycles=Math.max(1,Math.min(5,Math.round(width/72))),step=width/cycles;let d=`M 2 ${13+v.bias*4}`;for(let i=0;i<cycles;i++){const x=i*step+2,x2=Math.min(width-2,x+step),mid=(x+x2)/2,amp=v.amp*(.82+(((i+variant+line)%3)*.13)),dir=((i+variant+line)%2?1:-1);d+=` C ${x+step*.22} ${13+dir*amp}, ${mid-step*.12} ${13-dir*amp*.9}, ${mid} ${13+dir*amp*.35} S ${x2-step*.18} ${13-dir*amp}, ${x2} ${13+dir*amp*.12}`};return d}
function todoScribbleMarkup(i=0){return `<svg class="trip-todo-scribble" aria-hidden="true"></svg>`}
function sizeTripTodoScribble(row){const input=row?.querySelector('.trip-todo-input'),svg=row?.querySelector('.trip-todo-scribble');if(!input||!svg)return;const lines=tripTodoWrappedLines(input);if(!lines.length)return;const cs=getComputedStyle(input),lh=parseFloat(cs.lineHeight)||22,padTop=parseFloat(cs.paddingTop)||0,padLeft=parseFloat(cs.paddingLeft)||0,variant=Math.abs(Number(row.dataset.scribble)||0)%5;const widths=lines.map(x=>Math.min(input.clientWidth-padLeft-(parseFloat(cs.paddingRight)||0),Math.max(28,x.width+10)));const w=Math.max(...widths)+4,h=Math.max(input.clientHeight,Math.ceil(padTop*2+lh*lines.length));svg.style.left=`${padLeft-4}px`;svg.style.top='0';svg.style.width=`${w}px`;svg.style.height=`${h}px`;svg.setAttribute('viewBox',`0 0 ${w} ${h}`);svg.innerHTML=widths.map((width,n)=>`<path d="${scribblePath(width,variant,n)}" transform="translate(0 ${padTop+n*lh})"></path>`).join('')}
function autoSizeTripTodo(input){input.style.height='auto';const cs=getComputedStyle(input),lh=parseFloat(cs.lineHeight)||22,pad=(parseFloat(cs.paddingTop)||0)+(parseFloat(cs.paddingBottom)||0),max=lh*3+pad;input.style.height=`${Math.min(input.scrollHeight,max)}px`;input.style.overflowY=input.scrollHeight>max?'auto':'hidden'}
function todoRowMarkup(item={text:'',done:false},i=0){const text=String(item.text||''),done=!!item.done,id=String(item.id||''),activityId=String(item.activityId||'');return `<div class="trip-todo-row${text?' has-text':''}${done?' is-done':''}" data-todo-id="${esc(id)}" data-activity-id="${esc(activityId)}" data-scribble="${i%5}"><textarea class="trip-todo-input" rows="1" placeholder="Type here..." aria-label="To do action ${i+1}">${esc(text)}</textarea>${done?todoScribbleMarkup(i):''}<button type="button" class="trip-todo-check status-tick${done?' selected':''}" aria-label="${done?'Mark incomplete':'Mark complete'}" aria-pressed="${done}"></button><button type="button" class="trip-todo-remove" aria-label="Remove to do action">×</button></div>`}
function bindTripTodoRow(row){const input=row.querySelector('.trip-todo-input'),check=row.querySelector('.trip-todo-check'),remove=row.querySelector('.trip-todo-remove');const scribbleIndex=()=>Number(row.dataset.scribble||0)%5;const syncScribble=()=>{row.querySelector('.trip-todo-scribble')?.remove();if(row.classList.contains('is-done')&&input.value.trim()){input.insertAdjacentHTML('afterend',todoScribbleMarkup(scribbleIndex()));requestAnimationFrame(()=>sizeTripTodoScribble(row))}};const sync=()=>{autoSizeTripTodo(input);row.classList.toggle('has-text',!!input.value.trim());if(!input.value.trim()){row.classList.remove('is-done');check.classList.remove('selected');check.setAttribute('aria-pressed','false')}syncScribble();updateTripTodoSummary()};input.addEventListener('input',sync);input.addEventListener('change',sync);input.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();const text=input.value.trim();if(!text)return;if(!row.classList.contains('has-text'))sync();let next=row.nextElementSibling;if(!next||next.classList.contains('has-text')){addTripTodoRow();next=$('#tripTodoList')?.lastElementChild}else next.querySelector('.trip-todo-input')?.focus()}});check.onclick=()=>{if(!input.value.trim())return;const done=!row.classList.contains('is-done');row.classList.toggle('is-done',done);check.classList.toggle('selected',done);check.setAttribute('aria-pressed',String(done));check.setAttribute('aria-label',done?'Mark incomplete':'Mark complete');syncScribble();updateTripTodoSummary()};remove.onclick=()=>{row.remove();if(!$('#tripTodoList')?.children.length)addTripTodoRow();updateTripTodoSummary()};autoSizeTripTodo(input);if(row.classList.contains('is-done'))requestAnimationFrame(()=>sizeTripTodoScribble(row))}
function attachTripTodoReorder(){
 const list=$('#tripTodoList');if(!list)return;
 if(!document.getElementById('trip-todo-reorder-style')){
  const st=document.createElement('style');st.id='trip-todo-reorder-style';st.textContent=`
   #tripTodoList .trip-todo-row{cursor:grab;-webkit-touch-callout:none}
   #tripTodoList>.trip-todo-drag-marker{display:block!important;box-sizing:border-box!important;border:0!important;background:transparent!important;padding:0!important;visibility:hidden!important}
   .trip-todo-drag-live{position:fixed!important;z-index:2147483647!important;pointer-events:none!important;opacity:.94!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important;border-radius:18px!important;overflow:hidden!important;clip-path:inset(0 round 18px)!important}
  `;document.head.appendChild(st)
 }
 const rows=()=>[...list.querySelectorAll('.trip-todo-row')];
 rows().forEach(row=>{
  if(row.dataset.todoReorderBound==='1')return;row.dataset.todoReorderBound='1';
  let holdTimer=null,startX=0,startY=0,dragging=false,marker=null,grabY=0,activeTouchId=null,suppressClick=false;
  const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
  const pointFromTouch=e=>{const a=[...(e.touches||[]),...(e.changedTouches||[])];return a.find(t=>activeTouchId==null||t.identifier===activeTouchId)||a[0]||null};
  const placeMarker=y=>{const cards=rows().filter(el=>el!==row);let before=null;for(const card of cards){const r=card.getBoundingClientRect();if(y<r.top+r.height/2){before=card;break}}if(before)list.insertBefore(marker,before);else list.appendChild(marker)};
  const startDrag=(x,y)=>{
   dragging=true;window.__wozzaTodoReorderActive=true;
   const r=row.getBoundingClientRect(),cs=getComputedStyle(row);grabY=Math.max(10,Math.min(r.height-10,y-r.top));
   marker=document.createElement('div');marker.className='trip-todo-drag-marker';marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;max-height:${r.height}px;flex:0 0 ${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;
   list.insertBefore(marker,row);row.dataset.todoDragStyle=row.getAttribute('style')||'';row.classList.add('trip-todo-drag-live');
   Object.assign(row.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});
   /* Proven stop-reorder fix: keep the live dragged node inside the open trip dialog.
      This preserves the #tripDialog descendant styling instead of moving it to body. */
   const dragLayer=$('#tripDialog[open]')||row.closest('dialog[open]')||document.body;
   dragLayer.appendChild(row);navigator.vibrate?.(20)
  };
  const moveDrag=(x,y)=>{if(!dragging)return;row.style.top=`${y-grabY}px`;placeMarker(y)};
  const finishDrag=()=>{clearHold();if(!dragging){activeTouchId=null;return}dragging=false;if(marker?.parentNode)marker.parentNode.insertBefore(row,marker);marker?.remove();marker=null;const prior=row.dataset.todoDragStyle||'';row.classList.remove('trip-todo-drag-live');if(prior)row.setAttribute('style',prior);else row.removeAttribute('style');delete row.dataset.todoDragStyle;updateTripTodoSummary();window.__wozzaTodoReorderActive=false;activeTouchId=null;suppressClick=true;setTimeout(()=>{suppressClick=false},120)};
  row.addEventListener('touchstart',e=>{if(e.target.closest('button')||e.touches.length!==1)return;const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420)},{passive:true});
  document.addEventListener('touchmove',e=>{if(activeTouchId==null)return;const t=pointFromTouch(e);if(!t)return;if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientX,t.clientY);return}if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold()},{passive:false,capture:true});
  document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finishDrag()}},{passive:false,capture:true});
  document.addEventListener('touchcancel',finishDrag,{capture:true});
  row.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.target.closest('button'))return;startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientX,ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};const up=()=>{document.removeEventListener('pointermove',move);finishDrag()};document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true})});
  row.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true)
 })
}
function renderTripTodos(items=[]){const list=$('#tripTodoList');if(!list)return;const vals=normaliseTripTodos(items);list.innerHTML=vals.map((v,i)=>todoRowMarkup(v,i)).join('');$$('.trip-todo-row',list).forEach(bindTripTodoRow);attachTripTodoReorder();updateTripTodoSummary()}
function addTripTodoRow(value=''){const list=$('#tripTodoList');if(!list)return;const item=typeof value==='string'?{text:value,done:false}:value;const wrap=document.createElement('div');wrap.innerHTML=todoRowMarkup(item,list.children.length);const row=wrap.firstElementChild;list.appendChild(row);bindTripTodoRow(row);attachTripTodoReorder();row.querySelector('.trip-todo-input')?.focus();updateTripTodoSummary()}
function collectTripTodos(){return $$('.trip-todo-row').map(row=>({id:row.dataset.todoId||'',activityId:row.dataset.activityId||'',text:row.querySelector('.trip-todo-input')?.value.trim()||'',done:row.classList.contains('is-done')})).filter(x=>x.text)}
function updateTripTodoSummary(){const summary=$('#tripTodoSummary');if(!summary)return;const items=collectTripTodos().filter(x=>!x.done);summary.textContent=items.map(x=>x.text).join(', ');summary.hidden=!items.length}
function setTripTodoCollapsed(collapsed){const section=document.querySelector('.trip-todo-section'),body=$('#tripTodoBody'),b=$('#tripTodoToggle');if(!section||!body||!b)return;section.classList.toggle('collapsed',collapsed);body.hidden=collapsed;b.textContent=collapsed?'+':'−';b.setAttribute('aria-expanded',String(!collapsed));b.setAttribute('aria-label',collapsed?'Expand to do list':'Minimise to do list');updateTripTodoSummary();if(!collapsed)requestAnimationFrame(()=>{$$('.trip-todo-row',body).forEach(row=>{const input=row.querySelector('.trip-todo-input');if(input)autoSizeTripTodo(input);if(row.classList.contains('is-done')){if(!row.querySelector('.trip-todo-scribble'))input?.insertAdjacentHTML('afterend',todoScribbleMarkup(Number(row.dataset.scribble||0)));sizeTripTodoScribble(row)}})})}
function toggleTripTodo(){const section=document.querySelector('.trip-todo-section');if(!section)return;const opening=section.classList.contains('collapsed');setTripTodoCollapsed(!opening);if(opening&&!$('#tripTodoList')?.children.length)addTripTodoRow()}
function setTripDialogMode(isEdit){const form=$('#tripForm'),title=form?.querySelector('h2'),submit=form?.querySelector('.dialog-actions .primary'),del=$('#deleteTripBtn');if(title)title.textContent=isEdit?'Edit trip':'Create trip';if(submit)submit.textContent=isEdit?'Save changes':'Create trip';if(del)del.hidden=!isEdit;form?.classList.toggle('trip-edit-mode',isEdit);form?.classList.toggle('trip-create-mode',!isEdit)}
function resetDestinationStops(items=[]){$('#tripDestinationStops').innerHTML='';(items.length?items:[{}]).forEach(addDestinationStop);updateStopLabels()}

function updateNewTripNameArrow(){const form=$('#tripForm');if(!form)return;let arrow=form.querySelector('.new-trip-name-arrow');const show=!$('#tripName').value.trim()&&$('#tripDialog')?.open;if(show&&!arrow){arrow=document.createElement('div');arrow.className='new-trip-name-arrow';arrow.setAttribute('aria-hidden','true');arrow.innerHTML='<svg viewBox="0 0 150 115"><path d="M18 100 C25 58, 58 28, 119 22"/><path d="M101 10 L123 21 L105 39"/></svg>';form.appendChild(arrow);requestAnimationFrame(()=>arrow.classList.add('show'))}else if(!show&&arrow){arrow.classList.remove('show');setTimeout(()=>arrow.remove(),220)}}
const tripNameInput=$('#tripName');if(tripNameInput){tripNameInput.placeholder='Give your trip a name…';tripNameInput.maxLength=50;tripNameInput.style.textTransform='uppercase';tripNameInput.addEventListener('input',()=>{tripNameInput.style.textTransform='uppercase';updateNewTripNameArrow();tripNameInput.dataset.count=String(tripNameInput.value.length)})}
let tripEditorSnapshot='';
function currentTripEditorSnapshot(){const form=$('#tripForm');if(!form)return'';const fields=$$('input,textarea,select',form).map(el=>[el.id||el.name||el.className,el.type==='checkbox'||el.type==='radio'?el.checked:el.value]);const selected=$$('#tripCompanionBank .companion-tag.selected').map(x=>x.dataset.companion).sort();const vibes=$$('#tripVibeBank .vibe-tag.selected').map(x=>x.dataset.vibe).sort();return JSON.stringify({fields,selected,vibes,todos:collectTripTodos(),stops:collectDestinationStops(),rating:$('#tripRating')?.value||'0'})}
function rememberTripEditorSnapshot(){tripEditorSnapshot=currentTripEditorSnapshot()}
function tripEditorIsDirty(){return !!tripEditorSnapshot&&currentTripEditorSnapshot()!==tripEditorSnapshot}
function closeTripEditorNow(){editingTripId=null;tripEditorSnapshot='';$('#tripForm')?.querySelector('.new-trip-name-arrow')?.remove();$('#tripDialog').close()}
function requestCloseTripEditor(){if(!tripEditorIsDirty()){closeTripEditorNow();return}$('#tripUnsavedDialog')?.showModal()}
function openTrip(country=''){editingTripId=null;setTripDialogMode(false);$('#tripName').value='';$('#tripForm')?.querySelector('.trip-editor-date-range')?.remove();resetDestinationStops([{country}]);$('#tripCompanions').value='';populateTripCompanions([]);setTripCompanionsCollapsed(true);populateTripVibes([]);setTripVibeCollapsed(true);renderTripTodos([]);setTripTodoCollapsed(true);$('#tripNotes').value='';setTripNotesCollapsed(true);setTripRatingInput(0);$('#tripDialog').showModal();requestAnimationFrame(()=>{document.activeElement?.blur?.();$('#tripDialog').scrollTop=0;updateNewTripNameArrow();setupTripTitleScroll();rememberTripEditorSnapshot()})}
function refreshTripEditorSummaryLine(){const form=$('#tripForm'),host=$('#tripDestinationStops');if(!form||!host)return;const rows=$$('.trip-destination-stop',host);let line=form.querySelector('.trip-editor-date-range');if(!line){line=document.createElement('div');line.className='trip-editor-date-range'}if(line.nextElementSibling!==host)host.insertAdjacentElement('beforebegin',line);const first=rows[0],last=rows[rows.length-1]||first,start=first?.querySelector('.trip-destination-from')?.value||'',end=(rows.length===1?first:last)?.querySelector('.trip-destination-to')?.value||'',modes=[...new Set(rows.map(r=>r.querySelector('.trip-travel-mode')?.value).filter(Boolean))];const date=start?`${pretty(start)}${end?' – '+pretty(end):''}`:'Dates to be confirmed';const modeKeys=modes.map(m=>String(m).toLowerCase()),vibes=$$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe).filter(v=>vibeIcon(v)&&!(String(v).toLowerCase()==='cruise'&&modeKeys.includes('cruise')));const iconHtml=[...modes.map(travelModeIcon),...vibes.map(vibeIcon)].join('');line.innerHTML=`<span class="trip-editor-date">${date}</span>${iconHtml?`<span class="trip-editor-icon-grid">${iconHtml}</span>`:''}`;line.hidden=false}function updateTripEditorDateRange(t){refreshTripEditorSummaryLine()}
function openTripEditor(t){editingTripId=t.id;setTripDialogMode(true);$('#tripName').value=t.name||'';resetDestinationStops(legacyDestinations(t));updateTripEditorDateRange(t);const stopRows=$$('#tripDestinationStops .trip-destination-stop');stopRows.forEach(row=>toggleStopCollapsed(row,stopRows.length>1));$('#tripCompanions').value='';populateTripCompanions(t.companions||[]);setTripCompanionsCollapsed(true);populateTripVibes(t.vibes||[]);refreshTripEditorSummaryLine();setTripVibeCollapsed(true);renderTripTodos(t.todos||[]);setTripTodoCollapsed(true);$('#tripNotes').value=t.notes||'';setTripNotesCollapsed(true);setTripRatingInput(t.rating||0);$('#tripDialog').showModal();requestAnimationFrame(()=>{document.activeElement?.blur?.();$('#tripDialog').scrollTop=0;updateNewTripNameArrow();setupTripTitleScroll();rememberTripEditorSnapshot()})}
$('#addTripDestination').onclick=()=>{addDestinationStop({country:tripCountryChoices().slice(-1)[0]||currentCountry||''});updateStopLabels()};
$('#tripCompanions').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();saveNewTripCompanion()}});

document.querySelectorAll('select').forEach(enhanceWozzaSelect);
const addStopBtn=$('#addTripDestination');if(addStopBtn){addStopBtn.classList.add('tourist-add-stop');addStopBtn.innerHTML='<span>+ ADD STOP</span><span class="tourist-add-arrow" aria-hidden="true">›</span>';const wiggle=()=>{if(addStopBtn.classList.contains('wozza-add-stop-subtle')){addStopBtn.classList.remove('wiggle');return}addStopBtn.classList.remove('wiggle');void addStopBtn.offsetWidth;addStopBtn.classList.add('wiggle')};addStopBtn.addEventListener('click',wiggle);setInterval(()=>{if(document.querySelector('#tripDialog[open]')&&addStopBtn.isConnected)wiggle()},10000)}
$('#tripCompanionsToggle')?.addEventListener('click',toggleTripCompanions);$('#tripTodoToggle')?.addEventListener('click',toggleTripTodo);$('#addTripTodo')?.addEventListener('click',()=>addTripTodoRow());$('#tripNotesToggle')?.addEventListener('click',toggleTripNotes);$('#tripNotes')?.addEventListener('input',updateTripNotesSummary);$('#newTripBtn').onclick=()=>openTrip();$('#addCountryTrip').onclick=()=>openTrip(currentCountry);const closeTripEditor=closeTripEditorNow;$('#cancelTrip').onclick=requestCloseTripEditor;$('#closeTripDialog').onclick=requestCloseTripEditor;$('#tripUnsavedCancel')?.addEventListener('click',()=>$('#tripUnsavedDialog').close());$('#tripUnsavedLeave')?.addEventListener('click',()=>{$('#tripUnsavedDialog').close();closeTripEditorNow()});let tripSaveAndContinue=false;$('#tripUnsavedSaveContinue')?.addEventListener('click',()=>{tripSaveAndContinue=true;$('#tripUnsavedDialog').close();$('#tripForm')?.requestSubmit()});$('#tripUnsavedSave')?.addEventListener('click',()=>{tripSaveAndContinue=false;$('#tripUnsavedDialog').close();$('#tripForm')?.requestSubmit()});$('#deleteTripBtn').onclick=()=>{const t=state.trips.find(x=>String(x.id)===String(editingTripId));if(!t)return;showWozzaConfirm('Remove trip?',`Send “${t.name}” to the recycle bin?`,()=>{state.tripRecycleBin.unshift({...structuredClone(t),removedAt:Date.now()});state.trips=state.trips.filter(x=>String(x.id)!==String(t.id));closeTripEditor();save();toast(`${t.name} moved to recycle bin`)},'Move to recycle bin')};
function parseCities(raw){return {}}
$$('#tripRatingInput button').forEach(b=>b.onclick=()=>{const n=Number(b.dataset.rating),current=Number($('#tripRating').value)||0;setTripRatingInput(current===1&&n===1?0:n)});
$('#tripForm').onsubmit=e=>{e.preventDefault();const stops=collectDestinationStops(),countries=[...new Set(stops.map(d=>d.country).filter(Boolean))];if(!countries.length){showWozzaAlert('Please choose a country for at least one stop.');return}let name=$('#tripName').value.trim();if(!name)name=countries.length===1?countries[0]:countries.join(' & ');const firstStop=stops[0]||{},lastStop=stops[stops.length-1]||firstStop,start=firstStop.start||'',end=(stops.length===1?firstStop.end:lastStop.end)||'';const companions=[...new Set($$('#tripCompanionBank .companion-tag.selected').map(b=>b.dataset.companion).filter(Boolean))];const vibes=[...new Set($$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe).filter(Boolean))];const existing=editingTripId?state.trips.find(x=>String(x.id)===String(editingTripId)):null,oldCountries=existing?tripCountries(existing).slice():[],t=existing||{id:crypto.randomUUID?.()||String(Date.now())};const tripStatus=existing?.status||'upcoming',hadLegacyDates=!!existing&&!(existing.destinations||[]).some(d=>d.start||d.end)&&!!(existing.start||existing.end),safeStart=hadLegacyDates&&!start?existing.start||'':start,safeEnd=hadLegacyDates&&!end?existing.end||'':end;Object.assign(t,{name,start:safeStart,end:safeEnd,countries,destinations:stops,cities:{},companions,vibes,plan:existing?.plan||'',todos:collectTripTodos(),notes:$('#tripNotes').value.trim(),rating:Number($('#tripRating').value)||0,status:tripStatus});if(!existing)state.trips.push(t);countries.forEach(c=>{if(!state.countryAddedAt[c])state.countryAddedAt[c]=new Date().toISOString()});reconcileTripCountryStatuses([...oldCountries,...countries]);save();if(tripSaveAndContinue){tripSaveAndContinue=false;editingTripId=t.id;setTripDialogMode(true);rememberTripEditorSnapshot();toast(existing?'Trip updated ✓':'Trip created ✈');return}editingTripId=null;tripEditorSnapshot='';$('#tripDialog').close();toast(existing?'Trip updated ✓':'Trip created ✈')};
$('#cityForm').onsubmit=e=>{e.preventDefault();const typed=$('#cityInput').value.trim(),name=canonicalCity(typed),month=$('#cityMonth').value;if(!typed||!currentCountry)return;if(!name){alert('Please choose a destination from the WozzaWorld suggestions.');return;}state.cities[currentCountry]??=[];let rec=state.cities[currentCountry].find(x=>x.name.toLowerCase()===name.toLowerCase());if(!rec){rec={name,visits:[]};state.cities[currentCountry].push(rec)}if(month&&!rec.visits.includes(month))rec.visits.push(month);$('#cityInput').value='';$('#cityMonth').value='';save()};$('#placeForm').onsubmit=e=>{e.preventDefault();const v=$('#placeInput').value.trim();if(v){(state.places[currentCountry]??=[]).push(v);$('#placeInput').value='';save()}};$('#companionForm').onsubmit=e=>{e.preventDefault();const v=addToCompanionBank($('#companionInput').value.trim());if(v){state.companions[currentCountry]??=[];if(!state.companions[currentCountry].some(x=>x.toLowerCase()===v.toLowerCase()))state.companions[currentCountry].push(v);$('#companionInput').value='';save()}};let memoryTimer;$('#memoryNotes').oninput=e=>{clearTimeout(memoryTimer);memoryTimer=setTimeout(()=>{state.memories[currentCountry]=e.target.value;localStorage.setItem('wozzaworld-state',JSON.stringify(state));renderCountryLists()},250)};$('#confirmRemove').onclick=e=>{e.preventDefault();if(pendingRemoveCountry)removeCountry(pendingRemoveCountry,pendingRemoveStatus);pendingRemoveCountry=null;pendingRemoveStatus=null;$('#removeDialog').close()};
const carousel=$('#countryCarousel');if(carousel){
  /* One gesture owner for the overview country rows.
     Horizontal = exactly one cyclic tab step; vertical = native page scroll. */
  carousel.style.touchAction='pan-y';
  let sx=0,sy=0,drag=false,direction=null,swipedAt=0;
  carousel.onpointerdown=e=>{
    if(e.pointerType==='mouse'&&e.button!==0){drag=false;return}
    if(e.target.closest('button,input,select,textarea,a')){drag=false;return}
    sx=e.clientX;sy=e.clientY;drag=true;direction=null;
  };
  carousel.onpointermove=e=>{
    if(window.__wozzaBucketReorderActive){drag=false;direction=null;return}
    if(!drag||direction)return;
    const dx=e.clientX-sx,dy=e.clientY-sy;
    if(Math.abs(dx)<8&&Math.abs(dy)<8)return;
    if(Math.abs(dy)>=Math.abs(dx)){direction='vertical';drag=false}
    else direction='horizontal';
  };
  carousel.onpointerup=e=>{
    if(window.__wozzaBucketReorderActive){drag=false;direction=null;return}
    if(!drag||direction==='vertical'){drag=false;direction=null;return}
    const dx=e.clientX-sx,dy=e.clientY-sy;
    drag=false;direction=null;
    if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.35){
      swipedAt=Date.now();
      const step=dx<0?1:-1;
      setCountrySlide((countrySlide+step+3)%3,true,step>0?'next':'prev');
    }
  };
  carousel.onpointercancel=()=>{drag=false;direction=null};
  carousel.addEventListener('click',e=>{
    if(Date.now()-swipedAt<450){e.preventDefault();e.stopImmediatePropagation()}
  },true);
}setCountrySlide(0,false);const ps=$('#passportStatsTrack');if(ps&&!ps.dataset.ready){ps.dataset.ready='1';let px=0,py=0;ps.onpointerdown=e=>{clearInterval(passportStatsAutoTimer);px=e.clientX;py=e.clientY};ps.onpointerup=e=>{const dx=e.clientX-px,dy=e.clientY-py;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.2)setPassportStatsSlide(passportStatsSlide+(dx<0?1:-1));restartPassportStatsAuto()};ps.onpointercancel=restartPassportStatsAuto;setPassportStatsSlide(0);restartPassportStatsAuto()}[['.summary.visited',0],['.summary.going',1],['.summary.bucket',2]].forEach(([sel,i])=>{const el=$(sel);el.setAttribute('role','button');el.setAttribute('tabindex','0');const jump=()=>{setCountrySlide(i,true,i>=countrySlide?'next':'prev')};el.onclick=jump;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();jump()}}});

/* Home status tabs: cyclic left/right swipe without changing vertical scroll position. */
const homeStatusSummary=document.querySelector('.map-summary');
if(homeStatusSummary&&!homeStatusSummary.dataset.cycleSwipeReady){
  homeStatusSummary.dataset.cycleSwipeReady='1';
  let statusSwipeX=0,statusSwipeY=0,statusSwipe=false;
  homeStatusSummary.addEventListener('pointerdown',e=>{
    if(e.target.closest('button,input,a')){statusSwipe=false;return}
    statusSwipeX=e.clientX;statusSwipeY=e.clientY;statusSwipe=true;
  });
  homeStatusSummary.addEventListener('pointerup',e=>{
    if(!statusSwipe)return;
    statusSwipe=false;
    const dx=e.clientX-statusSwipeX,dy=e.clientY-statusSwipeY;
    if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.2){
      setCountrySlide(countrySlide+(dx<0?1:-1),true,dx<0?'next':'prev');
    }
  });
  homeStatusSummary.addEventListener('pointercancel',()=>statusSwipe=false);
}


/* Country-list swipe is intentionally handled only by #countryCarousel above. */

// v0.15.2 — quiet plane animation layer on the HOME map overview only.
const travelAnim=$('#travelAnimations');
const NS='http://www.w3.org/2000/svg';
const planeRoutes=[
  'M 80 170 C 250 80 430 95 610 165 C 755 220 860 185 955 105',
  'M 940 335 C 790 275 665 250 540 285 C 385 330 250 285 80 225',
  'M 110 390 C 260 330 390 230 520 175 C 665 115 800 125 925 190',
  'M 900 115 C 760 160 650 215 525 230 C 365 250 245 190 95 105'
];
function svgEl(tag,attrs={}){const e=document.createElementNS(NS,tag);Object.entries(attrs).forEach(([k,v])=>e.setAttribute(k,v));return e}
function runTravelVehicle(){
  if(!travelAnim||document.hidden)return scheduleTravel(4000);
  const d=planeRoutes[Math.floor(Math.random()*planeRoutes.length)];
  const g=svgEl('g',{'class':'travel-vehicle plane'});
  const ghost=svgEl('path',{d,fill:'none',stroke:'transparent'});
  const trail=svgEl('g',{'class':'gradient-contrail'});
  const segs=[];
  for(let i=0;i<8;i++){const s=svgEl('line',{'class':'contrail-segment'});trail.appendChild(s);segs.push(s)}
  const icon=svgEl('text',{'class':'travel-icon plane-icon','text-anchor':'middle','dominant-baseline':'central'});icon.textContent='✈';
  g.append(ghost,trail,icon);travelAnim.appendChild(g);
  const len=ghost.getTotalLength(),duration=22000+Math.random()*9000,start=performance.now();
  function frame(now){
    if(!g.isConnected)return;
    const t=Math.min(1,(now-start)/duration),head=len*t,pt=ghost.getPointAtLength(head),pt2=ghost.getPointAtLength(Math.min(len,head+2));
    icon.setAttribute('transform',`translate(${pt.x} ${pt.y}) rotate(${Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI})`);
    const tailLen=Math.min(88,head),step=tailLen/segs.length;
    segs.forEach((s,i)=>{const a=Math.max(0,head-step*(i+1)),b=Math.max(0,head-step*i),p1=ghost.getPointAtLength(a),p2=ghost.getPointAtLength(b);s.setAttribute('x1',p1.x);s.setAttribute('y1',p1.y);s.setAttribute('x2',p2.x);s.setAttribute('y2',p2.y);s.style.opacity=String(.08+.72*((segs.length-i)/segs.length)**2)});
    if(t<1)requestAnimationFrame(frame);else{g.animate([{opacity:1},{opacity:0}],{duration:900,fill:'forwards'}).onfinish=()=>g.remove();scheduleTravel(5000+Math.random()*10000)}
  }
  requestAnimationFrame(frame);
}
function scheduleTravel(delay){setTimeout(()=>{const active=travelAnim?.querySelectorAll('.travel-vehicle.plane').length||0;if(active>=3)return scheduleTravel(4500);runTravelVehicle()},delay)}
// Three independent, slow plane streams; never more than three planes at once.
scheduleTravel(1800);scheduleTravel(7000);scheduleTravel(12500);


function refreshVisitedFilterUI(){const prefs=state.visitedListPrefs||{sort:'default',year:'all'},btn=$('#visitedFilterBtn');if(btn)btn.classList.toggle('is-active',prefs.sort!=='default'||prefs.year!=='all'||prefs.rating!=='all')}
const visitedSortOptions=[
 ['default','Current order'],['az','Alphabetical A–Z'],['za','Alphabetical Z–A'],
 ['added-new','Date added — newest first'],['added-old','Date added — oldest first'],
 ['trip-new','Trip date — newest first'],['trip-old','Trip date — oldest first'],
 ['people-high','People travelled with — highest to lowest'],['people-low','People travelled with — lowest to highest'],['rating-high','Rating — highest to lowest'],['rating-low','Rating — lowest to highest']
];
function closePickerMenus(except=''){['visitedSortMenu','visitedYearMenu','visitedRatingMenu'].forEach(id=>{if(id===except)return;const m=$('#'+id),t=$('#'+id.replace('Menu','Trigger'));if(m)m.hidden=true;if(t)t.setAttribute('aria-expanded','false')})}
function renderPicker(menuId,triggerId,inputId,options,value){const menu=$('#'+menuId),trigger=$('#'+triggerId),input=$('#'+inputId);if(!menu||!trigger||!input)return;menu.innerHTML=options.map(([v,label])=>`<button type="button" class="filter-picker-option ${v===value?'selected':''}" data-value="${esc(v)}"><span>${esc(label)}</span><i>${v===value?'✓':''}</i></button>`).join('');input.value=value;trigger.querySelector('span').textContent=(options.find(x=>x[0]===value)||options[0])[1];menu.querySelectorAll('.filter-picker-option').forEach(b=>b.onclick=()=>{input.value=b.dataset.value;trigger.querySelector('span').textContent=b.querySelector('span').textContent;renderPicker(menuId,triggerId,inputId,options,b.dataset.value);menu.hidden=true;trigger.setAttribute('aria-expanded','false')});trigger.onclick=()=>{const opening=menu.hidden;closePickerMenus(opening?menuId:'');menu.hidden=!opening;trigger.setAttribute('aria-expanded',String(opening))}}
function openVisitedFilters(){const dlg=$('#visitedFilterDialog');if(!dlg)return;const years=[...new Set(allStatusCountries().filter(c=>countryHasStatus(c,'visited')).flatMap(c=>countryVisitMonths(c).map(m=>m.slice(0,4))))].filter(Boolean).sort((a,b)=>b.localeCompare(a));const yearOptions=[['all','All years'],...years.map(y=>[y,y])];const sortValue=visitedSortOptions.some(x=>x[0]===state.visitedListPrefs?.sort)?state.visitedListPrefs.sort:'default';const yearValue=years.includes(state.visitedListPrefs?.year)?state.visitedListPrefs.year:'all';const ratingOptions=[['all','All ratings'],['5','5 stars'],['4','4 stars & up'],['3','3 stars & up'],['2','2 stars & up'],['1','1 star & up']];const ratingValue=ratingOptions.some(x=>x[0]===state.visitedListPrefs?.rating)?state.visitedListPrefs.rating:'all';renderPicker('visitedSortMenu','visitedSortTrigger','visitedSort',visitedSortOptions,sortValue);renderPicker('visitedYearMenu','visitedYearTrigger','visitedYear',yearOptions,yearValue);renderPicker('visitedRatingMenu','visitedRatingTrigger','visitedRating',ratingOptions,ratingValue);closePickerMenus();dlg.showModal()}
$('#visitedFilterBtn')?.addEventListener('click',openVisitedFilters);
$('#closeVisitedFilters')?.addEventListener('click',()=>$('#visitedFilterDialog')?.close());
$('#visitedFilterDialog')?.addEventListener('click',e=>{if(e.target===$('#visitedFilterDialog'))$('#visitedFilterDialog').close()});
$('#visitedFilterDialog')?.addEventListener('submit',e=>{e.preventDefault();state.visitedListPrefs={sort:$('#visitedSort').value,year:$('#visitedYear').value,rating:$('#visitedRating').value};localStorage.setItem('wozzaworld-state',JSON.stringify(state));$('#visitedFilterDialog').close();render();refreshVisitedFilterUI()});
$('#resetVisitedFilters')?.addEventListener('click',()=>{state.visitedListPrefs={sort:'default',year:'all',rating:'all'};localStorage.setItem('wozzaworld-state',JSON.stringify(state));$('#visitedFilterDialog').close();render();refreshVisitedFilterUI()});


function savePassportName(){const input=$('#passportName');if(!input)return;const value=input.value.trim().replace(/\s+/g,' ').slice(0,24);if(value)localStorage.setItem('wozzaworld-first-name',value);else localStorage.removeItem('wozzaworld-first-name');applyWorldViewName();requestAnimationFrame(applyWorldViewName);input.value=value;toast(value?'Name updated ✓':'Name cleared')}
$('#savePassportName')?.addEventListener('click',savePassportName);$('#passportName')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();savePassportName()}});$('#openRecycleBin')?.addEventListener('click',()=>{renderRecycleBin();$('#recycleDialog')?.showModal()});$('#closeRecycleDialog')?.addEventListener('click',()=>$('#recycleDialog')?.close());
function openPassportStat(type){const dlg=$('#passportStatDialog'),title=$('#passportStatTitle'),list=$('#passportStatList');if(!dlg||!title||!list)return;let rows=[];if(type==='countries'){title.textContent='Countries visited';rows=countryRows('visited').map(c=>`<div class="passport-stat-row" data-stat-country="${esc(c)}" role="button" tabindex="0">${flagMarkup(c)}<span><strong>${esc(c)}</strong>${countryVisitMonth(c)?`<small>${esc(countryVisitMonth(c))}</small>`:''}</span></div>`)}else if(type==='continents'){title.textContent='Continents travelled';const continentMap={Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova'],Africa:['Niger','Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria'],Asia:['China','Japan','Thailand','India','Vietnam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey'],'North America':['United States of America','United States','Canada','Mexico','Cuba','Jamaica'],'South America':['Brazil','Argentina','Chile','Peru','Colombia'],Oceania:['Australia','New Zealand','Fiji'],Antarctica:['Antarctica']},visited=countryRows('visited');rows=Object.entries(continentMap).map(([name,names])=>[name,visited.filter(c=>names.some(x=>sameCountry(x,c)))]).filter(([,countries])=>countries.length).map(([name,countries])=>`<div class="passport-stat-row"><span class="stat-plane">✈</span><span><strong>${esc(name)}</strong><small>${countries.length} ${countries.length===1?'country':'countries'}</small></span></div>`)}else if(type==='cities'){title.textContent='Destinations visited';rows=countryRows('visited').flatMap(c=>countryCityDisplay(c).map(x=>`<div class="passport-stat-row" data-stat-stop-country="${esc(c)}" data-stat-stop-name="${esc(x.name)}" role="button" tabindex="0">${flagMarkup(c)}<span><strong>${esc(x.name)}</strong><small>${esc(c)}</small></span></div>`))}else if(type==='upcoming'){title.textContent='Upcoming trips';const trips=state.trips.filter(t=>tripIsOnHorizon(t)||(t.start&&countdownDays(t.start)>=0)).sort((a,b)=>{if(a.start&&b.start)return a.start.localeCompare(b.start);if(a.start)return -1;if(b.start)return 1;return String(a.name||'').localeCompare(String(b.name||''))});rows=trips.map(t=>`<div class="passport-stat-row" data-stat-trip="${esc(t.id||'')}" role="button" tabindex="0"><span class="stat-plane">✈</span><span><strong>${esc(t.name)}</strong><small>${tripCountries(t).map(esc).join(' · ')} · ${t.start?pretty(t.start):'Dates to be confirmed'}</small></span></div>`)}else{title.textContent='Trips completed';rows=state.trips.filter(t=>!tripIsOnHorizon(t)).slice().sort((a,b)=>(a.start||'9999').localeCompare(b.start||'9999')).map(t=>`<div class="passport-stat-row" data-stat-trip="${esc(t.id||'')}" role="button" tabindex="0"><span class="stat-plane">✈</span><span><strong>${esc(t.name)}</strong><small>${tripCountries(t).map(esc).join(' · ')}${t.start?' · '+pretty(t.start):''}</small></span></div>`)}list.innerHTML=rows.length?rows.join(''):'<p class="muted">Nothing to show yet.</p>';const activate=row=>{if(row.dataset.statCountry){dlg.close();openCountry(row.dataset.statCountry);return}if(row.dataset.statTrip){const t=state.trips.find(x=>String(x.id)===String(row.dataset.statTrip));if(t){dlg.close();openTripEditor(t)}return}if(row.dataset.statStopCountry){const c=row.dataset.statStopCountry,name=row.dataset.statStopName;const wanted=String(name||'').trim().toLowerCase();let trip=null,stop=null;for(const t of state.trips){const found=(t.destinations||[]).find(d=>sameCountry(d.country||tripCountries(t)[0],c)&&String(d.name||'').trim().toLowerCase()===wanted);if(found){trip=t;stop=found;break}}if(!trip){trip=state.trips.find(t=>tripCountries(t).some(x=>sameCountry(x,c))&&Object.entries(t.cities||{}).some(([country,names])=>sameCountry(country,c)&&(names||[]).some(n=>String(n).trim().toLowerCase()===wanted)))}if(trip){dlg.close();openTripEditor(trip);requestAnimationFrame(()=>requestAnimationFrame(()=>{let target=stop?.id?[...document.querySelectorAll('#tripDestinationStops .trip-destination-stop')].find(el=>String(el.dataset.stopId)===String(stop.id)):null;if(!target)target=[...document.querySelectorAll('#tripDestinationStops .trip-destination-stop')].find(el=>String(el.querySelector('.trip-destination-name')?.value||'').trim().toLowerCase()===wanted);if(target){const body=target.querySelector('.trip-stop-body'),toggle=target.querySelector('.stop-collapse-toggle');if(body&&(body.hidden||target.classList.contains('is-collapsed')||toggle?.getAttribute('aria-expanded')==='false'))toggle?.click();target.scrollIntoView({behavior:'smooth',block:'center'});target.classList.add('stat-stop-target');setTimeout(()=>target.classList.remove('stat-stop-target'),1200)}}));}return;}};list.querySelectorAll('[data-stat-country],[data-stat-trip],[data-stat-stop-country]').forEach(row=>{row.onclick=()=>activate(row);row.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();activate(row)}}});if(!dlg.querySelector('.ww-stat-head')){const head=document.createElement('div');head.className='ww-stat-head';title.parentNode.insertBefore(head,title);head.appendChild(title)}const close=$('#closePassportStat');if(close){let footer=dlg.querySelector('.ww-stat-footer');if(!footer){footer=document.createElement('div');footer.className='ww-stat-footer';dlg.appendChild(footer)}footer.appendChild(close);close.textContent='Close';close.setAttribute('aria-label','Close')}dlg.showModal()}
$$('.passport-stat').forEach(b=>b.onclick=()=>openPassportStat(b.dataset.stat));$('#closePassportStat')?.addEventListener('click',()=>$('#passportStatDialog')?.close());$('#passportStatDialog')?.addEventListener('click',e=>{if(e.target===$('#passportStatDialog'))$('#passportStatDialog').close()});

// v0.17.2 — free, local canonical country/city selection (no API dependency).
const LOCAL_CITIES=Array.isArray(window.WOZZAWORLD_CITIES)?window.WOZZAWORLD_CITIES:[];
const cityLookup=new Map(LOCAL_CITIES.map(n=>[String(n).trim().toLocaleLowerCase(),n]));
function canonicalCity(v){return cityLookup.get(String(v||'').trim().toLocaleLowerCase())||''}
function canonicalCountry(v){const raw=String(v||'').trim();if(!raw)return'';const pool=countryCatalog(),exact=pool.find(c=>c.toLocaleLowerCase()===raw.toLocaleLowerCase());if(exact)return exact;const key=countryKey(raw);return pool.find(c=>countryKey(c)===key)||''}
function ensureLocalDataLists(){
  let cityDL=document.getElementById('wwCityChoices');if(!cityDL){cityDL=document.createElement('datalist');cityDL.id='wwCityChoices';cityDL.innerHTML=LOCAL_CITIES.map(c=>`<option value="${esc(c)}"></option>`).join('');document.body.appendChild(cityDL)}
  const ci=$('#cityInput');if(ci){ci.setAttribute('list','wwCityChoices');ci.setAttribute('autocomplete','off');ci.placeholder='Start typing a city…'}
  const tc=$('#tripCountries');if(tc){tc.setAttribute('autocomplete','off');tc.placeholder='Type exact country names, comma separated'}
}
ensureLocalDataLists();

setupCountrySearch();buildMap();render();refreshVisitedFilterUI();

/* WozzaWorld custom calendar v2: top-layer dialog + robust date-input trigger.
   Visual picker only; stored dates remain YYYY-MM-DD. */
(()=>{
  document.getElementById('wozza-calendar-style')?.remove();
  const st=document.createElement('style');st.id='wozza-calendar-style';st.textContent=`
  #wozzaCalendarOverlay{width:min(390px,calc(100vw - 28px));max-width:none;padding:0;border:0;border-radius:24px;background:transparent;box-shadow:none;overflow:visible;color:#073f52}
  #wozzaCalendarOverlay::backdrop{background:rgba(7,63,82,.24);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}
  .wozza-calendar{width:100%;background:#f4fbfc;border-radius:24px;box-shadow:0 22px 60px rgba(7,63,82,.28);overflow:hidden;color:#073f52;font-family:inherit}
  .wozza-calendar-head{background:#087b8c;color:white;padding:13px 14px}.wozza-calendar-trip-name{display:none;text-align:center;color:white;font-weight:900;font-size:13px;letter-spacing:.4px;text-transform:uppercase;padding:3px 8px 1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wozza-calendar.range-mode .wozza-calendar-trip-name{display:block}.wozza-calendar-nav{display:grid;grid-template-columns:44px 1fr 44px;align-items:center}.wozza-calendar-nav button{border:0;background:transparent;color:white;font-size:28px;line-height:40px;border-radius:50%;cursor:pointer}.wozza-calendar-nav button:active{background:rgba(255,255,255,.14)}.wozza-calendar-month{border:0!important;background:transparent!important;color:white!important;text-align:center;font:inherit!important;font-size:18px!important;font-weight:800!important;cursor:pointer;padding:8px;border-radius:10px}.wozza-calendar-month:active{background:rgba(255,255,255,.14)!important}
  .wozza-calendar-week,.wozza-calendar-grid{display:grid;grid-template-columns:repeat(7,1fr);padding:0 14px}.wozza-calendar-week span{text-align:center;font-size:11px;font-weight:800;color:#6f7e82;padding:8px 0}.wozza-calendar-grid{row-gap:4px}.wozza-calendar-day{width:42px;height:42px;aspect-ratio:1/1;justify-self:center;padding:0;border:0;background:transparent;border-radius:50%;font:inherit;font-weight:700;color:#073f52;cursor:pointer}.wozza-calendar-day.today{box-shadow:inset 0 0 0 2px #087b8c}.wozza-calendar-day.selected{background:#e9bd25;color:#17213D;box-shadow:none}.wozza-calendar-day:active{transform:scale(.94)}
  .wozza-calendar-picker{display:none;padding:12px 18px 18px}.wozza-calendar-years{max-height:180px;overflow:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;scrollbar-width:none}.wozza-calendar-years::-webkit-scrollbar{display:none}.wozza-calendar-months{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:14px;padding-top:14px;border-top:1px solid #dcebed}.wozza-calendar.year-mode .wozza-calendar-week,.wozza-calendar.year-mode .wozza-calendar-grid{display:none}.wozza-calendar.year-mode .wozza-calendar-picker{display:block}.wozza-calendar-year,.wozza-calendar-month-choice{border:0;background:transparent;color:#073f52;border-radius:12px;padding:10px 6px;font:inherit;font-weight:750;cursor:pointer}.wozza-calendar-year.current{box-shadow:inset 0 0 0 2px #087b8c}.wozza-calendar-year.viewing,.wozza-calendar-month-choice.viewing{background:#e9bd25;color:#17213D;box-shadow:none}.wozza-calendar-month-choice:active,.wozza-calendar-year:active{background:#dcebed}
  .wozza-calendar-actions{display:flex;gap:10px;justify-content:flex-end;padding:15px 18px 19px}.wozza-calendar-actions button{border:0;border-radius:10px;padding:11px 18px;color:white;font:inherit;font-weight:800;cursor:pointer}.wozza-calendar-cancel{background:#d9534f}.wozza-calendar-ok{background:#25b14b}.wozza-calendar-clear{margin-right:auto!important;background:white!important;color:#073f52!important;box-shadow:inset 0 0 0 1px #dcebed}
  .trip-stop-dates input[type=date][readonly]{cursor:pointer;padding-left:10px!important;box-sizing:border-box}
  .wozza-calendar-day.trip-range{background:rgba(233,189,37,.28);border-radius:10px}.wozza-calendar-day.trip-range-start,.wozza-calendar-day.trip-range-end{background:#e9bd25;color:#17213D;box-shadow:none}.wozza-calendar.range-mode .wozza-calendar-day{cursor:default}.wozza-calendar.range-mode .wozza-calendar-actions{justify-content:flex-end}.trip-editor-date-range>span:first-child{cursor:pointer;text-decoration:none}
  `;document.head.appendChild(st);
})();
let wozzaCalendarTarget=null,wozzaCalendarSelected='',wozzaCalendarView=null,wozzaCalendarMode='edit',wozzaCalendarRangeStart='',wozzaCalendarRangeEnd='';
function wozzaIsoDate(d){const pad=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`}
function wozzaDateFromIso(v){if(!/^\d{4}-\d{2}-\d{2}$/.test(v||''))return null;const [y,m,d]=v.split('-').map(Number),x=new Date(y,m-1,d);return x.getFullYear()===y&&x.getMonth()===m-1&&x.getDate()===d?x:null}
function wozzaCalendarEnsure(){let ov=document.getElementById('wozzaCalendarOverlay');if(ov)return ov;ov=document.createElement('dialog');ov.id='wozzaCalendarOverlay';ov.setAttribute('aria-label','Choose date');ov.innerHTML=`<div class="wozza-calendar"><div class="wozza-calendar-head"><div class="wozza-calendar-trip-name"></div><div class="wozza-calendar-nav"><button type="button" data-cal-prev aria-label="Previous month">‹</button><button type="button" class="wozza-calendar-month" aria-label="Choose month and year"></button><button type="button" data-cal-next aria-label="Next month">›</button></div></div><div class="wozza-calendar-week"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div><div class="wozza-calendar-grid"></div><div class="wozza-calendar-picker" aria-label="Choose month and year"><div class="wozza-calendar-years" aria-label="Choose year"></div><div class="wozza-calendar-months" aria-label="Choose month"></div></div><div class="wozza-calendar-activity-time" hidden><label>Time<input type="time" class="wozza-calendar-time"></label><div class="wozza-calendar-timing-options"><label class="wozza-calendar-flex"><input type="checkbox" class="wozza-calendar-flexible"> Timing flexible</label><label class="wozza-calendar-flex"><input type="checkbox" class="wozza-calendar-tbc"> TBC</label></div></div><div class="wozza-calendar-actions"><button type="button" class="wozza-calendar-clear">Clear</button><button type="button" class="wozza-calendar-cancel">Cancel</button><button type="button" class="wozza-calendar-ok">OK</button></div></div>`;document.body.appendChild(ov);ov.querySelector('.wozza-calendar-month').onclick=()=>wozzaCalendarToggleYears();ov.querySelector('[data-cal-prev]').onclick=()=>{if(ov.querySelector('.wozza-calendar')?.classList.contains('year-mode')){wozzaCalendarView=new Date(wozzaCalendarView.getFullYear()-1,wozzaCalendarView.getMonth(),1)}else{wozzaCalendarView=new Date(wozzaCalendarView.getFullYear(),wozzaCalendarView.getMonth()-1,1)}wozzaCalendarRender()};ov.querySelector('[data-cal-next]').onclick=()=>{if(ov.querySelector('.wozza-calendar')?.classList.contains('year-mode')){wozzaCalendarView=new Date(wozzaCalendarView.getFullYear()+1,wozzaCalendarView.getMonth(),1)}else{wozzaCalendarView=new Date(wozzaCalendarView.getFullYear(),wozzaCalendarView.getMonth()+1,1)}wozzaCalendarRender()};ov.querySelector('.wozza-calendar-cancel').onclick=wozzaCalendarClose;ov.querySelector('.wozza-calendar-clear').onclick=()=>{wozzaCalendarSelected='';wozzaCalendarCommit()};ov.querySelector('.wozza-calendar-ok').onclick=wozzaCalendarCommit;ov.addEventListener('cancel',e=>{e.preventDefault();wozzaCalendarClose()});ov.addEventListener('click',e=>{if(e.target===ov)wozzaCalendarClose()});return ov}
function wozzaCalendarToggleYears(){const ov=wozzaCalendarEnsure(),cal=ov.querySelector('.wozza-calendar');cal.classList.toggle('year-mode');wozzaCalendarRender();if(cal.classList.contains('year-mode'))requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-year.viewing')?.scrollIntoView({block:'center'}))}
function wozzaCalendarRenderYears(ov,view){const years=ov.querySelector('.wozza-calendar-years'),months=ov.querySelector('.wozza-calendar-months');if(!years||!months)return;const thisYear=new Date().getFullYear();let html='';for(let y=1900;y<=2125;y++)html+=`<button type="button" class="wozza-calendar-year${y===thisYear?' current':''}${y===view.getFullYear()?' viewing':''}" data-cal-year="${y}">${y}</button>`;years.innerHTML=html;years.querySelectorAll('[data-cal-year]').forEach(b=>b.onclick=()=>{wozzaCalendarView=new Date(Number(b.dataset.calYear),wozzaCalendarView.getMonth(),1);wozzaCalendarRender();requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-year.viewing')?.scrollIntoView({block:'center'}))});const names=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];months.innerHTML=names.map((name,m)=>`<button type="button" class="wozza-calendar-month-choice${m===view.getMonth()?' viewing':''}" data-cal-month="${m}">${name}</button>`).join('');months.querySelectorAll('[data-cal-month]').forEach(b=>b.onclick=()=>{wozzaCalendarView=new Date(wozzaCalendarView.getFullYear(),Number(b.dataset.calMonth),1);ov.querySelector('.wozza-calendar').classList.remove('year-mode');wozzaCalendarRender()})}
function wozzaCalendarRender(){const ov=wozzaCalendarEnsure(),view=wozzaCalendarView||new Date(),today=new Date(),rangeMode=wozzaCalendarMode==='range',showRange=!!(wozzaCalendarRangeStart&&wozzaCalendarRangeEnd);ov.querySelector('.wozza-calendar-month').textContent=view.toLocaleDateString('en-GB',{month:'long',year:'numeric'});ov.querySelector('.wozza-calendar').classList.toggle('range-mode',rangeMode);const activityMode=wozzaCalendarMode==='activity';ov.querySelector('.wozza-calendar').classList.toggle('activity-mode',activityMode);const ap=ov.querySelector('.wozza-calendar-activity-time');if(ap)ap.hidden=!activityMode;const tripName=ov.querySelector('.wozza-calendar-trip-name');if(tripName)tripName.textContent=rangeMode?($('#tripName')?.value?.trim()||'Trip timeline'):'';ov.querySelector('.wozza-calendar-clear').hidden=rangeMode;ov.querySelector('.wozza-calendar-ok').hidden=rangeMode;ov.querySelector('.wozza-calendar-cancel').textContent=rangeMode?'Close':'Cancel';wozzaCalendarRenderYears(ov,view);const first=new Date(view.getFullYear(),view.getMonth(),1),days=new Date(view.getFullYear(),view.getMonth()+1,0).getDate(),offset=(first.getDay()+6)%7,grid=ov.querySelector('.wozza-calendar-grid');let html='';for(let i=0;i<offset;i++)html+='<span></span>';for(let d=1;d<=days;d++){const x=new Date(view.getFullYear(),view.getMonth(),d),iso=wozzaIsoDate(x),isToday=x.getFullYear()===today.getFullYear()&&x.getMonth()===today.getMonth()&&d===today.getDate(),isStart=showRange&&iso===wozzaCalendarRangeStart,isEnd=showRange&&iso===wozzaCalendarRangeEnd,isBetween=showRange&&iso>wozzaCalendarRangeStart&&iso<wozzaCalendarRangeEnd;html+=`<button type="button" class="wozza-calendar-day${!rangeMode&&iso===wozzaCalendarSelected?' selected':''}${isToday?' today':''}${isBetween?' trip-range':''}${isStart?' trip-range-start':''}${isEnd?' trip-range-end':''}" data-cal-date="${iso}">${d}</button>`}grid.innerHTML=html;grid.querySelectorAll('[data-cal-date]').forEach(b=>b.onclick=()=>{if(rangeMode)return;wozzaCalendarSelected=b.dataset.calDate;const row=wozzaCalendarTarget?.closest('.trip-destination-stop');if(row){const editingEnd=wozzaCalendarTarget?.classList.contains('trip-destination-to'),other=(editingEnd?row.querySelector('.trip-destination-from'):row.querySelector('.trip-destination-to'))?.value||'';let a=editingEnd?other:wozzaCalendarSelected,bv=editingEnd?wozzaCalendarSelected:other;if(a&&bv&&bv<a)[a,bv]=[bv,a];wozzaCalendarRangeStart=a;wozzaCalendarRangeEnd=bv}wozzaCalendarRender()})}
function wozzaCalendarOpen(input){if(!input?.isConnected)return;wozzaCalendarMode='edit';wozzaCalendarTarget=input;const row=input.closest('.trip-destination-stop'),isEnd=input.classList.contains('trip-destination-to'),start=row?.querySelector('.trip-destination-from')?.value||'',end=row?.querySelector('.trip-destination-to')?.value||'',existing=input.value||'',seed=existing||(isEnd?start:'')||wozzaIsoDate(new Date()),d=wozzaDateFromIso(seed)||new Date();wozzaCalendarRangeStart=start;wozzaCalendarRangeEnd=end;if(wozzaCalendarRangeStart&&wozzaCalendarRangeEnd&&wozzaCalendarRangeEnd<wozzaCalendarRangeStart)[wozzaCalendarRangeStart,wozzaCalendarRangeEnd]=[wozzaCalendarRangeEnd,wozzaCalendarRangeStart];wozzaCalendarSelected=existing;wozzaCalendarView=new Date(d.getFullYear(),d.getMonth(),1);const ov=wozzaCalendarEnsure();ov.querySelector('.wozza-calendar')?.classList.remove('year-mode');wozzaCalendarRender();if(!ov.open)ov.showModal();requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-cancel')?.focus())}

function wozzaCalendarOpenActivity(input){if(!input?.isConnected)return;wozzaCalendarMode='activity';wozzaCalendarTarget=input;const existing=input.dataset.iso||'',seed=existing||wozzaIsoDate(new Date()),d=wozzaDateFromIso(seed)||new Date();wozzaCalendarRangeStart='';wozzaCalendarRangeEnd='';wozzaCalendarSelected=existing;wozzaCalendarView=new Date(d.getFullYear(),d.getMonth(),1);const ov=wozzaCalendarEnsure();ov.querySelector('.wozza-calendar')?.classList.remove('year-mode');const isEnd=input.id==='itinEndDate',time=document.getElementById(isEnd?'itinEndTime':'itinStartTime')?.value||'';ov.querySelector('.wozza-calendar-time').value=time;ov.querySelector('.wozza-calendar-flexible').checked=!!document.getElementById('itinFlexible')?.checked;ov.querySelector('.wozza-calendar-tbc').checked=!!document.getElementById('itinTbc')?.checked;const syncTiming=()=>{const flex=ov.querySelector('.wozza-calendar-flexible'),tbc=ov.querySelector('.wozza-calendar-tbc'),tm=ov.querySelector('.wozza-calendar-time');if(flex.checked)tbc.checked=false;if(tbc.checked){flex.checked=false;tm.value=''}tm.disabled=false};ov.querySelector('.wozza-calendar-flexible').onchange=e=>{const flex=e.currentTarget,tbc=ov.querySelector('.wozza-calendar-tbc'),tm=ov.querySelector('.wozza-calendar-time');if(flex.checked){tbc.checked=false;tm.value=''}tm.disabled=false};ov.querySelector('.wozza-calendar-tbc').onchange=e=>{const tbc=e.currentTarget,flex=ov.querySelector('.wozza-calendar-flexible'),tm=ov.querySelector('.wozza-calendar-time');if(tbc.checked){flex.checked=false;tm.value=''}tm.disabled=false};ov.querySelector('.wozza-calendar-time').onchange=e=>{if(e.currentTarget.value){ov.querySelector('.wozza-calendar-flexible').checked=false;ov.querySelector('.wozza-calendar-tbc').checked=false}};syncTiming();wozzaCalendarRender();if(!ov.open)ov.showModal();requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-cancel')?.focus())}
function wozzaCalendarOpenTripRange(){const host=$('#tripDestinationStops');if(!host)return;const rows=$$('.trip-destination-stop',host);if(!rows.length)return;const first=rows[0],last=rows[rows.length-1]||first,start=first?.querySelector('.trip-destination-from')?.value||'',end=(rows.length===1?first:last)?.querySelector('.trip-destination-to')?.value||'';if(!start&&!end)return;wozzaCalendarTarget=null;wozzaCalendarMode='range';wozzaCalendarRangeStart=start||end;wozzaCalendarRangeEnd=end||start;if(wozzaCalendarRangeEnd<wozzaCalendarRangeStart)[wozzaCalendarRangeStart,wozzaCalendarRangeEnd]=[wozzaCalendarRangeEnd,wozzaCalendarRangeStart];const d=wozzaDateFromIso(wozzaCalendarRangeStart)||new Date();wozzaCalendarView=new Date(d.getFullYear(),d.getMonth(),1);const ov=wozzaCalendarEnsure();ov.querySelector('.wozza-calendar')?.classList.remove('year-mode');wozzaCalendarRender();if(!ov.open)ov.showModal();requestAnimationFrame(()=>ov.querySelector('.wozza-calendar-cancel')?.focus())}
document.addEventListener('click',e=>{const date=e.target.closest?.('.trip-editor-date-range > span:first-child');if(!date)return;e.preventDefault();e.stopPropagation();wozzaCalendarOpenTripRange()},true);
function wozzaCalendarClose(){const ov=document.getElementById('wozzaCalendarOverlay');if(ov?.open)ov.close();wozzaCalendarTarget=null}
function wozzaCalendarCommit(){if(!wozzaCalendarTarget)return wozzaCalendarClose();if(wozzaCalendarMode==='activity'){const input=wozzaCalendarTarget,ov=wozzaCalendarEnsure(),isEnd=input.id==='itinEndDate';input.dataset.iso=wozzaCalendarSelected;input.value=wozzaCalendarSelected?pretty(wozzaCalendarSelected):'';const time=document.getElementById(isEnd?'itinEndTime':'itinStartTime');if(time)time.value=ov.querySelector('.wozza-calendar-time')?.value||'';const flex=document.getElementById('itinFlexible');if(flex)flex.checked=!!ov.querySelector('.wozza-calendar-flexible')?.checked;const tbc=document.getElementById('itinTbc');if(tbc)tbc.checked=!!ov.querySelector('.wozza-calendar-tbc')?.checked;input.dispatchEvent(new Event('change',{bubbles:true}));return wozzaCalendarClose()}wozzaCalendarTarget.value=wozzaCalendarSelected;wozzaCalendarTarget.dispatchEvent(new Event('input',{bubbles:true}));wozzaCalendarTarget.dispatchEvent(new Event('change',{bubbles:true}));updateStopSummary(wozzaCalendarTarget.closest('.trip-destination-stop'));refreshTripEditorSummaryLine();wozzaCalendarClose()}
function bindWozzaDateInputs(root=document){root.querySelectorAll?.('.trip-destination-from,.trip-destination-to').forEach(input=>{input.readOnly=true;input.dataset.wozzaCalendarBound='1'})}
/* Capture the press before Android can invoke its native picker. Delegation also covers newly-added stops. */
document.addEventListener('click',e=>{const input=e.target.closest?.('.trip-destination-from,.trip-destination-to');if(!input)return;e.preventDefault();e.stopPropagation();input.readOnly=true;if(!document.getElementById('wozzaCalendarOverlay')?.open)wozzaCalendarOpen(input)},true);
document.addEventListener('keydown',e=>{const input=e.target.closest?.('.trip-destination-from,.trip-destination-to');if(!input||(e.key!=='Enter'&&e.key!==' '))return;e.preventDefault();wozzaCalendarOpen(input)},true);

if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js?v=0.17.2',{updateViaCache:'none'}));const hide=()=>$('#launchSplash')?.classList.add('hide');window.addEventListener('load',()=>setTimeout(hide,2850),{once:true});setTimeout(hide,3350);


// v0.14.9 — web-only install button, matching WozzaWatch behaviour.
let deferredInstallPrompt = null;
const installBtn = document.getElementById('installBtn');
const installHelp = document.getElementById('installHelp');
const installHelpClose = document.getElementById('installHelpClose');
const isStandaloneApp = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
const syncInstallButton = () => {
  if (!installBtn) return;
  installBtn.classList.toggle('hidden', isStandaloneApp());
};
syncInstallButton();
window.matchMedia('(display-mode: standalone)').addEventListener?.('change', syncInstallButton);
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  syncInstallButton();
});
installBtn?.addEventListener('click', async () => {
  if (isStandaloneApp()) { syncInstallButton(); return; }
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    try { await deferredInstallPrompt.userChoice; } catch (e) {}
    deferredInstallPrompt = null;
    return;
  }
  installHelp?.classList.add('show');
});
installHelpClose?.addEventListener('click', () => installHelp?.classList.remove('show'));
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  installBtn?.classList.add('hidden');
  installHelp?.classList.remove('show');
});

// v0.15.9 — dynamic passport-stamp World View name (installed app only) and responsive map title.
const isInstalledWozzaWorld=()=>window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true;
function worldViewFirstName(){return (localStorage.getItem('wozzaworld-first-name')||'').trim()}
function fitWorldViewStampName(){
  const sig=document.getElementById('worldViewSignature'),x=sig?.querySelector('.stamp-name'),main=sig?.querySelector('.stamp-main'),plane=sig?.querySelector('.stamp-plane');
  if(!sig||!x||!main||!x.textContent)return;
  const full=(x.dataset.fullName||x.textContent).replace(/\s+/g,' ').trim();
  x.dataset.fullName=full;x.textContent=full;
  x.style.removeProperty('font-size');x.style.removeProperty('letter-spacing');x.style.removeProperty('white-space');x.style.removeProperty('line-height');x.style.removeProperty('transform');x.style.removeProperty('max-width');
  sig.classList.remove('stamp-name-wrapped','stamp-name-three-line');
  // Ordinary names keep the original clean one-line stamp. Only genuinely long names use fitting/wrapping.
  if(full.length<=12){
    x.style.setProperty('white-space','nowrap','important');
    return;
  }
  requestAnimationFrame(()=>{
    const mainBox=main.getBoundingClientRect(),planeBox=plane?.getBoundingClientRect();
    // Reserve the plane as a hard no-text zone. Long names may use three lines,
    // but never grow or move the stamp itself.
    const safety=18;
    const available=Math.max(34,(planeBox?planeBox.left-mainBox.left:main.clientWidth)-safety);
    let base=parseFloat(getComputedStyle(x).fontSize)||18,size=base,min=Math.max(9,base*.54);
    x.style.setProperty('max-width',available+'px','important');
    while(x.scrollWidth>available&&size>min){size=Math.max(min,size-.4);x.style.setProperty('font-size',size+'px','important');x.style.setProperty('letter-spacing','0','important')}
    if(x.scrollWidth<=available)return;

    const possessive=full.endsWith("'S")?"'S":'',bare=possessive?full.slice(0,-2):full;
    const chunks=[];
    if(bare.includes('-')){
      const parts=bare.split('-').filter(Boolean);
      parts.forEach((part,i)=>chunks.push(part+(i<parts.length-1?'-':'')));
    }else{
      // For an unusually long unhyphenated first name, split into visually balanced chunks.
      const target=Math.ceil(bare.length/3);
      for(let i=0;i<bare.length;i+=target)chunks.push(bare.slice(i,i+target));
    }
    if(chunks.length<2){const cut=Math.ceil(bare.length/2);chunks.splice(0,chunks.length,bare.slice(0,cut),bare.slice(cut))}
    // Keep a maximum of three name lines. If there are more chunks, merge the tail.
    while(chunks.length>3)chunks[chunks.length-2]+=chunks.pop();
    chunks[chunks.length-1]+=possessive;
    x.innerHTML=chunks.map(v=>`<span>${esc(v)}</span>`).join('');
    sig.classList.add('stamp-name-wrapped');
    if(chunks.length===3)sig.classList.add('stamp-name-three-line');
    x.style.setProperty('white-space','normal','important');
    x.style.setProperty('letter-spacing','0','important');
    x.style.setProperty('line-height','.88','important');
    // Three lines deliberately use the spare vertical area above WORLD VIEW.
    x.style.setProperty('transform',chunks.length===3?'translateY(-17px)':'translateY(-10px)','important');
    x.style.setProperty('max-width',available+'px','important');
    const lines=[...x.querySelectorAll('span')];
    lines.forEach(line=>{line.style.display='block';line.style.whiteSpace='nowrap';line.style.maxWidth=available+'px'});
    size=Math.max(9,base*(chunks.length===3?.60:.66));
    x.style.setProperty('font-size',size+'px','important');
    const widest=()=>Math.max(...lines.map(line=>line.scrollWidth));
    while(widest()>available&&size>8.5){size=Math.max(8.5,size-.3);x.style.setProperty('font-size',size+'px','important')}
  });
}
function fitHomeWorldOverviewTitle(){
  const title=document.getElementById('homeWorldOverviewTitle');
  if(!title)return;
  requestAnimationFrame(()=>{
    const cs=getComputedStyle(title);
    const pad=(parseFloat(cs.paddingLeft)||0)+(parseFloat(cs.paddingRight)||0);
    const available=Math.max(120,title.clientWidth-pad-2);
    // Fit the complete label to the card width: short names grow, long names shrink.
    // Keep a tiny lower bound only as a safety net; never clip the text at a preset minimum.
    const min=6,max=34;

    // Measure the full, unclipped label independently from the fixed-width title box.
    const probe=document.createElement('span');
    probe.textContent=title.textContent;
    probe.style.cssText='position:absolute;visibility:hidden;pointer-events:none;white-space:nowrap;width:max-content;left:-99999px;top:-99999px;';
    probe.style.fontFamily=cs.fontFamily;
    probe.style.fontWeight=cs.fontWeight;
    probe.style.fontStyle=cs.fontStyle;
    probe.style.letterSpacing=cs.letterSpacing;
    probe.style.textTransform=cs.textTransform;
    document.body.appendChild(probe);

    let lo=min,hi=max,best=min;
    for(let i=0;i<14;i++){
      const mid=(lo+hi)/2;
      probe.style.fontSize=mid+'px';
      if(probe.getBoundingClientRect().width<=available){best=mid;lo=mid}else hi=mid;
    }
    probe.remove();
    title.style.setProperty('font-size',best.toFixed(2)+'px','important');
  });
}
function ensureHomeWorldOverviewTitle(){
  const card=document.querySelector('.screen[data-screen="home"] > .map-card');
  if(!card)return null;
  let title=card.querySelector('#homeWorldOverviewTitle');
  if(!title){
    title=document.createElement('div');
    title.id='homeWorldOverviewTitle';
    title.className='home-world-overview-title';
    card.prepend(title);
  }
  return title;
}
function applyWorldViewName(){
  const n=worldViewFirstName();
  // Keep the original stamp component and all of its fitting code intact for future reuse,
  // but retire it from the Home overview.
  const sig=document.getElementById('worldViewSignature');
  if(sig){
    const x=sig.querySelector('.stamp-name');
    if(x){const label=n?n.toUpperCase()+"'S":'';x.textContent=label;x.dataset.fullName=label;x.removeAttribute('title');sig.dataset.nameLength=String(label.length);fitWorldViewStampName()}
  }
  const title=ensureHomeWorldOverviewTitle();
  if(title){
    const displayName=(n||'YOUR').toUpperCase();
    title.textContent=displayName+"'S WORLD OVERVIEW";
    fitHomeWorldOverviewTitle();
  }
}
function requestWorldViewName(){
  if(!isInstalledWozzaWorld()||worldViewFirstName())return applyWorldViewName();
  setTimeout(()=>{const value=window.prompt('Welcome to WozzaWorld! What’s your first name?');if(value?.trim()){localStorage.setItem('wozzaworld-first-name',value.trim().split(/\s+/)[0].slice(0,24))}applyWorldViewName()},1950);
}
window.addEventListener('load',requestWorldViewName,{once:true});
window.matchMedia('(display-mode: standalone)').addEventListener?.('change',applyWorldViewName);
window.addEventListener('orientationchange',()=>setTimeout(()=>{applyWorldViewName();if(document.body.classList.contains('map-view')&&mapZoomBehavior){const portrait=window.matchMedia('(orientation: portrait)').matches;mapZoomBehavior.scaleExtent([portrait?1.15:1,56]);if(portrait){const svg=d3.select('#worldMap'),k=1.52,t=d3.zoomIdentity.translate((1000-1000*k)/2,(520-520*k)/2).scale(k);svg.call(mapZoomBehavior.transform,t)}else{const svg=d3.select('#worldMap');svg.call(mapZoomBehavior.transform,d3.zoomIdentity)}}window.dispatchEvent(new Event('resize'))},180));
applyWorldViewName();

(function(){if(document.getElementById('wozza-hotfix-048-style'))return;const st=document.createElement('style');st.id='wozza-hotfix-048-style';st.textContent=`
.trip-card-copy{min-width:0!important}.trip-card-title-row{display:block!important;width:calc(100% + 118px)!important;max-width:calc(100% + 118px)!important;min-width:0!important;overflow:hidden!important;white-space:nowrap!important;text-overflow:clip!important;padding-right:8px!important;box-sizing:border-box!important}.trip-card-title-row strong,.trip-card-title-row strong.trip-title-long,.trip-card-title-row strong.trip-title-xlong{display:inline-block!important;width:max-content!important;min-width:max-content!important;max-width:none!important;overflow:visible!important;text-overflow:clip!important;white-space:nowrap!important;will-change:transform}
.trip-editor-date-range{display:flex!important;align-items:center;gap:12px;flex-wrap:wrap}.trip-editor-transport-icons{display:inline-flex;align-items:center;gap:7px}.trip-editor-transport-icons .travel-mode-icon,.single-stop-summary-mode .travel-mode-icon{width:24px;height:24px;object-fit:contain;display:block}.trip-editor-vibe-icons,.trip-vibe-icons{display:inline-flex;align-items:center;gap:7px}.trip-editor-vibe-icons .vibe-icon,.trip-vibe-icons .vibe-icon{width:24px;height:24px;object-fit:contain;display:block}.trip-card-meta-row .trip-vibe-icons{margin-left:0}
.trip-stop-collapsed-meta{display:none!important}.trip-destination-stop.single-stop.collapsed .trip-stop-card-head{flex-wrap:nowrap}.single-stop-summary-mode{display:inline-flex}
`;document.head.appendChild(st)})();

$('#closeMilestoneDialog')?.addEventListener('click',()=>$('#milestoneDialog')?.close());

/* Passport Travel Insights drill-through */
function wozzaTripTime(t){const d=orderedTripDates(t);return Date.parse((d.end||d.start||'1900-01-01')+'T00:00:00')||0}
function wozzaOpenTripCard(t,stopName=''){
  if(!t)return;
  openTripEditor(t);
  if(!stopName)return;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const wanted=String(stopName).trim().toLowerCase();
    const stops=legacyDestinations(t),idx=stops.findIndex(d=>String(d.name||'').trim().toLowerCase()===wanted);
    if(idx<0)return;
    const rows=[...document.querySelectorAll('#tripDestinationStops .trip-destination-stop')],row=rows[idx];
    if(!row)return;
    toggleStopCollapsed(row,false);
    row.scrollIntoView({behavior:'smooth',block:'center'});
  }));
}
document.addEventListener('click',e=>{
  const row=e.target.closest('.passport-mini-row');
  if(!row)return;
  const list=row.parentElement,label=row.querySelector('span')?.textContent?.trim();
  if(!label)return;
  if(list?.id==='countryStats'){
    openCountry(label,{type:'passport-stats'});return;
  }
  if(list?.id==='cityStats'){
    const matches=(state.trips||[]).filter(t=>legacyDestinations(t).some(d=>String(d.name||'').trim().toLowerCase()===label.toLowerCase())).sort((a,b)=>wozzaTripTime(b)-wozzaTripTime(a));
    wozzaOpenTripCard(matches[0],label);return;
  }
  if(list?.id==='highestRatedStats'){
    const trip=(state.trips||[]).find(t=>String(t.name||'').trim()===label);
    wozzaOpenTripCard(trip);
  }
});

/* ADD STOP flick/throw experiment disabled.
   Standard ADD STOP click behaviour is retained. */



/* v0.18.65: reuse the actual Passport cloud layer in full World View. */
function ensureWorldViewClouds(){
  const mapView=document.querySelector('.full-map-view, #fullMap, .map-fullscreen, .world-view');
  if(!mapView) return;
  if(mapView.querySelector(':scope > .worldview-cloud-clone')) return;
  const source=document.querySelector('.passport-page .sky-clouds, .passport-view .sky-clouds, .sky-clouds');
  if(!source) return;
  const clouds=source.cloneNode(true);
  clouds.classList.add('worldview-cloud-clone');
  clouds.removeAttribute('hidden');
  clouds.setAttribute('aria-hidden','true');
  mapView.prepend(clouds);
}


document.addEventListener('click',e=>{
  if(e.target.closest('[data-open-map],#openFullMap,.open-full-map,.map-preview')){
    requestAnimationFrame(()=>requestAnimationFrame(ensureWorldViewClouds));
  }
});
window.addEventListener('hashchange',()=>requestAnimationFrame(ensureWorldViewClouds));


// v0.18.87 — consistent trip section rhythm + long-name stamp safe area polish.
(function(){if(document.getElementById('wozza-hotfix-087-style'))return;const st=document.createElement('style');st.id='wozza-hotfix-087-style';st.textContent=`
#tripForm .trip-companions-section,#tripForm .trip-todo-section,#tripForm .trip-notes-section{margin-top:28px!important;margin-bottom:0!important;padding:0!important}
#tripForm .trip-companions-head,#tripForm .trip-todo-head,#tripForm .trip-notes-head{position:relative!important;display:grid!important;grid-template-columns:minmax(0,1fr) 54px!important;column-gap:14px!important;align-items:start!important;min-height:54px!important;padding:0!important;margin:0!important}
#tripForm .trip-companions-head>.trip-section-title,#tripForm .trip-todo-head>div,#tripForm .trip-notes-head>div{min-width:0!important;padding-top:7px!important}
#tripForm .trip-companions-head>.trip-selected-summary{grid-column:1!important;margin-top:6px!important;padding:0!important}
#tripForm .trip-section-title{margin:0!important;padding:0!important;line-height:1.08!important}
#tripForm .trip-todo-summary,#tripForm .trip-notes-summary{margin-top:8px!important;margin-bottom:0!important}
/* Empty collapsed sections have no preview row, so centre the title against the 54px + control.
   Preview-bearing sections retain the existing title + preview geometry. */
#tripForm .trip-companions-section.collapsed .trip-companions-head:has(.trip-selected-summary:empty)>.trip-section-title,
#tripForm .trip-todo-section.collapsed .trip-todo-head:has(.trip-todo-summary:empty) .trip-section-title,
#tripForm .trip-notes-section.collapsed .trip-notes-head:has(.trip-notes-summary:empty) .trip-section-title{
  padding-top:0!important;
  align-self:center!important;
  transform:translateY(11px)!important
}
#tripForm .trip-companions-section.collapsed .trip-companions-head:has(.trip-selected-summary:not(:empty))>.trip-section-title,
#tripForm .trip-todo-section.collapsed .trip-todo-head:has(.trip-todo-summary:not(:empty)) .trip-section-title,
#tripForm .trip-notes-section.collapsed .trip-notes-head:has(.trip-notes-summary:not(:empty)) .trip-section-title{
  transform:none!important
}
#tripForm .section-collapse-toggle{grid-column:2!important;grid-row:1!important;justify-self:end!important;align-self:start!important;margin:0!important;position:static!important;transform:none!important;width:54px!important;height:54px!important}
.world-view-signature .stamp-main{overflow:visible!important}
.world-view-signature .stamp-name{box-sizing:border-box!important;overflow:visible!important}
.world-view-signature.stamp-name-three-line .stamp-name span{line-height:.88!important}
`;document.head.appendChild(st)})();


// v0.18.89 — preserve World View behind country sheet + compact landscape country card.
(()=>{
  const style=document.createElement('style');
  style.id='v01889-country-context-landscape';
  style.textContent=`
    body.map-view #sheetBackdrop.open{z-index:140!important}
    body.map-view #countrySheet.open{z-index:141!important}
    body.map-view #countrySheet.open~* .map-close{pointer-events:none}
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet.sheet{width:min(900px,74vw)!important;max-height:90dvh!important;padding:5px 12px calc(9px + env(safe-area-inset-bottom))!important;border-radius:20px 20px 0 0!important}
      #countrySheet .grabber{margin-bottom:3px!important;height:3px!important}
      #countrySheet .sheet-close{width:28px!important;height:28px!important;top:6px!important;right:10px!important;font-size:18px!important}
      #countrySheet .country-hero-minimal{grid-template-columns:58px minmax(0,1fr)!important;gap:10px!important;padding:8px 12px!important;margin:2px 0 6px!important;border-radius:17px!important;min-height:0!important}
      #countrySheet .country-hero-minimal .flag img{width:58px!important;height:39px!important;border-radius:8px!important}
      #countrySheet .country-hero-copy h2{font-size:clamp(22px,3.4vw,30px)!important;line-height:1!important;margin:0 36px 4px 0!important}
      #countrySheet .country-summary-pills{gap:5px!important}
      #countrySheet .country-summary-pills span{padding:3px 7px!important;font-size:9px!important}
      #countrySheet .country-rating-summary{margin-top:3px!important}
      #countrySheet .country-status-grid{gap:6px!important;margin:5px 0!important}
      #countrySheet .country-status-grid button{min-height:54px!important;padding:4px 4px!important;border-radius:14px!important;font-size:11px!important;gap:3px!important}
      #countrySheet .country-status-grid button svg{width:24px!important;height:24px!important}
      #countrySheet .country-status-grid button span{margin-top:1px!important}
      #countrySheet .add-trip-btn,#countrySheet [data-add-trip],#countrySheet .country-add-trip{min-height:34px!important;padding:6px 12px!important;margin:5px 0!important;font-size:12px!important}
      #countrySheet .divider{margin:7px 0!important}
      #countrySheet .space-top{margin-top:8px!important}
      #countrySheet h3{margin-top:5px!important;margin-bottom:4px!important}
      #countrySheet .country-status-grid .status-icon{width:26px!important;height:26px!important;min-width:26px!important;min-height:26px!important}
      #countrySheet .country-status-grid .status-tick{width:26px!important;height:26px!important;min-width:26px!important;min-height:26px!important;font-size:16px!important;line-height:22px!important}
      #countrySheet .country-status-grid .status-clock svg,#countrySheet .country-status-grid .status-bucket svg{width:26px!important;height:26px!important;max-width:26px!important;max-height:26px!important}
      #countrySheet .country-trip-list{gap:6px!important;margin-bottom:7px!important}
      #countrySheet .country-no-trips{padding:3px 0 1px!important;margin:4px 0 6px!important;font-size:11px!important}
      #countrySheet .country-trip-card{padding:9px 11px!important;border-radius:14px!important}
      #countrySheet .country-info-summary{padding-top:8px!important}
      #countrySheet .country-info-summary h3{margin:0 0 5px!important;font-size:12px!important}
      #countrySheet .country-info-summary>div{padding:8px 10px!important;margin-top:5px!important;border-radius:12px!important}
      #countrySheet .country-info-summary p{margin-top:3px!important;font-size:10px!important;line-height:1.3!important}
      #countrySheet .country-info-summary strong{font-size:10px!important}
    }
  `;
  document.head.appendChild(style);
})();

// Stops-per-year chart + recycle-bin polish (startup-safe hotfix)
(()=>{if(document.getElementById('stops-per-year-bin-polish-style'))return;document.getElementById('trips-per-year-hotfix-style')?.remove();const st=document.createElement('style');st.id='stops-per-year-bin-polish-style';st.textContent=`.trips-per-year-chart{width:100%;padding:12px 2px 0;box-sizing:border-box}.trips-per-year-chart svg{display:block;width:100%;height:auto;overflow:visible}.trip-year-guides line{stroke:rgba(5,86,112,.13);stroke-width:1.5}.trip-year-line{fill:none;stroke:#056b89;stroke-width:5;stroke-linecap:round;stroke-linejoin:round}.trip-year-area{fill:url(#stopYearArea)}.trips-per-year-chart circle{fill:#e9bd25;stroke:#056b89;stroke-width:3.5}.trips-per-year-chart text{font-family:inherit;font-weight:800;fill:#153047}.trip-year-value{font-size:15px}.trip-year-label,.trip-year-y-label{font-size:12px;fill:#607782}.recycle-row{position:relative!important}.recycle-row .recycle-copy{text-align:left!important;justify-self:start!important;margin-left:0!important;padding-left:0!important}.recycle-row .recycle-select-dot{position:absolute!important;left:0!important;top:50%!important;transform:translateY(-50%)!important}.recycle-list:not(.selection-mode) .recycle-row .recycle-select-dot,#recycleList:not(.selection-mode) .recycle-row .recycle-select-dot{display:none!important}.recycle-row{justify-content:flex-start!important;text-align:left!important}.recycle-row .recycle-copy{flex:1 1 auto!important;text-align:left!important}.recycle-row .recycle-actions{margin-left:auto!important}#recycleDialog::backdrop{background:rgba(5,34,51,.32)!important;backdrop-filter:blur(7px)!important;-webkit-backdrop-filter:blur(7px)!important}`;document.head.appendChild(st)})();

;(()=>{
/* Intent-aware country hero warming. Keep startup light: warm the user's own
   countries first, then a small batch of countries visible after the map settles. */
const heroByCountry={Belgium:'belgium-country-guide.jpg',France:'france-country-hero.jpg',Antarctica:'antarctica-country-hero.jpg',Morocco:'morocco-country-hero.jpg',Portugal:'portugal-country-hero.jpg',Switzerland:'switzerland-country-hero.jpg',Luxembourg:'luxembourg-country-hero.jpg',Greece:'greece-country-hero.jpg',Netherlands:'netherlands-country-hero.jpg',Poland:'poland-country-hero.jpg',Italy:'italy-country-hero.jpg',Germany:'germany-country-hero.jpg',Spain:'spain-country-hero.jpg',Denmark:'denmark-country-hero.jpg',Ireland:'ireland-country-hero.jpg','United Kingdom':'united-kingdom-country-hero.jpg',Norway:'norway-country-hero.jpg',Hungary:'hungary-country-hero.jpg',Austria:'austria-country-hero.jpg',Russia:'russia-country-hero.jpg',China:'china-country-hero.jpg',Japan:'japan-country-hero.jpg',Canada:'canada-country-hero.jpg',Mexico:'mexico-country-hero.jpg',Brazil:'brazil-country-hero.jpg',Jamaica:'jamaica-country-hero.jpg',Venezuela:'venezuela-country-hero.jpg',Greenland:'greenland-country-hero.jpg',Iceland:'iceland-country-hero.jpg',Australia:'australia-country-hero.jpg',Egypt:'egypt-country-hero.jpg',India:'india-country-hero.jpg',Rwanda:'rwanda-country-hero.jpg',Sudan:'sudan-country-hero.jpg','United Arab Emirates':'united-arab-emirates-country-hero.jpg','Saudi Arabia':'saudi-arabia-country-hero.jpg',Turkey:'turkey-country-hero.jpg',Iran:'iran-country-hero.jpg',Iraq:'iraq-country-hero.png','South Africa':'south-africa-country-hero.jpg','Bosnia and Herzegovina':'bosnia-and-herzegovina-country-hero.jpg',Croatia:'croatia-country-hero.jpg',Czechia:'czechia-country-hero.jpg',Slovenia:'slovenia-country-hero.jpg',Slovakia:'slovakia-country-hero.jpg',Romania:'romania-country-hero.jpg',Serbia:'serbia-country-hero.jpg',Montenegro:'montenegro-country-hero.jpg',Sweden:'sweden-country-hero.jpg',Finland:'finland-country-hero.jpg','United States':'united-states-country-hero.jpg',Vietnam:'vietnam-country-hero.jpg',Pakistan:'pakistan-country-hero.jpg'};
const warmed=new Set(),queue=[];let running=0,settleTimer=0;
const pump=()=>{while(running<2&&queue.length){const src=queue.shift();if(warmed.has(src))continue;warmed.add(src);running++;const img=new Image();img.decoding='async';const done=()=>{running--;pump()};img.onload=done;img.onerror=done;img.src=src;if(img.decode)img.decode().catch(()=>{})}};
const warmCountries=(names,limit=10)=>{let added=0;for(const raw of names){if(added>=limit)break;const name=raw==='eSwatini'?'Eswatini':raw,src=heroByCountry[name];if(src&&!warmed.has(src)&&!queue.includes(src)){queue.push(src);added++}}pump()};
const priority=()=>{const names=[];Object.entries(state.statuses||{}).forEach(([c,status])=>{if(status==='going'||status==='visited'||status==='bucket')names.push(c)});return names};
const idle=()=>warmCountries(priority(),12);if('requestIdleCallback'in window)requestIdleCallback(idle,{timeout:1800});else setTimeout(idle,500);
const warmVisible=()=>{if(!document.body.classList.contains('map-view'))return;const map=document.querySelector('#worldMap');if(!map)return;const mr=map.getBoundingClientRect(),cx=mr.left+mr.width/2,cy=mr.top+mr.height/2,seen=[];document.querySelectorAll('#countries .country').forEach(path=>{const r=path.getBoundingClientRect();if(r.width<1||r.height<1||r.right<mr.left||r.left>mr.right||r.bottom<mr.top||r.top>mr.bottom)return;const name=path.dataset.country;if(!heroByCountry[name])return;const x=r.left+r.width/2,y=r.top+r.height/2;seen.push([name,(x-cx)**2+(y-cy)**2])});seen.sort((a,b)=>a[1]-b[1]);warmCountries(seen.map(x=>x[0]),8)};
window.__wozzaWarmVisibleCountryHeroes=()=>{clearTimeout(settleTimer);settleTimer=setTimeout(warmVisible,420)};
})();

(()=>{if(document.getElementById('trip-stop-reorder-style'))return;const st=document.createElement('style');st.id='trip-stop-reorder-style';st.textContent=`html.stop-drag-active,html.stop-drag-active body{overscroll-behavior:none!important}#tripDestinationStops .trip-destination-stop{transition:transform .16s ease,box-shadow .16s ease,opacity .16s ease;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}#tripDestinationStops .trip-destination-stop.is-dragging{transform:scale(1.018);box-shadow:0 14px 30px rgba(0,35,55,.20);opacity:.96;z-index:20;position:relative;cursor:grabbing}#tripDestinationStops .trip-destination-stop.stop-drag-settle{animation:stopDragSettle .22s ease-out}@keyframes stopDragSettle{0%{transform:scale(1.012)}65%{transform:scale(.996)}100%{transform:scale(1)}}`;document.head.appendChild(st)})();

;(()=>{
  if(window.__wozzaTripPageFreezeInstalled)return;
  window.__wozzaTripPageFreezeInstalled=true;
  let frozen=false,y=0,bodyStyle='',htmlStyle='';
  const trip=$('#tripDialog');
  if(!trip)return;
  const freeze=()=>{
    if(frozen)return;frozen=true;y=window.scrollY;
    bodyStyle=document.body.getAttribute('style')||'';
    htmlStyle=document.documentElement.getAttribute('style')||'';
    document.body.style.position='fixed';document.body.style.top=`-${y}px`;
    document.body.style.left='0';document.body.style.right='0';document.body.style.width='100%';
    document.body.style.overflow='hidden';document.documentElement.style.overscrollBehavior='none';
    document.documentElement.classList.add('trip-page-frozen');
  };
  const thaw=()=>{
    if(!frozen)return;frozen=false;
    document.body.setAttribute('style',bodyStyle);
    document.documentElement.setAttribute('style',htmlStyle);
    document.documentElement.classList.remove('trip-page-frozen');
    window.scrollTo(0,y);
  };
  const sync=()=>trip.open?freeze():thaw();
  new MutationObserver(sync).observe(trip,{attributes:true,attributeFilter:['open']});
  trip.addEventListener('close',thaw);trip.addEventListener('cancel',()=>setTimeout(thaw,0));
  sync();
})();

;(()=>{if(document.getElementById('trip-stop-floating-drag-style'))return;const st=document.createElement('style');st.id='trip-stop-floating-drag-style';st.textContent=`
.trip-stop-drag-source{visibility:hidden!important}
.trip-stop-drag-placeholder{box-sizing:border-box;border:2px dashed rgba(10,79,96,.24);border-radius:18px;background:rgba(255,255,255,.16);margin-bottom:inherit}
.trip-stop-drag-ghost{transform:scale(1.025);box-shadow:0 18px 38px rgba(0,35,55,.28)!important;opacity:.97!important;will-change:top;overflow:hidden}
`;document.head.appendChild(st)})();

;(()=>{const st=document.createElement('style');st.id='trip-stop-placeholder-size-fix';st.textContent=`
#tripDestinationStops>.trip-stop-drag-placeholder{
  flex-grow:0!important;flex-shrink:0!important;
  align-self:auto!important;position:relative!important;
  padding:0!important;overflow:hidden!important;
}
#tripDestinationStops>.trip-stop-drag-source{
  position:absolute!important;pointer-events:none!important;
  height:0!important;min-height:0!important;margin:0!important;padding:0!important;
  border:0!important;overflow:hidden!important;
}
`;document.head.appendChild(st)})();

;(()=>{if(document.getElementById('trip-stop-touch-sort-style'))return;const st=document.createElement('style');st.id='trip-stop-touch-sort-style';st.textContent=`
#tripDestinationStops>.trip-stop-mobile-marker{display:block!important;flex-grow:0!important;flex-shrink:0!important;border:0!important;background:transparent!important;padding:0!important;overflow:hidden!important;box-shadow:none!important}
.trip-stop-mobile-live{display:block!important;visibility:visible!important;opacity:.94!important;pointer-events:none!important;transform:none!important;box-shadow:0 10px 24px rgba(0,35,55,.22)!important;will-change:top,left!important;contain:none!important}
`;document.head.appendChild(st)})()



;(()=>{
 if(window.__wozzaFactsImageViewerV3)return;window.__wozzaFactsImageViewerV3=true;
 const style=document.createElement('style');style.id='wozza-facts-image-viewer-style';style.textContent=`
 .wozza-image-viewer{position:fixed;inset:0;z-index:2147483647;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:0;border:0!important;border-radius:0!important;box-shadow:none!important;background:#087b8c;overflow:hidden;place-items:center;touch-action:none}\n .wozza-image-viewer[open]{display:grid}\n .wozza-image-viewer::backdrop{background:transparent}
 .wozza-image-viewer .sky-clouds{position:absolute!important;inset:-20px!important;width:calc(100% + 40px)!important;height:calc(100% + 40px)!important;pointer-events:none!important;filter:blur(4px)!important;opacity:.78!important;z-index:0!important}
 .wozza-image-viewer::after{content:'';position:absolute;inset:0;background:rgba(0,91,108,.16);backdrop-filter:blur(1px);z-index:1;pointer-events:none}
 .wozza-image-viewer-stage{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;overflow:hidden;touch-action:none;padding:72px 3vw 34px;box-sizing:border-box}
 .wozza-image-viewer-img{display:block;max-width:94vw;max-height:calc(82dvh - 58px);width:auto;height:auto;object-fit:contain;border-radius:18px;box-shadow:0 16px 50px rgba(0,35,48,.35);transform-origin:center;will-change:transform;user-select:none;-webkit-user-drag:none;touch-action:none}
 .wozza-image-viewer-caption{position:static;z-index:3;margin:0;max-width:min(92vw,980px);padding:0 10px;text-align:center;color:#fff;font:600 16px/1.35 sans-serif;text-shadow:0 2px 8px rgba(0,35,48,.55);flex:0 0 auto}
 @media (orientation:landscape){.wozza-image-viewer-stage{gap:18px;padding:28px 7vw 22px}.wozza-image-viewer-img{max-width:78vw;max-height:calc(78dvh - 44px)}.wozza-image-viewer-caption{font-size:15px;line-height:1.25}}
 .wozza-image-viewer-close{position:absolute;top:max(16px,env(safe-area-inset-top));right:max(16px,env(safe-area-inset-right));z-index:4;width:48px;height:48px;border:0;border-radius:50%;background:rgba(248,246,240,.94);font:400 34px/1 sans-serif;color:#111;display:grid;place-items:center;box-shadow:0 5px 18px rgba(0,0,0,.16)}
 `;document.head.appendChild(style);
 function countryFromFacts(facts){let c=(facts.dataset.country||facts.dataset.countryName||'').trim();if(!c){const n=facts.querySelector('[data-country-name],.country-name,.facts-country-name,.fast-facts-country,h1,h2');if(n)c=(n.dataset.countryName||n.textContent||'').trim()}if(!c&&typeof currentCountry!=='undefined')c=String(currentCountry||'').trim();return c.replace(/\s*FAST FACTS\s*/ig,' ').replace(/\s+/g,' ').trim()}
 function googleImages(c){if(!c)return;const u='https://www.google.com/search?tbm=isch&q='+encodeURIComponent(c);if(typeof openExternalLink==='function')openExternalLink(u);else if(typeof openExternal==='function')openExternal(u);else window.open(u,'_blank','noopener,noreferrer')}
 function openViewer(img){
  const viewer=document.createElement('dialog');viewer.className='wozza-image-viewer';viewer.setAttribute('aria-label','Full screen country image');
  const source=document.querySelector('.passport-page .sky-clouds, .passport-view .sky-clouds, .sky-clouds');if(source){const clouds=source.cloneNode(true);clouds.removeAttribute('hidden');clouds.setAttribute('aria-hidden','true');viewer.appendChild(clouds)}
  const stage=document.createElement('div');stage.className='wozza-image-viewer-stage';const big=document.createElement('img');big.className='wozza-image-viewer-img';big.src=img.currentSrc||img.src;big.alt=img.alt||'';big.draggable=false;stage.appendChild(big);const captionText=(img.closest('.country-guide-photo')?.dataset.caption||'').trim();if(captionText){const cap=document.createElement('p');cap.className='wozza-image-viewer-caption';cap.textContent=captionText;stage.appendChild(cap)}
  const close=document.createElement('button');close.type='button';close.className='wozza-image-viewer-close';close.setAttribute('aria-label','Close image');close.textContent='×';viewer.append(stage,close);document.body.appendChild(viewer);viewer.showModal();
  let scale=1,x=0,y=0,startX=0,startY=0,baseX=0,baseY=0,pinchStart=0,pinchScale=1;const pts=new Map();
  const draw=()=>{big.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`};
  const shut=()=>{if(viewer.open)viewer.close();viewer.remove()};close.onclick=shut;viewer.addEventListener('cancel',e=>{e.preventDefault();shut()});
  stage.addEventListener('pointerdown',e=>{pts.set(e.pointerId,{x:e.clientX,y:e.clientY});stage.setPointerCapture?.(e.pointerId);if(pts.size===1){startX=e.clientX;startY=e.clientY;baseX=x;baseY=y}else if(pts.size===2){const a=[...pts.values()];pinchStart=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);pinchScale=scale}}, {passive:false});
  stage.addEventListener('pointermove',e=>{if(!pts.has(e.pointerId))return;e.preventDefault();pts.set(e.pointerId,{x:e.clientX,y:e.clientY});if(pts.size===2){const a=[...pts.values()],d=Math.hypot(a[0].x-a[1].x,a[0].y-a[1].y);scale=Math.max(1,Math.min(5,pinchScale*(d/Math.max(1,pinchStart))));if(scale===1)x=y=0;draw()}else if(pts.size===1&&scale>1){x=baseX+(e.clientX-startX);y=baseY+(e.clientY-startY);draw()}}, {passive:false});
  const up=e=>{pts.delete(e.pointerId);if(pts.size===1){const a=[...pts.values()][0];startX=a.x;startY=a.y;baseX=x;baseY=y}};stage.addEventListener('pointerup',up);stage.addEventListener('pointercancel',up);
  stage.addEventListener('dblclick',e=>{e.preventDefault();scale=scale>1?1:2;x=y=0;draw()});
  viewer.addEventListener('click',e=>{if(e.target===viewer)shut()});
 }
 let hold=null,sx=0,sy=0,held=false,target=null,country='';
 document.addEventListener('pointerdown',e=>{const img=e.target.closest&&e.target.closest('.country-guide-photo img');if(!img)return;const facts=img.closest('#countryInfoDialog,#fastFactsDialog,.country-info-dialog,.fast-facts-dialog,.country-facts-modal,[class*="fast-fact"],[class*="country-fact"]');if(!facts)return;target=img;country=countryFromFacts(facts);sx=e.clientX;sy=e.clientY;held=false;clearTimeout(hold);hold=setTimeout(()=>{held=true;navigator.vibrate?.(20);googleImages(country)},600)},true);
 document.addEventListener('pointermove',e=>{if(target&&Math.hypot(e.clientX-sx,e.clientY-sy)>12){clearTimeout(hold);hold=null}},true);
 const cancel=()=>{clearTimeout(hold);hold=null};document.addEventListener('pointercancel',cancel,true);
 document.addEventListener('pointerup',e=>{if(!target)return;clearTimeout(hold);const img=target;target=null;if(held){held=false;e.preventDefault();e.stopImmediatePropagation();return}if(Math.hypot(e.clientX-sx,e.clientY-sy)<=12){e.preventDefault();e.stopImmediatePropagation();openViewer(img)}},true);
 document.addEventListener('click',e=>{if(e.target.closest&&e.target.closest('.country-guide-photo img')){e.preventDefault();e.stopImmediatePropagation()}},true);
})();;





;(()=>{
 if(window.__wozzaAddTripDestinationHold)return;window.__wozzaAddTripDestinationHold=true;
 const KEY='wozzaAddStopStyle',btn=document.querySelector('#addTripDestination');if(!btn)return;
 const st=document.createElement('style');st.id='wozza-add-stop-hold-style';st.textContent=`
#addTripDestination.wozza-add-stop-subtle{
 width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;
 padding:0!important;margin:12px auto!important;display:flex!important;align-items:center!important;justify-content:center!important;
 background:transparent!important;border:0!important;box-shadow:none!important;font-size:0!important;line-height:1!important;
 position:relative!important;transform:none!important;rotate:0deg!important
}
#addTripDestination.wozza-add-stop-subtle>*{display:none!important}
#addTripDestination.wozza-add-stop-subtle::after{
 content:'+';position:absolute;left:50%;top:50%;width:42px;height:42px;border-radius:50%;
 display:flex;align-items:center;justify-content:center;
 background:rgba(0,137,145,.82);color:#fff;border:1px solid rgba(255,255,255,.48);
 box-shadow:0 4px 12px rgba(0,35,55,.14);font-size:28px!important;font-weight:500!important;line-height:1!important;
 backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);
 transform:translate(-50%,-50%) rotate(0deg)!important
}
`;document.head.appendChild(st);
 const apply=()=>btn.classList.toggle('wozza-add-stop-subtle',localStorage.getItem(KEY)==='subtle');apply();
 let timer=0,held=false,sx=0,sy=0;
 const begin=(x,y)=>{held=false;sx=x;sy=y;clearTimeout(timer);timer=setTimeout(()=>{timer=0;held=true;const subtle=!btn.classList.contains('wozza-add-stop-subtle');localStorage.setItem(KEY,subtle?'subtle':'sign');btn.classList.toggle('wozza-add-stop-subtle',subtle);navigator.vibrate?.(25)},500)};
 const cancel=()=>{if(timer){clearTimeout(timer);timer=0}};
 btn.addEventListener('touchstart',e=>{const t=e.touches[0];begin(t.clientX,t.clientY)},{passive:true});
 btn.addEventListener('touchmove',e=>{if(!timer)return;const t=e.touches[0];if(Math.hypot(t.clientX-sx,t.clientY-sy)>10)cancel()},{passive:true});
 btn.addEventListener('touchend',cancel,{passive:true});btn.addEventListener('touchcancel',cancel,{passive:true});
 btn.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch')begin(e.clientX,e.clientY)});
 btn.addEventListener('pointermove',e=>{if(e.pointerType!=='touch'&&timer&&Math.hypot(e.clientX-sx,e.clientY-sy)>10)cancel()});
 btn.addEventListener('pointerup',e=>{if(e.pointerType!=='touch')cancel()});
 btn.addEventListener('contextmenu',e=>{if(held)e.preventDefault()});
 btn.addEventListener('click',e=>{if(!held)return;held=false;e.preventDefault();e.stopImmediatePropagation()},true);
})();


;(()=>{
 if(document.getElementById('wozza-narrowboat-icon-scale'))return;
 const style=document.createElement('style');
 style.id='wozza-narrowboat-icon-scale';
 style.textContent='img[src$="narrowboat.png"]{transform:scale(1.24)!important;transform-origin:center!important}';
 document.head.appendChild(style);
})();


// v0.18.XX — Vibe true Companion blueprint + expanded-stop scroll repair.
(()=>{
 if(document.getElementById('wozza-vibe-companion-blueprint-scroll-fix'))return;
 const st=document.createElement('style');st.id='wozza-vibe-companion-blueprint-scroll-fix';st.textContent=`
 /* Vibe uses the exact same expanded panel treatment as Travel Companions. */
 #tripForm #tripVibeBody{
   background:#edf5f4!important;
   border:1px solid rgba(7,94,120,.075)!important;
   border-radius:24px!important;
   padding:16px!important;
   box-shadow:0 3px 10px rgba(5,65,85,.025)!important;
   margin-top:16px!important;
 }
 #tripForm #tripVibeBody[hidden]{display:none!important}
 #tripForm #tripVibeBank{display:flex!important;flex-wrap:wrap!important;gap:7px!important;margin:7px 0 10px!important}
 #tripForm #tripVibeBank .companion-tag{padding:7px 11px!important;font-size:13px!important;line-height:1!important}
 #tripForm #tripVibeBody .trip-new-companion{display:block!important;margin-bottom:0!important}
 #tripForm #tripVibeCustom{width:100%!important;box-sizing:border-box!important}
 /* One canonical toggle size for Vibe, identical to the other trip sections. */
 #tripForm #tripVibeSection .section-collapse-toggle{
   box-sizing:border-box!important;width:44px!important;height:44px!important;
   min-width:44px!important;min-height:44px!important;max-width:44px!important;max-height:44px!important;
   flex:0 0 44px!important;aspect-ratio:1/1!important;padding:0!important;margin:0!important;
   border-radius:50%!important;font-size:27px!important;font-weight:700!important;line-height:1!important;
   display:grid!important;place-items:center!important;transform:none!important;
 }
 #tripForm #tripVibeSection .trip-vibe-head{grid-template-columns:minmax(0,1fr) 44px!important}

 /* Trip editor presentation only: preserve original toggle elements, handlers, state and summaries. */
 #tripForm .trip-companions-section,
 #tripForm .trip-todo-section,
 #tripForm .trip-notes-section{
   border-bottom:1px solid rgba(229,248,247,.32)!important;
   padding-bottom:17px!important;
 }
 #tripForm .section-collapse-toggle,
 #tripForm #tripVibeSection .section-collapse-toggle{
   background:transparent!important;
   background-image:none!important;
   border:0!important;
   border-radius:0!important;
   box-shadow:none!important;
   color:transparent!important;
   font-size:0!important;
   text-shadow:none!important;
   position:relative!important;
 }
 #tripForm .section-collapse-toggle::after,
 #tripForm #tripVibeSection .section-collapse-toggle::after{
   content:""!important;
   display:block!important;
   position:absolute!important;
   left:50%!important;
   top:47%!important;
   width:13px!important;
   height:13px!important;
   border-right:3px solid #fff!important;
   border-bottom:3px solid #fff!important;
   transform:translate(-50%,-65%) rotate(45deg)!important;
   transition:transform .18s ease!important;
   pointer-events:none!important;
 }
 #tripForm .section-collapse-toggle[aria-expanded="true"]::after{
   transform:translate(-50%,-25%) rotate(225deg)!important;
 }

 /* A normal swipe on a stop scrolls the dialog. JS only suppresses it after the long-press drag has actually begun. */
 #tripDestinationStops .trip-destination-stop{touch-action:pan-y!important}
 #tripDestinationStops .trip-destination-stop.trip-stop-mobile-live{touch-action:none!important}
 `;document.head.appendChild(st);
})();

// Map landscape only: centre the country card in the usable map area beside the navigation rail.
(()=>{
  if(document.getElementById('map-landscape-country-card-centre'))return;
  const st=document.createElement('style');
  st.id='map-landscape-country-card-centre';
  st.textContent=`@media (orientation:landscape){body.map-view #countrySheet.sheet{left:calc(50% + clamp(41px,5vw,56px))!important}}`;
  document.head.appendChild(st);
})();

// Fast Facts flag Google search + expanded chart collapse shadow polish
(()=>{
  const st=document.createElement('style');
  st.id='fast-facts-flag-chart-shadow-hotfix';
  st.textContent=`
    #countryInfoFlag{cursor:pointer}
    .passport-stats-slide .stats-show-more{display:grid!important;place-items:center!important;margin:26px auto 38px!important;overflow:visible!important;filter:none!important;box-shadow:0 10px 18px rgba(5,107,137,.22)!important}
    .passport-mini-list{overflow:visible!important;padding-bottom:28px!important}
    .passport-stats-carousel.stats-expanded .passport-stats-slide.is-active{overflow:visible!important;padding-bottom:28px!important}
  `;
  document.getElementById(st.id)?.remove();
  document.head.appendChild(st);

  document.addEventListener('click',e=>{
    const flag=e.target.closest('#countryInfoFlag');
    if(!flag||!currentCountry)return;
    e.preventDefault();
    e.stopPropagation();
    const country=canonicalCountry(currentCountry)||currentCountry;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(country)}`,'_blank','noopener');
  });
})();

/* Self-contained SVG sag bars. Originals stay visible unless all replacements initialise. */
(function(){
  const files=['status-sag-visited.svg','status-sag-visiting.svg','status-sag-bucket.svg'];
  const straight='M3 5 C28 5 36 5 42 5 C46 5 47 5 50 5 C53 5 54 5 58 5 C64 5 72 5 97 5';
  const sag='M3 5 C28 5 35 5 40 6 C44 7 45 15 50 15 C55 15 56 7 60 6 C65 5 72 5 97 5';
  const paths=[];
  let active=0;

  function setShape(path, on, animate){
    if(!path)return;
    if(!animate){
      path.style.transition='none';
      path.setAttribute('d',on?sag:straight);
      path.getBoundingClientRect();
      path.style.transition='';
      return;
    }
    path.setAttribute('d',on?sag:straight);
  }

  async function init(){
    const hosts=[...document.querySelectorAll('.status-sag-host')];
    if(hosts.length!==3)return;
    try{
      const svgs=await Promise.all(files.map(f=>fetch(f,{cache:'no-store'}).then(r=>{
        if(!r.ok)throw new Error(f);
        return r.text();
      })));
      svgs.forEach((txt,i)=>{
        hosts[i].innerHTML=txt;
        const p=hosts[i].querySelector('path');
        if(!p)throw new Error('missing path');
        p.classList.add('status-sag-path');
        paths[i]=p;
      });
      document.querySelector('.map-summary')?.classList.add('sag-ready');
      window.WozzaSagBars.set(typeof countrySlide==='number'?countrySlide:0,false);
    }catch(e){
      /* Fail safe: baseline bars remain visible. */
    }
  }

  window.WozzaSagBars={
    set(idx,animate=true){
      active=idx;
      paths.forEach((p,i)=>setShape(p,i===active,animate));
    }
  };

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();

// WozzaWorld Travel Score — Milestone 2 calibrated, modular model
(function(){
  const clamp=(n,min=0,max=100)=>Math.max(min,Math.min(max,n));
  const sat=(n,k)=>100*(1-Math.exp(-Math.max(0,n)/k));
  const yearOf=v=>{const m=String(v||'').match(/(19|20)\d{2}/);return m?Number(m[0]):0};
  const MODEL_VERSION=2;
  // Presentation is deliberately separate from the maths so a future Admin Portal can own it.
  const SCORE_LEVELS=[
    {min:0,max:20,title:'STARTING OUT'},
    {min:21,max:40,title:'FINDING YOUR FEET'},
    {min:41,max:60,title:'WELL TRAVELLED'},
    {min:61,max:80,title:'SEASONED EXPLORER'},
    {min:81,max:100,title:'WORLDLY'}
  ];
  const continentSets={
    Europe:['United Kingdom','Ireland','France','Spain','Portugal','Italy','Germany','Belgium','Netherlands','Denmark','Norway','Sweden','Finland','Iceland','Poland','Austria','Switzerland','Greece','Croatia','Czechia','Slovakia','Hungary','Romania','Bulgaria','Serbia','Slovenia','Estonia','Latvia','Lithuania','Belarus','Ukraine','Moldova','Malta','Cyprus','Bosnia and Herzegovina','Montenegro','Albania','North Macedonia','Luxembourg','Liechtenstein','Monaco','Andorra','San Marino','Vatican City'],
    Africa:['Morocco','Egypt','South Africa','Kenya','Tanzania','Tunisia','Algeria','Ghana','Nigeria','Niger','Ethiopia','Uganda','Rwanda','Botswana','Namibia','Mauritius','Seychelles','Madagascar','Senegal','Gambia','Cabo Verde'],
    Asia:['China','Japan','Thailand','India','Vietnam','Viet Nam','Indonesia','Singapore','Malaysia','South Korea','United Arab Emirates','Turkey','Türkiye','Pakistan','Nepal','Sri Lanka','Cambodia','Laos','Philippines','Qatar','Jordan','Israel','Oman','Saudi Arabia'],
    'North America':['United States','United States of America','Canada','Mexico','Cuba','Jamaica','Costa Rica','Dominican Republic','Bahamas','Barbados','Grenada','Saint Lucia','Antigua and Barbuda'],
    'South America':['Brazil','Argentina','Chile','Peru','Colombia','Venezuela','Ecuador','Bolivia','Uruguay','Paraguay','Guyana','Suriname'],
    Oceania:['Australia','New Zealand','Fiji','Papua New Guinea','Samoa','Tonga','Vanuatu']
  };
  const FACTORS={
    world:{weight:.35,label:'World explored'},
    variety:{weight:.25,label:'Travel variety'},
    depth:{weight:.20,label:'Depth of travel'},
    momentum:{weight:.10,label:'Travel momentum'},
    discovery:{weight:.10,label:'Discovery'}
  };
  const uniq=a=>new Set(a.filter(Boolean).map(x=>String(x).trim().toLowerCase()));
  function collectTravelEvidence(){
    const trips=(Array.isArray(state?.trips)?state.trips:[]).filter(t=>!(typeof tripIsOnHorizon==='function'&&tripIsOnHorizon(t)));
    const visited=typeof countryRows==='function'?countryRows('visited'):[];
    const countries=new Set(visited.map(String)),continents=new Set(),vibes=new Set(),modes=new Set(),cities=new Set(),years=new Set(),partyContexts=new Set();
    let countryTouches=0,stopCount=0,multiStopTrips=0,repeatTouches=0;
    countries.forEach(c=>{for(const [continent,names] of Object.entries(continentSets)){if(names.some(n=>typeof sameCountry==='function'?sameCountry(n,c):n===c)){continents.add(continent);break}}});
    trips.forEach(t=>{
      (t.vibes||[]).forEach(v=>vibes.add(String(v).trim().toLowerCase()));
      const companions=uniq(t.companions||[]).size;partyContexts.add(companions===0?'solo':companions===1?'duo':'group');
      const stops=(t.destinations||[]).filter(Boolean);stopCount+=Math.max(1,stops.length);if(stops.length>1)multiStopTrips++;
      const tc=typeof tripCountries==='function'?tripCountries(t):(t.countries||[]);countryTouches+=tc.length;
      stops.forEach(d=>{const mode=d.travelMode||d.mode;if(mode)modes.add(String(mode).trim().toLowerCase());if(d.name)cities.add(String(d.name).trim().toLowerCase());const y=yearOf(d.start||d.end);if(y)years.add(y)});
      Object.values(t.cities||{}).flat().forEach(c=>cities.add(String(c).trim().toLowerCase()));
      const y=yearOf(t.start||t.end);if(y)years.add(y);
    });
    repeatTouches=Math.max(0,countryTouches-countries.size);
    return {trips,countries,continents,vibes,modes,cities,years,partyContexts,countryTouches,stopCount,multiStopTrips,repeatTouches};
  }
  function calculateComponents(e){
    // World: country count matters, but continental/geographical spread has enough weight to prevent one-continent volume dominating.
    const world=clamp(sat(e.countries.size,30)*.58 + sat(e.continents.size,3.2)*.42);
    // Variety: social/party context is intentionally small and capped; modes and trip styles do the heavy lifting.
    const variety=clamp(sat(e.vibes.size,6)*.46 + sat(e.modes.size,5)*.44 + sat(e.partyContexts.size,2.4)*.10);
    const depth=clamp(sat(e.cities.size,30)*.42 + sat(e.stopCount,35)*.23 + sat(e.multiStopTrips,8)*.20 + sat(e.repeatTouches,16)*.15);
    // Momentum is accumulated history only. No current date/recent-trip term: inactivity can never cause decay.
    const momentum=e.trips.length?clamp(sat(e.years.size,7)*.52 + sat(e.trips.length,18)*.48):0;
    // Discovery combines footprint size with how much of the established travel history expanded that footprint.
    const discoveryRate=e.countryTouches?e.countries.size/Math.max(e.countryTouches,e.countries.size):0;
    const discovery=clamp(sat(e.countries.size,24)*.62 + (discoveryRate*100)*.38* Math.min(1,e.countries.size/8));
    return {world,variety,depth,momentum,discovery};
  }
  function balancedScore(c){
    let raw=0;Object.entries(FACTORS).forEach(([k,v])=>raw+=c[k]*v.weight);
    // Upper scores increasingly require strength across several dimensions, without hard continent gates.
    const vals=Object.keys(FACTORS).map(k=>c[k]).sort((a,b)=>a-b),balance=(vals[0]+vals[1])/2;
    if(raw>60){const pressure=(raw-60)/40;raw-=pressure*Math.max(0,62-balance)*.20}
    return Math.round(clamp(raw));
  }
  function levelFor(score){return SCORE_LEVELS.find(x=>score>=x.min&&score<=x.max)||SCORE_LEVELS[SCORE_LEVELS.length-1]}
  function travelScoreData(){
    const e=collectTravelEvidence(),components=calculateComponents(e),score=balancedScore(components),level=levelFor(score);
    const rawAwarded=Object.fromEntries(Object.keys(FACTORS).map(k=>[k,components[k]*FACTORS[k].weight]));
    const rawAwardedTotal=Object.values(rawAwarded).reduce((a,b)=>a+b,0);
    const awardScale=rawAwardedTotal?score/rawAwardedTotal:0;
    const awardedPoints={};
    let awardedRunning=0;
    const awardedKeys=Object.keys(FACTORS);
    awardedKeys.forEach((k,i)=>{
      const value=i===awardedKeys.length-1
        ? Math.max(0,Math.round((score-awardedRunning)*10)/10)
        : Math.round(rawAwarded[k]*awardScale*10)/10;
      awardedPoints[k]=value;
      awardedRunning+=value;
    });
    const ranked=Object.keys(FACTORS).map(k=>({key:k,label:FACTORS[k].label,value:components[k]})).sort((a,b)=>b.value-a.value);
    const strength=ranked[0],weakest=ranked[ranked.length-1];
    const strengthText={world:'Strong geographical breadth across your travel story.',variety:'A varied mix of trip styles and ways to travel.',depth:'You tend to explore destinations in real depth.',momentum:'You have built a strong, sustained travel history.',discovery:'You keep expanding your travel footprint.'}[strength.key];
    // Recommendations interpret the travel pattern rather than simply repeating the weakest statistic.
    // Keep this rules-based and deterministic so the same travel history always gets a sensible explanation.
    function recommendationFor(){
      const countryCount=e.countries.size,continentCount=e.continents.size,tripCount=e.trips.length;
      const styleCount=e.vibes.size,modeCount=e.modes.size,multiStop=e.multiStopTrips,repeatCount=e.repeatTouches;
      const values=ranked.map(x=>x.value),spread=values[0]-values[values.length-1];

      if(tripCount<=2 || countryCount<=2){
        return 'Your travel story is just getting started, so almost every new adventure can add something different. New countries, trip styles and ways of getting there will all help shape it.';
      }
      if(tripCount>=8 && continentCount<=2 && countryCount<=18){
        return `You’re a seasoned traveller, but your adventures are concentrated in a relatively small corner of the map. Your biggest opportunity is somewhere completely new${continentCount<6?' - especially a new continent.':'.'}`;
      }
      if(components.world>=65 && components.variety<48){
        return 'You’ve covered an impressive amount of the map, but you tend to experience it in similar ways. Trying a different style of trip or way of travelling could add a completely new dimension to your travel story.';
      }
      if(components.world>=55 && components.depth<48 && multiStop<=Math.max(1,Math.floor(tripCount*.2))){
        return 'You’ve explored broadly and built a strong footprint. Going deeper could be your next frontier - a longer or multi-stop adventure would add something your travel history currently has less of.';
      }
      if(repeatCount>countryCount*.7 && components.discovery<55){
        return 'You clearly have places worth returning to, but repeat visits now add less to your score than fresh discoveries. Somewhere completely new would make a bigger difference to your travel story.';
      }
      if(countryCount>=12 && continentCount<=2){
        return 'You’ve explored plenty of destinations, but most sit within the same part of the world. A new continent would add more breadth now than simply adding another nearby country.';
      }
      if(styleCount<=2 && tripCount>=6){
        return 'You’ve built plenty of travel experience, but your trips follow a fairly consistent style. Trying a different kind of adventure would add more variety than simply doing more of the same.';
      }
      if(modeCount<=2 && tripCount>=6 && components.variety<55){
        return 'Your travel history is growing nicely, but the way you get around is still fairly familiar. A different mode of travel could add a new dimension without needing to chase another country.';
      }
      if(spread<16 && values[values.length-1]>=55){
        return 'There isn’t one obvious gap in your travel story anymore. From here, your score grows through breadth, depth and variety together rather than any single type of trip.';
      }
      return {
        world:'Your travel experience is established, but geographical breadth is the area with most room to grow. A genuinely new part of the map would add more now than another familiar destination.',
        variety:'Your map is building well, but there is more room to vary how you experience it. A different trip style or way of travelling would add something your current travel story has less of.',
        depth:'You’ve collected destinations well; the bigger opportunity now is depth. Exploring more than one place within a trip would add more than simply ticking off another stop.',
        momentum:'You have a varied travel story already. Building it across more trips and travel years is now the area with the most room to grow - and your existing score will never decay while you do.',
        discovery:'You’ve built experience through both new and familiar places. At this point, a fresh destination would add more to your discovery score than another return visit.'
      }[weakest.key];
    }
    const recommendation=recommendationFor();
    const party=[...e.partyContexts].map(x=>x==='solo'?'solo':x==='duo'?'two-person':'group').join(', ');
    const evidence={
      world:`${e.countries.size} ${e.countries.size===1?'country':'countries'} · ${e.continents.size} ${e.continents.size===1?'continent':'continents'} · ${(e.countries.size/195*100).toFixed(1)}% of world`,
      variety:`${e.vibes.size} trip ${e.vibes.size===1?'style':'styles'} · ${e.modes.size} transport ${e.modes.size===1?'mode':'modes'}${party?` · ${e.partyContexts.size} travel ${e.partyContexts.size===1?'context':'contexts'}`:''}`,
      depth:`${e.cities.size} ${e.cities.size===1?'city/stop':'cities/stops'} · ${e.multiStopTrips} multi-stop ${e.multiStopTrips===1?'trip':'trips'} · ${e.repeatTouches} repeat destination ${e.repeatTouches===1?'visit':'visits'}`,
      momentum:`${e.trips.length} completed ${e.trips.length===1?'trip':'trips'} · travel recorded across ${e.years.size} ${e.years.size===1?'year':'years'}`,
      discovery:`${e.countries.size} unique ${e.countries.size===1?'country':'countries'} across ${e.countryTouches||0} recorded country ${e.countryTouches===1?'visit':'visits'}`
    };
    return {modelVersion:MODEL_VERSION,score,band:level.title,strengthText,recommendation,components,evidence,awardedPoints};
  }
  function ensureTravelScore(){
    const name=$('#passportName');if(!name)return;
    let card=$('#travelHealthCard');
    if(!card){card=document.createElement('section');card.id='travelHealthCard';card.className='travel-health-card';const anchor=name.closest('.passport-name-card,.passport-name,.name-card,.passport-profile-name')||name.parentElement;anchor?.insertAdjacentElement('afterend',card)}
    const d=travelScoreData(),angle=-90+(d.score/100)*180;
    card.innerHTML=`<div class="travel-health-kicker" data-score-fit>YOUR TRAVEL SCORE: ${d.band}</div><div class="travel-health-gauge"><div class="travel-health-arc"></div><div class="travel-health-mask"></div><div class="travel-health-needle" data-score-needle style="transform:translateX(-50%) rotate(${angle}deg)"></div><div class="travel-health-score"><strong data-score-number>${d.score}</strong><span>/ 100</span></div></div><div class="travel-score-guidance"><details class="travel-guidance-details ww-score-accordion"><summary>Strengths</summary><p>${d.strengthText}</p></details><details class="travel-guidance-details ww-score-accordion"><summary>Recommendations</summary><p>${d.recommendation}</p><p class="travel-score-history-tip"><strong>Tip:</strong> Add your past trips too. The more of your travel history you add to WozzaWorld, the more accurate your Travel Score and stats will be.</p></details></div><details class="travel-score-details ww-score-accordion"><summary>How is my score calculated?</summary><div class="travel-score-breakdown">${Object.keys(FACTORS).map(k=>`<div class="travel-score-factor"><div><b>${FACTORS[k].label}</b></div><p>${d.evidence[k]} = ${Number.isInteger(d.awardedPoints[k])?d.awardedPoints[k]:d.awardedPoints[k].toFixed(1)} out of ${Math.round(FACTORS[k].weight*100)} points</p></div>`).join('')}</div></details>`;
  }
  // Match Roadmap: one score accordion expanded at a time; native details retain accessibility.
  document.addEventListener('toggle',event=>{
    const opened=event.target;
    if(!(opened instanceof HTMLDetailsElement)||!opened.open||!opened.matches('#travelHealthCard .ww-score-accordion'))return;
    document.querySelectorAll('#travelHealthCard .ww-score-accordion[open]').forEach(item=>{if(item!==opened)item.open=false});
  },true);
  const css=document.createElement('style');css.id='wozza-travel-score-v2-style';css.textContent=`
    .travel-health-card{margin:14px 0 22px;padding:18px 18px 16px;border-radius:22px;background:rgba(255,255,255,.92);box-shadow:0 10px 26px rgba(8,62,78,.13);text-align:center;color:#073f52;overflow:hidden;width:auto;max-width:none;}
    .travel-health-kicker{font-weight:900;letter-spacing:1.25px;font-size:clamp(9px,3.05vw,13px);margin-bottom:6px;white-space:nowrap;width:100%;overflow:visible}.travel-health-gauge{position:relative;width:min(280px,86vw);height:150px;margin:0 auto -2px;overflow:hidden}.travel-health-arc{position:absolute;left:50%;bottom:-122px;width:250px;height:250px;transform:translateX(-50%);border-radius:50%;background:conic-gradient(from 270deg,#d9534f 0deg,#e78a3c 48deg,#d9b43b 90deg,#72a85a 135deg,#08788b 180deg,transparent 180deg)}.travel-health-mask{position:absolute;left:50%;bottom:-94px;width:194px;height:194px;transform:translateX(-50%);border-radius:50%;background:#fff;clip-path:inset(0 0 28px 0)}.travel-health-needle{position:absolute;left:50%;bottom:19px;width:3px;height:91px;background:#073f52;border-radius:4px;transform-origin:50% 100%;transition:transform .65s ease}.travel-health-score{position:absolute;left:50%;bottom:27px;transform:translateX(-50%);display:flex;align-items:center;gap:3px;background:#fff;padding:1px 7px;border-radius:10px;}.travel-health-score strong{font-size:31px;line-height:1;font-weight:950}.travel-health-score span{font-size:11px;font-weight:800;opacity:.55}.travel-health-band{font-weight:950;font-size:18px;letter-spacing:.6px;margin-top:8px}.travel-score-guidance{text-align:left;font-size:12.5px;line-height:1.45;margin:9px auto 0;max-width:330px;color:#315d69;display:grid;gap:9px}.travel-guidance-details,.travel-score-details{margin:0 auto;max-width:330px;width:100%;text-align:left;border:1px solid #c4e0e2;border-radius:14px;background:#fff;overflow:hidden;padding:0;box-sizing:border-box}.travel-score-details{margin-top:9px}.travel-guidance-details summary,.travel-score-details summary{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none;cursor:pointer;padding:15px 16px;color:#14505a;font-size:15px;font-weight:750;user-select:none;min-height:0;box-sizing:border-box}.travel-guidance-details summary::-webkit-details-marker,.travel-score-details summary::-webkit-details-marker{display:none}.travel-guidance-details summary::after,.travel-score-details summary::after{content:'';display:block;flex:none;width:9px;height:9px;border-right:2px solid #137784;border-bottom:2px solid #137784;transform:rotate(45deg);transition:transform .15s ease;margin-right:4px;margin-top:-5px}.travel-guidance-details[open] summary::after,.travel-score-details[open] summary::after{transform:rotate(225deg);margin-top:5px}.travel-guidance-details[open] summary,.travel-score-details[open] summary{border-bottom:1px solid #e0eeee;background:#edf8f8}.travel-guidance-details>p{margin:0;padding:13px 16px 4px;color:#315d69}.travel-guidance-details>p:last-child{padding-bottom:15px}.travel-score-breakdown{padding:13px 16px 10px}.travel-score-factor{padding:8px 0;border-top:1px solid rgba(7,63,82,.09)}.travel-score-factor>div{display:flex;justify-content:space-between;gap:12px;align-items:baseline}.travel-score-factor b{font-size:12px}.travel-score-factor span{font-size:10px;font-weight:900;opacity:.55}.travel-score-factor p,.travel-score-note{margin:3px 0 0;font-size:11px;line-height:1.35;color:#52727b}.travel-score-note{margin-top:8px;font-style:italic}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  const originalRender=window.render;if(typeof originalRender==='function'){window.render=function(){const r=originalRender.apply(this,arguments);requestAnimationFrame(ensureTravelScore);return r}}requestAnimationFrame(ensureTravelScore);
})();


/* Travel Score presentation v3 — visibility-triggered, isolated from swipe navigation */
(()=>{
  if(window.__wozzaScorePresentationV3)return;window.__wozzaScorePresentationV3=true;
  let played=false,observer=null;

  function fitHeading(card){
    const el=card&&card.querySelector('[data-score-fit]');
    if(!el)return;
    el.style.whiteSpace='nowrap';
    el.style.overflow='visible';
    el.style.width='100%';
    /* Measure the COMPLETE string at a known size, then scale proportionally. */
    const testSize=20;
    el.style.fontSize=testSize+'px';
    const textWidth=el.scrollWidth;
    const available=el.clientWidth;
    if(!textWidth||!available)return;
    const fitted=Math.max(9,Math.min(24,testSize*(available/textWidth)*0.985));
    el.style.fontSize=fitted.toFixed(2)+'px';
  }

  function animate(card){
    if(played||!card)return;
    const needle=card.querySelector('[data-score-needle]');
    const number=card.querySelector('[data-score-number]');
    if(!needle||!number)return;
    const target=Math.max(0,Math.min(100,parseInt(number.textContent,10)||0));
    played=true;
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

    /* Force a real zero frame first. */
    needle.style.transition='none';
    needle.style.transform='translateX(-50%) rotate(-90deg)';
    number.textContent='0';

    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>{
        const duration=1450,start=performance.now(),targetAngle=-90+(target/100)*180;
        const tick=now=>{
          const p=Math.min(1,(now-start)/duration);
          const eased=1-Math.pow(1-p,3);
          number.textContent=String(Math.round(target*eased));
          needle.style.transform=`translateX(-50%) rotate(${-90+(targetAngle+90)*eased}deg)`;
          if(p<1)requestAnimationFrame(tick);
          else{
            number.textContent=String(target);
            needle.style.transform=`translateX(-50%) rotate(${targetAngle}deg)`;
          }
        };
        requestAnimationFrame(tick);
      });
    });
  }

  function inspect(){
    const card=document.querySelector('.passport-insights .travel-health-card, .passport-insights-shell .travel-health-card');
    if(!card)return false;
    fitHeading(card);
    if(!observer&&'IntersectionObserver' in window){
      observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting&&entry.intersectionRatio>0.25){
            fitHeading(card);animate(card);
          }
        });
      },{threshold:[0.25]});
      observer.observe(card);
    }else if(!observer){
      /* Fallback for browsers without IntersectionObserver. */
      const r=card.getBoundingClientRect();
      if(r.bottom>0&&r.top<window.innerHeight)animate(card);
    }
    return true;
  }

  const mo=new MutationObserver(()=>{if(inspect()&&played)mo.disconnect()});
  mo.observe(document.documentElement,{childList:true,subtree:true});
  requestAnimationFrame(inspect);
  window.addEventListener('resize',()=> {
    const card=document.querySelector('.passport-insights .travel-health-card, .passport-insights-shell .travel-health-card');
    if(card)fitHeading(card);
  },{passive:true});
})();

/* v0.19.0 — Passport Travel Insights: icon tabs + Home-style active sag */
(()=>{
  if(window.__wozzaPassportInsightsV1)return;window.__wozzaPassportInsightsV1=true;
  const ICONS={
    score:'<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M8 39a24 24 0 0 1 48 0"/><path d="M32 39 44 19"/><circle cx="32" cy="39" r="3"/></svg>',
    stats:'<svg viewBox="0 0 64 48" aria-hidden="true"><rect x="14" y="10" width="36" height="32" rx="5"/><path d="M25 10V7h14v3M22 20l3 3 5-6M34 21h9M22 30l3 3 5-6M34 31h9"/></svg>',
    charts:'<svg viewBox="0 0 64 48" aria-hidden="true"><path d="M13 8v32h40"/><path d="M22 34V23M32 34V15M42 34V20M52 34V11"/></svg>'
  };
  function setup(){
    const screen=document.querySelector('.screen[data-screen="me"]'),score=document.getElementById('travelHealthCard'),grid=screen?.querySelector('.stats-grid'),charts=screen?.querySelector('.passport-stats-carousel'),milestones=document.getElementById('milestonesCard');
    if(!screen||!score||!grid||!charts||!milestones)return false;
    let shell=document.getElementById('passportInsights');
    if(!shell){
      shell=document.createElement('section');shell.id='passportInsights';shell.className='passport-insights';
      shell.innerHTML='<div class="passport-insights-title">TRAVEL INSIGHTS</div><div class="passport-insights-tabs" role="tablist" aria-label="Travel insights"><button type="button" class="passport-insights-tab is-active" data-insights-tab="score" role="tab" aria-selected="true" aria-label="Travel score">'+ICONS.score+'<span class="insights-underline"></span></button><button type="button" class="passport-insights-tab" data-insights-tab="stats" role="tab" aria-selected="false" aria-label="Stats">'+ICONS.stats+'<span class="insights-underline"></span></button><button type="button" class="passport-insights-tab" data-insights-tab="charts" role="tab" aria-selected="false" aria-label="Charts">'+ICONS.charts+'<span class="insights-underline"></span></button></div><div class="passport-insights-body"></div>';
      score.before(shell);const body=shell.querySelector('.passport-insights-body');
      [score,grid,charts].forEach((el,i)=>{const panel=document.createElement('div');panel.className='passport-insights-panel'+(i===0?' is-active':'');panel.dataset.insightsPanel=['score','stats','charts'][i];panel.hidden=i!==0;body.appendChild(panel);if(i===1){const h=document.createElement('div');h.className='passport-quick-stats-heading';h.textContent='QUICK STATS';panel.appendChild(h)}panel.appendChild(el)});
      shell.after(milestones);
      screen.querySelectorAll('.passport-section-heading').forEach(h=>{if(/^(STATS|CHARTS)$/i.test(h.textContent.trim()))h.hidden=true});
      const choose=key=>{
        shell.querySelectorAll('.passport-insights-tab').forEach(b=>{const on=b.dataset.insightsTab===key;b.classList.toggle('is-active',on);b.setAttribute('aria-selected',on?'true':'false')});
        shell.querySelectorAll('.passport-insights-panel').forEach(p=>{const on=p.dataset.insightsPanel===key;p.classList.toggle('is-active',on);p.hidden=!on});
        try{sessionStorage.setItem('wozza-passport-insights-tab',key)}catch(e){}
      };
      shell.querySelectorAll('.passport-insights-tab').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.insightsTab)));
      let remembered='score';try{remembered=sessionStorage.getItem('wozza-passport-insights-tab')||'score'}catch(e){}if(!['score','stats','charts'].includes(remembered))remembered='score';choose(remembered);
    }else{
      screen.querySelectorAll('.passport-section-heading').forEach(h=>{if(/^(STATS|CHARTS)$/i.test(h.textContent.trim()))h.hidden=true});
      if(milestones.previousElementSibling!==shell)shell.after(milestones);
    }
    return true;
  }
  const css=document.createElement('style');css.id='wozza-passport-insights-style';css.textContent=`
    .passport-insights{margin:14px 0 22px;padding:18px 16px 16px;border-radius:26px;background:rgba(239,248,249,.76);border:1px solid rgba(255,255,255,.5);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 8px 22px rgba(0,53,68,.09);-webkit-backdrop-filter:blur(12px) saturate(115%);backdrop-filter:blur(12px) saturate(115%);color:#073f52;overflow:hidden}
    .passport-insights-title{font-family:"Archivo Black",Impact,sans-serif;font-size:clamp(20px,6vw,29px);font-weight:950;letter-spacing:.02em;margin:0 4px 8px;color:#073f52}
    .passport-insights-tabs{display:grid;grid-template-columns:repeat(3,1fr);align-items:end;gap:8px;margin:0 2px 14px}
    .passport-insights-tab{appearance:none;border:0;background:transparent;padding:3px 7px 13px;min-height:72px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:5px;color:#073f52;cursor:pointer;position:relative;-webkit-tap-highlight-color:transparent}
    .passport-insights-tab svg{width:50px;height:40px;overflow:visible;fill:none;stroke:currentColor;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;transition:transform .22s ease,opacity .22s ease;opacity:.72}
    .passport-insights-tab.is-active svg{transform:translateY(-2px);opacity:1}
    .insights-underline{position:absolute;left:8%;right:8%;bottom:1px;height:8px;border-radius:999px;background:#f2ad21;transition:height .24s ease,border-radius .24s ease,transform .24s ease;transform-origin:center top}
    .passport-insights-tab[data-insights-tab="stats"] .insights-underline{background:#16b98f}.passport-insights-tab[data-insights-tab="charts"] .insights-underline{background:#16bfd1}
    .insights-underline:after{content:"";position:absolute;left:50%;top:3px;width:0;height:0;transform:translateX(-50%);background:inherit;border-radius:0 0 999px 999px;transition:width .25s ease,height .25s ease,top .25s ease,border-radius .25s ease}
    .passport-insights-tab.is-active .insights-underline:after{width:28px;height:17px;top:1px;border-radius:4px 4px 18px 18px;transform:translateX(-50%) rotate(45deg);clip-path:polygon(0 0,100% 100%,0 100%)}
    .passport-insights-tab.is-active .insights-underline{height:8px}
    .passport-insights-panel[hidden]{display:none!important}.passport-insights-panel.is-active{display:block}
    .passport-insights .travel-health-card{margin:0!important;padding:10px 2px 4px!important;border-radius:0!important;background:transparent!important;box-shadow:none!important;overflow:visible!important}
    .passport-insights .travel-health-kicker{margin-top:2px}
    .passport-quick-stats-heading{font-family:"Archivo Black",Impact,sans-serif;font-size:clamp(16px,4.5vw,20px);font-weight:950;letter-spacing:.075em;color:#07546a;margin:2px 4px 16px;text-transform:uppercase}
    .passport-insights .stats-grid{margin:2px 0 0!important}
    .passport-insights .passport-stats-carousel{margin:2px 0 0!important;background:rgba(255,255,255,.22)!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{border-radius:22px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-charts-heading{display:none!important}
    @media(max-width:380px){.passport-insights{padding:16px 12px 14px}.passport-insights-tabs{gap:3px}.passport-insights-tab{min-height:66px;padding-left:4px;padding-right:4px}.passport-insights-tab svg{width:44px;height:36px}}
    @media(prefers-reduced-motion:reduce){.passport-insights-tab svg,.insights-underline,.insights-underline:after{transition:none!important}}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  let tries=0;const timer=setInterval(()=>{if(setup()||++tries>30)clearInterval(timer)},80);requestAnimationFrame(setup);
  const observer=new MutationObserver(()=>setup());const me=document.querySelector('.screen[data-screen="me"]');if(me)observer.observe(me,{childList:true,subtree:false});
})();

/* v0.19.1 — Travel Insights corrective polish: reuse Home sag blueprint, swipe tabs, branded assets, chart buttons */
(()=>{
  if(window.__wozzaPassportInsightsV2)return;window.__wozzaPassportInsightsV2=true;
  const keys=['score','stats','charts'];
  const iconFiles={score:'travel-score-icon.png',stats:'stats-icon.png',charts:'charts-icon.png'};
  const straight='M3 5 C28 5 36 5 42 5 C46 5 47 5 50 5 C53 5 54 5 58 5 C64 5 72 5 97 5';
  const sag='M3 5 C28 5 35 5 40 6 C44 7 45 15 50 15 C55 15 56 7 60 6 C65 5 72 5 97 5';
  let chartObserver=null,insightsObserver=null;

  function activeKey(shell){return shell.querySelector('.passport-insights-tab.is-active')?.dataset.insightsTab||'score'}
  function setSag(shell,key,animate=true){
    shell.querySelectorAll('.passport-insights-tab').forEach(btn=>{
      const p=btn.querySelector('.insights-sag-path');if(!p)return;
      if(!animate){p.style.transition='none';p.setAttribute('d',btn.dataset.insightsTab===key?sag:straight);p.getBoundingClientRect();p.style.transition=''}
      else p.setAttribute('d',btn.dataset.insightsTab===key?sag:straight);
    });
  }
  function choose(shell,key){
    const btn=shell.querySelector(`.passport-insights-tab[data-insights-tab="${key}"]`);if(!btn)return;
    btn.click();setSag(shell,key,true);
  }
  function installIconsAndSag(shell){
    shell.querySelectorAll('.passport-insights-tab').forEach(btn=>{
      const key=btn.dataset.insightsTab;
      if(!btn.querySelector('.insights-brand-icon')){
        btn.querySelector('svg')?.remove();
        const img=document.createElement('img');img.className='insights-brand-icon';img.src=iconFiles[key];img.alt='';img.setAttribute('aria-hidden','true');btn.prepend(img);
      }
      let old=btn.querySelector('.insights-underline');
      if(old&&!old.classList.contains('insights-home-sag')){
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 100 22');svg.setAttribute('aria-hidden','true');svg.classList.add('insights-underline','insights-home-sag');
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',straight);p.classList.add('insights-sag-path');svg.appendChild(p);old.replaceWith(svg);
      }
    });
    setSag(shell,activeKey(shell),false);
  }
  function installInsightSwipe(shell){
    if(shell.dataset.swipeV2)return;shell.dataset.swipeV2='1';
    const body=shell.querySelector('.passport-insights-body');if(!body)return;
    let sx=0,sy=0,tracking=false;
    const chartInfo=()=>{
      const track=document.getElementById('passportStatsTrack');
      const slides=track?[...track.querySelectorAll('.passport-stats-slide')]:[];
      let index=(typeof passportStatsSlide==='number')?passportStatsSlide:0;
      index=Math.max(0,Math.min(index,Math.max(0,slides.length-1)));
      return {slides,index,last:Math.max(0,slides.length-1)};
    };
    body.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;sx=e.clientX;sy=e.clientY;tracking=true},{passive:true});
    body.addEventListener('pointerup',e=>{
      if(!tracking)return;tracking=false;
      const dx=e.clientX-sx,dy=e.clientY-sy;
      if(Math.abs(dx)<48||Math.abs(dx)<=Math.abs(dy)*1.2)return;
      const forward=dx<0,key=activeKey(shell);
      /* Exact circular order:
         left/forward:  score > stats > chart 1 > ... > last chart > score
         right/back:    score < stats < chart 1 < ... < last chart < score
         Note: the real middle-tab key is "stats" (not "quick"). */
      if(key==='charts'){
        const c=chartInfo();
        if(forward&&c.index<c.last){
          setPassportStatsSlide(c.index+1);queueMicrotask(rebuildChartButtons);return;
        }
        if(!forward&&c.index>0){
          setPassportStatsSlide(c.index-1);queueMicrotask(rebuildChartButtons);return;
        }
        if(forward){
          choose(shell,'score');return;
        }
        choose(shell,'stats');return;
      }
      if(key==='score'){
        if(forward){
          choose(shell,'stats');return;
        }
        choose(shell,'charts');
        const c=chartInfo();setPassportStatsSlide(c.last);queueMicrotask(rebuildChartButtons);return;
      }
      if(key==='stats'){
        if(forward){
          choose(shell,'charts');setPassportStatsSlide(0);queueMicrotask(rebuildChartButtons);return;
        }
        choose(shell,'score');return;
      }
    },{passive:true});
    body.addEventListener('pointercancel',()=>{tracking=false},{passive:true});
  }
  function enforceChartOrder(){
    const track=document.getElementById('passportStatsTrack');if(!track)return;
    const slides=[...track.querySelectorAll('.passport-stats-slide')];if(slides.length<2)return;
    const title=slide=>String(slide.querySelector('h4')?.textContent||'').trim().toLowerCase();
    const companion=slides.find(s=>title(s).includes('travel companions'));
    if(companion?.querySelector('h4'))companion.querySelector('h4').textContent='TOP 10 TRAVEL COMPANIONS';
    const countries=slides.find(s=>title(s).includes('most visited countries'));
    if(countries?.querySelector('h4'))countries.querySelector('h4').textContent='TOP 10 MOST VISITED COUNTRIES';
    const stops=slides.find(s=>title(s)==='stops per year');
    const mostVisited=slides.find(s=>title(s).includes('most visited destinations'));
    const pinned=new Set([companion,stops,mostVisited].filter(Boolean));
    const middle=slides.filter(s=>!pinned.has(s));
    const ordered=[companion,stops,...middle,mostVisited].filter(Boolean);
    if(ordered.length!==slides.length)return;
    if(ordered.some((slide,i)=>slide!==slides[i])){ordered.forEach(slide=>track.appendChild(slide));if(typeof setPassportStatsSlide==='function')setPassportStatsSlide(0);}
  }
  function rebuildChartButtons(){
    const dots=document.getElementById('passportStatsDots'),track=document.getElementById('passportStatsTrack');if(!dots||!track)return;
    const slides=[...track.querySelectorAll('.passport-stats-slide')];if(!slides.length)return;
    const active=Math.max(0,slides.findIndex(s=>s.classList.contains('is-active')));
    if(dots.querySelectorAll('.passport-chart-dot-btn').length!==slides.length){
      dots.textContent='';slides.forEach((slide,i)=>{const b=document.createElement('button');b.type='button';b.className='passport-chart-dot-btn';b.setAttribute('aria-label',`Show chart ${i+1}`);b.onclick=e=>{e.stopPropagation();if(typeof setPassportStatsSlide==='function')setPassportStatsSlide(i);queueMicrotask(rebuildChartButtons)};dots.appendChild(b)});
    }
    [...dots.querySelectorAll('.passport-chart-dot-btn')].forEach((b,i)=>{const on=i===active;b.classList.toggle('is-active',on);b.setAttribute('aria-current',on?'true':'false')});
    // Charts no longer own horizontal swipe; Travel Insights owns it.
    track.onpointerdown=null;track.onpointerup=null;track.onpointercancel=null;track.style.touchAction='pan-y';
  }
  function watchCharts(){
    const dots=document.getElementById('passportStatsDots'),track=document.getElementById('passportStatsTrack');if(!dots||!track)return;
    enforceChartOrder();rebuildChartButtons();
    /* Charts show their full top 10; expand controls are obsolete. */
    track.querySelectorAll('.is-stat-hidden').forEach(row=>row.classList.remove('is-stat-hidden'));
    track.querySelectorAll('.stats-show-more,.companion-more').forEach(btn=>btn.remove());
    const carousel=track.closest('.passport-stats-carousel');
    if(carousel&&dots.parentElement!==carousel)carousel.appendChild(dots);
    else if(carousel&&dots!==carousel.lastElementChild)carousel.appendChild(dots);
    if(!chartObserver){chartObserver=new MutationObserver(()=>queueMicrotask(rebuildChartButtons));chartObserver.observe(dots,{childList:true,characterData:true,subtree:true});chartObserver.observe(track,{attributes:true,subtree:true,attributeFilter:['class']})}
  }
  function apply(){
    const shell=document.getElementById('passportInsights');if(!shell)return false;
    installIconsAndSag(shell);installInsightSwipe(shell);watchCharts();
    if(!insightsObserver){insightsObserver=new MutationObserver(()=>setSag(shell,activeKey(shell),true));shell.querySelector('.passport-insights-tabs')&&insightsObserver.observe(shell.querySelector('.passport-insights-tabs'),{attributes:true,subtree:true,attributeFilter:['class']})}
    return true;
  }
  clearInterval(passportStatsAutoTimer);restartPassportStatsAuto=function(){clearInterval(passportStatsAutoTimer);passportStatsAutoTimer=0};
  const css=document.createElement('style');css.id='wozza-passport-insights-v2-style';css.textContent=`
    .passport-insights{background:rgba(255,255,255,.94)!important;border:1px solid rgba(255,255,255,.48)!important;color:#17213D!important}
    .passport-insights-title{color:#17213D!important}
    .passport-insights-tab{color:#17213D!important}
    .passport-insights-tab .insights-brand-icon{display:block;height:50px;object-fit:contain;opacity:.82;transition:transform .22s ease,opacity .22s ease;pointer-events:none;position:absolute;bottom:22px;left:50%;transform:translateX(-50%)}
    .passport-insights-tab[data-insights-tab="score"] .insights-brand-icon{width:58px;bottom:16px}
    .passport-insights-tab[data-insights-tab="stats"] .insights-brand-icon{width:51px}
    .passport-insights-tab[data-insights-tab="charts"] .insights-brand-icon{width:46px;height:47px;bottom:17px}
    .passport-insights-tab.is-active .insights-brand-icon{transform:translateX(-50%) translateY(-2px);opacity:1}
    .passport-insights-tab>svg:not(.insights-home-sag){display:none!important}
    .passport-insights-tab .insights-home-sag{position:absolute!important;left:8%!important;right:8%!important;bottom:-5px!important;width:84%!important;height:22px!important;overflow:visible!important;background:none!important;border-radius:0!important;transform:none!important}
    .passport-insights-tab .insights-home-sag:after{display:none!important;content:none!important}
    .passport-insights-tab .insights-sag-path{fill:none!important;stroke:#F2AD21;stroke-width:6!important;stroke-linecap:round!important;stroke-linejoin:round!important;vector-effect:non-scaling-stroke!important;transition:d .44s cubic-bezier(.22,.78,.24,1)!important}
    .passport-insights-tab[data-insights-tab="stats"] .insights-sag-path{stroke:#16B98F!important}
    .passport-insights-tab[data-insights-tab="charts"] .insights-sag-path{stroke:#16BFD1!important}
    .passport-insights-body{touch-action:pan-y}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{background:transparent!important;border:0!important;box-shadow:none!important;-webkit-backdrop-filter:none!important;backdrop-filter:none!important;border-radius:0!important;margin:0!important;padding-left:0!important;padding-right:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide{background:transparent!important;border:0!important;box-shadow:none!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-head{height:34px!important;min-height:34px!important;margin:0 0 6px!important;position:relative!important;display:flex!important;justify-content:center!important;align-items:center!important}
    .passport-insights-panel[data-insights-panel="charts"] #passportStatsDots{position:static!important;transform:none!important;display:flex!important;justify-content:center!important;align-items:center!important;gap:9px!important;letter-spacing:0!important;width:100%!important;margin:22px 0 4px!important;padding:0!important;order:99!important}
    .passport-chart-dot-btn{appearance:none;width:13px;height:13px;min-width:13px;padding:0;border-radius:50%;border:2px solid rgba(0,151,167,.62);background:rgba(0,151,167,.08);box-shadow:none;transition:transform .18s ease,background .18s ease,border-color .18s ease;-webkit-tap-highlight-color:transparent}
    .passport-chart-dot-btn.is-active{background:rgba(0,151,167,.72);border-color:rgba(0,151,167,.88);transform:scale(1.12)}

    /* v0.19.2 — Travel Insights visual alignment + chart polish */
    /* v0.19.3 — pull chart content up under the insight tabs; no dead top padding. */
    .passport-insights-panel[data-insights-panel="charts"]{margin-top:-42px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-carousel{padding:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .stats-show-more{display:none!important}
    .passport-insights-panel[data-insights-panel="charts"] .is-stat-hidden{display:grid!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-track{padding:0!important;margin:0!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide{padding:0 1px 4px!important}
    .passport-insights-panel[data-insights-panel="charts"] .passport-stats-slide h4,
    .passport-insights-panel[data-insights-panel="charts"] #highestRatedStatsSlide h4{
      max-width:none!important;padding:0!important;margin:4px 0 16px!important;
      text-align:center!important;text-transform:uppercase!important;
      font-family:inherit!important;font-size:13px!important;line-height:1.2!important;
      font-weight:900!important;letter-spacing:1.6px!important;color:#073f52!important;
    }
    /* Keep the proven gauge mask geometry, but blend it into the Insights panel. */
    .passport-insights .travel-health-arc{-webkit-mask:none!important;mask:none!important}
    .passport-insights .travel-health-mask{display:block!important;background:#f4fbfc!important}
    .passport-insights .travel-health-score{background:#f4fbfc!important;padding:1px 8px!important;border-radius:10px!important}
    .passport-insights-panel[data-insights-panel="charts"] .trips-per-year-chart circle,
    .passport-insights-panel[data-insights-panel="charts"] .trip-year-value{display:none!important}

    @media(max-width:380px){
      .passport-insights-tab .insights-brand-icon{height:45px}
      .passport-insights-tab[data-insights-tab="score"] .insights-brand-icon{width:52px}
      .passport-insights-tab[data-insights-tab="stats"] .insights-brand-icon{width:46px}
      .passport-insights-tab[data-insights-tab="charts"] .insights-brand-icon{width:41px;height:42px;bottom:17px}
    }
    @media(prefers-reduced-motion:reduce){.passport-insights-tab .insights-sag-path,.passport-insights-tab .insights-brand-icon,.passport-chart-dot-btn{transition:none!important}}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  let tries=0;const t=setInterval(()=>{if(apply()||++tries>40)clearInterval(t)},100);requestAnimationFrame(apply);
})();

/* v0.19.4 — Passport divider, backup/restore placeholder, chart expand spacing */
(()=>{
  if(window.__wozzaPassportFinalPolishV194)return;window.__wozzaPassportFinalPolishV194=true;

  const css=document.createElement('style');
  css.id='wozza-passport-final-polish-v194';
  css.textContent=`
    /* Home-list style divider beneath the Travel Insights icon row. */
    .passport-insights-tabs{
      border-bottom:1px solid rgba(23,33,61,.12)!important;
      padding-bottom:10px!important;
      margin-bottom:14px!important;
    }

    /* Charts always show up to 10 rows; no expand control is needed. */
    .passport-insights-panel[data-insights-panel="charts"] .stats-show-more,
    .passport-insights-panel[data-insights-panel="charts"] .companion-more{display:none!important;}

    /* Balance the Backup & Restore control against Recycle Bin. */
    .recycle-launch{width:100%!important;justify-content:space-between!important;position:relative!important}
    .backup-restore-icon-btn{flex:0 0 42px}
    .backup-restore-icon-btn img{width:22px;height:22px;object-fit:contain;display:block}
    .backup-restore-dialog .backup-last-date{margin:4px 0 20px!important;color:var(--muted)!important;font-size:14px!important;line-height:1.5!important}
    .backup-restore-actions{display:grid;gap:10px}
    .backup-restore-actions button{width:100%;border:0;border-radius:999px;padding:12px 16px;background:#dcebed;color:var(--navy);font-weight:800;box-shadow:0 5px 16px rgba(16,33,63,.08)}
    .backup-restore-actions button:first-child{background:#e9bf2e}
    .backup-restore-dialog form{position:relative}
    .backup-restore-dialog::backdrop{background:rgba(7,36,46,.48)!important;backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important}
    .backup-safe-note{margin:14px 4px 0!important;color:#7b8589!important;font-size:11.5px!important;line-height:1.45!important;text-align:left!important}
  `;
  document.getElementById(css.id)?.remove();document.head.appendChild(css);

  function installBackupButton(){
    const launch=document.querySelector('.recycle-launch');
    if(!launch||document.getElementById('openBackupRestore'))return;
    const btn=document.createElement('button');
    btn.type='button';btn.id='openBackupRestore';btn.className='recycle-icon-btn backup-restore-icon-btn';
    btn.setAttribute('aria-label','Backup and restore');btn.title='Backup and restore';
    btn.innerHTML='<img src="backup-restore-icon.png" alt="" aria-hidden="true">';
    btn.addEventListener('click',()=>document.getElementById('backupRestoreDialog')?.showModal());
    launch.insertBefore(btn,launch.firstChild);
  }

  let tries=0;const timer=setInterval(()=>{
    installBackupButton();
    if(document.querySelector('.recycle-launch')&&document.getElementById('passportStatsTrack'))clearInterval(timer);
    if(++tries>30)clearInterval(timer);
  },100);
  document.getElementById('closeBackupRestoreDialog')?.addEventListener('click',()=>document.getElementById('backupRestoreDialog')?.close());
  requestAnimationFrame(()=>{installBackupButton();});
})();


/* Travel Insights polish v6: visual icon motion + modal backdrop only.
   No swipe/touch/navigation/sag handlers are changed. */
(()=>{
 if(window.__wozzaInsightsPolishV6)return;window.__wozzaInsightsPolishV6=true;
 const st=document.createElement('style');st.id='wozza-insights-polish-v6';
 st.textContent=`
   /* Travel Insights dialogs: consistent dim + blur. */
   #passportStatDialog::backdrop{
     background:rgba(5,34,51,.34)!important;
     backdrop-filter:blur(7px)!important;
     -webkit-backdrop-filter:blur(7px)!important;
   }

   /* Score visual replacement. */
   .passport-insights-tab[data-insights-tab="score"]>.insights-brand-icon{display:none!important}
   .meter-v6{display:block;width:58px;height:50px;position:absolute;bottom:16px;left:50%;transform:translateX(-50%);opacity:.82;pointer-events:none;transition:transform .22s ease,opacity .22s ease}
   .passport-insights-tab[data-insights-tab="score"].is-active .meter-v6{transform:translateX(-50%) translateY(-2px);opacity:1}
   .meter-v6 img,.chart-v6 img{position:absolute;inset:0;width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;pointer-events:none!important}
   .needle-v6{transform:rotate(0deg);transform-origin:50% 68%!important;will-change:transform}
   .needle-v6.go-v6{animation:meterSweepV6 2.05s linear both}
   /* Main sweep gets most of the duration; small flicks happen only near the end. */
   @keyframes meterSweepV6{
     0%{transform:rotate(-82deg)}
     18%{transform:rotate(-64deg)}
     36%{transform:rotate(-45deg)}
     54%{transform:rotate(-27deg)}
     69%{transform:rotate(-10deg)}
     78%{transform:rotate(7deg)}
     84%{transform:rotate(-5deg)}
     89%{transform:rotate(3.5deg)}
     94%{transform:rotate(-2deg)}
     97%{transform:rotate(1deg)}
     100%{transform:rotate(0deg)}
   }

   /* Approved clipboard wiggle unchanged. */
   .passport-insights-tab[data-insights-tab="stats"]>.insights-brand-icon.clip-v6{animation:clipV6 .72s ease-in-out;transform-origin:50% 58%}
   @keyframes clipV6{0%{transform:translateX(-50%) translateY(-2px) rotate(0)}18%{transform:translateX(-50%) translateY(-2px) rotate(-7deg)}36%{transform:translateX(-50%) translateY(-2px) rotate(6deg)}54%{transform:translateX(-50%) translateY(-2px) rotate(-4deg)}72%{transform:translateX(-50%) translateY(-2px) rotate(2deg)}100%{transform:translateX(-50%) translateY(-2px) rotate(0)}}

   /* Charts: transparent frame asset + three real bars that morph in height. */
   .passport-insights-tab[data-insights-tab="charts"]>.insights-brand-icon{display:none!important}
   .chart-v6{display:block!important;width:46px!important;height:47px!important;position:absolute!important;bottom:17px!important;left:50%!important;z-index:3!important;transform:translateX(-50%);opacity:.82;pointer-events:none;transition:transform .22s ease,opacity .22s ease}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6{transform:translateX(-50%) translateY(-2px);opacity:1}
   .chart-v6 .chart-frame-v10{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain!important;display:block!important;opacity:1!important}
   .chart-v6 .bar-v10{position:absolute!important;bottom:16.25%!important;background:#174f5a!important;border-radius:1px 1px 0 0!important;transform-origin:center bottom!important;will-change:height}
   .chart-v6 .bar-left-v10{left:27%;width:13%;height:25%}
   .chart-v6 .bar-mid-v10{left:48%;width:13%;height:49%}
   .chart-v6 .bar-right-v10{left:69%;width:13%;height:30%}
   .chart-v6.active-v6 .bar-left-v10{animation:barLeftV10 1.28s cubic-bezier(.45,0,.25,1) both}
   .chart-v6.active-v6 .bar-mid-v10{animation:barMidV10 1.28s cubic-bezier(.45,0,.25,1) both}
   .chart-v6.active-v6 .bar-right-v10{animation:barRightV10 1.28s cubic-bezier(.45,0,.25,1) both}
   @keyframes barLeftV10{from{height:25%}to{height:39%}}
   @keyframes barMidV10{from{height:49%}to{height:35%}}
   @keyframes barRightV10{from{height:30%}to{height:44%}}

   @media(max-width:380px){.meter-v6{width:52px;height:45px}.chart-v6{width:41px;height:42px}}
   @media(prefers-reduced-motion:reduce){.needle-v6.go-v6,.clip-v6,.chart-v6.active-v6 img{animation:none!important}}
 `;
 document.head.appendChild(st);

 let root=null,obs=null,previous=null;
 const active=()=>root?.querySelector('.passport-insights-tab.is-active')?.dataset.insightsTab||null;
 const restart=(el,c)=>{if(!el)return;el.classList.remove(c);void el.offsetWidth;el.classList.add(c)};
 function react(){
   const k=active();if(!k||k===previous)return;
   const old=previous;previous=k;
   // Leaving charts silently restores frame 1, with no reverse animation.
   if(old==='charts'){
     root.querySelector('.chart-v6')?.classList.remove('active-v6');
   }
   if(k==='score')restart(root.querySelector('.needle-v6'),'go-v6');
   if(k==='stats')restart(root.querySelector('[data-insights-tab="stats"]>.insights-brand-icon'),'clip-v6');
   if(k==='charts'){
     const chart=root.querySelector('.chart-v6');
     chart?.classList.remove('active-v6');void chart?.offsetWidth;chart?.classList.add('active-v6');
   }
 }
 function install(){
   const r=document.querySelector('.passport-insights-tabs');if(!r)return;
   const score=r.querySelector('[data-insights-tab="score"]'),charts=r.querySelector('[data-insights-tab="charts"]');if(!score||!charts)return;
   if(!score.querySelector('.meter-v6')){
     const m=document.createElement('span');m.className='meter-v6';m.setAttribute('aria-hidden','true');
     const b=document.createElement('img');b.src='meter-body-no-needle.png';b.alt='';
     const n=document.createElement('img');n.src='meter-needle.png';n.alt='';n.className='needle-v6';m.append(b,n);score.prepend(m);
   }
   if(!charts.querySelector('.chart-v6')){
     const m=document.createElement('span');m.className='chart-v6';m.setAttribute('aria-hidden','true');
     m.innerHTML=`<img class="chart-frame-v10" src="charts-frame.png" alt=""><i class="bar-v10 bar-left-v10"></i><i class="bar-v10 bar-mid-v10"></i><i class="bar-v10 bar-right-v10"></i>`;charts.prepend(m);
   }
   if(root!==r){
     obs?.disconnect();root=r;previous=null;
     obs=new MutationObserver(react);obs.observe(root,{attributes:true,subtree:true,attributeFilter:['class']});
     requestAnimationFrame(()=>requestAnimationFrame(react));
   }
 }
 install();
 new MutationObserver(()=>{if(root&&!document.documentElement.contains(root)){obs?.disconnect();obs=null;root=null;previous=null}install()}).observe(document.body,{childList:true,subtree:true});
})();


/* v12 LIVE Travel Insights timing/morph override.
   Deliberately last in app.js so it wins over earlier animation declarations. */
(()=>{
 const old=document.getElementById('wozza-insights-live-v12'); if(old) old.remove();
 const s=document.createElement('style'); s.id='wozza-insights-live-v12';
 s.textContent=`
   /* Needle: faster sweep, then a clearly visible mechanical settle. */
   .needle-v6.go-v6{
     animation:wozzaNeedleLiveV12 1.45s linear both!important;
   }
   @keyframes wozzaNeedleLiveV12{
     0%{transform:rotate(-82deg)}
     16%{transform:rotate(-62deg)}
     32%{transform:rotate(-41deg)}
     48%{transform:rotate(-23deg)}
     62%{transform:rotate(-8deg)}
     72%{transform:rotate(8deg)}
     80%{transform:rotate(-6deg)}
     86%{transform:rotate(4deg)}
     91%{transform:rotate(-2.5deg)}
     96%{transform:rotate(1.3deg)}
     100%{transform:rotate(0deg)}
   }

   /* Chart bars transition from the REAL tab state itself.
      This gives the same smooth motion entering AND leaving Charts. */
   .chart-v6 .bar-v10{
     animation:none!important;
     transition:height 1.28s cubic-bezier(.45,0,.25,1)!important;
   }
   .chart-v6 .bar-left-v10{height:25%!important}
   .chart-v6 .bar-mid-v10{height:49%!important}
   .chart-v6 .bar-right-v10{height:30%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-left-v10{height:39%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-mid-v10{height:35%!important}
   .passport-insights-tab[data-insights-tab="charts"].is-active .chart-v6 .bar-right-v10{height:44%!important}
 `;
 document.head.appendChild(s);
})();


/* Backup download prototype v2 — deliberately dormant until the user clicks Download Backup File.
   No backup collection, JSON serialization, Blob creation or download work occurs during startup. */
(()=>{
  if(window.__wozzaBackupDownloadPrototypeV2)return;
  window.__wozzaBackupDownloadPrototypeV2=true;

  const backupKeys=[
    'wozzaworld-state',
    'wozzaworld-first-name',
    'wozzaAddStopStyle',
    'myworld-state'
  ];

  function ordinal(n){
    const m=n%100;
    if(m>=11&&m<=13)return n+'th';
    return n+({1:'st',2:'nd',3:'rd'}[n%10]||'th');
  }
  function displayDate(d){
    return `${ordinal(d.getDate())} of ${d.toLocaleString('en-GB',{month:'long'})} ${d.getFullYear()}`;
  }
  function fileDate(d){
    const pad=n=>String(n).padStart(2,'0');
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
  }
  function makeBackup(){
    const now=new Date();
    const storage={};
    for(const key of backupKeys){
      const value=localStorage.getItem(key);
      if(value!==null)storage[key]=value;
    }
    const payload={
      format:'WozzaWorld Backup',
      backupVersion:1,
      createdAt:now.toISOString(),
      storage
    };
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=`WozzaWorld-Backup-${fileDate(now)}.json`;
    a.style.display='none';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);

    localStorage.setItem('wozzaworld-last-backup',now.toISOString());
    const label=document.querySelector('#backupRestoreDialog .backup-last-date');
    if(label)label.textContent=`You last made a backup on the ${displayDate(now)}.`;
  }

  document.addEventListener('click',e=>{
    const opener=e.target.closest?.('#openBackupRestore');
    if(opener){
      const raw=localStorage.getItem('wozzaworld-last-backup');
      if(raw){
        const d=new Date(raw);
        if(!Number.isNaN(d.getTime())){
          const label=document.querySelector('#backupRestoreDialog .backup-last-date');
          if(label)label.textContent=`You last made a backup on the ${displayDate(d)}.`;
        }
      }
      return;
    }
    const button=e.target.closest?.('#backupRestoreDialog .backup-restore-actions button');
    if(!button)return;
    const buttons=[...document.querySelectorAll('#backupRestoreDialog .backup-restore-actions button')];
    if(button===buttons[0]){
      e.preventDefault();
      makeBackup();
    }
  },false);
})();



/* v8: collapsed stop card is tappable to expand; action buttons remain independent. */
(()=>{
  if(window.__wozzaCollapsedStopTapV8)return;
  window.__wozzaCollapsedStopTapV8=true;
  document.addEventListener('click',e=>{
    const row=e.target.closest?.('#tripDestinationStops .trip-destination-stop.collapsed');
    if(!row)return;
    if(e.target.closest('button,input,select,textarea,a,.trip-stop-actions'))return;
    const head=e.target.closest('.trip-stop-card-head');
    if(!head)return;
    e.preventDefault();
    toggleStopCollapsed(row,false);
  },false);
})();

/* Continents stat drill-down survives dynamic stats rebuilds. */
document.addEventListener('click',e=>{const card=e.target.closest('.wozza-extra-stat[data-stat="continents"]');if(card)openPassportStat('continents')});
document.addEventListener('keydown',e=>{const card=e.target.closest?.('.wozza-extra-stat[data-stat="continents"]');if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openPassportStat('continents')}});

/* Hotfix: trip-list ratings stay visually gold while read-only; stat stop focus */
(()=>{const st=document.createElement('style');st.id='wozza-readonly-rating-stop-hotfix';st.textContent=`#tripList .trip-stars.trip-stars-readonly{pointer-events:none!important;user-select:none!important}#tripList .trip-stars.trip-stars-readonly button{pointer-events:none!important;color:#e9bd25!important}#tripDialog{scrollbar-width:none!important;-ms-overflow-style:none!important}#tripDialog::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}#tripDialog .trip-editor-vibe-icons{flex:0 0 100%!important;width:100%!important;display:grid!important;grid-template-columns:repeat(6,minmax(0,1fr))!important;gap:10px 12px!important;align-items:center!important}#tripDialog .trip-editor-vibe-icons .vibe-icon{justify-self:center!important}.trip-destination-stop.stat-stop-target{outline:3px solid rgba(233,189,37,.65);outline-offset:4px;transition:outline-color .25s ease}`;document.head.appendChild(st)})();

/* v0.19.5 — targeted trip-editor icon grid + recycle restore form safety */
(()=>{if(document.getElementById('wozza-trip-editor-icon-grid-10'))return;const st=document.createElement('style');st.id='wozza-trip-editor-icon-grid-10';st.textContent=`#tripDialog .trip-editor-date-range{display:flex!important;flex-direction:row!important;align-items:center!important;align-content:flex-start!important;gap:10px 12px!important;flex-wrap:wrap!important}#tripDialog .trip-editor-date{display:inline-block!important;width:auto!important;flex:0 0 auto!important}#tripDialog .trip-editor-icon-grid{display:contents!important}#tripDialog .trip-editor-icon-grid img{width:24px!important;height:24px!important;object-fit:contain!important;display:block!important;flex:0 0 24px!important}`;document.head.appendChild(st)})();


/* v0.19.6 — surgical recycle-bin sharp restore notice + map filter gradient only */
(()=>{
  if(document.getElementById('wozza-recycle-sharp-map-filter-hotfix'))return;
  const st=document.createElement('style');
  st.id='wozza-recycle-sharp-map-filter-hotfix';
  st.textContent=`
    #recycleDialog .recycle-bin-local-toast{
      position:fixed!important;left:50%!important;bottom:max(28px,env(safe-area-inset-bottom))!important;
      transform:translateX(-50%) translateY(12px)!important;z-index:10!important;
      background:#e3bd4d!important;color:#17213f!important;border:0!important;border-radius:999px!important;
      font-weight:800!important;box-shadow:0 5px 16px rgba(15,56,70,.22)!important;
      padding:12px 22px!important;max-width:calc(100vw - 40px)!important;text-align:center!important;
      opacity:0!important;pointer-events:none!important;transition:opacity .16s ease,transform .16s ease!important;
      white-space:nowrap!important;
    }
    #recycleDialog .recycle-bin-local-toast.show{opacity:1!important;transform:translateX(-50%) translateY(0)!important}
    #mapFilterBtn{background:linear-gradient(145deg,#087f91 0%,#12b8c7 58%,#18c9d3 100%)!important;background-color:#0aa4b3!important}\n    [data-map-filter]{background:linear-gradient(145deg,#087f91 0%,#12b8c7 58%,#18c9d3 100%)!important;background-color:#0aa4b3!important}
  `;
  document.head.appendChild(st);
})();
function recycleBinToast(text){
  const dlg=document.getElementById('recycleDialog');
  if(!dlg?.open){toast(text);return}
  let el=dlg.querySelector('.recycle-bin-local-toast');
  if(!el){el=document.createElement('div');el.className='recycle-bin-local-toast';el.setAttribute('role','status');el.setAttribute('aria-live','polite');dlg.appendChild(el)}
  el.textContent=text;clearTimeout(el._timer);requestAnimationFrame(()=>el.classList.add('show'));
  el._timer=setTimeout(()=>el.classList.remove('show'),1800);
}

/* === WozzaWorld stop itinerary v1.2 === */
const ITINERARY_CATEGORIES=[['Food & drink','🍽️'],['Attraction','🎟️'],['Activity','✨'],['Transport','🚆'],['Accommodation','🏨'],['Shopping','🛍️'],['Nightlife','🍸'],['Relax','♨️'],['Walk / outdoors','🥾'],['Other','📍']];
function itineraryItemsForRow(row){try{return JSON.parse(row.dataset.itinerary||'[]')}catch{return[]}}
function setItineraryItemsForRow(row,items){row.dataset.itinerary=JSON.stringify(items||[]);renderStopItinerarySummary(row)}
function itineraryIcon(item){return ITINERARY_CATEGORIES.find(x=>x[0]===item.category)?.[1]||'📍'}
function activityTodoById(id){return id?$$('.trip-todo-row').find(r=>r.dataset.todoId===id):null}
function itineraryWhen(item){const d=item.startDate?pretty(item.startDate):'Anytime',t=item.tbc?'TBC':(item.flexible?'Flexible timing':(item.startTime||''));return [d,t].filter(Boolean).join(' · ')}
function renderStopItinerarySummary(row){const body=row?.querySelector('.trip-stop-body');if(!body)return;let host=body.querySelector('.stop-itinerary-summary');if(!host){host=document.createElement('div');host.className='stop-itinerary-summary';body.querySelector('.itinerary-swipe-prompt')?.insertAdjacentElement('beforebegin',host)}const items=itineraryItemsForRow(row);host.innerHTML=items.length?`<div class="stop-itinerary-title">ITINERARY <span>${items.length}</span></div>${items.slice().sort((a,b)=>String(a.startDate||'').localeCompare(String(b.startDate||''))||String(a.startTime||'').localeCompare(String(b.startTime||''))).map(x=>`<button type="button" class="stop-itinerary-item" data-itin-id="${esc(x.id)}"><span>${itineraryIcon(x)}</span><strong>${esc(x.name||'Activity')}</strong><small>${esc(itineraryWhen(x))}</small></button>`).join('')}`:'';host.querySelectorAll('[data-itin-id]').forEach(b=>b.onclick=()=>openStopItinerary(row,b.dataset.itinId))}
function itineraryDialog(){let d=document.getElementById('stopItineraryDialog');if(d)return d;d=document.createElement('dialog');d.id='stopItineraryDialog';d.className='stop-itinerary-dialog';d.innerHTML=`<form method="dialog" class="stop-itinerary-form"><div class="stop-itinerary-head"><div><small>STOP ITINERARY</small><h2 id="stopItineraryHeading">Add activity</h2></div><button type="button" class="stop-itinerary-close" aria-label="Close">×</button></div><label>Activity name<input id="itinName" maxlength="80" placeholder="e.g. Dinner at New York Café"></label><fieldset class="itin-category-field"><legend>Type</legend><div id="itinCategoryBank" class="itin-category-bank">${ITINERARY_CATEGORIES.map(x=>`<button type="button" class="itin-category-tag" data-category="${esc(x[0])}"><span>${x[1]}</span>${esc(x[0])}</button>`).join('')}</div></fieldset><div class="itin-two"><label>Start date<input id="itinStartDate" class="itin-wozza-date" type="text" readonly placeholder="Choose date"></label><label>End date<input id="itinEndDate" class="itin-wozza-date" type="text" readonly placeholder="Optional"></label></div><input id="itinStartTime" type="hidden"><input id="itinEndTime" type="hidden"><input id="itinFlexible" type="checkbox" hidden><input id="itinTbc" type="checkbox" hidden><label>Location<textarea id="itinLocation" rows="1" placeholder="Venue or address"></textarea></label><label>Maps / location link<input id="itinLocationUrl" type="url" placeholder="https://…"></label><label>Additional link<input id="itinUrl" type="url" placeholder="Venue, tickets, website…"></label><label>Cost per person<input id="itinCost" inputmode="decimal" placeholder="e.g. £28"></label><label>Booking reference<input id="itinBookingRef" placeholder="Optional"></label><label>Notes<textarea id="itinNotes" placeholder="Anything useful for this activity…"></textarea></label><label class="itin-link-check"><input id="itinLinkNotes" type="checkbox"> Also add these notes to the overall trip Notes</label><label>To do<input id="itinTodo" placeholder="e.g. Download tickets"></label><div class="stop-itinerary-actions"><button type="button" id="itinDelete" class="itin-delete">Delete</button><button type="button" class="itin-cancel">Cancel</button><button type="submit" class="primary">Save activity</button></div></form>`;document.body.appendChild(d);d.querySelector('.stop-itinerary-close').onclick=()=>d.close();d.querySelector('.itin-cancel').onclick=()=>d.close();d.querySelectorAll('.itin-category-tag').forEach(b=>b.onclick=()=>{d.querySelectorAll('.itin-category-tag').forEach(x=>x.classList.toggle('selected',x===b));d.dataset.category=b.dataset.category});d.querySelectorAll('.itin-wozza-date').forEach(i=>i.onclick=e=>{e.preventDefault();wozzaCalendarOpenActivity(i)});d.addEventListener('click',e=>{if(e.target===d)d.close()});return d}
function openStopItinerary(row,id=''){activeItineraryRow=row;activeItineraryId=id;const d=itineraryDialog(),items=itineraryItemsForRow(row),x=items.find(i=>String(i.id)===String(id))||{};d.querySelector('#stopItineraryHeading').textContent=id?'Edit activity':'Add activity';const cat=x.category||'Food & drink';d.dataset.category=cat;d.querySelectorAll('.itin-category-tag').forEach(b=>b.classList.toggle('selected',b.dataset.category===cat));const start=x.startDate||row.querySelector('.trip-destination-from')?.value||'',end=x.endDate||'';const vals={itinName:x.name||'',itinStartTime:x.startTime||'',itinEndTime:x.endTime||'',itinLocation:x.location||'',itinLocationUrl:x.locationUrl||'',itinUrl:x.url||'',itinCost:x.cost||'',itinBookingRef:x.bookingRef||'',itinNotes:x.notes||''};Object.entries(vals).forEach(([k,v])=>{const el=d.querySelector('#'+k);if(el)el.value=v});const sd=d.querySelector('#itinStartDate'),ed=d.querySelector('#itinEndDate');sd.dataset.iso=start;sd.value=start?pretty(start):'';ed.dataset.iso=end;ed.value=end?pretty(end):'';d.querySelector('#itinFlexible').checked=!!x.flexible;d.querySelector('#itinTbc').checked=!!x.tbc;const todoRow=activityTodoById(x.todoId);d.querySelector('#itinTodo').value=todoRow?.querySelector('.trip-todo-input')?.value||'';d.querySelector('#itinLinkNotes').checked=false;d.querySelector('#itinDelete').hidden=!id;d.querySelector('#itinDelete').onclick=()=>{if(!activeItineraryRow)return;const old=itineraryItemsForRow(activeItineraryRow).find(i=>String(i.id)===String(activeItineraryId));if(old?.todoId)activityTodoById(old.todoId)?.remove();setItineraryItemsForRow(activeItineraryRow,itineraryItemsForRow(activeItineraryRow).filter(i=>String(i.id)!==String(activeItineraryId)));updateTripTodoSummary();d.close()};d.onsubmit=e=>{e.preventDefault();saveStopItinerary()};d.showModal();d.querySelector('#itinName')?.blur()}
function saveStopItinerary(){const d=itineraryDialog(),row=activeItineraryRow;if(!row)return;const q=id=>d.querySelector('#'+id),name=q('itinName').value.trim();if(!name){q('itinName').focus();return}const id=activeItineraryId||crypto.randomUUID?.()||`itin-${Date.now()}`;let items=itineraryItemsForRow(row),at=items.findIndex(i=>String(i.id)===String(id)),old=at>=0?items[at]:{};const todoText=q('itinTodo').value.trim();let todoId=old.todoId||'';let todoRow=activityTodoById(todoId);if(todoText){if(!todoId)todoId=crypto.randomUUID?.()||`todo-${Date.now()}`;if(!todoRow){addTripTodoRow({id:todoId,activityId:id,text:todoText,done:false});todoRow=activityTodoById(todoId)}else{todoRow.dataset.activityId=id;todoRow.querySelector('.trip-todo-input').value=todoText;todoRow.querySelector('.trip-todo-input').dispatchEvent(new Event('input',{bubbles:true}))}}else if(todoRow){todoRow.remove();todoId=''}const x={id,name,category:d.dataset.category||'',startDate:q('itinStartDate').dataset.iso||'',startTime:q('itinStartTime').value,endDate:q('itinEndDate').dataset.iso||'',endTime:q('itinEndTime').value,flexible:q('itinFlexible').checked,location:q('itinLocation').value.trim(),locationUrl:q('itinLocationUrl').value.trim(),url:q('itinUrl').value.trim(),cost:q('itinCost').value.trim(),bookingRef:q('itinBookingRef').value.trim(),notes:q('itinNotes').value.trim(),todoId};if(at>=0)items[at]=x;else items.push(x);setItineraryItemsForRow(row,items);if(q('itinLinkNotes').checked&&x.notes){const notes=$('#tripNotes'),prefix=`${itineraryIcon(x)} ${x.name}: ${x.notes}`;if(notes&&!notes.value.includes(prefix)){notes.value=(notes.value.trim()?notes.value.trim()+'\n':'')+prefix;updateTripNotesSummary()}}updateTripTodoSummary();d.close()}
function bindItineraryPrompt(row){const p=row?.querySelector('.itinerary-swipe-prompt');if(!p||p.dataset.bound)return;p.dataset.bound='1';p.setAttribute('role','button');p.setAttribute('tabindex','0');p.setAttribute('aria-label','Create itinerary activity');p.onclick=()=>openStopItinerary(row);p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openStopItinerary(row)}};let sx=0;p.addEventListener('pointerdown',e=>sx=e.clientX);p.addEventListener('pointerup',e=>{if(e.clientX-sx>45)openStopItinerary(row)});renderStopItinerarySummary(row)}
const _wwAddDestinationStop=addDestinationStop;addDestinationStop=function(data={}){const row=_wwAddDestinationStop(data);if(data.itinerary)row.dataset.itinerary=JSON.stringify(data.itinerary);bindItineraryPrompt(row);return row};
const _wwCollectDestinationStops=collectDestinationStops;collectDestinationStops=function(){const out=_wwCollectDestinationStops();const rows=$$('#tripDestinationStops .trip-destination-stop');out.forEach((x,i)=>{const row=rows.find(r=>String(r.dataset.stopId)===String(x.id))||rows[i];x.itinerary=itineraryItemsForRow(row)});return out};

/* === WozzaWorld stop itinerary v1.3 surgical tweaks === */
state.itineraryTypeBank??=[];
function itineraryAllCategories(){
 const custom=(state.itineraryTypeBank||[]).map(n=>[n,'📍']);
 const extras=[['Tour','🗺️'],['Boat trip','⛴️'],['Airport','✈️']];
 return [...ITINERARY_CATEGORIES.filter(x=>x[0]!=='Other'),...extras.filter(e=>!ITINERARY_CATEGORIES.some(x=>x[0]===e[0])&&!custom.some(x=>x[0]===e[0])),...custom,['Other','📍']];
}
function renderItineraryCategoryBank(d,selected='Food & drink'){
 const bank=d.querySelector('#itinCategoryBank');if(!bank)return;
 bank.innerHTML=itineraryAllCategories().map(x=>`<button type="button" class="itin-category-tag${String(x[0]).toLowerCase()===String(selected).toLowerCase()?' selected':''}" data-category="${esc(x[0])}"><span>${x[1]}</span>${esc(x[0])}</button>`).join('')+`<div class="itin-other-entry" hidden><input id="itinOtherType" autocomplete="off" maxlength="40" placeholder="Add activity type"></div>`;
 d.dataset.category=selected;
 bank.querySelectorAll('.itin-category-tag').forEach(b=>b.onclick=()=>{
  if(b.dataset.category==='Other'){
   bank.querySelector('.itin-other-entry').hidden=false;
   requestAnimationFrame(()=>bank.querySelector('#itinOtherType')?.focus());return;
  }
  bank.querySelector('.itin-other-entry').hidden=true;
  bank.querySelectorAll('.itin-category-tag').forEach(x=>x.classList.toggle('selected',x===b));d.dataset.category=b.dataset.category;
 });
 const other=bank.querySelector('#itinOtherType');if(other)other.onkeydown=e=>{if(e.key!=='Enter')return;e.preventDefault();const raw=other.value.trim();if(!raw)return;let v=(state.itineraryTypeBank||[]).find(x=>String(x).toLowerCase()===raw.toLowerCase())||raw;if(!(state.itineraryTypeBank||[]).some(x=>String(x).toLowerCase()===raw.toLowerCase()))state.itineraryTypeBank.push(v);localStorage.setItem('wozzaworld-state',JSON.stringify(state));renderItineraryCategoryBank(d,v)};
}
function activityTodoDraftFromItem(x){
 const ids=Array.isArray(x.todoIds)?x.todoIds:(x.todoId?[x.todoId]:[]);
 return ids.map(id=>{const r=activityTodoById(id);return r?{id,activityId:x.id||'',text:r.querySelector('.trip-todo-input')?.value||'',done:r.classList.contains('is-done')} : null}).filter(Boolean)
}
function renderActivityTodoEditor(d){
 const list=d.querySelector('#itinTodoList');if(!list)return;const vals=JSON.parse(d.dataset.todoDraft||'[]');
 list.innerHTML=vals.map((v,i)=>todoRowMarkup(v,i)).join('');
 $$('.trip-todo-row',list).forEach(row=>{
  bindTripTodoRow(row);
  const input=row.querySelector('.trip-todo-input');input?.addEventListener('input',sync);
  row.querySelector('.trip-todo-check')?.addEventListener('click',()=>setTimeout(sync));
  row.querySelector('.trip-todo-remove')?.addEventListener('click',()=>setTimeout(sync));
 });
 function sync(){d.dataset.todoDraft=JSON.stringify($$('.trip-todo-row',list).map(r=>({id:r.dataset.todoId||'',activityId:d.dataset.activityDraftId||'',text:r.querySelector('.trip-todo-input')?.value.trim()||'',done:r.classList.contains('is-done')})).filter(x=>x.text));}
 d.querySelector('#itinTodoAdd').onclick=()=>{sync();const a=JSON.parse(d.dataset.todoDraft||'[]');a.push({id:'',activityId:d.dataset.activityDraftId||'',text:'',done:false});d.dataset.todoDraft=JSON.stringify(a);renderActivityTodoEditor(d);list.lastElementChild?.querySelector('.trip-todo-input')?.focus()};
}
function syncActivityTodosToTrip(d,id,old={}){
 const draft=JSON.parse(d.dataset.todoDraft||'[]');const oldIds=Array.isArray(old.todoIds)?old.todoIds:(old.todoId?[old.todoId]:[]),newIds=[];
 oldIds.forEach(oid=>{if(!draft.some(x=>x.id===oid))activityTodoById(oid)?.remove()});
 draft.forEach(item=>{if(!item.text)return;let tid=item.id||crypto.randomUUID?.()||`todo-${Date.now()}-${Math.random()}`,r=activityTodoById(tid);if(!r){addTripTodoRow({id:tid,activityId:id,text:item.text,done:!!item.done});r=activityTodoById(tid)}else{r.dataset.activityId=id;const inp=r.querySelector('.trip-todo-input');if(inp)inp.value=item.text;r.classList.toggle('is-done',!!item.done);const tick=r.querySelector('.trip-todo-check');tick?.classList.toggle('selected',!!item.done);tick?.setAttribute('aria-pressed',String(!!item.done));}newIds.push(tid)});
 updateTripTodoSummary();return newIds;
}
const _wwItineraryDialog=itineraryDialog;
itineraryDialog=function(){const d=_wwItineraryDialog();if(d.dataset.v13)return d;d.dataset.v13='1';
 const sd=d.querySelector('#itinStartDate')?.closest('label'),ed=d.querySelector('#itinEndDate')?.closest('label');if(sd)sd.childNodes[0].textContent='Start';if(ed)ed.childNodes[0].textContent='Finish';
 const loc=d.querySelector('#itinLocation')?.closest('label');if(loc&&!d.querySelector('#itinContact'))loc.insertAdjacentHTML('afterend','<label>Contact email<textarea id="itinContact" rows="1" placeholder="Email address"></textarea></label><label>Contact telephone<textarea id="itinContactTelephone" rows="1" placeholder="Telephone number"></textarea></label>');
 const oldTodo=d.querySelector('#itinTodo')?.closest('label');if(oldTodo)oldTodo.outerHTML='<section class="itin-todo-section"><div class="itin-todo-title">Tasks</div><div id="itinTodoList" class="trip-todo-list"></div><button type="button" id="itinTodoAdd" class="itin-todo-add">＋ Add more</button></section>';
 return d};
const _wwOpenStopItinerary=openStopItinerary;
openStopItinerary=function(row,id=''){_wwOpenStopItinerary(row,id);const d=itineraryDialog(),items=itineraryItemsForRow(row),x=items.find(i=>String(i.id)===String(id))||{};renderItineraryCategoryBank(d,x.category||'Food & drink');d.dataset.activityDraftId=id||'';d.dataset.todoDraft=JSON.stringify(activityTodoDraftFromItem(x));const c=d.querySelector('#itinContact');if(c)c.value=x.contact||'';const p=d.querySelector('#itinContactTelephone');if(p)p.value=x.contactTelephone||'';const sd=d.querySelector('#itinStartDate'),ed=d.querySelector('#itinEndDate');if(sd&&sd.dataset.iso)sd.value=pretty(sd.dataset.iso)+(x.startTime?` · ${x.startTime}`:'');if(ed&&ed.dataset.iso)ed.value=pretty(ed.dataset.iso)+(x.endTime?` · ${x.endTime}`:'');renderActivityTodoEditor(d)};
const _wwSaveStopItinerary=saveStopItinerary;
saveStopItinerary=function(){const d=itineraryDialog(),row=activeItineraryRow;if(!row)return;const q=id=>d.querySelector('#'+id),name=q('itinName')?.value.trim();if(!name){q('itinName')?.focus();return}const id=activeItineraryId||crypto.randomUUID?.()||`itin-${Date.now()}`,items=itineraryItemsForRow(row),at=items.findIndex(i=>String(i.id)===String(id)),old=at>=0?items[at]:{},todoIds=syncActivityTodosToTrip(d,id,old);const x={id,name,category:d.dataset.category||'',startDate:q('itinStartDate')?.dataset.iso||'',startTime:q('itinStartTime')?.value||'',endDate:q('itinEndDate')?.dataset.iso||'',endTime:q('itinEndTime')?.value||'',flexible:!!q('itinFlexible')?.checked,tbc:!!q('itinTbc')?.checked,location:q('itinLocation')?.value.trim()||'',contact:q('itinContact')?.value.trim()||'',contactTelephone:q('itinContactTelephone')?.value.trim()||'',locationUrl:q('itinLocationUrl')?.value.trim()||'',url:q('itinUrl')?.value.trim()||'',cost:q('itinCost')?.value.trim()||'',bookingRef:q('itinBookingRef')?.value.trim()||'',notes:q('itinNotes')?.value.trim()||'',todoIds,todoId:todoIds[0]||''};if(at>=0)items[at]=x;else items.push(x);setItineraryItemsForRow(row,items);if(q('itinLinkNotes')?.checked&&x.notes){const notes=$('#tripNotes'),prefix=`${itineraryIcon(x)} ${x.name}: ${x.notes}`;if(notes&&!notes.value.includes(prefix)){notes.value=(notes.value.trim()?notes.value.trim()+'\n':'')+prefix;updateTripNotesSummary()}}updateTripTodoSummary();d.close()};
const _wwCalCommit=wozzaCalendarCommit;
wozzaCalendarCommit=function(){const target=wozzaCalendarTarget,isActivity=wozzaCalendarMode==='activity';_wwCalCommit();if(isActivity&&target){const isEnd=target.id==='itinEndDate',time=document.getElementById(isEnd?'itinEndTime':'itinStartTime')?.value||'';target.value=target.dataset.iso?pretty(target.dataset.iso)+(time?` · ${time}`:''):''}};

/* === WozzaWorld itinerary v1.4 — master trip itinerary + v1.3 button repair === */
function wwTripStopRows(){return $$('#tripDestinationStops .trip-destination-stop')}
function wwStopName(row,i=0){return row?.querySelector('.trip-destination-name')?.value?.trim()||row?.querySelector('.trip-stop-summary')?.textContent?.trim()||`Stop ${i+1}`}
function wwMasterActivities(){const out=[];wwTripStopRows().forEach((row,si)=>itineraryItemsForRow(row).forEach(item=>out.push({...item,_row:row,_stopIndex:si,_stopName:wwStopName(row,si)})));return out.sort((a,b)=>String(a.startDate||'9999').localeCompare(String(b.startDate||'9999'))||String(a.startTime||'99:99').localeCompare(String(b.startTime||'99:99'))||a._stopIndex-b._stopIndex)}
function wwRefreshItineraryButtons(){const has=wwMasterActivities().length>0;wwTripStopRows().forEach(row=>{const p=row.querySelector('.itinerary-swipe-prompt');if(p){p.textContent=has?'ITINERARY':'CREATE ITINERARY';p.setAttribute('aria-label',has?'Itinerary':'Create itinerary')}})}
function wwMasterItineraryDialog(){let d=document.getElementById('masterItineraryDialog');if(d)return d;d=document.createElement('dialog');d.id='masterItineraryDialog';d.className='master-itinerary-dialog';d.innerHTML=`<div class="master-itinerary-shell"><header class="master-itinerary-head"><div><small>TRIP ITINERARY</small><h2>Itinerary</h2></div><button type="button" class="master-itinerary-close" aria-label="Close">×</button></header><div id="masterItineraryContent"></div><button type="button" id="masterItineraryAdd" class="master-itinerary-add">＋ ADD ACTIVITY</button></div>`;document.body.appendChild(d);d.querySelector('.master-itinerary-close').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d)d.close()});d.querySelector('#masterItineraryAdd').onclick=wwAddActivityFromMaster;return d}
function wwRenderMasterItinerary(){const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent'),items=wwMasterActivities();if(!items.length){host.innerHTML='<div class="master-itinerary-empty"><strong>Start planning your trip</strong><p>Add your first activity and your day-by-day itinerary will build here.</p></div>';return}const groups=new Map();items.forEach(x=>{const key=x.startDate||'unscheduled';if(!groups.has(key))groups.set(key,[]);groups.get(key).push(x)});let day=0;host.innerHTML=[...groups].map(([date,list])=>{day++;const title=date==='unscheduled'?'TO BE SCHEDULED':pretty(date);return `<section class="master-itinerary-day"><div class="master-itinerary-dayhead"><b>DAY ${day}</b><span>${esc(title)}</span></div><div class="master-itinerary-daybody">${list.map(x=>`<button type="button" class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${itineraryIcon(x)}</span><span><strong>${esc(x.name||'Activity')}</strong><small>${esc(x._stopName)}</small></span></button>`).join('')}</div></section>`}).join('');host.querySelectorAll('.master-itinerary-activity').forEach(b=>b.onclick=()=>{const row=wwTripStopRows()[Number(b.dataset.stop)];if(row){d.close();openStopItinerary(row,b.dataset.id)}})}
function wwOpenMasterItinerary(){wwRenderMasterItinerary();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()}
function wwStopChooserDialog(){let d=document.getElementById('itineraryStopChooser');if(d)return d;d=document.createElement('dialog');d.id='itineraryStopChooser';d.className='itinerary-stop-chooser';d.innerHTML='<div class="itinerary-stop-chooser-shell"><header><div><small>ADD ACTIVITY</small><h2>Which stop?</h2></div><button type="button" aria-label="Close">×</button></header><div class="itinerary-stop-options"></div></div>';document.body.appendChild(d);d.querySelector('header button').onclick=()=>d.close();return d}
function wwAddActivityFromMaster(){const rows=wwTripStopRows();if(!rows.length)return;if(rows.length===1){wwMasterItineraryDialog().close();openStopItinerary(rows[0]);return}const d=wwStopChooserDialog(),host=d.querySelector('.itinerary-stop-options');host.innerHTML=rows.map((r,i)=>`<button type="button" data-stop="${i}"><span>Stop ${i+1}</span><strong>${esc(wwStopName(r,i))}</strong></button>`).join('');host.querySelectorAll('button[data-stop]').forEach(b=>b.onclick=()=>{const row=rows[Number(b.dataset.stop)];d.close();wwMasterItineraryDialog().close();openStopItinerary(row)});d.showModal()}
/* v1.3 replaced #itinTodo with the shared editor; keep a compatibility field so the inherited opener cannot throw. */
const _wwItineraryDialogV14=itineraryDialog;
itineraryDialog=function(){const d=_wwItineraryDialogV14();if(!d.querySelector('#itinTodo')){const compat=document.createElement('input');compat.type='hidden';compat.id='itinTodo';d.querySelector('.stop-itinerary-form')?.appendChild(compat)}return d};
const _wwSetItineraryItemsV14=setItineraryItemsForRow;
setItineraryItemsForRow=function(row,items){_wwSetItineraryItemsV14(row,items);wwRefreshItineraryButtons();if(document.getElementById('masterItineraryDialog')?.open)wwRenderMasterItinerary()};
const _wwBindItineraryPromptV14=bindItineraryPrompt;
bindItineraryPrompt=function(row){_wwBindItineraryPromptV14(row);const p=row?.querySelector('.itinerary-swipe-prompt');if(!p)return;p.onclick=wwOpenMasterItinerary;p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();wwOpenMasterItinerary()}};p.onpointerdown=null;p.onpointerup=null;wwRefreshItineraryButtons()};
/* Rebind rows already created before this patch loaded. */
requestAnimationFrame(()=>wwTripStopRows().forEach(bindItineraryPrompt));

/* === WozzaWorld itinerary v1.5 — clean trip surface, calendar drill-through, stop date guard === */
/* Keep the trip/stop editor clean: itinerary content lives behind the itinerary button. */
renderStopItinerarySummary=function(row){const host=row?.querySelector('.stop-itinerary-summary');if(host){host.innerHTML='';host.hidden=true}};
function wwStopBounds(row){return {start:row?.querySelector('.trip-destination-from')?.value||'',end:row?.querySelector('.trip-destination-to')?.value||''}}
function wwDateWithinStop(iso,row){if(!iso)return true;const b=wwStopBounds(row);return (!b.start||iso>=b.start)&&(!b.end||iso<=b.end)}
/* Disable dates outside the active stop while using the existing WozzaWorld activity calendar. */
const _wwCalRenderV15=wozzaCalendarRender;
wozzaCalendarRender=function(){_wwCalRenderV15();if(wozzaCalendarMode!=='activity')return;const row=activeItineraryRow,grid=wozzaCalendarEnsure().querySelector('.wozza-calendar-grid');grid?.querySelectorAll('[data-cal-date]').forEach(b=>{const ok=wwDateWithinStop(b.dataset.calDate,row);b.disabled=!ok;b.classList.toggle('outside-stop-range',!ok);if(!ok)b.setAttribute('aria-label',`${b.textContent} — outside this stop`)});};
/* Belt-and-braces validation in case an old/browser-native path supplies an out-of-range date. */
const _wwSaveStopItineraryV15=saveStopItinerary;
saveStopItinerary=function(){const d=itineraryDialog(),row=activeItineraryRow,sd=d.querySelector('#itinStartDate')?.dataset.iso||'',ed=d.querySelector('#itinEndDate')?.dataset.iso||'';if((sd&&!wwDateWithinStop(sd,row))||(ed&&!wwDateWithinStop(ed,row))){const b=wwStopBounds(row);alert(`Activity dates must stay within this stop${b.start||b.end?` (${b.start?pretty(b.start):'…'} – ${b.end?pretty(b.end):'…'})`:''}.`);return}return _wwSaveStopItineraryV15()};
/* Daily schedule is a filtered view of the same activity records. */
function wwOpenDailySchedule(iso){const all=wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent');d.querySelector('.master-itinerary-head small').textContent='DAILY SCHEDULE';d.querySelector('.master-itinerary-head h2').textContent=pretty(iso);d.querySelector('#masterItineraryAdd').hidden=true;host.innerHTML=all.length?`<section class="master-itinerary-day"><div class="master-itinerary-daybody">${all.map(x=>`<button type="button" class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${itineraryIcon(x)}</span><span><strong>${esc(x.name||'Activity')}</strong><small>${esc(x._stopName)}</small></span></button>`).join('')}</div></section>`:'<div class="master-itinerary-empty"><strong>Nothing planned yet</strong><p>There are no activities scheduled for this day.</p></div>';host.querySelectorAll('.master-itinerary-activity').forEach(b=>b.onclick=()=>{const row=wwTripStopRows()[Number(b.dataset.stop)];if(row){d.close();openStopItinerary(row,b.dataset.id)}});if(!d.open)d.showModal()}
/* Existing read-only trip calendar: its in-range days now drill into the daily schedule. */
const _wwCalRenderDailyV15=wozzaCalendarRender;
wozzaCalendarRender=function(){_wwCalRenderDailyV15();if(wozzaCalendarMode!=='range')return;wozzaCalendarEnsure().querySelectorAll('.wozza-calendar-day[data-cal-date]').forEach(b=>{const iso=b.dataset.calDate,inTrip=iso>=wozzaCalendarRangeStart&&iso<=wozzaCalendarRangeEnd;b.disabled=!inTrip;b.classList.toggle('has-daily-schedule',inTrip);if(inTrip)b.onclick=()=>{wozzaCalendarClose();wwOpenDailySchedule(iso)}})};
/* One stop = its itinerary. Multiple stops = the live master itinerary. */
function wwOpenTripItinerary(){const rows=wwTripStopRows();if(rows.length===1){wwRenderMasterItinerary();const d=wwMasterItineraryDialog();d.querySelector('.master-itinerary-head small').textContent='STOP ITINERARY';d.querySelector('.master-itinerary-head h2').textContent=wwStopName(rows[0],0);d.querySelector('#masterItineraryAdd').hidden=false;if(!d.open)d.show();return}wwOpenMasterItinerary()}
const _wwRenderMasterV15=wwRenderMasterItinerary;
wwRenderMasterItinerary=function(){_wwRenderMasterV15();const d=wwMasterItineraryDialog();d.querySelector('.master-itinerary-head small').textContent=wwTripStopRows().length>1?'MASTER ITINERARY':'STOP ITINERARY';d.querySelector('.master-itinerary-head h2').textContent=wwTripStopRows().length>1?'Itinerary':wwStopName(wwTripStopRows()[0],0);d.querySelector('#masterItineraryAdd').hidden=false};
wwOpenMasterItinerary=function(){wwRenderMasterItinerary();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()};
const _wwBindItineraryPromptV15=bindItineraryPrompt;
bindItineraryPrompt=function(row){_wwBindItineraryPromptV15(row);const p=row?.querySelector('.itinerary-swipe-prompt');if(!p)return;p.onclick=wwOpenTripItinerary;p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();wwOpenTripItinerary()}};renderStopItinerarySummary(row)};
requestAnimationFrame(()=>wwTripStopRows().forEach(bindItineraryPrompt));

/* === WozzaWorld itinerary v1.6 — weekday headers + per-activity edit / quick info === */
function wwItineraryDayLabel(iso){
  if(!iso)return '';
  const d=new Date(`${iso}T12:00:00`);
  if(Number.isNaN(d.getTime()))return pretty(iso);
  return `${d.toLocaleDateString('en-GB',{weekday:'long'})} ${pretty(iso)}`;
}
function wwQuickInfoDialog(){let d=document.getElementById('itineraryQuickInfoDialog');if(d)return d;d=document.createElement('dialog');d.id='itineraryQuickInfoDialog';d.className='itinerary-quick-info-dialog';d.innerHTML=`<div class="itinerary-quick-info-shell"><header><div><small>ACTIVITY</small><h2 id="itineraryQuickInfoTitle">Quick info</h2></div><button type="button" aria-label="Close">×</button></header><div id="itineraryQuickInfoBody"></div></div>`;document.body.appendChild(d);d.querySelector('header button').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d)d.close()});return d}
function wwOpenQuickInfo(row,id){const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!x)return;const d=wwQuickInfoDialog(),body=d.querySelector('#itineraryQuickInfoBody');d.querySelector('#itineraryQuickInfoTitle').textContent=x.name||'Activity';const todoIds=x.todoIds?.length?x.todoIds:(x.todoId?[x.todoId]:[]),todos=todoIds.map(activityTodoById).filter(Boolean).map(r=>({text:r.querySelector('.trip-todo-input')?.value?.trim()||'',done:r.classList.contains('is-done')})).filter(t=>t.text&&!t.done);const rows=[];const timing=[x.startDate?wwItineraryDayLabel(x.startDate):'',x.tbc?'TBC':(x.flexible?'Flexible timing':(x.startTime||''))].filter(Boolean).join(' · ');if(timing)rows.push(['When',timing]);if(x.endDate)rows.push(['Finish',[wwItineraryDayLabel(x.endDate),x.endTime||''].filter(Boolean).join(' · ')]);if(x.location)rows.push(['Location',x.location]);if(x.contact)rows.push(['Contact',x.contact]);if(x.cost)rows.push(['Cost per person',x.cost]);if(x.bookingRef)rows.push(['Booking reference',x.bookingRef]);body.innerHTML=`<div class="itinerary-quick-info-type">${itineraryIcon(x)} ${esc(x.category||'Activity')}</div>${rows.map(([k,v])=>`<div class="itinerary-quick-info-row"><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`).join('')}${x.locationUrl?`<a class="itinerary-quick-info-link" href="${esc(x.locationUrl)}" target="_blank" rel="noopener">Open map / location ↗</a>`:''}${x.url?`<a class="itinerary-quick-info-link" href="${esc(x.url)}" target="_blank" rel="noopener">Open additional link ↗</a>`:''}${x.notes?`<div class="itinerary-quick-info-block"><small>Notes</small><p>${esc(x.notes).replace(/\n/g,'<br>')}</p></div>`:''}${todos.length?`<div class="itinerary-quick-info-block"><small>To do</small>${todos.map(t=>`<p>${t.done?'✓':'○'} ${esc(t.text)}</p>`).join('')}</div>`:''}`;if(!d.open)d.showModal()}
function wwWireItineraryActivityActions(host,d){host.querySelectorAll('.master-itinerary-edit').forEach(b=>b.onclick=e=>{e.stopPropagation();const row=wwTripStopRows()[Number(b.dataset.stop)];if(row){d.close();openStopItinerary(row,b.dataset.id)}});host.querySelectorAll('.master-itinerary-info').forEach(b=>b.onclick=e=>{e.stopPropagation();const row=wwTripStopRows()[Number(b.dataset.stop)];if(row)wwOpenQuickInfo(row,b.dataset.id)})}
function wwActivityScheduleRow(x){return `<div class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${itineraryIcon(x)}</span><span class="master-itinerary-activity-main"><strong>${esc(x.name||'Activity')}</strong><small>${esc(x._stopName)}</small></span><span class="master-itinerary-activity-actions"><button type="button" class="master-itinerary-edit" data-stop="${x._stopIndex}" data-id="${esc(x.id)}" aria-label="Edit ${esc(x.name||'activity')}" title="Edit">✎</button><button type="button" class="master-itinerary-info" data-stop="${x._stopIndex}" data-id="${esc(x.id)}" aria-label="Quick info for ${esc(x.name||'activity')}" title="Quick info">i</button></span></div>`}
wwRenderMasterItinerary=function(){const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent'),items=wwMasterActivities(),multi=wwTripStopRows().length>1;d.querySelector('.master-itinerary-head small').textContent=multi?'MASTER ITINERARY':'STOP ITINERARY';d.querySelector('.master-itinerary-head h2').textContent=multi?'Itinerary':wwStopName(wwTripStopRows()[0],0);d.querySelector('#masterItineraryAdd').hidden=false;if(!items.length){host.innerHTML='<div class="master-itinerary-empty"><strong>Start planning your trip</strong><p>Add your first activity and your day-by-day itinerary will build here.</p></div>';return}const groups=new Map();items.forEach(x=>{const key=x.startDate||'unscheduled';if(!groups.has(key))groups.set(key,[]);groups.get(key).push(x)});let day=0;host.innerHTML=[...groups].map(([date,list])=>{day++;const title=date==='unscheduled'?'TO BE SCHEDULED':wwItineraryDayLabel(date);return `<section class="master-itinerary-day"><div class="master-itinerary-dayhead"><b>DAY ${day}</b><span>${esc(title)}</span></div><div class="master-itinerary-daybody">${list.map(wwActivityScheduleRow).join('')}</div></section>`}).join('');wwWireItineraryActivityActions(host,d)};
wwOpenDailySchedule=function(iso){const all=wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent');d.querySelector('.master-itinerary-head small').textContent='DAILY SCHEDULE';d.querySelector('.master-itinerary-head h2').textContent=wwItineraryDayLabel(iso);d.querySelector('#masterItineraryAdd').hidden=true;host.innerHTML=all.length?`<section class="master-itinerary-day"><div class="master-itinerary-daybody">${all.map(wwActivityScheduleRow).join('')}</div></section>`:'<div class="master-itinerary-empty"><strong>Nothing planned yet</strong><p>There are no activities scheduled for this day.</p></div>';wwWireItineraryActivityActions(host,d);if(!d.open)d.showModal()};

/* Hotfix: trip flags open the matching country card, including stop flags in the trip editor. */
document.addEventListener('click',e=>{
  const stopFlag=e.target.closest?.('.trip-stop-summary-flag-slot');
  if(!stopFlag)return;
  const row=stopFlag.closest('.trip-destination-stop');
  const country=row?.querySelector('.trip-stop-country')?.value?.trim();
  if(!country)return;
  e.preventDefault();
  e.stopPropagation();
  openCountry(country);
});

/* Hotfix: Trips-page adaptive flags are delegated because split-flap redraws replace the flag buttons. */
document.addEventListener('click',e=>{
  const flag=e.target.closest?.('#tripList .trip-country-flag[data-trip-country]');
  if(!flag)return;
  const country=flag.dataset.tripCountry?.trim();
  if(!country)return;
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  openCountry(country);
},true);

/* === WozzaWorld hotfix — trip-editor stop flags + shared itinerary notes === */
/* Keep the proven adaptive trip-card flag renderer untouched. Only the stop-summary flag gets navigation semantics. */
const _wwUpdateStopSummarySharedNotes=updateStopSummary;
updateStopSummary=function(row){
  _wwUpdateStopSummarySharedNotes(row);
  const slot=row?.querySelector('.trip-stop-summary-flag-slot');
  const country=row?.querySelector('.trip-stop-country')?.value?.trim()||'';
  if(slot){
    slot.dataset.stopCountry=country;
    slot.setAttribute('role','button');
    slot.setAttribute('tabindex',country?'0':'-1');
    slot.setAttribute('aria-hidden','false');
    slot.setAttribute('aria-label',country?`Open ${country} country card`:'Country');
  }
};

if(!window.__wozzaStopFlagCountryNavigation){
  window.__wozzaStopFlagCountryNavigation=true;
  const openStopFlagCountry=target=>{
    const slot=target?.closest?.('.trip-stop-summary-flag-slot');
    if(!slot)return false;
    const country=slot.dataset.stopCountry||slot.closest('.trip-destination-stop')?.querySelector('.trip-stop-country')?.value?.trim();
    if(!country)return false;
    const trip=document.querySelector('#tripDialog[open]');
    /* Keep the Trip itself open as the immediate parent. Country is mounted
       in the dedicated top-layer dialog, so closing Country simply reveals
       this exact Trip again regardless of whether Trip came from Home or Trips. */
    if(trip){
      window.__wozzaTripCountryReturnScroll=trip.scrollTop;
      window.__wozzaReturnToTripAfterCountry=false;
    }
    openCountry(country,{type:'trip-overlay'});
    return true;
  };
  document.addEventListener('click',e=>{
    if(!e.target.closest?.('#tripDestinationStops .trip-stop-summary-flag-slot'))return;
    if(openStopFlagCountry(e.target)){e.preventDefault();e.stopPropagation()}
  },true);
  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    if(!e.target.closest?.('#tripDestinationStops .trip-stop-summary-flag-slot'))return;
    if(openStopFlagCountry(e.target)){e.preventDefault();e.stopPropagation()}
  },true);
}

function wwSyncItinerarySharedNotes(){
  const main=document.querySelector('#tripNotes');
  const itin=document.querySelector('#masterItineraryTripNotes');
  if(main&&itin&&itin!==document.activeElement)itin.value=main.value;
}
function wwEnsureItinerarySharedNotes(d){
  d=d||document.getElementById('masterItineraryDialog');
  if(!d)return;
  const add=d.querySelector('#masterItineraryAdd');
  if(!add)return;
  let wrap=d.querySelector('.master-itinerary-trip-notes');
  if(!wrap){
    wrap=document.createElement('label');
    wrap.className='master-itinerary-trip-notes';
    wrap.innerHTML='<span>NOTES</span><textarea id="masterItineraryTripNotes" placeholder="Jot down favourite moments, recommendations or anything you want to remember…"></textarea>';
    add.insertAdjacentElement('afterend',wrap);
    const itin=wrap.querySelector('textarea');
    itin.addEventListener('input',()=>{
      const main=document.querySelector('#tripNotes');
      if(!main)return;
      main.value=itin.value;
      main.dispatchEvent(new Event('input',{bubbles:true}));
    });
  }
  wwSyncItinerarySharedNotes();
}

const _wwMasterItineraryDialogSharedNotes=wwMasterItineraryDialog;
wwMasterItineraryDialog=function(){const d=_wwMasterItineraryDialogSharedNotes();wwEnsureItinerarySharedNotes(d);return d};
const _wwRenderMasterItinerarySharedNotes=wwRenderMasterItinerary;
wwRenderMasterItinerary=function(){const out=_wwRenderMasterItinerarySharedNotes();wwEnsureItinerarySharedNotes();return out};
const _wwOpenDailyScheduleSharedNotes=wwOpenDailySchedule;
wwOpenDailySchedule=function(iso){const out=_wwOpenDailyScheduleSharedNotes(iso);wwEnsureItinerarySharedNotes();return out};
document.querySelector('#tripNotes')?.addEventListener('input',wwSyncItinerarySharedNotes);

const _wwCloseSheetReturnTrip=closeSheet;
closeSheet=async function(){
  const returnToTrip=!!window.__wozzaReturnToTripAfterCountry;
  window.__wozzaReturnToTripAfterCountry=false;
  const out=await _wwCloseSheetReturnTrip();
  if(returnToTrip){
    const trip=document.getElementById('tripDialog');
    if(trip&&!trip.open){trip.showModal();requestAnimationFrame(()=>{trip.scrollTop=0})}
  }
  return out;
};

(()=>{if(document.getElementById('ww-trip-notes-hotfix-style'))return;const st=document.createElement('style');st.id='ww-trip-notes-hotfix-style';st.textContent=`
#tripNotes{resize:vertical!important;min-height:96px!important;overflow:auto!important}
#tripDestinationStops .trip-stop-summary-flag-slot{cursor:pointer!important;position:relative!important;z-index:3!important;pointer-events:auto!important}
.master-itinerary-trip-notes{display:block;margin:18px 0 0!important;color:#172f3a!important;font-weight:900!important}
.master-itinerary-trip-notes>span{display:block;margin:0 0 8px 4px;font-size:14px;letter-spacing:.04em}
.master-itinerary-trip-notes textarea{display:block;width:100%;box-sizing:border-box;min-height:92px;resize:vertical;overflow:auto;border:1px solid rgba(23,47,58,.12);outline:0;border-radius:18px;background:rgba(255,255,255,.72);color:#172f3a;padding:13px 15px;font:inherit;font-weight:500;line-height:1.35}
.master-itinerary-trip-notes textarea:focus{border-color:rgba(8,124,150,.34);box-shadow:0 0 0 3px rgba(8,124,150,.08)}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — itinerary autosave + return-to-itinerary === */
function wwPersistItineraryWork(){
  if(!editingTripId)return false;
  const trip=state.trips.find(t=>String(t.id)===String(editingTripId));
  if(!trip)return false;
  const editorRows=$$('#tripDestinationStops .trip-destination-stop');
  const savedStops=trip.destinations||[];
  editorRows.forEach((row,i)=>{
    const stopId=row.dataset.stopId||'';
    const target=savedStops.find(s=>String(s.id||'')===String(stopId))||savedStops[i];
    if(target)target.itinerary=structuredClone(itineraryItemsForRow(row));
  });
  trip.todos=collectTripTodos();
  trip.notes=$('#tripNotes')?.value||trip.notes||'';
  localStorage.setItem('wozzaworld-state',JSON.stringify(state));
  return true;
}

/* Saving an activity is a real save: persist it immediately, then return to the itinerary it came from. */
const _wwSaveStopItineraryAutosave=saveStopItinerary;
saveStopItinerary=function(){
  const row=activeItineraryRow;
  const before=row?JSON.stringify(itineraryItemsForRow(row)):'';
  const out=_wwSaveStopItineraryAutosave();
  const after=row?JSON.stringify(itineraryItemsForRow(row)):'';
  if(row&&after!==before){
    wwPersistItineraryWork();
    wwRenderMasterItinerary();
    const master=wwMasterItineraryDialog();
    if(!master.open)master.showModal();
    rememberTripEditorSnapshot();
  }
  return out;
};

/* Deleting an activity follows the same immediate-persistence rule. */
const _wwOpenStopItineraryAutosave=openStopItinerary;
openStopItinerary=function(row,id=''){
  const out=_wwOpenStopItineraryAutosave(row,id);
  const d=itineraryDialog(),del=d.querySelector('#itinDelete');
  if(del&&!del.hidden){
    const originalDelete=del.onclick;
    del.onclick=e=>{
      const before=JSON.stringify(itineraryItemsForRow(row));
      originalDelete?.call(del,e);
      if(JSON.stringify(itineraryItemsForRow(row))!==before){
        wwPersistItineraryWork();
        wwRenderMasterItinerary();
        const master=wwMasterItineraryDialog();
        if(!master.open)master.showModal();
        rememberTripEditorSnapshot();
      }
    };
  }
  return out;
};

/* Trip notes and itinerary notes are one field and persist without needing the overall Save changes button. */
let wwNotesPersistTimer=0;
function wwQueueSharedNotesPersist(){
  clearTimeout(wwNotesPersistTimer);
  wwNotesPersistTimer=setTimeout(()=>{
    if(wwPersistItineraryWork())rememberTripEditorSnapshot();
  },180);
}
document.querySelector('#tripNotes')?.addEventListener('input',wwQueueSharedNotesPersist);
document.addEventListener('input',e=>{
  if(e.target?.id==='masterItineraryTripNotes')wwQueueSharedNotesPersist();
});

/* === WozzaWorld hotfix — trip itinerary hierarchy + full itinerary image capture === */
function wwItineraryTripMeta(){
  const rows=wwTripStopRows();
  const trip=editingTripId?state.trips.find(t=>String(t.id)===String(editingTripId)):null;
  const name=($('#tripName')?.value||trip?.name||'Trip itinerary').trim();
  const dates=rows.flatMap(r=>[r.querySelector('.trip-destination-from')?.value||'',r.querySelector('.trip-destination-to')?.value||'']).filter(Boolean).sort();
  const start=dates[0]||trip?.start||'',end=dates[dates.length-1]||trip?.end||start;
  const fmt=iso=>{if(!iso)return'';const d=new Date(iso+'T12:00:00');return d.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}).toUpperCase()};
  const companions=[...new Set((trip?.companions||[]).map(x=>String(x||'').trim()).filter(Boolean))];
  const companionLine=companions.length?['Warren',...companions.filter(x=>x.toLowerCase()!=='warren')].join(' & '):'';
  return {name,dateRange:start?(end&&end!==start?`${fmt(start)} – ${fmt(end)}`:fmt(start)):'',companionLine};
}
function wwApplyItineraryTripHeader(d){
  const meta=wwItineraryTripMeta(),head=d?.querySelector('.master-itinerary-head');if(!head)return;
  const small=head.querySelector('small'),title=head.querySelector('h2');
  if(title)title.textContent=meta.name;
  if(small){small.textContent=meta.dateRange;small.classList.add('master-itinerary-date-range')}
  let cap=head.querySelector('.master-itinerary-capture');
  if(!cap){cap=document.createElement('button');cap.type='button';cap.className='master-itinerary-capture';cap.title='Save full itinerary as image';cap.setAttribute('aria-label','Save full itinerary as image');cap.innerHTML='▣';head.insertBefore(cap,head.querySelector('.master-itinerary-close'));cap.onclick=wwCaptureFullItinerary}
}
function wwRenderTripHierarchy(){
  const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent'),rows=wwTripStopRows(),items=wwMasterActivities();
  wwApplyItineraryTripHeader(d);d.querySelector('#masterItineraryAdd').hidden=false;
  if(!items.length){host.innerHTML='<div class="master-itinerary-empty"><strong>Start planning your trip</strong><p>Add your first activity and your day-by-day itinerary will build here.</p></div>';return}
  const dated=[...new Set(items.map(x=>x.startDate||'unscheduled'))].sort((a,b)=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b));
  const dayNo=new Map(dated.map((x,i)=>[x,i+1]));
  host.innerHTML=rows.map((row,si)=>{
    const stopItems=items.filter(x=>x._stopIndex===si);if(!stopItems.length)return'';
    const groups=new Map();stopItems.forEach(x=>{const k=x.startDate||'unscheduled';if(!groups.has(k))groups.set(k,[]);groups.get(k).push(x)});
    const days=[...groups.entries()].sort(([a],[b])=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b)).map(([date,list])=>{
      const title=date==='unscheduled'?'TO BE SCHEDULED':wwItineraryDayLabel(date);
      return `<section class="master-itinerary-day"><div class="master-itinerary-dayhead"><b>${date==='unscheduled'?'FLEXIBLE':`DAY ${dayNo.get(date)}`}</b><span>${esc(title)}</span></div><div class="master-itinerary-daybody">${list.map(wwActivityScheduleRow).join('')}</div></section>`
    }).join('');
    return `<section class="master-itinerary-stop">${rows.length>1?`<h3>${esc(wwStopName(row,si))}</h3>`:''}${days}</section>`
  }).join('');
  wwWireItineraryActivityActions(host,d)
}
wwRenderMasterItinerary=wwRenderTripHierarchy;
wwOpenTripItinerary=function(){wwRenderTripHierarchy();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()};
wwOpenMasterItinerary=function(){wwRenderTripHierarchy();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()};

async function wwCaptureFullItinerary(){
  /* Canvas-first exporter: avoids SVG foreignObject, which is unreliable in Android WebView/PWA. */
  const meta=wwItineraryTripMeta(),rows=wwTripStopRows(),items=wwMasterActivities(),multi=rows.length>1;
  if(!items.length)return;
  const W=720,pad=42,contentW=W-pad*2,dayHeadH=72,rowPad=22;
  const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),linkRects=[];
  const font='Arial, sans-serif';
  const wrap=(text,maxWidth,fontSpec)=>{ctx.font=fontSpec;const words=String(text||'').split(/\s+/),lines=[];let line='';for(const w of words){const test=line?line+' '+w:w;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=w}else line=test}if(line)lines.push(line);return lines.length?lines:['']};
  const groupsByStop=rows.map((row,si)=>{const a=items.filter(x=>x._stopIndex===si),m=new Map();a.forEach(x=>{const k=x.startDate||'unscheduled';if(!m.has(k))m.set(k,[]);m.get(k).push(x)});return [...m.entries()].sort(([a],[b])=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b))});
  const dated=[...new Set(items.map(x=>x.startDate||'unscheduled'))].sort((a,b)=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b)),dayNo=new Map(dated.map((x,i)=>[x,i+1]));
  let H=pad+70+(meta.dateRange?34:0)+18;
  groupsByStop.forEach((groups,si)=>{if(!groups.length)return;if(multi)H+=54;groups.forEach(([date,list])=>{H+=dayHeadH;list.forEach(x=>{const lines=wrap(x.name||'Activity',390,`700 27px ${font}`);H+=Math.max(86,rowPad+lines.length*31+28)});H+=18})});H+=pad;
  const scale=Math.min(2,8192/Math.max(W,H));canvas.width=Math.round(W*scale);canvas.height=Math.round(H*scale);ctx.scale(scale,scale);
  ctx.fillStyle='#fff0c7';ctx.fillRect(0,0,W,H);let y=pad;
  ctx.fillStyle='#172f3a';ctx.font=`800 48px ${font}`;wrap(meta.name,contentW,`800 48px ${font}`).forEach(l=>{ctx.fillText(l,pad,y+46);y+=54});
  if(meta.dateRange){ctx.fillStyle='#07849a';ctx.font=`800 22px ${font}`;ctx.fillText(meta.dateRange,pad,y+18);y+=38}y+=12;
  groupsByStop.forEach((groups,si)=>{if(!groups.length)return;if(multi){ctx.fillStyle='#07849a';ctx.font=`900 28px ${font}`;ctx.fillText(String(wwStopName(rows[si],si)).toUpperCase(),pad,y+30);y+=54}
    groups.forEach(([date,list])=>{ctx.fillStyle='#fff';roundRect(ctx,pad,y,contentW,dayHeadH,22,true);ctx.fillStyle='#07849a';ctx.fillRect(pad,y,120,dayHeadH);ctx.fillStyle='#fff';ctx.font=`800 23px ${font}`;ctx.fillText(date==='unscheduled'?'FLEXIBLE':`DAY ${dayNo.get(date)}`,pad+22,y+44);ctx.fillStyle='#172f3a';ctx.font=`700 23px ${font}`;ctx.fillText(date==='unscheduled'?'TO BE SCHEDULED':wwItineraryDayLabel(date),pad+142,y+44);y+=dayHeadH;
      ctx.fillStyle='#ffc326';ctx.fillRect(pad,y,contentW,1);
      list.forEach(x=>{const lines=wrap(x.name||'Activity',390,`700 27px ${font}`),rh=Math.max(86,rowPad+lines.length*31+28);ctx.fillStyle='#ffc326';ctx.fillRect(pad,y,contentW,rh);ctx.fillStyle='#172f3a';ctx.font=`700 23px ${font}`;ctx.fillText(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')),pad+22,y+37);ctx.font=`26px ${font}`;ctx.fillText(itineraryIcon(x),pad+132,y+38);ctx.font=`700 27px ${font}`;lines.forEach((l,i)=>ctx.fillText(l,pad+188,y+37+i*31));ctx.fillStyle='rgba(23,47,58,.58)';ctx.font=`400 18px ${font}`;ctx.fillText(x._stopName||'',pad+188,y+37+lines.length*31+3);
        /* Keep the useful info control; edit controls are intentionally omitted. */ctx.beginPath();ctx.arc(W-pad-34,y+rh/2,27,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();ctx.fillStyle='#07849a';ctx.font=`800 25px ${font}`;ctx.textAlign='center';ctx.fillText('i',W-pad-34,y+rh/2+9);ctx.textAlign='left';y+=rh});y+=18})});
  const png=await new Promise(res=>canvas.toBlob(res,'image/png',.96));if(!png){alert('Sorry — the itinerary image could not be created on this device.');return}const url=URL.createObjectURL(png),a=document.createElement('a');a.href=url;a.download=`${(meta.name||'trip-itinerary').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'')}-itinerary.png`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)
}
function roundRect(ctx,x,y,w,h,r,fill){r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();if(fill)ctx.fill()}

(()=>{if(document.getElementById('ww-itinerary-capture-style'))return;const st=document.createElement('style');st.id='ww-itinerary-capture-style';st.textContent=`
.master-itinerary-head{position:relative!important;padding-right:138px!important;display:flex!important;flex-direction:column!important}.master-itinerary-head h2{order:1!important}.master-itinerary-head small{order:2!important}
.master-itinerary-head .master-itinerary-date-range{display:block!important;color:#07849a!important;font-weight:900!important;letter-spacing:.06em!important;margin-top:5px!important}
.master-itinerary-capture{position:absolute!important;right:78px!important;top:50%!important;transform:translateY(-50%)!important;width:54px!important;height:54px!important;border:0!important;border-radius:50%!important;background:#fff!important;color:#123542!important;font-size:24px!important;font-weight:900!important;display:grid!important;place-items:center!important;box-shadow:none!important;cursor:pointer!important}
.master-itinerary-stop{margin:0 0 22px!important}
.master-itinerary-stop>h3{margin:0 4px 10px!important;color:#07849a!important;font-size:21px!important;font-weight:950!important;letter-spacing:.045em!important;text-transform:uppercase!important}
.master-itinerary-stop .master-itinerary-day{margin-bottom:12px!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — tappable itinerary rows + next-departure trip shortcut === */
wwWireItineraryActivityActions=function(host,d){
  host.querySelectorAll('.master-itinerary-edit').forEach(b=>b.onclick=e=>{
    e.stopPropagation();
    const row=wwTripStopRows()[Number(b.dataset.stop)];
    if(row){d.close();openStopItinerary(row,b.dataset.id)}
  });
  host.querySelectorAll('.master-itinerary-activity').forEach(a=>{
    a.setAttribute('role','button');a.tabIndex=0;
    const open=()=>{const row=wwTripStopRows()[Number(a.dataset.stop)];if(row)wwOpenQuickInfo(row,a.dataset.id)};
    a.onclick=e=>{if(e.target.closest('.master-itinerary-edit'))return;open()};
    a.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&!e.target.closest('.master-itinerary-edit')){e.preventDefault();open()}}
  })
};
wwActivityScheduleRow=function(x){return `<div class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${itineraryIcon(x)}</span><span class="master-itinerary-activity-main"><strong>${esc(x.name||'Activity')}</strong><small>${esc(x._stopName)}</small></span><span class="master-itinerary-activity-actions"><button type="button" class="master-itinerary-edit" data-stop="${x._stopIndex}" data-id="${esc(x.id)}" aria-label="Edit ${esc(x.name||'activity')}" title="Edit">✎</button></span></div>`};

/* The departure board always remembers the exact trip used to build its message. */
const _wwRenderDepartureBoardShortcut=renderDepartureBoard;
renderDepartureBoard=function(){
  _wwRenderDepartureBoardShortcut();
  const el=$('#departureBoard');if(!el||el.hidden)return;
  const upcoming=state.trips.filter(t=>{const start=orderedTripDates(t).start;return start&&countdownDays(start)>=0}).sort((a,b)=>orderedTripDates(a).start.localeCompare(orderedTripDates(b).start))[0];
  if(!upcoming)return;
  el.dataset.tripId=upcoming.id;
  el.setAttribute('role','button');el.tabIndex=0;el.style.cursor='pointer';
  const go=e=>{if(e){e.preventDefault();e.stopPropagation()}const t=state.trips.find(x=>String(x.id)===String(el.dataset.tripId));if(t)openTripEditor(t)};
  el.onclick=go;el.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')go(e)};
};

(()=>{const st=document.createElement('style');st.id='ww-itinerary-row-shortcut-style';st.textContent=`
.master-itinerary-activity{cursor:pointer!important}
.master-itinerary-activity-actions{flex:0 0 auto!important}
.master-itinerary-activity-main{min-width:0!important;flex:1 1 auto!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — clean itinerary rows, modal edit, compact header === */
wwActivityScheduleRow=function(x){return `<div class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${itineraryIcon(x)}</span><span class="master-itinerary-activity-main"><strong>${esc(x.name||'Activity')}</strong></span></div>`};

const _wwOpenQuickInfoClean=wwOpenQuickInfo;
wwOpenQuickInfo=function(row,id){
  _wwOpenQuickInfoClean(row,id);
  const d=wwQuickInfoDialog(),body=d.querySelector('#itineraryQuickInfoBody');
  let edit=d.querySelector('.itinerary-quick-info-edit');
  if(!edit){edit=document.createElement('button');edit.type='button';edit.className='itinerary-quick-info-edit';edit.textContent='EDIT';body.appendChild(edit)}
  else body.appendChild(edit);
  edit.onclick=()=>{d.close();openStopItinerary(row,id)};
};

/* Header: trip name first, date beneath, compact actions paired top-right. */
function wwApplyItineraryTripHeader(d){
  const meta=wwItineraryTripMeta(),head=d?.querySelector('.master-itinerary-head');if(!head)return;
  const small=head.querySelector('small'),title=head.querySelector('h2');
  if(title)title.textContent=meta.name;
  if(small){small.textContent=meta.dateRange;small.classList.add('master-itinerary-date-range')}
  let companions=head.querySelector('.master-itinerary-companions');
  if(meta.companionLine){
    if(!companions){companions=document.createElement('span');companions.className='master-itinerary-companions';head.querySelector('div')?.appendChild(companions)}
    companions.innerHTML=`${peopleIcon()}<span>${esc(meta.companionLine)}</span>`;companions.hidden=false;
  }else if(companions)companions.hidden=true;
  let cap=head.querySelector('.master-itinerary-capture');
  if(!cap){cap=document.createElement('button');cap.type='button';cap.className='master-itinerary-capture';cap.title='Save full itinerary as image';cap.setAttribute('aria-label','Save full itinerary as image');cap.innerHTML='▣';head.insertBefore(cap,head.querySelector('.master-itinerary-close'));cap.onclick=wwCaptureFullItinerary}
}

/* Export mirrors the clean itinerary: no destination repetition or action controls. */
async function wwCaptureFullItinerary(){
  const meta=wwItineraryTripMeta(),rows=wwTripStopRows(),items=wwMasterActivities(),multi=rows.length>1;if(!items.length)return;
  const W=720,pad=42,contentW=W-pad*2,dayHeadH=72,rowPad=22,canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),font='Arial, sans-serif';
  const wrap=(text,maxWidth,fontSpec)=>{ctx.font=fontSpec;const words=String(text||'').split(/\s+/),lines=[];let line='';for(const w of words){const test=line?line+' '+w:w;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=w}else line=test}if(line)lines.push(line);return lines.length?lines:['']};
  const groupsByStop=rows.map((row,si)=>{const a=items.filter(x=>x._stopIndex===si),m=new Map();a.forEach(x=>{const k=x.startDate||'unscheduled';if(!m.has(k))m.set(k,[]);m.get(k).push(x)});return [...m.entries()].sort(([a],[b])=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b))});
  const dated=[...new Set(items.map(x=>x.startDate||'unscheduled'))].sort((a,b)=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b)),dayNo=new Map(dated.map((x,i)=>[x,i+1]));
  const nameLines=wrap(meta.name,contentW,`800 48px ${font}`);let H=pad+nameLines.length*54+(meta.dateRange?38:0)+12;
  groupsByStop.forEach(groups=>{if(!groups.length)return;if(multi)H+=54;groups.forEach(([date,list])=>{H+=dayHeadH;list.forEach(x=>{const lines=wrap(x.name||'Activity',430,`700 27px ${font}`);H+=Math.max(76,rowPad+lines.length*31+18)});H+=18})});H+=pad;
  const scale=Math.min(2,8192/Math.max(W,H));canvas.width=Math.round(W*scale);canvas.height=Math.round(H*scale);ctx.scale(scale,scale);ctx.fillStyle='#fff0c7';ctx.fillRect(0,0,W,H);let y=pad;
  ctx.fillStyle='#172f3a';ctx.font=`800 48px ${font}`;nameLines.forEach(l=>{ctx.fillText(l,pad,y+46);y+=54});if(meta.dateRange){ctx.fillStyle='#07849a';ctx.font=`800 22px ${font}`;ctx.fillText(meta.dateRange,pad,y+18);y+=38}y+=12;
  groupsByStop.forEach((groups,si)=>{if(!groups.length)return;if(multi){ctx.fillStyle='#07849a';ctx.font=`900 28px ${font}`;ctx.fillText(String(wwStopName(rows[si],si)).toUpperCase(),pad,y+30);y+=54}groups.forEach(([date,list])=>{ctx.fillStyle='#fff';roundRect(ctx,pad,y,contentW,dayHeadH,22,true);ctx.fillStyle='#07849a';ctx.fillRect(pad,y,120,dayHeadH);ctx.fillStyle='#fff';ctx.font=`800 23px ${font}`;ctx.fillText(date==='unscheduled'?'FLEXIBLE':`DAY ${dayNo.get(date)}`,pad+22,y+44);ctx.fillStyle='#172f3a';ctx.font=`700 23px ${font}`;ctx.fillText(date==='unscheduled'?'TO BE SCHEDULED':wwItineraryDayLabel(date),pad+142,y+44);y+=dayHeadH;list.forEach(x=>{const lines=wrap(x.name||'Activity',430,`700 27px ${font}`),rh=Math.max(76,rowPad+lines.length*31+18);ctx.fillStyle='#ffc326';ctx.fillRect(pad,y,contentW,rh);ctx.fillStyle='#172f3a';ctx.font=`700 23px ${font}`;ctx.fillText(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')),pad+22,y+37);ctx.font=`26px ${font}`;ctx.fillText(itineraryIcon(x),pad+132,y+38);ctx.font=`700 27px ${font}`;lines.forEach((l,i)=>ctx.fillText(l,pad+188,y+37+i*31));y+=rh});y+=18})});
  const png=await new Promise(res=>canvas.toBlob(res,'image/png',.96));if(!png){alert('Sorry — the itinerary image could not be created on this device.');return}const url=URL.createObjectURL(png),a=document.createElement('a');a.href=url;a.download=`${(meta.name||'trip-itinerary').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'')}-itinerary.png`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000)
}

(()=>{const st=document.createElement('style');st.id='ww-itinerary-clean-modal-header-style';st.textContent=`
.master-itinerary-head{position:relative!important;display:block!important;padding:0 116px 18px 0!important;margin-bottom:10px!important;min-height:82px!important}
.master-itinerary-head>div{display:flex!important;flex-direction:column!important;gap:4px!important}
.master-itinerary-head h2{order:1!important;margin:0!important;line-height:1.02!important}
.master-itinerary-head small.master-itinerary-date-range{order:2!important;margin:2px 0 0!important;line-height:1.25!important}
.master-itinerary-head .master-itinerary-companions{order:3!important;display:flex!important;align-items:flex-start!important;gap:6px!important;width:100%!important;max-width:100%!important;min-width:0!important;box-sizing:border-box!important;margin:1px 0 0!important;color:#7b858a!important;font-size:15px!important;font-weight:650!important;line-height:1.25!important;letter-spacing:0!important}.master-itinerary-head .master-itinerary-companions>span{display:block!important;min-width:0!important;max-width:100%!important;white-space:normal!important;overflow-wrap:normal!important;word-break:normal!important}.master-itinerary-head .master-itinerary-companions svg{width:18px!important;height:18px!important;fill:none!important;stroke:currentColor!important;stroke-width:1.8!important;stroke-linecap:round!important;stroke-linejoin:round!important;flex:0 0 auto!important}
.master-itinerary-head .master-itinerary-companions[hidden]{display:none!important}
.master-itinerary-close,.master-itinerary-capture{position:absolute!important;top:0!important;transform:none!important;width:48px!important;height:48px!important;border-radius:50%!important;background:#fff!important;color:#123542!important;display:grid!important;place-items:center!important;margin:0!important}
.master-itinerary-close{right:0!important}.master-itinerary-capture{right:56px!important;font-size:21px!important}
.master-itinerary-stop{margin-top:0!important}.master-itinerary-stop .master-itinerary-day:first-child{margin-top:0!important}
.master-itinerary-activity{grid-template-columns:minmax(86px,auto) 42px minmax(0,1fr)!important;padding-right:22px!important}
.master-itinerary-activity-main small,.master-itinerary-activity-actions{display:none!important}
.master-itinerary-activity-main{padding-right:0!important}
.itinerary-quick-info-edit{width:100%!important;margin-top:16px!important;border:0!important;border-radius:18px!important;background:#07849a!important;color:#fff!important;padding:14px 18px!important;font:inherit!important;font-weight:900!important;letter-spacing:.06em!important;cursor:pointer!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — itinerary space + itinerary shortcuts === */
/* Reclaim the old action/icon space: time stays aligned, emoji becomes a compact prefix, title gets the rest. */
(()=>{if(document.getElementById('ww-itinerary-space-shortcuts-style'))return;const st=document.createElement('style');st.id='ww-itinerary-space-shortcuts-style';st.textContent=`
.master-itinerary-activity{grid-template-columns:minmax(82px,auto) 28px minmax(0,1fr)!important;column-gap:8px!important;padding-left:22px!important;padding-right:22px!important}
.master-itinerary-icon{width:28px!important;min-width:28px!important;justify-self:start!important;text-align:left!important}
.master-itinerary-activity-main{min-width:0!important;width:100%!important;padding:0!important}
.master-itinerary-activity-main strong{display:block!important;width:100%!important}
.wozza-calendar-view-itinerary{border:0!important;border-radius:14px!important;background:#07849a!important;color:#fff!important;padding:12px 18px!important;font:inherit!important;font-weight:900!important;cursor:pointer!important}
#tripDialog .ww-trip-view-itinerary{display:block!important;width:100%!important;margin:18px 0 24px!important;border:0!important;border-radius:18px!important;background:#fff!important;color:#07849a!important;padding:15px 18px!important;font:inherit!important;font-weight:950!important;letter-spacing:.045em!important;text-transform:uppercase!important;box-shadow:0 6px 16px rgba(0,0,0,.08)!important;cursor:pointer!important}
`;document.head.appendChild(st)})();

function wwEnsureCalendarItineraryShortcut(){
  const ov=wozzaCalendarEnsure(),actions=ov.querySelector('.wozza-calendar-actions');if(!actions)return;
  let b=actions.querySelector('.wozza-calendar-view-itinerary');
  if(!b){b=document.createElement('button');b.type='button';b.className='wozza-calendar-view-itinerary';b.textContent='View itinerary';const close=actions.querySelector('.wozza-calendar-cancel');actions.insertBefore(b,close);b.onclick=()=>{wozzaCalendarClose();requestAnimationFrame(()=>wwOpenTripItinerary())}}
  b.hidden=wozzaCalendarMode!=='range';
}
const _wwCalRenderItineraryShortcut=wozzaCalendarRender;
wozzaCalendarRender=function(){_wwCalRenderItineraryShortcut();wwEnsureCalendarItineraryShortcut()};

function wwEnsureMultiStopItineraryShortcut(){
  const host=document.getElementById('tripDestinationStops'),add=document.getElementById('addTripDestination');if(!host||!add)return;
  const rows=wwTripStopRows();let b=document.getElementById('wwTripViewItinerary');
  if(rows.length<=1){b?.remove();return}
  if(!b){b=document.createElement('button');b.type='button';b.id='wwTripViewItinerary';b.className='ww-trip-view-itinerary';b.textContent='View itinerary';b.onclick=e=>{e.preventDefault();e.stopPropagation();wwOpenTripItinerary()}}
  /* Add Stop visually belongs to the stop stack; put the shortcut immediately after it and before the next editor section. */
  add.insertAdjacentElement('afterend',b);
}
const _wwRefreshTripEditorSummaryShortcut=refreshTripEditorSummaryLine;
refreshTripEditorSummaryLine=function(){const r=_wwRefreshTripEditorSummaryShortcut.apply(this,arguments);wwEnsureMultiStopItineraryShortcut();return r};
const _wwUpdateStopLabelsShortcut=updateStopLabels;
updateStopLabels=function(){const r=_wwUpdateStopLabelsShortcut.apply(this,arguments);wwEnsureMultiStopItineraryShortcut();return r};
document.addEventListener('click',e=>{if(e.target.closest?.('#addTripDestination,.trip-stop-remove'))requestAnimationFrame(wwEnsureMultiStopItineraryShortcut)},true);

/* === WozzaWorld hotfix — export placeholder + conditional subtle itinerary shortcut + export-ratio rows === */
(()=>{if(document.getElementById('ww-trip-export-ratio-hotfix-style'))return;const st=document.createElement('style');st.id='ww-trip-export-ratio-hotfix-style';st.textContent=`
/* Match the proven export geometry, while retaining the live app styling. */
.master-itinerary-activity{grid-template-columns:100px 34px minmax(0,1fr)!important;column-gap:6px!important;padding-left:22px!important;padding-right:14px!important}
.master-itinerary-icon{width:34px!important;min-width:34px!important;justify-self:start!important;text-align:left!important}
.master-itinerary-activity-main{min-width:0!important;width:100%!important;padding:0!important}
.master-itinerary-activity-main strong{display:block!important;width:100%!important}
/* Secondary shortcut: useful, but deliberately quieter than the trip's primary actions. */
#tripDialog .ww-trip-view-itinerary{width:auto!important;min-width:0!important;max-width:240px!important;margin:14px auto 22px!important;border:2px solid rgba(255,255,255,.58)!important;border-radius:999px!important;background:rgba(255,255,255,.10)!important;color:#fff!important;padding:9px 20px!important;box-shadow:none!important;font-size:15px!important;font-weight:900!important;letter-spacing:.04em!important}
#tripDialog .ww-trip-export-placeholder{display:block!important;width:100%!important;margin:20px 0 4px!important;border:0!important;border-radius:18px!important;background:#f4c400!important;color:#172f3a!important;padding:15px 18px!important;font:inherit!important;font-weight:950!important;letter-spacing:.045em!important;text-transform:uppercase!important;cursor:default!important}
`;document.head.appendChild(st)})();

function wwTripHasAnyItinerary(){return wwTripStopRows().some(row=>itineraryItemsForRow(row).length>0)}

wwEnsureMultiStopItineraryShortcut=function(){
  const host=document.getElementById('tripDestinationStops'),add=document.getElementById('addTripDestination');if(!host||!add)return;
  const rows=wwTripStopRows();let b=document.getElementById('wwTripViewItinerary');
  if(rows.length<=1||!wwTripHasAnyItinerary()){b?.remove();return}
  if(!b){b=document.createElement('button');b.type='button';b.id='wwTripViewItinerary';b.className='ww-trip-view-itinerary';b.textContent='View itinerary';b.onclick=e=>{e.preventDefault();e.stopPropagation();wwOpenTripItinerary()}}
  add.insertAdjacentElement('afterend',b);
}

function wwEnsureExportTripPlaceholder(){
  const notes=document.querySelector('#tripDialog .trip-notes-section')||document.getElementById('tripNotes')?.closest('section,div');
  if(!notes)return;
  let b=document.getElementById('wwTripExportPlaceholder');
  if(!b){b=document.createElement('button');b.type='button';b.id='wwTripExportPlaceholder';b.className='ww-trip-export-placeholder';b.textContent='Export trip';b.setAttribute('aria-label','Export trip (coming soon)');b.onclick=e=>{e.preventDefault();e.stopPropagation()}}
  notes.insertAdjacentElement('afterend',b);
}

const _wwOpenTripExportPlaceholder=openTrip;
openTrip=function(){const r=_wwOpenTripExportPlaceholder.apply(this,arguments);requestAnimationFrame(()=>{wwEnsureExportTripPlaceholder();wwEnsureMultiStopItineraryShortcut()});return r};
const _wwOpenTripEditorExportPlaceholder=openTripEditor;
openTripEditor=function(){const r=_wwOpenTripEditorExportPlaceholder.apply(this,arguments);requestAnimationFrame(()=>{wwEnsureExportTripPlaceholder();wwEnsureMultiStopItineraryShortcut()});return r};

document.addEventListener('click',e=>{if(e.target.closest?.('#tripDialog .trip-notes-section,#addTripDestination,.trip-stop-remove'))requestAnimationFrame(()=>{wwEnsureExportTripPlaceholder();wwEnsureMultiStopItineraryShortcut()})},true);

/* === WozzaWorld hotfix — fixed compact itinerary columns === */
(()=>{if(document.getElementById('ww-itinerary-fixed-columns-hotfix'))return;const st=document.createElement('style');st.id='ww-itinerary-fixed-columns-hotfix';st.textContent=`
/* Time and icon consume only what they need; the activity title owns all remaining width. */
.master-itinerary-activity{grid-template-columns:112px 26px minmax(0,1fr)!important;column-gap:4px!important;padding-left:22px!important;padding-right:12px!important;align-items:start!important}
.master-itinerary-activity time{width:112px!important;min-width:112px!important;margin:0!important;padding:0!important;justify-self:start!important;text-align:left!important}
.master-itinerary-icon{width:26px!important;min-width:26px!important;margin:0!important;padding:0!important;justify-self:start!important;text-align:left!important}
.master-itinerary-activity-main{min-width:0!important;width:100%!important;margin:0!important;padding:0!important}
.master-itinerary-activity-main strong{display:block!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
@media(max-width:430px){.master-itinerary-activity{grid-template-columns:104px 24px minmax(0,1fr)!important;column-gap:3px!important;padding-left:18px!important;padding-right:10px!important}.master-itinerary-activity time{width:104px!important;min-width:104px!important}.master-itinerary-icon{width:24px!important;min-width:24px!important}}
`;document.head.appendChild(st)})();

/* === WozzaWorld recovery hotfix — restore proven itinerary geometry without rolling back features === */
(()=>{if(document.getElementById('ww-itinerary-layout-recovery'))return;const st=document.createElement('style');st.id='ww-itinerary-layout-recovery';st.textContent=`
/* Restore the original responsive day-card behaviour: two cards per row when space allows, one on phone portrait. */
#masterItineraryContent{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important;align-items:start!important}
.master-itinerary-day{min-width:0!important;width:100%!important}
/* Restore the compact, proven activity geometry. Later functionality (row click/details/edit modal) is untouched. */
.master-itinerary-activity{display:grid!important;grid-template-columns:48px 24px minmax(0,1fr)!important;column-gap:6px!important;align-items:start!important;width:100%!important;padding:7px 2px!important}
.master-itinerary-activity time{width:auto!important;min-width:0!important;margin:0!important;padding:0!important;justify-self:start!important;text-align:left!important}
.master-itinerary-icon{width:auto!important;min-width:0!important;margin:0!important;padding:0!important;justify-self:start!important;text-align:left!important}
.master-itinerary-activity-main{min-width:0!important;width:auto!important;margin:0!important;padding:0!important}
.master-itinerary-activity-main strong{display:block!important;width:auto!important;max-width:none!important;margin:0!important;padding:0!important}
@media(max-width:560px){#masterItineraryContent{grid-template-columns:1fr!important}.master-itinerary-dialog{width:min(94vw,720px)!important}}
/* Export trip belongs with the editor actions, not as a large content CTA. */
#tripDialog .ww-trip-export-placeholder{width:auto!important;margin:0!important;border:0!important;border-radius:999px!important;background:#fff!important;color:#172f3a!important;padding:13px 18px!important;font:inherit!important;font-weight:400!important;letter-spacing:0!important;text-transform:none!important;cursor:default!important;align-self:stretch!important}
`;document.head.appendChild(st)})();

function wwRecoverExportTripPlacement(){
  wwEnsureExportTripPlaceholder?.();
  const b=document.getElementById('wwTripExportPlaceholder'),cancel=document.getElementById('cancelTrip'),del=document.getElementById('deleteTripBtn');
  if(!b||!cancel)return;
  const actions=cancel.parentElement;if(!actions)return;
  actions.insertBefore(b,cancel);
  /* Keep requested order: bin | Export trip | Cancel | Save changes. */
  if(del&&del.parentElement===actions)actions.insertBefore(del,b);
}
const _wwOpenTripRecovery=openTrip;
openTrip=function(){const r=_wwOpenTripRecovery.apply(this,arguments);requestAnimationFrame(wwRecoverExportTripPlacement);return r};
const _wwOpenTripEditorRecovery=openTripEditor;
openTripEditor=function(){const r=_wwOpenTripEditorRecovery.apply(this,arguments);requestAnimationFrame(wwRecoverExportTripPlacement);return r};

/* === WozzaWorld final rest hotfix — landscape day pairing + tidy trip action row === */
(()=>{if(document.getElementById('ww-final-rest-hotfix'))return;const st=document.createElement('style');st.id='ww-final-rest-hotfix';st.textContent=`
/* Portrait is deliberately untouched. In landscape, pair days inside each stop: 1+2, 3+4, etc. */
@media (orientation:landscape) and (min-width:700px){
  #masterItineraryContent{display:block!important}
  .master-itinerary-stop{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important;align-items:start!important;width:100%!important;margin-bottom:22px!important}
  .master-itinerary-stop>h3{grid-column:1/-1!important;margin-bottom:-2px!important}
  .master-itinerary-stop .master-itinerary-day{min-width:0!important;width:100%!important;margin:0!important}
}
/* Keep all trip editor actions on one clean row. */
#tripForm .dialog-actions{display:grid!important;grid-template-columns:auto minmax(0,.9fr) minmax(0,1fr) minmax(0,1.35fr)!important;gap:10px!important;align-items:stretch!important;width:100%!important}
#tripForm .dialog-actions>button{min-width:0!important;margin:0!important;white-space:nowrap!important}
#tripDialog .ww-trip-export-placeholder{width:100%!important;height:auto!important;min-height:48px!important;padding:12px 14px!important;border-radius:999px!important;background:#fff!important;color:#172f3a!important;font-family:inherit!important;font-size:inherit!important;font-weight:inherit!important;line-height:inherit!important;letter-spacing:0!important;text-transform:none!important;display:flex!important;align-items:center!important;justify-content:center!important}
#tripForm .dialog-actions #deleteTripBtn{grid-column:1!important}
#tripForm .dialog-actions #wwTripExportPlaceholder{grid-column:2!important}
#tripForm .dialog-actions #cancelTrip{grid-column:3!important}
#tripForm .dialog-actions .primary{grid-column:4!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld action-row polish hotfix — exact existing Close styling === */
(()=>{
  if(document.getElementById('ww-trip-action-exact-match'))return;
  const st=document.createElement('style');
  st.id='ww-trip-action-exact-match';
  st.textContent=`
#tripForm .dialog-actions{grid-template-columns:auto minmax(0,1fr) minmax(0,1fr) minmax(0,1.35fr)!important;align-items:stretch!important}
#tripForm .dialog-actions>#wwTripExportPlaceholder,
#tripForm .dialog-actions>#cancelTrip{height:100%!important;min-height:0!important}
`;
  document.head.appendChild(st);
})();
function wwPolishTripActionRow(){
  const b=document.getElementById('wwTripExportPlaceholder');
  const close=document.getElementById('cancelTrip');
  if(!b||!close)return;
  close.textContent='Close';
  /* Reuse the real existing secondary-button classes instead of approximating them. */
  b.className=close.className;
  b.textContent='Export trip';
  b.setAttribute('aria-label','Export trip (coming soon)');
  b.onclick=e=>{e.preventDefault();e.stopPropagation()};
}
const _wwOpenTripActionPolish=openTrip;
openTrip=function(){const r=_wwOpenTripActionPolish.apply(this,arguments);requestAnimationFrame(()=>{wwRecoverExportTripPlacement?.();wwPolishTripActionRow()});return r};
const _wwOpenTripEditorActionPolish=openTripEditor;
openTripEditor=function(){const r=_wwOpenTripEditorActionPolish.apply(this,arguments);requestAnimationFrame(()=>{wwRecoverExportTripPlacement?.();wwPolishTripActionRow()});return r};

/* === WozzaWorld final action alignment hotfix === */
(()=>{
  if(document.getElementById('ww-trip-action-final-align'))return;
  const st=document.createElement('style');
  st.id='ww-trip-action-final-align';
  st.textContent=`
#tripForm .dialog-actions>#wwTripExportPlaceholder,
#tripForm .dialog-actions>#cancelTrip{
  background:#fff!important;
  color:inherit!important;
  font-family:inherit!important;
  font-size:inherit!important;
  font-weight:inherit!important;
  line-height:1!important;
  padding:0 14px!important;
  height:48px!important;
  min-height:48px!important;
  box-sizing:border-box!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  text-align:center!important;
  vertical-align:middle!important;
}
#tripForm .dialog-actions>#wwTripExportPlaceholder{color:var(--ink,#172f3a)!important}
#tripForm .dialog-actions>#cancelTrip{color:var(--ink,#172f3a)!important}
`;
  document.head.appendChild(st);
})();

/* === WozzaWorld action row final micro-hotfix — contain bin + dirty save emphasis === */
(()=>{
  if(document.getElementById('ww-action-row-micro-final'))return;
  const st=document.createElement('style');
  st.id='ww-action-row-micro-final';
  st.textContent=`
#tripForm .dialog-actions{
  grid-template-columns:44px minmax(0,1.15fr) minmax(0,.78fr) minmax(0,1.35fr)!important;
  gap:9px!important;
  padding-left:0!important;
  padding-right:0!important;
  overflow:visible!important;
}
#tripForm .dialog-actions>#deleteTripBtn{
  width:44px!important;min-width:44px!important;max-width:44px!important;
  height:44px!important;min-height:44px!important;
  margin:0!important;padding:0!important;justify-self:start!important;
}
#tripForm .dialog-actions>#wwTripExportPlaceholder,
#tripForm .dialog-actions>#cancelTrip,
#tripForm .dialog-actions>.primary{
  height:44px!important;min-height:44px!important;
  font-size:12px!important;line-height:1!important;
}
#tripForm .dialog-actions>.primary{font-weight:400!important}
#tripForm .dialog-actions>.primary.ww-trip-save-dirty{font-weight:850!important}
@media(max-width:420px){
 #tripForm .dialog-actions{grid-template-columns:40px minmax(0,1.12fr) minmax(0,.72fr) minmax(0,1.32fr)!important;gap:7px!important}
 #tripForm .dialog-actions>#deleteTripBtn{width:40px!important;min-width:40px!important;max-width:34px!important;height:34px!important;min-height:40px!important}
 #tripForm .dialog-actions>#wwTripExportPlaceholder,#tripForm .dialog-actions>#cancelTrip,#tripForm .dialog-actions>.primary{height:40px!important;min-height:40px!important;font-size:12px!important;padding-left:8px!important;padding-right:8px!important}
}
`;
  document.head.appendChild(st);
})();
function wwSyncTripSaveEmphasis(){
  const saveBtn=document.querySelector('#tripForm .dialog-actions .primary');
  if(!saveBtn)return;
  saveBtn.classList.toggle('ww-trip-save-dirty',!!editingTripId&&tripEditorIsDirty());
}
document.getElementById('tripForm')?.addEventListener('input',()=>requestAnimationFrame(wwSyncTripSaveEmphasis),true);
document.getElementById('tripForm')?.addEventListener('change',()=>requestAnimationFrame(wwSyncTripSaveEmphasis),true);
document.getElementById('tripForm')?.addEventListener('click',()=>requestAnimationFrame(wwSyncTripSaveEmphasis),true);
const _wwRememberTripEditorSnapshotActionFinal=rememberTripEditorSnapshot;
rememberTripEditorSnapshot=function(){const r=_wwRememberTripEditorSnapshotActionFinal.apply(this,arguments);requestAnimationFrame(wwSyncTripSaveEmphasis);return r};

/* === WozzaWorld activity form polish — dates first + repeatable named links === */
function wwActivityLinks(item={}){
  if(Array.isArray(item.links))return item.links.filter(x=>x&&(x.url||x.name)).map(x=>({url:String(x.url||''),name:String(x.name||'')}));
  const a=[];if(item.locationUrl)a.push({url:item.locationUrl,name:'Map / location'});if(item.url)a.push({url:item.url,name:'Website'});return a;
}
function wwLinkRowMarkup(x={},i=0){return `<div class="itin-link-row" data-link-row="${i}"><input class="itin-link-url" type="url" placeholder="https://…" value="${esc(x.url||'')}"><input class="itin-link-name" type="text" maxlength="50" placeholder="Give the link a name" value="${esc(x.name||'')}"><button type="button" class="itin-link-remove" aria-label="Remove link">×</button></div>`}
function wwReadLinkRows(d){return $$('.itin-link-row',d).map(r=>({url:r.querySelector('.itin-link-url')?.value.trim()||'',name:r.querySelector('.itin-link-name')?.value.trim()||''})).filter(x=>x.url||x.name)}
function wwRenderLinkRows(d,links=[]){const host=d.querySelector('#itinLinksRows');if(!host)return;const vals=[...links];if(!vals.length||vals[vals.length-1].url||vals[vals.length-1].name)vals.push({url:'',name:''});host.innerHTML=vals.map(wwLinkRowMarkup).join('');const refresh=()=>{const rows=$$('.itin-link-row',host);rows.forEach((r,i)=>{const u=r.querySelector('.itin-link-url'),n=r.querySelector('.itin-link-name'),rm=r.querySelector('.itin-link-remove');rm.hidden=rows.length===1||(!u.value&&!n.value&&i===rows.length-1);rm.onclick=()=>{r.remove();refresh()};[u,n].forEach(inp=>inp.oninput=()=>{const current=$$('.itin-link-row',host),last=current[current.length-1];if(last&&(last.querySelector('.itin-link-url').value.trim()||last.querySelector('.itin-link-name').value.trim())){host.insertAdjacentHTML('beforeend',wwLinkRowMarkup({},current.length));refresh()}else refreshButtons()})});refreshButtons()};const refreshButtons=()=>{$$('.itin-link-row',host).forEach((r,i,a)=>{r.querySelector('.itin-link-remove').hidden=a.length===1||(!r.querySelector('.itin-link-url').value&&!r.querySelector('.itin-link-name').value&&i===a.length-1)})};refresh()}
const _wwActivityDialogPolish=itineraryDialog;
itineraryDialog=function(){const d=_wwActivityDialogPolish();if(d.dataset.linksV2)return d;d.dataset.linksV2='1';const form=d.querySelector('.stop-itinerary-form'),name=d.querySelector('#itinName')?.closest('label'),dates=d.querySelector('.itin-two'),type=d.querySelector('.itin-category-field');if(name&&dates)name.insertAdjacentElement('afterend',dates);if(dates&&type)dates.insertAdjacentElement('afterend',type);const oldMap=d.querySelector('#itinLocationUrl')?.closest('label'),oldUrl=d.querySelector('#itinUrl')?.closest('label');if(oldMap){const section=document.createElement('section');section.className='itin-links-section';section.innerHTML='<div class="itin-links-title">Links</div><div id="itinLinksRows"></div>';oldMap.insertAdjacentElement('beforebegin',section);oldMap.remove()}if(oldUrl)oldUrl.remove();return d};
const _wwOpenActivityLinks=openStopItinerary;
openStopItinerary=function(row,id=''){_wwOpenActivityLinks(row,id);const d=itineraryDialog(),x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id))||{};wwRenderLinkRows(d,wwActivityLinks(x))};
/* Replace the inherited saver so unlimited named links persist without disturbing activity/todo behaviour. */
saveStopItinerary=function(){const d=itineraryDialog(),row=activeItineraryRow;if(!row)return;const q=id=>d.querySelector('#'+id),name=q('itinName')?.value.trim();if(!name){q('itinName')?.focus();return}const id=activeItineraryId||crypto.randomUUID?.()||`itin-${Date.now()}`,items=itineraryItemsForRow(row),at=items.findIndex(i=>String(i.id)===String(id)),old=at>=0?items[at]:{},todoIds=syncActivityTodosToTrip(d,id,old),links=wwReadLinkRows(d).filter(x=>x.url);const x={id,name,category:d.dataset.category||'',startDate:q('itinStartDate')?.dataset.iso||'',startTime:q('itinStartTime')?.value||'',endDate:q('itinEndDate')?.dataset.iso||'',endTime:q('itinEndTime')?.value||'',flexible:!!q('itinFlexible')?.checked,tbc:!!q('itinTbc')?.checked,location:q('itinLocation')?.value.trim()||'',contact:q('itinContact')?.value.trim()||'',contactTelephone:q('itinContactTelephone')?.value.trim()||'',links,locationUrl:'',url:'',cost:q('itinCost')?.value.trim()||'',bookingRef:q('itinBookingRef')?.value.trim()||'',notes:q('itinNotes')?.value.trim()||'',todoIds,todoId:todoIds[0]||''};if(at>=0)items[at]=x;else items.push(x);setItineraryItemsForRow(row,items);if(q('itinLinkNotes')?.checked&&x.notes){const notes=$('#tripNotes'),prefix=`${itineraryIcon(x)} ${x.name}: ${x.notes}`;if(notes&&!notes.value.includes(prefix)){notes.value=(notes.value.trim()?notes.value.trim()+'\n':'')+prefix;updateTripNotesSummary()}}updateTripTodoSummary();d.close()};
/* Named links in the read-only activity info dialog. */
const _wwQuickInfoNamedLinks=wwOpenQuickInfo;
wwOpenQuickInfo=function(row,id){_wwQuickInfoNamedLinks(row,id);const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!x)return;const body=document.querySelector('#itineraryQuickInfoBody');if(!body)return;body.querySelectorAll('.itinerary-quick-info-link').forEach(a=>a.remove());const links=wwActivityLinks(x).filter(l=>l.url);const notesBlock=body.querySelector('.itinerary-quick-info-block');const html=links.map(l=>`<a class="itinerary-quick-info-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.name||'Open link')} ↗</a>`).join('');if(notesBlock)notesBlock.insertAdjacentHTML('beforebegin',html);else body.insertAdjacentHTML('beforeend',html)};

/* === WozzaWorld activity details micro-hotfix — clean heading + optional start date === */
(()=>{
  const _dialog=itineraryDialog;
  itineraryDialog=function(){
    const d=_dialog();
    if(d.dataset.activityDetailsV3)return d;
    d.dataset.activityDetailsV3='1';
    const small=d.querySelector('.stop-itinerary-head small');
    if(small)small.remove();
    return d;
  };

  const _open=openStopItinerary;
  openStopItinerary=function(row,id=''){
    _open(row,id);
    const d=itineraryDialog();
    const heading=d.querySelector('#stopItineraryHeading');
    if(heading)heading.textContent='Activity details';
    const sd=d.querySelector('#itinStartDate');
    if(sd){
      const tripStart=row?.querySelector('.trip-destination-from')?.value||'';
      sd.dataset.calendarSeed=tripStart;
      if(!id){
        sd.dataset.iso='';
        sd.value='';
      }
    }
  };

  const _openCalendar=wozzaCalendarOpenActivity;
  wozzaCalendarOpenActivity=function(input){
    if(!input?.isConnected)return;
    const seed=input.dataset.iso||input.dataset.calendarSeed||'';
    if(!input.dataset.iso && seed){
      const previous=input.dataset.iso;
      input.dataset.iso=seed;
      _openCalendar(input);
      input.dataset.iso=previous||'';
      wozzaCalendarSelected='';
      wozzaCalendarRender();
      return;
    }
    _openCalendar(input);
  };
})();

/* === Activity details polish + linked read-only activity notes === */
function wwActivityNotes(){
  const out=[];
  wwTripStopRows().forEach((row,si)=>itineraryItemsForRow(row).forEach(x=>{if((x.notes||'').trim())out.push({id:x.id,name:x.name||'Activity',notes:x.notes.trim(),stop:si})}));
  return out;
}
function wwRenderActivityNotesReadOnly(){
  const items=wwActivityNotes();
  const html=items.length?items.map(x=>`<div class="ww-activity-note-readonly" data-activity-note="${esc(x.id)}"><span>${esc(x.name)}</span><p>${esc(x.notes).replace(/\n/g,'<br>')}</p></div>`).join(''):'';
  const tripNotes=document.querySelector('#tripNotes');
  if(tripNotes){let host=document.querySelector('#tripActivityNotesReadonly');if(!host){host=document.createElement('div');host.id='tripActivityNotesReadonly';host.className='ww-activity-notes-readonly';tripNotes.insertAdjacentElement('afterend',host)}host.innerHTML=html;host.hidden=!items.length}
  const itinNotes=document.querySelector('#masterItineraryTripNotes');
  if(itinNotes){let host=document.querySelector('#itineraryActivityNotesReadonly');if(!host){host=document.createElement('div');host.id='itineraryActivityNotesReadonly';host.className='ww-activity-notes-readonly';itinNotes.insertAdjacentElement('afterend',host)}host.innerHTML=html;host.hidden=!items.length}
}
const _wwEnsureSharedNotesActivityNotes=wwEnsureItinerarySharedNotes;
wwEnsureItinerarySharedNotes=function(d){const r=_wwEnsureSharedNotesActivityNotes(d);wwRenderActivityNotesReadOnly();return r};
const _wwSetItemsActivityNotes=setItineraryItemsForRow;
setItineraryItemsForRow=function(row,items){const r=_wwSetItemsActivityNotes(row,items);wwRenderActivityNotesReadOnly();return r};
const _wwOpenTripEditorActivityNotes=openTripEditor;
openTripEditor=function(t){const r=_wwOpenTripEditorActivityNotes(t);requestAnimationFrame(wwRenderActivityNotesReadOnly);return r};

/* Activity form label polish is applied after the dialog opens, without wrapping
   itineraryDialog again (keeps Add/Edit activity opening chain intact). */
function wwPolishActivityNotesField(d){
  if(!d)return;
  const notes=d.querySelector('#itinNotes')?.closest('label');
  if(notes&&!notes.dataset.activityNotesLabel){
    notes.dataset.activityNotesLabel='1';
    for(const n of notes.childNodes){
      if(n.nodeType===3&&n.textContent.trim()==='Notes'){n.textContent='Activity notes';break}
    }
  }
  const linkCheck=d.querySelector('.itin-link-check');
  if(linkCheck){linkCheck.hidden=true;const cb=linkCheck.querySelector('#itinLinkNotes');if(cb)cb.checked=false}
}
const _wwOpenStopActivityNotesPolish=openStopItinerary;
openStopItinerary=function(row,id=''){
  _wwOpenStopActivityNotesPolish(row,id);
  wwPolishActivityNotesField(document.getElementById('stopItineraryDialog'));
};

/* === WozzaWorld hotfix — repeat-safe Activity Details launch lifecycle ===
   Activity Details must be launchable repeatedly in one app session.
   Important: finish closing itinerary/stop-chooser dialogs before opening the
   activity modal. This avoids handing one click between two modal lifecycles. */
function wwOpenActivityDetailsSafely(row,id=''){
  if(!row)return;
  const activity=document.getElementById('stopItineraryDialog');
  const master=document.getElementById('masterItineraryDialog');
  const chooser=document.getElementById('itineraryStopChooser');
  if(activity?.open)activity.close();
  if(chooser?.open)chooser.close();
  if(master?.open)master.close();
  requestAnimationFrame(()=>requestAnimationFrame(()=>openStopItinerary(row,id)));
}

/* Rebind the master Add button every time the existing dialog is requested,
   so it never retains a stale one-shot launch path. */
const _wwMasterItineraryDialogRepeatSafe=wwMasterItineraryDialog;
wwMasterItineraryDialog=function(){
  const d=_wwMasterItineraryDialogRepeatSafe();
  const add=d.querySelector('#masterItineraryAdd');
  if(add)add.onclick=()=>{
    const rows=wwTripStopRows();
    if(!rows.length)return;
    if(rows.length===1){wwOpenActivityDetailsSafely(rows[0]);return}
    const chooser=wwStopChooserDialog(),host=chooser.querySelector('.itinerary-stop-options');
    host.innerHTML=rows.map((r,i)=>`<button type="button" data-stop="${i}"><span>Stop ${i+1}</span><strong>${esc(wwStopName(r,i))}</strong></button>`).join('');
    host.querySelectorAll('button[data-stop]').forEach(b=>b.onclick=()=>{
      const freshRows=wwTripStopRows();
      const row=freshRows[Number(b.dataset.stop)];
      wwOpenActivityDetailsSafely(row);
    });
    if(!chooser.open)chooser.showModal();
  };
  return d;
};

/* Keep the public helper on the same repeat-safe path too. */
wwAddActivityFromMaster=function(){
  const d=wwMasterItineraryDialog();
  d.querySelector('#masterItineraryAdd')?.click();
};

/* === WozzaWorld Activity Details footer + cleanup hotfix ===
   Reuse the proven Trip editor action styling/structure rather than redesigning it. */
(()=>{
  if(document.getElementById('ww-activity-footer-trip-match'))return;
  const st=document.createElement('style');
  st.id='ww-activity-footer-trip-match';
  st.textContent=`
#stopItineraryDialog .stop-itinerary-actions{
  display:grid!important;
  grid-template-columns:44px minmax(0,.78fr) minmax(0,1.35fr)!important;
  gap:9px!important;
  align-items:stretch!important;
  width:100%!important;
  padding:0!important;
  margin-top:18px!important;
  overflow:visible!important;
}
#stopItineraryDialog .stop-itinerary-actions>button{margin:0!important;min-width:0!important;white-space:nowrap!important;box-sizing:border-box!important}
#stopItineraryDialog .stop-itinerary-actions>#itinDelete{
  grid-column:1!important;
  width:44px!important;min-width:44px!important;max-width:44px!important;
  height:44px!important;min-height:44px!important;
  padding:0!important;justify-self:start!important;
}
#stopItineraryDialog .stop-itinerary-actions>.itin-cancel{
  grid-column:2!important;
  height:44px!important;min-height:44px!important;
  font-size:12px!important;line-height:1!important;
  display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;
}
#stopItineraryDialog .stop-itinerary-actions>.primary{
  grid-column:3!important;
  height:44px!important;min-height:44px!important;
  font-size:12px!important;line-height:1!important;
  display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important;
}
@media(max-width:420px){
 #stopItineraryDialog .stop-itinerary-actions{grid-template-columns:40px minmax(0,.72fr) minmax(0,1.32fr)!important;gap:7px!important}
 #stopItineraryDialog .stop-itinerary-actions>#itinDelete{width:40px!important;min-width:40px!important;max-width:34px!important;height:34px!important;min-height:40px!important}
 #stopItineraryDialog .stop-itinerary-actions>.itin-cancel,#stopItineraryDialog .stop-itinerary-actions>.primary{height:40px!important;min-height:40px!important;font-size:12px!important;padding-left:8px!important;padding-right:8px!important}
}
`;
  document.head.appendChild(st);
})();

function wwPolishActivityFooterAndCleanup(){
  const d=document.getElementById('stopItineraryDialog');
  if(!d)return;

  /* Keep the legacy checkbox node for lifecycle compatibility, but remove it from the UI.
     openStopItinerary still resets #itinLinkNotes on every open, so deleting the node
     breaks the second Add/Edit Activity launch. */
  const legacyLinkCheck=d.querySelector('.itin-link-check');
  if(legacyLinkCheck){
    legacyLinkCheck.hidden=true;
    legacyLinkCheck.style.display='none';
    const legacyCb=legacyLinkCheck.querySelector('#itinLinkNotes');
    if(legacyCb)legacyCb.checked=false;
  }

  /* Short instruction that fits the second link column cleanly. */
  d.querySelectorAll('.itin-link-name').forEach(i=>i.placeholder='Link name');

  const actions=d.querySelector('.stop-itinerary-actions');
  const del=d.querySelector('#itinDelete');
  const close=d.querySelector('.itin-cancel');
  const save=d.querySelector('.stop-itinerary-actions .primary');
  const tripDel=document.getElementById('deleteTripBtn');
  const tripClose=document.getElementById('cancelTrip');
  const tripSave=document.querySelector('#tripForm .dialog-actions .primary');
  if(!actions||!close||!save)return;

  /* Use the actual Trip controls as the styling source of truth. */
  if(tripClose)close.className=tripClose.className+' itin-cancel';
  if(tripSave)save.className=tripSave.className+' primary';
  close.type='button'; close.textContent='Close';
  save.textContent='Save changes';

  if(del){
    if(tripDel){
      del.className=tripDel.className+' itin-delete';
      del.innerHTML=tripDel.innerHTML;
    }
    del.setAttribute('aria-label','Delete activity');
    del.setAttribute('title','Delete activity');
  }

  /* Exact requested order: bin | Close | Save changes. */
  if(del)actions.appendChild(del);
  actions.appendChild(close);
  actions.appendChild(save);
}

/* Apply after every Add/Edit open without wrapping the launch lifecycle again. */
document.addEventListener('click',e=>{
  if(e.target.closest('[data-add-itinerary],[data-edit-itinerary],.master-itinerary-add,.master-itinerary-activity')){
    requestAnimationFrame(()=>requestAnimationFrame(wwPolishActivityFooterAndCleanup));
  }
},true);

/* Also apply whenever the Activity dialog itself is shown/updated. */
const wwActivityFooterObserver=new MutationObserver(()=>{
  const d=document.getElementById('stopItineraryDialog');
  if(d?.open)wwPolishActivityFooterAndCleanup();
});
wwActivityFooterObserver.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['open']});

/* === WozzaWorld surgical regression fix — 2026-09-28 ===
   1) Legacy Activity-note compatibility control remains in DOM but can never render.
   2) Export trip belongs ONLY to the Trip action row; Notes expand/collapse cannot reparent it. */
(()=>{
  if(document.getElementById('ww-surgical-notes-export-regression'))return;
  const st=document.createElement('style');
  st.id='ww-surgical-notes-export-regression';
  st.textContent=`
#stopItineraryDialog .itin-link-check,
#stopItineraryDialog label.itin-link-check,
#stopItineraryDialog #itinLinkNotes{display:none!important;visibility:hidden!important;position:absolute!important;pointer-events:none!important;width:0!important;height:0!important;margin:0!important;padding:0!important;overflow:hidden!important}
/* Export is an action control, never Notes content. */
#tripDialog #wwTripExportPlaceholder{position:static!important;float:none!important}
`;
  document.head.appendChild(st);
})();

/* Replace the old Notes-relative placement helper with an action-row-only helper. */
wwEnsureExportTripPlaceholder=function(){
  const cancel=document.getElementById('cancelTrip');
  if(!cancel)return;
  const actions=cancel.parentElement;
  if(!actions)return;
  let b=document.getElementById('wwTripExportPlaceholder');
  if(!b){
    b=document.createElement('button');
    b.type='button';
    b.id='wwTripExportPlaceholder';
    b.className='ww-trip-export-placeholder';
    b.textContent='Export trip';
    b.setAttribute('aria-label','Export trip (coming soon)');
    b.onclick=e=>{e.preventDefault();e.stopPropagation()};
  }
  if(b.parentElement!==actions || b.nextElementSibling!==cancel) actions.insertBefore(b,cancel);
};

/* Make recovery idempotent: any Notes DOM work simply puts Export back in its one legal home. */
wwRecoverExportTripPlacement=function(){
  wwEnsureExportTripPlaceholder();
  const b=document.getElementById('wwTripExportPlaceholder');
  const cancel=document.getElementById('cancelTrip');
  const del=document.getElementById('deleteTripBtn');
  if(!b||!cancel)return;
  const actions=cancel.parentElement;
  if(!actions)return;
  if(b.parentElement!==actions || b.nextElementSibling!==cancel)actions.insertBefore(b,cancel);
  if(del&&del.parentElement===actions&&del.nextElementSibling!==b)actions.insertBefore(del,b);
};

/* Notes toggling must never own/reposition Export. */
document.addEventListener('click',e=>{
  if(e.target.closest?.('#tripDialog .trip-notes-section')){
    requestAnimationFrame(()=>requestAnimationFrame(wwRecoverExportTripPlacement));
  }
},true);

/* Belt-and-braces: if legacy code tries to move Export beside Notes, immediately restore it. */
const wwExportHomeObserver=new MutationObserver(()=>{
  const b=document.getElementById('wwTripExportPlaceholder');
  const cancel=document.getElementById('cancelTrip');
  if(b&&cancel&&b.parentElement!==cancel.parentElement)wwRecoverExportTripPlacement();
});
wwExportHomeObserver.observe(document.documentElement,{subtree:true,childList:true});

/* === WozzaWorld hotfix — seamless Activity Details launch + reliable read-only activity notes === */
/* Keep the Activity Details modal covering the itinerary while the parent modal is
   dismissed. Closing the parent first exposed the trip editor for a paint frame,
   which appeared as a flicker on mobile. */
wwOpenActivityDetailsSafely=function(row,id=''){
  if(!row)return;
  const activity=document.getElementById('stopItineraryDialog');
  const master=document.getElementById('masterItineraryDialog');
  const chooser=document.getElementById('itineraryStopChooser');
  if(activity?.open)activity.close();
  openStopItinerary(row,id);
  if(chooser?.open)chooser.close();
  if(master?.open)master.close();
};

/* Activity notes are derived from the activity records, never copied into the
   editable trip note. Refresh both read-only mirrors after any itinerary render,
   activity save/delete, or shared-notes area creation. */
function wwRefreshActivityNotesMirrors(){
  requestAnimationFrame(()=>requestAnimationFrame(wwRenderActivityNotesReadOnly));
}
const _wwRenderMasterActivityNotesReliable=wwRenderMasterItinerary;
wwRenderMasterItinerary=function(){
  const out=_wwRenderMasterActivityNotesReliable();
  wwRefreshActivityNotesMirrors();
  return out;
};
const _wwOpenDailyActivityNotesReliable=wwOpenDailySchedule;
wwOpenDailySchedule=function(iso){
  const out=_wwOpenDailyActivityNotesReliable(iso);
  wwRefreshActivityNotesMirrors();
  return out;
};
const _wwSetItemsActivityNotesReliable=setItineraryItemsForRow;
setItineraryItemsForRow=function(row,items){
  const out=_wwSetItemsActivityNotesReliable(row,items);
  wwRefreshActivityNotesMirrors();
  return out;
};
const _wwEnsureSharedActivityNotesReliable=wwEnsureItinerarySharedNotes;
wwEnsureItinerarySharedNotes=function(d){
  const out=_wwEnsureSharedActivityNotesReliable(d);
  wwRefreshActivityNotesMirrors();
  return out;
};

/* === WozzaWorld hotfix — activity notes mirrors v2 === */
/* Build activity-note mirrors from the live editor rows, with the persisted trip as
   a fallback. This keeps the read-only notes available even when an itinerary
   dialog/render temporarily rebuilds the stop UI. */
function wwActivityNotesV2(){
  const out=[],seen=new Set();
  const add=(x,si=0)=>{
    const notes=String(x?.notes||'').trim();
    if(!notes)return;
    const key=String(x?.id||`${si}:${x?.name||''}:${notes}`);
    if(seen.has(key))return;
    seen.add(key);
    out.push({id:key,name:x?.name||'Activity',notes,stop:si});
  };
  wwTripStopRows().forEach((row,si)=>itineraryItemsForRow(row).forEach(x=>add(x,si)));
  if(editingTripId){
    const trip=state.trips.find(t=>String(t.id)===String(editingTripId));
    (trip?.destinations||[]).forEach((stop,si)=>(stop.itinerary||[]).forEach(x=>add(x,si)));
  }
  return out;
}
wwActivityNotes=wwActivityNotesV2;

wwRenderActivityNotesReadOnly=function(){
  const items=wwActivityNotesV2();
  const html=items.map(x=>`<div class="ww-activity-note-readonly" data-activity-note="${esc(x.id)}"><strong>${esc(x.name)}</strong><p>${esc(x.notes).replace(/\n/g,'<br>')}</p></div>`).join('');
  const mount=(textarea,id)=>{
    if(!textarea)return;
    let host=document.getElementById(id);
    if(!host){host=document.createElement('div');host.id=id;host.className='ww-activity-notes-readonly';textarea.insertAdjacentElement('afterend',host)}
    host.innerHTML=html;
    host.hidden=!items.length;
  };
  mount(document.getElementById('tripNotes'),'tripActivityNotesReadonly');
  mount(document.getElementById('masterItineraryTripNotes'),'itineraryActivityNotesReadonly');
};

/* Repaint whenever either notes surface becomes visible. */
const _wwOpenTripEditorActivityNotesV2=openTripEditor;
openTripEditor=function(t){const out=_wwOpenTripEditorActivityNotesV2(t);setTimeout(wwRenderActivityNotesReadOnly,0);return out};
const _wwRenderMasterActivityNotesV2=wwRenderMasterItinerary;
wwRenderMasterItinerary=function(){const out=_wwRenderMasterActivityNotesV2();setTimeout(wwRenderActivityNotesReadOnly,0);return out};

(()=>{if(document.getElementById('ww-activity-notes-readonly-style-v2'))return;const st=document.createElement('style');st.id='ww-activity-notes-readonly-style-v2';st.textContent=`
.ww-activity-notes-readonly{display:block!important;margin:10px 0 0!important}
.ww-activity-notes-readonly[hidden]{display:none!important}
.ww-activity-note-readonly{display:block!important;margin:8px 0 0!important;padding:11px 14px!important;border-radius:14px!important;background:rgba(23,47,58,.07)!important;color:#172f3a!important;line-height:1.3!important}
.ww-activity-note-readonly strong{display:block!important;margin:0 0 3px!important;font-size:13px!important;font-weight:900!important;text-transform:uppercase!important;letter-spacing:.025em!important;color:#07849a!important}
.ww-activity-note-readonly p{display:block!important;margin:0!important;font:inherit!important;font-weight:500!important;color:#172f3a!important;white-space:normal!important}
`;document.head.appendChild(st)})();


/* === WozzaWorld combined activity tweaks: currency + preset types === */
const WW_ACTIVITY_CURRENCIES=['GBP','EUR','USD','HUF','CHF','NOK','SEK','DKK','PLN','CZK','JPY','AUD','CAD','NZD','AED','ALL','AMD','ARS','BAM','BGN','BRL','CNY','COP','CRC','EGP','GEL','HKD','HRK','IDR','ILS','INR','ISK','KRW','MAD','MXN','MYR','PEN','PHP','RON','RSD','SAR','SGD','THB','TRY','TWD','UAH','VND','ZAR'];
function wwEnsureActivityCurrency(d){
 const cost=d.querySelector('#itinCost');if(!cost||d.querySelector('#itinCurrency'))return;
 const label=cost.closest('label');if(!label)return;
 const wrap=document.createElement('div');wrap.className='itin-cost-currency';
 cost.insertAdjacentElement('beforebegin',wrap);wrap.appendChild(cost);
 const sel=document.createElement('select');sel.id='itinCurrency';sel.setAttribute('aria-label','Currency');sel.innerHTML=WW_ACTIVITY_CURRENCIES.map(c=>`<option value="${c}">${c}</option>`).join('');wrap.appendChild(sel);
}
const _wwCurrencyDialog=itineraryDialog;
itineraryDialog=function(){const d=_wwCurrencyDialog();wwEnsureActivityCurrency(d);return d};
const _wwCurrencyOpen=openStopItinerary;
openStopItinerary=function(row,id=''){_wwCurrencyOpen(row,id);const d=itineraryDialog(),x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id))||{};const sel=d.querySelector('#itinCurrency');if(sel)sel.value=x.currency||'GBP'};
/* Final saver: preserves named links, TBC and currency. */
saveStopItinerary=function(){const d=itineraryDialog(),row=activeItineraryRow;if(!row)return;const q=id=>d.querySelector('#'+id),name=q('itinName')?.value.trim();if(!name){q('itinName')?.focus();return}const id=activeItineraryId||crypto.randomUUID?.()||`itin-${Date.now()}`,items=itineraryItemsForRow(row),at=items.findIndex(i=>String(i.id)===String(id)),old=at>=0?items[at]:{},todoIds=syncActivityTodosToTrip(d,id,old),links=wwReadLinkRows(d).filter(x=>x.url);const x={id,name,category:d.dataset.category||'',startDate:q('itinStartDate')?.dataset.iso||'',startTime:q('itinStartTime')?.value||'',endDate:q('itinEndDate')?.dataset.iso||'',endTime:q('itinEndTime')?.value||'',flexible:!!q('itinFlexible')?.checked,tbc:!!q('itinTbc')?.checked,location:q('itinLocation')?.value.trim()||'',contact:q('itinContact')?.value.trim()||'',contactTelephone:q('itinContactTelephone')?.value.trim()||'',links,locationUrl:'',url:'',cost:q('itinCost')?.value.trim()||'',currency:q('itinCurrency')?.value||'GBP',bookingRef:q('itinBookingRef')?.value.trim()||'',notes:q('itinNotes')?.value.trim()||'',todoIds,todoId:todoIds[0]||'',...(at>=0&&old.itineraryOrder!=null?{itineraryOrder:old.itineraryOrder}:{})};if(at>=0)items[at]=x;else items.push(x);setItineraryItemsForRow(row,items);if(q('itinLinkNotes')?.checked&&x.notes){const notes=$('#tripNotes'),prefix=`${itineraryIcon(x)} ${x.name}: ${x.notes}`;if(notes&&!notes.value.includes(prefix)){notes.value=(notes.value.trim()?notes.value.trim()+'\\n':'')+prefix;updateTripNotesSummary()}}updateTripTodoSummary();d.close()};
/* Show currency alongside the saved amount in quick info. */
const _wwCurrencyQuickInfo=wwOpenQuickInfo;
wwOpenQuickInfo=function(row,id){_wwCurrencyQuickInfo(row,id);const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!x||!x.cost)return;const body=document.querySelector('#itineraryQuickInfoBody');const costRow=[...body.querySelectorAll('.itinerary-quick-info-row')].find(r=>r.querySelector('small')?.textContent==='Cost per person');const strong=costRow?.querySelector('strong');if(strong)strong.textContent=`${x.cost} ${x.currency||'GBP'}`};

/* === WozzaWorld hotfix — currency prefix + collapsed read-only activity notes === */
const WW_ACTIVITY_CURRENCY_SYMBOLS={GBP:'£',EUR:'€',USD:'$',HUF:'Ft',CHF:'CHF',NOK:'kr',SEK:'kr',DKK:'kr',PLN:'zł',CZK:'Kč',JPY:'¥',AUD:'A$',CAD:'C$',NZD:'NZ$',AED:'د.إ',ALL:'L',AMD:'֏',ARS:'AR$',BAM:'KM',BGN:'лв',BRL:'R$',CNY:'¥',COP:'COL$',CRC:'₡',EGP:'E£',GEL:'₾',HKD:'HK$',HRK:'kn',IDR:'Rp',ILS:'₪',INR:'₹',ISK:'kr',KRW:'₩',MAD:'د.م.',MXN:'MX$',MYR:'RM',PEN:'S/',PHP:'₱',RON:'lei',RSD:'дин',SAR:'﷼',SGD:'S$',THB:'฿',TRY:'₺',TWD:'NT$',UAH:'₴',VND:'₫',ZAR:'R'};
function wwCurrencySymbol(code){return WW_ACTIVITY_CURRENCY_SYMBOLS[code]||code||''}
function wwCostNumber(v){return String(v??'').replace(/^\s*(?:£|€|\$|¥|Ft|CHF|kr|zł|Kč|A\$|C\$|NZ\$|د\.إ|L|֏|AR\$|KM|лв|R\$|COL\$|₡|E£|₾|HK\$|kn|Rp|₪|₹|₩|د\.م\.|MX\$|RM|S\/|₱|lei|дин|﷼|S\$|฿|₺|NT\$|₴|₫|R)\s*/i,'').trim()}
function wwPaintCostPrefix(d){const cost=d?.querySelector('#itinCost'),sel=d?.querySelector('#itinCurrency');if(!cost||!sel)return;const raw=wwCostNumber(cost.value);cost.value=raw?`${wwCurrencySymbol(sel.value)} ${raw}`:'';}
const _wwPrefixEnsure=wwEnsureActivityCurrency;
wwEnsureActivityCurrency=function(d){_wwPrefixEnsure(d);const cost=d.querySelector('#itinCost'),sel=d.querySelector('#itinCurrency');if(!cost||!sel||sel.dataset.prefixBound)return;sel.dataset.prefixBound='1';sel.addEventListener('change',()=>wwPaintCostPrefix(d));cost.addEventListener('focus',()=>{cost.value=wwCostNumber(cost.value)});cost.addEventListener('blur',()=>wwPaintCostPrefix(d));};
const _wwPrefixOpen=openStopItinerary;
openStopItinerary=function(row,id=''){_wwPrefixOpen(row,id);const d=itineraryDialog();setTimeout(()=>wwPaintCostPrefix(d),0)};
const _wwPrefixSave=saveStopItinerary;
saveStopItinerary=function(){const d=itineraryDialog(),cost=d.querySelector('#itinCost');if(cost)cost.value=wwCostNumber(cost.value);return _wwPrefixSave()};
const _wwPrefixQuick=wwOpenQuickInfo;
wwOpenQuickInfo=function(row,id){_wwPrefixQuick(row,id);const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!x||!x.cost)return;const body=document.querySelector('#itineraryQuickInfoBody'),costRow=[...body.querySelectorAll('.itinerary-quick-info-row')].find(r=>r.querySelector('small')?.textContent==='Cost per person'),strong=costRow?.querySelector('strong');if(strong)strong.textContent=`${wwCurrencySymbol(x.currency||'GBP')} ${wwCostNumber(x.cost)}`};

wwRenderActivityNotesReadOnly=function(){
 const items=wwActivityNotesV2();
 const html=items.map(x=>`<div class="ww-activity-note-readonly is-collapsed" data-activity-note="${esc(x.id)}"><button type="button" class="ww-activity-note-toggle" aria-expanded="false"><strong>${esc(x.name)}</strong><span aria-hidden="true">+</span></button><div class="ww-activity-note-body" hidden><p>${esc(x.notes).replace(/\n/g,'<br>')}</p></div></div>`).join('');
 const mount=(textarea,id)=>{if(!textarea)return;let host=document.getElementById(id);if(!host){host=document.createElement('div');host.id=id;host.className='ww-activity-notes-readonly';textarea.insertAdjacentElement('afterend',host)}host.innerHTML=html;host.hidden=!items.length;host.querySelectorAll('.ww-activity-note-toggle').forEach(btn=>btn.onclick=()=>{const card=btn.closest('.ww-activity-note-readonly'),body=card.querySelector('.ww-activity-note-body'),open=btn.getAttribute('aria-expanded')==='true';btn.setAttribute('aria-expanded',String(!open));btn.querySelector('span').textContent=open?'+':'−';body.hidden=open;card.classList.toggle('is-collapsed',open)})};
 mount(document.getElementById('tripNotes'),'tripActivityNotesReadonly');mount(document.getElementById('masterItineraryTripNotes'),'itineraryActivityNotesReadonly');
};

/* === WozzaWorld hotfix — day quick-add, row dividers, remove mirrored activity notes === */
function wwRemoveActivityNoteMirrors(){
  document.getElementById('tripActivityNotesReadonly')?.remove();
  document.getElementById('itineraryActivityNotesReadonly')?.remove();
}
/* Activity notes now live only inside the activity itself. */
wwRenderActivityNotesReadOnly=function(){wwRemoveActivityNoteMirrors()};
wwRemoveActivityNoteMirrors();

function wwOpenActivityForDate(iso){
  const rows=wwTripStopRows(); if(!rows.length)return;
  const matching=rows.filter(r=>{const a=r.querySelector('.trip-destination-from')?.value||'',b=r.querySelector('.trip-destination-to')?.value||a;return !iso||(!a&&!b)||(a<=iso&&iso<=(b||a))});
  const row=(matching.length?matching:rows)[0];
  wwMasterItineraryDialog()?.close();
  openStopItinerary(row);
  const d=itineraryDialog(),sd=d.querySelector('#itinStartDate');
  if(sd){sd.dataset.iso=iso;sd.value=iso?pretty(iso):''}
}
function wwWireDayQuickAdds(host){
  host?.querySelectorAll('.ww-day-quick-add').forEach(b=>b.onclick=e=>{e.stopPropagation();wwOpenActivityForDate(b.dataset.date||'')});
}
const _wwQuickAddRender=wwRenderTripHierarchy;
wwRenderTripHierarchy=function(){
  _wwQuickAddRender();
  const d=wwMasterItineraryDialog(),host=d.querySelector('#masterItineraryContent');
  host.querySelectorAll('.master-itinerary-day').forEach(day=>{
    const head=day.querySelector('.master-itinerary-dayhead'); if(!head||head.querySelector('.ww-day-quick-add'))return;
    const title=head.querySelector('span')?.textContent||'';
    const item=day.querySelector('.master-itinerary-activity');
    const x=item?wwMasterActivities().find(a=>String(a.id)===String(item.dataset.id)):null;
    const iso=x?.startDate||''; if(!iso)return;
    const b=document.createElement('button');b.type='button';b.className='ww-day-quick-add';b.dataset.date=iso;b.setAttribute('aria-label',`Add activity on ${title}`);b.title='Add activity';b.textContent='+';head.appendChild(b);
  });
  wwWireDayQuickAdds(host);
  wwRemoveActivityNoteMirrors();
};
wwRenderMasterItinerary=wwRenderTripHierarchy;
wwOpenTripItinerary=function(){wwRenderTripHierarchy();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()};
wwOpenMasterItinerary=function(){wwRenderTripHierarchy();const d=wwMasterItineraryDialog();if(!d.open)d.showModal()};

(()=>{if(document.getElementById('ww-itinerary-quickadd-dividers-style'))return;const st=document.createElement('style');st.id='ww-itinerary-quickadd-dividers-style';st.textContent=`
.master-itinerary-dayhead{position:relative!important;padding-right:58px!important}
.ww-day-quick-add{position:absolute!important;right:14px!important;top:50%!important;transform:translateY(-50%)!important;width:34px!important;height:34px!important;border:0!important;border-radius:50%!important;background:#07849a!important;color:#fff!important;font-size:25px!important;font-weight:700!important;line-height:30px!important;padding:0!important;display:grid!important;place-items:center!important;cursor:pointer!important}
.master-itinerary-daybody>.master-itinerary-activity+.master-itinerary-activity{border-top:1px solid rgba(23,47,58,.13)!important}
#tripActivityNotesReadonly,#itineraryActivityNotesReadonly{display:none!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — activity links controls + quick-info order + itinerary spacing === */
/* Link rows: the final empty row owns the + button; committed rows own a bin button. */
function wwLinkRowMarkup(x={},i=0){
  return `<div class="itin-link-row" data-link-row="${i}"><input class="itin-link-url" type="url" placeholder="https://…" value="${esc(x.url||'')}"><input class="itin-link-name" type="text" maxlength="50" placeholder="Link name" value="${esc(x.name||'')}"><button type="button" class="itin-link-remove" aria-label="Add link">+</button></div>`;
}
function wwRenderLinkRows(d,links=[]){
  const host=d.querySelector('#itinLinksRows');if(!host)return;
  const committed=(links||[]).filter(x=>x&&(x.url||x.name)).map(x=>({url:String(x.url||''),name:String(x.name||'')}));
  const render=()=>{
    const vals=[...committed,{url:'',name:''}];
    host.innerHTML=vals.map(wwLinkRowMarkup).join('');
    const rows=$$('.itin-link-row',host);
    rows.forEach((r,i)=>{
      const btn=r.querySelector('.itin-link-remove'),u=r.querySelector('.itin-link-url'),n=r.querySelector('.itin-link-name');
      const isAdd=i===rows.length-1;
      btn.classList.toggle('itin-link-add',isAdd);
      btn.classList.toggle('itin-link-delete',!isAdd);
      if(isAdd){
        btn.textContent='+';
      }else{
        btn.textContent='';
        btn.innerHTML='<span aria-hidden="true"></span>';
      }
      btn.setAttribute('aria-label',isAdd?'Add another link':'Remove link');
      if(isAdd){
        btn.onclick=()=>{
          const url=u.value.trim(),name=n.value.trim();
          if(!url&&!name){u.focus();return}
          committed.push({url,name});render();
          const next=host.querySelector('.itin-link-row:last-child .itin-link-url');next?.focus();
        };
      }else{
        btn.onclick=()=>{committed.splice(i,1);render()};
      }
    });
  };
  render();
}
/* Read both committed rows and the current final draft row, so Save never loses typed link data. */
function wwReadLinkRows(d){return $$('.itin-link-row',d).map(r=>({url:r.querySelector('.itin-link-url')?.value.trim()||'',name:r.querySelector('.itin-link-name')?.value.trim()||''})).filter(x=>x.url||x.name)}

/* Quick info: all links/directions above EDIT; EDIT is always the final control. */
const _wwQuickInfoFinalOrder=wwOpenQuickInfo;
wwOpenQuickInfo=function(row,id){
  _wwQuickInfoFinalOrder(row,id);
  const d=wwQuickInfoDialog(),body=d.querySelector('#itineraryQuickInfoBody'),edit=body.querySelector('.itinerary-quick-info-edit');
  if(edit)body.appendChild(edit);
};

(()=>{if(document.getElementById('ww-final-activity-polish-style'))return;const st=document.createElement('style');st.id='ww-final-activity-polish-style';st.textContent=`
/* Link action occupies the reserved third column from the first row onward. */
.itin-link-remove{visibility:visible!important;display:grid!important;font-family:inherit!important;font-weight:900!important;cursor:pointer!important}
.itin-link-add{background:#07849a!important;color:#fff!important;font-size:24px!important}
.itin-link-delete{background:#fff0ef!important;color:#a93630!important;font-size:17px!important}
/* 15% smaller day-header quick-add controls. */
.ww-day-quick-add{width:29px!important;height:29px!important;font-size:21px!important;line-height:26px!important;right:16px!important}
.master-itinerary-dayhead{padding-right:52px!important}
/* Halve the effective visual gap between the final day card and main Add Activity control. */
.master-itinerary-add{margin-top:1px!important}
/* Notes remain scrollable but no scrollbar chrome is shown. */
#masterItineraryTripNotes,#tripNotes{scrollbar-width:none!important;-ms-overflow-style:none!important}
#masterItineraryTripNotes::-webkit-scrollbar,#tripNotes::-webkit-scrollbar{width:0!important;height:0!important;display:none!important;background:transparent!important}
`;document.head.appendChild(st)})();

/* === WozzaWorld hotfix — 28 Sep 2026 activity/trip polish === */
(()=>{
  /* Quick-info: remove redundant ACTIVITY eyebrow and combine same-day start/finish. */
  const _dialog=wwQuickInfoDialog;
  wwQuickInfoDialog=function(){
    const d=_dialog();
    d.querySelector('.itinerary-quick-info-shell header small')?.remove();
    return d;
  };
  const _quick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    _quick(row,id);
    const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));
    const body=document.querySelector('#itineraryQuickInfoBody');
    if(!x||!body)return;
    const infoRows=[...body.querySelectorAll('.itinerary-quick-info-row')];
    const whenRow=infoRows.find(r=>r.querySelector('small')?.textContent.trim().toLowerCase()==='when');
    const finishRow=infoRows.find(r=>r.querySelector('small')?.textContent.trim().toLowerCase()==='finish');
    if(x.startDate&&x.endDate&&x.startDate===x.endDate&&x.startTime&&x.endTime&&whenRow){
      const strong=whenRow.querySelector('strong');
      if(strong)strong.textContent=`${wwItineraryDayLabel(x.startDate)} · ${x.startTime}–${x.endTime}`;
      finishRow?.remove();
    }
    /* Preserve final-action hierarchy after any inherited quick-info decorators. */
    const edit=body.querySelector('.itinerary-quick-info-edit');
    if(edit)body.appendChild(edit);
  };

  /* Match compact link-row delete control to the app's established red delete button. */
  const _render=wwRenderLinkRows;
  wwRenderLinkRows=function(d,links=[]){
    _render(d,links);
    d.querySelectorAll('.itin-link-delete').forEach(btn=>{
      btn.textContent='';
      btn.innerHTML='<span aria-hidden="true">♜</span>';
      /* CSS masks the placeholder glyph and draws the same simple red bin silhouette. */
    });
  };

  if(!document.getElementById('ww-activity-trip-polish-2809')){
    const st=document.createElement('style');st.id='ww-activity-trip-polish-2809';st.textContent=`
      /* Trip notes can be expanded by the user vertically, never horizontally. */
      .trip-dialog #tripNotes,#tripNotesBody #tripNotes{resize:vertical!important;min-height:112px!important;max-width:100%!important;overflow:auto!important}
      /* Pull the main Add Activity control 25% closer again without changing day-card internals. */
      .master-itinerary-add{margin-top:0!important;transform:translateY(-6px)!important;margin-bottom:-6px!important}
      /* Link-row delete = same visual language as the main red circular delete control. */
      .itin-link-delete{position:relative!important;background:#fff0ef!important;border:1px solid rgba(169,54,48,.14)!important;color:#a93630!important;box-shadow:none!important}
      .itin-link-delete span{font-size:0!important}
      .itin-link-delete::before{content:''!important;width:14px!important;height:16px!important;display:block!important;background:#a93630!important;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 3h6l1 2h4v2H4V5h4l1-2Zm-3 6h12l-1 12H7L6 9Zm3 2v8h2v-8H9Zm4 0v8h2v-8h-2Z'/%3E%3C/svg%3E") center/contain no-repeat!important;-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 3h6l1 2h4v2H4V5h4l1-2Zm-3 6h12l-1 12H7L6 9Zm3 2v8h2v-8H9Zm4 0v8h2v-8h-2Z'/%3E%3C/svg%3E") center/contain no-repeat!important}
    `;document.head.appendChild(st);
  }
})();

/* === WozzaWorld activity type + form polish 28 Sep 2026 === */
(()=>{
  /* Add requested native activity types without disturbing saved/custom types. */
  const _cats=itineraryAllCategories;
  itineraryAllCategories=function(){
    const rows=_cats();
    const wanted=[['Explore','🧭'],['Cycle','🚲'],['Spa','♨️']];
    const other=rows.findIndex(x=>x[0]==='Other');
    wanted.forEach(entry=>{if(!rows.some(x=>String(x[0]).toLowerCase()===entry[0].toLowerCase())) rows.splice(other<0?rows.length:rows.findIndex(x=>x[0]==='Other'),0,entry)});
    return rows;
  };

  function wwActivityAsset(category){
    const k=String(category||'').toLowerCase();
    if(k==='airport')return'air.png';
    if(k==='spa')return'vibe-spa-wellness.png';
    if(k==='boat trip')return'narrowboat.png';
    return'';
  }
  function wwActivityIconMarkup(x){
    const src=wwActivityAsset(x?.category);
    return src?`<img class="ww-activity-type-asset" src="${src}" alt="" aria-hidden="true">`:itineraryIcon(x);
  }

  /* Itinerary rows: use established assets for Airport / Spa / Boat trip. */
  wwActivityScheduleRow=function(x){return `<div class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${wwActivityIconMarkup(x)}</span><span class="master-itinerary-activity-main"><strong>${esc(x.name||'Activity')}</strong></span></div>`};

  /* Stop-level summary uses the same asset mapping. */
  renderStopItinerarySummary=function(row){const body=row?.querySelector('.trip-stop-body');if(!body)return;let host=body.querySelector('.stop-itinerary-summary');if(!host){host=document.createElement('div');host.className='stop-itinerary-summary';body.querySelector('.itinerary-swipe-prompt')?.insertAdjacentElement('beforebegin',host)}const items=itineraryItemsForRow(row);host.innerHTML=items.length?`<div class="stop-itinerary-title">ITINERARY <span>${items.length}</span></div>${items.slice().sort((a,b)=>String(a.startDate||'').localeCompare(String(b.startDate||''))||String(a.startTime||'').localeCompare(String(b.startTime||''))).map(x=>`<button type="button" class="stop-itinerary-item" data-itin-id="${esc(x.id)}"><span>${wwActivityIconMarkup(x)}</span><strong>${esc(x.name||'Activity')}</strong><small>${esc(itineraryWhen(x))}</small></button>`).join('')}`:'';host.querySelectorAll('[data-itin-id]').forEach(b=>b.onclick=()=>openStopItinerary(row,b.dataset.itinId))};

  /* After the existing quick-info rendering/decorators, swap only the type icon. */
  const _quick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    _quick(row,id);
    const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));
    const type=document.querySelector('#itineraryQuickInfoBody .itinerary-quick-info-type');
    const src=wwActivityAsset(x?.category);
    if(type&&src)type.innerHTML=`<img class="ww-activity-type-asset" src="${src}" alt="" aria-hidden="true"> ${esc(x.category)}`;
  };

  const st=document.createElement('style');st.id='ww-activity-form-polish-2809b';st.textContent=`
    /* Keep every Activity-form area scrollable but never show a scrollbar. */
    .stop-itinerary-dialog,.stop-itinerary-form,.stop-itinerary-form *{scrollbar-width:none!important;-ms-overflow-style:none!important}
    .stop-itinerary-dialog::-webkit-scrollbar,.stop-itinerary-form::-webkit-scrollbar,.stop-itinerary-form *::-webkit-scrollbar{width:0!important;height:0!important;display:none!important}
    /* Same circles; stronger bin glyph only. */
    .itin-link-delete::before{width:18px!important;height:20px!important}
    /* Optical centring: lift the + without moving its circle. */
    .itin-link-add{line-height:1!important}
    .itin-link-add{padding-bottom:3px!important}
    .ww-activity-type-asset{width:24px;height:24px;object-fit:contain;display:inline-block;vertical-align:middle}
    .master-itinerary-icon .ww-activity-type-asset,.stop-itinerary-item .ww-activity-type-asset{width:25px;height:25px}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — itinerary day-row long-press reorder ===
   Reuses the established WozzaWorld long-press/marker/fixed-row drag pattern.
   Reordering changes display order only: activity dates/times are never edited. */
(()=>{
  const _masterActivities=wwMasterActivities;
  wwMasterActivities=function(){
    const out=[];
    wwTripStopRows().forEach((row,si)=>itineraryItemsForRow(row).forEach((item,ii)=>out.push({...item,_row:row,_stopIndex:si,_stopName:wwStopName(row,si),_sourceIndex:ii})));
    return out.sort((a,b)=>{
      const dateCmp=String(a.startDate||'9999').localeCompare(String(b.startDate||'9999'));
      if(dateCmp)return dateCmp;
      const ao=Number.isFinite(Number(a.itineraryOrder))?Number(a.itineraryOrder):null;
      const bo=Number.isFinite(Number(b.itineraryOrder))?Number(b.itineraryOrder):null;
      if(ao!==null||bo!==null){
        if(ao===null)return 1;if(bo===null)return-1;if(ao!==bo)return ao-bo;
      }
      return String(a.startTime||'99:99').localeCompare(String(b.startTime||'99:99'))||a._stopIndex-b._stopIndex||a._sourceIndex-b._sourceIndex;
    });
  };

  function persistDayOrder(body){
    const displayed=[...body.querySelectorAll('.master-itinerary-activity')];
    const touched=new Map();
    displayed.forEach((el,order)=>{
      const row=wwTripStopRows()[Number(el.dataset.stop)];if(!row)return;
      const items=touched.get(row)||itineraryItemsForRow(row);
      const item=items.find(x=>String(x.id)===String(el.dataset.id));
      if(item)item.itineraryOrder=order;
      touched.set(row,items);
    });
    /* Keep the existing editor data model; only add the manual order value. */
    touched.forEach((items,row)=>{row.dataset.itinerary=JSON.stringify(items);renderStopItinerarySummary(row)});
  }

  function enableDayRowReorder(el){
    if(el.dataset.wwReorderBound==='1')return;el.dataset.wwReorderBound='1';
    let holdTimer=null,startX=0,startY=0,dragging=false,marker=null,grabY=0,activeTouchId=null,suppressClick=false;
    const body=el.closest('.master-itinerary-daybody');if(!body)return;
    const clearHold=()=>{clearTimeout(holdTimer);holdTimer=null};
    const touchPoint=e=>{const list=[...(e.touches||[]),...(e.changedTouches||[])];return list.find(t=>activeTouchId==null||t.identifier===activeTouchId)||list[0]||null};
    const placeMarker=y=>{const rows=[...body.querySelectorAll('.master-itinerary-activity')].filter(x=>x!==el);let before=null;for(const row of rows){const r=row.getBoundingClientRect();if(y<r.top+r.height/2){before=row;break}}if(before)body.insertBefore(marker,before);else body.appendChild(marker)};
    const scroller=()=>{const d=el.closest('dialog');if(!d)return null;return [d,...d.querySelectorAll('*')].find(x=>{const s=getComputedStyle(x);return /auto|scroll/.test(s.overflowY)&&x.scrollHeight>x.clientHeight+4})||d};
    const startDrag=(x,y)=>{dragging=true;const r=el.getBoundingClientRect(),cs=getComputedStyle(el);grabY=Math.max(8,Math.min(r.height-8,y-r.top));marker=document.createElement('div');marker.className='ww-itinerary-row-marker';marker.style.cssText=`height:${r.height}px;min-height:${r.height}px;width:100%;box-sizing:border-box;margin:${parseFloat(cs.marginTop)||0}px 0 ${parseFloat(cs.marginBottom)||0}px;`;body.insertBefore(marker,el);el.dataset.dragStyle=el.getAttribute('style')||'';el.classList.add('ww-itinerary-row-dragging');Object.assign(el.style,{position:'fixed',left:`${r.left}px`,top:`${r.top}px`,width:`${r.width}px`,height:`${r.height}px`,margin:'0',zIndex:'2147483647',pointerEvents:'none',opacity:'.94',boxShadow:'0 10px 24px rgba(0,35,55,.22)'});(el.closest('dialog[open]')||document.body).appendChild(el);navigator.vibrate?.(20)};
    const moveDrag=y=>{if(!dragging)return;el.style.top=`${y-grabY}px`;placeMarker(y);const sc=scroller();if(sc){const r=sc.getBoundingClientRect(),edge=Math.min(80,Math.max(50,r.height*.16));if(y<r.top+edge)sc.scrollTop-=Math.min(14,Math.max(4,(r.top+edge-y)/5));else if(y>r.bottom-edge)sc.scrollTop+=Math.min(14,Math.max(4,(y-(r.bottom-edge))/5))}};
    const finish=()=>{clearHold();if(!dragging){activeTouchId=null;return}dragging=false;if(marker?.parentNode)marker.parentNode.insertBefore(el,marker);marker?.remove();marker=null;const prior=el.dataset.dragStyle||'';el.classList.remove('ww-itinerary-row-dragging');if(prior)el.setAttribute('style',prior);else el.removeAttribute('style');delete el.dataset.dragStyle;persistDayOrder(body);activeTouchId=null;suppressClick=true;setTimeout(()=>suppressClick=false,180)};
    el.addEventListener('touchstart',e=>{if(e.target.closest('button,input,select,textarea,a')||e.touches.length!==1)return;const t=e.touches[0];activeTouchId=t.identifier;startX=t.clientX;startY=t.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420)},{passive:true});
    document.addEventListener('touchmove',e=>{if(activeTouchId==null)return;const t=touchPoint(e);if(!t)return;if(dragging){e.preventDefault();e.stopPropagation();moveDrag(t.clientY)}else if(Math.hypot(t.clientX-startX,t.clientY-startY)>10)clearHold()},{passive:false,capture:true});
    document.addEventListener('touchend',e=>{if(activeTouchId!=null){if(dragging){e.preventDefault();e.stopPropagation()}finish()}},{passive:false,capture:true});
    document.addEventListener('touchcancel',finish,{capture:true});
    el.addEventListener('pointerdown',e=>{if(e.pointerType==='touch'||e.target.closest('button,input,select,textarea,a'))return;startX=e.clientX;startY=e.clientY;clearHold();holdTimer=setTimeout(()=>startDrag(startX,startY),420);const move=ev=>{if(dragging){ev.preventDefault();moveDrag(ev.clientY)}else if(Math.hypot(ev.clientX-startX,ev.clientY-startY)>10)clearHold()};const up=()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerup',up);finish()};document.addEventListener('pointermove',move,{passive:false});document.addEventListener('pointerup',up,{once:true})});
    el.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation()}},true);
  }

  const _wire=wwWireItineraryActivityActions;
  wwWireItineraryActivityActions=function(host,d){_wire(host,d);host.querySelectorAll('.master-itinerary-daybody .master-itinerary-activity').forEach(enableDayRowReorder)};
  const st=document.createElement('style');st.textContent=`.master-itinerary-activity{user-select:none;-webkit-user-select:none}.ww-itinerary-row-dragging{touch-action:none!important;border-radius:10px!important;overflow:hidden!important}.ww-itinerary-row-marker{border-radius:10px;background:rgba(7,132,154,.08)}`;document.head.appendChild(st);
})();

/* === WozzaWorld micro-hotfix — trip note inset + contained itinerary drag preview === */
(()=>{
  if(document.getElementById('ww-notes-drag-containment-2809'))return;
  const st=document.createElement('style');
  st.id='ww-notes-drag-containment-2809';
  st.textContent=`
    /* Match the itinerary Notes textarea's comfortable top inset on the trip editor. */
    #tripDialog #tripNotes{padding-top:13px!important;padding-bottom:13px!important;line-height:1.35!important}
    /* Fixed drag clone keeps the rounded treatment and cannot paint beyond its own row box. */
    .ww-itinerary-row-dragging{box-sizing:border-box!important;max-width:none!important;overflow:hidden!important;clip-path:inset(0 round 10px)!important;contain:paint!important}
  `;
  document.head.appendChild(st);

  /* Keep the fixed drag preview locked to the day body's horizontal activity bounds. */
  const lockDragPreview=()=>{
    const el=document.querySelector('.ww-itinerary-row-dragging');
    if(!el)return;
    const marker=document.querySelector('.ww-itinerary-row-marker');
    const body=marker?.closest('.master-itinerary-daybody');
    if(!body)return;
    const br=body.getBoundingClientRect();
    const cs=getComputedStyle(body);
    const left=br.left+(parseFloat(cs.paddingLeft)||0);
    const right=br.right-(parseFloat(cs.paddingRight)||0);
    el.style.left=`${left}px`;
    el.style.width=`${Math.max(0,right-left)}px`;
    el.style.right='auto';
    el.style.maxWidth=`${Math.max(0,right-left)}px`;
  };
  const obs=new MutationObserver(lockDragPreview);
  obs.observe(document.body,{subtree:true,attributes:true,attributeFilter:['class'],childList:true});
  document.addEventListener('touchmove',lockDragPreview,{passive:true,capture:true});
  document.addEventListener('pointermove',lockDragPreview,{passive:true,capture:true});
})();

/* === WozzaWorld hotfix — six activity types + traced WozzaWorld icons === */
(()=>{
  const WW_ACTIVITY_TYPES=[
    ['Food','activity-food.png'],
    ['Drinks','activity-drinks.png'],
    ['Explore','activity-explore.png'],
    ['Travel','activity-travel.png'],
    ['Accommodation','accommodation.png'],
    ['Other','activity-see-do.png'],
    ['Café','CAF.png'],
    ['Taxi','taxi.png'],
    ['Train','train.png'],
    ['Boat Trip','boat-trip.png'],
    ['Spa','vibe-spa-wellness.png'],
    ['Theatre','theatre.png'],
    ['Museum','museum.png'],
    ['Gallery','museum-gallery.png'],
    ['Gardens','gardens.png'],
    ['Castle','castle.png'],
    ['Cathedral','cathedral.png'],
    ['Church','church.png'],
    ['Theme Park','themepark.png'],
    ['Football Ground','football-ground.png'],
    ['Cycling','cycling.png'],
    ['Canoeing','canoeing.png'],
    ['Watersports','watersports.png'],
    ['Swimming','swimming.png'],
    ['Skiing','skiing.png'],
    ['Ice Skating','ice-skating.png'],
    ['Roller Skating','rollerskating.png'],
    ['Recreation','recreation.png'],
    ['Vineyard','vineyard.png'],
    ['Library','LIBRARY.png'],
    ['Zoo','zoo.png']
  ];
  const wwTypeNormalise=category=>category==='See & Do'?'Other':category==='Museum / Gallery'?'Gallery':category;
  const wwTypeAsset=category=>WW_ACTIVITY_TYPES.find(x=>x[0]===wwTypeNormalise(category))?.[1]||'';
  const wwTypeIcon=category=>{const src=wwTypeAsset(category);return src?`<img class="ww-activity-type-asset" src="${src}" alt="" aria-hidden="true">`:'📍'};

  /* The picker is deliberately reduced to the six agreed, distinct categories. */
  itineraryAllCategories=function(){return WW_ACTIVITY_TYPES.map(([name])=>[name,wwTypeIcon(name)])};
  itineraryIcon=function(item){return wwTypeIcon(item?.category)};

  /* New activities start on Food; existing saved legacy types are left untouched until edited. */
  const _openSix=openStopItinerary;
  openStopItinerary=function(row,id=''){
    _openSix(row,id);
    if(id)return;
    const d=itineraryDialog();
    renderItineraryCategoryBank(d,'Food');
    d.dataset.category='Food';
  };

  /* Keep the master itinerary on the same six traced assets. */
  wwActivityScheduleRow=function(x){return `<div class="master-itinerary-activity" data-stop="${x._stopIndex}" data-id="${esc(x.id)}"><time>${esc(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')))}</time><span class="master-itinerary-icon">${wwTypeIcon(x.category)}</span><span class="master-itinerary-activity-main"><strong>${esc(x.name||'Activity')}</strong></span></div>`};

  renderStopItinerarySummary=function(row){const body=row?.querySelector('.trip-stop-body');if(!body)return;let host=body.querySelector('.stop-itinerary-summary');if(!host){host=document.createElement('div');host.className='stop-itinerary-summary';body.querySelector('.itinerary-swipe-prompt')?.insertAdjacentElement('beforebegin',host)}const items=itineraryItemsForRow(row);host.innerHTML=items.length?`<div class="stop-itinerary-title">ITINERARY <span>${items.length}</span></div>${items.slice().sort((a,b)=>String(a.startDate||'').localeCompare(String(b.startDate||''))||String(a.startTime||'').localeCompare(String(b.startTime||''))).map(x=>`<button type="button" class="stop-itinerary-item" data-itin-id="${esc(x.id)}"><span>${wwTypeIcon(x.category)}</span><strong>${esc(x.name||'Activity')}</strong><small>${esc(itineraryWhen(x))}</small></button>`).join('')}`:'';host.querySelectorAll('[data-itin-id]').forEach(b=>b.onclick=()=>openStopItinerary(row,b.dataset.itinId))};

  const _quickSix=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    _quickSix(row,id);
    const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));
    const type=document.querySelector('#itineraryQuickInfoBody .itinerary-quick-info-type');
    const src=wwTypeAsset(x?.category);
    if(type&&src)type.innerHTML=`<img class="ww-activity-type-asset" src="${src}" alt="" aria-hidden="true"> ${esc(x.category)}`;
  };
})();

/* === WozzaWorld hotfix — itinerary notes autosize + row alignment + compact dates + download icon === */
(()=>{
  function wwOrdinal(n){
    n=Number(n);const mod100=n%100;
    if(mod100>=11&&mod100<=13)return `${n}th`;
    return `${n}${n%10===1?'st':n%10===2?'nd':n%10===3?'rd':'th'}`;
  }
  function wwCompactTripDateRange(start,end){
    if(!start)return'';
    const a=new Date(start+'T12:00:00'),b=new Date((end||start)+'T12:00:00');
    if(Number.isNaN(a.getTime())||Number.isNaN(b.getTime()))return'';
    const ad=wwOrdinal(a.getDate()),bd=wwOrdinal(b.getDate());
    const am=a.toLocaleDateString('en-GB',{month:'short'}),bm=b.toLocaleDateString('en-GB',{month:'short'});
    const ay=a.getFullYear(),by=b.getFullYear();
    if(start===(end||start))return `${ad} ${am} ${ay}`;
    if(ay===by&&a.getMonth()===b.getMonth())return `${ad} – ${bd} ${am} ${ay}`;
    if(ay===by)return `${ad} ${am} – ${bd} ${bm} ${ay}`;
    return `${ad} ${am} ${ay} – ${bd} ${bm} ${by}`;
  }

  /* Override only the display formatting used by the itinerary header. */
  wwItineraryTripMeta=function(){
    const rows=wwTripStopRows();
    const trip=editingTripId?state.trips.find(t=>String(t.id)===String(editingTripId)):null;
    const name=($('#tripName')?.value||trip?.name||'Trip itinerary').trim();
    const dates=rows.flatMap(r=>[r.querySelector('.trip-destination-from')?.value||'',r.querySelector('.trip-destination-to')?.value||'']).filter(Boolean).sort();
    const start=dates[0]||trip?.start||'',end=dates[dates.length-1]||trip?.end||start;
    return {name,dateRange:wwCompactTripDateRange(start,end)};
  };

  function wwAutosizeNotes(el){
    if(!el)return;
    el.style.height='auto';
    el.style.height=`${Math.max(el.scrollHeight,72)}px`;
  }
  function wwBindAutosizeNotes(){
    ['masterItineraryTripNotes','tripNotes'].forEach(id=>{
      const el=document.getElementById(id);if(!el)return;
      wwAutosizeNotes(el);
      if(el.dataset.wwAutosizeBound==='1')return;
      el.dataset.wwAutosizeBound='1';
      el.addEventListener('input',()=>wwAutosizeNotes(el));
    });
  }

  function wwPolishItineraryHeader(){
    const d=document.getElementById('masterItineraryDialog');if(!d)return;
    wwApplyItineraryTripHeader(d);
    const cap=d.querySelector('.master-itinerary-capture');
    if(cap){
      cap.title='Download full itinerary';
      cap.setAttribute('aria-label','Download full itinerary');
      cap.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 17v3h14v-3"/></svg>';
    }
    wwBindAutosizeNotes();
  }

  const _openMaster=wwOpenMasterItinerary;
  wwOpenMasterItinerary=function(){const r=_openMaster.apply(this,arguments);requestAnimationFrame(wwPolishItineraryHeader);return r};
  const _renderMaster=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){const r=_renderMaster.apply(this,arguments);requestAnimationFrame(()=>{wwPolishItineraryHeader();wwBindAutosizeNotes()});return r};
  const _openTripAuto=openTrip;
  openTrip=function(){const r=_openTripAuto.apply(this,arguments);requestAnimationFrame(wwBindAutosizeNotes);return r};
  const _openTripEditorAuto=openTripEditor;
  openTripEditor=function(){const r=_openTripEditorAuto.apply(this,arguments);requestAnimationFrame(wwBindAutosizeNotes);return r};

  const st=document.createElement('style');st.id='ww-itinerary-layout-polish-2809';st.textContent=`
    /* Every itinerary row is one vertically-centred three-column line: time | icon | title. */
    .master-itinerary-activity{display:grid!important;grid-template-columns:92px 34px minmax(0,1fr)!important;align-items:center!important}
    .master-itinerary-activity>time,.master-itinerary-activity>.master-itinerary-icon,.master-itinerary-activity>.master-itinerary-activity-main{align-self:center!important}
    .master-itinerary-activity>time{display:flex!important;align-items:center!important;height:100%!important}
    .master-itinerary-icon{display:flex!important;align-items:center!important;justify-content:center!important;height:100%!important;line-height:1!important}
    .master-itinerary-activity-main{display:flex!important;align-items:center!important;min-height:100%!important}
    .master-itinerary-activity-main>strong{display:block!important}
    /* Notes grow to content; no internal scrollbar and no manual resize handle. */
    #masterItineraryTripNotes,#tripNotes{overflow:hidden!important;resize:none!important;box-sizing:border-box!important}
    /* Download symbol replaces the old square glyph without changing the existing circular button. */
    .master-itinerary-capture svg{width:27px!important;height:27px!important;display:block!important;fill:none!important;stroke:currentColor!important;stroke-width:2.2!important;stroke-linecap:round!important;stroke-linejoin:round!important;margin:auto!important}
  `;document.head.appendChild(st);
  document.addEventListener('input',e=>{if(e.target?.id==='masterItineraryTripNotes'||e.target?.id==='tripNotes')wwAutosizeNotes(e.target)});
  requestAnimationFrame(wwBindAutosizeNotes);
})();

/* === WozzaWorld hotfix — itinerary notes true autosize + wider title column + reliable download icon === */
(()=>{
  function wwHF2809Autosize(el){
    if(!el)return;
    el.style.setProperty('height','auto','important');
    el.style.setProperty('min-height','0','important');
    el.style.setProperty('max-height','none','important');
    el.style.setProperty('overflow','hidden','important');
    /* scrollHeight is measured after height is released, so the box shrinks as well as grows. */
    const h=Math.max(1,Math.ceil(el.scrollHeight));
    el.style.setProperty('height',`${h}px`,'important');
  }
  function wwHF2809AutosizeAll(){
    wwHF2809Autosize(document.getElementById('masterItineraryTripNotes'));
    wwHF2809Autosize(document.getElementById('tripNotes'));
  }
  const downloadSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v10"></path><path d="M8 10l4 4 4-4"></path><path d="M5 17v3h14v-3"></path></svg>';
  function wwHF2809Download(){
    const cap=document.querySelector('#masterItineraryDialog .master-itinerary-capture');
    if(!cap)return;
    if(!cap.querySelector('svg'))cap.innerHTML=downloadSvg;
    cap.title='Download full itinerary';
    cap.setAttribute('aria-label','Download full itinerary');
  }
  function wwHF2809Apply(){wwHF2809AutosizeAll();wwHF2809Download()}

  document.addEventListener('input',e=>{
    if(e.target?.id==='masterItineraryTripNotes'||e.target?.id==='tripNotes')wwHF2809Autosize(e.target);
  },true);
  document.addEventListener('click',()=>requestAnimationFrame(wwHF2809Apply),true);

  /* The itinerary/header is rebuilt in a few flows. Observe only that dialog so the
     download glyph and content-height notes survive those rebuilds. */
  const bindObserver=()=>{
    const d=document.getElementById('masterItineraryDialog');
    if(!d||d.dataset.wwHf2809Observer==='1')return;
    d.dataset.wwHf2809Observer='1';
    let queued=false;
    new MutationObserver(()=>{
      if(queued)return;queued=true;
      requestAnimationFrame(()=>{queued=false;wwHF2809Apply()});
    }).observe(d,{childList:true,subtree:true});
  };
  const rootObserver=new MutationObserver(()=>{bindObserver();wwHF2809Apply()});
  rootObserver.observe(document.documentElement,{childList:true,subtree:true});

  const st=document.createElement('style');st.id='ww-itinerary-final-layout-hotfix-2809';st.textContent=`
    /* Reclaim width from the first two columns and give it directly to activity titles. */
    .master-itinerary-activity{grid-template-columns:82px 30px minmax(0,1fr)!important;column-gap:4px!important;align-items:center!important}
    .master-itinerary-activity>time{width:auto!important;min-width:0!important}
    .master-itinerary-icon{width:30px!important;min-width:30px!important;justify-content:center!important}
    /* True content-sized notes: no fixed/min/max height and no inner scrolling. */
    #masterItineraryTripNotes,#tripNotes{min-height:0!important;max-height:none!important;overflow:hidden!important;resize:none!important;box-sizing:border-box!important}
    /* Keep the existing white circular control; replace only its glyph. */
    .master-itinerary-capture{font-size:0!important}
    .master-itinerary-capture svg{width:27px!important;height:27px!important;display:block!important;fill:none!important;stroke:currentColor!important;stroke-width:2.2!important;stroke-linecap:round!important;stroke-linejoin:round!important;margin:auto!important}
  `;document.head.appendChild(st);
  bindObserver();
  requestAnimationFrame(()=>requestAnimationFrame(wwHF2809Apply));
})();

/* === WozzaWorld surgical hotfix — true compact itinerary columns + smaller download glyph + trip notes autosize === */
(()=>{
  const autosizeTripNotes=()=>{
    const el=document.getElementById('tripNotes');
    if(!el||el.offsetParent===null)return;
    el.style.setProperty('height','auto','important');
    el.style.setProperty('min-height','0','important');
    el.style.setProperty('max-height','none','important');
    el.style.setProperty('overflow','hidden','important');
    requestAnimationFrame(()=>{
      el.style.setProperty('height',`${Math.max(1,Math.ceil(el.scrollHeight))}px`,'important');
    });
  };
  document.addEventListener('input',e=>{if(e.target?.id==='tripNotes')autosizeTripNotes()},true);
  document.addEventListener('click',e=>{
    if(e.target?.closest('#tripNotesToggle')) requestAnimationFrame(()=>requestAnimationFrame(autosizeTripNotes));
  },true);
  const st=document.createElement('style');
  st.id='ww-itinerary-column-symbol-tripnotes-hotfix-2809';
  st.textContent=`
    /* Make the grid itself narrower on the left: time | icon | title. */
    .master-itinerary-activity{grid-template-columns:58px 26px minmax(0,1fr)!important;column-gap:3px!important;align-items:center!important}
    .master-itinerary-activity>time{width:auto!important;min-width:0!important}
    .master-itinerary-icon{width:26px!important;min-width:26px!important;justify-content:center!important}
    /* Keep the white circular button untouched; shrink only the download symbol by 15%. */
    .master-itinerary-capture svg{width:23px!important;height:23px!important}
    /* Trip-page Notes follows content height rather than a fixed textarea height. */
    #tripDialog #tripNotes,#tripNotesBody #tripNotes{min-height:0!important;max-height:none!important;overflow:hidden!important;resize:none!important}
  `;
  document.head.appendChild(st);
  requestAnimationFrame(()=>requestAnimationFrame(autosizeTripNotes));
})();

/* === WozzaWorld hotfix — compact Activity Type icon-library picker (baseline 8) ===
   Selection UI only. Deliberately does not touch itinerary rendering/reorder logic. */
(()=>{
  const WW_PICKER_TYPES=[
    ['Food','activity-food.png'],
    ['Drinks','activity-drinks.png'],
    ['Explore','activity-explore.png'],
    ['Travel','activity-travel.png'],
    ['Accommodation','accommodation.png'],
    ['Other','activity-see-do.png'],
    ['Café','CAF.png'],
    ['Taxi','taxi.png'],
    ['Train','train.png'],
    ['Boat Trip','boat-trip.png'],
    ['Spa','vibe-spa-wellness.png'],
    ['Theatre','theatre.png'],
    ['Museum','museum.png'],
    ['Gallery','museum-gallery.png'],
    ['Gardens','gardens.png'],
    ['Castle','castle.png'],
    ['Cathedral','cathedral.png'],
    ['Church','church.png'],
    ['Theme Park','themepark.png'],
    ['Football Ground','football-ground.png'],
    ['Cycling','cycling.png'],
    ['Canoeing','canoeing.png'],
    ['Watersports','watersports.png'],
    ['Swimming','swimming.png'],
    ['Skiing','skiing.png'],
    ['Ice Skating','ice-skating.png'],
    ['Roller Skating','rollerskating.png'],
    ['Recreation','recreation.png'],
    ['Vineyard','vineyard.png'],
    ['Library','LIBRARY.png'],
    ['Zoo','zoo.png']
  ];
  const typeNormalise=name=>name==='See & Do'?'Other':name==='Museum / Gallery'?'Gallery':name;
  const typeAsset=name=>WW_PICKER_TYPES.find(x=>x[0]===typeNormalise(name))?.[1]||'';

  function pickerDialog(){
    let p=document.getElementById('wwActivityTypePicker');
    if(p)return p;
    p=document.createElement('dialog');
    p.id='wwActivityTypePicker';
    p.className='ww-activity-type-picker';
    p.innerHTML=`<div class="ww-type-picker-shell">
      <div class="ww-type-picker-head"><div><small>ACTIVITY TYPE</small><h3>Choose an icon</h3></div><button type="button" class="ww-type-picker-close" aria-label="Close">×</button></div>
      <div class="ww-type-picker-grid">${WW_PICKER_TYPES.map(([name,src])=>`<button type="button" class="ww-type-picker-option" data-category="${esc(name)}"><img src="${src}" alt=""><span>${esc(name)}</span></button>`).join('')}</div>
    </div>`;
    document.body.appendChild(p);
    p.querySelector('.ww-type-picker-close').onclick=()=>p.close();
    p.addEventListener('click',e=>{if(e.target===p)p.close()});
    p.querySelectorAll('.ww-type-picker-option').forEach(b=>b.onclick=()=>{
      const d=document.getElementById('stopItineraryDialog');
      if(!d)return p.close();
      d.dataset.category=b.dataset.category;
      paintChooser(d);
      p.close();
    });
    return p;
  }

  function paintChooser(d){
    const b=d?.querySelector('#wwActivityTypeChoose');if(!b)return;
    const rawCat=d.dataset.category||'';
    const cat=typeNormalise(rawCat);
    const src=typeAsset(cat);
    b.innerHTML=src?`<img src="${src}" alt="" aria-hidden="true"><span>${esc(cat)}</span>`:'<span>Choose type of activity</span>';
    b.classList.toggle('has-type',!!src);
  }

  function installChooser(d){
    const field=d?.querySelector('.itin-category-field');if(!field)return;
    field.classList.add('ww-type-chooser-field');
    field.innerHTML=`<legend>Type</legend><button type="button" id="wwActivityTypeChoose" class="ww-activity-type-choose"><span>Choose type of activity</span></button>`;
    field.querySelector('#wwActivityTypeChoose').onclick=()=>{
      const p=pickerDialog();
      p.querySelectorAll('.ww-type-picker-option').forEach(o=>o.classList.toggle('selected',o.dataset.category===typeNormalise(d.dataset.category)));
      p.showModal();
    };
    paintChooser(d);
  }

  /* Override only the category-bank painter: all callers continue to set the same stored category value. */
  renderItineraryCategoryBank=function(d,selected=''){
    d.dataset.category=selected;
    installChooser(d);
    paintChooser(d);
  };

  const _dialog=itineraryDialog;
  itineraryDialog=function(){
    const d=_dialog();
    installChooser(d);
    paintChooser(d);
    return d;
  };

  const _open=openStopItinerary;
  openStopItinerary=function(row,id=''){
    _open(row,id);
    const d=itineraryDialog();
    if(!id)d.dataset.category='';
    requestAnimationFrame(()=>paintChooser(d));
  };

  if(!document.getElementById('ww-activity-type-picker-style')){
    const st=document.createElement('style');st.id='ww-activity-type-picker-style';st.textContent=`
      .stop-itinerary-form .ww-type-chooser-field{display:grid!important;grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important;column-gap:14px!important;margin:14px 0!important}
      .stop-itinerary-form .ww-type-chooser-field legend{grid-column:1!important;margin:0!important;font-size:12px!important;font-weight:900!important;color:#172f3a!important}
      .ww-activity-type-choose{grid-column:2!important;width:100%!important;height:44px!important;min-height:44px!important;padding:0 15px!important;border:1px solid rgba(20,55,70,.12)!important;border-radius:16px!important;background:#fff!important;color:#24313b!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:9px!important;font:800 13px/1 Inter,sans-serif!important;box-sizing:border-box!important}
      .ww-activity-type-choose img{width:25px!important;height:25px!important;object-fit:contain!important;flex:0 0 25px!important}
      .ww-activity-type-picker{border:0!important;padding:0!important;background:transparent!important;max-width:min(92vw,430px)!important;width:min(92vw,430px)!important;overflow:visible!important}
      .ww-activity-type-picker::backdrop{background:rgba(0,74,88,.58)!important;backdrop-filter:blur(7px)!important}
      .ww-type-picker-shell{background:#f7e8c7!important;border-radius:28px!important;padding:22px!important;box-shadow:0 18px 55px rgba(0,45,57,.28)!important;color:#172f3a!important}
      .ww-type-picker-head{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;margin-bottom:18px!important}
      .ww-type-picker-head small{display:block!important;color:#07899d!important;font-size:10px!important;font-weight:900!important;letter-spacing:.08em!important;margin-bottom:3px!important}
      .ww-type-picker-head h3{margin:0!important;font-family:"Archivo Black",Impact,sans-serif!important;font-size:22px!important}
      .ww-type-picker-close{width:44px!important;height:44px!important;flex:0 0 44px!important;border:0!important;border-radius:50%!important;background:#fff!important;color:#68767b!important;font-size:28px!important;line-height:1!important}
      .ww-type-picker-grid{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:10px!important}
      .ww-type-picker-option{min-width:0!important;min-height:88px!important;padding:9px 5px 8px!important;border:2px solid transparent!important;border-radius:19px!important;background:#fff!important;color:#24313b!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;gap:8px!important;font:800 11px/1.15 Inter,sans-serif!important;text-align:center!important}
      .ww-type-picker-option img{width:38px!important;height:38px!important;object-fit:contain!important}
      .ww-type-picker-option.selected{border-color:#07899d!important;background:#e8f7f8!important}
      @media(max-width:390px){.ww-type-picker-grid{gap:8px!important}.ww-type-picker-option{min-height:82px!important;padding-left:3px!important;padding-right:3px!important}.ww-type-picker-option img{width:34px!important;height:34px!important}}
    `;document.head.appendChild(st);
  }
})();

/* === WozzaWorld hotfix — itinerary icon optical nudge left ===
   Visual-only: keep time/title columns exactly where they are. */
(()=>{
  const st=document.createElement('style');
  st.id='ww-itinerary-icon-optical-nudge-left-2909';
  st.textContent=`
    .master-itinerary-activity > .master-itinerary-icon{
      transform:translateX(-6px)!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — activity icon library scroll/reveal 29 Sep 2026 ===
   The expanded picker already contains all icon options; this makes the full
   library reachable inside the modal instead of clipping after the first 6. */
(()=>{
  if(document.getElementById('ww-activity-type-picker-scroll-hotfix-2909'))return;
  const st=document.createElement('style');
  st.id='ww-activity-type-picker-scroll-hotfix-2909';
  st.textContent=`
    #wwActivityTypePicker.ww-activity-type-picker{
      max-height:88dvh!important;
      overflow:visible!important;
    }
    #wwActivityTypePicker .ww-type-picker-shell{
      box-sizing:border-box!important;
      max-height:88dvh!important;
      overflow-y:auto!important;
      overflow-x:hidden!important;
      overscroll-behavior:contain!important;
      -webkit-overflow-scrolling:touch!important;
      scrollbar-width:none!important;
    }
    #wwActivityTypePicker .ww-type-picker-shell::-webkit-scrollbar{display:none!important}
    #wwActivityTypePicker .ww-type-picker-head{
      position:sticky!important;
      top:-22px!important;
      z-index:3!important;
      background:#f7e8c7!important;
      padding-top:22px!important;
      padding-bottom:10px!important;
    }
    #wwActivityTypePicker .ww-type-picker-grid{
      padding-bottom:2px!important;
    }
    #wwActivityTypePicker .ww-type-picker-option{
      display:flex!important;
      visibility:visible!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld activity polish — 29 Sep 2026 ===
   Surgical UI-only patch: Spa, styled currency chooser, autosize fields,
   picker card polish and full-width Type field. Museum/Gallery intentionally unchanged. */
(()=>{
  /* Spa is supplied by the authoritative WW_ACTIVITY_TYPES table above. */
  const addSpaToPicker=()=>{};
  /* Existing itinerary renderers now resolve Spa through WW_ACTIVITY_TYPES. */

  /* Auto-grow only Location and Contact details. */
  const autosize=el=>{if(!el)return;el.style.height='auto';el.style.height=Math.max(46,Math.ceil(el.scrollHeight))+'px'};
  const bindAutosize=d=>['itinLocation','itinContact'].forEach(id=>{const el=d?.querySelector('#'+id);if(!el)return;autosize(el);if(el.dataset.wwGrow==='1')return;el.dataset.wwGrow='1';el.addEventListener('input',()=>autosize(el))});

  /* Keep the real select for data/save compatibility, but present a WozzaWorld chooser. */
  function currencyDialog(){
    let p=document.getElementById('wwCurrencyPicker');if(p)return p;
    p=document.createElement('dialog');p.id='wwCurrencyPicker';p.className='ww-currency-picker';
    p.innerHTML='<div class="ww-currency-shell"><div class="ww-currency-head"><div><small>CURRENCY</small><h3>Choose currency</h3></div><button type="button" class="ww-currency-close" aria-label="Close">×</button></div><div class="ww-currency-grid">'+WW_ACTIVITY_CURRENCIES.map(c=>`<button type="button" data-currency="${c}">${c}${wwCurrencySymbol(c)&&wwCurrencySymbol(c)!==c?' '+wwCurrencySymbol(c):''}</button>`).join('')+'</div></div>';
    document.body.appendChild(p);p.querySelector('.ww-currency-close').onclick=()=>p.close();p.addEventListener('click',e=>{if(e.target===p)p.close()});
    p.querySelector('#wwActivityUnsavedX').onclick=()=>p.close();return p;
  }
  const bindCurrency=d=>{const sel=d?.querySelector('#itinCurrency');if(!sel)return;sel.classList.add('ww-native-currency-hidden');let btn=d.querySelector('#wwCurrencyChoose');if(!btn){btn=document.createElement('button');btn.type='button';btn.id='wwCurrencyChoose';btn.className='ww-currency-choose';sel.insertAdjacentElement('afterend',btn)}const paint=()=>{const c=sel.value||'GBP',sym=wwCurrencySymbol(c);btn.innerHTML=`<span>${c}${sym&&sym!==c?' '+sym:''}</span><span class="ww-currency-chevron">⌄</span>`};paint();if(btn.dataset.bound)return;btn.dataset.bound='1';btn.onclick=()=>{const p=currencyDialog();p.querySelectorAll('[data-currency]').forEach(x=>{x.classList.toggle('selected',x.dataset.currency===sel.value);x.onclick=()=>{sel.value=x.dataset.currency;sel.dispatchEvent(new Event('change',{bubbles:true}));paint();p.close()}});p.showModal()};sel.addEventListener('change',paint)};

  const enhance=()=>{const d=document.getElementById('stopItineraryDialog');if(d){bindAutosize(d);bindCurrency(d)}addSpaToPicker()};
  const oldDialog=window.itineraryDialog;window.itineraryDialog=function(){const d=oldDialog.apply(this,arguments);requestAnimationFrame(enhance);return d};
  const oldOpen=window.openStopItinerary;window.openStopItinerary=function(){const r=oldOpen.apply(this,arguments);requestAnimationFrame(()=>{enhance();const d=document.getElementById('stopItineraryDialog');bindAutosize(d);bindCurrency(d)});return r};
  document.addEventListener('click',()=>requestAnimationFrame(enhance),true);

  const st=document.createElement('style');st.id='ww-activity-polish-2909';st.textContent=`
    /* Type field aligns exactly with the other full-width fields. */
    .stop-itinerary-form .ww-type-chooser-field{display:block!important;width:100%!important;margin:14px 0!important;padding:0!important;border:0!important}
    .stop-itinerary-form .ww-type-chooser-field legend{display:block!important;width:100%!important;margin:0 0 7px!important;padding:0!important;font-size:12px!important;font-weight:900!important;color:#172f3a!important}
    .stop-itinerary-form .ww-activity-type-choose{width:100%!important;margin:0!important}
    /* Location/contact grow to content without an internal scrollbar. */
    #itinLocation,#itinContact{overflow:hidden!important;resize:none!important;min-height:46px!important;box-sizing:border-box!important}
    /* Softer translucent cards, crisp white rim, and milestone-style travelling glimmer. */
    .ww-type-picker-option{position:relative!important;overflow:hidden!important;background:rgba(255,255,255,.84)!important;border:2px solid #fff!important}
    .ww-type-picker-option.selected{border-color:#07899d!important;background:rgba(232,247,248,.9)!important}
    .ww-type-picker-option img{position:relative!important;z-index:1!important}
    .ww-type-picker-option::after{content:"";position:absolute;z-index:2;pointer-events:none;top:9px;left:50%;width:42px;height:42px;transform:translateX(-50%);background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.9) 48%,transparent 66%);mix-blend-mode:screen;animation:wwActivityGlimmer 3.6s ease-in-out infinite;opacity:0}
    @keyframes wwActivityGlimmer{0%,58%,100%{opacity:0;transform:translateX(-78%) skewX(-18deg)}68%{opacity:.9}82%{opacity:0;transform:translateX(-20%) skewX(-18deg)}}
    /* Labels never escape their own card. */
    .ww-type-picker-option span{display:block!important;width:100%!important;max-width:100%!important;min-width:0!important;overflow-wrap:normal!important;word-break:keep-all!important;hyphens:none!important;line-height:1.08!important;font-size:clamp(9px,2.65vw,11px)!important}
    .ww-type-picker-option[data-category="Accommodation"] span{font-size:8px!important;letter-spacing:-.035em!important;white-space:nowrap!important}
    /* Hide native platform dropdown while preserving its value for existing save logic. */
    .itin-cost-currency{display:grid!important;grid-template-columns:minmax(0,1fr) 96px!important;gap:8px!important;align-items:stretch!important}
    #itinCurrency.ww-native-currency-hidden{position:absolute!important;opacity:0!important;pointer-events:none!important;width:1px!important;height:1px!important}
    .ww-currency-choose{width:100%!important;min-width:0!important;border:1px solid rgba(20,55,70,.12)!important;border-radius:16px!important;background:#fff!important;color:#172f3a!important;padding:0 14px!important;font:900 13px/1 Inter,sans-serif!important;display:flex!important;align-items:center!important;justify-content:space-between!important;box-sizing:border-box!important}
    .ww-currency-chevron{font-size:18px!important;font-weight:500!important;transform:translateY(-2px)}
    .ww-currency-picker{border:0!important;padding:0!important;background:transparent!important;width:min(88vw,390px)!important;max-height:82dvh!important}
    .ww-currency-picker::backdrop{background:rgba(0,74,88,.58)!important;backdrop-filter:blur(7px)!important}
    .ww-currency-shell{background:#f7e8c7!important;border-radius:28px!important;padding:20px!important;max-height:82dvh!important;overflow:auto!important;box-shadow:0 18px 55px rgba(0,45,57,.28)!important;scrollbar-width:none!important}
    .ww-currency-shell::-webkit-scrollbar{display:none!important}.ww-currency-head{display:flex!important;justify-content:space-between!important;align-items:center!important;position:sticky!important;top:-20px!important;background:#f7e8c7!important;z-index:2!important;padding:20px 0 12px!important;margin-top:-20px!important}.ww-currency-head small{color:#07899d!important;font-size:10px!important;font-weight:900!important;letter-spacing:.08em!important}.ww-currency-head h3{margin:2px 0 0!important;font-family:"Archivo Black",Impact,sans-serif!important;font-size:22px!important;color:#172f3a!important}.ww-currency-close{width:44px!important;height:44px!important;border:0!important;border-radius:50%!important;background:#fff!important;color:#68767b!important;font-size:28px!important}.ww-currency-grid{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:9px!important}.ww-currency-grid button{height:52px!important;border:2px solid #fff!important;border-radius:16px!important;background:rgba(255,255,255,.84)!important;color:#172f3a!important;font:900 14px/1 Inter,sans-serif!important}.ww-currency-grid button.selected{border-color:#07899d!important;background:#e8f7f8!important}
  `;document.head.appendChild(st);
  requestAnimationFrame(enhance);
})();


/* === WozzaWorld activity consistency + type taxonomy patch 29 Sep 2026 === */
(()=>{
  if(document.getElementById('ww-activity-consistency-2909'))return;
  const st=document.createElement('style');st.id='ww-activity-consistency-2909';st.textContent=`
    /* Empty Type behaves like every other placeholder. */
    .ww-activity-type-choose:not(.has-type){justify-content:flex-start!important;text-align:left!important;color:#7b7b7b!important;font-family:Inter,sans-serif!important;font-size:13px!important;font-weight:700!important;padding-left:14px!important}
    /* Link placeholders use the same visual language as the form placeholders. */
    .stop-itinerary-form .itin-link-url,.stop-itinerary-form .itin-link-name{font-family:Inter,sans-serif!important;font-size:13px!important;font-weight:700!important;color:#172f3a!important}
    .stop-itinerary-form input::placeholder,.stop-itinerary-form textarea::placeholder,.stop-itinerary-form .itin-link-url::placeholder,.stop-itinerary-form .itin-link-name::placeholder{color:#7b7b7b!important;opacity:1!important;font-family:Inter,sans-serif!important;font-size:13px!important;font-weight:700!important}
    /* One standard fixed control height; expandable textareas remain content-led. */
    .stop-itinerary-form #itinName,.stop-itinerary-form #itinStartDate,.stop-itinerary-form #itinEndDate,.stop-itinerary-form #itinCost,.stop-itinerary-form #itinBookingRef,.stop-itinerary-form .itin-link-url,.stop-itinerary-form .itin-link-name,.stop-itinerary-form .ww-activity-type-choose,.stop-itinerary-form .ww-currency-choose{height:44px!important;min-height:44px!important;max-height:44px!important;box-sizing:border-box!important}
    .stop-itinerary-form .itin-cost-currency{align-items:end!important}
    /* Never split a single activity-type word. Multi-word labels may wrap only at spaces. */
    .ww-type-picker-option span{overflow-wrap:normal!important;word-break:keep-all!important;hyphens:none!important}
    .ww-type-picker-option[data-category="Accommodation"] span{font-size:8px!important;letter-spacing:-.035em!important;white-space:nowrap!important}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld bookmark + shopping + final activity polish 29 Sep 2026 === */
(()=>{
  const BOOKMARK_SVG=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.01l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.2z"/></svg>`;
  const normalise=c=>c==='See & Do'?'Other':c;
  const assetFor=c=>normalise(c)==='Shopping'?'shopping.png':normalise(c)==='Spa'?'vibe-spa-wellness.png':normalise(c)==='Other'?'activity-see-do.png':'';

  /* Shopping: add one final picker option without disturbing the established order. */
  function enhancePicker(){
    const grid=document.querySelector('#wwActivityTypePicker .ww-type-picker-grid');
    if(!grid||grid.querySelector('[data-category="Shopping"]'))return;
    const b=document.createElement('button');b.type='button';b.className='ww-type-picker-option';b.dataset.category='Shopping';
    b.innerHTML='<img src="shopping.png" alt=""><span>Shopping</span>';
    b.onclick=()=>{const d=document.getElementById('stopItineraryDialog');if(!d)return;d.dataset.category='Shopping';paintShoppingChooser(d);document.getElementById('wwActivityTypePicker')?.close()};
    grid.appendChild(b);
  }
  function paintShoppingChooser(d){
    if(!d||normalise(d.dataset.category)!=='Shopping')return;
    const b=d.querySelector('#wwActivityTypeChoose');if(!b)return;
    b.innerHTML='<img src="shopping.png" alt="" aria-hidden="true"><span>Shopping</span>';b.classList.add('has-type');
  }
  document.addEventListener('click',()=>requestAnimationFrame(enhancePicker),true);

  /* Ensure Shopping resolves everywhere the itinerary asks for an activity icon. */
  const oldItineraryIcon=itineraryIcon;
  itineraryIcon=function(item){if(normalise(item?.category)==='Shopping')return '<img class="ww-activity-type-asset" src="shopping.png" alt="" aria-hidden="true">';return oldItineraryIcon(item)};

  /* Edit screen bookmark state. */
  function ensureEditBookmark(d){
    if(!d)return;const head=d.querySelector('.stop-itinerary-head');if(!head)return;
    let b=head.querySelector('.ww-activity-bookmark-edit');
    if(!b){b=document.createElement('button');b.type='button';b.className='ww-activity-bookmark-edit';b.setAttribute('aria-label','Star activity');b.innerHTML=BOOKMARK_SVG;head.insertBefore(b,head.querySelector('.stop-itinerary-close'));b.onclick=()=>{d.dataset.bookmarked=d.dataset.bookmarked==='1'?'0':'1';paintEditBookmark(d)}}
    paintEditBookmark(d);
  }
  function paintEditBookmark(d){const b=d?.querySelector('.ww-activity-bookmark-edit');if(!b)return;const on=d.dataset.bookmarked==='1';b.classList.toggle('is-bookmarked',on);b.setAttribute('aria-pressed',String(on));b.title=on?'Remove star':'Star activity'}

  const oldOpen=openStopItinerary;
  openStopItinerary=function(row,id=''){
    const r=oldOpen.apply(this,arguments),d=itineraryDialog();
    const x=id?itineraryItemsForRow(row).find(i=>String(i.id)===String(id)):null;
    d.dataset.bookmarked=x?.bookmarked?'1':'0';
    requestAnimationFrame(()=>{ensureEditBookmark(d);enhancePicker();paintShoppingChooser(d)});
    return r;
  };

  /* Persist bookmark with the activity, including brand-new activities. */
  const oldSave=saveStopItinerary;
  saveStopItinerary=function(){
    const d=document.getElementById('stopItineraryDialog'),row=activeItineraryRow;
    if(!d||!row)return oldSave.apply(this,arguments);
    const existingId=activeItineraryId||'';const before=new Set(itineraryItemsForRow(row).map(x=>String(x.id)));
    const wanted=d.dataset.bookmarked==='1';const r=oldSave.apply(this,arguments);
    const items=itineraryItemsForRow(row);let x=existingId?items.find(i=>String(i.id)===String(existingId)):items.find(i=>!before.has(String(i.id)));
    if(x){x.bookmarked=wanted;row.dataset.itinerary=JSON.stringify(items);renderStopItinerarySummary(row)}
    return r;
  };

  function setBookmark(row,id,on){
    const items=itineraryItemsForRow(row),x=items.find(i=>String(i.id)===String(id));if(!x)return;
    x.bookmarked=!!on;row.dataset.itinerary=JSON.stringify(items);renderStopItinerarySummary(row);
    const master=document.getElementById('masterItineraryDialog');if(master?.open)wwRenderMasterItinerary();
  }

  /* Read-only preview bookmark control. */
  const oldQuick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    const r=oldQuick.apply(this,arguments),d=wwQuickInfoDialog(),head=d.querySelector('.itinerary-quick-info-shell header');
    const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!x||!head)return r;
    let b=head.querySelector('.ww-activity-bookmark-preview');
    if(!b){b=document.createElement('button');b.type='button';b.className='ww-activity-bookmark-preview';b.innerHTML=BOOKMARK_SVG;head.insertBefore(b,head.querySelector('button[aria-label="Close"]'))}
    const paint=()=>{b.classList.toggle('is-bookmarked',!!x.bookmarked);b.setAttribute('aria-pressed',String(!!x.bookmarked));b.setAttribute('aria-label',x.bookmarked?'Remove star':'Star activity')};paint();
    b.onclick=e=>{e.stopPropagation();x.bookmarked=!x.bookmarked;setBookmark(row,id,x.bookmarked);paint()};
    return r;
  };

  /* Add hanging bookmark to master itinerary rows while preserving row interactions/reorder. */
  const oldSchedule=wwActivityScheduleRow;
  wwActivityScheduleRow=function(x){
    let html=oldSchedule(x);
    if(normalise(x.category)==='Shopping')html=html.replace(/<span class="master-itinerary-icon">[\s\S]*?<\/span>/,'<span class="master-itinerary-icon"><img class="ww-activity-type-asset" src="shopping.png" alt="" aria-hidden="true"></span>');
    if(x.bookmarked)html=html.replace('</div>',`<span class="ww-itinerary-bookmark" aria-label="Starred">${BOOKMARK_SVG}</span></div>`);
    return html;
  };

  /* Currency field: ordinary populated-field weight, no dropdown arrow. */
  /* Currency picker is already proven/stable above. Do not mutate its trigger or react to
     DOM changes created by the picker itself; the chevron is hidden by CSS instead. */
  function cleanCurrency(){}
  const mo=new MutationObserver(mutations=>{
    if(mutations.length&&mutations.every(m=>m.target?.closest?.('#wwCurrencyPicker')))return;
    enhancePicker();
    const d=document.getElementById('stopItineraryDialog');
    if(d){ensureEditBookmark(d);paintShoppingChooser(d)}
  });mo.observe(document.body,{childList:true,subtree:true});
  requestAnimationFrame(cleanCurrency);

  const st=document.createElement('style');st.id='ww-bookmark-shopping-final-2909';st.textContent=`
    /* Currency now reads like every other populated field. */
    .stop-itinerary-form .ww-currency-choose{font-family:Inter,sans-serif!important;font-size:13px!important;font-weight:700!important;justify-content:flex-start!important;color:#172f3a!important}
    .stop-itinerary-form .ww-currency-chevron{display:none!important}
    /* Bookmark controls: outline off, teal fill on. */
    .stop-itinerary-head{position:relative!important}
    .ww-activity-bookmark-edit,.ww-activity-bookmark-preview{border:0!important;background:transparent!important;padding:6px!important;width:38px!important;height:42px!important;display:grid!important;place-items:center!important;color:#07899d!important;flex:0 0 38px!important}
    .ww-activity-bookmark-edit svg,.ww-activity-bookmark-preview svg{width:24px!important;height:24px!important;fill:transparent!important;stroke:currentColor!important;stroke-width:1.8!important;stroke-linejoin:round!important;overflow:visible!important}
    .ww-activity-bookmark-edit.is-bookmarked svg,.ww-activity-bookmark-preview.is-bookmarked svg{fill:#07899d!important;stroke:#07899d!important}
    .itinerary-quick-info-shell header{display:flex!important;align-items:flex-start!important}
    .itinerary-quick-info-shell header>div{flex:1 1 auto!important}
    /* Static teal star on starred itinerary rows. No glimmer/flicker/animation. */
    .master-itinerary-activity{position:relative!important}
    .ww-itinerary-bookmark{position:absolute!important;right:9px!important;top:5px!important;width:24px!important;height:24px!important;color:#07899d!important;z-index:4!important;overflow:visible!important;pointer-events:none!important}
    .ww-itinerary-bookmark svg{display:block!important;width:24px!important;height:24px!important;fill:#07899d!important;stroke:#07899d!important;stroke-width:1!important;stroke-linejoin:round!important}
    .ww-itinerary-bookmark::after{content:none!important;display:none!important;animation:none!important}
    .master-itinerary-activity:has(.ww-itinerary-bookmark) .master-itinerary-activity-main{padding-right:28px!important}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — trip editor true autosave (no overall Save changes button) === */
(()=>{
  const form=document.getElementById('tripForm'),dialog=document.getElementById('tripDialog');
  if(!form||!dialog||window.__wwTripTrueAutosaveInstalled)return;
  window.__wwTripTrueAutosaveInstalled=true;

  const style=document.createElement('style');
  style.id='ww-trip-true-autosave-style';
  style.textContent=`
    #tripForm .dialog-actions>.primary{display:none!important}
    #tripForm .dialog-actions{grid-template-columns:auto minmax(0,1fr) minmax(0,.72fr)!important}
    #tripForm .dialog-actions>#deleteTripBtn{grid-column:1!important}
    #tripForm .dialog-actions>#wwTripExportPlaceholder{grid-column:2!important}
    #tripForm .dialog-actions>#cancelTrip{grid-column:3!important}
  `;
  document.head.appendChild(style);

  let timer=0,busy=false,tripSurfaceFrame=0,newTripSeedCountry='';

  /* Remember what Add Trip pre-filled for us. A country supplied by the page itself is
     not user input, so simply opening + closing Add Trip must not create a trip. */
  const _wwOpenTripBeforeAutosaveGuard=openTrip;
  openTrip=function(country=''){
    newTripSeedCountry=canonicalCountry(country||'')||'';
    return _wwOpenTripBeforeAutosaveGuard.apply(this,arguments);
  };

  function newTripHasUserInput(stops){
    if(editingTripId)return true;
    if(($('#tripName')?.value||'').trim())return true;
    if((stops||[]).length!==1)return (stops||[]).length>0;
    const stop=(stops||[])[0]||{};
    const stopCountry=canonicalCountry(stop.country||'')||'';
    if(stopCountry!==newTripSeedCountry)return true;
    if((stop.name||'').trim()||(stop.start||'').trim()||(stop.end||'').trim()||(stop.travelMode||'').trim())return true;
    if($$('#tripCompanionBank .companion-tag.selected').length)return true;
    if($$('#tripVibeBank .vibe-tag.selected').length)return true;
    if(collectTripTodos().some(x=>String(typeof x==='string'?x:(x?.text||x?.name||'')).trim()))return true;
    if(($('#tripNotes')?.value||'').trim())return true;
    if(Number($('#tripRating')?.value)||0)return true;
    return false;
  }

  function refreshTripSurfaces(){
    cancelAnimationFrame(tripSurfaceFrame);
    tripSurfaceFrame=requestAnimationFrame(()=>{
      const list=document.getElementById('tripList');
      if(list){list.innerHTML=renderMyTrips();setupTripTitleScroll();attachTripRatingEvents();attachTripCardEvents()}
      /* Keep other trip-derived summaries in step without touching the open editor. */
      try{renderDepartureBoard()}catch(_e){}
      /* Country card is another trip-derived surface: refresh it from the same saved state. */
      if(currentCountry){
        try{renderSheet()}catch(_e){}
        try{renderCountryLists()}catch(_e){}
      }
    });
  }
  function persistEditor(){
    if(busy||!dialog.open)return false;
    const stops=collectDestinationStops(),countries=[...new Set(stops.map(d=>d.country).filter(Boolean))];
    /* Existing trips keep true autosave. For a brand-new trip, however, the country
       pre-filled by Add Trip is only context, not input. Do not create the record until
       the user actually changes/adds something. */
    if(!countries.length||(!editingTripId&&!newTripHasUserInput(stops)))return false;
    busy=true;
    try{
      let trip=editingTripId?state.trips.find(x=>String(x.id)===String(editingTripId)):null;
      const isNew=!trip;
      const oldCountries=trip?tripCountries(trip).slice():[];
      if(!trip){
        trip={id:crypto.randomUUID?.()||String(Date.now()),status:'upcoming',cities:{}};
        state.trips.push(trip);
        editingTripId=trip.id;
        setTripDialogMode(true);
      }
      let name=$('#tripName')?.value.trim()||'';
      if(!name)name=countries.length===1?countries[0]:countries.join(' & ');
      const first=stops[0]||{},last=stops[stops.length-1]||first;
      const start=first.start||'',end=(stops.length===1?first.end:last.end)||'';
      const companions=[...new Set($$('#tripCompanionBank .companion-tag.selected').map(b=>b.dataset.companion).filter(Boolean))];
      const vibes=[...new Set($$('#tripVibeBank .vibe-tag.selected').map(b=>b.dataset.vibe).filter(Boolean))];
      Object.assign(trip,{
        name,start,end,countries,destinations:stops,
        cities:trip.cities||{},companions,vibes,plan:trip.plan||'',
        todos:collectTripTodos(),notes:$('#tripNotes')?.value.trim()||'',
        rating:Number($('#tripRating')?.value)||0,status:trip.status||'upcoming'
      });
      countries.forEach(c=>{if(!state.countryAddedAt[c])state.countryAddedAt[c]=new Date().toISOString()});
      reconcileTripCountryStatuses([...oldCountries,...countries]);
      localStorage.setItem('wozzaworld-state',JSON.stringify(state));
      refreshTripSurfaces();
      rememberTripEditorSnapshot();
      return true;
    }finally{busy=false}
  }
  function queue(ms=320){clearTimeout(timer);timer=setTimeout(persistEditor,ms)}

  /* Text typing is gently debounced; selectors, dates, toggles and pickers persist immediately. */
  form.addEventListener('input',e=>{
    if(e.target?.matches('input[type="text"],input:not([type]),textarea,input[type="number"],input[type="url"],input[type="email"],input[type="tel"]'))queue(320);
    else queue(0);
  },true);
  form.addEventListener('change',()=>queue(0),true);

  /* Structural actions (stops, companions, vibes, todos, ratings, reorder controls, etc.) save after their handler has updated the live editor. */
  form.addEventListener('click',e=>{
    if(e.target.closest('button,.companion-tag,.vibe-tag,[role="button"],.rating-star,.trip-rating-star'))setTimeout(persistEditor,0);
  },true);
  form.addEventListener('pointerup',()=>setTimeout(persistEditor,40),true);

  /* WozzaWorld date/calendar and custom select overlays can live outside #tripForm. */
  document.addEventListener('change',e=>{
    if(dialog.open&&(e.target.closest?.('.wozza-calendar')||e.target.closest?.('.wozza-select')))queue(0);
  },true);
  document.addEventListener('click',e=>{
    if(dialog.open&&(e.target.closest?.('.wozza-calendar')||e.target.closest?.('.wozza-select')))setTimeout(persistEditor,30);
  },true);

  /* Close now means close: flush the latest edit first, then bypass the old unsaved-changes prompt. */
  const closeNow=e=>{
    const btn=e.target.closest?.('#cancelTrip,#closeTripDialog');
    if(!btn||!dialog.open)return;
    e.preventDefault();e.stopImmediatePropagation();
    clearTimeout(timer);persistEditor();
    editingTripId=null;tripEditorSnapshot='';
    form.querySelector('.new-trip-name-arrow')?.remove();
    dialog.close();
  };
  document.addEventListener('click',closeNow,true);

  /* Existing activity save/delete already writes itinerary data; this makes the whole trip snapshot stick too. */
  const oldPersist=window.wwPersistItineraryWork||wwPersistItineraryWork;
  if(typeof oldPersist==='function'){
    window.wwPersistItineraryWork=function(){const r=oldPersist.apply(this,arguments);persistEditor();return r};
    try{wwPersistItineraryWork=window.wwPersistItineraryWork}catch(_e){}
  }
})();

/* === WozzaWorld hotfix — blank activity type defaults to Other + larger activity star 29 Sep 2026 === */
(()=>{
  if(window.__wwBlankActivityOtherStarSize)return;
  window.__wwBlankActivityOtherStarSize=true;

  const normaliseBlankTypes=row=>{
    if(!row)return false;
    const items=itineraryItemsForRow(row);
    let changed=false;
    items.forEach(x=>{if(x&&!String(x.category||'').trim()){x.category='Other';changed=true}});
    if(changed)row.dataset.itinerary=JSON.stringify(items);
    return changed;
  };

  /* Saving a new/edit activity with no explicit type stores Other, not a blank category. */
  const previousSave=saveStopItinerary;
  saveStopItinerary=function(){
    const d=itineraryDialog();
    if(d&&!String(d.dataset.category||'').trim())d.dataset.category='Other';
    return previousSave.apply(this,arguments);
  };

  /* Existing legacy blank activities also resolve to Other anywhere itinerary UI is rendered. */
  const previousSummary=renderStopItinerarySummary;
  renderStopItinerarySummary=function(row){normaliseBlankTypes(row);return previousSummary.apply(this,arguments)};

  const previousOpen=openStopItinerary;
  openStopItinerary=function(row,id=''){normaliseBlankTypes(row);return previousOpen.apply(this,arguments)};

  const previousQuick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){normaliseBlankTypes(row);return previousQuick.apply(this,arguments)};

  const previousMaster=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    document.querySelectorAll('.trip-stop-row').forEach(normaliseBlankTypes);
    return previousMaster.apply(this,arguments);
  };

  const previousIcon=itineraryIcon;
  itineraryIcon=function(item){
    if(item&&!String(item.category||'').trim())item={...item,category:'Other'};
    return previousIcon(item);
  };

  const previousSchedule=wwActivityScheduleRow;
  wwActivityScheduleRow=function(x){
    if(x&&!String(x.category||'').trim())x={...x,category:'Other'};
    return previousSchedule(x);
  };

  const st=document.createElement('style');
  st.id='ww-activity-star-size-2909';
  st.textContent=`
    /* Activity header star only: optically balance it with the circular close control. */
    .ww-activity-bookmark-edit,.ww-activity-bookmark-preview{
      width:52px!important;height:52px!important;flex:0 0 52px!important;padding:4px!important;
    }
    .ww-activity-bookmark-edit svg,.ww-activity-bookmark-preview svg{
      width:42px!important;height:42px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — activity recycle/restore + itinerary return + preview star nudge 29 Sep 2026 === */
(()=>{
  if(window.__wwActivityRecycleRestore2909)return;
  window.__wwActivityRecycleRestore2909=true;
  state.activityRecycleBin??=[];

  const persistState=()=>localStorage.setItem('wozzaworld-state',JSON.stringify(state));
  const findStop=(trip,stopId,stopIndex)=>{
    const stops=trip?.destinations||[];
    return stops.find(s=>String(s.id||'')===String(stopId||''))||stops[Number(stopIndex)]||null;
  };
  const todoIdsFor=x=>new Set([...(x?.todoIds||[]),...(x?.todoId?[x.todoId]:[])].map(String));

  /* Final activity-save navigation: always land back on the master itinerary. */
  const priorSave=saveStopItinerary;
  saveStopItinerary=function(){
    const row=activeItineraryRow;
    const out=priorSave.apply(this,arguments);
    if(row){
      wwPersistItineraryWork?.();
      requestAnimationFrame(()=>{
        wwRenderMasterItinerary?.();
        const master=wwMasterItineraryDialog?.();
        if(master&&!master.open)master.showModal();
      });
    }
    return out;
  };

  /* Final delete behaviour: move the complete activity to Recycle Bin, not permanent deletion. */
  const priorOpen=openStopItinerary;
  openStopItinerary=function(row,id=''){
    const out=priorOpen.apply(this,arguments);
    const d=itineraryDialog(),del=d?.querySelector('#itinDelete');
    if(id&&del&&!del.hidden){
      del.onclick=e=>{
        e?.preventDefault?.();e?.stopPropagation?.();
        const items=itineraryItemsForRow(row),idx=items.findIndex(x=>String(x.id)===String(id));
        if(idx<0)return;
        const activity=structuredClone(items[idx]);
        const trip=state.trips.find(t=>String(t.id)===String(editingTripId));
        const stopId=row.dataset.stopId||'';
        const rows=$$('#tripDestinationStops .trip-destination-stop');
        const stopIndex=Math.max(0,rows.indexOf(row));
        const ids=todoIdsFor(activity);
        const todos=(trip?.todos||collectTripTodos?.()||[]).filter(t=>ids.has(String(t.id))).map(t=>structuredClone(t));
        const commit=()=>{
          state.activityRecycleBin.unshift({activity,tripId:editingTripId||trip?.id||'',tripName:trip?.name||$('#tripName')?.value||'',stopId,stopIndex,todos,removedAt:Date.now()});
          ids.forEach(todoId=>activityTodoById(todoId)?.remove());
          setItineraryItemsForRow(row,items.filter((_,i)=>i!==idx));
          updateTripTodoSummary?.();
          wwPersistItineraryWork?.();persistState();
          d.close();
          wwRenderMasterItinerary?.();
          const master=wwMasterItineraryDialog?.();if(master&&!master.open)master.showModal();
          toast?.(`${activity.name||'Activity'} moved to recycle bin`);
        };
        if(typeof showWozzaConfirm==='function')showWozzaConfirm('Send activity to recycle bin?',`Send “${activity.name||'this activity'}” to the recycle bin?`,commit,'Send to recycle bin');else commit();
      };
    }
    return out;
  };

  /* Add Activity rows to the existing shared Recycle Bin and wire restore/permanent delete. */
  const priorRenderRecycle=renderRecycleBin;
  renderRecycleBin=function(){
    priorRenderRecycle.apply(this,arguments);
    const el=$('#recycleList');if(!el||!state.activityRecycleBin?.length)return;
    const undo=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5v-4M5.5 7.5A8 8 0 1 1 4 14"/></svg>`;
    const bin=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>`;
    const rows=state.activityRecycleBin.map((r,i)=>`<div class="recycle-row ww-recycled-activity" data-recycle-key="a:${i}" data-recycled-activity="${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(r.activity?.name||'activity')}" tabindex="-1">✓</button><span class="recycle-trip-icon">${itineraryIcon(r.activity||{})}</span><span class="recycle-copy"><strong>${esc(r.activity?.name||'Activity')}</strong><small>Activity${r.tripName?' · '+esc(r.tripName):''}</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-activity="${i}" aria-label="Restore ${esc(r.activity?.name||'activity')}">${undo}</button><button type="button" class="delete-btn" data-delete-activity="${i}" aria-label="Delete ${esc(r.activity?.name||'activity')} permanently">${bin}</button></span></div>`).join('');
    const empty=el.querySelector('.recycle-empty-state');
    if(empty){el.innerHTML=`<div class="recycle-select-head"><span>Choose items to restore or permanently delete.</span></div>${rows}`}
    else el.insertAdjacentHTML('beforeend',rows);
    el.querySelectorAll('[data-restore-activity]').forEach(b=>b.onclick=()=>{
      const i=Number(b.dataset.restoreActivity),r=state.activityRecycleBin[i];if(!r)return;
      const trip=state.trips.find(t=>String(t.id)===String(r.tripId));
      const stop=findStop(trip,r.stopId,r.stopIndex);
      if(!trip||!stop){toast?.('Original trip is not available');return}
      stop.itinerary??=[];
      if(!stop.itinerary.some(x=>String(x.id)===String(r.activity.id)))stop.itinerary.push(structuredClone(r.activity));
      trip.todos??=[];(r.todos||[]).forEach(t=>{if(!trip.todos.some(x=>String(x.id)===String(t.id)))trip.todos.push(structuredClone(t))});
      state.activityRecycleBin.splice(i,1);persistState();renderRecycleBin();render();toast?.(`${r.activity?.name||'Activity'} restored`);
    });
    el.querySelectorAll('[data-delete-activity]').forEach(b=>b.onclick=()=>{
      const i=Number(b.dataset.deleteActivity),r=state.activityRecycleBin[i];if(!r)return;
      const commit=()=>{state.activityRecycleBin.splice(i,1);persistState();renderRecycleBin();toast?.('Activity permanently deleted')};
      if(typeof showWozzaConfirm==='function')showWozzaConfirm('Delete activity permanently?',`Permanently delete “${r.activity?.name||'this activity'}”?`,commit,'Delete permanently');else commit();
    });
  };

  const st=document.createElement('style');st.id='ww-activity-preview-star-nudge-2909';st.textContent=`
    /* Preview/details page only: retain approved size, just lift the teal star optically. */
    .itinerary-quick-info-dialog .ww-activity-bookmark-preview,
    #itineraryQuickInfoDialog .ww-activity-bookmark-preview{transform:translateY(-6px)!important}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — Activity delete confirmation lifecycle + edit-card height 29 Sep 2026 === */
(()=>{
  if(window.__wwActivityDeleteConfirmHeight2909)return;
  window.__wwActivityDeleteConfirmHeight2909=true;

  /* The shared confirmer normally prefers #tripDialog when it is still open behind
     Activity Details. That leaves the overlay behind the top-layer activity dialog,
     so it only becomes visible later when Activity Details closes. Keep the shared
     confirmer, but move its overlay into the currently open Activity Details dialog. */
  const priorConfirm=showWozzaConfirm;
  showWozzaConfirm=function(title,message,onConfirm,confirmText='Confirm'){
    priorConfirm.apply(this,arguments);
    const activity=document.getElementById('stopItineraryDialog');
    const overlay=document.querySelector('.wozza-alert-overlay');
    if(activity?.open&&overlay&&overlay.parentElement!==activity)activity.appendChild(overlay);
  };

  const st=document.createElement('style');
  st.id='ww-activity-edit-height-2909';
  st.textContent=`
    /* Activity Details only: a small height increase so its cream card reaches the
       same visual depth as the parent card beneath it. Width/field geometry unchanged. */
    #stopItineraryDialog.stop-itinerary-dialog{max-height:89vh!important}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld corrective hotfix — Activity ↔ Trip to-do ownership 30 Sep 2026 ===
   Trip to-do remains the canonical/master list. Activity editors only expose items
   explicitly owned by that activity. No text-based dedupe: identical genuine tasks
   are allowed. */
(()=>{
 if(window.__wwActivityTripTodoOwnership3009)return;
 window.__wwActivityTripTodoOwnership3009=true;

 const canonicalTodoList=()=>document.getElementById('tripTodoList');
 const canonicalRows=()=>[...(canonicalTodoList()?.querySelectorAll(':scope > .trip-todo-row')||[])];
 const idsForActivity=x=>[...new Set([...(Array.isArray(x?.todoIds)?x.todoIds:[]),...(x?.todoId?[x.todoId]:[])].map(String).filter(Boolean))];

 /* Never resolve an Activity task against the temporary Activity editor DOM. */
 activityTodoById=function(id){
  if(!id)return null;
  return canonicalRows().find(r=>String(r.dataset.todoId||'')===String(id))||null;
 };

 /* Trip snapshots/summaries must only collect the canonical Trip list. */
 collectTripTodos=function(){
  return canonicalRows().map(row=>({
   id:row.dataset.todoId||'',activityId:row.dataset.activityId||'',
   text:row.querySelector('.trip-todo-input')?.value.trim()||'',
   done:row.classList.contains('is-done')
  })).filter(x=>x.text);
 };

 /* Conservative migration/repair. It only uses IDs + explicit activity ownership.
    It deliberately does NOT deduplicate by task text. */
 function repairTripTodoOwnership(t){
  if(!t)return false;
  let changed=false;
  const todos=normaliseTripTodos(t.todos||[]),byId=new Map();
  const unique=[];
  for(const todo of todos){
   if(todo.id&&byId.has(todo.id)){changed=true;continue} // same-ID duplicate is always redundant
   if(todo.id)byId.set(todo.id,todo);
   unique.push(todo);
  }
  const activities=[];
  (t.destinations||[]).forEach(stop=>(stop.itinerary||[]).forEach(a=>activities.push(a)));
  const referenced=new Set();
  activities.forEach(a=>{
   const seen=new Set(),valid=[];
   idsForActivity(a).forEach(id=>{
    if(seen.has(id))return;seen.add(id);
    const todo=byId.get(id);
    /* A Trip-only task (blank activityId) can never belong in an Activity editor. */
    if(todo&&String(todo.activityId||'')===String(a.id||'')){valid.push(id);referenced.add(id)}
    else changed=true;
   });
   const before=idsForActivity(a);
   if(before.length!==valid.length||before.some((v,i)=>v!==valid[i]))changed=true;
   a.todoIds=valid;
   a.todoId=valid[0]||'';
  });
  const cleaned=unique.filter(todo=>{
   if(!todo.activityId)return true;
   const keep=referenced.has(String(todo.id||''));
   if(!keep)changed=true; // orphan created by the old bridge
   return keep;
  });
  if(cleaned.length!==t.todos?.length)changed=true;
  t.todos=cleaned;
  return changed;
 }

 const priorOpenTripEditor=openTripEditor;
 openTripEditor=function(t){
  if(repairTripTodoOwnership(t))save();
  return priorOpenTripEditor.apply(this,arguments);
 };

 activityTodoDraftFromItem=function(x){
  const activityId=String(x?.id||'');
  return idsForActivity(x).map(id=>{
   const r=activityTodoById(id);
   /* Defence in depth: even a polluted todoIds array cannot import a Trip-only task. */
   if(!r||String(r.dataset.activityId||'')!==activityId)return null;
   return {id:String(id),activityId,text:r.querySelector('.trip-todo-input')?.value||'',done:r.classList.contains('is-done')};
  }).filter(Boolean);
 };

 renderActivityTodoEditor=function(d){
  const list=d.querySelector('#itinTodoList');if(!list)return;
  const vals=JSON.parse(d.dataset.todoDraft||'[]');
  /* Match Trip to-do UX: an empty Activity list still presents one live, tappable draft field. */
  const renderVals=vals.length?vals:[{id:'',activityId:d.dataset.activityDraftId||'',text:'',done:false}];
  list.innerHTML=renderVals.map((v,i)=>todoRowMarkup(v,i)).join('');
  const sync=()=>{
   d.dataset.todoDraft=JSON.stringify([...list.querySelectorAll(':scope > .trip-todo-row')].map(r=>({
    id:r.dataset.todoId||'',activityId:d.dataset.activityDraftId||'',
    text:r.querySelector('.trip-todo-input')?.value.trim()||'',done:r.classList.contains('is-done')
   })).filter(x=>x.text));
  };
  const addBlank=()=>{sync();const a=JSON.parse(d.dataset.todoDraft||'[]');a.push({id:'',activityId:d.dataset.activityDraftId||'',text:'',done:false});d.dataset.todoDraft=JSON.stringify(a);renderActivityTodoEditor(d);d.querySelector('#itinTodoList')?.lastElementChild?.querySelector('.trip-todo-input')?.focus()};
  [...list.querySelectorAll(':scope > .trip-todo-row')].forEach(row=>{
   const input=row.querySelector('.trip-todo-input'),check=row.querySelector('.trip-todo-check'),remove=row.querySelector('.trip-todo-remove');
   const redraw=()=>{autoSizeTripTodo(input);row.classList.toggle('has-text',!!input.value.trim());row.querySelector('.trip-todo-scribble')?.remove();if(row.classList.contains('is-done')&&input.value.trim()){input.insertAdjacentHTML('afterend',todoScribbleMarkup(Number(row.dataset.scribble||0)%5));requestAnimationFrame(()=>sizeTripTodoScribble(row))}sync()};
   input?.addEventListener('input',redraw);input?.addEventListener('change',redraw);
   input?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();if(input.value.trim())addBlank()}});
   if(check)check.onclick=()=>{if(!input.value.trim())return;const done=!row.classList.contains('is-done');row.classList.toggle('is-done',done);check.classList.toggle('selected',done);check.setAttribute('aria-pressed',String(done));check.setAttribute('aria-label',done?'Mark incomplete':'Mark complete');redraw()};
   if(remove)remove.onclick=()=>{row.remove();sync()};
   autoSizeTripTodo(input);if(row.classList.contains('is-done'))requestAnimationFrame(()=>sizeTripTodoScribble(row));
  });
  const add=d.querySelector('#itinTodoAdd');if(add)add.onclick=addBlank;
 };

 syncActivityTodosToTrip=function(d,id,old={}){
  const activityId=String(id),draft=JSON.parse(d.dataset.todoDraft||'[]'),oldIds=idsForActivity(old),newIds=[];
  const draftIds=new Set(draft.map(x=>String(x.id||'')).filter(Boolean));
  oldIds.forEach(oid=>{const r=activityTodoById(oid);if(r&&String(r.dataset.activityId||'')===activityId&&!draftIds.has(String(oid)))r.remove()});
  draft.forEach(item=>{
   const text=String(item.text||'').trim();if(!text)return;
   let tid=String(item.id||'');let r=tid?activityTodoById(tid):null;
   /* Never commandeer a Trip-only or another Activity's task, even if stale data points at it. */
   if(r&&String(r.dataset.activityId||'')!==activityId){tid='';r=null}
   if(!tid)tid=crypto.randomUUID?.()||`todo-${Date.now()}-${Math.random().toString(36).slice(2)}`;
   if(!r){addTripTodoRow({id:tid,activityId,text,done:!!item.done});r=activityTodoById(tid)}
   if(r){r.dataset.activityId=activityId;const inp=r.querySelector('.trip-todo-input');if(inp)inp.value=text;r.classList.toggle('has-text',true);r.classList.toggle('is-done',!!item.done);const tick=r.querySelector('.trip-todo-check');tick?.classList.toggle('selected',!!item.done);tick?.setAttribute('aria-pressed',String(!!item.done));autoSizeTripTodo(inp)}
   if(!newIds.includes(tid))newIds.push(tid);
  });
  updateTripTodoSummary();return newIds;
 };
})();

/* === WozzaWorld surgical hotfix — shared trip To Do list on master itinerary 30 Sep 2026 ===
   The itinerary is a second editor for the canonical #tripTodoList. It never creates
   a second data model: trip-created and activity-created tasks remain the same rows/IDs. */
(()=>{
 const canonical=()=>document.getElementById('tripTodoList');
 /* Trip-created rows from older data can legitimately have no ID. The itinerary needs a
    stable ID to address the exact canonical row, so assign one in-place before mirroring. */
 const ensureCanonicalIds=()=>{[...(canonical()?.querySelectorAll(':scope > .trip-todo-row')||[])].forEach(r=>{if(!r.dataset.todoId)r.dataset.todoId=crypto.randomUUID?.()||`todo-${Date.now()}-${Math.random().toString(36).slice(2)}`})};
 const values=()=>{ensureCanonicalIds();return [...(canonical()?.querySelectorAll(':scope > .trip-todo-row')||[])].map(r=>({
   id:r.dataset.todoId||'',activityId:r.dataset.activityId||'',scribble:Number(r.dataset.scribble||0),
   text:r.querySelector('.trip-todo-input')?.value||'',done:r.classList.contains('is-done')
 }))};
 const canonicalRow=id=>{ensureCanonicalIds();return [...(canonical()?.querySelectorAll(':scope > .trip-todo-row')||[])].find(r=>String(r.dataset.todoId||'')===String(id))||null};
 function ensure(){
   const d=document.getElementById('masterItineraryDialog'),notes=d?.querySelector('.master-itinerary-trip-notes');if(!d||!notes)return null;
   let section=d.querySelector('.ww-itinerary-trip-todos');
   if(!section){
     section=document.createElement('section');section.className='ww-itinerary-trip-todos';
     section.innerHTML='<h3>TO DO LIST</h3><div class="ww-itinerary-todo-list"></div><button type="button" class="ww-itinerary-add-todo">＋ Add more</button>';
     notes.insertAdjacentElement('afterend',section);
     section.querySelector('.ww-itinerary-add-todo').onclick=()=>{addTripTodoRow();render();requestAnimationFrame(()=>section.querySelector('.ww-itinerary-todo-list')?.lastElementChild?.querySelector('textarea')?.focus())};
   }
   return section;
 }
 function render(){
   const section=ensure();if(!section)return;const list=section.querySelector('.ww-itinerary-todo-list'),vals=values();
   list.innerHTML=vals.map((v,i)=>`<div class="ww-itinerary-todo-row${v.done?' is-done':''}" data-id="${esc(v.id)}"><textarea rows="1" placeholder="Type here...">${esc(v.text)}</textarea><button type="button" class="ww-itinerary-todo-check${v.done?' selected':''}" aria-label="${v.done?'Mark incomplete':'Mark complete'}">${v.done?'✓':''}</button><button type="button" class="ww-itinerary-todo-remove" aria-label="Remove">×</button></div>`).join('');
   [...list.children].forEach(row=>{
     const id=row.dataset.id,input=row.querySelector('textarea'),check=row.querySelector('.ww-itinerary-todo-check'),remove=row.querySelector('.ww-itinerary-todo-remove');
     const size=()=>{input.style.height='0px';const h=Math.max(38,input.scrollHeight+2);input.style.height=h+'px';row.style.minHeight=h+'px'};requestAnimationFrame(size);
     input.oninput=()=>{const r=canonicalRow(id);if(!r)return;const target=r.querySelector('.trip-todo-input');target.value=input.value;target.dispatchEvent(new Event('input',{bubbles:true}));size()};
     input.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();if(!input.value.trim())return;addTripTodoRow();render();requestAnimationFrame(()=>list.lastElementChild?.querySelector('textarea')?.focus())}};
     check.onclick=()=>canonicalRow(id)?.querySelector('.trip-todo-check')?.click();
     remove.onclick=()=>canonicalRow(id)?.querySelector('.trip-todo-remove')?.click();
   });
 }
 const oldEnsure=wwEnsureItinerarySharedNotes;wwEnsureItinerarySharedNotes=function(d){const out=oldEnsure(d);render();return out};
 const oldRender=wwRenderTripHierarchy;wwRenderTripHierarchy=function(){const out=oldRender();render();return out};
 let queued=false;const itineraryTodoIsEditing=()=>document.activeElement?.matches?.('.ww-itinerary-todo-row textarea');const queue=()=>{if(queued||itineraryTodoIsEditing())return;queued=true;requestAnimationFrame(()=>{queued=false;if(document.getElementById('masterItineraryDialog')?.open&&!itineraryTodoIsEditing())render()})};
 const list=canonical();if(list)new MutationObserver(queue).observe(list,{subtree:true,childList:true,attributes:true,characterData:true});
 document.addEventListener('input',e=>{if(e.target?.closest?.('#tripTodoList'))queue()},true);
 document.addEventListener('focusout',e=>{if(e.target?.matches?.('.ww-itinerary-todo-row textarea'))requestAnimationFrame(queue)},true);
 const st=document.createElement('style');st.id='ww-itinerary-shared-todos-3009';st.textContent=`
 .ww-itinerary-trip-todos{margin:24px 0 0!important}.ww-itinerary-trip-todos h3{margin:0 0 12px!important;color:#172f3a!important;font-size:18px!important;font-weight:900!important;letter-spacing:.02em!important}
 .ww-itinerary-todo-list{display:grid!important;gap:10px!important;background:#edf5f4!important;border:1px solid rgba(7,94,120,.075)!important;border-radius:24px!important;padding:16px!important}
 .ww-itinerary-todo-row{display:grid!important;grid-template-columns:minmax(0,1fr) 34px 34px!important;gap:7px!important;align-items:start!important;min-height:38px!important}
 .ww-itinerary-todo-row textarea{box-sizing:border-box!important;width:100%!important;min-height:38px!important;resize:none!important;overflow:hidden!important;border:1px solid #d8dfe1!important;border-radius:18px!important;background:#fff!important;color:#172f3a!important;padding:9px 13px!important;font-family:inherit!important;font-size:13px!important;font-weight:400!important;line-height:1.35!important;white-space:pre-wrap!important;overflow-wrap:anywhere!important;max-height:none!important;field-sizing:content!important}
 .ww-itinerary-todo-check{position:relative!important;isolation:isolate!important;width:34px!important;height:34px!important;border:0!important;background:transparent!important;color:#fff!important;font-size:19px!important;font-weight:900!important;display:grid!important;place-items:center!important;padding:0!important;z-index:0!important}
 .ww-itinerary-todo-check::before{content:"";position:absolute!important;inset:3px!important;border:2.4px solid #687781!important;border-radius:50%!important;box-sizing:border-box!important;background:transparent!important;z-index:-1!important}.ww-itinerary-todo-check.selected::before{background:#159b70!important;border-color:rgba(104,119,129,.58)!important}
 .ww-itinerary-todo-row.is-done textarea{text-decoration-line:line-through!important;text-decoration-style:wavy!important;text-decoration-color:#111!important;text-decoration-thickness:2px!important}
 .ww-itinerary-todo-remove{width:34px!important;height:34px!important;border:0!important;border-radius:50%!important;background:#fff2ef!important;color:#b43831!important;font-size:23px!important;font-weight:800!important;display:grid!important;place-items:center!important;box-shadow:0 2px 7px rgba(9,38,47,.06)!important}
 .ww-itinerary-add-todo{margin:12px 0 0!important;padding:9px 2px!important;border:0!important;background:transparent!important;color:#087c96!important;font:inherit!important;font-size:13px!important;font-weight:850!important;text-align:left!important}
 `;document.head.appendChild(st);
})();

/* === WozzaWorld surgical hotfix — itinerary companions + notes heading + currency weight 30 Sep 2026 === */
(()=>{
  /* Build the itinerary companion line from the live trip editor when it is open,
     falling back to the saved trip. Warren is the trip owner and is shown first. */
  const oldMeta=wwItineraryTripMeta;
  wwItineraryTripMeta=function(){
    const meta=oldMeta();
    const trip=editingTripId?state.trips.find(t=>String(t.id)===String(editingTripId)):null;
    const live=[...document.querySelectorAll('#tripCompanionBank .companion-tag.selected')]
      .map(b=>String(b.dataset.companion||'').trim()).filter(Boolean);
    const saved=(trip?.companions||[]).map(x=>String(x||'').trim()).filter(Boolean);
    const selected=live.length?live:saved;
    const names=[...new Map(['Warren',...selected]
      .filter(Boolean).map(n=>[n.toLowerCase(),n])).values()];
    if(selected.length===0)meta.companionLine='';
    else if(names.length===2)meta.companionLine=`${names[0]} & ${names[1]}`;
    else meta.companionLine=`${names.slice(0,-1).join(', ')} & ${names[names.length-1]}`;
    return meta;
  };

  const st=document.createElement('style');
  st.id='ww-surgical-polish-300926';
  st.textContent=`
    .master-itinerary-trip-notes>span{font-size:18px!important;font-weight:900!important;letter-spacing:.02em!important;margin:0 0 12px!important}
    .stop-itinerary-form .ww-currency-choose{font-weight:700!important;color:#7b7b7b!important}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical hotfix — calendar daily view read-only to-dos 30 Sep 2026 ===
   Scope: ONLY calendar -> selected-day DAILY SCHEDULE.
   - No Add Activity control.
   - To Do list contains only tasks belonging to activities on that date.
   - Daily To Do list is display-only.
   Main itinerary, Trip and Activity editors keep their existing behaviour. */
(()=>{
  const dailyTodoValues=iso=>{
    const activities=wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));
    const ids=[];
    activities.forEach(x=>{
      const own=Array.isArray(x.todoIds)&&x.todoIds.length?x.todoIds:(x.todoId?[x.todoId]:[]);
      own.forEach(id=>{id=String(id||'');if(id&&!ids.includes(id))ids.push(id)});
    });
    return ids.map(id=>activityTodoById(id)).filter(Boolean).map(r=>({
      text:r.querySelector('.trip-todo-input')?.value?.trim()||'',
      done:r.classList.contains('is-done')
    })).filter(x=>x.text);
  };

  function renderDailyTodos(d,iso){
    const section=d?.querySelector('.ww-itinerary-trip-todos');
    if(!section)return;
    const vals=dailyTodoValues(iso);
    section.hidden=!vals.length;
    section.classList.toggle('ww-daily-readonly-todos',true);
    const list=section.querySelector('.ww-itinerary-todo-list');
    const add=section.querySelector('.ww-itinerary-add-todo');
    if(add)add.hidden=true;
    if(!list)return;
    list.innerHTML=vals.map(v=>`<div class="ww-daily-todo-item${v.done?' is-done':''}"><span>${esc(v.text)}</span></div>`).join('');
  }

  const oldDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=oldDaily(iso);
    const d=document.getElementById('masterItineraryDialog');
    if(!d)return out;
    d.dataset.wwView='daily';
    d.dataset.wwDailyIso=iso;
    const add=d.querySelector('#masterItineraryAdd');
    if(add)add.hidden=true;
    renderDailyTodos(d,iso);
    return out;
  };

  /* Any normal itinerary render explicitly exits daily-only mode and restores its editor. */
  const oldHierarchy=wwRenderTripHierarchy;
  wwRenderTripHierarchy=function(){
    const d=document.getElementById('masterItineraryDialog');
    if(d){delete d.dataset.wwView;delete d.dataset.wwDailyIso;const s=d.querySelector('.ww-itinerary-trip-todos');if(s){s.hidden=false;s.classList.remove('ww-daily-readonly-todos');const a=s.querySelector('.ww-itinerary-add-todo');if(a)a.hidden=false}}
    return oldHierarchy();
  };
  wwRenderMasterItinerary=wwRenderTripHierarchy;

  const st=document.createElement('style');
  st.id='ww-daily-readonly-todos-300926';
  st.textContent=`
    #masterItineraryDialog[data-ww-view="daily"] #masterItineraryAdd{display:none!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-itinerary-trip-todos[hidden]{display:none!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-itinerary-add-todo{display:none!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-itinerary-todo-list{display:grid!important;gap:9px!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-daily-todo-item{box-sizing:border-box;width:100%;min-height:38px;border:1px solid #d8dfe1;border-radius:18px;background:#fff;color:#172f3a;padding:9px 13px;font-size:13px;font-weight:400;line-height:1.35;white-space:pre-wrap;overflow-wrap:anywhere}
    #masterItineraryDialog[data-ww-view="daily"] .ww-daily-todo-item.is-done{text-decoration:line-through;color:#687781;opacity:.72}
    /* Daily Plan read-only tasks: plain text list inside the existing outer Tasks panel. */
    #masterItineraryDialog[data-ww-view="daily"] .ww-itinerary-todo-list{gap:7px!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-daily-todo-item{position:relative!important;min-height:0!important;border:0!important;border-radius:0!important;background:transparent!important;padding:2px 0 2px 18px!important}
    #masterItineraryDialog[data-ww-view="daily"] .ww-daily-todo-item::before{content:"•";position:absolute;left:2px;top:2px;font-weight:900}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical hotfix — calendar daily date header polish 30 Sep 2026 ===
   Scope: ONLY calendar -> selected-day read-only schedule. */
(()=>{
  const previousDaily=wwOpenDailySchedule;
  const dayNames=['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
  const monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dailyDateLabel=iso=>{
    const m=String(iso||'').match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if(!m)return String(iso||'');
    const d=new Date(Date.UTC(Number(m[1]),Number(m[2])-1,Number(m[3])));
    return `${dayNames[d.getUTCDay()]} ${Number(m[3])} ${monthNames[Number(m[2])-1]} ${m[1]}`;
  };
  wwOpenDailySchedule=function(iso){
    const out=previousDaily(iso);
    const d=document.getElementById('masterItineraryDialog');
    if(!d)return out;
    const eyebrow=d.querySelector('.master-itinerary-head small');
    const title=d.querySelector('.master-itinerary-head h2');
    if(eyebrow){eyebrow.textContent='';eyebrow.hidden=true;}
    if(title)title.textContent=dailyDateLabel(iso);
    return out;
  };
  const st=document.createElement('style');
  st.id='ww-daily-date-header-polish-300926';
  st.textContent=`
    #masterItineraryDialog[data-ww-view="daily"] .master-itinerary-head small{display:none!important}
    #masterItineraryDialog[data-ww-view="daily"] .master-itinerary-head h2{white-space:nowrap!important;font-size:clamp(24px,7vw,34px)!important;line-height:1.05!important;letter-spacing:-.02em!important}
  `;
  document.head.appendChild(st);
})();

/* Passport AI Analysis launcher — surgical add-on */
(()=>{
  if(window.__wozzaPassportAiAnalysis)return;window.__wozzaPassportAiAnalysis=true;
  const GEMINI_URL='https://gemini.google.com/app';
  const uniq=a=>[...new Set(a.filter(Boolean))];
  function textOf(sel){return document.querySelector(sel)?.textContent?.replace(/\s+/g,' ').trim()||''}
  function buildPrompt(){
    const visited=typeof countryRows==='function'?countryRows('visited'):[];
    const bucket=typeof countryRows==='function'?countryRows('bucket'):[];
    const going=typeof countryRows==='function'?countryRows('going'):[];
    const completed=(state.trips||[]).filter(t=>typeof tripIsOnHorizon==='function'?!tripIsOnHorizon(t):true);
    const ratings=completed.map(t=>Number(t.rating)||0).filter(Boolean);
    const avg=ratings.length?(ratings.reduce((a,b)=>a+b,0)/ratings.length).toFixed(1):'Not enough data';
    const vibes={}; completed.forEach(t=>uniq(t.vibes||[]).forEach(v=>vibes[v]=(vibes[v]||0)+1));
    const vibeSummary=Object.entries(vibes).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([v,n])=>`${v}: ${n}`).join(', ')||'Not enough data';
    const companions={}; completed.forEach(t=>uniq(t.companions||[]).forEach(n=>companions[n]=(companions[n]||0)+1));
    const companionSummary=Object.entries(companions).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([n,c])=>`${n}: ${c} trip${c===1?'':'s'}`).join(', ')||'Mostly/entirely solo or not recorded';
    const modes={}; completed.flatMap(t=>typeof tripTravelModes==='function'?tripTravelModes(t):[]).forEach(m=>{m=String(m||'').trim();if(m)modes[m]=(modes[m]||0)+1});
    const modeSummary=Object.entries(modes).sort((a,b)=>b[1]-a[1]).map(([m,n])=>`${m}: ${n}`).join(', ')||'Not enough data';
    // Use the same source and normalisation rules as the Top 10 Activities chart.
    const activityTypes={};
    const cleanActivityType=raw=>{const v=String(raw||'').trim();if(!v)return 'Other';const map={'food':'Food','food/drinks':'Food / Drinks','food & drinks':'Food / Drinks','drinks':'Drinks','explore':'Explore','travel':'Travel','accommodation':'Accommodation','other':'Other','see & do':'Other','airport':'Airport','boat trip':'Boat Trip','spa':'Spa','cycle':'Cycle','cycling':'Cycle','tour':'Tour','theatre':'Theatre','cafe':'Cafe','café':'Cafe','library':'Library','museum':'Museum','gallery':'Gallery','shopping':'Shopping'};return map[v.toLowerCase()]||v;};
    (state.trips||[]).forEach(t=>(t.destinations||[]).forEach(stop=>(stop.itinerary||[]).forEach(item=>{const type=cleanActivityType(item?.category);activityTypes[type]=(activityTypes[type]||0)+1})));
    const activityTypeSummary=Object.entries(activityTypes).filter(([type])=>!['taxi','accommodation','other','travel'].includes(String(type).toLowerCase())).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10).map(([type,n])=>`${type}: ${n}`).join(', ')||'Not enough data';
    const topCountries=visited.map(c=>[c,typeof countryTrips==='function'?Math.max(1,countryTrips(c).length):1]).sort((a,b)=>b[1]-a[1]).slice(0,10).map(([c,n])=>`${c}: ${n} trip${n===1?'':'s'}`).join(', ');
    const topRated=completed.filter(t=>Number(t.rating)>0).sort((a,b)=>Number(b.rating)-Number(a.rating)).slice(0,8).map(t=>`${t.name||'Untitled trip'}: ${Number(t.rating)}/5`).join(', ')||'Not enough data';
    const score=textOf('#travelHealthCard .travel-health-score')||textOf('#travelHealthCard');
    return `Act as my personal travel analyst. Analyse the WozzaWorld travel statistics below and give me a concise, friendly, useful report.\n\nPlease include:\n1. A short summary of my travel style.\n2. Interesting patterns in where and how I travel, including meaningful patterns in my activity types where the data supports them.\n3. My strongest travel habits.\n4. Gaps or opportunities in my travel experience.\n5. 5 personalised destination or trip-style recommendations, explaining why each fits my existing travel history.\n6. A few achievable ideas for broadening my travel experiences.\n\nBase the analysis only on the data supplied. Do not invent trips, preferences or personal details. Treat upcoming and bucket-list destinations as plans/interests, not places I have already visited. Treat activity-type statistics as recorded activity data only. Do not assume they represent every activity undertaken across all past trips.\n\nWOZZAWORLD STATS\nTravel score: ${score||'Not available'}\nCountries visited: ${visited.length} of 193 (${(visited.length/193*100).toFixed(1)}%)\nVisited countries: ${visited.join(', ')||'None recorded'}\nCompleted trips: ${completed.length}\nUpcoming destinations: ${going.join(', ')||'None recorded'}\nBucket list: ${bucket.join(', ')||'None recorded'}\nMost visited countries: ${topCountries||'Not enough data'}\nAverage trip rating: ${avg}${ratings.length?' / 5':''}\nHighest-rated trips: ${topRated}\nTravel companions: ${companionSummary}\nTravel modes: ${modeSummary}\nActivity types: ${activityTypeSummary}\nTrip styles/vibes: ${vibeSummary}`;
  }
  function toast(msg){
    let t=document.getElementById('wozzaAiToast');if(!t){t=document.createElement('div');t.id='wozzaAiToast';t.className='wozza-ai-toast';document.body.appendChild(t)}
    t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),2800);
  }
  function closeModal(){document.getElementById('wozzaAiModal')?.remove()}
  function openModal(){
    closeModal();const modal=document.createElement('div');modal.id='wozzaAiModal';modal.className='wozza-ai-modal';
    modal.innerHTML=`<div class="wozza-ai-dialog" role="dialog" aria-modal="true" aria-labelledby="wozzaAiTitle"><div class="wozza-ai-sparkle">✨</div><h3 id="wozzaAiTitle">Get AI Analysis</h3><p>WozzaWorld will prepare a prompt containing your travel statistics and copy it to your clipboard, then open Google Gemini.</p><p><strong>Your travel stats are not sent to Google by WozzaWorld.</strong> They are shared with Google only if you paste and send the prompt in Gemini. Google's privacy terms will then apply.</p><p class="wozza-ai-continue">Click ‘Abracadabra’ to continue.</p><div class="wozza-ai-actions"><button type="button" class="wozza-ai-cancel">Cancel</button><button type="button" class="wozza-ai-go"><span>Abracadabra</span><img src="activity-see-do.png" alt="" aria-hidden="true"></button></div></div>`;
    document.body.appendChild(modal);modal.querySelector('.wozza-ai-cancel').onclick=closeModal;modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
    modal.querySelector('.wozza-ai-go').onclick=()=>{
      const prompt=buildPrompt();
      try{navigator.clipboard.writeText(prompt).then(()=>toast('AI analysis prompt copied — paste it into Gemini ✨')).catch(()=>{window.prompt('Copy this prompt, then paste it into Gemini:',prompt)})}catch(e){window.prompt('Copy this prompt, then paste it into Gemini:',prompt)}
      window.open(GEMINI_URL,'_blank','noopener,noreferrer');closeModal();
    };
  }
  function setup(){
    const shell=document.getElementById('passportInsights');if(!shell)return false;
    let wrap=document.getElementById('passportAiAnalysis');
    if(!wrap){
      wrap=document.createElement('div');
      wrap.id='passportAiAnalysis';
      wrap.className='passport-ai-analysis';
      wrap.innerHTML='<button type="button" class="passport-ai-btn"><span>AI ANALYSIS</span><img src="activity-see-do.png" alt="" aria-hidden="true"></button>';
      wrap.querySelector('button').onclick=openModal;
    }else{
      const label=wrap.querySelector('.passport-ai-btn span');if(label)label.textContent='AI ANALYSIS';
      const btn=wrap.querySelector('.passport-ai-btn');if(btn)btn.onclick=openModal;
    }
    /* The launcher belongs to the Travel Insights shell itself, after the tab body.
       Re-parent it every time setup runs so older DOM placement (before Milestones)
       cannot win after a re-render. Because it sits outside the individual panels,
       it remains visible on Score, Stats and Charts. */
    if(wrap.parentElement!==shell||wrap!==shell.lastElementChild)shell.appendChild(wrap);
    return true;
  }
  const css=document.createElement('style');css.id='wozza-passport-ai-style';css.textContent=`
    .passport-ai-analysis{width:100%;margin:18px 0 0;display:flex;justify-content:center;box-sizing:border-box}
    .passport-ai-btn{position:relative;overflow:hidden;width:100%;box-sizing:border-box;border:0;border-radius:999px;background:#f5c400;color:#102a34;font:800 18px/1.1 inherit;padding:17px 24px;box-shadow:0 6px 16px rgba(0,0,0,.10);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap}
    .passport-ai-btn:after{content:"";position:absolute;inset:-70% -45%;background:linear-gradient(110deg,transparent 42%,rgba(255,255,255,0) 47%,rgba(255,255,255,.7) 50%,rgba(255,255,255,0) 54%,transparent 60%);transform:translateX(-65%) rotate(7deg);animation:milestoneGlimmer 8.5s ease-in-out infinite;pointer-events:none}
    .passport-ai-btn span,.passport-ai-btn img{position:relative;z-index:1}
    .passport-ai-btn img,.wozza-ai-go img{width:24px;height:18px;object-fit:contain;display:block;flex:0 0 auto}
    .passport-ai-btn:active{transform:translateY(1px)}
    .wozza-ai-modal{position:fixed;inset:0;z-index:10050;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(0,66,77,.54);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
    .wozza-ai-dialog{position:relative;width:min(92vw,520px);background:#fff0c6;color:#102f39;border-radius:28px;padding:30px 24px 22px;box-shadow:0 20px 55px rgba(0,0,0,.25);text-align:center}
    .wozza-ai-continue{font-weight:800!important;margin-top:14px!important}
    .wozza-ai-sparkle{font-size:34px;margin-bottom:5px}.wozza-ai-dialog h3{margin:0 30px 15px;font-size:27px;line-height:1.05}.wozza-ai-dialog p{margin:10px 0;font-size:15px;line-height:1.42}.wozza-ai-actions{display:flex;gap:10px;margin-top:22px}.wozza-ai-actions button{flex:1;border:0;border-radius:999px;padding:14px 12px;font:800 16px/1 inherit;cursor:pointer}.wozza-ai-cancel{background:#f55849;color:#fff}.wozza-ai-go{background:#f5c400;color:#102a34;display:flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap}
    .wozza-ai-toast{position:fixed;left:50%;bottom:28px;z-index:10100;transform:translate(-50%,20px);opacity:0;pointer-events:none;background:#087f8d;color:#fff;border-radius:999px;padding:12px 18px;font:700 14px/1.25 inherit;box-shadow:0 8px 25px rgba(0,0,0,.2);transition:.2s ease;text-align:center;max-width:88vw}.wozza-ai-toast.show{opacity:1;transform:translate(-50%,0)}
    #passportInsights>#passportAiAnalysis{padding:0 2px 2px!important}
  `;document.head.appendChild(css);
  if(!setup()){const mo=new MutationObserver(()=>{if(setup())mo.disconnect()});mo.observe(document.documentElement,{childList:true,subtree:true})}
})();

/* === WozzaWorld surgical hotfix — calendar daily header state isolation 30 Sep 2026 ===
   ONLY calendar -> single-day read-only view:
   - companions render on first open
   - no download/export button
   - compact date cannot sit beneath itinerary actions
   Full itinerary keeps its download button. */
(()=>{
  const previousDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=previousDaily(iso);
    const d=document.getElementById('masterItineraryDialog');
    const head=d?.querySelector('.master-itinerary-head');
    if(!d||!head)return out;
    d.dataset.wwView='daily';

    const meta=wwItineraryTripMeta();
    let companions=head.querySelector('.master-itinerary-companions');
    if(meta.companionLine){
      if(!companions){
        companions=document.createElement('span');
        companions.className='master-itinerary-companions';
        head.querySelector('div')?.appendChild(companions);
      }
      companions.innerHTML=`${peopleIcon()}<span>${esc(meta.companionLine)}</span>`;
      companions.hidden=false;
    }else if(companions){
      companions.hidden=true;
    }

    const capture=head.querySelector('.master-itinerary-capture');
    if(capture)capture.hidden=true;
    return out;
  };

  /* Full itinerary explicitly restores its own export control after a daily view. */
  const restoreFullHeader=()=>{
    const d=document.getElementById('masterItineraryDialog');
    if(!d||d.dataset.wwView==='daily')return;
    const capture=d.querySelector('.master-itinerary-capture');
    if(capture)capture.hidden=false;
  };
  const previousTripOpen=wwOpenTripItinerary;
  wwOpenTripItinerary=function(){
    const out=previousTripOpen.apply(this,arguments);
    requestAnimationFrame(restoreFullHeader);
    return out;
  };
  const previousMasterOpen=wwOpenMasterItinerary;
  wwOpenMasterItinerary=function(){
    const out=previousMasterOpen.apply(this,arguments);
    requestAnimationFrame(restoreFullHeader);
    return out;
  };

  const st=document.createElement('style');
  st.id='ww-daily-header-state-fix-300926';
  st.textContent=`
    #masterItineraryDialog[data-ww-view="daily"] .master-itinerary-capture{display:none!important}
    #masterItineraryDialog[data-ww-view="daily"] .master-itinerary-head{padding-right:72px!important}
    #masterItineraryDialog[data-ww-view="daily"] .master-itinerary-head h2{max-width:100%!important}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical hotfix — expanded stop country flag + return position === */
(()=>{
  if(window.__wozzaExpandedStopCountryFlag)return;
  window.__wozzaExpandedStopCountryFlag=true;

  const st=document.createElement('style');
  st.id='ww-expanded-stop-country-flag-style';
  st.textContent=`
    /* Expanded stop: destination text -> flag -> minimise -> delete. */
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-card-head{display:flex!important;align-items:center!important;}
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-number{order:0!important;}
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary{order:1!important;}
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-collapsed-meta{order:2!important;}
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary-flag-slot{
      order:3!important;display:grid!important;place-items:center!important;
      flex:0 0 32px!important;width:32px!important;height:32px!important;min-width:32px!important;
      margin-left:auto!important;margin-right:7px!important;border-radius:50%!important;overflow:hidden!important;
    }
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary-flag{
      width:32px!important;height:32px!important;min-width:32px!important;max-width:32px!important;
      border-radius:50%!important;object-fit:cover!important;
    }
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-actions{order:4!important;margin-left:0!important;}
  `;
  document.head.appendChild(st);

  /* The existing stop-flag handler already opens the correct country card.
     Remember the exact trip-dialog position so Country Card close returns to
     the same expanded trip/scroll position rather than jumping to the top. */
  document.addEventListener('click',e=>{
    const slot=e.target.closest?.('#tripDestinationStops .trip-stop-summary-flag-slot');
    if(!slot)return;
    const trip=document.querySelector('#tripDialog[open]');
    if(trip)window.__wozzaTripCountryReturnScroll=trip.scrollTop;
  },true);
  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const slot=e.target.closest?.('#tripDestinationStops .trip-stop-summary-flag-slot');
    if(!slot)return;
    const trip=document.querySelector('#tripDialog[open]');
    if(trip)window.__wozzaTripCountryReturnScroll=trip.scrollTop;
  },true);

  const previousCloseSheet=closeSheet;
  closeSheet=async function(){
    const shouldRestore=!!window.__wozzaReturnToTripAfterCountry;
    const savedScroll=window.__wozzaTripCountryReturnScroll;
    const out=await previousCloseSheet();
    if(shouldRestore&&Number.isFinite(savedScroll)){
      const trip=document.getElementById('tripDialog');
      requestAnimationFrame(()=>requestAnimationFrame(()=>{if(trip?.open)trip.scrollTop=savedScroll;}));
    }
    window.__wozzaTripCountryReturnScroll=null;
    return out;
  };
})();


/* === WozzaWorld surgical polish — flag spacing + Passport AI mustard === */
(()=>{
  if(window.__wozzaFlagAiCosmetic300926)return;
  window.__wozzaFlagAiCosmetic300926=true;
  const st=document.createElement('style');
  st.id='ww-flag-ai-cosmetic-300926';
  st.textContent=`
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary-flag-slot{
      margin-right:4px!important;
    }
    #passportAiAnalysis .passport-ai-btn{
      background:#f4c400!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld surgical polish — final expanded-stop flag alignment === */
(()=>{
  if(window.__wozzaStopFlagFinalAlign300926)return;
  window.__wozzaStopFlagFinalAlign300926=true;
  const st=document.createElement('style');
  st.id='ww-stop-flag-final-align-300926';
  st.textContent=`
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary-flag-slot{
      transform:translateX(5px)!important;
    }
    #tripDestinationStops .trip-destination-stop:not(.collapsed) .trip-stop-summary-flag{
      width:30.7296px!important;
      height:30.7296px!important;
      min-width:30.7296px!important;
      max-width:30.7296px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical hotfix — stop recycle / restore 30 Sep 2026 === */
(()=>{
  if(window.__wwStopRecycleRestore300926)return;
  window.__wwStopRecycleRestore300926=true;
  state.stopRecycleBin??=[];
  const persist=()=>localStorage.setItem('wozzaworld-state',JSON.stringify(state));
  const activityTodoIds=stop=>new Set((stop?.itinerary||[]).flatMap(a=>[...(a?.todoIds||[]),...(a?.todoId?[a.todoId]:[])]).map(String));

  /* Rebind the stop × after every stop row is created. This deliberately touches
     only stop deletion; collapse, itinerary, trip and activity behaviour stay intact. */
  const priorAddDestinationStop=addDestinationStop;
  addDestinationStop=function(data={}){
    const row=priorAddDestinationStop.apply(this,arguments);
    const remove=row?.querySelector('.remove-destination-stop');
    if(remove){
      remove.onclick=e=>{
        e?.preventDefault?.();e?.stopPropagation?.();
        const rows=$$('#tripDestinationStops .trip-destination-stop');
        const stopIndex=Math.max(0,rows.indexOf(row));
        const trip=state.trips.find(t=>String(t.id)===String(editingTripId));
        const current=collectDestinationStops?.().find(s=>String(s.id||'')===String(row.dataset.stopId||'')) || collectDestinationStops?.()[stopIndex] || null;
        const stop=current?structuredClone(current):null;
        const label=stop?.name||stop?.country||'this stop';
        const commit=()=>{
          if(stop){
            const ids=activityTodoIds(stop);
            const todos=(trip?.todos||collectTripTodos?.()||[]).filter(t=>ids.has(String(t.id))).map(t=>structuredClone(t));
            state.stopRecycleBin.unshift({stop,tripId:editingTripId||trip?.id||'',tripName:trip?.name||$('#tripName')?.value||'',stopIndex,todos,removedAt:Date.now()});
            if(trip){
              trip.destinations=(trip.destinations||[]).filter((s,i)=>String(s.id||'')!==String(stop.id||'')&&i!==stopIndex);
              if(ids.size)trip.todos=(trip.todos||[]).filter(t=>!ids.has(String(t.id)));
            }
            ids.forEach(id=>activityTodoById?.(id)?.remove?.());
          }
          row.remove();updateStopLabels();updateTripTodoSummary?.();persist();
          toast?.(`${label} moved to recycle bin`);
        };
        if(typeof showWozzaConfirm==='function')showWozzaConfirm('Send stop to recycle bin?',`Send “${label}” to the recycle bin?`,commit,'Send to recycle bin');else commit();
      };
    }
    return row;
  };

  const priorRenderRecycle=renderRecycleBin;
  renderRecycleBin=function(){
    priorRenderRecycle.apply(this,arguments);
    const el=$('#recycleList');if(!el||!state.stopRecycleBin?.length)return;
    const undo=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7H5v-4M5.5 7.5A8 8 0 1 1 4 14"/></svg>`;
    const bin=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/></svg>`;
    const rows=state.stopRecycleBin.map((r,i)=>`<div class="recycle-row ww-recycled-stop" data-recycle-key="s:${i}"><button type="button" class="recycle-select-dot" aria-label="Select ${esc(r.stop?.name||r.stop?.country||'stop')}" tabindex="-1">✓</button>${r.stop?.country?flagMarkup(r.stop.country):'<span class="recycle-trip-icon">📍</span>'}<span class="recycle-copy"><strong>${esc(r.stop?.name||r.stop?.country||'Stop')}</strong><small>Stop${r.tripName?' · '+esc(r.tripName):''}</small></span><span class="recycle-actions"><button type="button" class="restore-btn" data-restore-stop="${i}" aria-label="Restore ${esc(r.stop?.name||'stop')}">${undo}</button><button type="button" class="delete-btn" data-delete-stop="${i}" aria-label="Delete ${esc(r.stop?.name||'stop')} permanently">${bin}</button></span></div>`).join('');
    const empty=el.querySelector('.recycle-empty-state');
    if(empty)el.innerHTML=`<div class="recycle-select-head"><span>Choose items to restore or permanently delete.</span></div>${rows}`;
    else el.insertAdjacentHTML('beforeend',rows);
    el.querySelectorAll('[data-restore-stop]').forEach(b=>b.onclick=e=>{
      e?.stopPropagation?.();const i=Number(b.dataset.restoreStop),r=state.stopRecycleBin[i];if(!r)return;
      const trip=state.trips.find(t=>String(t.id)===String(r.tripId));if(!trip){toast?.('Original trip is not available');return}
      trip.destinations??=[];const at=Math.max(0,Math.min(Number(r.stopIndex)||0,trip.destinations.length));
      if(!trip.destinations.some(s=>String(s.id||'')===String(r.stop?.id||'')))trip.destinations.splice(at,0,structuredClone(r.stop));
      trip.todos??=[];(r.todos||[]).forEach(t=>{if(!trip.todos.some(x=>String(x.id)===String(t.id)))trip.todos.push(structuredClone(t))});
      state.stopRecycleBin.splice(i,1);persist();renderRecycleBin();render();toast?.(`${r.stop?.name||r.stop?.country||'Stop'} restored`);
    });
    el.querySelectorAll('[data-delete-stop]').forEach(b=>b.onclick=e=>{
      e?.stopPropagation?.();const i=Number(b.dataset.deleteStop),r=state.stopRecycleBin[i];if(!r)return;
      const commit=()=>{state.stopRecycleBin.splice(i,1);persist();renderRecycleBin();toast?.('Stop permanently deleted')};
      if(typeof showWozzaConfirm==='function')showWozzaConfirm('Delete stop permanently?',`Permanently delete “${r.stop?.name||r.stop?.country||'this stop'}”?`,commit,'Delete permanently');else commit();
    });
  };
})();

/* === WozzaWorld hotfix — activity booking status 01 Oct 2026 === */
(()=>{
  const OPTIONS=[
    ['required','Booking Required'],
    ['booked','Booked'],
    ['not-required','Booking Not Required']
  ];
  function ensureBookingStatus(d){
    if(!d||d.querySelector('.ww-booking-status-field'))return;
    const ref=d.querySelector('#itinBookingRef');
    const anchor=ref?.closest('label');if(!anchor)return;
    const box=document.createElement('fieldset');box.className='ww-booking-status-field';
    box.innerHTML=`<legend>Booking status</legend><div class="ww-booking-status-options">${OPTIONS.map(([v,l])=>`<button type="button" class="ww-booking-status-option" data-booking-status="${v}" aria-pressed="false"><span class="ww-booking-status-tick">✓</span><span>${l}</span></button>`).join('')}</div>`;
    anchor.parentNode.insertBefore(box,anchor);
    box.querySelectorAll('[data-booking-status]').forEach(b=>b.onclick=()=>{
      d.dataset.bookingStatus=b.dataset.bookingStatus;
      paintBookingStatus(d);
    });
  }
  function paintBookingStatus(d){
    const value=d?.dataset.bookingStatus||'';
    d?.querySelectorAll('[data-booking-status]').forEach(b=>{
      const on=b.dataset.bookingStatus===value;b.classList.toggle('selected',on);b.setAttribute('aria-pressed',String(on));
    });
  }
  const priorDialog=itineraryDialog;
  itineraryDialog=function(){const d=priorDialog.apply(this,arguments);ensureBookingStatus(d);paintBookingStatus(d);return d};

  const priorOpen=openStopItinerary;
  openStopItinerary=function(row,id=''){
    const out=priorOpen.apply(this,arguments),d=itineraryDialog();
    const x=id?itineraryItemsForRow(row).find(i=>String(i.id)===String(id)):null;
    d.dataset.bookingStatus=x?.bookingStatus||'';paintBookingStatus(d);return out;
  };

  const priorSave=saveStopItinerary;
  saveStopItinerary=function(){
    const d=document.getElementById('stopItineraryDialog'),row=activeItineraryRow;
    if(!d||!row)return priorSave.apply(this,arguments);
    const existingId=activeItineraryId||'',before=new Set(itineraryItemsForRow(row).map(x=>String(x.id))),wanted=d.dataset.bookingStatus||'';
    const out=priorSave.apply(this,arguments),items=itineraryItemsForRow(row);
    const x=existingId?items.find(i=>String(i.id)===String(existingId)):items.find(i=>!before.has(String(i.id)));
    if(x){x.bookingStatus=wanted;row.dataset.itinerary=JSON.stringify(items);renderStopItinerarySummary(row);wwPersistItineraryWork?.()}
    return out;
  };

  const priorQuick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    const out=priorQuick.apply(this,arguments),x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));
    const body=document.querySelector('#itineraryQuickInfoBody'),type=body?.querySelector('.itinerary-quick-info-type');
    body?.querySelector('.ww-booking-status-preview')?.remove();
    if(x?.bookingStatus&&type){
      const label=OPTIONS.find(o=>o[0]===x.bookingStatus)?.[1];
      if(label){
        const badge=document.createElement('div');
        badge.className=`ww-booking-status-preview is-${x.bookingStatus}`;
        badge.innerHTML=`<span>✓</span><b>${esc(label)}</b>`;
        const parent=type.parentElement;
        if(parent){
          const wrap=document.createElement('div');
          wrap.className='ww-quick-info-pill-row';
          type.insertAdjacentElement('beforebegin',wrap);
          wrap.append(type,badge);
          parent.classList.add('ww-has-booking-status');
        }
      }
    }
    return out;
  };

  const st=document.createElement('style');st.id='ww-booking-status-style';st.textContent=`
    .ww-booking-status-field{border:0!important;padding:0!important;margin:14px 0!important;min-width:0!important}
    .ww-booking-status-field legend{padding:0!important;margin:0 0 8px!important;font:800 13px/1.2 Inter,sans-serif!important;color:#172f3a!important}
    .ww-booking-status-options{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:7px!important}
    .ww-booking-status-option{min-width:0!important;min-height:48px!important;padding:7px 6px!important;border:1px solid rgba(20,55,70,.12)!important;border-radius:15px!important;background:#fff!important;color:#526168!important;font:800 10px/1.15 Inter,sans-serif!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:5px!important;text-align:center!important}
    .ww-booking-status-tick{width:18px!important;height:18px!important;flex:0 0 18px!important;border:2px solid #7c8c92!important;border-radius:50%!important;color:transparent!important;display:grid!important;place-items:center!important;font-size:12px!important;line-height:1!important}
    .ww-booking-status-option.selected{background:#e8f7f8!important;border-color:#078fa3!important;color:#17323c!important}
    .ww-booking-status-option.selected .ww-booking-status-tick{background:#078fa3!important;border-color:#078fa3!important;color:#fff!important}
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type{display:inline-flex!important;vertical-align:middle!important;margin-right:8px!important}
    .ww-booking-status-preview{display:inline-flex!important;align-items:center!important;gap:6px!important;min-height:40px!important;padding:0 14px!important;border-radius:999px!important;background:#fff!important;color:#17323c!important;font:900 12px/1 Inter,sans-serif!important;vertical-align:middle!important;margin:0 0 14px!important}
    .ww-booking-status-preview span{width:20px!important;height:20px!important;border-radius:50%!important;background:#078fa3!important;color:#fff!important;display:grid!important;place-items:center!important;font-size:13px!important}
    .ww-booking-status-preview.is-required span{background:#d89016!important}.ww-booking-status-preview.is-not-required span{background:#78878d!important}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — booking badge height + itinerary scrollbar polish 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-booking-badge-scrollbar-polish-011026';
  st.textContent=`
    /* Match the booking-status badge to the existing Activity Type pill height. */
    #itineraryQuickInfoBody .ww-booking-status-preview{
      min-height:0!important;
      height:auto!important;
      padding:8px 14px!important;
      line-height:normal!important;
      box-sizing:border-box!important;
      align-self:auto!important;
    }
    #itineraryQuickInfoBody .ww-booking-status-preview span{
      flex:0 0 20px!important;
    }
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type{
      align-self:auto!important;
      box-sizing:border-box!important;
    }

    /* Keep itinerary scrolling fully functional, but hide scrollbar chrome. */
    #masterItineraryDialog,
    #masterItineraryDialog .master-itinerary-shell,
    #masterItineraryContent{
      scrollbar-width:none!important;
      -ms-overflow-style:none!important;
    }
    #masterItineraryDialog::-webkit-scrollbar,
    #masterItineraryDialog .master-itinerary-shell::-webkit-scrollbar,
    #masterItineraryContent::-webkit-scrollbar{
      width:0!important;
      height:0!important;
      display:none!important;
      background:transparent!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — exact quick-info pill height lock 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-quick-info-pill-exact-height-011026';
  st.textContent=`
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type,
    #itineraryQuickInfoBody .ww-booking-status-preview{
      height:40px!important;
      min-height:40px!important;
      max-height:40px!important;
      box-sizing:border-box!important;
      padding-top:0!important;
      padding-bottom:0!important;
      align-items:center!important;
    }
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type{
      padding-left:12px!important;
      padding-right:12px!important;
    }
    #itineraryQuickInfoBody .ww-booking-status-preview{
      padding-left:14px!important;
      padding-right:14px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — quick-info booking pill true alignment 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-quick-info-pill-true-alignment-011026';
  st.textContent=`
    /* These are inline siblings. Align their outer boxes from the same top edge
       instead of baseline/margin alignment, which was lifting the white badge. */
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type,
    #itineraryQuickInfoBody.ww-has-booking-status .ww-booking-status-preview{
      vertical-align:top!important;
      margin-top:0!important;
      margin-bottom:10px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — keep booking status beside activity type 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-quick-info-booking-same-line-011026';
  st.textContent=`
    /* Keep the activity type and all booking-status variants on one row.
       The long "Booking Not Required" label only needs a few pixels reclaimed. */
    #itineraryQuickInfoBody.ww-has-booking-status .itinerary-quick-info-type{
      margin-right:8px!important;
      white-space:nowrap!important;
    }
    #itineraryQuickInfoBody.ww-has-booking-status .ww-booking-status-preview{
      white-space:nowrap!important;
      padding-left:10px!important;
      padding-right:10px!important;
      gap:5px!important;
      margin-right:0!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld hotfix — responsive activity + booking pill row 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-quick-info-responsive-pill-row-011026';
  st.textContent=`
    #itineraryQuickInfoBody .ww-quick-info-pill-row{
      display:flex!important;
      align-items:flex-start!important;
      gap:8px!important;
      width:100%!important;
      min-width:0!important;
      margin:0 0 10px!important;
    }
    #itineraryQuickInfoBody .ww-quick-info-pill-row .itinerary-quick-info-type{
      flex:0 0 auto!important;
      margin:0!important;
      white-space:nowrap!important;
    }
    #itineraryQuickInfoBody .ww-quick-info-pill-row .ww-booking-status-preview{
      flex:0 1 auto!important;
      min-width:0!important;
      max-width:calc(100% - 8px)!important;
      margin:0!important;
      white-space:normal!important;
      line-height:1.05!important;
      justify-content:flex-start!important;
      overflow:hidden!important;
    }
    #itineraryQuickInfoBody .ww-quick-info-pill-row .ww-booking-status-preview b{
      min-width:0!important;
      font:inherit!important;
      line-height:1.05!important;
      white-space:normal!important;
      overflow-wrap:normal!important;
      word-break:normal!important;
    }
    #itineraryQuickInfoBody .ww-quick-info-pill-row .ww-booking-status-preview span{
      flex:0 0 20px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — Activity Types Travel Insight + AI context 01 Oct 2026 === */
(()=>{
  if(window.__wozzaActivityTypeInsights011026)return;window.__wozzaActivityTypeInsights011026=true;

  const cleanType=raw=>{
    const v=String(raw||'').trim();
    if(!v)return 'Other';
    const map={
      'food':'Food','food/drinks':'Food / Drinks','food & drinks':'Food / Drinks','drinks':'Drinks',
      'explore':'Explore','travel':'Travel','accommodation':'Accommodation','other':'Other','see & do':'Other',
      'airport':'Airport','boat trip':'Boat Trip','spa':'Spa','cycle':'Cycle','cycling':'Cycle','tour':'Tour',
      'theatre':'Theatre','cafe':'Cafe','café':'Cafe','library':'Library','museum':'Museum','gallery':'Gallery','shopping':'Shopping'
    };
    return map[v.toLowerCase()]||v;
  };
  function activityTypeRows(){
    const counts={};
    (state.trips||[]).forEach(trip=>(trip.destinations||[]).forEach(stop=>(stop.itinerary||[]).forEach(item=>{
      const type=cleanType(item?.category);counts[type]=(counts[type]||0)+1;
    })));
    return Object.entries(counts).filter(([type])=>!['taxi','accommodation','other','travel'].includes(String(type).toLowerCase())).sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,10);
  }
  function renderActivityTypes(){
    const track=document.getElementById('passportStatsTrack');if(!track)return;
    let slide=document.getElementById('activityTypesStatsSlide');
    if(!slide){
      slide=document.createElement('article');slide.id='activityTypesStatsSlide';slide.className='passport-stats-slide activity-types-slide';
      slide.innerHTML='<h4>TOP 10 ACTIVITIES</h4><div id="activityTypesChart" class="activity-types-chart"></div>';
      const stops=document.getElementById('tripsPerYearStatsSlide');
      if(stops?.nextSibling)track.insertBefore(slide,stops.nextSibling);else track.appendChild(slide);
    }
    const host=slide.querySelector('#activityTypesChart'),rows=activityTypeRows();if(!host)return;
    if(!rows.length){host.innerHTML='<p class="muted">Add itinerary activities to build your chart.</p>';return}
    const max=Math.max(...rows.map(x=>x[1]),1);
    host.innerHTML=rows.map(([name,count])=>`<div class="activity-type-bar-row"><span class="activity-type-bar-label">${esc(name)}</span><div class="activity-type-bar-track"><i style="width:${Math.max(5,count/max*100)}%"></i></div><strong>${count}</strong></div>`).join('');
  }
  const oldRender=window.renderPassportCarouselStats;
  if(typeof oldRender==='function')window.renderPassportCarouselStats=function(){const out=oldRender.apply(this,arguments);renderActivityTypes();return out};
  const css=document.createElement('style');css.id='wozza-activity-type-insights-style';css.textContent=`
    .activity-types-slide{padding-bottom:12px!important}
    .activity-types-slide h4{text-transform:uppercase!important}
    .activity-types-chart{width:100%;padding:10px 6px 4px;display:flex;flex-direction:column;gap:9px;box-sizing:border-box}
    .activity-type-bar-row{display:grid;grid-template-columns:minmax(92px,1.25fr) minmax(110px,2.4fr) 28px;gap:9px;align-items:center;min-height:25px;color:#073f52}
    .activity-type-bar-label{font-size:12px;font-weight:850;line-height:1.05;text-align:right;overflow-wrap:anywhere}
    .activity-type-bar-track{height:13px;border-radius:999px;background:rgba(7,132,154,.12);overflow:hidden}
    .activity-type-bar-track i{display:block;height:100%;min-width:5px;border-radius:999px;background:#07849a}
    .activity-type-bar-row strong{font-size:12px;font-weight:950;text-align:left}
    @media(max-width:380px){.activity-type-bar-row{grid-template-columns:minmax(78px,1.15fr) minmax(92px,2.2fr) 24px;gap:7px}.activity-type-bar-label,.activity-type-bar-row strong{font-size:11px}}
  `;document.getElementById(css.id)?.remove();document.head.appendChild(css);
  renderActivityTypes();
  requestAnimationFrame(()=>{renderActivityTypes();if(typeof setPassportStatsSlide==='function'&&document.getElementById('passportStatsTrack'))setPassportStatsSlide(passportStatsSlide||0)});
})();


/* === WozzaWorld hotfix — Top 10 Activities polish 01 Oct 2026 === */
(()=>{
  const st=document.createElement('style');st.id='wozza-top10-activities-polish-011026';st.textContent=`
    #companionStats .companion-stat-row>div>i{background:#07849a!important}
  `;document.getElementById(st.id)?.remove();document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — AI activity context + unified insight bars 01 Oct 2026 === */
(()=>{
  if(window.__wozzaUnifiedInsightBars011026)return;window.__wozzaUnifiedInsightBars011026=true;
  const st=document.createElement('style');st.id='wozza-unified-insight-bars-011026';st.textContent=`
    /* Shared, optically-centred geometry for Activities + Travel Companions. */
    .activity-types-chart,
    #companionStats.companion-stats{
      width:100%!important;
      padding:10px 12px 4px!important;
      box-sizing:border-box!important;
      display:flex!important;
      flex-direction:column!important;
      gap:9px!important;
      margin-top:0!important;
    }
    .activity-type-bar-row,
    #companionStats .companion-stat-row{
      display:grid!important;
      grid-template-columns:minmax(78px,1.05fr) minmax(128px,2.65fr) 42px!important;
      gap:9px!important;
      align-items:center!important;
      min-height:25px!important;
      padding:0!important;
      font-size:12px!important;
      color:#073f52!important;
    }
    .activity-type-bar-label,
    #companionStats .companion-stat-row>span{
      min-width:0!important;
      font-size:12px!important;
      font-weight:850!important;
      line-height:1.05!important;
      color:#073f52!important;
      text-align:right!important;
      overflow:hidden!important;
      text-overflow:ellipsis!important;
      white-space:nowrap!important;
    }
    .activity-type-bar-track,
    #companionStats .companion-stat-row>div{
      height:13px!important;
      border-radius:999px!important;
      background:rgba(7,132,154,.12)!important;
      overflow:hidden!important;
    }
    .activity-type-bar-track i,
    #companionStats .companion-stat-row>div>i{
      display:block!important;
      height:100%!important;
      min-width:5px!important;
      border-radius:999px!important;
      background:#07849a!important;
    }
    .activity-type-bar-row>strong,
    #companionStats .companion-stat-row>strong{
      font-size:12px!important;
      font-weight:950!important;
      line-height:1!important;
      color:#073f52!important;
      text-align:left!important;
      white-space:nowrap!important;
    }
    @media(max-width:380px){
      .activity-types-chart,#companionStats.companion-stats{padding-left:8px!important;padding-right:8px!important}
      .activity-type-bar-row,#companionStats .companion-stat-row{grid-template-columns:minmax(70px,1fr) minmax(104px,2.45fr) 38px!important;gap:7px!important}
      .activity-type-bar-label,#companionStats .companion-stat-row>span,.activity-type-bar-row>strong,#companionStats .companion-stat-row>strong{font-size:11px!important}
    }
  `;
  document.getElementById(st.id)?.remove();document.head.appendChild(st);
})();

/* === WozzaWorld surgical polish — Passport AI button only (01 Oct 2026) === */
(()=>{
  const st=document.createElement('style');st.id='ww-passport-ai-button-polish-011026';st.textContent=`
    #passportAiAnalysis .passport-ai-btn span{font-weight:900!important;text-transform:uppercase!important;letter-spacing:.18em!important;font-size:15px!important}
    #passportAiAnalysis .passport-ai-btn img{width:34px!important;height:28px!important}
  `;document.getElementById(st.id)?.remove();document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — surgical swipe navigation in Activity Information === */
(()=>{
  const d=wwQuickInfoDialog();
  if(!d||d.dataset.wwSwipeNav==='1')return;
  d.dataset.wwSwipeNav='1';
  let sx=0,sy=0,tracking=false,currentRow=null,currentId='';

  const previousQuick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    currentRow=row;currentId=String(id||'');
    return previousQuick.apply(this,arguments);
  };

  const ordered=()=>wwMasterActivities();
  const currentIndex=list=>list.findIndex(x=>x._row===currentRow&&String(x.id)===currentId);
  const move=dir=>{
    const list=ordered(),i=currentIndex(list),next=list[i+dir];
    if(i<0||!next)return;
    wwOpenQuickInfo(next._row,next.id);
  };

  d.addEventListener('touchstart',e=>{
    if(e.touches.length!==1)return;
    const t=e.touches[0];sx=t.clientX;sy=t.clientY;tracking=true;
  },{passive:true});
  d.addEventListener('touchend',e=>{
    if(!tracking||!e.changedTouches.length)return;tracking=false;
    const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;
    if(Math.abs(dx)<60||Math.abs(dx)<Math.abs(dy)*1.35)return;
    /* Finger left = move forward; finger right = move back. */
    move(dx<0?1:-1);
  },{passive:true});
  d.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
})();

/* === WozzaWorld hotfix — surgical swipe navigation in calendar Daily Schedule (01 Oct 2026) === */
(()=>{
  const d=wwMasterItineraryDialog();
  if(!d||d.dataset.wwDailySwipeNav==='1')return;
  d.dataset.wwDailySwipeNav='1';
  let sx=0,sy=0,tracking=false,currentIso='';

  const previousDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    currentIso=String(iso||'');
    return previousDaily.apply(this,arguments);
  };

  const tripDays=()=>{
    const start=String(wozzaCalendarRangeStart||''),end=String(wozzaCalendarRangeEnd||'');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(start)||!/^\d{4}-\d{2}-\d{2}$/.test(end)||start>end)return [];
    const out=[],cursor=new Date(`${start}T12:00:00Z`),last=new Date(`${end}T12:00:00Z`);
    while(cursor<=last&&out.length<370){out.push(cursor.toISOString().slice(0,10));cursor.setUTCDate(cursor.getUTCDate()+1)}
    return out;
  };
  const move=dir=>{
    if(d.dataset.wwView!=='daily'||!currentIso)return;
    const days=tripDays(),i=days.indexOf(currentIso),next=days[i+dir];
    if(i<0||!next)return;
    wwOpenDailySchedule(next);
  };

  d.addEventListener('touchstart',e=>{
    if(d.dataset.wwView!=='daily'||e.touches.length!==1)return;
    const t=e.touches[0];sx=t.clientX;sy=t.clientY;tracking=true;
  },{passive:true});
  d.addEventListener('touchend',e=>{
    if(!tracking||!e.changedTouches.length)return;tracking=false;
    const t=e.changedTouches[0],dx=t.clientX-sx,dy=t.clientY-sy;
    if(Math.abs(dx)<60||Math.abs(dx)<Math.abs(dy)*1.35)return;
    /* Finger left = next trip date; finger right = previous trip date. */
    move(dx<0?1:-1);
  },{passive:true});
  d.addEventListener('touchcancel',()=>{tracking=false},{passive:true});
})();

/* === WozzaWorld surgical hotfix — polished itinerary export + ready confirmation 01 Oct 2026 === */
(()=>{
  const rr=(ctx,x,y,w,h,r,fill,stroke)=>{r=Math.min(r,w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();if(fill)ctx.fill();if(stroke)ctx.stroke()};
  const bookingLabel=v=>v==='booked'?'Booked':v==='required'?'Booking Required':v==='not-required'?'Booking Not Required':'';
  const todosFor=x=>{const ids=[...new Set([...(Array.isArray(x?.todoIds)?x.todoIds:[]),...(x?.todoId?[x.todoId]:[])].map(String))];const seen=new Set();return ids.map(activityTodoById).filter(Boolean).map(r=>({text:r.querySelector('.trip-todo-input')?.value?.trim()||'',done:r.classList.contains('is-done')})).filter(t=>{const k=t.text.toLocaleLowerCase();if(!t.text||t.done||seen.has(k))return false;seen.add(k);return true})};
  const detailsFor=x=>{
    const out=[];const bs=bookingLabel(x.bookingStatus);if(bs)out.push(bs);
    if(x.location)out.push(`Location: ${x.location}`);if(x.contact)out.push(`Contact: ${x.contact}`);
    if(x.cost)out.push(`Cost: ${wwCurrencySymbol?.(x.currency||'GBP')||''}${wwCostNumber?.(x.cost)||x.cost}`.trim());
    if(x.bookingRef)out.push(`Booking ref: ${x.bookingRef}`);
    (wwActivityLinks?.(x)||[]).filter(l=>l.url).forEach(l=>out.push(`${l.name||'Link'}: ${l.url}`));
    if(x.notes)String(x.notes).split(/\n+/).map(s=>s.trim()).filter(Boolean).forEach(s=>out.push(s));
    todosFor(x).forEach(t=>out.push(`To do: ${t.text}`));
    return out;
  };
  const showPreparing=name=>{
    let d=document.getElementById('wwExportReadyDialog');if(!d){d=document.createElement('dialog');d.id='wwExportReadyDialog';d.className='ww-export-ready';d.innerHTML='<div class="ww-export-ready-card"><div class="ww-export-ready-tick" aria-hidden="true"><svg viewBox="0 0 24 24"><g class="ww-prep-arrow"><path d="M12 3v10"></path><path d="M8 10l4 4 4-4"></path></g><path class="ww-prep-tray" d="M5 17v3h14v-3"></path></svg></div><h2>Preparing your file</h2><p></p><button type="button">CLOSE</button></div>';document.body.appendChild(d);d.querySelector('button').onclick=()=>d.close();d.addEventListener('click',e=>{if(e.target===d)d.close()})}d.querySelector('p').textContent=`Your ${name||'trip'} itinerary is being prepared. Please check your downloads.`;if(!d.open)d.showModal();
  };
  if(!document.getElementById('ww-export-ready-style')){const s=document.createElement('style');s.id='ww-export-ready-style';s.textContent=`
    @keyframes wwDownloadPulse{0%{transform:scale(1)}35%{transform:scale(.88) translateY(3px)}68%{transform:scale(1.08) translateY(-2px)}100%{transform:scale(1)}}.master-itinerary-capture.ww-download-pulse{animation:wwDownloadPulse .38s ease!important;pointer-events:none!important}.master-itinerary-capture.ww-download-pressed{transform:scale(.92) translateY(2px)!important;transition:transform .08s ease!important}.master-itinerary-capture.ww-download-pressed svg{transform:translateY(3px)!important}
    .ww-export-ready{border:0!important;padding:0!important;background:transparent!important;max-width:min(88vw,430px)!important;width:100%!important}.ww-export-ready::backdrop{background:rgba(0,76,88,.62)!important;backdrop-filter:blur(8px)!important}.ww-export-ready-card{background:#fff0c7!important;border-radius:30px!important;padding:30px 26px 24px!important;text-align:center!important;color:#17323c!important}.ww-export-ready-tick{width:58px;height:58px;border-radius:50%;display:grid;place-items:center;margin:0 auto 14px;background:#078fa3;color:#fff}.ww-export-ready-tick svg{width:31px;height:31px;fill:none;stroke:#fff;stroke-width:2.7;stroke-linecap:round;stroke-linejoin:round}@keyframes wwPrepArrowDrop{0%{transform:translateY(-5px);opacity:0}18%{opacity:1}68%{transform:translateY(2px);opacity:1}82%{transform:translateY(5px);opacity:0}100%{transform:translateY(-5px);opacity:0}}.ww-export-ready-tick .ww-prep-arrow{transform-box:fill-box;transform-origin:center;animation:wwPrepArrowDrop 1.05s cubic-bezier(.4,0,.2,1) infinite}.ww-export-ready-tick .ww-prep-tray{opacity:1}.ww-export-ready h2{margin:0 0 9px!important;font:900 25px/1.08 Arial,sans-serif!important}.ww-export-ready p{margin:0 0 22px!important;font:600 15px/1.4 Arial,sans-serif!important}.ww-export-ready button{width:100%!important;min-height:54px!important;border:0!important;border-radius:20px!important;background:#078fa3!important;color:#fff!important;font:900 16px/1 Arial,sans-serif!important;letter-spacing:.06em!important}`;document.head.appendChild(s)}
  document.addEventListener('pointerdown',e=>{const b=e.target.closest?.('.master-itinerary-capture');if(b&&!b.dataset.exportBusy)b.classList.add('ww-download-pressed')},{passive:true});
  ['pointerup','pointercancel','pointerleave'].forEach(ev=>document.addEventListener(ev,e=>{e.target.closest?.('.master-itinerary-capture')?.classList.remove('ww-download-pressed')},{passive:true}));

  const countryCodeToEmoji=code=>String(code||'').toUpperCase().replace(/[A-Z]/g,c=>String.fromCodePoint(127397+c.charCodeAt(0)));
  const exportCountries=rows=>[...new Set(rows.map(r=>r.querySelector('.trip-stop-country')?.value?.trim()).filter(Boolean))];
  const loadExportImage=src=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=src});
  wwCaptureFullItinerary=async function(){
    const btn=this instanceof HTMLElement?this:document.querySelector('.master-itinerary-capture');if(btn?.dataset.exportBusy==='1')return;if(btn){btn.dataset.exportBusy='1';btn.classList.remove('ww-download-pulse');void btn.offsetWidth;btn.classList.add('ww-download-pulse')}navigator.vibrate?.(24);
    const meta=wwItineraryTripMeta(),rows=wwTripStopRows(),items=wwMasterActivities(),multi=rows.length>1;if(!items.length){if(btn)delete btn.dataset.exportBusy;return}
    showPreparing(meta.name);
    const countries=exportCountries(rows),flagText=countries.map(c=>countryCodeToEmoji(flags[c]||'')).filter(Boolean).join(' '),logo=await loadExportImage('ww-pdf-footer-logo.png');
    const W=1180,pad=48,contentW=W-pad*2,font='Arial, sans-serif',timeW=125,activityW=385,gap=18,notesW=contentW-timeW-activityW-gap*2;
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),linkRects=[];
    const wrap=(text,maxWidth,fontSpec)=>{ctx.font=fontSpec;const paras=String(text??'').split(/\n/),all=[];paras.forEach((p,pi)=>{const words=p.split(/\s+/).filter(Boolean);let line='';if(!words.length)all.push('');for(const w of words){const t=line?line+' '+w:w;if(ctx.measureText(t).width>maxWidth&&line){all.push(line);line=w}else line=t}if(line)all.push(line);if(pi<paras.length-1)all.push('')});return all.length?all:['']};
    const dated=[...new Set(items.map(x=>x.startDate||'unscheduled'))].sort((a,b)=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b)),dayNo=new Map(dated.map((x,i)=>[x,i+1]));
    const groups=rows.map((row,si)=>{const m=new Map();items.filter(x=>x._stopIndex===si).forEach(x=>{const k=x.startDate||'unscheduled';if(!m.has(k))m.set(k,[]);m.get(k).push(x)});return [...m.entries()].sort(([a],[b])=>a==='unscheduled'?1:b==='unscheduled'?-1:a.localeCompare(b))});
    const measured=groups.map(gs=>gs.map(([date,list])=>[date,list.map(x=>{const a=wrap(`${x.name||'Activity'}`,activityW-28,`700 24px ${font}`),d=detailsFor(x),dl=d.flatMap(v=>wrap(v,notesW-28,`400 18px ${font}`));return {x,a,dl,rh:Math.max(70,28+Math.max(a.length*29,dl.length*23))}})]));
    let H=pad+76+(meta.dateRange?38:0)+20;measured.forEach((gs,si)=>{if(!gs.length)return;if(multi)H+=48;gs.forEach(([,list])=>{H+=68;list.forEach(r=>H+=r.rh+8);H+=20})});H+=pad+205;
    const scale=Math.min(2,8192/Math.max(W,H));canvas.width=Math.round(W*scale);canvas.height=Math.round(H*scale);ctx.scale(scale,scale);
    ctx.fillStyle='#fff0c7';rr(ctx,0,0,W,H,36,true);let y=pad;
    ctx.fillStyle='#17323c';ctx.font=`900 48px ${font}`;const titleLines=wrap(meta.name,contentW-300,`900 48px ${font}`);titleLines.forEach((l,i)=>{ctx.fillText(l,pad,y+44);if(i===titleLines.length-1&&flagText){const tw=ctx.measureText(l).width;ctx.font=`34px ${font}`;ctx.fillText(flagText,pad+tw+16,y+42);ctx.font=`900 48px ${font}`}y+=52});
    if(meta.dateRange){ctx.fillStyle='#078fa3';ctx.font=`900 23px ${font}`;ctx.fillText(meta.dateRange,pad,y+22);y+=38}
    const headerBottom=y;ctx.fillStyle='#17323c';ctx.font=`900 92px ${font}`;ctx.textAlign='right';ctx.fillText('Itinerary',W-pad,pad+78);ctx.textAlign='left';y=headerBottom+12;
    measured.forEach((gs,si)=>{if(!gs.length)return;if(multi){ctx.fillStyle='#078fa3';ctx.font=`900 25px ${font}`;const stopLabel=String(wwStopName(rows[si],si)).toUpperCase(),stopCountry=canonicalCountry(rows[si]?.querySelector('.trip-stop-country')?.value||''),stopFlag=countries.length>1?countryCodeToEmoji(flags[stopCountry]||''):'';ctx.fillText(stopLabel+(stopFlag?'  '+stopFlag:''),pad,y+28);y+=48}
      gs.forEach(([date,list])=>{
        ctx.fillStyle='#fff';rr(ctx,pad,y,contentW,68,22,true);ctx.fillStyle='#078fa3';rr(ctx,pad,y,132,68,22,true);ctx.fillRect(pad+110,y,22,68);ctx.fillStyle='#fff';ctx.font=`900 21px ${font}`;ctx.fillText(date==='unscheduled'?'FLEXIBLE':`DAY ${dayNo.get(date)}`,pad+20,y+42);ctx.fillStyle='#17323c';ctx.font=`800 22px ${font}`;ctx.fillText(date==='unscheduled'?'TO BE SCHEDULED':wwItineraryDayLabel(date),pad+154,y+42);y+=76;
        list.forEach(r=>{const x=r.x;ctx.fillStyle='#ffc94a';rr(ctx,pad,y,contentW,r.rh,20,true);
          const tx=pad+18,ax=pad+timeW+gap,nx=ax+activityW+gap;
          ctx.fillStyle='#17323c';ctx.font=`800 20px ${font}`;ctx.fillText(x.tbc?'TBC':(x.flexible?'Flexible':(x.startTime||'—')),tx,y+34);
          ctx.font=`700 24px ${font}`;r.a.forEach((l,i)=>ctx.fillText(l,ax,y+32+i*29));
          ctx.fillStyle='rgba(23,50,60,.82)';ctx.font=`400 18px ${font}`;if(r.dl.length)r.dl.forEach((l,i)=>{ctx.fillText(l,nx,y+29+i*23);const m=String(l).match(/https?:\/\/[^\s]+/i);if(m){const prefix=String(l).slice(0,m.index),lx=nx+ctx.measureText(prefix).width,lw=ctx.measureText(m[0]).width;linkRects.push({url:m[0],x:lx,y:y+10+i*23,w:lw,h:22})}});else{ctx.fillStyle='rgba(23,50,60,.48)';ctx.fillText('—',nx,y+29)};
          ctx.strokeStyle='rgba(23,50,60,.13)';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad+timeW+8,y+14);ctx.lineTo(pad+timeW+8,y+r.rh-14);ctx.moveTo(nx-9,y+14);ctx.lineTo(nx-9,y+r.rh-14);ctx.stroke();y+=r.rh+8});y+=20;
      });
    });
    if(logo){
      const footerW=360,footerH=120,ratio=Math.min(footerW/logo.naturalWidth,footerH/logo.naturalHeight);
      const dw=logo.naturalWidth*ratio,dh=logo.naturalHeight*ratio,label='G E N E R A T E D  B Y',footerGap=26;
      ctx.save();ctx.fillStyle='#17323c';ctx.font=`900 24px ${font}`;ctx.textAlign='left';ctx.textBaseline='middle';
      const labelW=ctx.measureText(label).width,groupW=labelW+footerGap+dw,groupX=(W-groupW)/2,logoY=H-pad-dh,centreY=logoY+dh/2;
      ctx.fillText(label,groupX,centreY);ctx.restore();ctx.drawImage(logo,groupX+labelW+footerGap,logoY,dw,dh);
    }
    /* PDF keeps the exact visual export while adding real clickable link annotations over the visibly-spelled URLs. */
    const jpegUrl=canvas.toDataURL('image/jpeg',.94),jpegBin=atob(jpegUrl.split(',')[1]),jpegBytes=new Uint8Array(jpegBin.length);for(let i=0;i<jpegBin.length;i++)jpegBytes[i]=jpegBin.charCodeAt(i);
    const enc=new TextEncoder(),parts=[],offsets=[0];let total=0;const push=v=>{const b=typeof v==='string'?enc.encode(v):v;parts.push(b);total+=b.length};const obj=(n,body)=>{offsets[n]=total;push(`${n} 0 obj\n${body}\nendobj\n`)};
    push('%PDF-1.4\n%WWPDF\n');
    const pageW=595.28,pageH=pageW*(H/W),imgObj=4,firstAnnot=5,annotRefs=linkRects.map((_,i)=>`${firstAnnot+i} 0 R`).join(' ');
    obj(1,'<< /Type /Catalog /Pages 2 0 R >>');obj(2,'<< /Type /Pages /Kids [3 0 R] /Count 1 >>');
    obj(3,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageW.toFixed(2)} ${pageH.toFixed(2)}] /Resources << /XObject << /Im0 ${imgObj} 0 R >> >> /Contents ${firstAnnot+linkRects.length} 0 R${annotRefs?` /Annots [${annotRefs}]`:''} >>`);
    offsets[imgObj]=total;push(`${imgObj} 0 obj\n<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`);push(jpegBytes);push('\nendstream\nendobj\n');
    const escPdf=s=>String(s).replace(/([\\()])/g,'\\$1');linkRects.forEach((r,i)=>{const sx=pageW/W,sy=pageH/H,x1=r.x*sx,x2=(r.x+r.w)*sx,y1=pageH-(r.y+r.h)*sy,y2=pageH-r.y*sy;obj(firstAnnot+i,`<< /Type /Annot /Subtype /Link /Rect [${x1.toFixed(2)} ${y1.toFixed(2)} ${x2.toFixed(2)} ${y2.toFixed(2)}] /Border [0 0 0] /A << /S /URI /URI (${escPdf(r.url)}) >> >>`)});
    const contentObj=firstAnnot+linkRects.length,stream=`q ${pageW.toFixed(2)} 0 0 ${pageH.toFixed(2)} 0 0 cm /Im0 Do Q`;obj(contentObj,`<< /Length ${enc.encode(stream).length} >>\nstream\n${stream}\nendstream`);
    const xref=total,pdfObjCount=contentObj;push(`xref\n0 ${pdfObjCount+1}\n0000000000 65535 f \n`);for(let i=1;i<=pdfObjCount;i++)push(`${String(offsets[i]).padStart(10,'0')} 00000 n \n`);push(`trailer\n<< /Size ${pdfObjCount+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`);
    const pdf=new Blob(parts,{type:'application/pdf'}),url=URL.createObjectURL(pdf),a=document.createElement('a');a.href=url;a.download=`${(meta.name||'trip-itinerary').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'')}-itinerary.pdf`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);setTimeout(()=>{if(btn){delete btn.dataset.exportBusy;btn.classList.remove('ww-download-pulse','ww-download-pressed')}},180);
  };
})();

/* === WozzaWorld hotfix — calmer preparing animation === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-download-preparing-animation-011026';
  st.textContent=`
    /* Preserve the accepted, slightly slower Android-style preparing motion. */
    .ww-export-ready-tick .ww-prep-arrow{animation-duration:1.4s!important}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — companions use full itinerary header width === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-itinerary-companions-full-width-021026';
  st.textContent=`
    /* The header keeps 116px reserved for Download/Close for title + date only.
       Companions sit below those controls, so reclaim that width and wrap at the card edge. */
    .master-itinerary-head .master-itinerary-companions{
      width:calc(100% + 116px)!important;
      max-width:none!important;
      padding-right:0!important;
    }
    .master-itinerary-head .master-itinerary-companions>span{
      flex:1 1 auto!important;
      min-width:0!important;
      max-width:none!important;
      white-space:normal!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — hanging companion icon so wrapped lines reclaim left gap === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-itinerary-companions-hanging-icon-021026';
  st.textContent=`
    .master-itinerary-head .master-itinerary-companions{
      position:relative!important;
      display:block!important;
      gap:0!important;
    }
    .master-itinerary-head .master-itinerary-companions svg{
      position:absolute!important;
      left:0!important;
      top:1px!important;
      margin:0!important;
    }
    .master-itinerary-head .master-itinerary-companions>span{
      display:block!important;
      width:100%!important;
      text-indent:24px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld clock-face activity time picker (02 Oct 2026) === */
(()=>{
  const style=document.createElement('style');style.id='wozza-time-picker-style';style.textContent=`
    .wozza-calendar-time{cursor:pointer!important;caret-color:transparent}.wozza-calendar{position:relative}
    .wozza-time-layer{position:absolute;inset:0;z-index:80;display:flex;align-items:stretch;justify-content:stretch;padding:0;background:rgba(7,63,82,.20);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);border-radius:inherit;overflow:hidden}.wozza-time-layer[hidden]{display:none!important}
    .wozza-time-card{width:100%;min-height:100%;background:#f4fbfc;border-radius:inherit;overflow:hidden;box-shadow:none;font-family:inherit;color:#073f52;display:flex;flex-direction:column}
    .wozza-time-head{background:#087b8c;color:#fff;padding:16px 20px 14px}.wozza-time-kicker{font-size:11px;font-weight:850;opacity:.82;text-transform:uppercase;letter-spacing:.55px;margin-bottom:7px;text-align:center}
    .wozza-time-display{display:flex;align-items:center;justify-content:center;gap:7px}.wozza-time-part{border:0;border-radius:10px;padding:5px 8px;background:rgba(255,255,255,.16);color:#fff;font:inherit;font-size:38px;font-weight:900;line-height:1;cursor:pointer}.wozza-time-part.active{background:#e9bd25;color:#17213d}.wozza-time-colon{font-size:36px;font-weight:900}.wozza-time-ampm{display:flex;flex-direction:column;margin-left:5px;border:1px solid rgba(255,255,255,.45);border-radius:8px;overflow:hidden}.wozza-time-ampm button{border:0;background:transparent;color:#fff;font:inherit;font-size:12px;font-weight:900;padding:5px 8px;cursor:pointer}.wozza-time-ampm button.selected{background:#e9bd25;color:#17213d}
    .wozza-clock-wrap{padding:18px 16px 8px;display:flex;justify-content:center;align-items:center;flex:1}.wozza-clock{width:250px;height:250px;border-radius:50%;background:#e7f1f2;position:relative;touch-action:none;user-select:none}.wozza-clock-center{position:absolute;left:50%;top:50%;width:8px;height:8px;border-radius:50%;background:#087b8c;transform:translate(-50%,-50%);z-index:3}.wozza-clock-hand{position:absolute;left:50%;top:50%;height:3px;width:98px;background:#e9bd25;transform-origin:0 50%;z-index:2;border-radius:3px;pointer-events:none}.wozza-clock-hand:after{display:none}
    .wozza-clock-number{position:absolute;width:42px;height:42px;margin:-21px;border:0;border-radius:50%;background:transparent;color:#073f52;font:inherit;font-size:16px;font-weight:850;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:4}.wozza-clock-number.selected{background:#e9bd25;color:#17213d}.wozza-time-stage{text-align:center;color:#6f7e82;font-size:12px;font-weight:800;margin:0 0 9px}
    .wozza-time-actions{display:flex;align-items:center;gap:10px;padding:8px 18px 18px}.wozza-time-clear{margin-right:auto!important;background:#fff!important;color:#073f52!important;border:1px solid #d7e5e7!important}.wozza-time-actions button{border:0;border-radius:11px;padding:11px 20px;font:inherit;font-weight:900;cursor:pointer}.wozza-time-cancel{background:#d9534f;color:#fff}.wozza-time-ok{background:#25b14b;color:#fff}
  `;document.head.appendChild(style);
  let source=null,state={hour:12,minute:0,period:'AM',stage:'hour'},original='';
  const ensure=()=>{const cal=wozzaCalendarEnsure().querySelector('.wozza-calendar');let layer=cal.querySelector('.wozza-time-layer');if(layer)return layer;layer=document.createElement('div');layer.className='wozza-time-layer';layer.hidden=true;layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.innerHTML=`<div class="wozza-time-card"><div class="wozza-time-head"><div class="wozza-time-kicker">Select time</div><div class="wozza-time-display"><button type="button" class="wozza-time-part wozza-hour-display">12</button><span class="wozza-time-colon">:</span><button type="button" class="wozza-time-part wozza-minute-display">00</button><div class="wozza-time-ampm"><button type="button" data-period="AM">AM</button><button type="button" data-period="PM">PM</button></div></div></div><div class="wozza-clock-wrap"><div class="wozza-clock"><div class="wozza-clock-hand"></div><div class="wozza-clock-center"></div></div></div><div class="wozza-time-stage"></div><div class="wozza-time-actions"><button type="button" class="wozza-time-clear">Clear</button><button type="button" class="wozza-time-cancel">Cancel</button><button type="button" class="wozza-time-ok">OK</button></div></div>`;cal.appendChild(layer);
    const close=()=>{layer.hidden=true;source?.focus?.({preventScroll:true})};
    layer.querySelector('.wozza-time-clear').onclick=()=>{state={hour:12,minute:0,period:'AM',stage:'hour'};render(layer)};
    layer.querySelector('.wozza-time-cancel').onclick=()=>{if(source)source.value=original;close()};
    layer.querySelector('.wozza-time-ok').onclick=()=>{let h=state.hour%12;if(state.period==='PM')h+=12;const value=`${String(h).padStart(2,'0')}:${String(state.minute).padStart(2,'0')}`;if(source){source.value=value;source.dispatchEvent(new Event('input',{bubbles:true}));source.dispatchEvent(new Event('change',{bubbles:true}))}close()};
    layer.querySelector('.wozza-hour-display').onclick=()=>{state.stage='hour';render(layer)};layer.querySelector('.wozza-minute-display').onclick=()=>{state.stage='minute';render(layer)};
    layer.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{state.period=b.dataset.period;render(layer)});
    layer.addEventListener('click',e=>{const b=e.target.closest('.wozza-clock-number');if(!b)return;if(state.stage==='hour'){state.hour=Number(b.dataset.value);state.stage='minute'}else state.minute=Number(b.dataset.value);render(layer)});
    return layer};
  const render=layer=>{layer.querySelector('.wozza-hour-display').textContent=String(state.hour).padStart(2,'0');layer.querySelector('.wozza-minute-display').textContent=String(state.minute).padStart(2,'0');layer.querySelector('.wozza-hour-display').classList.toggle('active',state.stage==='hour');layer.querySelector('.wozza-minute-display').classList.toggle('active',state.stage==='minute');layer.querySelectorAll('[data-period]').forEach(b=>b.classList.toggle('selected',b.dataset.period===state.period));layer.querySelector('.wozza-time-stage').textContent='';
    const clock=layer.querySelector('.wozza-clock');clock.querySelectorAll('.wozza-clock-number').forEach(n=>n.remove());const vals=state.stage==='hour'?Array.from({length:12},(_,i)=>i+1):Array.from({length:12},(_,i)=>i*5);const selected=state.stage==='hour'?state.hour:Math.round(state.minute/5)*5%60;vals.forEach((v,i)=>{const pos=state.stage==='hour'?(v%12):(v/5),a=(pos*30-90)*Math.PI/180,r=98,b=document.createElement('button');b.type='button';b.className='wozza-clock-number'+(v===selected?' selected':'');b.dataset.value=v;b.textContent=state.stage==='minute'?String(v).padStart(2,'0'):v;b.style.left=`${125+Math.cos(a)*r}px`;b.style.top=`${125+Math.sin(a)*r}px`;clock.appendChild(b)});const idx=state.stage==='hour'?(state.hour%12):selected/5;layer.querySelector('.wozza-clock-hand').style.transform=`rotate(${idx*30-90}deg)`};
  const open=tm=>{if(!tm)return;source=tm;original=tm.value||'';const m=/^(\d{2}):(\d{2})$/.exec(original);if(m){const h=Number(m[1]);state={hour:h%12||12,minute:Number(m[2]),period:h>=12?'PM':'AM',stage:'hour'}}else state={hour:12,minute:0,period:'AM',stage:'hour'};const layer=ensure();render(layer);layer.hidden=false};
  document.addEventListener('click',e=>{const tm=e.target.closest?.('.wozza-calendar-time');if(!tm)return;e.preventDefault();e.stopPropagation();open(tm)},true);document.addEventListener('keydown',e=>{const tm=e.target.closest?.('.wozza-calendar-time');if(!tm||(e.key!=='Enter'&&e.key!==' '))return;e.preventDefault();open(tm)},true);
  const patch=()=>{const tm=document.querySelector('.wozza-calendar-time');if(tm){tm.type='text';tm.readOnly=true;tm.inputMode='none';tm.placeholder='--:--';tm.setAttribute('aria-label','Choose time')}};const originalEnsure=wozzaCalendarEnsure;wozzaCalendarEnsure=function(){const ov=originalEnsure();patch();return ov};patch();
})();

/* === WozzaWorld hotfix — Activity Details unsaved-changes close guard (02 Oct 2026) === */
(()=>{
  if(window.__wwActivityUnsavedCloseGuard021026)return;
  window.__wwActivityUnsavedCloseGuard021026=true;

  const st=document.createElement('style');
  st.id='ww-activity-unsaved-close-style-021026';
  st.textContent=`
    #wwActivityUnsavedDialog{border:0!important;background:transparent!important;padding:18px!important;max-width:390px!important;width:calc(100% - 32px)!important}
    #wwActivityUnsavedDialog::backdrop{background:rgba(7,36,46,.48)!important;backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important}
    #wwActivityUnsavedDialog .trip-unsaved-card{background:#edf5f4!important;border-radius:24px!important;padding:22px!important;box-shadow:0 18px 55px rgba(6,40,52,.28)!important;color:#172f3a!important;position:relative!important}
    #wwActivityUnsavedDialog .trip-unsaved-card h3{margin:0 0 8px!important;font-family:"Archivo Black",Impact,sans-serif!important;font-size:18px!important;white-space:nowrap!important;text-align:left!important;padding:0 46px 0 0!important}
    #wwActivityUnsavedDialog .trip-unsaved-card p{margin:0 0 18px!important;font-size:14px!important;line-height:1.45!important;color:#53666d!important}
    #wwActivityUnsavedDialog .trip-unsaved-actions{display:grid!important;gap:9px!important}
    #wwActivityUnsavedDialog .ww-unsaved-close{position:absolute!important;top:18px!important;right:18px!important;width:38px!important;height:38px!important;min-width:38px!important;min-height:38px!important;padding:0!important;border-radius:50%!important;border:0!important;background:rgba(8,76,94,.08)!important;color:#084c5e!important;font-size:28px!important;font-weight:500!important;line-height:38px!important;text-align:center!important;display:flex!important;align-items:center!important;justify-content:center!important}
    #wwActivityUnsavedDialog .trip-unsaved-actions button{min-height:44px!important;border-radius:999px!important;border:0!important;font:inherit!important;font-weight:800!important;padding:10px 16px!important}
    #wwActivityUnsavedSaveContinue{background:#e9bf2e!important;color:#172f3a!important}
    #wwActivityUnsavedSaveClose{background:#25b14b!important;color:#fff!important}
    #wwActivityUnsavedLeave{background:#e25550!important;color:#fff!important}
  `;
  document.head.appendChild(st);

  let cleanSnapshot='';
  let snapshotTimer=0;

  function activityDialogNode(){return document.getElementById('stopItineraryDialog')}

  function activitySnapshot(d=activityDialogNode()){
    if(!d)return '';
    const form=d.querySelector('.stop-itinerary-form');
    if(!form)return '';
    const fields=[...form.querySelectorAll('input,textarea,select,[contenteditable="true"]')].map((el,index)=>{
      const key=el.id||el.name||`${el.tagName}:${index}`;
      const type=(el.type||'').toLowerCase();
      const value=el.isContentEditable?el.textContent:(type==='checkbox'||type==='radio'?!!el.checked:el.value);
      return [key,value,el.dataset?.iso||''];
    });
    return JSON.stringify({
      category:d.dataset.category||'',
      bookmarked:d.dataset.bookmarked||'0',
      fields
    });
  }

  function rememberActivitySnapshot(){
    const d=activityDialogNode();
    if(d?.open)cleanSnapshot=activitySnapshot(d);
  }

  function queueSnapshot(){
    clearTimeout(snapshotTimer);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      snapshotTimer=setTimeout(rememberActivitySnapshot,30);
    }));
  }

  function activityIsDirty(){
    const d=activityDialogNode();
    if(!d?.open)return false;
    return activitySnapshot(d)!==cleanSnapshot;
  }

  function ensurePrompt(){
    let p=document.getElementById('wwActivityUnsavedDialog');
    if(p)return p;
    p=document.createElement('dialog');
    p.id='wwActivityUnsavedDialog';
    p.className='action-dialog trip-unsaved-dialog';
    p.innerHTML=`<div class="trip-unsaved-card"><button type="button" class="ww-unsaved-close" id="wwActivityUnsavedX" aria-label="Close">×</button><h3>Save your changes?</h3><p>Do you want to save your changes before closing this activity?</p><div class="trip-unsaved-actions"><button type="button" id="wwActivityUnsavedSaveContinue">Save &amp; continue editing</button><button type="button" id="wwActivityUnsavedSaveClose">Save &amp; close</button><button type="button" id="wwActivityUnsavedLeave">Close without saving</button></div></div>`;
    document.body.appendChild(p);

    p.addEventListener('cancel',e=>{e.preventDefault();p.close()});
    p.addEventListener('click',e=>{if(e.target===p)p.close()});
    p.querySelector('#wwActivityUnsavedX').onclick=()=>p.close();

    p.querySelector('#wwActivityUnsavedLeave').onclick=()=>{
      p.close();
      const d=activityDialogNode();
      if(d?.open)d.close();
    };

    p.querySelector('#wwActivityUnsavedSaveClose').onclick=()=>{
      p.close();
      const d=activityDialogNode();
      if(!d?.open)return;
      saveStopItinerary();
    };

    p.querySelector('#wwActivityUnsavedSaveContinue').onclick=()=>{
      p.close();
      const d=activityDialogNode(),row=activeItineraryRow;
      if(!d?.open||!row)return;
      const existingId=activeItineraryId||'';
      const before=new Set(itineraryItemsForRow(row).map(x=>String(x.id)));
      saveStopItinerary();
      /* Validation failures (for example, a blank activity name) deliberately leave
         the editor open. In that case there is nothing to reopen. */
      if(d.open)return;
      const items=itineraryItemsForRow(row);
      const id=existingId || items.find(x=>!before.has(String(x.id)))?.id;
      if(!id)return;
      requestAnimationFrame(()=>{
        openStopItinerary(row,id);
        queueSnapshot();
      });
    };
    return p;
  }

  function requestActivityClose(){
    const d=activityDialogNode();
    if(!d?.open)return;
    if(!activityIsDirty()){
      d.close();
      return;
    }
    const p=ensurePrompt();
    if(!p.open)p.showModal();
  }

  /* Capture the final, fully-enhanced Activity Details state each time Add/Edit opens. */
  const previousOpenStopItinerary=openStopItinerary;
  openStopItinerary=function(){
    const r=previousOpenStopItinerary.apply(this,arguments);
    queueSnapshot();
    return r;
  };

  /* Footer Close, header X and tapping the modal backdrop all use the same dirty guard.
     Capture phase prevents the legacy direct d.close() handlers from firing first. */
  document.addEventListener('click',e=>{
    const d=activityDialogNode();
    if(!d?.open)return;
    const explicitClose=e.target.closest?.('.stop-itinerary-close,.itin-cancel');
    const backdrop=e.target===d;
    if(!explicitClose&&!backdrop)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    requestActivityClose();
  },true);

  /* Escape follows the same rule instead of silently discarding work. */
  document.addEventListener('cancel',e=>{
    const d=activityDialogNode();
    if(e.target!==d||!d.open)return;
    e.preventDefault();
    requestActivityClose();
  },true);
})();


/* === WozzaWorld surgical polish — consistent stop delete bin icon 02 Oct 2026 === */
(()=>{
  if(window.__wwStopDeleteBin021026)return;
  window.__wwStopDeleteBin021026=true;
  const st=document.createElement('style');
  st.id='ww-stop-delete-bin-021026';
  st.textContent=`
    #tripDestinationStops .remove-destination-stop svg{
      width:18px!important;height:18px!important;display:block!important;
      fill:none!important;stroke:currentColor!important;stroke-width:2!important;
      stroke-linecap:round!important;stroke-linejoin:round!important;pointer-events:none!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical polish — stop delete circle contrast 02 Oct 2026 === */
(()=>{
  if(window.__wwStopDeleteOutline021026)return;
  window.__wwStopDeleteOutline021026=true;
  const st=document.createElement('style');
  st.id='ww-stop-delete-outline-021026';
  st.textContent=`
    #tripDestinationStops .remove-destination-stop{
      border:1px solid rgba(16,47,59,.14)!important;
      box-sizing:border-box!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld surgical polish — stop delete circle +3% 02 Oct 2026 === */
(()=>{
  if(window.__wwStopDeleteScale021026)return;
  window.__wwStopDeleteScale021026=true;
  const st=document.createElement('style');
  st.id='ww-stop-delete-scale-021026';
  st.textContent=`
    #tripDestinationStops .remove-destination-stop{
      transform:scale(1.03)!important;
      transform-origin:center!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — itinerary header country flag + compact actions 02 Oct 2026 === */
(()=>{
  if(window.__wwItineraryHeaderFlag021026)return;
  window.__wwItineraryHeaderFlag021026=true;
  const st=document.createElement('style');st.id='ww-itinerary-header-flag-021026';st.textContent=`
    .master-itinerary-head{padding-right:152px!important}
    .master-itinerary-close,.master-itinerary-capture,.master-itinerary-trip-flag{width:44px!important;height:44px!important;min-width:44px!important;min-height:44px!important;box-sizing:border-box!important}
    .master-itinerary-close{right:0!important}
    .master-itinerary-capture{right:52px!important}
    .master-itinerary-trip-flag{position:absolute!important;top:0!important;right:104px!important;border-radius:50%!important;background:transparent!important;border:0!important;padding:0!important;margin:0!important;display:grid!important;place-items:center!important;overflow:hidden!important;perspective:240px!important}
    .master-itinerary-trip-flag-slot{width:40.546px!important;height:40.546px!important;border-radius:50%!important;overflow:hidden!important;display:grid!important;place-items:center!important;transform-origin:50% 50%;backface-visibility:hidden}
    .master-itinerary-trip-flag-slot img{display:block!important;width:40.546px!important;height:40.546px!important;min-width:40.546px!important;min-height:40.546px!important;max-width:40.546px!important;max-height:40.546px!important;object-fit:cover!important;border-radius:50%!important;margin:0!important;padding:0!important}
    .master-itinerary-trip-flag-slot.flap-out{animation:wozzaAdaptiveFlapOut .16s ease-in forwards}
    .master-itinerary-trip-flag-slot.flap-in{animation:wozzaAdaptiveFlapIn .20s ease-out forwards}
    @media(prefers-reduced-motion:reduce){.master-itinerary-trip-flag-slot.flap-out,.master-itinerary-trip-flag-slot.flap-in{animation:none!important}}
  `;document.head.appendChild(st);

  const oldApply=wwApplyItineraryTripHeader;
  wwApplyItineraryTripHeader=function(d){
    const r=oldApply.apply(this,arguments),head=d?.querySelector('.master-itinerary-head');if(!head)return r;
    let countries=[...new Set(wwTripStopRows().map(row=>row.querySelector('.trip-stop-country')?.value?.trim()).filter(Boolean))];
    if(!countries.length&&editingTripId){const trip=state.trips.find(t=>String(t.id)===String(editingTripId));if(trip)countries=[...new Set(tripCountries(trip).filter(Boolean))]}
    let holder=head.querySelector('.master-itinerary-trip-flag');
    if(!countries.length){if(holder){clearInterval(holder._wwFlagTimer);holder.remove()}return r}
    if(!holder){holder=document.createElement('button');holder.type='button';holder.className='master-itinerary-trip-flag';holder.setAttribute('aria-label','Trip country');holder.innerHTML='<span class="master-itinerary-trip-flag-slot"></span>';head.insertBefore(holder,head.querySelector('.master-itinerary-capture'))}
    clearInterval(holder._wwFlagTimer);
    const slot=holder.querySelector('.master-itinerary-trip-flag-slot');let index=0;
    const paint=country=>{slot.innerHTML=flagMarkup(country,'master-itinerary-trip-flag-img');holder.dataset.currentCountry=country;holder.title=`Open ${country}`;holder.setAttribute('aria-label',`Open ${country} country page`)};
    holder.onclick=e=>{
      e.preventDefault();e.stopPropagation();
      const country=holder.dataset.currentCountry?.trim();if(!country)return;
      const dialog=wwMasterItineraryDialog();
      const origin={type:'itinerary',scrollTop:dialog?.scrollTop||0};
      clearInterval(holder._wwFlagTimer);
      if(dialog?.open)dialog.close();
      openCountry(country,origin);
    };
    paint(countries[0]);
    if(countries.length>1){holder._wwFlagTimer=setInterval(()=>{if(!holder.isConnected){clearInterval(holder._wwFlagTimer);return}index=(index+1)%countries.length;slot.classList.remove('flap-in');slot.classList.add('flap-out');setTimeout(()=>{paint(countries[index]);slot.classList.remove('flap-out');void slot.offsetWidth;slot.classList.add('flap-in')},155)},4000)}
    return r;
  };
})();

/* === WozzaWorld hotfix — itinerary date one-line + 5% smaller 02 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-itinerary-date-one-line-021026'))return;
  const st=document.createElement('style');
  st.id='ww-itinerary-date-one-line-021026';
  st.textContent=`
    .master-itinerary-head small.master-itinerary-date-range{
      white-space:nowrap!important;
      font-size:95%!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — lower itinerary title/date/companions block 8px; actions fixed 02 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-itinerary-info-lower-021026'))return;
  const st=document.createElement('style');
  st.id='ww-itinerary-info-lower-021026';
  st.textContent=`
    .master-itinerary-head h2,
    .master-itinerary-head small.master-itinerary-date-range,
    .master-itinerary-head .master-itinerary-companions{
      position:relative!important;
      top:8px!important;
    }
    .master-itinerary-head .master-itinerary-companions svg{
      top:1px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — itinerary date/companions +4px; flag -2% 02 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-itinerary-date-companions-flag-polish-021026'))return;
  const st=document.createElement('style');
  st.id='ww-itinerary-date-companions-flag-polish-021026';
  st.textContent=`
    .master-itinerary-head small.master-itinerary-date-range,
    .master-itinerary-head .master-itinerary-companions{
      top:12px!important;
    }
    .master-itinerary-trip-flag-slot,
    .master-itinerary-trip-flag-slot img{
      width:39.735px!important;
      height:39.735px!important;
      min-width:39.735px!important;
      min-height:39.735px!important;
      max-width:39.735px!important;
      max-height:39.735px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — keep itinerary companions on one responsive line 02 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-itinerary-companions-single-line-021026'))return;
  const st=document.createElement('style');
  st.id='ww-itinerary-companions-single-line-021026';
  st.textContent=`
    .master-itinerary-head .master-itinerary-companions{
      white-space:nowrap!important;
      overflow:visible!important;
    }
    .master-itinerary-head .master-itinerary-companions>span{
      white-space:nowrap!important;
      width:auto!important;
      max-width:none!important;
      font-size:clamp(12px,3.55vw,15px)!important;
      letter-spacing:-.1px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld hotfix — itinerary companions natural wrap only when needed 02 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-itinerary-companions-natural-wrap-021026'))return;
  const st=document.createElement('style');
  st.id='ww-itinerary-companions-natural-wrap-021026';
  st.textContent=`
    .master-itinerary-head .master-itinerary-companions{
      white-space:normal!important;
      overflow:visible!important;
    }
    .master-itinerary-head .master-itinerary-companions>span{
      white-space:normal!important;
      width:100%!important;
      max-width:100%!important;
      font-size:15px!important;
      letter-spacing:0!important;
      overflow-wrap:normal!important;
      word-break:normal!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld hotfix — itinerary country modal cleanup / interaction restore 03 Oct 2026 === */
(()=>{
  if(window.__wwItineraryCountryModalCleanup031026)return;
  window.__wwItineraryCountryModalCleanup031026=true;

  function wwCountryTopDialog(){
    let d=document.getElementById('wwCountryTopDialog');
    if(d)return d;
    d=document.createElement('dialog');
    d.id='wwCountryTopDialog';
    d.setAttribute('aria-label','Country details');
    d.style.cssText='border:0;padding:0;margin:0;width:100vw;height:100dvh;max-width:none;max-height:none;background:transparent;overflow:visible;';
    const st=document.createElement('style');
    st.id='ww-country-top-dialog-cleanup-031026';
    st.textContent=`
      #wwCountryTopDialog::backdrop{background:transparent}
      #wwCountryTopDialog #countrySheet{z-index:2!important}
      #wwCountryTopDialog #sheetBackdrop{z-index:1!important}
    `;
    document.head.appendChild(st);
    document.body.appendChild(d);
    d.addEventListener('cancel',e=>{e.preventDefault();document.getElementById('sheetClose')?.click()});
    d.addEventListener('close',()=>{
      /* A closed native dialog must never be left as an invisible pointer blocker. */
      d.style.pointerEvents='none';
    });
    return d;
  }

  function wwMountCountryInTopDialog(){
    const d=wwCountryTopDialog(),sheet=document.getElementById('countrySheet'),backdrop=document.getElementById('sheetBackdrop');
    if(!sheet||!backdrop)return null;
    if(backdrop.parentNode!==d)d.appendChild(backdrop);
    if(sheet.parentNode!==d)d.appendChild(sheet);
    d.style.pointerEvents='auto';
    if(!d.open){
      if(window.__wwOpeningCountryFromHome041026)d.show();
      else d.showModal();
    }
    return d;
  }

  function wwCloseCountryTopDialog(){
    const d=document.getElementById('wwCountryTopDialog');
    if(d?.open)d.close();
    if(d)d.style.pointerEvents='none';
  }

  const baseOpenCountry=openCountry;
  openCountry=function(c,origin=null){
    /* Put the country UI in its own genuine top-layer dialog first. */
    wwMountCountryInTopDialog();
    return baseOpenCountry(c,origin);
  };

  /* The existing country close handlers were bound before this hotfix.
     Capture the close action as well, so the top-layer host is ALWAYS removed. */
  const closeTargets=()=>[
    document.getElementById('sheetClose'),
    document.getElementById('sheetBackdrop')
  ].filter(Boolean);

  closeTargets().forEach(el=>el.addEventListener('click',()=>{
    /* Let the existing closeSheet handler clear the country card, then remove
       the native modal host on the same event. */
    queueMicrotask(wwCloseCountryTopDialog);
  }));

  /* Rewire the itinerary flag after the existing header renderer runs.
     Keep the itinerary open underneath; the country dialog is the higher top layer. */
  const previousApply=wwApplyItineraryTripHeader;
  wwApplyItineraryTripHeader=function(d){
    const result=previousApply.apply(this,arguments);
    const holder=d?.querySelector('.master-itinerary-trip-flag');
    if(holder){
      holder.onclick=e=>{
        e.preventDefault();e.stopPropagation();
        const country=holder.dataset.currentCountry?.trim();
        if(!country)return;
        clearInterval(holder._wwFlagTimer);
        countryCardOrigin={type:'itinerary-overlay'};
        openCountry(country,{type:'itinerary-overlay'});
      };
    }
    return result;
  };

  /* If any other route closes/hides the country sheet, remove the host too. */
  const sheet=document.getElementById('countrySheet');
  if(sheet){
    new MutationObserver(()=>{
      if(!sheet.classList.contains('open'))wwCloseCountryTopDialog();
    }).observe(sheet,{attributes:true,attributeFilter:['class','aria-hidden']});
  }
})();



/* === WozzaWorld hotfix — Trips flags keep Trip/Trips page open under Country 03 Oct 2026 === */
(()=>{
  if(window.__wwTripFlagCountryOverlay031026)return;
  window.__wwTripFlagCountryOverlay031026=true;

  /* Expanded Trip page: stop flag.
     Capture before the legacy handler which closes #tripDialog. */
  document.addEventListener('click',e=>{
    const slot=e.target.closest?.('#tripDialog[open] #tripDestinationStops .trip-stop-summary-flag-slot');
    if(!slot)return;
    const country=(slot.dataset.stopCountry ||
      slot.closest('.trip-destination-stop')?.querySelector('.trip-stop-country')?.value || '').trim();
    if(!country)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    openCountry(country,{type:'trip-overlay'});
  },true);

  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const slot=e.target.closest?.('#tripDialog[open] #tripDestinationStops .trip-stop-summary-flag-slot');
    if(!slot)return;
    const country=(slot.dataset.stopCountry ||
      slot.closest('.trip-destination-stop')?.querySelector('.trip-stop-country')?.value || '').trim();
    if(!country)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    openCountry(country,{type:'trip-overlay'});
  },true);

  /* Trips list card flag — works whether the card is collapsed or expanded.
     Give Country an explicit Trips origin so closing it cannot fall back to Home. */
  document.addEventListener('click',e=>{
    const flag=e.target.closest?.('#tripList .trip-country-flag[data-trip-country]');
    if(!flag)return;
    const country=(flag.dataset.tripCountry||'').trim();
    if(!country)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    openCountry(country,{type:'screen',screen:'trips',tripsView:true});
  },true);

  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const flag=e.target.closest?.('#tripList .trip-country-flag[data-trip-country]');
    if(!flag)return;
    const country=(flag.dataset.tripCountry||'').trim();
    if(!country)return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    openCountry(country,{type:'screen',screen:'trips',tripsView:true});
  },true);
})();



/* === WozzaWorld hotfix — Country returns to immediate open Trip parent 03 Oct 2026 === */
(()=>{
  if(window.__wwCountryImmediateTripParent031026)return;
  return; /* superseded: Trip now remains open underneath Country */
  window.__wwCountryImmediateTripParent031026=true;

  let wwCountryOpenedOverTrip=false;

  function tripIsOpen(){
    const d=document.getElementById('tripDialog');
    return !!(d && d.open);
  }

  /* Mark Country as a child of the currently open Trip regardless of whether
     that Trip itself came from Home or Trips. */
  document.addEventListener('click',e=>{
    const flag=e.target.closest?.(
      '#tripDialog[open] #tripDestinationStops .trip-stop-summary-flag-slot,'+
      '#tripDialog[open] .trip-country-flag[data-trip-country]'
    );
    if(flag) wwCountryOpenedOverTrip=true;
  },true);

  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const flag=e.target.closest?.(
      '#tripDialog[open] #tripDestinationStops .trip-stop-summary-flag-slot,'+
      '#tripDialog[open] .trip-country-flag[data-trip-country]'
    );
    if(flag) wwCountryOpenedOverTrip=true;
  },true);

  /* Country close must reveal the still-open Trip — never navigate to the
     Trip's own origin (Home/Trips). The Trip retains its original origin so
     closing the Trip afterwards still goes back to the correct place. */
  const cleanAfterCountryClose=()=>{
    if(!wwCountryOpenedOverTrip)return;
    wwCountryOpenedOverTrip=false;

    const trip=document.getElementById('tripDialog');
    if(trip && !trip.open){
      try{ trip.showModal(); }catch(_){}
    }

    /* Ensure the Trip is the active modal again after the Country top layer
       has been removed. */
    requestAnimationFrame(()=>{
      if(trip?.open){
        trip.style.pointerEvents='auto';
        try{ trip.focus({preventScroll:true}); }catch(_){}
      }
    });
  };

  const bind=()=>{
    const close=document.getElementById('sheetClose');
    const backdrop=document.getElementById('sheetBackdrop');
    [close,backdrop].filter(Boolean).forEach(el=>{
      if(el.dataset.wwTripParentCloseBound)return;
      el.dataset.wwTripParentCloseBound='1';
      el.addEventListener('click',()=>queueMicrotask(cleanAfterCountryClose),true);
    });
  };
  bind();

  const sheet=document.getElementById('countrySheet');
  if(sheet){
    new MutationObserver(()=>{
      bind();
      if(wwCountryOpenedOverTrip && !sheet.classList.contains('open')){
        cleanAfterCountryClose();
      }
    }).observe(sheet,{attributes:true,subtree:true,attributeFilter:['class','aria-hidden']});
  }
})();



/* === WozzaWorld hotfix — itinerary date calendar + isolated Daily Plan polish 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyPlanPolish031026)return;
  window.__wwDailyPlanPolish031026=true;

  const st=document.createElement('style');
  st.id='ww-daily-plan-polish-031026';
  st.textContent=`
    /* DAILY PLAN ONLY. Do not alter the main itinerary layout. */
    #masterItineraryDialog.ww-daily-plan-mode{
      width:min(680px,calc(100vw - 24px))!important;
      height:min(760px,calc(100dvh - 32px))!important;
      max-height:calc(100dvh - 32px)!important;
      margin:auto!important;
      padding:0!important;
      overflow:hidden!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-shell{
      width:100%!important;
      height:100%!important;
      max-height:none!important;
      display:flex!important;
      flex-direction:column!important;
      overflow:hidden!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-head{
      flex:0 0 auto!important;
      min-height:118px!important;
      box-sizing:border-box!important;
      display:grid!important;
      grid-template-columns:minmax(0,1fr) 54px!important;
      align-items:start!important;
      column-gap:12px!important;
      position:relative!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-head>div{
      min-width:0!important;
      width:auto!important;
      padding-right:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-head h2{
      position:static!important;
      top:auto!important;
      margin-top:4px!important;
      white-space:normal!important;
      overflow:visible!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-head small{
      position:static!important;
      top:auto!important;
      display:block!important;
      white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-head .master-itinerary-companions{
      position:static!important;
      top:auto!important;
      margin-top:8px!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-trip-flag,
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-capture{
      display:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode .master-itinerary-close{
      grid-column:2!important;
      grid-row:1!important;
      position:static!important;
      justify-self:end!important;
      align-self:start!important;
      margin:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode #masterItineraryContent{
      flex:1 1 auto!important;
      min-height:0!important;
      overflow-y:auto!important;
      overscroll-behavior:contain;
      scrollbar-width:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode #masterItineraryContent::-webkit-scrollbar{
      display:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-mode #masterItineraryAdd{
      display:none!important;
    }

    /* Only adds tap semantics to the date on the NORMAL itinerary. */
    #masterItineraryDialog:not(.ww-daily-plan-mode) .master-itinerary-date-range{
      cursor:pointer;
      touch-action:manipulation;
    }
  `;
  document.head.appendChild(st);

  /* Keep a read-only range calendar above the itinerary instead of closing it. */
  function wwOpenItineraryReadOnlyCalendar(){
    const rows=wwTripStopRows();
    if(!rows.length)return;
    const first=rows[0],last=rows[rows.length-1]||first;
    const start=first?.querySelector('.trip-destination-from')?.value||'';
    const end=(rows.length===1?first:last)?.querySelector('.trip-destination-to')?.value||'';
    if(!start&&!end)return;

    wozzaCalendarTarget=null;
    wozzaCalendarMode='range';
    wozzaCalendarRangeStart=start||end;
    wozzaCalendarRangeEnd=end||start;
    if(wozzaCalendarRangeEnd<wozzaCalendarRangeStart)
      [wozzaCalendarRangeStart,wozzaCalendarRangeEnd]=[wozzaCalendarRangeEnd,wozzaCalendarRangeStart];

    const dt=wozzaDateFromIso(wozzaCalendarRangeStart)||new Date();
    wozzaCalendarView=new Date(dt.getFullYear(),dt.getMonth(),1);
    const ov=wozzaCalendarEnsure();
    ov.querySelector('.wozza-calendar')?.classList.remove('year-mode');
    wozzaCalendarRender();
    if(!ov.open)ov.showModal();
  }

  document.addEventListener('click',e=>{
    const date=e.target.closest?.('#masterItineraryDialog[open]:not(.ww-daily-plan-mode) .master-itinerary-date-range');
    if(!date)return;
    e.preventDefault();e.stopPropagation();
    wwOpenItineraryReadOnlyCalendar();
  },true);

  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const date=e.target.closest?.('#masterItineraryDialog[open]:not(.ww-daily-plan-mode) .master-itinerary-date-range');
    if(!date)return;
    e.preventDefault();e.stopPropagation();
    wwOpenItineraryReadOnlyCalendar();
  },true);

  /* Add keyboard semantics whenever the normal itinerary header is painted. */
  const previousApply=wwApplyItineraryTripHeader;
  wwApplyItineraryTripHeader=function(d){
    const r=previousApply.apply(this,arguments);
    const date=d?.querySelector('.master-itinerary-date-range');
    if(date){
      date.setAttribute('role','button');
      date.setAttribute('tabindex','0');
      date.setAttribute('aria-label','Open trip calendar');
    }
    return r;
  };

  /* Isolate Daily Plan from all main-itinerary header decoration.
     The old implementation reused the same dialog and left flag/capture/date
     classes behind, which is why its header jumped and inherited flag offsets. */
  const previousDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const d=wwMasterItineraryDialog();

    /* Render with existing proven activity logic first. */
    previousDaily.call(this,iso);

    d.classList.add('ww-daily-plan-mode');

    const head=d.querySelector('.master-itinerary-head');
    const small=head?.querySelector('small');
    const title=head?.querySelector('h2');
    const companions=head?.querySelector('.master-itinerary-companions');
    const flag=head?.querySelector('.master-itinerary-trip-flag');
    const cap=head?.querySelector('.master-itinerary-capture');

    if(small){
      small.textContent='DAILY PLAN';
      small.classList.remove('master-itinerary-date-range');
      small.removeAttribute('role');
      small.removeAttribute('tabindex');
      small.removeAttribute('aria-label');
    }
    if(title) title.textContent=wwItineraryDayLabel(iso);
    if(companions) companions.hidden=true;
    if(flag){ clearInterval(flag._wwFlagTimer); flag.hidden=true; }
    if(cap) cap.hidden=true;

    d.scrollTop=0;
    const host=d.querySelector('#masterItineraryContent');
    if(host)host.scrollTop=0;
  };

  /* Any normal itinerary render/open explicitly leaves Daily Plan mode.
     This is deliberately class-scoped so the painstaking main itinerary CSS
     remains byte-for-byte untouched. */
  const previousRender=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    const d=wwMasterItineraryDialog();
    d.classList.remove('ww-daily-plan-mode');
    d.querySelector('.master-itinerary-trip-flag')?.removeAttribute('hidden');
    d.querySelector('.master-itinerary-capture')?.removeAttribute('hidden');
    return previousRender.apply(this,arguments);
  };

  const previousTripOpen=wwOpenTripItinerary;
  wwOpenTripItinerary=function(){
    const d=wwMasterItineraryDialog();
    d.classList.remove('ww-daily-plan-mode');
    d.querySelector('.master-itinerary-trip-flag')?.removeAttribute('hidden');
    d.querySelector('.master-itinerary-capture')?.removeAttribute('hidden');
    return previousTripOpen.apply(this,arguments);
  };
})();



/* === WozzaWorld — isolated Daily Plan layout v2 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyPlanIsolatedV2031026)return;
  window.__wwDailyPlanIsolatedV2031026=true;

  const css=document.createElement('style');
  css.id='ww-daily-plan-isolated-v2-031026';
  css.textContent=`
    /* Everything below is deliberately DAILY-ONLY. */
    #masterItineraryDialog.ww-daily-plan-v2{
      width:min(680px,calc(100vw - 24px))!important;
      height:auto!important;
      max-height:calc(100dvh - 24px)!important;
      margin:auto!important;
      padding:0!important;
      overflow:auto!important;
      scrollbar-width:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2::-webkit-scrollbar{display:none!important}
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-shell{
      width:100%!important;height:auto!important;max-height:none!important;
      display:block!important;overflow:visible!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      min-height:86px!important;height:auto!important;
      display:grid!important;
      grid-template-columns:minmax(0,1fr) 46px 46px!important;
      gap:10px!important;align-items:center!important;
      box-sizing:border-box!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div{
      min-width:0!important;width:auto!important;padding:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head h2{display:none!important}
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head small{
      display:block!important;position:static!important;top:auto!important;
      margin:0!important;white-space:nowrap!important;
      font-size:18px!important;font-weight:900!important;line-height:1!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-companions,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-capture{display:none!important}
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      display:flex!important;position:static!important;grid-column:2!important;grid-row:1!important;
      justify-self:center!important;align-self:center!important;margin:0!important;
      width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;
      padding:0!important;border:0!important;border-radius:50%!important;overflow:hidden!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot img{
      width:42px!important;height:42px!important;min-width:42px!important;min-height:42px!important;
      max-width:42px!important;max-height:42px!important;border-radius:50%!important;object-fit:cover!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      display:grid!important;place-items:center!important;position:static!important;
      grid-column:3!important;grid-row:1!important;justify-self:end!important;align-self:center!important;
      margin:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 #masterItineraryContent{
      overflow:visible!important;max-height:none!important;height:auto!important;min-height:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      display:grid!important;grid-template-columns:auto minmax(0,1fr) 58px!important;
      align-items:center!important;background:#fff!important;border-radius:18px 18px 0 0!important;
      overflow:hidden!important;min-height:58px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead b{
      align-self:stretch!important;display:flex!important;align-items:center!important;
      padding:0 16px!important;background:#087f91!important;color:#fff!important;
      font-size:16px!important;font-weight:900!important;white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead span{
      padding:0 14px!important;font-size:16px!important;font-weight:900!important;
      color:#172f3a!important;min-width:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-add{
      width:44px!important;height:44px!important;border:0!important;border-radius:50%!important;
      background:#087f91!important;color:#fff!important;font-size:31px!important;font-weight:900!important;
      line-height:1!important;justify-self:center!important;padding:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-day{
      margin-top:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-daybody{
      border-radius:0 0 18px 18px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 #masterItineraryAdd{display:none!important}
  `;
  document.head.appendChild(css);

  const isoForRow=row=>row?.querySelector('.trip-destination-from')?.value||'';
  const endForRow=row=>row?.querySelector('.trip-destination-to')?.value||isoForRow(row);
  const rowForDate=iso=>{
    const rows=wwTripStopRows();
    return rows.find(r=>{
      const a=isoForRow(r),b=endForRow(r);
      return a&&iso>=a&&iso<=(b||a);
    }) || rows.find((r,i)=>wwMasterActivities().some(x=>x._stopIndex===i&&(x.startDate===iso||x.endDate===iso))) || rows[0];
  };
  const countryForDate=iso=>{
    const r=rowForDate(iso);
    return r?.querySelector('.trip-stop-country')?.value?.trim()||'';
  };
  const dayNumber=iso=>{
    const meta=wwItineraryTripMeta();
    const start=String(meta?.start||'') || isoForRow(wwTripStopRows()[0]);
    if(!start||!iso)return 1;
    const a=new Date(start+'T12:00:00'),b=new Date(iso+'T12:00:00');
    return Math.max(1,Math.round((b-a)/86400000)+1);
  };
  const openAddForDate=iso=>{
    const row=rowForDate(iso);
    if(!row)return;
    const d=wwMasterItineraryDialog();
    if(d.open)d.close();
    openStopItinerary(row);
    /* Existing quick-add machinery recognises the requested date through the
       activity date input once its editor exists. */
    requestAnimationFrame(()=>{
      const inp=document.getElementById('itinStartDate');
      if(inp){
        inp.dataset.iso=iso;
        inp.value=pretty(iso);
        inp.dispatchEvent(new Event('change',{bubbles:true}));
      }
    });
  };

  const previousDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=previousDaily.apply(this,arguments);
    const d=wwMasterItineraryDialog();
    d.classList.remove('ww-daily-plan-mode');
    d.classList.add('ww-daily-plan-v2');
    d.dataset.wwView='daily';
    d.dataset.wwDailyIso=iso;

    const head=d.querySelector('.master-itinerary-head');
    const eyebrow=head?.querySelector('small');
    const title=head?.querySelector('h2');
    if(title)title.textContent='';
    if(eyebrow){
      eyebrow.hidden=false;
      eyebrow.textContent='DAILY PLAN';
      eyebrow.classList.remove('master-itinerary-date-range');
      eyebrow.removeAttribute('role');eyebrow.removeAttribute('tabindex');
    }

    /* Daily-specific country flag. It uses the stop covering this date, not
       the main itinerary's rotating/multi-country state. */
    let flag=head?.querySelector('.master-itinerary-trip-flag');
    const country=countryForDate(iso);
    if(flag){
      clearInterval(flag._wwFlagTimer);
      flag.hidden=!country;
      if(country){
        flag.dataset.currentCountry=country;
        flag.innerHTML=`<span class="master-itinerary-trip-flag-slot">${flagMarkup(country,'master-itinerary-trip-flag-img')}</span>`;
        flag.setAttribute('aria-label',`Open ${country} country page`);
        flag.onclick=e=>{e.preventDefault();e.stopPropagation();countryCardOrigin={type:'itinerary-overlay'};openCountry(country,{type:'itinerary-overlay'})};
      }
    }

    /* Replace only the daily schedule markup with the normal itinerary day
       header pattern; Notes / To Do sections appended by existing wrappers stay put. */
    const host=d.querySelector('#masterItineraryContent');
    const all=wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));
    host.innerHTML=`
      <section class="master-itinerary-day ww-daily-plan-schedule">
        <div class="ww-daily-plan-dayhead">
          <b>DAY ${dayNumber(iso)}</b>
          <span>${esc(wwItineraryDayLabel(iso))}</span>
          <button type="button" class="ww-daily-plan-add" aria-label="Add activity">+</button>
        </div>
        <div class="master-itinerary-daybody">
          ${all.length?all.map(wwActivityScheduleRow).join(''):'<div class="master-itinerary-empty"><strong>Nothing planned yet</strong><p>There are no activities scheduled for this day.</p></div>'}
        </div>
      </section>`;
    wwWireItineraryActivityActions(host,d);
    host.querySelector('.ww-daily-plan-add').onclick=()=>openAddForDate(iso);

    /* Existing Daily Plan notes / read-only to-do wrappers run before us.
       Re-run their last daily wrapper once by preserving their DOM where present
       is unnecessary; they are generated outside #masterItineraryContent. */
    d.scrollTop=0;
    return out;
  };

  /* Normal itinerary always sheds daily-only class. */
  const normalRender=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    const d=wwMasterItineraryDialog();
    d.classList.remove('ww-daily-plan-v2');
    return normalRender.apply(this,arguments);
  };
  const normalOpen=wwOpenTripItinerary;
  wwOpenTripItinerary=function(){
    const d=wwMasterItineraryDialog();
    d.classList.remove('ww-daily-plan-v2');
    return normalOpen.apply(this,arguments);
  };
})();



/* === WozzaWorld — Daily Plan ONLY: strict date-scoped Notes + To Dos 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyStrictNotesTodos031026)return;
  window.__wwDailyStrictNotesTodos031026=true;

  const style=document.createElement('style');
  style.id='ww-daily-strict-notes-todos-031026';
  style.textContent=`
    /* Daily Plan only — never changes normal itinerary/trip sections. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-notes[hidden],
    #masterItineraryDialog.ww-daily-plan-v2 .ww-itinerary-trip-todos[hidden]{display:none!important}
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-notes textarea{
      resize:none!important;overflow:hidden!important;
    }
  `;
  document.head.appendChild(style);

  const activitiesForDate=iso=>
    wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));

  const canonicalTodoRow=id=>{
    if(!id)return null;
    return [...(document.querySelectorAll('#tripTodoList > .trip-todo-row')||[])]
      .find(r=>String(r.dataset.todoId||'')===String(id))||null;
  };

  function strictDailyTodos(iso){
    const vals=[],seen=new Set();
    activitiesForDate(iso).forEach(activity=>{
      const activityId=String(activity.id||'');
      const ids=[...(Array.isArray(activity.todoIds)?activity.todoIds:[]),...(activity.todoId?[activity.todoId]:[])]
        .map(String).filter(Boolean);
      ids.forEach(id=>{
        if(seen.has(id))return;
        const row=canonicalTodoRow(id);
        /* BOTH sides must agree on ownership. This rejects stale/polluted todoIds. */
        if(!row||String(row.dataset.activityId||'')!==activityId)return;
        const text=row.querySelector('.trip-todo-input')?.value?.trim()||'';
        if(!text)return;
        seen.add(id);
        vals.push({id,text,done:row.classList.contains('is-done')});
      });
    });
    return vals;
  }

  function strictDailyNotes(iso){
    return activitiesForDate(iso)
      .map(x=>({id:String(x.id||''),name:String(x.name||'Activity').trim(),notes:String(x.notes||'').trim()}))
      .filter(x=>x.notes);
  }

  function paintDailySupportingInfo(d,iso){
    if(!d||!d.classList.contains('ww-daily-plan-v2'))return;

    /* NOTES: never use the shared Trip notes value in Daily Plan. */
    const notesSection=d.querySelector('.master-itinerary-trip-notes');
    if(notesSection){
      const notes=strictDailyNotes(iso);
      notesSection.hidden=!notes.length;
      const area=notesSection.querySelector('textarea');
      if(area){
        area.readOnly=true;
        area.value=notes.map(x=>notes.length>1?`${x.name}\n${x.notes}`:x.notes).join('\n\n');
        area.style.height='0px';
        requestAnimationFrame(()=>{area.style.height=Math.max(72,area.scrollHeight+2)+'px'});
      }
    }

    /* TO DOS: activity.todoIds AND canonical todo.activityId must agree. */
    const todoSection=d.querySelector('.ww-itinerary-trip-todos');
    if(todoSection){
      const vals=strictDailyTodos(iso);
      todoSection.hidden=!vals.length;
      todoSection.classList.add('ww-daily-readonly-todos');
      const add=todoSection.querySelector('.ww-itinerary-add-todo');
      if(add)add.hidden=true;
      const list=todoSection.querySelector('.ww-itinerary-todo-list');
      if(list){
        list.innerHTML=vals.map(v=>
          `<div class="ww-daily-todo-item${v.done?' is-done':''}" data-id="${esc(v.id)}"><span>${esc(v.text)}</span></div>`
        ).join('');
      }
    }
  }

  /* Final wrapper: runs after all legacy Daily Schedule wrappers and therefore
     overrides shared Trip Notes / weaker historical To Do filtering only here. */
  const priorDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=priorDaily.apply(this,arguments);
    const d=document.getElementById('masterItineraryDialog');
    paintDailySupportingInfo(d,iso);
    return out;
  };

  /* Restore shared Notes editing semantics when leaving Daily Plan.
     Existing normal renderers repopulate the actual value. */
  const restoreNormal=()=>{
    const d=document.getElementById('masterItineraryDialog');
    const area=d?.querySelector('#masterItineraryTripNotes');
    if(area)area.readOnly=false;
  };

  const priorRender=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    restoreNormal();
    return priorRender.apply(this,arguments);
  };

  const priorOpen=wwOpenTripItinerary;
  wwOpenTripItinerary=function(){
    restoreNormal();
    return priorOpen.apply(this,arguments);
  };
})();



/* === WozzaWorld — Daily Plan final compact header + active todos 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyFinalCompact031026)return;
  window.__wwDailyFinalCompact031026=true;

  const st=document.createElement('style');
  st.id='ww-daily-final-compact-031026';
  st.textContent=`
    /* DAILY PLAN ONLY: push the country flag + close controls to the far right. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      grid-template-columns:minmax(0,1fr) auto auto!important;
      column-gap:10px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      min-width:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      justify-self:end!important;
      margin-left:auto!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      justify-self:end!important;
    }

    /* Compact day header: enough room for Monday 19 Oct 2026 on one line. */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      grid-template-columns:126px minmax(0,1fr) 62px!important;
      overflow:hidden!important;
      border-radius:18px 18px 0 0!important;
      background:#fff!important;
      isolation:isolate!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>b{
      font-size:17px!important;
      line-height:1!important;
      white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>span{
      font-size:17px!important;
      line-height:1.15!important;
      white-space:nowrap!important;
      overflow:hidden!important;
      text-overflow:clip!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-add{
      width:46px!important;height:46px!important;min-width:46px!important;
      font-size:31px!important;line-height:1!important;
      justify-self:center!important;
      align-self:center!important;
      padding:0!important;margin:0!important;
    }

    /* The white header owns/clips both upper corners, preventing mustard bleed. */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-schedule{
      overflow:hidden!important;
      border-radius:18px!important;
      background:#fff!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-schedule .master-itinerary-daybody{
      background:var(--mustard,#ffc21c)!important;
    }
  `;
  document.head.appendChild(st);

  /* Final Daily-only pass: completed tasks are irrelevant to today's action list. */
  const previousDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=previousDaily.apply(this,arguments);
    const d=document.getElementById('masterItineraryDialog');
    if(!d?.classList.contains('ww-daily-plan-v2'))return out;
    d.querySelectorAll('.ww-itinerary-todo-list .ww-daily-todo-item.is-done').forEach(el=>el.remove());
    const section=d.querySelector('.ww-itinerary-trip-todos');
    const list=section?.querySelector('.ww-itinerary-todo-list');
    if(section&&list&&!list.children.length)section.hidden=true;
    return out;
  };
})();



/* === WozzaWorld — Daily Plan consolidated polish + day-focus entry 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyConsolidated031026)return;
  window.__wwDailyConsolidated031026=true;

  const st=document.createElement('style');
  st.id='ww-daily-consolidated-031026';
  st.textContent=`
    /* Top bar: title left, flag + close genuinely anchored to the right. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      display:grid!important;
      grid-template-columns:minmax(0,1fr) auto auto!important;
      align-items:center!important;
      column-gap:8px!important;
      width:100%!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{min-width:0!important}
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      justify-self:end!important;margin-left:auto!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      justify-self:end!important;
      width:42px!important;height:42px!important;min-width:42px!important;
      font-size:28px!important;line-height:1!important;padding:0!important;
    }

    /* Daily header mirrors the compact proportions of the main itinerary. */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      display:grid!important;
      grid-template-columns:102px minmax(0,1fr) 50px!important;
      align-items:center!important;
      gap:0!important;
      min-height:64px!important;
      padding:0 12px 0 0!important;
      overflow:hidden!important;
      border-radius:18px 18px 0 0!important;
      background:#fff!important;
      isolation:isolate!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>b{
      align-self:stretch!important;display:flex!important;align-items:center!important;justify-content:center!important;
      margin:0!important;padding:0 8px!important;
      font-size:15px!important;line-height:1!important;white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>span{
      min-width:0!important;margin:0!important;padding:0 12px!important;
      font-size:15px!important;line-height:1.1!important;font-weight:800!important;
      white-space:nowrap!important;overflow:visible!important;text-overflow:clip!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-add{
      width:36px!important;height:36px!important;min-width:36px!important;
      margin:0!important;padding:0!important;justify-self:end!important;align-self:center!important;
      font-size:25px!important;line-height:1!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-schedule{
      overflow:hidden!important;border-radius:18px!important;background:#fff!important;
    }

    /* Daily notes are display-only: no focus/caret/border animation on tap. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-notes textarea{
      pointer-events:none!important;caret-color:transparent!important;resize:none!important;
      outline:none!important;box-shadow:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-notes textarea:focus,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-notes textarea:focus-visible{
      outline:none!important;box-shadow:none!important;border-color:rgba(23,47,58,.12)!important;
    }

    /* Main itinerary: only DAY/date text advertises the focus-on-day action. */
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-dayhead>b[data-ww-daily-date],
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-dayhead>span[data-ww-daily-date]{
      cursor:pointer!important;
    }
  `;
  document.head.appendChild(st);

  const dateActivities=iso=>wwMasterActivities().filter(x=>x.startDate===iso||(!x.startDate&&x.endDate===iso));

  function ensureDailyFlag(d,iso){
    const head=d?.querySelector('.master-itinerary-head');
    if(!head)return;
    let flag=head.querySelector('.master-itinerary-trip-flag');

    /* On first-ever Daily Plan entry the main itinerary has not yet created its
       flag control. Create the same control here instead of depending on that lifecycle. */
    if(!flag){
      flag=document.createElement('button');
      flag.type='button';
      flag.className='master-itinerary-trip-flag';
      flag.setAttribute('aria-label','Open country page');
      const close=head.querySelector('.master-itinerary-close');
      if(close)head.insertBefore(flag,close);else head.appendChild(flag);
    }

    const activities=dateActivities(iso);
    const rows=wwTripStopRows();
    let row=null;
    const first=activities[0];
    if(first&&Number.isInteger(Number(first._stopIndex)))row=rows[Number(first._stopIndex)]||null;

    if(!row){
      row=rows.find(r=>{
        const a=r.querySelector('.trip-destination-from')?.value||'';
        const b=r.querySelector('.trip-destination-to')?.value||a;
        return a&&iso>=a&&iso<=(b||a);
      })||null;
    }

    /* If editor rows are not yet initialised, resolve from the saved trip itself. */
    let country=row?.querySelector('.trip-stop-country')?.value?.trim()||'';
    if(!country&&editingTripId){
      const trip=state.trips.find(t=>String(t.id)===String(editingTripId));
      const stops=trip?.destinations||[];
      let stop=null;
      if(first&&Number.isInteger(Number(first._stopIndex)))stop=stops[Number(first._stopIndex)]||null;
      stop=stop||stops.find(x=>{
        const a=String(x.from||x.startDate||x.dateFrom||'');
        const b=String(x.to||x.endDate||x.dateTo||a);
        return a&&iso>=a&&iso<=(b||a);
      })||stops[0]||null;
      country=String(stop?.country||stop?.destinationCountry||'').trim();
    }

    clearInterval(flag._wwFlagTimer);
    flag.hidden=!country;
    if(!country)return;
    flag.dataset.currentCountry=country;
    flag.innerHTML=`<span class="master-itinerary-trip-flag-slot">${flagMarkup(country,'master-itinerary-trip-flag-img')}</span>`;
    flag.setAttribute('aria-label',`Open ${country} country page`);
    flag.onclick=e=>{
      e.preventDefault();e.stopPropagation();
      countryCardOrigin={type:'itinerary-overlay'};
      openCountry(country,{type:'itinerary-overlay'});
    };
  }

  function finaliseDaily(d,iso){
    if(!d?.classList.contains('ww-daily-plan-v2'))return;
    ensureDailyFlag(d,iso);

    const notes=d.querySelector('#masterItineraryTripNotes');
    if(notes){
      notes.readOnly=true;
      notes.tabIndex=-1;
      notes.onpointerdown=e=>e.preventDefault();
      notes.onclick=e=>{e.preventDefault();notes.blur()};
    }

    /* Completed tasks never appear in the Daily Plan. */
    d.querySelectorAll('.ww-itinerary-todo-list .ww-daily-todo-item.is-done').forEach(el=>el.remove());
    const todoSection=d.querySelector('.ww-itinerary-trip-todos');
    const todoList=todoSection?.querySelector('.ww-itinerary-todo-list');
    if(todoSection&&todoList&&!todoList.children.length)todoSection.hidden=true;
  }

  const priorDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(iso){
    const out=priorDaily.apply(this,arguments);
    finaliseDaily(document.getElementById('masterItineraryDialog'),iso);
    return out;
  };

  /* Main itinerary day/date = focus that exact date in the Daily Plan.
     The + remains its own independent Add Activity action. */
  function wireMainDayFocus(){
    const d=document.getElementById('masterItineraryDialog');
    if(!d||d.classList.contains('ww-daily-plan-v2'))return;
    const activities=wwMasterActivities();
    d.querySelectorAll('#masterItineraryContent .master-itinerary-day').forEach(day=>{
      const head=day.querySelector('.master-itinerary-dayhead');
      const activity=day.querySelector('.master-itinerary-activity');
      if(!head||!activity)return;
      const item=activities.find(x=>String(x.id)===String(activity.dataset.id));
      const iso=item?.startDate||'';
      if(!iso)return;
      [head.querySelector(':scope > b'),head.querySelector(':scope > span')].filter(Boolean).forEach(el=>{
        el.dataset.wwDailyDate=iso;
        el.setAttribute('role','button');
        el.setAttribute('tabindex','0');
        const open=e=>{
          if(e.type==='keydown'&&e.key!=='Enter'&&e.key!==' ')return;
          e.preventDefault();e.stopPropagation();
          wwOpenDailySchedule(iso);
        };
        el.onclick=open;el.onkeydown=open;
      });
    });
  }

  const priorHierarchy=wwRenderTripHierarchy;
  wwRenderTripHierarchy=function(){
    const d=document.getElementById('masterItineraryDialog');
    if(d){
      const notes=d.querySelector('#masterItineraryTripNotes');
      if(notes){notes.readOnly=false;notes.removeAttribute('tabindex');notes.onpointerdown=null;notes.onclick=null}
    }
    const out=priorHierarchy.apply(this,arguments);
    wireMainDayFocus();
    return out;
  };
  wwRenderMasterItinerary=wwRenderTripHierarchy;

  const priorTripOpen=wwOpenTripItinerary;
  wwOpenTripItinerary=function(){
    const out=priorTripOpen.apply(this,arguments);
    wireMainDayFocus();
    return out;
  };
})();



/* === WozzaWorld — Daily Plan surgical intrinsic DAY column 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyIntrinsicDay031026)return;
  window.__wwDailyIntrinsicDay031026=true;
  const st=document.createElement('style');
  st.id='ww-daily-intrinsic-day-031026';
  st.textContent=`
    /* Laser-focused override: DAY column consumes only its text + padding.
       All reclaimed width belongs to the long-format date. */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      grid-template-columns:max-content minmax(0,1fr) 50px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>b{
      width:auto!important;min-width:0!important;
      padding-left:14px!important;padding-right:14px!important;
      white-space:nowrap!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — Daily Plan surgical top controls right-anchor 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyControlsRight031026)return;
  window.__wwDailyControlsRight031026=true;
  const st=document.createElement('style');
  st.id='ww-daily-controls-right-031026';
  st.textContent=`
    /* ONLY the Daily Plan top flag + close controls: anchor pair to right edge. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      grid-template-columns:auto 1fr auto auto!important;
      width:100%!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      grid-column:1!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      grid-column:3!important;
      margin-left:0!important;
      justify-self:end!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      grid-column:4!important;
      justify-self:end!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — Daily Plan surgical absolute right control cluster 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyAbsoluteControls031026)return;
  window.__wwDailyAbsoluteControls031026=true;
  const st=document.createElement('style');
  st.id='ww-daily-absolute-controls-031026';
  st.textContent=`
    /* Daily Plan ONLY. Stop using the inherited itinerary grid/absolute mix for
       these two controls. Header is the containing block; X is anchored to its
       right edge and flag is anchored immediately to the X's left. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      position:relative!important;
      display:block!important;
      width:100%!important;
      min-height:58px!important;
      padding-right:104px!important;
      box-sizing:border-box!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      display:block!important;
      width:auto!important;
      margin:0!important;
      padding:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      position:absolute!important;
      top:50%!important;
      right:54px!important;
      left:auto!important;
      bottom:auto!important;
      transform:translateY(-50%)!important;
      margin:0!important;
      z-index:3!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      position:absolute!important;
      top:50%!important;
      right:0!important;
      left:auto!important;
      bottom:auto!important;
      transform:translateY(-50%)!important;
      margin:0!important;
      z-index:3!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — compact Daily header + Activity return-origin navigation 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyHeaderActivityReturn031026)return;
  window.__wwDailyHeaderActivityReturn031026=true;

  const st=document.createElement('style');
  st.id='ww-daily-header-single-line-031026';
  st.textContent=`
    /* DAILY PLAN ONLY: title and right controls share one compact centre line. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      position:relative!important;
      display:flex!important;
      align-items:center!important;
      width:100%!important;
      min-height:44px!important;
      padding:0 96px 0 0!important;
      margin:0 0 14px!important;
      box-sizing:border-box!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      display:block!important;width:auto!important;margin:0!important;padding:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head small{
      margin:0!important;line-height:44px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag{
      position:absolute!important;right:50px!important;top:50%!important;
      left:auto!important;bottom:auto!important;transform:translateY(-50%)!important;margin:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      position:absolute!important;right:0!important;top:50%!important;
      left:auto!important;bottom:auto!important;transform:translateY(-50%)!important;margin:0!important;
    }
  `;
  document.head.appendChild(st);

  let origin=null;
  const master=()=>document.getElementById('masterItineraryDialog');
  const activity=()=>document.getElementById('stopItineraryDialog');

  function rememberOrigin(kind,iso=''){
    origin={kind,iso:String(iso||'')};
  }
  function returnToOrigin(){
    const o=origin; origin=null;
    if(!o)return;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      if(activity()?.open)return;
      if(o.kind==='daily'&&o.iso){
        wwOpenDailySchedule(o.iso);
        return;
      }
      if(o.kind==='master'){
        wwRenderMasterItinerary();
        const d=wwMasterItineraryDialog();
        if(!d.open)d.showModal();
      }
    }));
  }

  /* Capture the parent at the actual Add click, before legacy launch code closes it. */
  document.addEventListener('click',e=>{
    const d=master();
    if(!d?.open)return;
    if(e.target.closest?.('.ww-daily-plan-add')){
      rememberOrigin('daily',d.dataset.wwDailyIso||'');
      return;
    }
    if(e.target.closest?.('#masterItineraryAdd,.ww-day-quick-add')){
      rememberOrigin('master');
    }
  },true);

  /* Multi-stop chooser sits between itinerary and Activity. Preserve the origin
     while choosing a stop rather than allowing that intermediate dialog to replace it. */
  document.addEventListener('click',e=>{
    if(!origin)return;
    if(e.target.closest?.('#itineraryStopChooser .itinerary-stop-options button'))return;
  },true);

  /* Save: wait until the full existing save-wrapper chain has finished. */
  const priorSave=saveStopItinerary;
  saveStopItinerary=function(){
    const hadOrigin=!!origin;
    const out=priorSave.apply(this,arguments);
    if(hadOrigin&&!activity()?.open)returnToOrigin();
    return out;
  };

  /* Close/X/backdrop/Escape eventually produce a native close event, including
     the existing unsaved-changes flow. Return only after Activity is actually shut. */
  const d=itineraryDialog();
  d.addEventListener('close',()=>{
    if(origin)returnToOrigin();
  });
})();



/* === WozzaWorld — Daily title left + seamless Activity parent reveal 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyLeftSmoothReturn031026)return;
  window.__wwDailyLeftSmoothReturn031026=true;

  const st=document.createElement('style');
  st.id='ww-daily-title-left-smooth-return-031026';
  st.textContent=`
    /* DAILY PLAN ONLY: move just the title to the left content edge.
       Flag + X retain their established absolute positions exactly. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      margin-left:0!important;
      padding-left:0!important;
      text-align:left!important;
      transform:none!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head small{
      display:block!important;
      text-align:left!important;
      margin-left:0!important;
      transform:none!important;
    }
  `;
  document.head.appendChild(st);

  /*
    Smooth the return without changing the navigation destination.
    The prior origin-navigation patch restores the parent after Activity's native
    close event. During that tiny gap the underlying Trip screen can paint.
    Cover only that handover with a snapshot-coloured veil; remove it immediately
    after the restored parent has had two animation frames to paint.
  */
  let veil=null;
  function showVeil(){
    if(veil)return;
    veil=document.createElement('div');
    veil.id='wwActivityReturnVeil';
    veil.setAttribute('aria-hidden','true');
    veil.style.cssText=[
      'position:fixed','inset:0','z-index:2147483646',
      'background:#075967','pointer-events:none','opacity:1',
      'transition:opacity 90ms ease-out'
    ].join(';');
    document.body.appendChild(veil);
  }
  function hideVeil(){
    const v=veil;
    if(!v)return;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      v.style.opacity='0';
      setTimeout(()=>{v.remove();if(veil===v)veil=null},100);
    }));
  }

  const activityDialog=()=>document.getElementById('stopItineraryDialog');

  /* Only veil Activity -> itinerary/daily returns. The existing origin code is
     deliberately left untouched and remains responsible for the destination. */
  document.addEventListener('click',e=>{
    const d=activityDialog();
    if(!d?.open)return;
    if(e.target.closest?.('.stop-itinerary-close,.itin-cancel,.stop-itinerary-actions .primary') || e.target===d){
      showVeil();
    }
  },true);

  document.addEventListener('cancel',e=>{
    if(e.target===activityDialog()&&e.target.open)showVeil();
  },true);

  /* Validation/unsaved prompts can leave Activity open; never leave the veil up. */
  document.addEventListener('click',e=>{
    if(e.target.closest?.('#wwActivityUnsavedSaveClose,#wwActivityUnsavedDiscard')){
      showVeil();
    }
    setTimeout(()=>{
      if(activityDialog()?.open)hideVeil();
    },140);
  },true);

  /* Once either parent view is actually opened/rendered, fade the veil away only
     after the browser has painted it. */
  const oldDaily=wwOpenDailySchedule;
  wwOpenDailySchedule=function(){
    const out=oldDaily.apply(this,arguments);
    hideVeil();
    return out;
  };
  const oldMaster=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    const out=oldMaster.apply(this,arguments);
    hideVeil();
    return out;
  };
})();



/* === WozzaWorld — definitive Daily title inset + single Activity return owner 03 Oct 2026 === */
(()=>{
  if(window.__wwDefinitiveActivityReturn031026)return;
  window.__wwDefinitiveActivityReturn031026=true;

  const st=document.createElement('style');
  st.id='ww-definitive-daily-title-return-031026';
  st.textContent=`
    /* DAILY PLAN ONLY: the actual header container owns the left alignment.
       Flag and X keep their established absolute right coordinates. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head{
      padding-left:0!important;
      margin-left:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head>div:first-child{
      position:absolute!important;
      left:0!important;
      top:50%!important;
      transform:translateY(-50%)!important;
      margin:0!important;padding:0!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-head small{
      margin:0!important;padding:0!important;text-align:left!important;
    }
  `;
  document.head.appendChild(st);

  let returnOrigin=null;
  let restoring=false;
  const master=()=>document.getElementById('masterItineraryDialog');
  const activity=()=>document.getElementById('stopItineraryDialog');

  function captureOrigin(){
    const d=master();
    if(!d?.open)return;
    returnOrigin=d.classList.contains('ww-daily-plan-v2')
      ? {kind:'daily',iso:String(d.dataset.wwDailyIso||'')}
      : {kind:'master',iso:''};
  }

  /* Capture before any legacy click/open handler can close the parent. */
  document.addEventListener('click',e=>{
    const d=master();
    if(!d?.open)return;
    if(e.target.closest?.('.ww-daily-plan-add,#masterItineraryAdd,.ww-day-quick-add,#itineraryStopChooser .itinerary-stop-options button')){
      captureOrigin();
    }
  },true);

  /* Also capture programmatic Activity launches while the itinerary is open. */
  const priorOpen=openStopItinerary;
  openStopItinerary=function(){
    if(!returnOrigin)captureOrigin();
    return priorOpen.apply(this,arguments);
  };

  function restoreOrigin(){
    if(restoring||!returnOrigin)return;
    restoring=true;
    const o=returnOrigin;
    returnOrigin=null;

    /* Render the requested parent immediately, not in a later competing callback. */
    const d=wwMasterItineraryDialog();
    if(o.kind==='daily'&&o.iso){
      wwOpenDailySchedule(o.iso);
    }else{
      d.classList.remove('ww-daily-plan-v2');
      wwRenderMasterItinerary();
      if(!d.open)d.showModal();
    }

    requestAnimationFrame(()=>{restoring=false});
  }

  /*
    Final save wrapper. Existing historical wrappers are allowed to persist data,
    but any itinerary they try to reopen is immediately superseded by the one
    captured origin. We do not schedule another delayed navigation callback.
  */
  const priorSave=saveStopItinerary;
  saveStopItinerary=function(){
    const wanted=returnOrigin;
    const out=priorSave.apply(this,arguments);
    const a=activity();

    /* Validation failure: Activity remains open, therefore don't navigate. */
    if(a?.open)return out;

    if(wanted){
      returnOrigin=wanted;
      restoreOrigin();
    }
    return out;
  };

  /*
    Close path: native dialog close is the single hand-off point. Capture phase
    registration is unnecessary; the parent is restored synchronously in the close
    event before the browser gets another animation frame.
  */
  activity()?.addEventListener('close',()=>{
    if(returnOrigin)restoreOrigin();
  });

  /*
    Old wrappers may have queued a master-itinerary reopen with requestAnimationFrame.
    During our return window, force any such late render back to the intended origin
    before paint rather than allowing an intermediate screen to flash.
  */
  const priorMasterRender=wwRenderMasterItinerary;
  wwRenderMasterItinerary=function(){
    if(restoring&&returnOrigin?.kind==='daily'&&returnOrigin.iso){
      return wwOpenDailySchedule(returnOrigin.iso);
    }
    return priorMasterRender.apply(this,arguments);
  };
})();



/* === WozzaWorld — Daily Plan X returns to originating Main Itinerary 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyBackToMaster031026)return;
  window.__wwDailyBackToMaster031026=true;

  const d=wwMasterItineraryDialog();
  if(!d)return;

  let dailyCameFromMaster=false;
  let masterScrollY=0;

  /* The day/date heading on the already-open Main Itinerary is the route into
     Daily Plan. Remember that parent and its scroll position before Daily renders. */
  d.addEventListener('click',e=>{
    if(d.classList.contains('ww-daily-plan-v2'))return;
    const dayHead=e.target.closest?.('.master-itinerary-dayhead,.ww-daily-plan-dayhead');
    if(!dayHead)return;
    if(e.target.closest?.('button'))return;
    dailyCameFromMaster=true;
    masterScrollY=d.scrollTop||d.querySelector('.master-itinerary-shell')?.scrollTop||0;
  },true);

  function backToMaster(e){
    if(!d.open || !d.classList.contains('ww-daily-plan-v2') || !dailyCameFromMaster)return false;
    e?.preventDefault?.();
    e?.stopImmediatePropagation?.();

    dailyCameFromMaster=false;

    /* Re-render in the SAME native dialog instead of closing it. This means
       Trip never becomes visible between Daily Plan and Main Itinerary. */
    d.classList.remove('ww-daily-plan-v2');
    delete d.dataset.wwDailyIso;
    wwRenderMasterItinerary();

    requestAnimationFrame(()=>{
      d.scrollTop=masterScrollY;
      const shell=d.querySelector('.master-itinerary-shell');
      if(shell) shell.scrollTop=masterScrollY;
    });
    return true;
  }

  /* X is a Back action only when Daily Plan originated from Main Itinerary. */
  d.addEventListener('click',e=>{
    if(e.target.closest?.('.master-itinerary-close')) backToMaster(e);
  },true);

  /* Android/browser Back / Escape should follow the same stack. */
  d.addEventListener('cancel',e=>{
    if(d.classList.contains('ww-daily-plan-v2') && dailyCameFromMaster){
      e.preventDefault();
      backToMaster(e);
    }
  },true);
})();



/* === WozzaWorld — definitive Main Itinerary -> Daily back-stack + Daily date width 03 Oct 2026 === */
(()=>{
  if(window.__wwDailyOriginDateWidthDeep031026)return;
  window.__wwDailyOriginDateWidthDeep031026=true;

  /*
    Do not infer origin from a particular header wrapper: the existing itinerary
    code already marks the real clickable day/date controls with data-ww-daily-date.
  */
  let masterDailyOrigin=null;
  const master=()=>document.getElementById('masterItineraryDialog');

  document.addEventListener('pointerdown',e=>{
    const d=master();
    if(!d?.open || d.classList.contains('ww-daily-plan-v2'))return;
    const hit=e.target.closest?.('[data-ww-daily-date]');
    if(!hit)return;
    const iso=String(hit.dataset.wwDailyDate||'');
    if(!iso)return;
    const shell=d.querySelector('.master-itinerary-shell');
    masterDailyOrigin={
      iso,
      dialogScroll:d.scrollTop||0,
      shellScroll:shell?.scrollTop||0
    };
  },true);

  /* Keyboard activation of the same marked day/date controls. */
  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const d=master();
    if(!d?.open || d.classList.contains('ww-daily-plan-v2'))return;
    const hit=e.target.closest?.('[data-ww-daily-date]');
    if(!hit)return;
    const iso=String(hit.dataset.wwDailyDate||'');
    if(!iso)return;
    const shell=d.querySelector('.master-itinerary-shell');
    masterDailyOrigin={iso,dialogScroll:d.scrollTop||0,shellScroll:shell?.scrollTop||0};
  },true);

  function restoreMainFromDaily(e){
    const d=master();
    if(!d?.open || !d.classList.contains('ww-daily-plan-v2') || !masterDailyOrigin)return false;

    e?.preventDefault?.();
    e?.stopImmediatePropagation?.();

    const origin=masterDailyOrigin;
    masterDailyOrigin=null;

    /* Same native dialog: Trip page never gets a chance to paint between views. */
    d.classList.remove('ww-daily-plan-v2');
    d.removeAttribute('data-ww-view');
    delete d.dataset.wwDailyIso;
    wwRenderMasterItinerary();

    requestAnimationFrame(()=>{
      d.scrollTop=origin.dialogScroll;
      const shell=d.querySelector('.master-itinerary-shell');
      if(shell)shell.scrollTop=origin.shellScroll;
    });
    return true;
  }

  /* Capture before the original close handler bound on the X. */
  document.addEventListener('click',e=>{
    const d=master();
    if(!d?.open || !d.classList.contains('ww-daily-plan-v2'))return;
    if(e.target.closest?.('.master-itinerary-close'))restoreMainFromDaily(e);
  },true);

  /* Browser/Android back follows the same stack. */
  master()?.addEventListener('cancel',e=>{
    if(master()?.classList.contains('ww-daily-plan-v2')&&masterDailyOrigin){
      e.preventDefault();
      restoreMainFromDaily(e);
    }
  },true);

  const st=document.createElement('style');
  st.id='ww-daily-date-width-deepfix-031026';
  st.textContent=`
    /*
      Daily schedule header: DAY owns only its intrinsic text width.
      Reduce its horizontal padding from the earlier 14px-per-side rule so the
      full weekday/date receives the reclaimed width. Plus column is unchanged.
    */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      grid-template-columns:max-content minmax(0,1fr) 50px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>b{
      width:auto!important;
      min-width:0!important;
      padding-left:9px!important;
      padding-right:9px!important;
      white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>span{
      min-width:0!important;
      white-space:nowrap!important;
      overflow:visible!important;
      text-overflow:clip!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — Calendar back-stack + Country Trips header 03 Oct 2026 === */
(()=>{
  if(window.__wwCalendarDailyBackAndTripsHeader031026)return;
  window.__wwCalendarDailyBackAndTripsHeader031026=true;

  let dailyOpenedFromTripCalendar=false;

  /*
    The real route is Itinerary -> trip range Calendar -> Daily Plan.
    Mark that exact transition at the calendar day itself.
  */
  document.addEventListener('click',e=>{
    const day=e.target.closest?.('#wozzaCalendarOverlay .wozza-calendar-day[data-cal-date]');
    if(!day || wozzaCalendarMode!=='range' || day.disabled)return;
    dailyOpenedFromTripCalendar=true;
  },true);

  function returnDailyToCalendar(e){
    const d=document.getElementById('masterItineraryDialog');
    if(!dailyOpenedFromTripCalendar || !d?.open || !d.classList.contains('ww-daily-plan-v2'))return false;

    e?.preventDefault?.();
    e?.stopImmediatePropagation?.();
    dailyOpenedFromTripCalendar=false;

    /*
      Restore the itinerary IN THE SAME master dialog first, then put the
      existing trip calendar back on top. Therefore:
      Daily X -> Calendar, Calendar X -> Itinerary.
    */
    d.classList.remove('ww-daily-plan-v2');
    d.classList.remove('ww-daily-plan-mode');
    d.removeAttribute('data-ww-view');
    delete d.dataset.wwDailyIso;
    wwRenderMasterItinerary();

    requestAnimationFrame(()=>{
      wozzaCalendarOpenTripRange();
    });
    return true;
  }

  /* Beat the master dialog's original direct X -> close handler. */
  document.addEventListener('click',e=>{
    if(e.target.closest?.('#masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close')){
      returnDailyToCalendar(e);
    }
  },true);

  /* Android/browser back follows the same stack. */
  document.getElementById('masterItineraryDialog')?.addEventListener('cancel',e=>{
    if(returnDailyToCalendar(e))e.preventDefault();
  },true);

  /* Country page: exact supplied Trips artwork above Add a trip. */
  function ensureCountryTripsHeader(){
    const add=document.getElementById('addCountryTrip');
    if(!add)return;
    let img=document.getElementById('countryTripsHeaderAsset');
    if(!img){
      img=document.createElement('img');
      img.id='countryTripsHeaderAsset';
      img.className='country-trips-header-asset';
      img.src='trips-country-header.png';
      img.alt='Trips';
      add.insertAdjacentElement('beforebegin',img);
    }
  }
  ensureCountryTripsHeader();

  const st=document.createElement('style');
  st.id='ww-country-trips-header-style-031026';
  st.textContent=`
    #countrySheet .country-trips-header-asset{
      display:block!important;
      width:min(100%,430px)!important;
      height:auto!important;
      object-fit:contain!important;
      margin:12px auto 8px!important;
      pointer-events:none!important;
      user-select:none!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — corrected real-target itinerary + Daily sizing 03 Oct 2026 === */
(()=>{
  if(window.__wwRealTargetSizing031026)return;
  window.__wwRealTargetSizing031026=true;
  const st=document.createElement('style');
  st.id='ww-real-target-sizing-031026';
  st.textContent=`
    /* MAIN ITINERARY ONLY.
       Existing winning size is 44px, so exact 10% reduction = 39.6px. */
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-close,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-capture,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag{
      width:39.6px!important;
      height:39.6px!important;
      min-width:39.6px!important;
      min-height:39.6px!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot img{
      width:36.49px!important;
      height:36.49px!important;
      min-width:36.49px!important;
      min-height:36.49px!important;
      max-width:36.49px!important;
      max-height:36.49px!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-capture svg{
      width:24.3px!important;height:24.3px!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-close{
      font-size:25.2px!important;
    }

    /* DAILY PLAN ONLY: smaller label + less padding genuinely frees date width. */
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead{
      grid-template-columns:max-content minmax(0,1fr) 50px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>b{
      width:auto!important;
      min-width:0!important;
      font-size:13px!important;
      line-height:1!important;
      padding-left:5px!important;
      padding-right:5px!important;
      white-space:nowrap!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .ww-daily-plan-dayhead>span{
      min-width:0!important;
      white-space:nowrap!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — freeze main banner on Home + Passport only 03 Oct 2026 === */
(()=>{
  if(window.__wwFreezeHomePassportHeader031026)return;
  window.__wwFreezeHomePassportHeader031026=true;
  const st=document.createElement('style');
  st.id='ww-freeze-home-passport-header-031026';
  st.textContent=`
    /*
      Trips already has the desired behaviour, so leave it alone.
      Home + Passport use a fixed topbar and receive matching top clearance.
      Every rule explicitly excludes map-view: World View/Map is untouched.
    */
    body:not(.map-view):has(.screen[data-screen="home"].active) .topbar,
    body:not(.map-view):has(.screen[data-screen="me"].active) .topbar{
      position:fixed!important;
      top:0!important;
      left:0!important;
      right:0!important;
      width:100%!important;
      z-index:130!important;
      box-sizing:border-box!important;
    }
    body:not(.map-view):has(.screen[data-screen="home"].active) main,
    body:not(.map-view):has(.screen[data-screen="me"].active) main{
      padding-top:var(--ww-fixed-main-header-h,96px)!important;
    }
    @media(max-width:560px){
      body:not(.map-view):has(.screen[data-screen="home"].active) main,
      body:not(.map-view):has(.screen[data-screen="me"].active) main{
        padding-top:var(--ww-fixed-main-header-h,92px)!important;
      }
    }
  `;
  document.head.appendChild(st);

  /* Measure the real rendered header so the content starts exactly below it. */
  const sync=()=>{
    if(document.body.classList.contains('map-view'))return;
    const active=document.querySelector('.screen.active')?.dataset.screen;
    if(active!=='home'&&active!=='me')return;
    const bar=document.querySelector('.topbar');
    if(bar)document.documentElement.style.setProperty(
      '--ww-fixed-main-header-h',
      `${Math.ceil(bar.getBoundingClientRect().height)}px`
    );
  };
  document.addEventListener('click',e=>{
    if(e.target.closest?.('.header-nav-item'))requestAnimationFrame(()=>requestAnimationFrame(sync));
  },true);
  window.addEventListener('resize',sync,{passive:true});
  requestAnimationFrame(()=>requestAnimationFrame(sync));
})();



/* === WozzaWorld — surgical UI wording cleanup 03 Oct 2026 === */
(()=>{
  if(window.__wwSurgicalWording031026)return;
  window.__wwSurgicalWording031026=true;

  const exact=new Map([
    ['TRAVEL COMPANIONS','COMPANIONS'],
    ['Travel Companions','Companions'],
    ['THE VIBE','VIBE'],
    ['The Vibe','Vibe'],
    ['TO DO LIST','TASKS'],
    ['To Do List','Tasks'],
    ['TRIP RATING','RATING'],
    ['Trip Rating','Rating']
  ]);

  function clean(root=document){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];
    while(walker.nextNode())nodes.push(walker.currentNode);
    for(const n of nodes){
      const raw=n.nodeValue||'',trim=raw.trim(),rep=exact.get(trim);
      if(!rep)continue;
      n.nodeValue=raw.replace(trim,rep);
    }

    /* Trip-card itinerary prompt only: state comes from whether itinerary exists.
       No arrow/span survives. */
    root.querySelectorAll?.('.itinerary-swipe-prompt').forEach(p=>{
      const has=wwMasterActivities?.().length>0;
      p.textContent=has?'ITINERARY':'CREATE ITINERARY';
      p.setAttribute('aria-label',has?'Itinerary':'Create itinerary');
    });
  }

  clean();
  const mo=new MutationObserver(ms=>{
    for(const m of ms){
      for(const n of m.addedNodes){
        if(n.nodeType===1||n.nodeType===11)clean(n);
      }
    }
  });
  mo.observe(document.body,{childList:true,subtree:true});

  /* Re-clean after common editor/view actions that update existing text in place. */
  document.addEventListener('click',()=>requestAnimationFrame(()=>clean()),true);
})();



/* === WozzaWorld — surgical Trip editor + Activity wording polish 03 Oct 2026 === */
(()=>{
  if(window.__wwBase2TripEditorPolish031026)return;
  window.__wwBase2TripEditorPolish031026=true;
  const st=document.createElement('style');
  st.id='ww-base2-trip-editor-polish-031026';
  st.textContent=`
    /* Single-stop expanded editor: destination is already shown in the field below.
       Keep "Details", remove only the repeated destination name. */
    #tripDestinationStops .trip-destination-stop.single-stop:not(.collapsed) .trip-stop-summary{
      display:none!important;
    }

    /* Bring Details onto the same visual left line as the form-field text. */
    #tripDestinationStops .trip-destination-stop.single-stop:not(.collapsed) .trip-stop-number{
      font-size:14px!important;
      font-weight:700!important;
      margin-left:28px!important;
      margin-right:auto!important;
    }

    /* Existing button is 11px; a restrained increase without making it shout. */
    #tripDialog .itinerary-swipe-prompt{
      font-size:14px!important;
      font-weight:800!important;
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — surgical trip Details alignment + bin polish 03 Oct 2026 === */
(()=>{
  if(window.__wwTripDetailsBinPolish031026)return;
  window.__wwTripDetailsBinPolish031026=true;
  const st=document.createElement('style');
  st.id='ww-trip-details-bin-polish-031026';
  st.textContent=`
    /* Align Details with the left edge of the form fields below. */
    #tripDestinationStops .trip-destination-stop.single-stop:not(.collapsed) .trip-stop-number{
      margin-left:0!important;
    }

    /* Only the stop delete/bin circular button: +2% and a subtle shadow. */
    #tripDestinationStops .trip-destination-stop .trip-stop-remove{
      transform:scale(1.02)!important;
      box-shadow:0 3px 8px rgba(16,48,58,.14)!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld — surgical exact collapse-shadow bin + Details +2px 03 Oct 2026 === */
(()=>{
  if(window.__wwExactCollapseShadowDetails2px031026)return;
  window.__wwExactCollapseShadowDetails2px031026=true;

  const st=document.createElement('style');
  st.id='ww-exact-collapse-shadow-details-2px-031026';
  st.textContent=`
    /* Details: previous alignment + 2px to the right. */
    #tripDestinationStops .trip-destination-stop.single-stop:not(.collapsed) .trip-stop-number{
      margin-left:2px!important;
    }

    /* Preserve requested +2% size on the actual stop bin button. */
    #tripDestinationStops .trip-destination-stop .remove-destination-stop{
      transform:scale(1.02)!important;
      transform-origin:center!important;
    }
  `;
  document.head.appendChild(st);

  /* Copy the collapse button's actual computed shadow so the two circles match exactly,
     regardless of which stylesheet supplies that shadow. */
  const sync=()=>{
    document.querySelectorAll('#tripDestinationStops .trip-destination-stop').forEach(row=>{
      const collapse=row.querySelector('.stop-collapse-toggle');
      const bin=row.querySelector('.remove-destination-stop');
      if(!collapse||!bin)return;
      const shadow=getComputedStyle(collapse).boxShadow;
      bin.style.setProperty('box-shadow',shadow,'important');
    });
  };
  sync();
  requestAnimationFrame(sync);
  const host=document.getElementById('tripDestinationStops');
  if(host)new MutationObserver(()=>requestAnimationFrame(sync)).observe(host,{childList:true,subtree:true});
})();

/* === WozzaWorld — surgical final circle sizing / spacing polish 03 Oct 2026 === */
(()=>{
  if(window.__wwCircleSizingSpacing031026)return;
  window.__wwCircleSizingSpacing031026=true;
  const st=document.createElement('style');
  st.id='ww-circle-sizing-spacing-031026';
  st.textContent=`
    /* Pending 1px refinement: Details is now 3px right from the aligned baseline. */
    #tripDestinationStops .trip-destination-stop.single-stop:not(.collapsed) .trip-stop-number{
      margin-left:3px!important;
    }

    /* DAILY PLAN ONLY — flag + close 15% smaller; positions remain right aligned. */
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{
      width:37.4px!important;height:37.4px!important;
      min-width:37.4px!important;min-height:37.4px!important;
      box-shadow:0 3px 8px rgba(16,48,58,.14)!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot img{
      width:34.45px!important;height:34.45px!important;
      min-width:34.45px!important;min-height:34.45px!important;
      max-width:34.45px!important;max-height:34.45px!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-close{font-size:23.8px!important;}

    /* MAIN ITINERARY ONLY — current 39.6px controls reduced by a further exact 7%. */
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-close,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-capture,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag{
      width:36.828px!important;height:36.828px!important;
      min-width:36.828px!important;min-height:36.828px!important;
      box-shadow:0 3px 8px rgba(16,48,58,.14)!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-close{right:0!important;font-size:23.44px!important;}
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-capture{right:44.828px!important;}
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag{right:89.656px!important;}
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-head{padding-right:135px!important;}
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot img{
      width:33.936px!important;height:33.936px!important;
      min-width:33.936px!important;min-height:33.936px!important;
      max-width:33.936px!important;max-height:33.936px!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-capture svg{
      width:22.6px!important;height:22.6px!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — surgical itinerary flag ring removal 03 Oct 2026 === */
(()=>{
  if(window.__wwItineraryFlagRingRemoval031026)return;
  window.__wwItineraryFlagRingRemoval031026=true;
  const st=document.createElement('style');
  st.id='ww-itinerary-flag-ring-removal-031026';
  st.textContent=`
    /* Flag controls only: remove the light/cream halo by letting the flag artwork
       fill the full circular control. Preserve the existing control shadow. */
    #masterItineraryDialog .master-itinerary-trip-flag{
      padding:0!important;
      border:0!important;
      background:transparent!important;
    }
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot,
    #masterItineraryDialog.ww-daily-plan-v2 .master-itinerary-trip-flag-slot img{
      width:37.4px!important;height:37.4px!important;
      min-width:37.4px!important;min-height:37.4px!important;
      max-width:37.4px!important;max-height:37.4px!important;
      border:0!important;outline:0!important;
    }
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot,
    #masterItineraryDialog:not(.ww-daily-plan-v2) .master-itinerary-trip-flag-slot img{
      width:36.828px!important;height:36.828px!important;
      min-width:36.828px!important;min-height:36.828px!important;
      max-width:36.828px!important;max-height:36.828px!important;
      border:0!important;outline:0!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — Country > Trip top-layer handoff 03 Oct 2026 === */
(()=>{
  if(window.__wwCountryTripTopLayerHandoff031026)return;
  window.__wwCountryTripTopLayerHandoff031026=true;

  /*
    Country cards live inside #wwCountryTopDialog. When a trip is opened from
    #countryTrips, retire ONLY that native top-layer host before the existing
    trip-card handler opens #tripDialog. Do not call closeSheet(), do not alter
    countryCardOrigin, and do not replace any Trip / Itinerary / Daily flag
    handlers. This makes the Country > Trip route enter the same modal state as
    Trips overview > Trip while preserving all existing return-path logic.
  */
  document.addEventListener('click',e=>{
    const card=e.target.closest?.('#countryTrips [data-open-trip]');
    if(!card)return;
    const top=document.getElementById('wwCountryTopDialog');
    if(top?.open)top.close();
    if(top)top.style.pointerEvents='none';
  },true);

  /* Keyboard activation follows the same handoff before the card's existing
     keydown handler opens the trip editor. */
  document.addEventListener('keydown',e=>{
    if(e.key!=='Enter'&&e.key!==' ')return;
    const card=e.target.closest?.('#countryTrips [data-open-trip]');
    if(!card)return;
    const top=document.getElementById('wwCountryTopDialog');
    if(top?.open)top.close();
    if(top)top.style.pointerEvents='none';
  },true);
})();

/* === WozzaWorld — Country card fresh-open scroll + popup blur 03 Oct 2026 === */
(()=>{
  if(window.__wwCountryFreshOpenBlur031026)return;
  window.__wwCountryFreshOpenBlur031026=true;

  const st=document.createElement('style');
  st.id='ww-country-fresh-open-blur-031026';
  st.textContent=`
    #wwCountryTopDialog::backdrop{
      background:rgba(5,34,51,.32)!important;
      backdrop-filter:blur(7px)!important;
      -webkit-backdrop-filter:blur(7px)!important;
    }
  `;
  document.head.appendChild(st);

  /* Preserve the complete existing Country/navigation stack. Only reset the
     Country sheet's own scroll position for each fresh Country opening. */
  const previousOpenCountry=openCountry;
  openCountry=function(){
    const sheet=document.getElementById('countrySheet');
    if(sheet){
      sheet.scrollTop=0;
      try{sheet.scrollTo({top:0,left:0,behavior:'auto'})}catch(_){}
    }
    const result=previousOpenCountry.apply(this,arguments);
    const opened=document.getElementById('countrySheet');
    if(opened){
      opened.scrollTop=0;
      requestAnimationFrame(()=>{
        opened.scrollTop=0;
        try{opened.scrollTo({top:0,left:0,behavior:'auto'})}catch(_){}
      });
    }
    return result;
  };
})();


/* === WozzaWorld — route-aware Country popup polish 04 Oct 2026 === */
(()=>{
  if(window.__wwCountryRoutePopupPolish041026)return;
  window.__wwCountryRoutePopupPolish041026=true;

  const st=document.createElement('style');
  st.id='ww-country-route-popup-polish-041026';
  st.textContent=`
    /* The Country host is deliberately non-modal so the main app navigation
       remains usable. Its own sheet/backdrop still receive normal interaction. */
    #wwCountryTopDialog{
      z-index:9000!important;
      pointer-events:none!important;
    }
    #wwCountryTopDialog #sheetBackdrop,
    #wwCountryTopDialog #countrySheet{
      pointer-events:auto!important;
    }
    body .topbar{
      z-index:9002!important;
    }

    /* Home keeps the established bottom-sheet presentation and no blur. */
    #wwCountryTopDialog.ww-country-from-home #sheetBackdrop.open{
      background:rgba(0,0,0,.25)!important;
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }

    /* Everywhere else: slightly larger 94% centred popup. */
    #wwCountryTopDialog.ww-country-popup #sheetBackdrop.open{
      background:rgba(5,34,51,.32)!important;
      backdrop-filter:blur(7px)!important;
      -webkit-backdrop-filter:blur(7px)!important;
    }
    #wwCountryTopDialog.ww-country-popup #countrySheet.sheet{
      left:50%!important;
      top:50%!important;
      right:auto!important;
      bottom:auto!important;
      width:min(94vw,700px)!important;
      max-width:94vw!important;
      height:auto!important;
      max-height:94dvh!important;
      border-radius:28px!important;
      transform:translate(-50%,-50%)!important;
      padding-bottom:calc(24px + env(safe-area-inset-bottom))!important;
    }

    /* Hide only the visible Country scrollbar; scrolling remains enabled. */
    #countrySheet{
      scrollbar-width:none!important;
      -ms-overflow-style:none!important;
    }
    #countrySheet::-webkit-scrollbar{
      width:0!important;
      height:0!important;
      display:none!important;
    }
  `;
  document.head.appendChild(st);

  const previousOpenCountry=openCountry;
  openCountry=function(c,origin=null){
    /* Use one consistent Country popup presentation from every entry point. */
    window.__wwOpeningCountryFromHome041026=false;
    const result=previousOpenCountry.call(this,c,origin);
    const host=document.getElementById('wwCountryTopDialog');
    if(host){
      host.classList.remove('ww-country-from-home');
      host.classList.add('ww-country-popup');
      host.style.pointerEvents='none';
    }
    return result;
  };

  /* Top navigation always wins over an open Country card. Dismiss Country
     without restoring its old origin; the nav's existing handler then performs
     the requested Home / Map / Trips / Passport navigation normally. */
  document.addEventListener('click',e=>{
    const nav=e.target.closest?.('.header-nav-item');
    if(!nav)return;
    const sheet=document.getElementById('countrySheet');
    if(!sheet?.classList.contains('open'))return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden','true');
    document.getElementById('sheetBackdrop')?.classList.remove('open');
    countryCardOrigin=null;
    const host=document.getElementById('wwCountryTopDialog');
    if(host?.open)host.close();
    if(host)host.style.pointerEvents='none';
  },true);
})();


/* === WozzaWorld — Country four-action row + Fast Facts move 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryFourActions051026)return;
  window.__wwCountryFourActions051026=true;

  const st=document.createElement('style');
  st.id='ww-country-four-actions-051026';
  st.textContent=`
    /* Hero Fast Facts control moves into the action row. */
    #countrySheet #countryInfoButton{display:none!important}

    /* Four equal actions; existing three retain their original buttons/handlers. */
    #countrySheet .choice-grid,
    #countrySheet .country-status-grid{
      grid-template-columns:repeat(4,minmax(0,1fr))!important;
      gap:8px!important;
    }
    #countrySheet .choice-grid button,
    #countrySheet .country-status-grid button,
    #countrySheet .ww-country-fast-facts-action{
      min-width:0!important;
      padding-left:5px!important;
      padding-right:5px!important;
      font-size:clamp(11px,3vw,15px)!important;
      line-height:1.12!important;
    }
    #countrySheet .choice-grid button svg,
    #countrySheet .country-status-grid button svg{
      max-width:42px!important;
      max-height:42px!important;
    }
    #countrySheet .ww-country-fast-facts-action{
      appearance:none;
      border:1px solid rgba(21,48,71,.10);
      background:#fff;
      color:#153047;
      border-radius:22px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:9px;
      min-height:118px;
      font-family:inherit;
      cursor:pointer;
      box-shadow:0 3px 10px rgba(16,48,58,.035);
    }
    #countrySheet .ww-country-fast-facts-icon{
      width:42px;height:42px;border-radius:50%;
      display:grid;place-items:center;
      background:#087db5;color:#fff;
      border:2px solid #fff;
      box-shadow:0 0 0 1.5px #087db5;
      font-family:Georgia,serif;
      font-size:34px;font-weight:700;font-style:italic;
      line-height:1;
      box-sizing:border-box;
    }
    #countrySheet .ww-country-fast-facts-label{white-space:nowrap}

    @media (max-width:390px){
      #countrySheet .choice-grid,
      #countrySheet .country-status-grid{gap:6px!important}
      #countrySheet .ww-country-fast-facts-action{border-radius:18px!important}
      #countrySheet .ww-country-fast-facts-icon{width:38px;height:38px;font-size:30px}
    }
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet .ww-country-fast-facts-action{
        min-height:54px!important;padding:4px!important;border-radius:14px!important;
        gap:3px!important;font-size:11px!important;
      }
      #countrySheet .ww-country-fast-facts-icon{
        width:26px!important;height:26px!important;font-size:20px!important;
      }
    }
  `;
  document.head.appendChild(st);

  function installFastFactsAction(){
    const grid=document.querySelector('#countrySheet .choice-grid, #countrySheet .country-status-grid');
    if(!grid)return;
    let btn=grid.querySelector('.ww-country-fast-facts-action');
    if(!btn){
      btn=document.createElement('button');
      btn.type='button';
      btn.className='ww-country-fast-facts-action';
      btn.innerHTML='<span class="ww-country-fast-facts-icon" aria-hidden="true">i</span><span class="ww-country-fast-facts-label">Fast Facts</span>';
      btn.setAttribute('aria-label','Fast Facts');
      grid.appendChild(btn);
    }
    btn.onclick=e=>{
      e.preventDefault();
      e.stopPropagation();
      const existing=document.getElementById('countryInfoButton');
      if(existing) existing.click();
      else if(typeof openCountryInfo==='function') openCountryInfo();
    };
  }

  const priorRender=renderSheet;
  renderSheet=function(){
    const out=priorRender.apply(this,arguments);
    installFastFactsAction();
    return out;
  };
})();



/* === WozzaWorld — Country action cards shorter + subtle lift 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryActionCardsPolish051026)return;
  window.__wwCountryActionCardsPolish051026=true;
  const st=document.createElement('style');
  st.id='ww-country-action-cards-polish-051026';
  st.textContent=`
    #countrySheet .choice-grid button,
    #countrySheet .country-status-grid button,
    #countrySheet .ww-country-fast-facts-action{
      min-height:104px!important;
      padding-top:11px!important;
      padding-bottom:10px!important;
      box-shadow:0 3px 8px rgba(16,48,58,.08)!important;
    }
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet .choice-grid button,
      #countrySheet .country-status-grid button,
      #countrySheet .ww-country-fast-facts-action{
        min-height:48px!important;
        box-shadow:0 2px 6px rgba(16,48,58,.08)!important;
      }
    }
  `;
  document.head.appendChild(st);
})();



/* === WozzaWorld — Country Trips section redesign 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryTripsRedesign051026)return;
  window.__wwCountryTripsRedesign051026=true;

  const st=document.createElement('style');
  st.id='ww-country-trips-redesign-051026';
  st.textContent=`
    /* Retire the old illustrated Trips asset completely. */
    #countrySheet #countryTripsHeaderAsset,
    #countrySheet .country-trips-header-asset{
      display:none!important;
    }

    #countrySheet .ww-country-trips-section-head{
      display:flex!important;
      align-items:center!important;
      justify-content:space-between!important;
      margin:20px 2px 12px!important;
      padding:0 2px!important;
    }
    #countrySheet .ww-country-trips-section-head strong{
      color:#153047!important;
      font-size:20px!important;
      line-height:1!important;
      font-weight:900!important;
      letter-spacing:.18em!important;
    }
    #countrySheet .ww-country-trips-section-head span{
      color:#61737c!important;
      font-size:16px!important;
      line-height:1!important;
    }

    #countrySheet #countryTrips{
      display:flex!important;
      flex-direction:column!important;
      gap:9px!important;
      margin:0!important;
    }
    #countrySheet .country-trip-card{
      position:relative!important;
      display:flex!important;
      align-items:center!important;
      min-height:96px!important;
      padding:14px 42px 14px 92px!important;
      margin:0!important;
      border-radius:22px!important;
      background:#fff!important;
      box-shadow:0 3px 10px rgba(16,48,58,.055)!important;
      box-sizing:border-box!important;
    }
    #countrySheet .country-trip-card::before{
      content:"✈"!important;
      position:absolute!important;
      left:15px!important;
      top:50%!important;
      transform:translateY(-50%)!important;
      width:58px!important;
      height:58px!important;
      border-radius:50%!important;
      display:grid!important;
      place-items:center!important;
      background:#def6fb!important;
      color:#087f8d!important;
      font-size:31px!important;
      font-weight:900!important;
      line-height:1!important;
    }
    #countrySheet .country-trip-card::after{
      content:""!important;
      position:absolute!important;
      left:82px!important;
      top:14px!important;
      bottom:14px!important;
      width:1px!important;
      background:#d7e0e2!important;
    }
    #countrySheet .country-trip-copy{
      min-width:0!important;
      text-align:left!important;
    }
    #countrySheet .country-trip-copy strong{
      display:block!important;
      color:#153047!important;
      font-size:18px!important;
      line-height:1.15!important;
      font-weight:850!important;
    }
    #countrySheet .country-trip-copy p{
      margin:4px 0 5px!important;
      color:#61737c!important;
      font-size:14px!important;
      line-height:1.2!important;
    }
    #countrySheet .country-trip-rating{
      margin:0!important;
      color:#f5bd00!important;
      font-size:20px!important;
      line-height:1!important;
      letter-spacing:0!important;
    }
    #countrySheet .country-trip-side{
      position:absolute!important;
      right:14px!important;
      top:50%!important;
      transform:translateY(-50%)!important;
      display:flex!important;
      align-items:center!important;
      gap:5px!important;
    }
    #countrySheet .country-trip-chevron{
      color:#617984!important;
      font-size:36px!important;
      font-weight:400!important;
      line-height:1!important;
    }
    #countrySheet .country-trip-countdown{
      font-size:9px!important;
      padding:5px 7px!important;
    }
    #countrySheet .country-no-trips{
      margin:16px 0 20px!important;
      text-align:center!important;
    }

    /* Existing Add Trip button/function stays intact, just belongs to this cleaner section. */
    #countrySheet #addCountryTrip{
      margin-top:10px!important;
    }
    #countrySheet .ww-country-trips-divider{
      display:block!important;
      border:0!important;
      border-top:1px solid #d7e0e2!important;
      margin:18px 0 17px!important;
    }

    @media(max-width:390px){
      #countrySheet .country-trip-card{
        min-height:90px!important;
        padding-left:84px!important;
      }
      #countrySheet .country-trip-card::before{
        left:13px!important;width:54px!important;height:54px!important;font-size:29px!important;
      }
      #countrySheet .country-trip-card::after{left:75px!important}
      #countrySheet .country-trip-copy strong{font-size:17px!important}
      #countrySheet .country-trip-copy p{font-size:13px!important}
      #countrySheet .country-trip-rating{font-size:18px!important}
    }
  `;
  document.head.appendChild(st);

  function refreshTripsSection(){
    const list=document.getElementById('countryTrips');
    const add=document.getElementById('addCountryTrip');
    if(!list||!add)return;

    /* Old asset is no longer part of the Country layout. */
    document.getElementById('countryTripsHeaderAsset')?.remove();

    let head=list.previousElementSibling;
    if(!head?.classList.contains('ww-country-trips-section-head')){
      head=document.createElement('div');
      head.className='ww-country-trips-section-head';
      list.insertAdjacentElement('beforebegin',head);
    }
    const n=countryTrips(currentCountry).length;
    head.innerHTML=`<strong>TRIPS</strong><span>${n} ${n===1?'trip':'trips'}</span>`;

    let divider=add.nextElementSibling;
    if(!divider?.classList.contains('ww-country-trips-divider')){
      divider=document.createElement('hr');
      divider.className='ww-country-trips-divider';
      add.insertAdjacentElement('afterend',divider);
    }
  }

  const previousRenderSheet=renderSheet;
  renderSheet=function(){
    const out=previousRenderSheet.apply(this,arguments);
    refreshTripsSection();
    return out;
  };

  refreshTripsSection();
})();


/* === WozzaWorld — Country Trips final placement + asset consistency 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryTripsFinalPolish051026)return;
  window.__wwCountryTripsFinalPolish051026=true;

  const st=document.createElement('style');
  st.id='ww-country-trips-final-polish-051026';
  st.textContent=`
    /* Plane circle stays as designed, but the plane itself is the app's existing air.png asset. */
    #countrySheet .country-trip-card::before{content:""!important}
    #countrySheet .ww-country-trip-plane{
      position:absolute!important;left:15px!important;top:50%!important;
      transform:translateY(-50%)!important;
      width:58px!important;height:58px!important;border-radius:50%!important;
      display:grid!important;place-items:center!important;
      background:#def6fb!important;pointer-events:none!important;
    }
    #countrySheet .ww-country-trip-plane img{
      width:34px!important;height:34px!important;object-fit:contain!important;
      display:block!important;
    }
    #countrySheet #addCountryTrip{
      margin:12px 0 0!important;
      box-shadow:0 3px 8px rgba(16,48,58,.08)!important;
    }
    /* More breathing room after the Trips divider before Summary begins. */
    #countrySheet .ww-country-trips-divider{
      margin:20px 0 26px!important;
    }
    @media(max-width:390px){
      #countrySheet .ww-country-trip-plane{left:13px!important;width:54px!important;height:54px!important}
      #countrySheet .ww-country-trip-plane img{width:32px!important;height:32px!important}
    }
  `;
  document.head.appendChild(st);

  function polishTrips(){
    const list=document.getElementById('countryTrips');
    const add=document.getElementById('addCountryTrip');
    if(!list||!add)return;

    /* Exact requested order: heading -> trip cards -> Add Trip -> divider -> Summary. */
    if(list.nextElementSibling!==add)list.insertAdjacentElement('afterend',add);
    let divider=add.nextElementSibling;
    if(!divider?.classList.contains('ww-country-trips-divider')){
      document.querySelector('#countrySheet .ww-country-trips-divider')?.remove();
      divider=document.createElement('hr');
      divider.className='ww-country-trips-divider';
      add.insertAdjacentElement('afterend',divider);
    }

    /* Use the existing WozzaWorld plane asset, never a recreated glyph. */
    list.querySelectorAll('.country-trip-card').forEach(card=>{
      let icon=card.querySelector('.ww-country-trip-plane');
      if(!icon){
        icon=document.createElement('span');
        icon.className='ww-country-trip-plane';
        icon.setAttribute('aria-hidden','true');
        icon.innerHTML='<img src="air.png" alt="">';
        card.prepend(icon);
      }
    });

    /* Make TRIPS use the exact live typography of the SUMMARY heading. */
    const tripsTitle=document.querySelector('#countrySheet .ww-country-trips-section-head strong');
    const summaryTitle=document.querySelector('#countrySheet .country-info-summary h3');
    if(tripsTitle&&summaryTitle){
      const cs=getComputedStyle(summaryTitle);
      ['fontFamily','fontSize','fontWeight','letterSpacing','lineHeight','color','textTransform'].forEach(p=>tripsTitle.style[p]=cs[p]);
    }
  }

  const previousRenderSheet=renderSheet;
  renderSheet=function(){
    const out=previousRenderSheet.apply(this,arguments);
    polishTrips();
    return out;
  };
  polishTrips();
})();

/* === WozzaWorld — Country card cumulative polish from baseline (10), 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryBaseline10Cumulative051026)return;
  window.__wwCountryBaseline10Cumulative051026=true;
  const st=document.createElement('style');
  st.id='ww-country-baseline10-cumulative-051026';
  st.textContent=`
    /* Plane: near-horizontal with the nose lifted a final 3 degrees. */
    #countrySheet .ww-country-trip-plane img{
      transform:rotate(42deg)!important;
      transform-origin:center!important;
    }

    /* Four country actions: true square ratio, preserving the existing four-column widths. */
    #countrySheet .choice-grid button,
    #countrySheet .country-status-grid button,
    #countrySheet .ww-country-fast-facts-action{
      aspect-ratio:1 / 1!important;
      min-height:0!important;
      height:auto!important;
      padding-top:8px!important;
      padding-bottom:8px!important;
      justify-content:center!important;
    }

    /* Countdown sits visually on the same row as the trip name. */
    #countrySheet .country-trip-countdown{
      transform:translateY(-16px)!important;
    }

    /* Trips + Summary use the same midpoint heading size. */
    #countrySheet .ww-country-trips-section-head strong,
    #countrySheet .country-info-summary h3{
      font-size:17px!important;
    }

    /* Matching divider above Trips; lower divider after Add a trip stays in place. */
    #countrySheet .ww-country-trips-top-divider{
      display:block!important;
      border:0!important;
      border-top:1px solid #d7e0e2!important;
      margin:20px 0 17px!important;
    }
  `;
  document.head.appendChild(st);

  function applyCountryPolish(){
    const list=document.getElementById('countryTrips');
    const head=document.querySelector('#countrySheet .ww-country-trips-section-head');
    if(!list||!head)return;
    let top=head.previousElementSibling;
    if(!top?.classList.contains('ww-country-trips-top-divider')){
      document.querySelector('#countrySheet .ww-country-trips-top-divider')?.remove();
      top=document.createElement('hr');
      top.className='ww-country-trips-top-divider';
      head.insertAdjacentElement('beforebegin',top);
    }
    const add=document.getElementById('addCountryTrip');
    if(add && !add.nextElementSibling?.classList.contains('ww-country-trips-divider')){
      const lower=document.createElement('hr');
      lower.className='ww-country-trips-divider';
      add.insertAdjacentElement('afterend',lower);
    }
  }

  const previousRenderSheet=renderSheet;
  renderSheet=function(){
    const out=previousRenderSheet.apply(this,arguments);
    applyCountryPolish();
    return out;
  };
  applyCountryPolish();
})();

/* === WozzaWorld — Country background scroll lock + Fast Facts icon polish 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryScrollLockInfoIcon051026)return;
  window.__wwCountryScrollLockInfoIcon051026=true;

  const st=document.createElement('style');
  st.id='ww-country-scroll-lock-info-icon-051026';
  st.textContent=`
    /* Keep the Fast Facts mark perfectly circular and 10% less dominant. */
    #countrySheet .ww-country-fast-facts-icon{
      aspect-ratio:1 / 1!important;
      flex:0 0 auto!important;
      flex-shrink:0!important;
      border-radius:50%!important;
      transform:scale(.9)!important;
      transform-origin:center!important;
    }
  `;
  document.head.appendChild(st);

  let locked=false,lockedY=0;
  const lockBackground=()=>{
    if(locked)return;
    locked=true;
    lockedY=window.scrollY||window.pageYOffset||0;
    const b=document.body;
    b.dataset.wwCountryScrollLocked='1';
    b.style.position='fixed';
    b.style.top=`-${lockedY}px`;
    b.style.left='0';
    b.style.right='0';
    b.style.width='100%';
    b.style.overflow='hidden';
  };
  const unlockBackground=()=>{
    if(!locked)return;
    locked=false;
    const b=document.body;
    const y=lockedY;
    delete b.dataset.wwCountryScrollLocked;
    b.style.position='';
    b.style.top='';
    b.style.left='';
    b.style.right='';
    b.style.width='';
    b.style.overflow='';
    window.scrollTo(0,y);
  };
  const sync=()=>{
    const sheet=document.getElementById('countrySheet');
    sheet?.classList.contains('open')?lockBackground():unlockBackground();
  };

  const sheet=document.getElementById('countrySheet');
  if(sheet)new MutationObserver(sync).observe(sheet,{attributes:true,attributeFilter:['class','aria-hidden']});
  sync();
})();

/* === WozzaWorld — Country hero cleanup + banner-logo refresh 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryHeroCleanup051026)return;
  window.__wwCountryHeroCleanup051026=true;

  const st=document.createElement('style');
  st.id='ww-country-hero-cleanup-051026';
  st.textContent=`
    /* The current hero only needs flag + a fluid name/rating stack. Retire the
       legacy summary-pills row so it cannot reserve vertical space. */
    #countrySheet .country-hero-minimal{
      align-items:center!important;
    }
    #countrySheet .country-hero-copy{
      min-width:0!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:flex-start!important;
      justify-content:center!important;
    }
    #countrySheet .country-title-row{
      display:block!important;
      width:100%!important;
      min-width:0!important;
      padding:0!important;
      margin:0!important;
    }
    #countrySheet .country-title-row h2,
    #countrySheet .country-hero-copy h2{
      display:block!important;
      width:100%!important;
      min-width:0!important;
      margin:0!important;
      padding:0!important;
      line-height:1.02!important;
      white-space:normal!important;
      overflow-wrap:normal!important;
      word-break:normal!important;
    }
    #countrySheet .country-hero-lower-row,
    #countrySheet .country-summary-pills{
      display:none!important;
      height:0!important;
      min-height:0!important;
      margin:0!important;
      padding:0!important;
      transform:none!important;
    }
    #countrySheet .country-rating-row{
      display:block!important;
      width:auto!important;
      min-height:0!important;
      margin:8px 0 0!important;
      padding:0!important;
    }
    #countrySheet .country-rating-row .country-rating-summary,
    #countrySheet .country-rating-summary{
      display:block!important;
      width:auto!important;
      min-height:0!important;
      margin:0!important;
      padding:0!important;
      line-height:1!important;
      align-self:auto!important;
    }
    #countrySheet .country-rating-summary span{
      display:block!important;
      line-height:1!important;
      white-space:nowrap!important;
    }
    /* Fast Facts now lives in the four-action row, not in the hero. */
    #countrySheet .country-rating-row #countryInfoButton{display:none!important}

    @media (max-width:430px){
      #countrySheet .country-rating-row{margin-top:7px!important}
    }
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet .country-title-row,
      #countrySheet .country-title-row h2,
      #countrySheet .country-hero-copy h2{padding:0!important;margin:0!important}
      #countrySheet .country-rating-row{margin-top:5px!important}
    }
  `;
  document.head.appendChild(st);

  const logo=document.getElementById('homeLogo');
  if(logo){
    logo.setAttribute('aria-label','Refresh WozzaWorld');
    logo.title='Refresh WozzaWorld';
    logo.style.cursor='pointer';
    logo.onclick=e=>{
      e.preventDefault();
      e.stopPropagation();
      window.location.reload();
    };
  }
})();

/* === WozzaWorld — Info rename + nested scroll lock + divider cleanup 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryInfoRenameScrollDivider051026)return;
  window.__wwCountryInfoRenameScrollDivider051026=true;

  const st=document.createElement('style');
  st.id='ww-country-info-rename-scroll-divider-051026';
  st.textContent=`
    /* Additional 5% reduction from the already-polished 90% Info icon. */
    #countrySheet .ww-country-fast-facts-icon{transform:scale(.855)!important}
    /* While Info is open, the country card behind it must stay still. */
    #countrySheet.ww-info-background-locked{overflow:hidden!important;touch-action:none!important;overscroll-behavior:none!important}
  `;
  document.head.appendChild(st);

  function renameInfoUI(){
    const action=document.querySelector('#countrySheet .ww-country-fast-facts-action');
    if(action){
      const label=action.querySelector('.ww-country-fast-facts-label');
      if(label)label.textContent='Info';
      action.setAttribute('aria-label','Info');
      action.title='Info';
    }
    const dialog=document.getElementById('countryInfoDialog');
    if(dialog){
      dialog.querySelectorAll('h1,h2,h3,h4,strong,span').forEach(el=>{
        if(/^\s*fast\s+facts\s*$/i.test(el.textContent||''))el.textContent='Info';
      });
      dialog.setAttribute('aria-label','Info');
    }
  }

  function cleanLowerDividers(){
    const add=document.getElementById('addCountryTrip');
    const summary=document.querySelector('#countrySheet .country-info-summary');
    if(!add||!summary)return;
    let node=add.nextElementSibling,kept=false;
    while(node&&node!==summary){
      const next=node.nextElementSibling;
      const isDivider=node.matches('hr,.ww-country-trips-divider') || node.classList.contains('country-divider');
      if(isDivider){
        if(!kept){
          kept=true;
          node.classList.add('ww-country-trips-divider');
        }else node.remove();
      }
      node=next;
    }
  }

  const dialog=document.getElementById('countryInfoDialog');
  const sheet=document.getElementById('countrySheet');
  const syncInfoLock=()=>{
    if(!dialog||!sheet)return;
    const open=dialog.open||dialog.hasAttribute('open');
    sheet.classList.toggle('ww-info-background-locked',open);
    if(open){
      if(sheet.dataset.wwInfoScrollTop==null)sheet.dataset.wwInfoScrollTop=String(sheet.scrollTop||0);
    }else if(sheet.dataset.wwInfoScrollTop!=null){
      sheet.scrollTop=Number(sheet.dataset.wwInfoScrollTop)||0;
      delete sheet.dataset.wwInfoScrollTop;
    }
  };
  if(dialog)new MutationObserver(()=>{renameInfoUI();syncInfoLock()}).observe(dialog,{attributes:true,attributeFilter:['open'],childList:true,subtree:true});

  const previousRender=renderSheet;
  renderSheet=function(){
    const out=previousRender.apply(this,arguments);
    renameInfoUI();
    cleanLowerDividers();
    return out;
  };

  const previousOpenInfo=openCountryInfo;
  openCountryInfo=async function(){
    const out=await previousOpenInfo.apply(this,arguments);
    renameInfoUI();
    syncInfoLock();
    return out;
  };
  const previousCloseInfo=closeCountryInfo;
  closeCountryInfo=function(){
    const out=previousCloseInfo.apply(this,arguments);
    requestAnimationFrame(syncInfoLock);
    return out;
  };

  renameInfoUI();
  cleanLowerDividers();
  syncInfoLock();
})();

/* === WozzaWorld — Country summary/activity/transport polish 05 Oct 2026 === */
(()=>{
  if(window.__wwCountrySummaryActivitiesTransport051026)return;
  window.__wwCountrySummaryActivitiesTransport051026=true;

  const st=document.createElement('style');
  st.id='ww-country-summary-activities-transport-051026';
  st.textContent=`
    /* Belgium-sized minimum hero, still free to grow for wrapped country names. */
    #countrySheet .country-hero-minimal{min-height:201px!important;box-sizing:border-box!important}
    @media(max-width:430px){#countrySheet .country-hero-minimal{min-height:150px!important}}

    /* One divider only: the explicit divider after Add a trip owns this separation. */
    #countrySheet .country-info-summary{border-top:0!important}

    /* Activity summary card uses the same card shell as Destinations / Travel companions. */
    #countrySheet .ww-country-activity-icons{display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin-top:8px}
    #countrySheet .ww-country-activity-icon{width:34px;height:34px;display:grid;place-items:center;flex:0 0 34px}
    #countrySheet .ww-country-activity-icon img{display:block;width:30px;height:30px;object-fit:contain}
    #countrySheet .ww-country-activity-icon .ww-activity-type-asset{width:30px!important;height:30px!important;object-fit:contain!important}
  `;
  document.head.appendChild(st);

  function tripByCard(card){
    const id=card?.dataset?.openTrip;
    return (state.trips||[]).find(t=>String(t.id||'')===String(id||''));
  }
  function countryTripMode(t){
    if(!t)return '';
    const modes=tripTravelModes(t);
    return modes[0]||t.travelMode||'';
  }
  function modeAsset(mode){
    const m=String(mode||'').toLowerCase();
    const map={air:'air.png',plane:'air.png',sea:'sea.png',ferry:'sea.png',cruise:'sea.png',train:'transport-train.png',car:'car.png',campervan:'campervan.png',motorhome:'campervan.png',narrowboat:'narrowboat.png',motorbike:'motorbike.png',bicycle:'bicycle.png','on foot':'on-foot.png',other:'other.png'};
    return map[m]||((m.includes('coach')||m.includes('bus'))?'coach-bus.png':'air.png');
  }
  function polishCountryTripTransport(){
    document.querySelectorAll('#countryTrips .country-trip-card').forEach(card=>{
      const t=tripByCard(card),img=card.querySelector('.ww-country-trip-plane img');
      if(img&&t){
        const mode=countryTripMode(t);
        img.src=modeAsset(mode);
        img.alt='';
        img.parentElement?.setAttribute('title',mode||'Travel');
      }
    });
  }
  function countryActivityCategories(country){
    const seen=new Map();
    countryTrips(country).forEach(t=>{
      (t.destinations||[]).forEach(d=>{
        const belongs=!d.country||sameCountry(d.country,country)||tripCountries(t).some(c=>sameCountry(c,country));
        if(!belongs)return;
        (d.itinerary||[]).forEach(a=>{
          const cat=String(a?.category||'').trim();
          if(cat&&!seen.has(cat.toLowerCase()))seen.set(cat.toLowerCase(),cat);
        });
      });
    });
    return [...seen.values()];
  }
  function activityIconMarkup(category){
    try{return itineraryIcon({category})}catch{return ''}
  }
  function polishCountrySummary(){
    const summary=document.querySelector('#countrySheet .country-info-summary');
    if(!summary||!currentCountry)return;
    summary.querySelector('.ww-country-activities-card')?.remove();
    const cats=countryActivityCategories(currentCountry);
    if(!cats.length)return;
    const card=document.createElement('div');
    card.className='ww-country-activities-card';
    card.innerHTML=`<strong>Activities</strong><div class="ww-country-activity-icons" aria-label="Activity types">${cats.map(cat=>`<span class="ww-country-activity-icon" title="${esc(cat)}">${activityIconMarkup(cat)}</span>`).join('')}</div>`;
    summary.appendChild(card);
  }
  function enforceSingleDivider(){
    const add=document.getElementById('addCountryTrip'),summary=document.querySelector('#countrySheet .country-info-summary');
    if(!add||!summary)return;
    const dividers=[];let n=add.nextElementSibling;
    while(n&&n!==summary){if(n.matches('hr,.ww-country-trips-divider,.country-divider'))dividers.push(n);n=n.nextElementSibling}
    dividers.slice(1).forEach(x=>x.remove());
  }
  function apply(){polishCountryTripTransport();polishCountrySummary();enforceSingleDivider()}
  const prev=renderSheet;
  renderSheet=function(){const out=prev.apply(this,arguments);apply();return out};
  apply();
})();

/* === WozzaWorld — Country Info alignment + country countdown placement 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryInfoCountdownPolish051026)return;
  window.__wwCountryInfoCountdownPolish051026=true;

  const st=document.createElement('style');
  st.id='ww-country-info-countdown-polish-051026';
  st.textContent=`
    /* Match the Info label baseline to the other three country actions. */
    #countrySheet .ww-country-fast-facts-label{transform:translateY(-7px)!important}

    /* Another 4% reduction from the current Info icon size. */
    #countrySheet .ww-country-fast-facts-icon{transform:scale(.821)!important}

    /* Country page only: countdown belongs below the trip date, not in the side rail. */
    #countrySheet .country-trip-copy .country-trip-countdown{
      display:table!important;
      position:static!important;
      transform:none!important;
      margin:2px 0 5px!important;
      width:max-content!important;
      max-width:100%!important;
      font-size:9px!important;
      line-height:1.1!important;
      padding:5px 7px!important;
    }
    #countrySheet .country-trip-side{right:14px!important}
  `;
  document.head.appendChild(st);

  function polish(){
    document.querySelectorAll('#countryTrips .country-trip-card').forEach(card=>{
      const copy=card.querySelector('.country-trip-copy');
      const date=copy?.querySelector('p');
      const badge=card.querySelector('.country-trip-countdown');
      if(copy&&date&&badge&&badge.parentElement!==copy)date.insertAdjacentElement('afterend',badge);
      else if(copy&&date&&badge&&badge.previousElementSibling!==date)date.insertAdjacentElement('afterend',badge);
    });
  }

  const prev=renderSheet;
  renderSheet=function(){const out=prev.apply(this,arguments);polish();return out};
  polish();
})();

/* === WozzaWorld — surgical country/transport picker corrections 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryTransportPickerCorrections051026)return;
  window.__wwCountryTransportPickerCorrections051026=true;

  const st=document.createElement('style');
  st.id='ww-country-transport-picker-corrections-051026';
  st.textContent=`
    /* Info label: use the exact native action-label position; no independent nudge. */
    #countrySheet .ww-country-fast-facts-label{transform:none!important}

    /* Activities summary has been withdrawn from the country page only. */
    #countrySheet .ww-country-activities-card{display:none!important}

    /* Country trip transport icons: only Plane receives the optical rotation correction. */
    #countrySheet .ww-country-trip-plane img{transform:none!important;transform-origin:center!important}
    #countrySheet .ww-country-trip-plane img.ww-country-mode-plane{transform:rotate(42deg)!important}

    /* Transport picker deliberately reuses the Activity Type library geometry. */
    #wwTransportPicker.ww-activity-type-picker{max-height:min(82vh,720px)!important}
    #wwTransportPicker .ww-type-picker-shell{max-height:min(82vh,720px)!important;overflow:auto!important;overscroll-behavior:contain!important}
    #wwTransportPicker .ww-type-picker-option span{overflow-wrap:anywhere}
  `;
  document.head.appendChild(st);

  function removeCountryActivities(){
    document.querySelectorAll('#countrySheet .ww-country-activities-card').forEach(x=>x.remove());
  }

  function correctCountryTransportIcons(){
    document.querySelectorAll('#countryTrips .country-trip-card').forEach(card=>{
      const img=card.querySelector('.ww-country-trip-plane img');
      if(!img)return;
      const src=(img.getAttribute('src')||'').split('/').pop().toLowerCase();
      img.classList.toggle('ww-country-mode-plane',src==='air.png');
    });
  }

  function applyCountryCorrections(){removeCountryActivities();correctCountryTransportIcons()}
  const previousRenderSheet=renderSheet;
  renderSheet=function(){const out=previousRenderSheet.apply(this,arguments);applyCountryCorrections();return out};
  applyCountryCorrections();

  const TRANSPORT_ASSETS={
    'Plane':'air.png','Train':'transport-train.png','Cruise':'sea.png','Ferry':'sea.png','Car':'car.png',
    'Campervan':'campervan.png','Motorhome':'campervan.png','Narrowboat':'narrowboat.png',
    'Coach / Bus':'coach-bus.png','Motorbike':'motorbike.png','Bicycle':'bicycle.png',
    'On foot':'on-foot.png','Other':'other.png'
  };

  function transportPicker(){
    let p=document.getElementById('wwTransportPicker');
    if(p)return p;
    p=document.createElement('dialog');
    p.id='wwTransportPicker';
    p.className='ww-activity-type-picker';
    p.innerHTML=`<div class="ww-type-picker-shell">
      <div class="ww-type-picker-head"><div><small>TRAVELLING BY</small><h3>Choose transport</h3></div><button type="button" class="ww-type-picker-close" aria-label="Close">×</button></div>
      <div class="ww-type-picker-grid">${TRAVEL_MODES.map(name=>`<button type="button" class="ww-type-picker-option" data-mode="${esc(name)}"><img src="${TRANSPORT_ASSETS[name]||'other.png'}" alt=""><span>${esc(name)}</span></button>`).join('')}</div>
    </div>`;
    document.body.appendChild(p);
    p.querySelector('.ww-type-picker-close').onclick=()=>p.close();
    p.addEventListener('click',e=>{if(e.target===p)p.close()});
    return p;
  }

  function openTransportPicker(select){
    const p=transportPicker();
    p._targetSelect=select;
    const current=String(select.value||'').toLowerCase()==='air'?'Plane':String(select.value||'').toLowerCase()==='sea'?'Ferry':select.value;
    p.querySelectorAll('.ww-type-picker-option').forEach(b=>{
      b.classList.toggle('selected',b.dataset.mode===current);
      b.onclick=()=>{
        select.value=b.dataset.mode;
        select.dispatchEvent(new Event('change',{bubbles:true}));
        syncWozzaSelect(select);
        p.close();
      };
    });
    if(!p.open)p.showModal();
  }

  const previousOpenWozzaSelect=openWozzaSelect;
  openWozzaSelect=function(select){
    if(select?.classList?.contains('trip-travel-mode')){openTransportPicker(select);return}
    return previousOpenWozzaSelect.apply(this,arguments);
  };
})();

/* === WozzaWorld — Country Info label measured baseline alignment 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryInfoMeasuredBaseline051026)return;
  window.__wwCountryInfoMeasuredBaseline051026=true;

  const st=document.createElement('style');
  st.id='ww-country-info-measured-baseline-051026';
  st.textContent=`
    /* The offset is measured from the rendered native labels, rather than guessed. */
    #countrySheet .ww-country-fast-facts-label{
      transform:translateY(var(--ww-info-label-y,0px))!important;
    }
  `;
  document.head.appendChild(st);

  function textRectFor(button,labels){
    if(!button)return null;
    const wanted=new Set(labels.map(x=>x.toLowerCase()));
    const walker=document.createTreeWalker(button,NodeFilter.SHOW_TEXT);
    let node;
    while((node=walker.nextNode())){
      const value=String(node.nodeValue||'').trim().replace(/\s+/g,' ');
      if(!wanted.has(value.toLowerCase()))continue;
      const range=document.createRange();
      range.selectNodeContents(node);
      const rect=range.getBoundingClientRect();
      if(rect.width||rect.height)return rect;
    }
    return null;
  }

  function alignInfoLabel(){
    const sheet=document.getElementById('countrySheet');
    const info=sheet?.querySelector('.ww-country-fast-facts-action');
    const label=info?.querySelector('.ww-country-fast-facts-label');
    if(!sheet||!info||!label)return;

    /* Always measure Info from its unshifted position. */
    label.style.setProperty('--ww-info-label-y','0px');

    const nativeButtons=[...sheet.querySelectorAll('.choice-grid button, .country-status-grid button')]
      .filter(b=>!b.classList.contains('ww-country-fast-facts-action'));
    const nativeRects=nativeButtons
      .map(b=>textRectFor(b,['Visited','Visiting','Bucket list']))
      .filter(Boolean);
    const infoRect=textRectFor(info,['Info']);
    if(!nativeRects.length||!infoRect)return;

    /* All three native labels are the source of truth. Median avoids any one odd measurement. */
    const centres=nativeRects.map(r=>r.top+r.height/2).sort((a,b)=>a-b);
    const target=centres[Math.floor(centres.length/2)];
    const current=infoRect.top+infoRect.height/2;
    const delta=target-current;
    label.style.setProperty('--ww-info-label-y',`${delta.toFixed(2)}px`);
  }

  function queueAlign(){
    requestAnimationFrame(()=>requestAnimationFrame(alignInfoLabel));
  }

  const previousRenderSheet=renderSheet;
  renderSheet=function(){
    const out=previousRenderSheet.apply(this,arguments);
    queueAlign();
    return out;
  };

  window.addEventListener('resize',queueAlign,{passive:true});
  if(document.fonts?.ready)document.fonts.ready.then(queueAlign).catch(()=>{});
  queueAlign();
})();

/* === WozzaWorld — Country hero opens Info, not Google — 05 Oct 2026 === */
(()=>{
  if(window.__wwCountryHeroInfo051026)return;
  window.__wwCountryHeroInfo051026=true;

  function bindCountryHeroInfo(){
    const name=document.getElementById('countryName');
    const flag=document.getElementById('countryFlag');
    const openInfo=e=>{
      e?.preventDefault?.();
      e?.stopPropagation?.();
      if(typeof openCountryInfo==='function')openCountryInfo();
    };
    [name,flag].forEach(el=>{
      if(!el)return;
      el.setAttribute('role','button');
      el.setAttribute('tabindex','0');
      el.setAttribute('title','Open country info');
      el.onclick=openInfo;
      el.onkeydown=e=>{
        if(e.key==='Enter'||e.key===' '){e.preventDefault();openInfo(e)}
      };
    });
  }

  const previousRender=renderSheet;
  renderSheet=function(){
    const out=previousRender.apply(this,arguments);
    bindCountryHeroInfo();
    return out;
  };

  /* Capture-phase guard also replaces any older delegated Google-search
     handler attached to the hero flag/title. */
  document.addEventListener('click',e=>{
    const target=e.target.closest?.('#countryFlag,#countryName');
    if(!target||!target.closest('#countrySheet'))return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if(typeof openCountryInfo==='function')openCountryInfo();
  },true);

  bindCountryHeroInfo();
})();

/* === WozzaWorld — Info page Google search button, app.js-only — 05 Oct 2026 === */
(()=>{
  if(window.__wwInfoSearchAppOnly051026)return;
  window.__wwInfoSearchAppOnly051026=true;

  function ensureInfoControlSizing(){
    if(document.getElementById('wwInfoControlSizing051026'))return;
    const style=document.createElement('style');
    style.id='wwInfoControlSizing051026';
    style.textContent=`
      #countryInfoDialog #countryInfoClose,
      #countryInfoDialog #countryInfoGoogleSearch{
        width:36.3px!important;height:36.3px!important;min-width:36.3px!important;min-height:36.3px!important;
      }
      #countryInfoDialog #countryInfoClose{font-size:24.75px!important}
      #countryInfoDialog #countryInfoGoogleSearch svg{width:16.5px!important;height:16.5px!important}
      #countryInfoDialog #countryInfoGoogleSearch{right:60.3px!important}
      @media(orientation:landscape) and (max-height:650px){
        #countryInfoDialog #countryInfoClose,
        #countryInfoDialog #countryInfoGoogleSearch{width:28.05px!important;height:28.05px!important;min-width:28.05px!important;min-height:28.05px!important}
        #countryInfoDialog #countryInfoClose{font-size:19.8px!important}
        #countryInfoDialog #countryInfoGoogleSearch svg{width:13.2px!important;height:13.2px!important}
        #countryInfoDialog #countryInfoGoogleSearch{right:52.05px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function ensureInfoSearchButton(){
    ensureInfoControlSizing();
    const dialog=document.getElementById('countryInfoDialog');
    const close=document.getElementById('countryInfoClose');
    if(!dialog||!close)return;

    let search=document.getElementById('countryInfoGoogleSearch');
    if(!search){
      search=document.createElement('button');
      search.type='button';
      search.id='countryInfoGoogleSearch';
      search.className='country-facts-close';
      search.setAttribute('aria-label','Search this country on Google');
      search.setAttribute('title','Search Google');
      search.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true" style="width:20px;height:20px;display:block;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="M15.5 15.5L21 21"></path></svg>';
      close.parentNode.insertBefore(search,close);
    }

    /* Match the existing close control without changing index.html/styles.css. */
    Object.assign(search.style,{
      right:'58px',
      boxShadow:'0 4px 10px rgba(15,56,70,.18)',
      display:'grid',
      placeItems:'center'
    });
    close.style.boxShadow='0 4px 10px rgba(15,56,70,.18)';

    search.onclick=e=>{
      e.preventDefault();
      e.stopPropagation();
      const country=String(currentCountry||'').trim();
      if(country)window.open(`https://www.google.com/search?q=${encodeURIComponent(country)}`,'_blank','noopener');
    };
  }

  const originalOpenCountryInfo=openCountryInfo;
  openCountryInfo=async function(){
    ensureInfoSearchButton();
    return originalOpenCountryInfo.apply(this,arguments);
  };
  ensureInfoSearchButton();
})();


/* === WozzaWorld — typed activity links 06 Oct 2026 === */
(()=>{
  const TYPES={
    website:{label:'Website',icon:'globe'},
    directions:{label:'Directions',icon:'pin'},
    email:{label:'Email address',icon:'mail'},
    other:{label:'Other',icon:'link'}
  };
  const iconSvg=kind=>{
    const paths={
      globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
      pin:'<path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/>',
      mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
      link:'<path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1 0l-2 2A5 5 0 0 0 12 20.1l1.1-1.1"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths[kind]||paths.link}</svg>`;
  };
  const inferType=l=>{
    const t=String(l?.type||'').toLowerCase(); if(TYPES[t])return t;
    const n=String(l?.name||'').trim().toLowerCase(),u=String(l?.url||'').trim().toLowerCase();
    if(u.startsWith('mailto:')||n==='email'||n==='email address')return 'email';
    if(n==='directions'||n==='map / location'||/google\.[^/]+\/maps|maps\.app|maps\.google|goo\.gl\/maps/.test(u))return 'directions';
    if(n==='website')return 'website';
    return 'other';
  };
  const normalLink=l=>{
    const type=inferType(l), raw=String(l?.url||'').trim();
    return {url:raw,name:type==='other'?String(l?.name||'').trim():TYPES[type].label,type};
  };
  const hrefFor=l=>{
    let u=String(l?.url||'').trim();
    if(inferType(l)==='email'){
      u=u.replace(/^mailto:/i,'').trim();
      return u?`mailto:${u}`:'';
    }
    return u;
  };

  wwActivityLinks=function(item={}){
    if(Array.isArray(item.links))return item.links.filter(x=>x&&(x.url||x.name)).map(normalLink);
    const a=[];
    if(item.locationUrl)a.push({url:item.locationUrl,name:'Directions',type:'directions'});
    if(item.url)a.push({url:item.url,name:'Website',type:'website'});
    return a;
  };

  function picker(){
    let p=document.getElementById('wwLinkTypePicker');
    if(p)return p;
    p=document.createElement('dialog');
    p.id='wwLinkTypePicker'; p.className='ww-activity-type-picker ww-link-type-picker';
    p.innerHTML=`<div class="ww-type-picker-shell">
      <div class="ww-type-picker-head"><div><small>LINK TYPE</small><h3>Choose a link</h3></div><button type="button" class="ww-type-picker-close" aria-label="Close">×</button></div>
      <div class="ww-type-picker-grid">${Object.entries(TYPES).map(([key,x])=>`<button type="button" class="ww-type-picker-option" data-link-type="${key}"><span class="ww-link-picker-icon">${iconSvg(x.icon)}</span><span>${x.label}</span></button>`).join('')}</div>
    </div>`;
    document.body.appendChild(p);
    p.querySelector('.ww-type-picker-close').onclick=()=>p.close();
    p.addEventListener('click',e=>{if(e.target===p)p.close()});
    return p;
  }
  function otherTitlePopup(currentTitle='',cb){
    let p=document.getElementById('wwOtherLinkTitleDialog');
    if(!p){
      p=document.createElement('dialog');p.id='wwOtherLinkTitleDialog';p.className='ww-other-link-title-dialog';
      p.innerHTML=`<div class="ww-other-link-title-shell"><div class="ww-other-link-title-head"><div><small>LINK TITLE</small><h3>Name this link</h3></div><button type="button" class="ww-other-link-title-close" aria-label="Close">×</button></div><input class="ww-other-link-title-input" type="text" maxlength="50" placeholder="e.g. Restaurant menu"><button type="button" class="ww-other-link-title-save">SAVE</button></div>`;
      document.body.appendChild(p);
      p.querySelector('.ww-other-link-title-close').onclick=()=>p.close();
      p.addEventListener('click',e=>{if(e.target===p)p.close()});
    }
    const input=p.querySelector('.ww-other-link-title-input'),save=p.querySelector('.ww-other-link-title-save');
    input.value=currentTitle==='Other'?'':currentTitle;
    const commit=()=>{const title=input.value.trim();if(!title){input.focus();return}p.close();cb(title)};
    save.onclick=commit;
    input.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();commit()}};
    if(!p.open)p.showModal();
    setTimeout(()=>input.focus(),0);
  }
  function chooseType(current,currentTitle,cb){
    const p=picker();
    p.querySelectorAll('[data-link-type]').forEach(b=>{
      b.classList.toggle('selected',b.dataset.linkType===current);
      b.onclick=()=>{
        const type=b.dataset.linkType;p.close();
        if(type==='other')otherTitlePopup(current==='other'?currentTitle:'',title=>cb(type,title));
        else cb(type,TYPES[type].label);
      };
    });
    if(!p.open)p.showModal();
  }
  function rowMarkup(x={},i=0){
    x=normalLink(x); const type=x.type||'website',meta=TYPES[type]||TYPES.other;
    const val=type==='email'?String(x.url||'').replace(/^mailto:/i,''):String(x.url||'');
    const placeholder=type==='email'?'name@example.com':'https://…';
    const display=type==='other'?(x.name||'Other'):meta.label;
    return `<div class="itin-link-row ww-typed-link-row" data-link-row="${i}" data-link-type="${type}" data-link-name="${esc(x.name||display)}">
      <input class="itin-link-url" type="${type==='email'?'email':'text'}" placeholder="${placeholder}" value="${esc(val)}">
      <button type="button" class="ww-link-type-choose" aria-label="Choose link type"><span class="ww-link-type-icon">${iconSvg(meta.icon)}</span><span>${esc(display)}</span></button>
      <button type="button" class="itin-link-remove" aria-label="Add link">+</button>
    </div>`;
  }
  wwRenderLinkRows=function(d,links=[]){
    const host=d.querySelector('#itinLinksRows');if(!host)return;
    const committed=(links||[]).filter(x=>x&&(x.url||x.name)).map(normalLink);
    const render=()=>{
      const vals=[...committed,{url:'',name:'Website',type:'website'}];
      host.innerHTML=vals.map(rowMarkup).join('');
      const rows=$$('.itin-link-row',host);
      rows.forEach((r,i)=>{
        const isAdd=i===rows.length-1, btn=r.querySelector('.itin-link-remove'), typeBtn=r.querySelector('.ww-link-type-choose');
        btn.classList.toggle('itin-link-add',isAdd); btn.classList.toggle('itin-link-delete',!isAdd);
        if(isAdd)btn.textContent='+';
        else{btn.textContent='';btn.innerHTML='<span aria-hidden="true"></span>'}
        btn.setAttribute('aria-label',isAdd?'Add another link':'Remove link');
        typeBtn.onclick=()=>chooseType(r.dataset.linkType,r.dataset.linkName||'',(type,title)=>{
          const u=r.querySelector('.itin-link-url')?.value.trim()||'',n=type==='other'?title:TYPES[type].label;
          if(isAdd){vals[i]={url:u,name:n,type}; host.innerHTML=''; const draft=[...committed,vals[i]]; wwRenderLinkRows(d,draft)}
          else{committed[i]={...committed[i],url:u,name:n,type};render()}
        });
        if(isAdd)btn.onclick=()=>{
          let url=r.querySelector('.itin-link-url')?.value.trim()||'', type=r.dataset.linkType||'website';
          const name=type==='other'?(r.dataset.linkName||'Other'):TYPES[type].label;
          if(!url){r.querySelector('.itin-link-url')?.focus();return}
          if(type==='email')url=hrefFor({url,type});
          committed.push({url,name,type});render();
          host.querySelector('.itin-link-row:last-child .itin-link-url')?.focus();
        };
        else btn.onclick=()=>{committed.splice(i,1);render()};
      });
    }; render();
  };
  wwReadLinkRows=function(d){
    return $$('.itin-link-row',d).map(r=>{
      const type=r.dataset.linkType||'website';
      let url=r.querySelector('.itin-link-url')?.value.trim()||'';
      if(type==='email'&&url)url=hrefFor({url,type});
      return {url,name:type==='other'?(r.dataset.linkName||'Other'):TYPES[type].label,type};
    }).filter(x=>x.url);
  };

  /* Decorate the existing read-only links after all inherited quick-info rendering has finished. */
  const previousQuick=wwOpenQuickInfo;
  wwOpenQuickInfo=function(row,id){
    previousQuick(row,id);
    const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id)),body=document.querySelector('#itineraryQuickInfoBody');
    if(!x||!body)return;
    const links=wwActivityLinks(x).filter(l=>l.url);
    body.querySelectorAll('.itinerary-quick-info-link').forEach(a=>a.remove());
    const edit=body.querySelector('.itinerary-quick-info-edit');
    const html=links.map(l=>{const type=inferType(l),m=TYPES[type]||TYPES.other;return `<a class="itinerary-quick-info-link ww-typed-quick-link" href="${esc(hrefFor(l))}" ${type==='email'?'':'target="_blank" rel="noopener"'}><span class="ww-quick-link-icon">${iconSvg(m.icon)}</span><span>${esc(type==='other'?(l.name||'Link'):m.label)}</span><b aria-hidden="true">↗</b></a>`}).join('');
    if(edit)edit.insertAdjacentHTML('beforebegin',html);else body.insertAdjacentHTML('beforeend',html);
  };

  if(!document.getElementById('ww-typed-links-style')){
    const st=document.createElement('style');st.id='ww-typed-links-style';st.textContent=`
      .ww-typed-link-row{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr) auto!important;align-items:center!important}
      .ww-link-type-choose{height:44px!important;border:1px solid rgba(20,55,70,.12)!important;border-radius:16px!important;background:#fff!important;color:#24313b!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;padding:0 10px!important;font:800 12px/1 Inter,sans-serif!important;min-width:0!important}
      .ww-link-type-icon,.ww-link-picker-icon,.ww-quick-link-icon{display:inline-grid!important;place-items:center!important;flex:0 0 auto!important}
      .ww-link-type-icon svg{width:21px!important;height:21px!important}.ww-link-picker-icon svg{width:38px!important;height:38px!important}.ww-quick-link-icon svg{width:20px!important;height:20px!important}
      .ww-link-type-picker .ww-type-picker-option{cursor:pointer!important}
      .ww-link-type-picker .ww-link-picker-icon{color:#24313b!important}
      .ww-typed-quick-link{display:flex!important;align-items:center!important;gap:9px!important}
      .ww-typed-quick-link b{margin-left:auto!important}
      .ww-other-link-title-dialog{border:0!important;padding:0!important;background:transparent!important;max-width:min(90vw,420px)!important;width:100%!important}
      .ww-other-link-title-dialog::backdrop{background:rgba(0,45,58,.58)!important;backdrop-filter:blur(7px)!important}
      .ww-other-link-title-shell{background:#fff0c9!important;border-radius:28px!important;padding:24px!important;box-shadow:0 18px 45px rgba(0,50,60,.28)!important}
      .ww-other-link-title-head{display:flex!important;align-items:flex-start!important;justify-content:space-between!important;gap:16px!important;margin-bottom:18px!important}
      .ww-other-link-title-head small{display:block!important;color:#118ca0!important;font-weight:900!important;letter-spacing:.08em!important;margin-bottom:4px!important}
      .ww-other-link-title-head h3{margin:0!important;color:#183441!important;font-size:28px!important;line-height:1!important}
      .ww-other-link-title-close{width:48px!important;height:48px!important;border:0!important;border-radius:50%!important;background:#fff!important;color:#68777c!important;font-size:34px!important;line-height:1!important}
      .ww-other-link-title-input{width:100%!important;box-sizing:border-box!important;border:1px solid rgba(20,55,70,.15)!important;border-radius:18px!important;background:#fff!important;padding:15px 16px!important;font:700 16px/1.2 Inter,sans-serif!important;color:#183441!important;margin-bottom:14px!important}
      .ww-other-link-title-save{width:100%!important;height:48px!important;border:0!important;border-radius:18px!important;background:#118ca0!important;color:#fff!important;font:900 15px/1 Inter,sans-serif!important;letter-spacing:.05em!important}
      @media(max-width:390px){.ww-link-type-choose{font-size:11px!important;padding:0 7px!important}.ww-link-type-icon svg{width:19px!important;height:19px!important}}
    `;document.head.appendChild(st);
  }
})();



/* Contact email + telephone links on read-only activity card */
(()=>{
 const inherited=wwOpenQuickInfo;
 wwOpenQuickInfo=function(row,id){
  inherited(row,id);
  const x=itineraryItemsForRow(row).find(i=>String(i.id)===String(id)),body=document.querySelector('#itineraryQuickInfoBody');
  if(!x||!body)return;
  const email=String(x.contact||'').trim(),phone=String(x.contactTelephone||'').trim();
  const contactLabel=[...body.querySelectorAll('small')].find(el=>el.textContent.trim().toLowerCase()==='contact');
  if(contactLabel){
    contactLabel.textContent='Contact email';
    const card=contactLabel.parentElement;
    if(email&&card&&!card.closest('a')){
      const a=document.createElement('a');a.href='mailto:'+email.replace(/^mailto:/i,'');a.className='ww-contact-action';a.style.cssText='display:block;color:inherit;text-decoration:none';
      card.replaceWith(a);a.appendChild(card);
    }
  }
  if(phone&&!body.querySelector('.ww-contact-phone')){
    const href=phone.replace(/^tel:/i,'').replace(/[^\d+*#]/g,'');
    const html=`<a class="ww-contact-action ww-contact-phone" href="tel:${esc(href)}" style="display:block;color:inherit;text-decoration:none"><div class="itinerary-quick-info-row"><small>Contact telephone</small><strong>${esc(phone.replace(/^tel:/i,''))}</strong></div></a>`;
    const firstLink=body.querySelector('.itinerary-quick-info-link,.itinerary-quick-info-edit');
    if(firstLink)firstLink.insertAdjacentHTML('beforebegin',html);else body.insertAdjacentHTML('beforeend',html);
  }
 };
})();



/* View Activity layout polish — synchronous/idempotent version */
(()=>{
 const icons={
  clock:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  phone:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>'
 };
 const inherited=wwOpenQuickInfo;
 wwOpenQuickInfo=function(row,id){
  inherited(row,id);
  const body=document.querySelector('#itineraryQuickInfoBody'); if(!body)return;
  const label=name=>[...body.querySelectorAll('small')].find(x=>x.textContent.trim().toUpperCase()===name);
  const card=l=>l?.closest('.itinerary-quick-info-row,.itinerary-quick-info-card')||l?.parentElement;
  const decorate=(c,svg)=>{
   if(!c||c.querySelector(':scope > .ww-view-field-icon'))return;
   c.classList.add('ww-view-field-with-icon');
   c.insertAdjacentHTML('afterbegin',`<span class="ww-view-field-icon">${svg}</span>`);
  };
  const when=label('WHEN'),start=label('START'),finish=label('FINISH'),loc=label('LOCATION'),phone=label('CONTACT TELEPHONE'),mail=label('CONTACT EMAIL');
  if(when)when.textContent='START';
  const sc=card(start||when),fc=card(finish),lc=card(loc),pc=card(phone),mc=card(mail);
  decorate(sc,icons.clock);decorate(fc,icons.clock);decorate(lc,icons.pin);decorate(pc,icons.phone);decorate(mc,icons.mail);
  const movable=c=>c?.closest('a.ww-contact-action')||c;
  const L=movable(lc),P=movable(pc),M=movable(mc);
  if(L&&P&&L.nextElementSibling!==P)L.insertAdjacentElement('afterend',P);
  if(P&&M&&P.nextElementSibling!==M)P.insertAdjacentElement('afterend',M);
 };
 if(!document.getElementById('ww-view-field-icons-style')){
  const st=document.createElement('style');st.id='ww-view-field-icons-style';st.textContent=`
   .ww-view-field-with-icon{position:relative!important;padding-left:58px!important}
   .ww-view-field-icon{position:absolute!important;left:20px!important;top:50%!important;transform:translateY(-50%)!important;display:grid!important;place-items:center!important;color:#118ca0!important}
   .ww-view-field-icon svg{width:23px!important;height:23px!important}
  `;document.head.appendChild(st);
 }
})();



/* View Activity polish — safe, synchronous, no observers */
(()=>{
 const svg={
  cash:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="7" rx="6.5" ry="2.5"/><path d="M5.5 7v4c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V7"/><path d="M5.5 11v4c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5v-4"/></svg>',
  ticket:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13 11 22l-9-9V4a2 2 0 0 1 2-2h9l7 7v4Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  note:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  todo:'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="m8 11 2 2 5-5M8 17h8"/></svg>'
 };
 const inherited=wwOpenQuickInfo;
 wwOpenQuickInfo=function(row,id){
  inherited(row,id);
  const body=document.querySelector('#itineraryQuickInfoBody');if(!body)return;
  const item=itineraryItemsForRow(row).find(i=>String(i.id)===String(id));if(!item)return;
  const findLabel=name=>[...body.querySelectorAll('small')].find(x=>x.textContent.trim().toUpperCase()===name);
  const cardOf=l=>l?.closest('.itinerary-quick-info-row,.itinerary-quick-info-card')||l?.parentElement;
  const decorate=(card,icon)=>{
    if(!card||card.querySelector(':scope > .ww-extra-field-icon'))return;
    card.classList.add('ww-extra-field-with-icon');
    card.insertAdjacentHTML('afterbegin',`<span class="ww-extra-field-icon">${icon}</span>`);
  };

  decorate(cardOf(findLabel('COST PER PERSON')),svg.cash);
  decorate(cardOf(findLabel('BOOKING REFERENCE')),svg.ticket);
  decorate(cardOf(findLabel('NOTES')),svg.note);
  decorate(cardOf(findLabel('TO DO')),svg.todo);

  /* Location: whole card searches Google Maps for exactly the stored location text. */
  const locLabel=findLabel('LOCATION'),locCard=cardOf(locLabel),location=String(item.location||'').trim();
  if(locCard&&location&&!locCard.closest('a[data-ww-location-map]')){
    const a=document.createElement('a');a.dataset.wwLocationMap='';a.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(location);
    a.target='_blank';a.rel='noopener';a.style.cssText='display:block;color:inherit;text-decoration:none';
    locCard.replaceWith(a);a.appendChild(locCard);
  }

  /* Email value: shrink only as needed so long addresses remain comfortably inside the card. */
  const emailLabel=findLabel('CONTACT EMAIL'),emailCard=cardOf(emailLabel);
  if(emailCard){
    const value=emailCard.querySelector('strong')||[...emailCard.children].find(x=>x!==emailLabel&&!x.classList.contains('ww-view-field-icon'));
    if(value){
      value.classList.add('ww-contact-email-fit');
      const fit=()=>{
        value.style.fontSize='';
        const max=emailCard.clientWidth-82;
        let size=parseFloat(getComputedStyle(value).fontSize)||16;
        while(value.scrollWidth>max&&size>12){size-=.5;value.style.fontSize=size+'px'}
      };
      requestAnimationFrame(fit);
    }
  }

  /* Conditional LINKS heading: only if actual saved hyperlinks are rendered. */
  body.querySelectorAll('.ww-links-heading').forEach(x=>x.remove());
  const links=[...body.querySelectorAll('.itinerary-quick-info-link')].filter(a=>!a.classList.contains('ww-contact-action'));
  if(links.length){
    const h=document.createElement('div');h.className='ww-links-heading';h.textContent='LINKS';
    links[0].insertAdjacentElement('beforebegin',h);
  }
 };
 if(!document.getElementById('ww-view-polish-style')){
  const st=document.createElement('style');st.id='ww-view-polish-style';st.textContent=`
   .ww-extra-field-with-icon{position:relative!important;padding-left:58px!important}
   .ww-extra-field-icon{position:absolute!important;left:20px!important;top:50%!important;transform:translateY(-50%)!important;display:grid!important;place-items:center!important;color:#118ca0!important}
   .ww-extra-field-icon svg{width:23px!important;height:23px!important}
   .ww-contact-email-fit{display:block!important;white-space:nowrap!important;max-width:100%!important}
   .ww-links-heading{margin:14px 4px 8px!important;font-size:13px!important;font-weight:800!important;letter-spacing:.06em!important;color:#6f777b!important}
   #itinContactTelephone{min-height:0!important;height:44px!important;resize:vertical!important;overflow:auto!important}
  `;document.head.appendChild(st);
 }
})();



/* === WozzaWorld — canonical dated-trip country status semantics 06 Oct 2026 === */
(()=>{
 if(window.__wwCountryTripStatusCanonical061026)return;window.__wwCountryTripStatusCanonical061026=true;
 const tripDateState=t=>{const td=orderedTripDates(t),today=new Date();today.setHours(0,0,0,0);const start=td.start?new Date(td.start+'T00:00:00'):null,end=td.end?new Date(td.end+'T00:00:00'):null;if(!start&&!end)return'undated';return(end||start)>=today?'upcoming':'past'};
 tripIsOnHorizon=t=>tripDateState(t)==='upcoming';
 reconcileTripCountryStatuses=countries=>{[...new Set((countries||[]).filter(Boolean))].forEach(c=>{const trips=countryTrips(c),hasUpcoming=trips.some(t=>tripDateState(t)==='upcoming'),hasPast=trips.some(t=>tripDateState(t)==='past');setCountryStatus(c,'going',hasUpcoming);if(hasPast){setCountryStatus(c,'visited',true);if(!state.visitHistory.some(x=>sameCountry(x,c)))state.visitHistory.push(c)}})};
})();

/* WozzaWorld hotfix 06 Oct 2026: allow the country-card empty state to hide
   the Trips heading/count and trip dividers. Earlier redesign CSS forces these
   elements visible with display:* !important, overriding the HTML hidden state. */
(()=>{
  if(document.getElementById('ww-country-empty-trips-hidden-fix-061026')) return;
  const style=document.createElement('style');
  style.id='ww-country-empty-trips-hidden-fix-061026';
  style.textContent=`
    #countrySheet .ww-country-trips-section-head[hidden],
    #countrySheet .ww-country-trips-top-divider[hidden],
    #countrySheet .ww-country-trips-divider[hidden]{
      display:none!important;
    }
  `;
  document.head.appendChild(style);
})();

/* === WozzaWorld — consolidated Country Trips render authority 06 Oct 2026 === */
(()=>{
 if(window.__wwCountryTripsCanonical061026)return;window.__wwCountryTripsCanonical061026=true;
 function syncCountryTripsUI(){
   if(!currentCountry)return;
   const list=document.getElementById('countryTrips'),add=document.getElementById('addCountryTrip');
   if(!list||!add)return;
   const trips=countryTrips(currentCountry),hasTrips=trips.length>0;
   let head=document.querySelector('#countrySheet .ww-country-trips-section-head');
   if(!head){
     head=document.createElement('div');head.className='ww-country-trips-section-head';
     list.insertAdjacentElement('beforebegin',head);
   }
   head.innerHTML=`<strong>TRIPS</strong>`;
   let top=head.previousElementSibling;
   if(!top?.classList.contains('ww-country-trips-top-divider')){
     document.querySelector('#countrySheet .ww-country-trips-top-divider')?.remove();
     top=document.createElement('hr');top.className='ww-country-trips-top-divider';head.insertAdjacentElement('beforebegin',top);
   }
   if(list.nextElementSibling!==add)list.insertAdjacentElement('afterend',add);
   let lower=add.nextElementSibling;
   if(!lower?.classList.contains('ww-country-trips-divider')){
     document.querySelectorAll('#countrySheet .ww-country-trips-divider').forEach(x=>x.remove());
     lower=document.createElement('hr');lower.className='ww-country-trips-divider';add.insertAdjacentElement('afterend',lower);
   }
   head.hidden=!hasTrips;top.hidden=!hasTrips;lower.hidden=!hasTrips;list.hidden=false;add.hidden=false;
   const summary=document.getElementById('countryInfoSummary');if(summary)summary.hidden=!hasTrips;
   const empty=list.querySelector('.country-no-trips');if(empty)empty.textContent='Add a trip to get started 😃';
 }
 const inherited=renderSheet;
 renderSheet=function(){const out=inherited.apply(this,arguments);syncCountryTripsUI();return out};
 window.wwSyncCountryTripsUI=syncCountryTripsUI;
 syncCountryTripsUI();
})();


/* WozzaWorld — audited Recycle Bin dialog skin + existing fixed-close/scroll layout (8 Oct 2026).
   Only presentation CSS. Existing renderer, selection, restore/delete, toast and tumbleweed
   animation remain untouched. This replaces the earlier fixed-close styling block. */
(()=>{
  if(document.getElementById('ww-recycle-fixed-close-061026'))return;
  const st=document.createElement('style');
  st.id='ww-recycle-fixed-close-061026';
  st.textContent=`
    #recycleDialog{
      box-sizing:border-box!important;padding:0!important;border:0!important;
      width:min(420px,calc(100vw - 32px))!important;
      max-width:calc(100vw - 32px)!important;
      max-height:min(88dvh,760px)!important;
      border-radius:24px!important;background:#f4fbfb!important;
      color:#193d4a!important;box-shadow:0 20px 70px rgba(0,20,30,.35)!important;
      overflow:hidden!important;
    }
    #recycleDialog::backdrop{
      background:rgba(0,24,35,.55)!important;
      backdrop-filter:blur(5px)!important;-webkit-backdrop-filter:blur(5px)!important;
    }
    #recycleDialog form{
      box-sizing:border-box!important;width:100%!important;max-width:100%!important;
      min-width:0!important;max-height:min(88dvh,760px)!important;
      margin:0!important;padding:0!important;border:0!important;
      background:#f4fbfb!important;overflow:hidden!important;
      display:flex!important;flex-direction:column!important;position:relative!important;
    }
    #recycleDialog .recycle-head{
      box-sizing:border-box!important;flex:0 0 auto!important;
      width:100%!important;max-width:100%!important;margin:0!important;
      padding:25px 72px 25px 26px!important;
      background:linear-gradient(120deg,#086579,#0aa3a6)!important;
      border-radius:24px 24px 0 0!important;
    }
    #recycleDialog .recycle-head h3{
      margin:0!important;padding:0!important;font-family:inherit!important;
      font-size:24px!important;font-weight:800!important;line-height:1.3!important;
      color:#fff!important;
    }
    #recycleDialog #closeRecycleDialog{
      position:absolute!important;top:16px!important;right:16px!important;z-index:20!important;
      display:grid!important;place-items:center!important;
      width:40px!important;height:40px!important;padding:0!important;
      border:0!important;border-radius:50%!important;
      background:rgba(255,255,255,.17)!important;color:#fff!important;
      box-shadow:none!important;font-size:28px!important;line-height:1!important;
    }
    #recycleDialog .recycle-list{
      box-sizing:border-box!important;flex:1 1 auto!important;min-height:0!important;
      width:100%!important;max-width:100%!important;
      margin:0!important;padding:20px 26px 24px!important;
      overflow-y:auto!important;overflow-x:hidden!important;
      overscroll-behavior:contain;
    }
    #recycleDialog .recycle-empty-subtitle{color:#193d4a!important}
    #recycleDialog .dialog-actions{flex:0 0 auto!important}
  `;
  document.head.appendChild(st);
})();

/* WozzaWorld hotfix — allow long Recycle Bin item titles to wrap to line 2 (6 Oct 2026) */
(()=>{
  if(document.getElementById('ww-recycle-title-wrap-061026'))return;
  const st=document.createElement('style');
  st.id='ww-recycle-title-wrap-061026';
  st.textContent=`
    #recycleDialog .recycle-row{align-items:center!important;min-width:0!important}
    #recycleDialog .recycle-copy{min-width:0!important;overflow:visible!important}
    #recycleDialog .recycle-copy strong{
      display:-webkit-box!important;
      -webkit-box-orient:vertical!important;
      -webkit-line-clamp:2!important;
      line-clamp:2!important;
      white-space:normal!important;
      overflow:hidden!important;
      text-overflow:ellipsis!important;
      overflow-wrap:anywhere!important;
      line-height:1.15!important;
      max-width:100%!important;
    }
    #recycleDialog .recycle-actions{flex:0 0 auto!important}
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — Country > Trip return-path polish 06 Oct 2026 === */
(()=>{
  if(window.__wwCountryTripReturn061026)return;
  window.__wwCountryTripReturn061026=true;

  let returnCountry='';
  let returnOrigin=null;

  const rememberCountryTrip=target=>{
    const card=target?.closest?.('#countryTrips [data-open-trip]');
    if(!card)return;
    returnCountry=String(currentCountry||'').trim();
    returnOrigin=countryCardOrigin ? {...countryCardOrigin} : null;
  };

  document.addEventListener('click',e=>rememberCountryTrip(e.target),true);
  document.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' ')rememberCountryTrip(e.target);
  },true);

  const tripDialog=document.getElementById('tripDialog');
  tripDialog?.addEventListener('close',()=>{
    if(!returnCountry)return;
    const country=returnCountry, origin=returnOrigin;
    returnCountry=''; returnOrigin=null;
    requestAnimationFrame(()=>openCountry(country,origin));
  });
})();

/* === WozzaWorld Passport profile launcher polish — 06 Oct 2026 === */
(()=>{
  if(window.__wwPassportProfileLauncher061026)return;window.__wwPassportProfileLauncher061026=true;
  const st=document.createElement('style');st.id='ww-passport-profile-launcher-061026';st.textContent=`
    /* The old always-visible name/save strip is replaced by the centre profile launcher. */
    .ww-passport-name-bar-hidden{display:none!important}
    .recycle-launch{display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important}
    .recycle-launch .ww-passport-profile-btn{
      width:56px!important;height:56px!important;flex:0 0 56px!important;border-radius:50%!important;
      border:1px solid rgba(255,255,255,.34)!important;background:rgba(255,255,255,.045)!important;
      color:#fff!important;display:grid!important;place-items:center!important;padding:0!important;
      box-shadow:0 5px 16px rgba(5,50,65,.10)!important;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px)
    }
    .recycle-launch .ww-passport-profile-btn svg{width:29px;height:29px;display:block;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .recycle-launch .ww-recycle-handwriting-hidden{display:none!important}
    #wwPassportNameDialog{border:0;padding:0;background:transparent;max-width:min(88vw,390px);width:100%}
    #wwPassportNameDialog::backdrop{background:rgba(7,36,46,.48);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px)}
    #wwPassportNameDialog .ww-profile-card{position:relative;background:#f8e8c2;border-radius:28px;padding:25px 22px 22px;box-shadow:0 20px 50px rgba(5,35,45,.24);color:#17213d}
    #wwPassportNameDialog h3{margin:0 48px 20px 0;font-size:24px;font-weight:950}
    #wwPassportNameDialog .ww-profile-close{position:absolute;right:18px;top:17px;width:44px;height:44px;border:0;border-radius:50%;background:#fff;color:#17213d;font-size:30px;line-height:1;box-shadow:0 5px 16px rgba(16,33,63,.10)}
    #wwPassportNameDialog label{display:block;font-weight:850;font-size:13px;margin-bottom:8px}
    #wwPassportNameDialog input{box-sizing:border-box;width:100%;border:1px solid rgba(23,33,61,.15);border-radius:18px;background:#fff;padding:14px 16px;font:inherit;font-size:17px;color:#17213d;outline:none}
    #wwPassportNameDialog input:focus{border-color:#0b8999;box-shadow:0 0 0 3px rgba(11,137,153,.12)}
    #wwPassportNameDialog .ww-profile-save{width:100%;margin-top:16px;border:0;border-radius:999px;padding:14px 18px;background:#0b8999;color:#fff;font-weight:900;font-size:16px}
  `;document.getElementById(st.id)?.remove();document.head.appendChild(st);

  function nameBar(){
    const input=document.getElementById('passportName'); if(!input)return null;
    const save=document.getElementById('savePassportName');
    let el=input.closest('.passport-name-card,.passport-name,.name-card,.passport-profile-name');
    if(!el){
      el=input.parentElement;
      while(el&&save&&!el.contains(save)&&el.parentElement&&el.parentElement!==document.body)el=el.parentElement;
    }
    return el;
  }
  function ensureDialog(){
    let d=document.getElementById('wwPassportNameDialog');if(d)return d;
    d=document.createElement('dialog');d.id='wwPassportNameDialog';
    d.innerHTML=`<form method="dialog" class="ww-profile-card"><button type="button" class="ww-profile-close" aria-label="Close">×</button><h3>Your profile</h3><label for="wwPassportNameInput">Name</label><input id="wwPassportNameInput" maxlength="24" autocomplete="name"><button type="button" class="ww-profile-save">Save</button></form>`;
    document.body.appendChild(d);
    const close=()=>d.close();d.querySelector('.ww-profile-close').onclick=close;
    d.addEventListener('click',e=>{if(e.target===d)close()});
    const commit=()=>{
      const original=document.getElementById('passportName'),field=d.querySelector('#wwPassportNameInput');if(!original||!field)return;
      original.value=field.value;
      if(typeof savePassportName==='function')savePassportName();else document.getElementById('savePassportName')?.click();
      close();
    };
    d.querySelector('.ww-profile-save').onclick=commit;
    d.querySelector('#wwPassportNameInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();commit()}});
    return d;
  }
  function openProfile(){
    const d=ensureDialog(),field=d.querySelector('#wwPassportNameInput');
    field.value=localStorage.getItem('wozzaworld-first-name')||document.getElementById('passportName')?.value||'';
    d.showModal();requestAnimationFrame(()=>{field.focus();field.select()});
  }
  function install(){
    const bar=nameBar();if(bar)bar.classList.add('ww-passport-name-bar-hidden');
    const launch=document.querySelector('.recycle-launch');if(!launch)return false;
    /* Remove the handwritten Recycle bin caption only; keep the two existing utility buttons. */
    [...launch.children].forEach(el=>{if(el.id==='openRecycleBin'||el.id==='openBackupRestore'||el.id==='wwPassportProfileButton')return;if(!el.matches('button'))el.classList.add('ww-recycle-handwriting-hidden')});
    let btn=document.getElementById('wwPassportProfileButton');
    if(!btn){
      btn=document.createElement('button');btn.type='button';btn.id='wwPassportProfileButton';btn.className='ww-passport-profile-btn';btn.setAttribute('aria-label','Edit profile name');btn.title='Edit profile name';
      btn.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4.5 20c.7-4 3.2-6 7.5-6s6.8 2 7.5 6"></path></svg>';
      btn.onclick=openProfile;
    }
    const recycle=document.getElementById('openRecycleBin');
    if(recycle)launch.insertBefore(btn,recycle);else launch.appendChild(btn);
    return true;
  }
  let tries=0,t=setInterval(()=>{if(install()||++tries>50)clearInterval(t)},100);
  requestAnimationFrame(()=>{install();ensureDialog()});
})();

/* === WozzaWorld Passport profile controls — robust final fix 06 Oct 2026 === */
(()=>{
  if(window.__wwPassportProfileRobust061026)return; window.__wwPassportProfileRobust061026=true;
  const st=document.createElement('style'); st.id='ww-passport-profile-robust-061026'; st.textContent=`
    section[data-screen="me"] > .passport-name-card{display:none!important}
    section[data-screen="me"] .recycle-launch{position:relative!important;display:flex!important;align-items:center!important;justify-content:space-between!important;width:100%!important;min-height:64px!important}
    section[data-screen="me"] .recycle-launch .recycle-handnote{display:none!important}
    section[data-screen="me"] .recycle-launch #wwPassportProfileButton{
      position:absolute!important;left:50%!important;top:50%!important;transform:translate(-50%,-50%)!important;
      width:56px!important;height:56px!important;min-width:56px!important;border-radius:50%!important;
      border:1px solid rgba(255,255,255,.34)!important;background:rgba(255,255,255,.045)!important;
      color:#fff!important;display:grid!important;place-items:center!important;padding:0!important;margin:0!important;
      box-shadow:0 5px 16px rgba(5,50,65,.10)!important;backdrop-filter:blur(2px)!important;-webkit-backdrop-filter:blur(2px)!important;z-index:3!important
    }
    section[data-screen="me"] .recycle-launch #wwPassportProfileButton svg{width:30px!important;height:30px!important;display:block!important;fill:none!important;stroke:#fff!important;stroke-width:2!important;stroke-linecap:round!important;stroke-linejoin:round!important}
  `; document.head.appendChild(st);

  function dialog(){
    let d=document.getElementById('wwPassportNameDialog');
    if(!d){
      d=document.createElement('dialog'); d.id='wwPassportNameDialog';
      d.innerHTML='<form method="dialog" class="ww-profile-card"><button type="button" class="ww-profile-close" aria-label="Close">×</button><h3>Your profile</h3><label for="wwPassportNameInput">Name</label><input id="wwPassportNameInput" maxlength="24" autocomplete="given-name"><button type="button" class="ww-profile-save">Save</button></form>';
      document.body.appendChild(d);
      d.querySelector('.ww-profile-close').onclick=()=>d.close();
      d.addEventListener('click',e=>{if(e.target===d)d.close()});
      const save=()=>{const src=document.getElementById('passportName'),f=d.querySelector('#wwPassportNameInput');if(!src||!f)return;src.value=f.value;src.dispatchEvent(new Event('input',{bubbles:true}));document.getElementById('savePassportName')?.click();d.close()};
      d.querySelector('.ww-profile-save').onclick=save;
      d.querySelector('#wwPassportNameInput').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();save()}});
    }
    return d;
  }
  function open(){const d=dialog(),f=d.querySelector('#wwPassportNameInput'),src=document.getElementById('passportName');f.value=src?.value||localStorage.getItem('wozzaworld-first-name')||'';d.showModal();requestAnimationFrame(()=>{f.focus();f.select()})}
  function apply(){
    document.querySelector('section[data-screen="me"] > .passport-name-card')?.setAttribute('hidden','');
    const launch=document.querySelector('section[data-screen="me"] .recycle-launch'); if(!launch)return;
    launch.querySelector('.recycle-handnote')?.remove();
    let b=document.getElementById('wwPassportProfileButton');
    if(!b){b=document.createElement('button');b.type='button';b.id='wwPassportProfileButton';b.setAttribute('aria-label','Edit profile name');b.title='Edit profile name';b.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4.5 20c.7-4 3.2-6 7.5-6s6.8 2 7.5 6"></path></svg>';b.onclick=open;launch.appendChild(b)}
    else if(b.parentElement!==launch)launch.appendChild(b);
  }
  apply(); dialog();
  const obs=new MutationObserver(apply); obs.observe(document.body,{childList:true,subtree:true});
  setTimeout(()=>obs.disconnect(),10000);
})();

/* === WozzaWorld Passport bottom controls — tighter grouping 06 Oct 2026 === */
(()=>{
  if(document.getElementById('ww-passport-controls-tight-061026'))return;
  const st=document.createElement('style');st.id='ww-passport-controls-tight-061026';st.textContent=`
    section[data-screen="me"] .recycle-launch{
      justify-content:center!important;
      gap:34px!important;
    }
    section[data-screen="me"] .recycle-launch #wwPassportProfileButton{
      position:static!important;
      left:auto!important;top:auto!important;
      transform:none!important;
      order:2!important;
      flex:0 0 auto!important;
    }
    section[data-screen="me"] .recycle-launch #openBackupRestore{order:1!important;flex:0 0 auto!important;margin:0!important}
    section[data-screen="me"] .recycle-launch #openRecycleBin{order:3!important;flex:0 0 auto!important;margin:0!important}
  `;document.head.appendChild(st);
})();

/* === WozzaWorld — Country compact 2x2 utility actions 07 Oct 2026 === */
(()=>{
  if(window.__wwCountryCompactUtilities071026)return;
  window.__wwCountryCompactUtilities071026=true;

  const st=document.createElement('style');
  st.id='ww-country-compact-utilities-071026';
  st.textContent=`
    #countrySheet .ww-country-fast-facts-action{display:none!important}
    #countrySheet .ww-country-utility-grid{
      min-width:0;min-height:0;aspect-ratio:1 / 1;align-self:start;display:grid!important;
      grid-template-columns:repeat(2,minmax(0,1fr));
      grid-template-rows:repeat(2,minmax(0,1fr));
      gap:7px;padding:7px;box-sizing:border-box;
      background:rgba(255,255,255,.96);border:1px solid rgba(21,48,71,.10);
      border-radius:22px;box-shadow:0 3px 8px rgba(16,48,58,.08);
    }
    #countrySheet .ww-country-utility-grid button{
      min-width:0!important;min-height:0!important;width:100%!important;height:100%!important;
      margin:0!important;padding:0!important;border:1px solid rgba(21,48,71,.08)!important;
      border-radius:12px!important;background:#fff!important;box-shadow:0 2px 6px rgba(16,48,58,.10)!important;
      display:flex!important;align-items:center!important;justify-content:center!important;
      position:relative!important;box-sizing:border-box!important;color:#31414d!important;cursor:pointer;
    }
    #countrySheet .ww-country-utility-grid button svg{width:26px!important;height:26px!important;max-width:none!important;max-height:none!important;display:block}
    #countrySheet .ww-country-utility-grid .ww-country-mini-info{color:#087db5!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-info img{width:30px!important;height:30px!important;object-fit:contain!important;display:block!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-add{color:#e2aa16!important;font-size:35px!important;font-weight:800!important;line-height:1!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-pin{color:#ef3340!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-search{color:#31414d!important}
    #countrySheet .ww-country-utility-grid button:active{transform:scale(.95)}
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet .ww-country-utility-grid{min-height:0!important;aspect-ratio:1 / 1!important;border-radius:14px!important;gap:3px;padding:3px}
      #countrySheet .ww-country-utility-grid button{border-radius:8px!important}
      #countrySheet .ww-country-utility-grid button svg{width:17px!important;height:17px!important}
      #countrySheet .ww-country-utility-grid .ww-country-mini-add{font-size:23px!important}
    }
  `;
  document.head.appendChild(st);

  function install(){
    const grid=document.querySelector('#countrySheet .choice-grid, #countrySheet .country-status-grid');
    if(!grid)return;
    grid.querySelector('.ww-country-fast-facts-action')?.setAttribute('aria-hidden','true');
    let box=grid.querySelector('.ww-country-utility-grid');
    if(!box){
      box=document.createElement('div');
      box.className='ww-country-utility-grid';
      box.innerHTML=`
        <button type="button" class="ww-country-mini-info" aria-label="Country info" title="Country info"><img src="info-icon.svg" alt="" aria-hidden="true"></button>
        <button type="button" class="ww-country-mini-add" aria-label="Add a trip" title="Add a trip"><svg class="ww-country-plus-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.7" stroke-linecap="square"/></svg></button>
        <button type="button" class="ww-country-mini-pin" aria-label="Location — coming soon" title="Location — coming soon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" fill="currentColor"/><circle cx="12" cy="9" r="2.5" fill="white"/></svg></button>
        <button type="button" class="ww-country-mini-search" aria-label="Search travel ideas" title="Search travel ideas"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="m15.5 15.5 5 5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg></button>`;
      grid.appendChild(box);
    } else if(box!==grid.lastElementChild){grid.appendChild(box)}

    box.querySelector('.ww-country-mini-info').onclick=e=>{e.preventDefault();e.stopPropagation();if(typeof openCountryInfo==='function')openCountryInfo()};
    box.querySelector('.ww-country-mini-add').onclick=e=>{e.preventDefault();e.stopPropagation();const add=document.getElementById('addCountryTrip');if(add)add.click();else if(typeof openTrip==='function')openTrip(currentCountry)};
    box.querySelector('.ww-country-mini-search').onclick=e=>{e.preventDefault();e.stopPropagation();const country=String(currentCountry||'').trim();if(!country)return;window.open('https://www.google.com/search?q='+encodeURIComponent(country+' travel guide things to do tourism'),'_blank','noopener,noreferrer')};
    box.querySelector('.ww-country-mini-pin').onclick=e=>{e.preventDefault();e.stopPropagation()};
  }

  const previousRender=renderSheet;
  renderSheet=function(){const out=previousRender.apply(this,arguments);install();return out};
  install();
})();

/* === WozzaWorld — Country mini-action geometry fix 07 Oct 2026 === */
(()=>{
  const old=document.getElementById('ww-country-mini-icon-tuning-071026');if(old)old.remove();
  const st=document.createElement('style');st.id='ww-country-mini-geometry-071026';st.textContent=`
    #countrySheet .ww-country-utility-grid .ww-country-mini-info img{
      width:24px!important;height:24px!important;max-width:24px!important;max-height:24px!important;
      margin:0!important;position:relative!important;left:1px!important;top:1px!important;transform:none!important;
      object-fit:contain!important;display:block!important;
    }
    #countrySheet .ww-country-utility-grid .ww-country-mini-add{
      font-size:0!important;line-height:0!important;transform:none!important;
      align-items:center!important;justify-content:center!important;
    }
    #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{
      width:25px!important;height:25px!important;display:block!important;position:relative!important;top:-2px!important;
      overflow:visible!important;
    }
    #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{width:23.4px!important;height:23.4px!important}
    @media (orientation:landscape) and (max-height:650px){
      #countrySheet .ww-country-utility-grid .ww-country-mini-info img{width:19px!important;height:19px!important;max-width:19px!important;max-height:19px!important}
      #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{width:17px!important;height:17px!important;top:-1px!important}
      #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{width:15.3px!important;height:15.3px!important}
    }
  `;document.head.appendChild(st);
})();

/* === WozzaWorld — Country Google Map popup 07 Oct 2026 === */
(()=>{
  if(window.__wwCountryGoogleMap071026)return;
  window.__wwCountryGoogleMap071026=true;

  const st=document.createElement('style');
  st.id='ww-country-google-map-071026';
  st.textContent=`
    #wwCountryMapDialog{border:0;padding:0;background:transparent;width:min(92vw,680px);max-width:none;overflow:visible}
    #wwCountryMapDialog::backdrop{background:rgba(4,34,44,.52);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px)}
    #wwCountryMapDialog .ww-map-card{position:relative;background:#edf8f8;border-radius:30px;padding:18px;box-shadow:0 22px 55px rgba(4,37,48,.26);overflow:hidden}
    #wwCountryMapDialog .ww-map-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:2px 2px 14px}
    #wwCountryMapDialog .ww-map-title{min-width:0;color:#153047;font-size:clamp(20px,5vw,28px);font-weight:950;line-height:1.05;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    #wwCountryMapDialog .ww-map-close{width:46px;height:46px;min-width:46px;border:0;border-radius:50%;background:#fff;color:#17213d;font-size:31px;line-height:1;display:grid;place-items:center;padding:0;box-shadow:0 4px 14px rgba(16,48,58,.12)}
    #wwCountryMapDialog .ww-map-canvas{height:min(62vh,520px);min-height:390px;border-radius:22px;overflow:hidden;background:#dbeaea;position:relative}
    #wwCountryMapDialog .ww-map-status{position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:30px;color:#52656c;font-weight:750;background:#edf8f8;z-index:2}
    #wwCountryMapDialog .ww-map-status[hidden]{display:none!important}
    #wwCountryMapDialog .ww-map-error strong{display:block;color:#153047;font-size:18px;margin-bottom:8px}
    #wwCountryMapDialog .ww-map-error small{display:block;font-weight:500;line-height:1.4}
    @media (max-width:520px){
      #wwCountryMapDialog{width:94vw}
      #wwCountryMapDialog .ww-map-card{border-radius:25px;padding:13px}
      #wwCountryMapDialog .ww-map-canvas{height:56vh;min-height:360px;border-radius:18px}
      #wwCountryMapDialog .ww-map-close{width:42px;height:42px;min-width:42px}
    }
    /* Final mini-action geometry requested after the deep-audit build. */
    #countrySheet .ww-country-utility-grid .ww-country-mini-info img{left:0!important;top:0!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{left:0!important;top:1px!important}
    #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg path{stroke-width:3!important}
  `;
  document.head.appendChild(st);

  let apiPromise=null;
  function loadConfig(){
    if(window.WOZZAWORLD_GOOGLE_MAPS_API_KEY)return Promise.resolve(window.WOZZAWORLD_GOOGLE_MAPS_API_KEY);
    return new Promise(resolve=>{
      const existing=document.querySelector('script[data-ww-google-maps-config]');
      if(existing){existing.addEventListener('load',()=>resolve(window.WOZZAWORLD_GOOGLE_MAPS_API_KEY||''),{once:true});existing.addEventListener('error',()=>resolve(''),{once:true});return}
      const s=document.createElement('script');s.src='google-maps-config.js';s.async=true;s.dataset.wwGoogleMapsConfig='1';
      s.onload=()=>resolve(window.WOZZAWORLD_GOOGLE_MAPS_API_KEY||'');s.onerror=()=>resolve('');document.head.appendChild(s);
    });
  }
  async function loadMaps(){
    if(window.google?.maps?.Map)return window.google.maps;
    if(apiPromise)return apiPromise;
    apiPromise=(async()=>{
      const key=String(await loadConfig()||'').trim();
      if(!key||key==='PASTE_YOUR_RESTRICTED_GOOGLE_MAPS_API_KEY_HERE')throw new Error('API_KEY_NOT_CONFIGURED');
      await new Promise((resolve,reject)=>{
        const callback='__wwGoogleMapsReady071026';
        window[callback]=()=>{delete window[callback];resolve()};
        const s=document.createElement('script');
        s.src='https://maps.googleapis.com/maps/api/js?key='+encodeURIComponent(key)+'&loading=async&v=weekly&callback='+callback;
        s.async=true;s.onerror=()=>{delete window[callback];reject(new Error('MAPS_LOAD_FAILED'))};document.head.appendChild(s);
      });
      return window.google.maps;
    })().catch(err=>{apiPromise=null;throw err});
    return apiPromise;
  }
  function dialog(){
    /* A Google Map mutates its canvas DOM heavily. Reusing that same dialog/canvas
       after close can leave the popup in a stale state, so every opening gets a
       fresh dialog + fresh map canvas. The Maps API script itself remains cached. */
    document.getElementById('wwCountryMapDialog')?.remove();
    const d=document.createElement('dialog');d.id='wwCountryMapDialog';
    d.innerHTML=`<div class="ww-map-card"><div class="ww-map-head"><div class="ww-map-title">Map</div><button type="button" class="ww-map-close" aria-label="Close map">×</button></div><div class="ww-map-canvas"><div class="ww-map-status">Loading Google Maps…</div></div></div>`;
    document.body.appendChild(d);
    const close=()=>{
      if(d.open)d.close();
      /* Remove only after the dialog has closed; the next pin tap creates a clean one. */
      setTimeout(()=>{if(d.isConnected)d.remove()},0);
    };
    d.querySelector('.ww-map-close').onclick=close;
    d.addEventListener('click',e=>{if(e.target===d)close()});
    d.addEventListener('cancel',e=>{e.preventDefault();close()});
    return d;
  }
  function showError(status,title,message){
    status.hidden=false;status.classList.add('ww-map-error');
    status.innerHTML=`<div><strong>${title}</strong><small>${message}</small></div>`;
  }
  async function openCountryMap(country){
    country=String(country||currentCountry||'').trim();if(!country)return;
    const d=dialog(),title=d.querySelector('.ww-map-title'),canvas=d.querySelector('.ww-map-canvas'),status=d.querySelector('.ww-map-status');
    title.textContent=country;status.className='ww-map-status';status.hidden=false;status.textContent='Loading Google Maps…';
    if(!d.open)d.showModal();
    try{
      const maps=await loadMaps();
      status.textContent='Finding '+country+'…';
      const geocoder=new maps.Geocoder();
      const result=await new Promise((resolve,reject)=>geocoder.geocode({address:country},(results,code)=>code==='OK'&&results?.[0]?resolve(results[0]):reject(new Error('GEOCODE_'+code))));
      status.hidden=true;
      const map=new maps.Map(canvas,{center:result.geometry.location,zoom:5,mapTypeControl:false,streetViewControl:false,fullscreenControl:false,gestureHandling:'greedy'});
      if(result.geometry.viewport)map.fitBounds(result.geometry.viewport,28);
      setTimeout(()=>maps.event.trigger(map,'resize'),60);
    }catch(err){
      const missing=err?.message==='API_KEY_NOT_CONFIGURED';
      showError(status,missing?'Google Maps key needed':'Google Maps couldn’t load',missing?'Add your restricted browser key to google-maps-config.js, then refresh WozzaWorld.':'Check the Maps JavaScript API/key restrictions and try again.');
    }
  }
  window.wwOpenCountryGoogleMap=openCountryMap;

  /* Capture the red pin even when the compact action block is rebuilt by renderSheet. */
  document.addEventListener('click',e=>{
    const pin=e.target.closest?.('#countrySheet .ww-country-mini-pin');if(!pin)return;
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();openCountryMap(currentCountry);
  },true);
})();


/* === WozzaWorld — final compact country icon micro-polish 07 Oct 2026 === */
(()=>{
  const st=document.createElement('style');
  st.id='ww-country-icon-micro-polish-071026';
  st.textContent=`
    #countrySheet .ww-country-utility-grid .ww-country-mini-info img{
      transform:translate(0.5px,0)!important;
    }
    #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{
      transform:translateY(-1px)!important;
    }
    #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{
      transform:scale(.93)!important;
      transform-origin:center!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld — World Map long-press opens Google country map 07 Oct 2026 === */
(()=>{
  if(window.__wwWorldMapLongPressGoogle071026)return;
  window.__wwWorldMapLongPressGoogle071026=true;

  const HOLD_MS=650, MOVE_TOLERANCE=10;
  let holdTimer=null,startX=0,startY=0,target=null,country='',longPressed=false;

  function getCountry(el){
    if(!el)return '';
    if(el.classList?.contains('country'))return el.dataset.country||el.__data__?.properties?.name||'';
    if(el.classList?.contains('map-country-label'))return el.__data__?.country||el.__data__?.name||el.textContent||'';
    return '';
  }
  function clearHold(){
    if(holdTimer){clearTimeout(holdTimer);holdTimer=null}
    target=null;country='';
  }
  document.addEventListener('pointerdown',e=>{
    if(!document.body.classList.contains('map-view')||e.pointerType==='mouse'&&e.button!==0)return;
    const el=e.target.closest?.('#worldMap .country, #worldMap .map-country-label');
    if(!el)return;
    const c=String(getCountry(el)||'').trim();if(!c)return;
    clearHold();target=el;country=c;startX=e.clientX;startY=e.clientY;longPressed=false;
    holdTimer=setTimeout(()=>{
      holdTimer=null;longPressed=true;
      if(navigator.vibrate)try{navigator.vibrate(25)}catch(_){}
      window.__wwMapLaunchFromWorldMap=true;
      window.wwOpenCountryGoogleMap?.(country);
    },HOLD_MS);
  },true);
  document.addEventListener('pointermove',e=>{
    if(!holdTimer)return;
    if(Math.hypot(e.clientX-startX,e.clientY-startY)>MOVE_TOLERANCE)clearHold();
  },true);
  ['pointerup','pointercancel'].forEach(type=>document.addEventListener(type,()=>clearHold(),true));
  document.addEventListener('click',e=>{
    if(!longPressed)return;
    const el=e.target.closest?.('#worldMap .country, #worldMap .map-country-label');
    if(!el)return;
    /* Suppress only the synthetic click that follows a successful long press,
       so the Country Card does not also open. */
    e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();longPressed=false;
  },true);
})();


/* === WozzaWorld — Milestones-style Google map popup + full hero Info target 07 Oct 2026 === */
(()=>{
  if(window.__wwMapMilestoneHeroInfo071026)return;
  window.__wwMapMilestoneHeroInfo071026=true;

  const st=document.createElement('style');
  st.id='ww-map-milestone-hero-info-071026';
  st.textContent=`
    /* Milestones-style glass teal shell; Google map itself remains opaque. */
    #wwCountryMapDialog .ww-map-card{
      background:rgba(0,128,139,.62)!important;
      border:2px solid rgba(255,255,255,.92)!important;
      backdrop-filter:blur(12px)!important;
      -webkit-backdrop-filter:blur(12px)!important;
      box-sizing:border-box!important;
    }
    #wwCountryMapDialog .ww-map-title{color:#fff!important}
    /* The whole hero is now the Info hit target without changing its artwork/layout. */
    #countrySheet .country-hero-minimal{cursor:pointer!important}
  `;
  document.head.appendChild(st);

  function bindHero(){
    const hero=document.querySelector('#countrySheet .country-hero-minimal');
    if(!hero)return;
    hero.setAttribute('role','button');
    hero.setAttribute('tabindex','0');
    hero.setAttribute('title','Open country info');
    hero.setAttribute('aria-label','Open country info');
  }
  const previousRender=renderSheet;
  renderSheet=function(){
    const out=previousRender.apply(this,arguments);
    bindHero();
    return out;
  };

  document.addEventListener('click',e=>{
    const hero=e.target.closest?.('#countrySheet .country-hero-minimal');
    if(!hero)return;
    /* The sheet close control sits over the hero visually; never hijack it. */
    if(e.target.closest?.('#countrySheet .sheet-close'))return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    if(typeof openCountryInfo==='function')openCountryInfo();
  },true);

  document.addEventListener('keydown',e=>{
    const hero=e.target.closest?.('#countrySheet .country-hero-minimal');
    if(!hero||!(e.key==='Enter'||e.key===' '))return;
    e.preventDefault();
    if(typeof openCountryInfo==='function')openCountryInfo();
  },true);

  bindHero();
})();


/* === WozzaWorld — World-map Google popup context styling 07 Oct 2026 === */
(()=>{
  if(window.__wwWorldMapGoogleContext071026)return;
  window.__wwWorldMapGoogleContext071026=true;

  const st=document.createElement('style');
  st.id='ww-world-map-google-context-071026';
  st.textContent=`
    /* ONLY the popup launched by holding a country on the WozzaWorld map. */
    #wwCountryMapDialog.ww-from-world-map::backdrop{
      background:transparent!important;
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }
    #wwCountryMapDialog.ww-from-world-map .ww-map-card{
      background:rgba(0,128,139,.40)!important;
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }
  `;
  document.head.appendChild(st);

  const original=window.wwOpenCountryGoogleMap;
  if(typeof original==='function'){
    window.wwOpenCountryGoogleMap=function(country){
      const fromWorldMap=!!window.__wwMapLaunchFromWorldMap;
      window.__wwMapLaunchFromWorldMap=false;
      const out=original.apply(this,arguments);
      if(fromWorldMap){
        const mark=()=>document.getElementById('wwCountryMapDialog')?.classList.add('ww-from-world-map');
        mark();requestAnimationFrame(mark);
      }
      return out;
    };
  }
})();


/* === WozzaWorld — hide world-map country names behind long-press Google popup 07 Oct 2026 === */
(()=>{
  if(window.__wwHideWorldLabelsBehindGoogle071026)return;
  window.__wwHideWorldLabelsBehindGoogle071026=true;
  const st=document.createElement('style');
  st.id='ww-hide-world-labels-behind-google-071026';
  st.textContent=`
    body:has(#wwCountryMapDialog.ww-from-world-map[open]) #worldMap #countryLabels,
    body:has(#wwCountryMapDialog.ww-from-world-map[open]) #worldMap .portrait-label-copy{
      opacity:0!important;
      visibility:hidden!important;
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — Milestones treatment for world-map Google popup 07 Oct 2026 === */
(()=>{
  if(window.__wwWorldMapMilestonesTreatment071026)return;
  window.__wwWorldMapMilestonesTreatment071026=true;
  const st=document.createElement('style');
  st.id='ww-world-map-milestones-treatment-071026';
  st.textContent=`
    #wwCountryMapDialog.ww-from-world-map .ww-map-card{
      border-color:rgba(255,255,255,.50)!important;
    }
    #wwCountryMapDialog.ww-from-world-map .ww-map-title{
      color:#fff!important;
      text-transform:uppercase!important;
      font-weight:800!important;
      letter-spacing:.16em!important;
      line-height:1.05!important;
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld — map utility stack + contextual Google-map navigation 07 Oct 2026 === */
(()=>{
  if(window.__wwMapUtilityStack071026)return;
  window.__wwMapUtilityStack071026=true;

  const st=document.createElement('style');
  st.id='ww-map-utility-stack-071026';
  st.textContent=`
    /* Country-card red-pin version: restore the original pale shell. */
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-card{
      background:#edf8f8!important;
      border-color:transparent!important;
      backdrop-filter:none!important;
      -webkit-backdrop-filter:none!important;
    }
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{
      color:#153047!important;text-transform:none!important;letter-spacing:normal!important;
    }

    /* Long-press map popup header navigation. */
    #wwCountryMapDialog.ww-from-world-map .ww-map-title{cursor:pointer!important}
    #wwCountryMapDialog.ww-from-world-map .ww-map-head-actions{
      display:flex!important;align-items:center!important;gap:9px!important;flex:0 0 auto!important;
    }
    #wwCountryMapDialog.ww-from-world-map .ww-map-country-flag{
      width:42px;height:42px;min-width:42px;padding:0;border-radius:50%;border:1px solid rgba(255,255,255,.50);
      background:rgba(255,255,255,.16);box-shadow:0 4px 14px rgba(16,48,58,.12);
      display:grid;place-items:center;overflow:hidden;cursor:pointer;
    }
    #wwCountryMapDialog.ww-from-world-map .ww-map-country-flag img{
      width:100%;height:100%;object-fit:cover;display:block;
    }

    /* Two smaller helpers around the existing filter button. */
    .ww-map-helper-btn{
      position:fixed!important;z-index:45!important;border:0!important;border-radius:50%!important;padding:0!important;
      background:linear-gradient(145deg,#087f91 0%,#12b8c7 58%,#18c9d3 100%)!important;
      background-color:#0aa4b3!important;color:#fff!important;
      display:grid!important;place-items:center!important;box-shadow:0 5px 16px rgba(15,56,70,.22)!important;
      cursor:pointer!important;
    }
    .ww-map-helper-btn svg{width:55%;height:55%;display:block;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .ww-map-helper-toast{
      position:fixed;left:50%;bottom:max(22px,env(safe-area-inset-bottom));transform:translateX(-50%) translateY(10px);
      z-index:60;max-width:calc(100vw - 42px);padding:10px 18px;border-radius:999px;
      background:rgba(34,48,76,.92);color:#fff;text-align:center;font-weight:800;line-height:1.25;
      box-shadow:0 5px 16px rgba(15,56,70,.20);opacity:0;pointer-events:none;
      transition:opacity .16s ease,transform .16s ease;
    }
    .ww-map-helper-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
  `;
  document.head.appendChild(st);

  const ROTATE_TEXT='Rotate your phone to view map in landscape';

  function hideOldRotatePill(){
    const candidates=[...document.querySelectorAll('body *')].filter(el=>
      el.children.length===0 && (el.textContent||'').trim().toLowerCase().includes('rotate your phone') &&
      (el.textContent||'').trim().toLowerCase().includes('landscape')
    );
    candidates.forEach(el=>{el.style.setProperty('display','none','important')});
  }

  let toastTimer;
  function helperToast(text){
    let t=document.getElementById('wwMapHelperToast');
    if(!t){t=document.createElement('div');t.id='wwMapHelperToast';t.className='ww-map-helper-toast';t.setAttribute('role','status');document.body.appendChild(t)}
    t.textContent=text;clearTimeout(toastTimer);
    requestAnimationFrame(()=>t.classList.add('show'));
    toastTimer=setTimeout(()=>t.classList.remove('show'),4000);
  }

  function makeHelpers(){
    const filter=document.getElementById('mapFilterBtn');if(!filter)return;
    hideOldRotatePill();
    let press=document.getElementById('wwMapPressHelp');
    let rotate=document.getElementById('wwMapRotateHelp');
    if(!press){
      press=document.createElement('button');press.type='button';press.id='wwMapPressHelp';press.className='ww-map-helper-btn';
      press.setAttribute('aria-label','How to open detailed country maps');
      press.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 11V6.5a2 2 0 0 1 4 0V10"/><path d="M13.5 9V5.5a2 2 0 0 1 4 0V11"/><path d="M17.5 10V8a2 2 0 0 1 4 0v6c0 5-3 8-8 8h-1.2c-2.5 0-4.2-1.1-5.6-3l-3.4-4.5a2 2 0 0 1 3-2.6L9.5 15V9a2 2 0 0 1 4 0"/></svg>';
      press.onclick=()=>helperToast('Press and hold a country to open a detailed map with towns and cities.');
      document.body.appendChild(press);
    }
    if(!rotate){
      rotate=document.createElement('button');rotate.type='button';rotate.id='wwMapRotateHelp';rotate.className='ww-map-helper-btn';
      rotate.setAttribute('aria-label','Landscape map tip');
      rotate.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="3" width="8" height="14" rx="1.8"/><path d="M5 9a8 8 0 0 0 12 9"/><path d="m16 21 1-3-3-1"/><path d="M19 8a8 8 0 0 0-12-3"/><path d="m8 2-1 3 3 1"/></svg>';
      rotate.onclick=()=>helperToast(ROTATE_TEXT);
      document.body.appendChild(rotate);
    }
    const position=()=>{
      const r=filter.getBoundingClientRect();
      if(!r.width||!document.body.classList.contains('map-view')){press.style.display=rotate.style.display='none';return}
      press.style.display=rotate.style.display='grid';
      const small=r.width*.85, gap=10, left=r.left+(r.width-small)/2;
      [press,rotate].forEach(b=>{b.style.width=b.style.height=small+'px';b.style.left=left+'px'});
      press.style.top=(r.top-gap-small)+'px';
      rotate.style.top=(r.bottom+gap)+'px';
    };
    position();window.addEventListener('resize',position,{passive:true});
    new MutationObserver(position).observe(document.body,{attributes:true,attributeFilter:['class']});
  }

  function openCardFromMapPopup(d,country){
    if(!country)return;
    try{if(d?.open)d.close()}catch(_){}
    setTimeout(()=>{
      try{d?.remove()}catch(_){}
      if(typeof openCountry==='function')openCountry(country,{type:'map'});
    },0);
  }

  /* Enhance each freshly-created long-press dialog after its context marker lands. */
  const enhance=()=>{
    const d=document.getElementById('wwCountryMapDialog');
    if(!d?.classList.contains('ww-from-world-map')||d.dataset.wwMapNavReady)return;
    d.dataset.wwMapNavReady='1';
    const title=d.querySelector('.ww-map-title'),close=d.querySelector('.ww-map-close'),head=d.querySelector('.ww-map-head');
    const country=(title?.textContent||'').trim();
    if(!title||!close||!head||!country)return;
    const go=()=>openCardFromMapPopup(d,country);
    title.setAttribute('role','button');title.setAttribute('tabindex','0');title.setAttribute('title','Open country card');
    title.addEventListener('click',go);
    title.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
    let actions=document.createElement('div');actions.className='ww-map-head-actions';
    close.parentNode.insertBefore(actions,close);actions.appendChild(close);
    const u=typeof flagUrl==='function'?flagUrl(country):'';
    if(u){
      const b=document.createElement('button');b.type='button';b.className='ww-map-country-flag';b.setAttribute('aria-label','Open '+country+' country card');
      b.innerHTML='<img src="'+u+'" alt="">';b.onclick=go;actions.insertBefore(b,close);
    }
  };
  new MutationObserver(()=>{hideOldRotatePill();enhance()}).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','open']});
  makeHelpers();hideOldRotatePill();enhance();
})();


/* === WozzaWorld — remove map helper buttons 07 Oct 2026 === */
(()=>{
  const remove=()=>{
    document.getElementById('wwMapPressHelp')?.remove();
    document.getElementById('wwMapRotateHelp')?.remove();
    document.getElementById('wwMapHelperToast')?.remove();
  };
  remove();
  const obs=new MutationObserver(remove);
  obs.observe(document.body,{childList:true,subtree:true});
})();


/* === WozzaWorld — world-map rotate hint: show once per visit, fade after 5s === */
(()=>{
  if(window.__wwRotateHintFiveSeconds071026)return;
  window.__wwRotateHintFiveSeconds071026=true;

  let wasOnMap=false, timer=null, entryToken=0;

  const findHint=()=>[...document.querySelectorAll('body *')].find(el=>{
    const t=(el.textContent||'').trim().toLowerCase();
    return el.children.length===0 && t.includes('rotate your phone') && t.includes('landscape');
  });

  const showForEntry=()=>{
    const hint=findHint();
    if(!hint)return false;
    clearTimeout(timer);
    entryToken++;
    const token=entryToken;
    hint.style.setProperty('display','','important');
    hint.style.setProperty('visibility','visible','important');
    hint.style.setProperty('opacity','1','important');
    hint.style.setProperty('transition','opacity .55s ease','important');
    hint.style.setProperty('pointer-events','none','important');
    timer=setTimeout(()=>{
      if(token!==entryToken || !document.body.classList.contains('map-view'))return;
      hint.style.setProperty('opacity','0','important');
      setTimeout(()=>{
        if(token===entryToken && document.body.classList.contains('map-view')){
          hint.style.setProperty('visibility','hidden','important');
        }
      },600);
    },5000);
    return true;
  };

  const sync=()=>{
    const onMap=document.body.classList.contains('map-view');
    if(onMap && !wasOnMap){
      wasOnMap=true;
      let tries=0;
      const wait=()=>{
        if(!document.body.classList.contains('map-view'))return;
        if(showForEntry())return;
        if(++tries<30)setTimeout(wait,100);
      };
      wait();
    }else if(!onMap && wasOnMap){
      wasOnMap=false; entryToken++; clearTimeout(timer);
      const hint=findHint();
      if(hint){
        hint.style.removeProperty('opacity');
        hint.style.removeProperty('visibility');
        hint.style.removeProperty('transition');
        hint.style.removeProperty('pointer-events');
      }
    }
  };

  new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class'],childList:true,subtree:true});
  sync();
})();


/* === WozzaWorld — landscape overlay alignment to usable map area 07 Oct 2026 === */
(()=>{
  if(window.__wwLandscapeOverlayAlignment071026)return;
  window.__wwLandscapeOverlayAlignment071026=true;

  const st=document.createElement('style');
  st.id='ww-landscape-overlay-alignment-071026';
  st.textContent=`
    @media (orientation:landscape){
      /* Centre both overlays between the right edge of the nav rail and the
         right edge of the viewport, rather than against the whole screen. */
      body.map-view #countrySheet.sheet{
        left:calc(50% + (var(--ww-landscape-nav-width, 0px) / 2))!important;
        max-width:calc(100vw - var(--ww-landscape-nav-width, 0px) - 24px)!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map{
        transform:translateX(calc(var(--ww-landscape-nav-width, 0px) / 2))!important;
        max-width:calc(100vw - var(--ww-landscape-nav-width, 0px) - 24px)!important;
      }

      /* Country card on the world map is a workspace overlay in landscape:
         no blur/dim layer, and the left navigation rail remains usable. */
      body.map-view #wwCountryTopDialog.ww-country-popup #sheetBackdrop.open{
        background:transparent!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
        pointer-events:none!important;
      }
      body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet{
        pointer-events:auto!important;
      }
      body.map-view .topbar{
        pointer-events:auto!important;
        z-index:9002!important;
      }
    }
  `;
  document.head.appendChild(st);

  function syncNavWidth(){
    const landscape=matchMedia('(orientation:landscape)').matches;
    const onMap=document.body.classList.contains('map-view');
    if(!landscape||!onMap){
      document.documentElement.style.removeProperty('--ww-landscape-nav-width');
      return;
    }
    const nav=document.querySelector('.topbar');
    if(!nav)return;
    const r=nav.getBoundingClientRect();
    /* In landscape the nav is the narrow left rail. Ignore any transient
       full-width measurement while the responsive layout is settling. */
    if(r.width>0 && r.width<innerWidth*.35){
      document.documentElement.style.setProperty('--ww-landscape-nav-width',r.width+'px');
    }
  }

  syncNavWidth();
  requestAnimationFrame(syncNavWidth);
  setTimeout(syncNavWidth,120);
  addEventListener('resize',syncNavWidth,{passive:true});
  addEventListener('orientationchange',()=>setTimeout(syncNavWidth,120),{passive:true});
  new MutationObserver(syncNavWidth).observe(document.body,{attributes:true,attributeFilter:['class']});
})();

/* === WozzaWorld — audited landscape country-card alignment + real rotate-tip fade 07 Oct 2026 === */
(()=>{
  if(window.__wwAuditedLandscapeCountryAndRotate071026)return;
  window.__wwAuditedLandscapeCountryAndRotate071026=true;

  const st=document.createElement('style');
  st.id='ww-audited-landscape-country-rotate-071026';
  st.textContent=`
    /* The rotate message is styles.css body.map-view::after, not a DOM node.
       Keep it fully visible for five seconds, then fade it out. Removing and
       re-adding map-view when leaving/returning to World Map restarts it. */
    @keyframes wwRotateWorldTipFade071026{
      from{opacity:1}
      to{opacity:0}
    }
    @media (orientation:portrait){
      body.map-view::after{
        opacity:1!important;
        animation:wwRotateWorldTipFade071026 .45s ease 5s forwards!important;
      }
    }


  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — FINAL audited map-country alignment + rotate hint controller 07 Oct 2026 === */
(()=>{
  if(window.__wwFinalMapCountryAlignmentRotate071026)return;
  window.__wwFinalMapCountryAlignmentRotate071026=true;

  const st=document.createElement('style');
  st.id='ww-final-map-country-alignment-rotate-071026';
  st.textContent=`
    body.map-view::after{transition:opacity .55s ease!important}
    body.map-view.ww-rotate-tip-hidden::after{opacity:0!important;pointer-events:none!important}

  `;
  document.head.appendChild(st);

  let onMapLast=false,tipTimer=0;
  function syncRotateTip(){
    const onMap=document.body.classList.contains('map-view');
    if(onMap && !onMapLast){
      onMapLast=true;
      clearTimeout(tipTimer);
      document.body.classList.remove('ww-rotate-tip-hidden');
      tipTimer=setTimeout(()=>{
        if(document.body.classList.contains('map-view'))document.body.classList.add('ww-rotate-tip-hidden');
      },5000);
    }else if(!onMap && onMapLast){
      onMapLast=false;
      clearTimeout(tipTimer);
      document.body.classList.remove('ww-rotate-tip-hidden');
    }
  }
  new MutationObserver(syncRotateTip).observe(document.body,{attributes:true,attributeFilter:['class']});
  syncRotateTip();
})();


/* === WozzaWorld — portrait restore + landscape country polish + map controls 07 Oct 2026 === */
(()=>{
  if(window.__wwCountryResponsivePolish071026)return;
  window.__wwCountryResponsivePolish071026=true;

  const st=document.createElement('style');
  st.id='ww-country-responsive-polish-071026';
  st.textContent=`
    @media (orientation:portrait){
      body.map-view .map-filter-btn{
        right:20px!important;
        bottom:20px!important;
      }
      body.map-view::after{
        bottom:max(20px,env(safe-area-inset-bottom))!important;
        max-width:calc(100vw - 120px)!important;
        overflow:hidden!important;
        text-overflow:ellipsis!important;
      }
    }

    @media (orientation:landscape){
      body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet.sheet{
        transform:translate(-50%,-50%)!important;
        transform-origin:center center!important;
      }
      body.map-view #wwCountryTopDialog.ww-country-popup::backdrop{
        background:transparent!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
      }
      body.map-view #wwCountryTopDialog.ww-country-popup #sheetBackdrop,
      body.map-view #wwCountryTopDialog.ww-country-popup #sheetBackdrop.open{
        background:transparent!important;
        backdrop-filter:none!important;
        -webkit-backdrop-filter:none!important;
      }
    }
  `;
  document.head.appendChild(st);

  function resetPortraitCountryPosition(){
    if(!matchMedia('(orientation:portrait)').matches)return;
    const sheet=document.getElementById('countrySheet');
    const dlg=document.getElementById('wwCountryTopDialog');
    if(sheet){
      ['left','right','transform','max-width','width','top'].forEach(p=>sheet.style.removeProperty(p));
    }
    if(dlg){
      ['left','right','top','width','max-width','height','margin'].forEach(p=>dlg.style.removeProperty(p));
    }
  }

  function applyResponsiveCountryState(){
    if(matchMedia('(orientation:portrait)').matches){
      resetPortraitCountryPosition();
      return;
    }
    if(typeof alignOpenMapCountry==='function')alignOpenMapCountry();
  }

  addEventListener('resize',()=>requestAnimationFrame(applyResponsiveCountryState),{passive:true});
  addEventListener('orientationchange',()=>setTimeout(applyResponsiveCountryState,180),{passive:true});
  new MutationObserver(()=>requestAnimationFrame(applyResponsiveCountryState))
    .observe(document.body,{attributes:true,attributeFilter:['class']});
  requestAnimationFrame(applyResponsiveCountryState);
})();


/* === WozzaWorld — final map/card/info polish 07 Oct 2026 === */
(()=>{
  if(window.__wwFinalMapCardInfoPolish071026)return;
  window.__wwFinalMapCardInfoPolish071026=true;

  const st=document.createElement('style');
  st.id='ww-final-map-card-info-polish-071026';
  st.textContent=`
    #countryInfoDialog,
    #countryInfoDialog *{
      scrollbar-width:none!important;
      -ms-overflow-style:none!important;
    }
    #countryInfoDialog::-webkit-scrollbar,
    #countryInfoDialog *::-webkit-scrollbar{
      width:0!important;
      height:0!important;
      display:none!important;
      background:transparent!important;
    }

    @media (orientation:portrait){
      body.map-view::after{
        left:20px!important;
        right:140px!important;
        width:auto!important;
        max-width:none!important;
        transform:none!important;
        box-sizing:border-box!important;
        text-align:center!important;
      }
    }

    @media (orientation:landscape){
      body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet.sheet{
        transform:translate(-50%,-50%)!important;
        transform-origin:center center!important;
      }
    }
  `;
  document.head.appendChild(st);
})();

/* === WozzaWorld — stable-base portrait hint removal + landscape Google map sizing 07 Oct 2026 === */
(()=>{
  if(window.__wwStableMapPopupFix071026)return;
  window.__wwStableMapPopupFix071026=true;
  const st=document.createElement('style');
  st.id='ww-stable-map-popup-fix-071026';
  st.textContent=`
    /* Portrait: remove the old rotate-phone prompt completely. */
    @media (orientation:portrait){
      body.map-view::after{display:none!important;content:none!important}
    }

    /* Landscape: the long-press Google Map popup is 40% smaller than the
       stable-base popup and centred in the usable map workspace (right of nav). */
    @media (orientation:landscape){
      body.map-view #wwCountryMapDialog.ww-from-world-map{
        width:min(55.2vw,408px)!important;
        max-width:min(calc(100vw - var(--ww-landscape-nav-width,0px) - 24px),408px)!important;
        transform:translateX(calc(var(--ww-landscape-nav-width,0px) / 2))!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-card{
        padding:11px!important;
        border-radius:18px!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-head{
        gap:8px!important;
        padding:1px 1px 8px!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-title{
        font-size:17px!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-close,
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-country-flag{
        width:28px!important;height:28px!important;min-width:28px!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-close{font-size:20px!important}
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-canvas{
        height:min(37.2vh,312px)!important;
        min-height:0!important;
        border-radius:13px!important;
      }
    }
  `;
  document.head.appendChild(st);

  /* The stable base also has JS which can resurrect the rotate hint by inline
     styles. In portrait, remove the actual hint element as a second safeguard. */
  function removePortraitRotateHint(){
    if(!matchMedia('(orientation:portrait)').matches)return;
    [...document.querySelectorAll('body *')].forEach(el=>{
      const t=(el.textContent||'').trim().toLowerCase();
      if(el.children.length===0 && t.includes('rotate your phone') && t.includes('landscape')){
        el.style.setProperty('display','none','important');
        el.style.setProperty('visibility','hidden','important');
      }
    });
  }
  removePortraitRotateHint();
  new MutationObserver(removePortraitRotateHint).observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['class','style']});
  addEventListener('orientationchange',()=>setTimeout(removePortraitRotateHint,100),{passive:true});
})();

/* === WozzaWorld — landscape Google popup taller + 20% wider 07 Oct 2026 === */
(()=>{
  if(window.__wwLandscapeGooglePopupTallWide071026)return;
  window.__wwLandscapeGooglePopupTallWide071026=true;
  const st=document.createElement('style');
  st.id='ww-landscape-google-popup-tall-wide-071026';
  st.textContent=`
    @media (orientation:landscape){
      body.map-view #wwCountryMapDialog.ww-from-world-map{
        width:min(66.24vw,489.6px)!important;
        max-width:min(calc(100vw - var(--ww-landscape-nav-width,0px) - 24px),489.6px)!important;
        height:calc(100vh - 20px)!important;
        max-height:calc(100vh - 20px)!important;
        transform:translateX(calc(var(--ww-landscape-nav-width,0px) / 2))!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-card{
        height:100%!important;
        box-sizing:border-box!important;
        display:flex!important;
        flex-direction:column!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-head{
        flex:0 0 auto!important;
      }
      body.map-view #wwCountryMapDialog.ww-from-world-map .ww-map-canvas{
        flex:1 1 auto!important;
        height:auto!important;
        min-height:0!important;
      }
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld — unified Google popup heading + remove country-card grabber 07 Oct 2026 === */
(()=>{
  if(window.__wwUnifiedGoogleHeadingAndNoGrabber071026)return;
  window.__wwUnifiedGoogleHeadingAndNoGrabber071026=true;

  const st=document.createElement('style');
  st.id='ww-unified-google-heading-no-grabber-071026';
  st.textContent=`
    /* Country card is not draggable: remove the misleading grey handle everywhere. */
    #countrySheet .grabber{
      display:none!important;
    }

    /* Every embedded Google Map popup:
       match the strong "Explore and Collect" heading treatment. */
    #wwCountryMapDialog .ww-map-title{
      text-transform:none!important;
      letter-spacing:-.025em!important;
      font-weight:950!important;
      line-height:1.02!important;
      font-size:clamp(24px,5.5vw,34px)!important;
    }

    /* World-map popup keeps its white heading; country-card popup keeps dark ink. */
    #wwCountryMapDialog.ww-from-world-map .ww-map-title{
      color:#fff!important;
    }
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{
      color:#153047!important;
    }

    @media (orientation:landscape){
      #wwCountryMapDialog .ww-map-title{
        font-size:clamp(22px,3vw,32px)!important;
      }
    }
  `;
  document.head.appendChild(st);
})();


/* === WozzaWorld — Google popup headings EXACT Milestones h2 typography 07 Oct 2026 === */
(()=>{
  if(window.__wwGooglePopupExactMilestoneHeading071026)return;
  window.__wwGooglePopupExactMilestoneHeading071026=true;

  const st=document.createElement('style');
  st.id='ww-google-popup-exact-milestone-heading-071026';
  st.textContent=`
    /* Exact typography used by .milestones-head h2 ("Explore and Collect"). */
    #wwCountryMapDialog .ww-map-title,
    body.map-view #wwCountryMapDialog .ww-map-title,
    #wwCountryMapDialog.ww-from-world-map .ww-map-title,
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{
      font-family:"Archivo Black",Impact,sans-serif!important;
      font-size:27px!important;
      line-height:1.05!important;
      letter-spacing:-.025em!important;
      font-weight:400!important;
      text-transform:none!important;
    }

    #wwCountryMapDialog.ww-from-world-map .ww-map-title{color:#fff!important}
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{color:#153047!important}

    @media(max-width:620px){
      #wwCountryMapDialog .ww-map-title,
      body.map-view #wwCountryMapDialog .ww-map-title,
      #wwCountryMapDialog.ww-from-world-map .ww-map-title,
      #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{
        font-size:22px!important;
      }
    }
  `;
  document.head.appendChild(st);

  /* The world-map route supplies some country names as ALL CAPS.
     CSS cannot turn ALL CAPS source text back into proper case, so normalise
     only all-uppercase popup titles. Already-correct names are left untouched. */
  const properCase=s=>String(s||'').toLocaleLowerCase().replace(/(^|[\s\-’'])(\p{L})/gu,(m,p,c)=>p+c.toLocaleUpperCase());
  const fix=()=>{
    document.querySelectorAll('#wwCountryMapDialog .ww-map-title').forEach(el=>{
      const s=(el.textContent||'').trim();
      if(s && s===s.toLocaleUpperCase() && s!==s.toLocaleLowerCase()){
        el.textContent=properCase(s);
      }
    });
  };
  fix();
  new MutationObserver(fix).observe(document.body,{childList:true,subtree:true,characterData:true});
})();


/* === WozzaWorld — regression guard: milestone map headings + landscape country scale 07 Oct 2026 === */
(()=>{
  if(window.__wwRegressionGuardMapHeadingCountryScale071026)return;
  window.__wwRegressionGuardMapHeadingCountryScale071026=true;
  const st=document.createElement('style');
  st.id='ww-regression-guard-map-heading-country-scale-071026';
  st.textContent=`
    #wwCountryMapDialog .ww-map-title,
    body.map-view #wwCountryMapDialog .ww-map-title,
    #wwCountryMapDialog.ww-from-world-map .ww-map-title,
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{
      font-family:"Archivo Black",Impact,sans-serif!important;
      font-size:27px!important;
      line-height:1.05!important;
      letter-spacing:-.025em!important;
      font-weight:400!important;
      text-transform:none!important;
    }
    #wwCountryMapDialog.ww-from-world-map .ww-map-title{color:#fff!important}
    #wwCountryMapDialog:not(.ww-from-world-map) .ww-map-title{color:#153047!important}
    @media(max-width:620px){#wwCountryMapDialog .ww-map-title{font-size:22px!important}}
    @media (orientation:landscape){
      body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet.sheet{
        transform:translate(-50%,-50%)!important;
        transform-origin:center center!important;
      }
      body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet .country-hero-minimal{
        min-height:0!important;
      }
    }
  `;
  document.head.appendChild(st);
})();

/* Landscape country modal: same viewport-centred footprint and backdrop as Country Info.
   The native host occupies the whole viewport; no sidebar-relative coordinates. */
(()=>{
 const style=document.createElement('style');
 style.id='ww-landscape-country-info-parity-081026';
 style.textContent=`
 @media (orientation:landscape){
   body.map-view #wwCountryTopDialog.ww-country-popup{
     position:fixed!important;inset:0!important;left:0!important;right:0!important;
     top:0!important;bottom:0!important;width:100vw!important;height:100dvh!important;
     max-width:none!important;max-height:none!important;margin:0!important;
     padding:0!important;background:transparent!important;overflow:visible!important;
   }
   body.map-view #wwCountryTopDialog.ww-country-popup::backdrop{
     background:rgba(8,27,39,.58)!important;
     backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important;
   }
   body.map-view #wwCountryTopDialog.ww-country-popup #sheetBackdrop.open{
     position:fixed!important;inset:0!important;
     background:rgba(8,27,39,.58)!important;
     backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important;
     pointer-events:auto!important;
   }
   body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet.sheet{
     position:fixed!important;left:50%!important;top:50%!important;
     right:auto!important;bottom:auto!important;
     transform:translate(-50%,-50%)!important;transform-origin:center center!important;
     width:min(760px,84vw)!important;max-width:min(760px,84vw)!important;
     height:auto!important;max-height:90dvh!important;
     overflow-y:auto!important;box-sizing:border-box!important;
     border-radius:28px!important;
   }
   body.map-view #wwCountryTopDialog.ww-country-popup #countrySheet .country-hero-minimal{
     min-height:0!important;height:clamp(85px,23dvh,150px)!important;
     max-height:23dvh!important;
   }
 }`;
 document.head.appendChild(style);
 function clearLegacyInline(){
   if(!document.body.classList.contains('map-view')||!matchMedia('(orientation:landscape)').matches)return;
   const sheet=document.querySelector('#wwCountryTopDialog.ww-country-popup #countrySheet.sheet.open');
   if(!sheet)return;
   for(const property of ['left','right','top','bottom','width','height','max-width','max-height','transform'])sheet.style.removeProperty(property);
   const back=document.getElementById('sheetBackdrop');
   if(back)for(const property of ['background','backdrop-filter','-webkit-backdrop-filter','pointer-events'])back.style.removeProperty(property);
 }
 const previousOpen=openCountry;
 openCountry=function(){const result=previousOpen.apply(this,arguments);requestAnimationFrame(clearLegacyInline);return result};
})();

/* Landscape-only seven equal country action buttons — preserve portrait grid */
(()=>{
 const style=document.createElement('style');
 style.id='ww-country-seven-landscape-actions-081026';
 style.textContent=`
 @media (orientation:landscape){
  body.map-view #countrySheet .choice-grid,
  body.map-view #countrySheet .country-status-grid{
   display:grid!important;grid-template-columns:repeat(7,minmax(0,1fr))!important;
   grid-template-rows:minmax(0,1fr)!important;gap:8px!important;align-items:stretch!important;
  }
  body.map-view #countrySheet .choice-grid > button,
  body.map-view #countrySheet .country-status-grid > button{
   grid-row:1!important;min-width:0!important;width:100%!important;height:100%!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid{
   display:contents!important;aspect-ratio:auto!important;padding:0!important;border:0!important;
   background:none!important;box-shadow:none!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid > button{
   grid-row:1!important;min-width:0!important;min-height:0!important;
   height:100%!important;width:100%!important;border-radius:14px!important;
   box-shadow:0 3px 8px rgba(16,48,58,.09)!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid > button:nth-child(1){grid-column:4!important}
  body.map-view #countrySheet .ww-country-utility-grid > button:nth-child(2){grid-column:5!important}
  body.map-view #countrySheet .ww-country-utility-grid > button:nth-child(3){grid-column:6!important}
  body.map-view #countrySheet .ww-country-utility-grid > button:nth-child(4){grid-column:7!important}
 }
 `;
 document.head.appendChild(style);
})();

/* Landscape country utility labels and icon parity — 08 Oct 2026 */
(()=>{
 const style=document.createElement('style');
 style.id='ww-landscape-country-utility-labels-081026';
 style.textContent=`
 @media (orientation:landscape){
  body.map-view #countrySheet .ww-country-utility-grid > button{
   display:flex!important;flex-direction:column!important;align-items:center!important;
   justify-content:center!important;gap:6px!important;
   font-family:inherit!important;
   font-weight:400!important;line-height:1.12!important;color:#31414d!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid > button .ww-utility-label{
   display:block!important;font:inherit!important;line-height:1.12!important;
   white-space:nowrap!important;color:#31414d!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-info img{
   width:23px!important;height:23px!important;max-width:23px!important;max-height:23px!important;
   top:0!important;left:0!important;transform:translateY(3px)!important;
  }
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg,
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-pin svg,
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{
   width:23px!important;height:23px!important;max-width:23px!important;max-height:23px!important;
   top:0!important;left:0!important;transform:translateY(3px)!important;
  }
  /* Clock face is 34/48 of its 23px SVG: match the visible circle, not the icon box. */
  body.map-view #countrySheet .country-status-grid > button[data-status="visited"] .status-tick{width:23px!important;height:23px!important;min-width:23px!important;min-height:23px!important}
  body.map-view #countrySheet .country-status-grid > button[data-status="visited"] .status-tick::before{width:20px!important;height:20px!important;border-width:1.8px!important}
  body.map-view #countrySheet .country-status-grid > button[data-status="visited"] > span:last-child{transform:translateY(1px)!important}
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{color:#e2aa16!important}
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-pin svg{color:#ef3340!important}
  body.map-view #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{color:#31414d!important}
 }
 `;
 document.head.appendChild(style);
 const labels=[['.ww-country-mini-info','Info'],['.ww-country-mini-add','Add trip'],['.ww-country-mini-pin','Map'],['.ww-country-mini-search','Research']];
 function apply(){
  const box=document.querySelector('#countrySheet .ww-country-utility-grid');if(!box)return;
  for(const [selector,label] of labels){const button=box.querySelector(selector);if(!button||button.querySelector('.ww-utility-label'))continue;
   const span=document.createElement('span');span.className='ww-utility-label';span.textContent=label;button.appendChild(span);
  }
 }
 const previousRender=renderSheet;
 renderSheet=function(){const result=previousRender.apply(this,arguments);apply();return result};
 apply();
})();

/* Country action typography: one landscape rule for all seven buttons.
   The four utility buttons previously inherited a larger font from their icon
   rules; set identical text metrics on native buttons and utility labels. */
(()=>{
 const style=document.createElement('style');
 style.id='ww-country-seven-unified-labels-081026';
 style.textContent=`
 @media (orientation:landscape){
   body.map-view #countrySheet .choice-grid > button,
   body.map-view #countrySheet .country-status-grid > button,
   body.map-view #countrySheet .ww-country-utility-grid > button{
     font-family:inherit!important;
     font-size:12px!important;
     font-weight:400!important;
     line-height:1.12!important;
     letter-spacing:normal!important;
     text-transform:none!important;
   }
   body.map-view #countrySheet .ww-country-utility-grid > button .ww-utility-label{
     display:block!important;
     font-family:inherit!important;
     font-size:12px!important;
     font-weight:400!important;
     line-height:1.12!important;
     letter-spacing:normal!important;
     white-space:nowrap!important;
     max-width:100%!important;
     text-align:center!important;
   }
 }
 `;
 document.head.appendChild(style);
})();

/* Portrait-only country utility label isolation — 08 Oct 2026.
   Labels are inserted by the landscape enhancement even in portrait.
   Keep them in the DOM for landscape, but never lay them out in portrait. */
(()=>{
 const style=document.createElement('style');
 style.id='ww-portrait-country-utility-label-isolation-081026';
 style.textContent=`
 @media (orientation:portrait){
   #countrySheet .ww-country-utility-grid > button .ww-utility-label{
     display:none!important;
     visibility:hidden!important;
   }
 }
 `;
 document.head.appendChild(style);
})();

/* Homepage country cards: reuse audited map landscape action geometry. */
(()=>{
 const style=document.createElement('style');
 style.id='ww-home-country-landscape-parity-081026';
 style.textContent=`
 @media (orientation:landscape){
  body.ww-home-country-landscape #countrySheet.sheet.open{
   position:fixed!important;left:50%!important;top:50%!important;right:auto!important;bottom:auto!important;
   transform:translate(-50%,-50%)!important;transform-origin:center center!important;
   width:min(760px,84vw)!important;max-width:min(760px,84vw)!important;
   height:auto!important;max-height:90dvh!important;overflow-y:auto!important;
   box-sizing:border-box!important;border-radius:28px!important;
  }
  body.ww-home-country-landscape #countrySheet .country-hero-minimal{
   min-height:0!important;height:clamp(85px,23dvh,150px)!important;max-height:23dvh!important;
  }
  body.ww-home-country-landscape #sheetBackdrop.open{
   position:fixed!important;inset:0!important;
   background:rgba(8,27,39,.58)!important;
   backdrop-filter:blur(3px)!important;-webkit-backdrop-filter:blur(3px)!important;
  }
 }
 
 @media (orientation:landscape){
  body.ww-home-country-landscape #countrySheet .choice-grid,
  body.ww-home-country-landscape #countrySheet .country-status-grid{
   display:grid!important;grid-template-columns:repeat(7,minmax(0,1fr))!important;
   grid-template-rows:minmax(0,1fr)!important;gap:8px!important;align-items:stretch!important;
  }
  body.ww-home-country-landscape #countrySheet .choice-grid > button,
  body.ww-home-country-landscape #countrySheet .country-status-grid > button{
   grid-row:1!important;min-width:0!important;width:100%!important;height:100%!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid{
   display:contents!important;aspect-ratio:auto!important;padding:0!important;border:0!important;
   background:none!important;box-shadow:none!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button{
   grid-row:1!important;min-width:0!important;min-height:0!important;
   height:100%!important;width:100%!important;border-radius:14px!important;
   box-shadow:0 3px 8px rgba(16,48,58,.09)!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button:nth-child(1){grid-column:4!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button:nth-child(2){grid-column:5!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button:nth-child(3){grid-column:6!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button:nth-child(4){grid-column:7!important}
 }
 

 @media (orientation:landscape){
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button{
   display:flex!important;flex-direction:column!important;align-items:center!important;
   justify-content:center!important;gap:6px!important;
   font-family:inherit!important;
   font-weight:400!important;line-height:1.12!important;color:#31414d!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button .ww-utility-label{
   display:block!important;font:inherit!important;line-height:1.12!important;
   white-space:nowrap!important;color:#31414d!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-info img{
   width:23px!important;height:23px!important;max-width:23px!important;max-height:23px!important;
   top:0!important;left:0!important;transform:translateY(3px)!important;
  }
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg,
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-pin svg,
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{
   width:23px!important;height:23px!important;max-width:23px!important;max-height:23px!important;
   top:0!important;left:0!important;transform:translateY(3px)!important;
  }
  /* Clock face is 34/48 of its 23px SVG: match the visible circle, not the icon box. */
  body.ww-home-country-landscape #countrySheet .country-status-grid > button[data-status="visited"] .status-tick{width:23px!important;height:23px!important;min-width:23px!important;min-height:23px!important}
  body.ww-home-country-landscape #countrySheet .country-status-grid > button[data-status="visited"] .status-tick::before{width:20px!important;height:20px!important;border-width:1.8px!important}
  body.ww-home-country-landscape #countrySheet .country-status-grid > button[data-status="visited"] > span:last-child{transform:translateY(1px)!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-add .ww-country-plus-svg{color:#e2aa16!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-pin svg{color:#ef3340!important}
  body.ww-home-country-landscape #countrySheet .ww-country-utility-grid .ww-country-mini-search svg{color:#31414d!important}
 }
 

 @media (orientation:landscape){
   body.ww-home-country-landscape #countrySheet .choice-grid > button,
   body.ww-home-country-landscape #countrySheet .country-status-grid > button,
   body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button{
     font-family:inherit!important;
     font-size:12px!important;
     font-weight:400!important;
     line-height:1.12!important;
     letter-spacing:normal!important;
     text-transform:none!important;
   }
   body.ww-home-country-landscape #countrySheet .ww-country-utility-grid > button .ww-utility-label{
     display:block!important;
     font-family:inherit!important;
     font-size:12px!important;
     font-weight:400!important;
     line-height:1.12!important;
     letter-spacing:normal!important;
     white-space:nowrap!important;
     max-width:100%!important;
     text-align:center!important;
   }
 }
 
 `;document.head.appendChild(style);
 function sync(){
  const sheet=document.getElementById('countrySheet');
  const active=!!sheet?.classList.contains('open')&&!document.body.classList.contains('map-view')&&matchMedia('(orientation:landscape)').matches;
  document.body.classList.toggle('ww-home-country-landscape',active);
  if(active){
   for(const property of ['left','right','top','bottom','width','height','max-width','max-height','transform'])sheet.style.removeProperty(property);
  }
 }
 const sheet=document.getElementById('countrySheet');
 if(sheet)new MutationObserver(sync).observe(sheet,{attributes:true,attributeFilter:['class']});
 addEventListener('resize',sync,{passive:true});
 addEventListener('orientationchange',sync,{passive:true});
 sync();
})();

/* === WozzaWorld logo menu — audited existing launcher reuse 08 Oct 2026 === */
(()=>{
  if(window.__wwLogoMenu081026)return;
  window.__wwLogoMenu081026=true;
  const logo=document.getElementById('homeLogo');
  if(!logo)return;
  const css=document.createElement('style');
  css.id='ww-logo-menu-styles';
  css.textContent=`
    #wwLogoMenu{position:fixed;z-index:2147483000;top:max(12px,env(safe-area-inset-top));right:max(12px,env(safe-area-inset-right));width:min(310px,calc(100vw - 24px));padding:18px;border:1px solid rgba(255,255,255,.35);border-radius:25px;background:linear-gradient(145deg,#075c73 0%,#078d9a 58%,#075a70 100%);box-shadow:0 18px 48px rgba(0,27,41,.36);color:#fff;box-sizing:border-box}
    #wwLogoMenu[hidden]{display:none!important}
    #wwLogoMenu .ww-logo-menu-heading{font-size:17px;font-weight:800;letter-spacing:.025em;margin:0 30px 12px 7px}
    #wwLogoMenu .ww-logo-menu-close{position:absolute;top:11px;right:12px;border:0;background:rgba(255,255,255,.15);color:#fff;border-radius:50%;width:32px;height:32px;font-size:23px;line-height:1;cursor:pointer}
    #wwLogoMenu .ww-logo-menu-item{width:100%;display:flex;align-items:center;gap:15px;padding:8px 9px;border:0;border-radius:15px;background:transparent;color:#fff;text-align:left;font-family:inherit;font-size:16px;font-weight:600;line-height:1.3;cursor:pointer}
    #wwLogoMenu .ww-logo-menu-item:hover,#wwLogoMenu .ww-logo-menu-item:focus-visible{background:rgba(255,255,255,.14)}
    #wwLogoMenu .ww-logo-menu-icon{display:grid;place-items:center;flex:0 0 46px;width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:rgba(0,51,66,.18)}
    #wwLogoMenu .ww-logo-menu-icon svg{width:25px;height:25px;stroke:#fff;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;fill:none}
    #wwLogoMenu .ww-menu-copyright{margin:12px 7px 0;padding:14px 4px 0;border-top:1px solid rgba(255,255,255,.25);text-align:left;color:rgba(255,255,255,.82);font-size:11px;line-height:1.6}
    #wwLogoMenu .ww-menu-copyright strong{display:block;color:#fff;font-size:12px;font-weight:650}
    /* Country removal confirmations — two-tone Recycle Bin visual language.
       Existing dialog markup, text updates, and button handlers are untouched. */
    #removeDialog{box-sizing:border-box!important;width:min(420px,calc(100vw - 32px))!important;max-width:calc(100vw - 32px)!important;border:0!important;border-radius:26px!important;background:#f4fbfb!important;color:#193d4a!important;box-shadow:0 20px 55px rgba(0,27,41,.36)!important;padding:0!important;overflow:hidden!important}
    #removeDialog::backdrop{background:rgba(5,34,51,.32)!important;backdrop-filter:blur(7px)!important;-webkit-backdrop-filter:blur(7px)!important}
    #removeDialog form{margin:0!important;padding:0 0 22px!important;background:#f4fbfb!important;color:#193d4a!important;overflow:hidden!important;border-radius:26px!important}
    #removeDialog:has(#removeDialogTitle) #removeDialogTitle{box-sizing:border-box!important;display:block!important;width:100%!important;margin:0 0 20px!important;padding:26px!important;background:linear-gradient(120deg,#086579,#0aa3a6)!important;color:#fff!important;font-size:clamp(20px,5.3vw,27px)!important;font-weight:800!important;line-height:1.3!important;text-align:left!important;white-space:nowrap!important;letter-spacing:-.035em!important}
    @media(max-width:430px){#removeDialog #removeDialogTitle{font-size:clamp(19px,5vw,24px)!important;padding-left:22px!important;padding-right:12px!important}}
    #removeDialog p{margin:0 26px 22px!important;padding:0!important;color:#193d4a!important;text-align:left!important;line-height:1.5!important}
    #removeDialog .dialog-actions,#removeDialog menu,#removeDialog .actions{padding:0 26px!important;margin:0!important;background:transparent!important}
    #removeDialog button{border-radius:999px!important;font-family:inherit!important;font-weight:750!important;box-shadow:none!important}
    #removeDialog #confirmRemove{background:#f55849!important;color:#fff!important;border-color:transparent!important;font-weight:750!important}
    #removeDialog button:not(#confirmRemove){background:#e9bd2a!important;color:#193d4a!important;border-color:transparent!important;font-weight:750!important}
    /* Shared two-tone styling for the traveller and passport-stat dialogs. */
    #peopleDialog,#passportStatDialog{box-sizing:border-box!important;width:min(420px,calc(100vw - 32px))!important;max-width:calc(100vw - 32px)!important;max-height:min(85dvh,760px)!important;border:0!important;border-radius:26px!important;background:#f4fbfb!important;color:#193d4a!important;box-shadow:0 20px 55px rgba(0,27,41,.36)!important;padding:0!important;overflow:hidden!important}
    #peopleDialog::backdrop,#passportStatDialog::backdrop{background:rgba(5,34,51,.34)!important;backdrop-filter:blur(7px)!important;-webkit-backdrop-filter:blur(7px)!important}
    #peopleDialog #peopleDialogTitle,#passportStatDialog #passportStatTitle{box-sizing:border-box!important;display:block!important;width:100%!important;margin:0!important;padding:25px 26px!important;background:linear-gradient(120deg,#086579,#0aa3a6)!important;color:#fff!important;font-size:clamp(18px,5vw,24px)!important;font-weight:800!important;line-height:1.3!important;text-align:left!important}
    #peopleDialog #peopleDialogList{padding:20px 26px 12px!important;margin:0!important;color:#193d4a!important}
    #peopleDialog button{font-family:inherit!important;font-weight:750!important;border-radius:999px!important}
    #peopleDialog button:not(.you-chip){background:#e9bd2a!important;color:#193d4a!important;border-color:transparent!important}
    #passportStatDialog{display:none!important;flex-direction:column!important}
    #passportStatDialog[open]{display:flex!important}
    #passportStatDialog .ww-stat-head{flex:0 0 auto!important;background:linear-gradient(120deg,#086579,#0aa3a6)!important;padding:24px 26px!important;margin:0!important}
    #passportStatDialog .ww-stat-head #passportStatTitle{padding:0!important;margin:0!important;background:transparent!important;color:#fff!important;font-family:inherit!important;font-size:24px!important;line-height:1.3!important;font-weight:800!important;min-height:0!important;max-height:none!important;height:auto!important;flex:0 0 auto!important;letter-spacing:normal!important}
    #passportStatDialog #passportStatList{min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;flex:1 1 auto!important;padding:14px 26px 14px!important;background:#f4fbfb!important;scrollbar-width:none!important;-ms-overflow-style:none!important}
    #passportStatDialog #passportStatList::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}
    #passportStatDialog .passport-stat-row{color:#193d4a!important}
    #passportStatDialog .ww-stat-footer{display:flex!important;justify-content:flex-end!important;align-items:center!important;flex:0 0 auto!important;padding:12px 26px 22px!important;background:#f4fbfb!important}
    #passportStatDialog .ww-stat-footer #closePassportStat{position:static!important;display:inline-flex!important;align-items:center!important;justify-content:center!important;width:auto!important;height:auto!important;min-width:106px!important;min-height:44px!important;padding:10px 22px!important;border-radius:999px!important;background:#e9bd2a!important;color:#193d4a!important;font-family:inherit!important;font-size:16px!important;font-weight:750!important;border:0!important;box-shadow:none!important}
    .ww-logo-placeholder:not([open]){display:none!important}
    .ww-logo-placeholder[open]{display:flex;flex-direction:column;max-height:min(85dvh,760px);overflow:hidden;border:0;border-radius:24px;padding:0;width:min(420px,calc(100vw - 32px));max-width:calc(100vw - 32px);background:#f4fbfb;color:#193d4a;box-shadow:0 20px 70px rgba(0,20,30,.35)}
    .ww-logo-placeholder::backdrop{background:rgba(0,24,35,.55);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}
    .ww-logo-placeholder .ww-logo-placeholder-top{background:linear-gradient(120deg,#086579,#0aa3a6);color:#fff;padding:24px 26px;border-radius:24px 24px 0 0}
    .ww-logo-placeholder h2{margin:0;font-size:24px}.ww-logo-placeholder .ww-logo-placeholder-body{padding:20px 26px 22px;min-height:0;flex:1 1 auto;overflow-y:auto;overscroll-behavior:contain}.ww-logo-placeholder p{padding:0;margin:0 0 14px;font-size:15px;line-height:1.55}
    .ww-logo-placeholder .ww-roadmap-accordion{display:grid;gap:9px;margin:10px 0 18px}
    .ww-logo-placeholder .ww-roadmap-item,#countryInfoDialog .ww-roadmap-item{border:1px solid #c4e0e2;border-radius:14px;background:#fff;overflow:hidden}
    .ww-logo-placeholder .ww-roadmap-item summary,#countryInfoDialog .ww-roadmap-item summary{display:flex;align-items:center;justify-content:space-between;gap:12px;list-style:none;cursor:pointer;padding:15px 16px;color:#14505a;font-size:15px;font-weight:750;user-select:none}
    .ww-logo-placeholder .ww-roadmap-item summary::-webkit-details-marker,#countryInfoDialog .ww-roadmap-item summary::-webkit-details-marker{display:none}
    .ww-logo-placeholder .ww-roadmap-item summary::after,#countryInfoDialog .ww-roadmap-item summary::after{content:'';display:block;flex:none;width:9px;height:9px;border-right:2px solid #137784;border-bottom:2px solid #137784;transform:rotate(45deg);transition:transform .15s ease;margin-right:4px;margin-top:-5px}
    .ww-logo-placeholder .ww-roadmap-item[open] summary::after,#countryInfoDialog .ww-roadmap-item[open] summary::after{transform:rotate(225deg);margin-top:5px}
    .ww-logo-placeholder .ww-roadmap-item[open] summary,#countryInfoDialog .ww-roadmap-item[open] summary{border-bottom:1px solid #e0eeee;background:#edf8f8}
    .ww-logo-placeholder .ww-roadmap-item-body,#countryInfoDialog .ww-roadmap-item-body{padding:13px 16px 4px}
    .ww-logo-placeholder .ww-roadmap-item-body p{margin-bottom:12px}
    #countryInfoDialog .country-facts-accordion.ww-roadmap-item{display:block!important;margin:0 0 10px!important;padding:0!important;box-shadow:none!important;min-height:0!important}
    #countryInfoDialog .country-facts-accordion.ww-roadmap-item>summary{display:flex!important;align-items:center!important;justify-content:space-between!important;text-transform:none!important;letter-spacing:normal!important;min-height:0!important;border:0!important;border-radius:0!important;background:transparent!important;box-shadow:none!important}
    #countryInfoDialog .country-facts-accordion.ww-roadmap-item[open]>summary{background:#edf8f8!important;border-bottom:1px solid #e0eeee!important}
    #countryInfoDialog .country-facts-accordion.ww-roadmap-item>.ww-roadmap-item-body{display:block!important;max-height:none!important;overflow:visible!important;background:#fff!important;border:0!important}
    #countryInfoDialog .country-facts-accordion.ww-roadmap-item>summary{text-transform:none!important}
    #countryInfoDialog .country-facts-card{background:#f4fbfb!important}
    @media (orientation:portrait){
      #countryInfoDialog.country-facts-dialog{height:94dvh!important;max-height:94dvh!important;width:calc(100vw - 24px)!important;max-width:calc(100vw - 24px)!important;box-sizing:border-box!important;overflow:hidden!important}
      #countryInfoDialog .country-facts-card{box-sizing:border-box!important;height:100%!important;max-height:100%!important;overflow-y:auto!important;overscroll-behavior:contain!important}
    }
    @media (orientation:landscape){
      body.map-view #countryInfoDialog #countryInfoBody:has(> .country-guide-photo){row-gap:14px!important}
      #countryInfoDialog .country-facts-accordion.ww-roadmap-item{margin-bottom:5px!important}
    }
    .ww-logo-placeholder .ww-roadmap-divider{border:0;border-top:1px solid #c5dfe1;margin:16px 0 20px}
    .ww-logo-placeholder .ww-logo-placeholder-close{display:block;flex:0 0 auto;margin:12px 26px 22px auto;background:#e9bd2a;border:0;border-radius:25px;padding:10px 25px;font-weight:750;color:#193d4a;cursor:pointer}
  `;
  document.head.appendChild(css);
  const icons={
    profile:'<circle cx="12" cy="8" r="4"/><path d="M4.5 21c0-4.3 3-7 7.5-7s7.5 2.7 7.5 7"/>',
    backup:'<path d="M4 17v3h16v-3M12 16V3m-5 5 5-5 5 5"/>',
    bin:'<path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
    privacy:'<path d="M12 2 4 6v6c0 5 3.3 8.5 8 10 4.7-1.5 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>',
    roadmap:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15M15 6v15"/>'
  };
  const menu=document.createElement('div');menu.id='wwLogoMenu';menu.hidden=true;menu.setAttribute('role','menu');menu.setAttribute('aria-label','WozzaWorld menu');
  menu.innerHTML='<div class="ww-logo-menu-heading">Menu</div><button class="ww-logo-menu-close" type="button" aria-label="Close menu">×</button>'+[
    ['profile','Profile'],['backup','Backup'],['bin','Recycle Bin'],['privacy','Privacy'],['roadmap','App Roadmap']
  ].map(([key,label])=>`<button type="button" class="ww-logo-menu-item" role="menuitem" data-ww-action="${key}"><span class="ww-logo-menu-icon"><svg viewBox="0 0 24 24" aria-hidden="true">${icons[key]}</svg></span><span>${label}</span></button>`).join('')+'<div class="ww-menu-copyright"><strong>WozzaWorld™</strong>© 2026 Warren Cox. All rights reserved.</div>';
  document.body.appendChild(menu);
  logo.title='Open WozzaWorld menu';logo.setAttribute('aria-label','Open WozzaWorld menu');logo.setAttribute('aria-haspopup','menu');logo.setAttribute('aria-expanded','false');
  function setOpen(open){menu.hidden=!open;logo.setAttribute('aria-expanded',String(open))}
  // The previous logo onclick reloads the page; replace only that interaction.
  logo.onclick=e=>{e.preventDefault();e.stopPropagation();setOpen(menu.hidden)};
  menu.querySelector('.ww-logo-menu-close').onclick=()=>setOpen(false);
  const privacyContent=`
    <p><strong>Your travels. Your memories. Your data.</strong></p>
    <p>WozzaWorld is designed to keep your trips, visited countries, bucket lists, notes and preferences in your browser's local storage, rather than in a WozzaWorld-hosted travel database. You don't need an online WozzaWorld account to organise your adventures.</p>
    <p><strong>You're in control.</strong> You can download a backup of your travel information. If you clear your browser data, remove the app or change devices, locally stored information may be lost unless you have a backup.</p>
    <p><strong>External services.</strong> Some features load resources or use third-party services, including Google Maps, mapping data, flags and fonts. These providers may receive technical information such as your IP address when their resources are requested, and apply their own privacy policies.</p>
    <p><strong>AI Analysis.</strong> WozzaWorld prepares a summary of your travel statistics and copies it for use with Google Gemini. You choose whether to paste and submit it to Gemini; it is not automatically submitted by WozzaWorld.</p>
    <p>We aim to minimise unnecessary data collection and be transparent about external services. Your adventures belong to you.</p>`;
  const roadmapContent=`
    <p><strong>A little app with big ambitions!</strong></p>
    <p>WozzaWorld is an independently developed passion project, created out of a love for travel and exploring the world.</p>
    <p>The app is currently completely free to use, and I'd love to keep making it bigger and better.</p>
    <p>Here are a few ideas I'm hoping to bring to life in the future.</p>
    <div class="ww-roadmap-accordion">
      <details class="ww-roadmap-item"><summary>Offline Support</summary><div class="ww-roadmap-item-body"><p>Making more of WozzaWorld available without an internet connection, so you can access your adventures wherever you are.</p></div></details>
      <details class="ww-roadmap-item"><summary>Multiple Languages</summary><div class="ww-roadmap-item-body"><p>Introducing additional languages to make WozzaWorld accessible to more travellers around the world.</p></div></details>
      <details class="ww-roadmap-item"><summary>Friend Connect</summary><div class="ww-roadmap-item-body"><p><strong>Because adventures are better shared!</strong></p><p>An ambition to bring travellers together! Connect with friends, collaborate on trip planning, share recommendations, compare travel stats and celebrate achievements.</p></div></details>
    </div>
    <hr class="ww-roadmap-divider">
    <p><strong>Help WozzaWorld Grow</strong></p>
    <p>WozzaWorld is currently free, and everything you see has been developed independently.</p>
    <p>I'd love to introduce these features, but further development takes time, resources and funding. What comes next will depend on the support the app receives and what's realistically achievable.</p>
    <p>If you enjoy using WozzaWorld and find it useful, please consider making a small voluntary donation to help support its future.</p>
    <p>There's absolutely no obligation. Every little bit of support would mean a lot, and simply using and enjoying the app is appreciated too!</p>
    <p><strong>Thank you for being part of the adventure.</strong></p>
    <p><em>Note: The roadmap is a collection of ideas and ambitions, not a promise of future features or release dates.</em></p>`;
  function placeholder(title){
    const id=title==='Privacy'?'wwLogoPrivacyDialog':'wwLogoRoadmapDialog';
    let d=document.getElementById(id);
    if(!d){d=document.createElement('dialog');d.id=id;d.className='ww-logo-placeholder';d.innerHTML=`<div class="ww-logo-placeholder-top"><h2>${title}</h2></div><div class="ww-logo-placeholder-body">${title==='Privacy'?privacyContent:roadmapContent}</div><button type="button" class="ww-logo-placeholder-close">Close</button>`;document.body.appendChild(d);d.querySelector('button').onclick=()=>d.close()}
    if(title==='App Roadmap'){
      const items=d.querySelectorAll('.ww-roadmap-item');
      items.forEach(item=>{item.open=false;if(!item.dataset.wwAccordionBound){item.dataset.wwAccordionBound='1';item.addEventListener('toggle',()=>{if(item.open)items.forEach(other=>{if(other!==item)other.open=false})})}});
    }
    if(!d.open)d.showModal();
  }
  menu.addEventListener('click',e=>{
    const item=e.target.closest('[data-ww-action]');if(!item)return;
    const action=item.dataset.wwAction;setOpen(false);
    if(action==='privacy')return placeholder('Privacy');
    if(action==='roadmap')return placeholder('App Roadmap');
    const selector={profile:'#wwPassportProfileButton',backup:'#openBackupRestore',bin:'#openRecycleBin'}[action];
    document.querySelector(selector)?.click();
  });
  document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!logo.contains(e.target))setOpen(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden)setOpen(false)});
})();



/* Audited dialog layout repair: correct inner form/header geometry without changing handlers. */
(()=>{
  if(document.getElementById('ww-dialog-layout-repair-081026'))return;
  const style=document.createElement('style');style.id='ww-dialog-layout-repair-081026';
  style.textContent=`
    section[data-screen="me"] .recycle-launch{display:none!important}
    #wwPassportNameDialog,#backupRestoreDialog{
      box-sizing:border-box!important;width:min(440px,calc(100vw - 32px))!important;
      max-width:calc(100vw - 32px)!important;max-height:min(85dvh,760px)!important;
      padding:0!important;border:0!important;border-radius:24px!important;
      background:#f4fbfb!important;color:#193d4a!important;
      box-shadow:0 20px 70px rgba(0,20,30,.35)!important;overflow:hidden!important
    }
    #wwPassportNameDialog::backdrop,#backupRestoreDialog::backdrop{
      background:rgba(0,24,35,.55)!important;backdrop-filter:blur(5px)!important;
      -webkit-backdrop-filter:blur(5px)!important
    }
    #wwPassportNameDialog .ww-profile-card,#backupRestoreDialog form{
      position:relative!important;box-sizing:border-box!important;width:100%!important;
      min-width:0!important;max-height:min(85dvh,760px)!important;overflow-y:auto!important;
      padding:0 26px 24px!important;margin:0!important;border:0!important;
      border-radius:24px!important;background:#f4fbfb!important;color:#193d4a!important;
      box-shadow:none!important
    }
    #wwPassportNameDialog h3,#backupRestoreDialog .recycle-head{
      display:block!important;box-sizing:border-box!important;width:calc(100% + 52px)!important;
      max-width:none!important;margin:0 -26px 22px!important;
      padding:25px 65px 25px 26px!important;border:0!important;
      border-radius:24px 24px 0 0!important;
      background:linear-gradient(120deg,#086579,#0aa3a6)!important;
      color:#fff!important;box-shadow:none!important
    }
    #wwPassportNameDialog h3,#backupRestoreDialog .recycle-head h3{
      font-size:24px!important;font-weight:800!important;line-height:1.3!important;
      color:#fff!important
    }
    #backupRestoreDialog .recycle-head h3{margin:0!important;padding:0!important;
      background:none!important;border:0!important;width:auto!important;max-width:none!important;
      font-size:24px!important;white-space:nowrap!important}
    #wwPassportNameDialog label{color:#193d4a!important}
    #wwPassportNameDialog .ww-profile-save,#backupRestoreDialog .backup-restore-actions button{
      background:#e9bd2a!important;color:#193d4a!important;border:0!important;
      border-radius:999px!important;font-weight:800!important;cursor:pointer!important
    }
    #wwPassportNameDialog .ww-profile-save{width:auto!important;display:block!important;
      margin:20px 0 0 auto!important;padding:11px 28px!important}
    #wwPassportNameDialog .ww-profile-close,#backupRestoreDialog .dialog-close-x{
      position:absolute!important;top:15px!important;right:16px!important;left:auto!important;
      z-index:5!important;display:grid!important;place-items:center!important;
      width:39px!important;height:39px!important;padding:0!important;
      border:0!important;border-radius:50%!important;background:rgba(255,255,255,.18)!important;
      color:#fff!important;box-shadow:none!important;font-size:28px!important;line-height:1!important
    }
    #backupRestoreDialog .backup-last-date{color:#193d4a!important}
    #backupRestoreDialog .backup-safe-note{color:#506872!important}
  `;
  document.head.appendChild(style);
})();

/* WozzaWorld — Recycle Bin and Backup: Roadmap-style footer Close controls.
   Presentation and button placement only; preserve original dialog close handlers,
   recycle rendering, selection, restore/delete and tumbleweed animation. */
(()=>{
  const recycle=document.getElementById('recycleDialog');
  const backup=document.getElementById('backupRestoreDialog');
  if(!recycle||!backup||document.getElementById('ww-dialog-footer-close-091026'))return;
  const style=document.createElement('style');
  style.id='ww-dialog-footer-close-091026';
  style.textContent=`
    #recycleDialog #closeRecycleDialog{display:none!important}
    #recycleDialog .dialog-actions{display:flex!important;justify-content:flex-end!important;
      padding:0 26px 22px!important;margin:0!important;background:#f4fbfb!important;
      border:0!important;box-shadow:none!important}
    #recycleDialog .dialog-actions button,
    #backupRestoreDialog .ww-backup-footer-close{
      display:block!important;position:static!important;inset:auto!important;
      width:auto!important;height:auto!important;min-width:0!important;
      margin:0!important;padding:10px 25px!important;
      border:0!important;border-radius:25px!important;
      background:#e9bd2a!important;color:#193d4a!important;
      font-family:inherit!important;font-size:inherit!important;font-weight:750!important;
      line-height:normal!important;box-shadow:none!important;cursor:pointer!important;
      transform:none!important
    }
    #backupRestoreDialog .ww-backup-footer-actions{
      display:flex;justify-content:flex-end;flex:0 0 auto;
      margin:12px 0 0;padding:0;background:transparent
    }
  `;
  document.head.appendChild(style);
  const backupClose=document.getElementById('closeBackupRestoreDialog');
  const form=backup.querySelector('form');
  if(backupClose&&form){
    backupClose.classList.remove('dialog-close-x');
    backupClose.classList.add('ww-backup-footer-close');
    backupClose.textContent='Close';
    const footer=document.createElement('div');
    footer.className='ww-backup-footer-actions';
    footer.appendChild(backupClose); // Keep the original button and its existing click handler.
    form.appendChild(footer);
  }
})();
