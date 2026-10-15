/* Theme, i18n (I18N/t/applyLang) and auth (getSession/renderAuthArea/etc.)
   now live in common.js, shared with signin.html. Load common.js before
   this file. */

/* ---------- data ---------- */
const BANK = { pure: {
  10: [
    {id:'alg10', name:'Algebraic Expressions', desc:'Factorising, simplifying, exponent laws.', qs:[
      {q:'Simplify: 3x + 5x − 2x', o:['5x','6x','8x','4x'], a:0},
      {q:'Factorise: x² − 9', o:['(x−3)(x+3)','(x−9)(x+1)','(x−3)²','(x+9)(x−1)'], a:0},
      {q:'Simplify: (2x²)(3x³)', o:['5x⁵','6x⁶','6x⁵','5x⁶'], a:2}
    ]},
    {id:'exp10', name:'Exponents & Surds', desc:'Laws of exponents, simplifying surds.', qs:[
      {q:'Simplify: 2³ × 2²', o:['2⁵','2⁶','4⁵','2¹'], a:0},
      {q:'Simplify: √50', o:['5√2','10√5','25√2','5√5'], a:0},
      {q:'Evaluate: 5⁰', o:['0','5','1','undefined'], a:2}
    ]},
    {id:'trig10', name:'Trigonometry', desc:'Ratios, the unit circle, basic identities.', qs:[
      {q:'sin(90°) = ?', o:['0','1','−1','0.5'], a:1},
      {q:'In a right triangle, SOH refers to', o:['sin = opp/hyp','sin = adj/hyp','sin = opp/adj','cos = opp/hyp'], a:0},
      {q:'cos(0°) = ?', o:['0','1','−1','undefined'], a:1}
    ]},
    {id:'func10', name:'Functions', desc:'Linear and parabolic graphs, transformations.', qs:[
      {q:'The graph of y = x² is a', o:['straight line','hyperbola','parabola','circle'], a:2},
      {q:'For y = 2x + 3, the y-intercept is', o:['2','3','−3','0'], a:1},
      {q:'The turning point of y = (x−2)² is at', o:['(2,0)','(−2,0)','(0,2)','(0,−2)'], a:0}
    ]},
    {id:'geo10', locked:true, name:'Euclidean Geometry', desc:'Coming soon.'},
    {id:'fin10', locked:true, name:'Finance & Growth', desc:'Coming soon.'}
  ],
  11: [
    {id:'quad11', name:'Quadratic Equations', desc:'Factorising, the formula, nature of roots.', qs:[
      {q:'Solve: x² − 5x + 6 = 0', o:['x=2 or 3','x=1 or 6','x=−2 or −3','x=5 or 6'], a:0},
      {q:'The discriminant is used to find', o:['the y-intercept','the nature of the roots','the gradient','the axis of symmetry'], a:1},
      {q:'If b² − 4ac < 0, the roots are', o:['real and equal','real and unequal','non-real','undefined'], a:2}
    ]},
    {id:'trigid11', name:'Trig Identities', desc:'Reduction formulae, identities, equations.', qs:[
      {q:'sin²θ + cos²θ = ?', o:['0','1','2','tanθ'], a:1},
      {q:'tanθ is equivalent to', o:['sinθ/cosθ','cosθ/sinθ','1/sinθ','sinθ×cosθ'], a:0},
      {q:'sin(180° − θ) = ?', o:['sinθ','−sinθ','cosθ','−cosθ'], a:0}
    ]},
    {id:'seq11', name:'Number Patterns & Sequences', desc:'Arithmetic and geometric sequences.', qs:[
      {q:'In 3, 7, 11, 15… the common difference is', o:['3','4','7','11'], a:1},
      {q:'The nth term of an arithmetic sequence is', o:['Tn = a + (n−1)d','Tn = a·rⁿ','Tn = a + nd','Tn = a − (n−1)d'], a:0},
      {q:'2, 6, 18, 54… is what type of sequence?', o:['Arithmetic','Geometric','Quadratic','Neither'], a:1}
    ]},
    {id:'fin11', name:'Finance, Growth & Decay', desc:'Simple and compound interest.', qs:[
      {q:'Compound interest grows', o:['linearly','exponentially','logarithmically','not at all'], a:1},
      {q:'Simple interest formula is', o:['A = P(1+i)ⁿ','A = P(1+in)','A = P(1−in)','A = Pⁿ'], a:1},
      {q:'A higher interest rate means growth is', o:['slower','the same','faster','irrelevant'], a:2}
    ]},
    {id:'geo11', locked:true, name:'Analytical Geometry', desc:'Coming soon.'},
    {id:'stat11', locked:true, name:'Statistics', desc:'Coming soon.'}
  ],
  12: [
    {id:'calc12', name:'Differential Calculus', desc:'Limits, first principles, derivatives.', qs:[
      {q:'The derivative of x² is', o:['x','2x','x²','2'], a:1},
      {q:'The derivative of a constant is', o:['1','the constant','0','undefined'], a:2},
      {q:'f\'(x) represents', o:['the area under f(x)','the gradient function of f(x)','the y-intercept','the domain'], a:1}
    ]},
    {id:'seqser12', name:'Sequences & Series', desc:'Arithmetic/geometric series, sigma notation.', qs:[
      {q:'The sum of a geometric series converges when', o:['r > 1','−1 < r < 1','r = 1','r < −1'], a:1},
      {q:'Sigma notation Σ represents', o:['a product','a sum','a limit','a derivative'], a:1},
      {q:'For an arithmetic series, Sn =', o:['n/2(2a+(n−1)d)','a·rⁿ','n(a+d)','a+(n−1)d'], a:0}
    ]},
    {id:'trig12', name:'Trigonometry (Grade 12)', desc:'Compound angles, 2D/3D problems.', qs:[
      {q:'sin(A+B) expands to', o:['sinAcosB + cosAsinB','sinAcosB − cosAsinB','cosAcosB − sinAsinB','cosAcosB + sinAsinB'], a:0},
      {q:'cos(2A) can be written as', o:['2sinAcosA','1 − 2sin²A','2cos²A + 1','sin²A + cos²A'], a:1},
      {q:'In 3D trig problems, the sine rule needs', o:['a right angle','two sides and the included angle, or two angles and a side','only one side','a circle'], a:1}
    ]},
    {id:'prob12', name:'Probability', desc:'Venn diagrams, tree diagrams, counting.', qs:[
      {q:'P(A or B) for mutually exclusive events is', o:['P(A)×P(B)','P(A)+P(B)','P(A)−P(B)','P(A)/P(B)'], a:1},
      {q:'Two events are independent if', o:['P(A∩B) = P(A)×P(B)','P(A∩B) = P(A)+P(B)','P(A|B) = 0','A and B can\'t both happen'], a:0},
      {q:'A probability value must be between', o:['−1 and 1','0 and 1','0 and 100','1 and 10'], a:1}
    ]},
    {id:'geo12', locked:true, name:'Euclidean Geometry', desc:'Coming soon.'},
    {id:'stat12', locked:true, name:'Statistics', desc:'Coming soon.'}
  ]
},
lit: {
  10: [
    {id:'fin10lit', name:'Finance', desc:'Income, expenses, budgets, simple interest.', qs:[
      {q:'A budget is best described as a plan for', o:['spending only','income and expenses','saving only','taxes'], a:1},
      {q:'If income is R4 500 and expenses are R3 800, the balance is', o:['R700 surplus','R700 deficit','R8 300','R300 surplus'], a:0},
      {q:'VAT in South Africa is currently charged at', o:['10%','12%','15%','20%'], a:2}
    ]},
    {id:'meas10lit', name:'Measurement', desc:'Length, weight, volume, conversions, perimeter & area.', qs:[
      {q:'How many millilitres are in 2.5 litres?', o:['25','250','2 500','25 000'], a:2},
      {q:'The perimeter of a rectangle 5m by 3m is', o:['8m','15m','16m','30m'], a:2},
      {q:'1 kilogram equals how many grams?', o:['10','100','1 000','10 000'], a:2}
    ]},
    {id:'data10lit', name:'Data Handling', desc:'Reading tables, bar graphs, and simple statistics.', qs:[
      {q:'The mode of a data set is the', o:['middle value','most frequent value','average','range'], a:1},
      {q:'On a bar graph, the height of a bar usually shows', o:['the category name','the frequency/value','the time','the colour'], a:1},
      {q:'The range of 4, 9, 2, 15, 7 is', o:['9','13','15','2'], a:1}
    ]}
  ],
  11: [
    {id:'fin11lit', name:'Finance', desc:'Loans, interest rates, exchange rates, inflation.', qs:[
      {q:'If R1 = $0.055, how many rand is $11?', o:['R55','R110','R200','R605'], a:2},
      {q:'Inflation mainly affects the', o:['colour of money','buying power of money','shape of coins','bank logo'], a:1},
      {q:'A loan with a lower interest rate means you repay', o:['more overall','less overall','the same','nothing'], a:1}
    ]},
    {id:'meas11lit', name:'Measurement', desc:'Area, volume, scale, and unit conversions in context.', qs:[
      {q:'The volume of a box 2m × 3m × 1m is', o:['5 m³','6 m³','12 m³','36 m³'], a:1},
      {q:'On a map with scale 1:50 000, 2cm represents', o:['500m','1 000m','5 000m','50 000m'], a:1},
      {q:'Which unit is most appropriate for a room\'s floor area?', o:['mm²','cm²','m²','km²'], a:2}
    ]},
    {id:'data11lit', name:'Data Handling', desc:'Mean, median, and interpreting statistics in real contexts.', qs:[
      {q:'The mean of 2, 4, 6, 8 is', o:['4','5','6','20'], a:1},
      {q:'The median of 3, 7, 9, 15, 20 is', o:['7','9','9.8','15'], a:1},
      {q:'A pie chart is most useful for showing', o:['change over time','proportions of a whole','exact values only','correlation'], a:1}
    ]}
  ],
  12: [
    {id:'fin12lit', name:'Finance', desc:'Compound growth, banking, and taxation in real contexts.', qs:[
      {q:'Compound interest is calculated on', o:['the original amount only','the amount plus previously earned interest','a fixed fee','nothing'], a:1},
      {q:'A higher taxable income generally means', o:['a lower tax rate','a higher tax rate under SA\'s system','no tax','a fixed tax'], a:1},
      {q:'An exchange rate tells you', o:['the interest rate','the value of one currency in another','the inflation rate','the tax rate'], a:1}
    ]},
    {id:'meas12lit', name:'Measurement & Maps', desc:'Scale, maps, plans, and unit conversions for real problems.', qs:[
      {q:'A floor plan scale of 1:100 means 1cm on paper equals', o:['1m','10m','100m','1 000m'], a:0},
      {q:'To compare fuel efficiency you\'d most likely use', o:['km/h','litres per 100km','kg','m²'], a:1},
      {q:'Converting km/h to m/s, you divide by', o:['1.6','3.6','10','60'], a:1}
    ]},
    {id:'data12lit', name:'Data & Probability', desc:'Statistics, probability, and interpreting real-world data.', qs:[
      {q:'A probability of 0.5 means an event is', o:['impossible','equally likely to happen or not','certain','rare'], a:1},
      {q:'Which measure is most affected by an extreme outlier?', o:['median','mode','mean','range only'], a:2},
      {q:'A box-and-whisker plot mainly shows', o:['exact individual values','the spread and quartiles of data','the mean only','colour trends'], a:1}
    ]}
  ]
}
};

