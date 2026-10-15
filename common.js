/* ---------- theme ---------- */
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  let saved = null;
  try{ saved = localStorage.getItem('mathla_theme'); }catch(e){}
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');
  if(initial === 'light') root.setAttribute('data-theme','light');
  function sync(){ btn.textContent = root.getAttribute('data-theme') === 'light' ? '🌙' : '☀️'; }
  sync();
  btn.addEventListener('click', ()=>{
    const isLight = root.getAttribute('data-theme') === 'light';
    if(isLight) root.removeAttribute('data-theme'); else root.setAttribute('data-theme','light');
    try{ localStorage.setItem('mathla_theme', isLight ? 'dark' : 'light'); }catch(e){}
    sync();
  });
})();

/* ---------- i18n ---------- */
const I18N = {
en:{eyebrow:"CAPS-ALIGNED · GRADES 10–12",h1:'Find the gap.<br>Then <span class="hl">close it.</span>',heroSub:"Practice by topic, sit past-paper style question sets, and see exactly which sections of the CAPS syllabus are costing you marks — not just a final score.",gradeWord:"Grade",questionLabel:"Question",statAttemptedLabel:"Questions attempted",statAccuracyLabel:"Overall accuracy",statTopicsLabel:"Topics live",topicsKicker:"PRACTICE BY TOPIC",topicsTitle:"Pick a topic. Every question is marked instantly.",dashKicker:"YOUR WEAKNESS MAP",dashTitle:"Built from every quiz you've actually taken, not a guess.",weakHeader:"WEAKEST TOPICS",strongHeader:"STRONGEST TOPICS",emptyWeak:"Take a few quizzes above — your lowest-scoring topics will show up here first.",emptyStrong:"Nothing tracked yet. Strong topics need at least one attempt each.",papersKicker:"QUESTION PAPERS",papersTitle:"Full-length practice sets pulled from your grade's topics — plus real past papers from the Department of Basic Education.",viewPaper:"View paper",footer:"Mathla — built as a CAPS-aligned study tool. Not affiliated with, endorsed by, or produced by the Department of Basic Education. Progress is stored on this device only.",comingSoon:"Coming soon",notAttempted:"Not attempted",printBtn:"Print / save as PDF",nextBtn:"Next",closeBtn:"Close",quizComplete:"Complete",savedNote:"Saved to your weakness map below.",realHeader:"Official DBE Past Papers",realDesc:"Real matric exam papers and memos, sourced directly from the Department of Basic Education, in English and Afrikaans.",paper1:"Paper 1",memo1:"Memo 1",paper2:"Paper 2",memo2:"Memo 2",browseAll:"Browse all years on education.gov.za",signInBtn:"Sign in",createAccountBtn:"Create account",emailLabel:"Email",passwordLabel:"Password",authNote:"Stored on this device only. This demo login does not create a real account.",authErrEmail:"Enter a valid email address.",authErrPassword:"Password must be at least 6 characters.",authErrExists:"An account with that email already exists.",authErrNoAccount:"No account found for that email. Try creating one.",authErrWrongPass:"Incorrect password.",signOutBtn:"Sign out",backToHome:"← Back to Mathla",continueBtn:"Continue to Mathla",alreadySignedIn:"You're signed in as"},
af:{eyebrow:"CAPS-BELYN · GRAAD 10–12",h1:'Vind die gaping.<br>Maak dit dan <span class="hl">toe.</span>',heroSub:"Oefen volgens onderwerp, sit eksamenstyl-vraestelle en sien presies watter dele van die CAPS-sillabus jou punte kos — nie net 'n finale telling nie.",gradeWord:"Graad",questionLabel:"Vraag",statAttemptedLabel:"Vrae probeer",statAccuracyLabel:"Algehele akkuraatheid",statTopicsLabel:"Onderwerpe beskikbaar",topicsKicker:"OEFEN VOLGENS ONDERWERP",topicsTitle:"Kies 'n onderwerp. Elke vraag word onmiddellik nagesien.",dashKicker:"JOU SWAKPUNT-KAART",dashTitle:"Gebou uit elke toets wat jy werklik afgelê het, nie 'n raaiskoot nie.",weakHeader:"SWAKSTE ONDERWERPE",strongHeader:"STERKSTE ONDERWERPE",emptyWeak:"Doen 'n paar toetse hierbo — jou swakste onderwerpe sal eerste hier verskyn.",emptyStrong:"Nog niks opgespoor nie. Sterk onderwerpe benodig ten minste een poging elk.",papersKicker:"VRAESTELLE",papersTitle:"Volledige oefenstelle uit jou graad se onderwerpe — plus regte ou vraestelle van die Departement van Basiese Onderwys.",viewPaper:"Bekyk vraestel",footer:"Mathla — gebou as 'n CAPS-belynde studiehulpmiddel. Nie geaffilieer met, goedgekeur deur, of vervaardig deur die Departement van Basiese Onderwys nie. Vordering word slegs op hierdie toestel gestoor.",comingSoon:"Kom binnekort",notAttempted:"Nog nie probeer nie",printBtn:"Druk / stoor as PDF",nextBtn:"Volgende",closeBtn:"Maak toe",quizComplete:"Voltooi",savedNote:"Gestoor in jou swakpunt-kaart hieronder.",realHeader:"Amptelike DBO-vraestelle",realDesc:"Regte matriek-eksamenvraestelle en memorandums, direk vanaf die Departement van Basiese Onderwys, in Engels en Afrikaans.",paper1:"Vraestel 1",memo1:"Memo 1",paper2:"Vraestel 2",memo2:"Memo 2",browseAll:"Blaai deur alle jare op education.gov.za"},
tn:{eyebrow:"E SAMAGANYWA LE CAPS · MAEMO A 10–12",h1:'Fumana lefapha le le fosahetseng.<br>Morago <span class="hl">o le baakanye.</span>',heroSub:"Ithute ka sehlogo se sengwe le se sengwe, dira dipampitshana tsa mokgwa wa tlhatlhobo ya kgale, mme o bone gore ke dikarolo dife tsa lenaneothuto la CAPS tse di go latofatsang ka manontlho — e seng fela palo ya bofelo.",gradeWord:"Mophato",questionLabel:"Potso",statAttemptedLabel:"Dipotso tse di lekilweng",statAccuracyLabel:"Tshiamo yotlhe",statTopicsLabel:"Ditlhogo tse di leng teng",topicsKicker:"ITHUTA KA SEHLOGO",topicsTitle:"Tlhopha sehlogo. Potso nngwe le nngwe e sekasekwa ka bonako.",dashKicker:"MABAPI LE BOKOA JWA GAGO",dashTitle:"E dirilwe go ya ka teko nngwe le nngwe e o e dirileng, e seng go akanya.",weakHeader:"DITLHOGO TSE DI BOKOA",strongHeader:"DITLHOGO TSE DI THATA",emptyWeak:"Dira diteko di se kae kwa godimo — ditlhogo tsa gago tse di bokoa di tla bonala fano pele.",emptyStrong:"Ga go na sepe se se lekilweng go fitlha jaanong. Ditlhogo tse di thata di tlhoka teko e le nngwe bosigo bongwe le bongwe.",papersKicker:"DIPAMPITSHANA TSA DIPOTSO",papersTitle:"Dipampitshana tsa tlhatlhobo tse di feletseng go tswa mo ditlhogong tsa mophato wa gago — le dipampitshana tsa mmatota tsa Lefapha la Thuto ya Motheo.",viewPaper:"Bona pampitshana",footer:"Mathla — e agilwe jaaka sedirisiwa sa go ithuta se se samaganywang le CAPS. Ga e amane, ga e tlhomamisiwa, kgotsa ga e dirwe ke Lefapha la Thuto ya Motheo. Tswelelopele e bolokwa mo setshidiketseng se fela.",comingSoon:"E etla go tloga jaanong",notAttempted:"Ga e ise e lekwe",printBtn:"Gatisa / boloka jaaka PDF",nextBtn:"Latelang",closeBtn:"Tswala",quizComplete:"Go feditswe",savedNote:"E bolokilwe mo mmapeng wa bokoa jwa gago kwa tlase.",realHeader:"Dipampitshana Tsa Semmuso Tsa DBE",realDesc:"Dipampitshana tsa mmatota tsa tlhatlhobo ya matriki le dimemo, di tswa tota kwa Lefapheng la Thuto ya Motheo, ka Seesemane le Seafrikanse.",paper1:"Pampitshana 1",memo1:"Memo 1",paper2:"Pampitshana 2",memo2:"Memo 2",browseAll:"Sekaseka dingwaga tsotlhe mo education.gov.za"},
nso:{eyebrow:"E SEPEDIŠANA LE CAPS · MAEMO A 10–12",h1:'Hwetša sekgoba.<br>Ke moka <span class="hl">o se lokiše.</span>',heroSub:"Itlwaetše ka sehlogo se sengwe le se sengwe, dira dipampiri tša mokgwa wa tlhahlobo ya kgale, gomme o bone gore ke dikarolo dife tša lenaneothuto la CAPS tšeo di go lahlegetšego ka matshwao — e sego feela palo ya mafelelo.",gradeWord:"Mphato",questionLabel:"Potšišo",statAttemptedLabel:"Dipotšišo tšeo di lekilwego",statAccuracyLabel:"Nepagalo ka moka",statTopicsLabel:"Dihlogo tšeo di lego gona",topicsKicker:"ITLWAETŠA KA SEHLOGO",topicsTitle:"Kgetha sehlogo. Potšišo e nngwe le e nngwe e lekolwa ka pela.",dashKicker:"MAPHA A GO FOKOLA GA GAGO",dashTitle:"E hlangwe go tšwa go teko e nngwe le e nngwe yeo o e dirilego, e sego go akanya.",weakHeader:"DIHLOGO TŠA GO FOKOLA",strongHeader:"DIHLOGO TŠA MAATLA",emptyWeak:"Dira diteko tše di sego kae ka mo godimo — dihlogo tša gago tša go fokola di tla tšwelela mo pele.",emptyStrong:"Ga go na selo seo se lekilwego go fihla bjale. Dihlogo tša maatla di nyaka teko e tee bonyenyane.",papersKicker:"DIPAMPIRI TŠA DIPOTŠIŠO",papersTitle:"Dipampiri tša tlhahlobo tše di feletšego go tšwa dihlogong tša mphato wa gago — gotee le dipampiri tša nnete tša Kgoro ya Thuto ya Motheo.",viewPaper:"Lebelela pampiri",footer:"Mathla — e hlangwe bjalo ka sedirišwa sa go ithuta seo se sepedišanago le CAPS. Ga se amane, ga se tiišetšwe, goba ga se dirwe ke Kgoro ya Thuto ya Motheo. Tšwelopele e bolokwa mo sedirišweng se se tee feela.",comingSoon:"E a tla",notAttempted:"Ga se ya lekwa",printBtn:"Gatiša / boloka bjalo ka PDF",nextBtn:"E latelago",closeBtn:"Tswalela",quizComplete:"E feditšwe",savedNote:"E bolokilwe lefapheng la go fokola ka mo tlase.",realHeader:"Dipampiri tša Semmušo tša DBE",realDesc:"Dipampiri tša nnete tša tlhahlobo ya matriki le dimemorandamo, go tšwa go Kgoro ya Thuto ya Motheo, ka Seisimane le Seafrikanse.",paper1:"Pampiri 1",memo1:"Memo 1",paper2:"Pampiri 2",memo2:"Memo 2",browseAll:"Lekola mengwaga ka moka go education.gov.za"},
zu:{eyebrow:"IHAMBISANA NE-CAPS · AMABANGA 10–12",h1:'Thola igebe.<br>Bese <span class="hl">ulivale.</span>',heroSub:"Zilolonge ngesihloko ngasinye, wenze imibuzo efana neyaphambilini, ubone ukuthi yiziphi izingxenye ze-CAPS ezikulahlekisela amaphuzu — hhayi nje amaphuzu okugcina.",gradeWord:"Ibanga",questionLabel:"Umbuzo",statAttemptedLabel:"Imibuzo ezanyiwe",statAccuracyLabel:"Ukunemba konke",statTopicsLabel:"Izihloko ezikhona",topicsKicker:"ZILOLONGE NGESIHLOKO",topicsTitle:"Khetha isihloko. Umbuzo ngamunye uyahlolwa ngokushesha.",dashKicker:"IBALAZWE LOBUTHAKATHAKA BAKHO",dashTitle:"Yakhiwe ngokusuka kuzo zonke izivivinyo ozenzile ngempela, hhayi ukuqagela.",weakHeader:"IZIHLOKO EZIBUTHAKATHAKA KAKHULU",strongHeader:"IZIHLOKO EZIQINILE KAKHULU",emptyWeak:"Zama izivivinyo ezimbalwa ngenhla — izihloko zakho eziphume kabi ngokwedlulele zizovela lapha kuqala.",emptyStrong:"Akukho okulandelelwe okwamanje. Izihloko eziqinile zidinga okungenani umzamo owodwa ngasinye.",papersKicker:"AMAPHEPHA EMIBUZO",papersTitle:"Amasethi okuzilolonga agcwele avela ezihlokweni zebanga lakho — kanye namaphepha eqiniso amadala oMnyango WezeMfundo Eyisisekelo.",viewPaper:"Buka iphepha",footer:"I-Mathla — yakhiwe njengethuluzi lokufunda elihambisana ne-CAPS. Ayihlangene, ayigunyaziwe, futhi ayikhiqizwa uMnyango WezeMfundo Eyisisekelo. Inqubekelaphambili igcinwa kule divayisi kuphela.",comingSoon:"Kuzofika maduze",notAttempted:"Akukazanywa",printBtn:"Phrinta / gcina njenge-PDF",nextBtn:"Okulandelayo",closeBtn:"Vala",quizComplete:"Kuqediwe",savedNote:"Kugcinwe ebalazweni lobuthakathaka lakho ngezansi.",realHeader:"Amaphepha Asemthethweni e-DBE",realDesc:"Amaphepha okuhlolwa kwamatikuletsheni eqiniso namamemo, aqhamuka ngqo oMnyangweni WezeMfundo Eyisisekelo, ngesiNgisi nangesiBhunu.",paper1:"Iphepha 1",memo1:"Imemo 1",paper2:"Iphepha 2",memo2:"Imemo 2",browseAll:"Hlola yonke iminyaka ku-education.gov.za"},
ts:{eyebrow:"SWI FAMBISANA NA CAPS · SWIYENGE 10–12",h1:'Kuma nkarhi lowu pfumalaka.<br>Kutani <span class="hl">u wu lulamisa.</span>',heroSub:"Tolovela hi nhloko-mhaka yin'wana ni yin'wana, u endla swikambelo swo fana na swo hundzeka, u vona leswaku i tinxaka tihi ta CAPS leti ku lahlekisaka mamaki — ku nga ri ntsengo wo hetelela ntsena.",gradeWord:"Xiyenge",questionLabel:"Xivutiso",statAttemptedLabel:"Swivutiso leswi ringiweke",statAccuracyLabel:"Vukwala hinkwako",statTopicsLabel:"Tinhloko-mhaka leti nga kona",topicsKicker:"TOLOVELA HI NHLOKO-MHAKA",topicsTitle:"Hlawula nhloko-mhaka. Xivutiso xin'wana na xin'wana xi kambisisiwa hi xihatla.",dashKicker:"KARTA YA VUTLARI BYA WENA",dashTitle:"Yi endliwile hi ku suka eka xikambelo xin'wana na xin'wana lexi u xi endleke hakunene, ku nga ri ku ehleketa.",weakHeader:"TINHLOKO-MHAKA LETI TSANDZEKAKA",strongHeader:"TINHLOKO-MHAKA LETI TIYELEKE",emptyWeak:"Endla swikambelo swo tala laha henhla — tinhloko-mhaka ta wena leti tsandzekaka ti ta humelela laha ku sungula.",emptyStrong:"A ku na nchumu lowu landzeriweke se. Tinhloko-mhaka leti tiyeleke ti lava ku ringa kambe kanwe ka un'wana ni un'wana.",papersKicker:"TIPHEPHA TA SWIVUTISO",papersTitle:"Swiyimo swo hetiseka swo tolovela leswi humaka eka tinhloko-mhaka ta xiyenge xa wena — na tiphepha ta xiviri ta Ndzawulo ya Dyondzo ya Masungulo.",viewPaper:"Languta phepha",footer:"Mathla — yi akiwile tanihi xitirhisiwa xo dyondza lexi fambisanaka na CAPS. A yi fambisani, a yi tiyisiwi, kumbe a yi endliwi hi Ndzawulo ya Dyondzo ya Masungulo. Nhluvukiso wu hlayisiwa eka xikombelo lexi ntsena.",comingSoon:"Yi ta ta",notAttempted:"A yi si ringiwa",printBtn:"Printa / hlayisa tanihi PDF",nextBtn:"Leswi landzelaka",closeBtn:"Pfala",quizComplete:"Xi helile",savedNote:"Yi hlayisiwile eka karta ya vutlari bya wena laha hansi.",realHeader:"Tiphepha to Xiviri ta DBE",realDesc:"Tiphepha ta xiviri ta vukambisisi bya matriki ni timemo, ti huma hi ku kongoma eka Ndzawulo ya Dyondzo ya Masungulo, hi Xinghezi na Xibunu.",paper1:"Phepha 1",memo1:"Memo 1",paper2:"Phepha 2",memo2:"Memo 2",browseAll:"Kambisisa malembe hinkwawo eka education.gov.za"}
};
let currentLang = 'en';
function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key]; }