/* ---------- real past papers (verified, currently-live links only) ---------- */
const REAL_PAPERS = { pure: {
  10:[
    {title:"Grade 10 Maths P1 (English) — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=xB_6NSmf6m8%3d&tabid=1853&portalid=0&mid=8657&forcedownload=true"},
    {title:"Grade 10 Maths P2 (English) — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=RZ22JJ5tljc%3d&tabid=1853&portalid=0&mid=8657&forcedownload=true"},
    {title:"Grade 10 Maths Memo P1 — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=odfn3DagL_E%3d&tabid=1853&portalid=0&mid=8657&forcedownload=true"},
    {title:"Grade 10 Maths Memo P2 — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=_QJV3vhD7tw%3d&tabid=1853&portalid=0&mid=8657&forcedownload=true"},
    {title:"Grade 10 Maths P1 (English) — 2017", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=qtQcof03_Ek%3d&tabid=1853&portalid=0&mid=7303&forcedownload=true"},
    {title:"Browse all years on education.gov.za", url:"https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/Grade10Exams.aspx"}
  ],
  11:[
    {title:"Grade 11 Maths P1 (English) — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=1KiiLnULnVY%3d&tabid=1869&portalid=0&mid=8659&forcedownload=true"},
    {title:"Grade 11 Maths P2 (English) — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=4iD1QjMiShw%3d&tabid=1869&portalid=0&mid=8659&forcedownload=true"},
    {title:"Grade 11 Maths Memo P1 — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=_uRPiTTn5y4%3d&tabid=1869&portalid=0&mid=8659&forcedownload=true"},
    {title:"Grade 11 Maths Memo P2 — 2018", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=AkQO3dMar_0%3d&tabid=1869&portalid=0&mid=8659&forcedownload=true"},
    {title:"Grade 11 Maths P1 (English) — 2017", url:"https://www.education.gov.za/LinkClick.aspx?fileticket=b5H9lDVw-o4%3d&tabid=1869&portalid=0&mid=7378&forcedownload=true"},
    {title:"Browse all years on education.gov.za", url:"https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/Grade11Exams.aspx"}
  ],
  12:[
    {title:"Matric Maths P1 — November 2019 (NSC)", url:"https://wcedeportal.westerncape.gov.za/eresource/nsc-nov-2019-mathematics-paper-1"},
    {title:"Matric Maths P1 — June 2019 (NSC)", url:"https://wcedeportal.westerncape.gov.za/eresource/nsc-jun-2019-mathematics-paper-1"},
    {title:"2025 Exemplar Maths P1", url:"https://wcedeportal.westerncape.gov.za/eresource/2025-exemplar-gr12-mathematics-p1"},
    {title:"2025 Exemplar Maths P1 — Answer Book", url:"https://wcedeportal.westerncape.gov.za/eresource/2025-exemplar-gr12-mathematics-p1-answer-book-engafr"},
    {title:"2014 Maths P1 Exemplar", url:"https://wcedeportal.westerncape.gov.za/eresource/2014-mathematics-p1-grade-12-exemplar"},
    {title:"Browse all years on education.gov.za", url:"https://www.education.gov.za/Curriculum/NationalSeniorCertificate(NSC)Examinations/NSCPastExaminationpapers.aspx"}
  ]
},
lit: {
  10:[
    {title:"Grade 10 Maths Literacy — Term 1 Revision (2025)", url:"https://wcedeportal.westerncape.gov.za/eresource/2025-gr-10-t1-mathematical-literacy-revision"},
    {title:"Grade 10 Maths Literacy Study Guide — worked Paper 1 & 2", url:"https://wcedeportal.co.za/node/80346"}
  ],
  11:[
    {title:"Grade 11 Maths Literacy P1 Exemplar — 2013", url:"https://wcedeportal.westerncape.gov.za/eresource/exemplar-paper-2013-mathematics-literacy-p1-gr-11"},
    {title:"Grade 11 Maths Literacy P1 Memo — 2013", url:"https://wcedeportal.westerncape.gov.za/eresource/exemplar-paper-2013-mathematics-literacy-p1-gr-11-memo"},
    {title:"Grade 11 Maths Literacy P2 Exemplar — 2013", url:"https://wcedeportal.westerncape.gov.za/eresource/exemplar-paper-2013-mathematics-literacy-p2-gr-11"},
    {title:"Grade 11 Maths Literacy P2 Memo — 2013", url:"https://wcedeportal.westerncape.gov.za/eresource/exemplar-paper-2013-mathematics-literacy-p2-gr-11-memo"}
  ],
  12:[
    {title:"Matric Maths Literacy P1 — Nov 2021 (NSC)", url:"https://wcedeportal.westerncape.gov.za/eresource/nsc-nov-2021-mathematical-literacy-p1"},
    {title:"Matric Maths Literacy P1 — May/June 2022 (NSC)", url:"https://wcedeportal.westerncape.gov.za/eresource/nsc-mayjune-2022-mathematical-literacy-paper-1"},
    {title:"Matric Maths Literacy P1 — Nov 2017 (NSC)", url:"https://wcedeportal.westerncape.gov.za/eresource/nsc-nov-2017-mathematical-literacy-p1"},
    {title:"2025 Exemplar Maths Literacy P1", url:"https://wcedeportal.westerncape.gov.za/eresource/2025-exemplar-gr12-mathematical-literacy-p1"},
    {title:"2025 Exemplar Maths Literacy P1 — Answer Book", url:"https://wcedeportal.westerncape.gov.za/eresource/2025-exemplar-gr-12-mathematical-literacy-p1-answer-book"}
  ]
}
};

/* ---------- storage ---------- */
const STORE_KEY = 'mathla_stats_v1';
function loadStats(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }catch(e){ return {}; } }
function saveStats(s){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(s)); }catch(e){} }
let stats = loadStats();