/* Applies the given language to every element on the current page (works on
   both index.html and signin.html) and, if this page defines render() and/or
   renderAuthArea(), re-runs them so dynamic content picks up the new language. */
function applyLang(lang){
  currentLang = I18N[lang] ? lang : 'en';
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  const sel = document.getElementById('langSelect');
  if(sel) sel.value = currentLang;
  try{ localStorage.setItem('mathla_lang', currentLang); }catch(e){}
  if(typeof renderAuthArea === 'function') renderAuthArea();
  if(typeof render === 'function') render();
}
let savedLang = null;
try{ savedLang = localStorage.getItem('mathla_lang'); }catch(e){}
if(savedLang && I18N[savedLang] && savedLang !== 'en'){
  currentLang = savedLang;
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ el.innerHTML = t(el.dataset.i18nHtml); });
  const langSel = document.getElementById('langSelect');
  if(langSel) langSel.value = currentLang;
}
document.getElementById('langSelect').addEventListener('change', function(){ applyLang(this.value); });

/* ---------- auth ----------
   Client-side only: accounts and password hashes live in this browser's
   localStorage. There is no server, so this does not provide real account
   security or let a user sign in on a different device — it just gates the
   UI and remembers a signed-in state on this device. Shared by index.html
   (which shows "signed in as ..." in the nav) and signin.html (which owns
   the actual sign in / create account form). */