let currentGrade = 10;
let currentSubject = 'pure';
const subjectPicker = document.getElementById('subjectPicker');
const gradePicker = document.getElementById('gradePicker');
const topicGrid = document.getElementById('topicGrid');
const paperList = document.getElementById('paperList');

subjectPicker.querySelectorAll('.grade-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    subjectPicker.querySelectorAll('.grade-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentSubject = btn.dataset.subject;
    render();
  });
});

gradePicker.querySelectorAll('.grade-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    gradePicker.querySelectorAll('.grade-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentGrade = +btn.dataset.grade;
    render();
  });
});

function pct(topicId){
  const s = stats[topicId];
  if(!s || s.total===0) return null;
  return Math.round((s.correct/s.total)*100);
}

function allTopics(){
  const out = [];
  ['pure','lit'].forEach(subj=>{ [10,11,12].forEach(g=>{ BANK[subj][g].forEach(top=> out.push(top)); }); });
  return out;
}
function findTopic(id){ return allTopics().find(t=>t.id===id); }

function renderTopics(){
  const list = BANK[currentSubject][currentGrade];
  topicGrid.innerHTML = list.map(top=>{
    if(top.locked){
      return `<div class="topic-card locked"><h3>${top.name}</h3><p>${top.desc}</p></div>`;
    }
    const p = pct(top.id);
    return `<div class="topic-card" data-topic="${top.id}">
      <h3>${top.name}</h3><p>${top.desc}</p>
      <div class="mastery-bar"><div class="mastery-fill" style="width:${p===null?0:p}%"></div></div>
      <span class="mastery-label">${p===null ? t('notAttempted') : p+'% · '+stats[top.id].total}</span>
    </div>`;
  }).join('');
  topicGrid.querySelectorAll('.topic-card.locked').forEach(card=>{
    card.insertAdjacentHTML('beforeend', `<span style="position:absolute;top:30px;right:30px;font-size:11px;color:var(--grey);">${t('comingSoon')}</span>`);
  });
  topicGrid.querySelectorAll('.topic-card[data-topic]').forEach(card=>{
    card.addEventListener('click', ()=> startQuiz(card.dataset.topic));
  });
}

function renderDashboard(){
  const rows = [];
  Object.keys(stats).forEach(id=>{
    const s = stats[id];
    if(s.total>0){
      const topicDef = findTopic(id);
      if(topicDef) rows.push({name:topicDef.name, pct: Math.round((s.correct/s.total)*100)});
    }
  });
  const weakEl = document.getElementById('weakList');
  const strongEl = document.getElementById('strongList');
  if(rows.length===0){
    weakEl.innerHTML = `<p class="empty-note">${t('emptyWeak')}</p>`;
    strongEl.innerHTML = `<p class="empty-note">${t('emptyStrong')}</p>`;
    return;
  }
  const sorted = [...rows].sort((a,b)=>a.pct-b.pct);
  const cls = p => p<50 ? 'low' : p<75 ? 'mid' : 'high';
  weakEl.innerHTML = sorted.slice(0,5).map(r=>`<div class="weak-row"><b>${r.name}</b><span class="weak-pct ${cls(r.pct)}">${r.pct}%</span></div>`).join('');
  strongEl.innerHTML = [...rows].sort((a,b)=>b.pct-a.pct).slice(0,5).map(r=>`<div class="weak-row"><b>${r.name}</b><span class="weak-pct ${cls(r.pct)}">${r.pct}%</span></div>`).join('');
}