const USERS_KEY = 'mathla_users_v1';
const SESSION_KEY = 'mathla_session_v1';
function loadUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }catch(e){ return {}; } }
function saveUsers(u){ try{ localStorage.setItem(USERS_KEY, JSON.stringify(u)); }catch(e){} }
async function hashPassword(pw){
  try{
    const enc = new TextEncoder().encode(pw);
    const buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }catch(e){ return 'plain:'+pw; }
}
function getSession(){ try{ return localStorage.getItem(SESSION_KEY); }catch(e){ return null; } }
function setSession(email){ try{ if(email) localStorage.setItem(SESSION_KEY, email); else localStorage.removeItem(SESSION_KEY); }catch(e){} }
function escapeHtml(s){ return s.replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function emailValid(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

async function attemptSignUp(email, pw){
  email = (email || '').trim().toLowerCase();
  if(!emailValid(email)) return {ok:false, error:'authErrEmail'};
  if((pw || '').length < 6) return {ok:false, error:'authErrPassword'};
  const users = loadUsers();
  if(users[email]) return {ok:false, error:'authErrExists'};
  users[email] = { email, hash: await hashPassword(pw) };
  saveUsers(users);
  setSession(email);
  return {ok:true, email};
}
async function attemptSignIn(email, pw){
  email = (email || '').trim().toLowerCase();
  if(!emailValid(email)) return {ok:false, error:'authErrEmail'};
  if((pw || '').length < 6) return {ok:false, error:'authErrPassword'};
  const users = loadUsers();
  const u = users[email];
  if(!u) return {ok:false, error:'authErrNoAccount'};
  if(u.hash !== await hashPassword(pw)) return {ok:false, error:'authErrWrongPass'};
  setSession(email);
  return {ok:true, email};
}
function signOut(){ setSession(null); }

/* Renders the nav auth slot on any page that has #authArea (index.html).
   Signed out -> a link to signin.html. Signed in -> email + sign-out button. */
function renderAuthArea(){
  const authArea = document.getElementById('authArea');
  if(!authArea) return;
  const email = getSession();
  if(email){
    authArea.classList.add('signed-in');
    authArea.innerHTML = `<div class="auth-account"><b>${escapeHtml(email)}</b></div><button class="auth-signout" id="signOutBtn">${t('signOutBtn')}</button>`;
    document.getElementById('signOutBtn').addEventListener('click', ()=>{ signOut(); renderAuthArea(); });
  } else {
    authArea.classList.remove('signed-in');
    authArea.innerHTML = `<a href="signin.html" class="auth-btn" id="signInBtn">${t('signInBtn')}</a>`;
  }
}
renderAuthArea();