function renderStrip(){
  let attempted=0, correct=0;
  Object.values(stats).forEach(s=>{attempted+=s.total; correct+=s.correct;});
  document.getElementById('statAttempted').textContent = attempted;
  document.getElementById('statAccuracy').textContent = attempted ? Math.round((correct/attempted)*100)+'%' : '—';
  document.getElementById('statTopics').textContent = BANK[currentSubject][currentGrade].filter(t=>!t.locked).length;
}

function renderPapers(){
  const live = BANK[currentSubject][currentGrade].filter(t=>!t.locked);
  const real = REAL_PAPERS[currentSubject][currentGrade] || [];
  const subjLabel = currentSubject==='lit' ? 'Mathematical Literacy' : 'Mathematics';
  let html = `<div class="paper-row">
    <div><h4>${t('gradeWord')} ${currentGrade} ${subjLabel} — ${t('viewPaper')==='View paper' ? 'Practice Paper (mixed topics)' : t('viewPaper')}</h4><span>${live.length} ${t('topicsKicker').toLowerCase()} · ${live.length*3} qs</span></div>
    <button class="paper-btn" id="viewPracticeBtn">${t('viewPaper')}</button>
  </div>`;
  if(real.length){
    html += `<div style="margin-top:36px;padding-top:28px;border-top:1px solid var(--border);">
      <h4 style="font-size:15px;font-weight:700;margin-bottom:6px;">${t('realHeader')}</h4>
      <p style="font-size:13px;color:var(--grey);margin-bottom:18px;max-width:600px;">${t('realDesc')}</p>
      ${real.map(p=>`<div class="paper-row"><div><h4 style="font-size:15px;">${p.title}</h4><span>${new URL(p.url).hostname}</span></div><a class="paper-btn" href="${p.url}" target="_blank" rel="noopener">↗</a></div>`).join('')}
    </div>`;
  }
  paperList.innerHTML = html;
  document.getElementById('viewPracticeBtn').addEventListener('click', ()=> openPaper());
}

function render(){ renderTopics(); renderDashboard(); renderStrip(); renderPapers(); renderAuthArea(); }
render();

/* ---------- quiz modal ---------- */
const quizOverlay = document.getElementById('quizOverlay');
const quizTitle = document.getElementById('quizTitle');
const quizProg = document.getElementById('quizProg');
const quizBody = document.getElementById('quizBody');
const nextBtn = document.getElementById('nextBtn');
let activeTopic=null, qIndex=0, sessionCorrect=0, answered=false;

function startQuiz(topicId){
  activeTopic = findTopic(topicId);
  qIndex=0; sessionCorrect=0;
  quizTitle.textContent = activeTopic.name;
  quizOverlay.classList.add('show');
  showQuestion();
}
function showQuestion(){
  answered=false; nextBtn.classList.remove('show');
  nextBtn.textContent = t('nextBtn'); nextBtn.dataset.mode='';
  const total = activeTopic.qs.length;
  if(qIndex>=total){ return showResult(); }
  quizProg.textContent = `${t('questionLabel')} ${qIndex+1} / ${total}`;
  const q = activeTopic.qs[qIndex];
  quizBody.innerHTML = `<p class="q-text">${q.q}</p>` + q.o.map((opt,i)=>`<button class="opt" data-i="${i}">${opt}</button>`).join('');
  quizBody.querySelectorAll('.opt').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      if(answered) return;
      answered=true;
      const i = +btn.dataset.i;
      const correct = q.a;
      btn.classList.add(i===correct?'correct':'wrong');
      if(i!==correct) quizBody.querySelectorAll('.opt')[correct].classList.add('correct');
      if(i===correct) sessionCorrect++;
      recordAnswer(activeTopic.id, i===correct);
      nextBtn.classList.add('show');
    });
  });
}
function recordAnswer(topicId, correct){
  if(!stats[topicId]) stats[topicId] = {correct:0,total:0};
  stats[topicId].total++;
  if(correct) stats[topicId].correct++;
  saveStats(stats);
}
function showResult(){
  const total = activeTopic.qs.length;
  quizProg.textContent = t('quizComplete');
  quizBody.innerHTML = `<div class="result-box"><b>${sessionCorrect}/${total}</b><p style="color:var(--muted2);font-size:14px;margin-top:8px;">${t('savedNote')}</p></div>`;
  nextBtn.textContent = t('closeBtn');
  nextBtn.dataset.mode = 'close';
  nextBtn.classList.add('show');
  nextBtn.onclick = closeQuiz;
}
nextBtn.addEventListener('click', ()=>{ if(nextBtn.dataset.mode!=='close'){ qIndex++; showQuestion(); } });
function closeQuiz(){
  quizOverlay.classList.remove('show');
  nextBtn.textContent = t('nextBtn'); nextBtn.dataset.mode=''; nextBtn.onclick=null;
  render();
}
document.getElementById('closeQuiz').addEventListener('click', closeQuiz);

/* ---------- paper modal ---------- */
const paperOverlay = document.getElementById('paperOverlay');
function openPaper(){
  const topics = BANK[currentSubject][currentGrade].filter(top=>!top.locked);
  const subjLabel = currentSubject==='lit' ? 'Mathematical Literacy' : 'Mathematics';
  document.getElementById('paperTitleEl').textContent = `${t('gradeWord')} ${currentGrade} ${subjLabel} — ${t('topicsKicker')}`;
  document.getElementById('paperMetaEl').textContent = `${topics.length} × CAPS`;
  const list = document.getElementById('paperQList');
  list.innerHTML = topics.map(top => top.qs.map(q=>`<li>${q.q}</li>`).join('')).join('');
  paperOverlay.classList.add('show');
}
document.getElementById('closePaper').addEventListener('click', ()=> paperOverlay.classList.remove('show'));
document.getElementById('printBtn').addEventListener('click', ()=> window.print());
[quizOverlay, paperOverlay].forEach(ov=>{
  ov.addEventListener('click', e=>{ if(e.target===ov) ov.classList.remove('show'); });
});
