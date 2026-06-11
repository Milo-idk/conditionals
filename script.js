/* =====================================================
   DATA
===================================================== */

// ── Game 1: Matching sets (one is chosen randomly) ──
const MATCH_SETS = [
  [
    { text: "If you heat water to 100°C, it boils.",             type: "zero",   exp: "Zero Conditional — a scientific fact. Both clauses use Present Simple: If + present → present." },
    { text: "If it rains tomorrow, I will bring my umbrella.",   type: "first",  exp: "First Conditional — a real future possibility. If + Present Simple → will + base verb." },
    { text: "If I had a car, I would drive to work every day.",  type: "second", exp: "Second Conditional — a hypothetical present situation. If + Past Simple → would + base verb." },
    { text: "If she had studied harder, she would have passed.", type: "third",  exp: "Third Conditional — an unreal past situation. If + Past Perfect → would have + past participle." },
  ],
  [
    { text: "Ice melts if the temperature rises above 0°C.",       type: "zero",   exp: "Zero Conditional — a natural law. Present Simple in both clauses: always true." },
    { text: "If we leave now, we will catch the last train.",       type: "first",  exp: "First Conditional — a likely real consequence. If + present → will + base verb." },
    { text: "If I were you, I would accept that job offer.",        type: "second", exp: "Second Conditional — hypothetical advice. 'Were' is used for all persons in the if-clause." },
    { text: "If he had saved money, he would have bought a house.", type: "third",  exp: "Third Conditional — a missed opportunity in the past. Past Perfect → would have + past participle." },
  ],
  [
    { text: "If you mix red and yellow, you get orange.",          type: "zero",   exp: "Zero Conditional — mixing colors always produces the same result: a universal truth." },
    { text: "She will call you if she has time this afternoon.",   type: "first",  exp: "First Conditional — a real future event. The if-clause uses Present Simple (not 'will')." },
    { text: "He would learn Spanish faster if he practiced more.", type: "second", exp: "Second Conditional — an unreal present condition. Past Simple ('practiced') in the if-clause." },
    { text: "They would have won if they had trained harder.",     type: "third",  exp: "Third Conditional — they didn't train hard enough, so they lost. An unreal past result." },
  ],
];

const TYPE_META = {
  zero:   { label: "Zero Conditional",   formula: "if + present → present",         icon: "🌱" },
  first:  { label: "First Conditional",  formula: "if + present → will + verb",     icon: "🔮" },
  second: { label: "Second Conditional", formula: "if + past → would + verb",       icon: "💭" },
  third:  { label: "Third Conditional",  formula: "if + past perfect → would have", icon: "⏰" },
};

// ── Game 2: Fill in the blank ──
const GAME2_QS = [
  {
    text: "If it ___ tomorrow, we will cancel the picnic.",
    opts: ["rains", "rained", "would rain", "had rained"],
    ans:  "rains",
    exp:  "First Conditional: the 'if' clause uses Present Simple — NEVER 'will'. Correct: 'If it rains, we will cancel.'"
  },
  {
    text: "If I ___ a million dollars, I would travel the world.",
    opts: ["had", "have", "will have", "would have"],
    ans:  "had",
    exp:  "Second Conditional: Past Simple ('had') in the if-clause signals a hypothetical, unreal situation."
  },
  {
    text: "Water ___ if you cool it below 0°C.",
    opts: ["freezes", "would freeze", "froze", "will freeze"],
    ans:  "freezes",
    exp:  "Zero Conditional: Present Simple in both clauses — this is a scientific fact about the physical world."
  },
  {
    text: "If she had prepared better, she ___ the interview.",
    opts: ["would have passed", "would pass", "had passed", "was passing"],
    ans:  "would have passed",
    exp:  "Third Conditional: 'would have + past participle' in the main clause — an unreal past result."
  },
  {
    text: "If you ___ harder, you could win the championship.",
    opts: ["trained", "train", "would train", "will train"],
    ans:  "trained",
    exp:  "Second Conditional: Past Simple ('trained') in the if-clause — it's hypothetical, not a real current plan."
  },
  {
    text: "They ___ the last train if they leave right now.",
    opts: ["will catch", "would catch", "catch", "caught"],
    ans:  "will catch",
    exp:  "First Conditional: 'will + base verb' in the main clause — a realistic, possible future outcome."
  },
];

// ── Game 3: Grammar knowledge quiz ──
const GAME3_QS = [
  {
    text: "What tense is used in the 'if' clause of the First Conditional?",
    opts: ["Present Simple", "Past Simple", "Past Perfect", "Future Simple (will)"],
    ans:  "Present Simple",
    exp:  "First Conditional if-clause: ALWAYS Present Simple. Never use 'will' here. ✘ 'If it will rain' ✔ 'If it rains…'"
  },
  {
    text: "Which conditional describes UNREAL or HYPOTHETICAL situations in the PRESENT?",
    opts: ["Second Conditional", "First Conditional", "Zero Conditional", "Third Conditional"],
    ans:  "Second Conditional",
    exp:  "Second Conditional uses Past Simple to signal an unreal or imaginary present/future scenario."
  },
  {
    text: "In the Third Conditional, what form is used in the RESULT (main) clause?",
    opts: ["would have + past participle", "would + base verb", "had + past participle", "will have + past participle"],
    ans:  "would have + past participle",
    exp:  "Third Conditional main clause: 'would have + past participle'. Example: 'I would have passed (if I had studied).'"
  },
  {
    text: "What does the Zero Conditional mainly express?",
    opts: ["General truths and scientific facts", "Possible future results", "Regrets about the past", "Advice and suggestions"],
    ans:  "General truths and scientific facts",
    exp:  "Zero Conditional expresses universal truths, natural laws, and things always true. E.g., 'If you heat ice, it melts.'"
  },
  {
    text: "Which sentence correctly uses the SECOND Conditional?",
    opts: [
      "If I won the lottery, I would buy a yacht.",
      "If I win the lottery, I would buy a yacht.",
      "If I had won the lottery, I would buy a yacht.",
      "If I win the lottery, I will buy a yacht.",
    ],
    ans:  "If I won the lottery, I would buy a yacht.",
    exp:  "Second Conditional: if + Past Simple → would + base verb. The last option is First Conditional (real possibility)."
  },
  {
    text: "What tense appears in BOTH clauses of the Zero Conditional?",
    opts: ["Present Simple", "Past Simple", "Present Perfect", "Future Simple"],
    ans:  "Present Simple",
    exp:  "Zero Conditional: Present Simple in BOTH the if-clause AND the result clause. E.g., 'If you freeze water, it turns to ice.'"
  },
];

// ── Game 4: True / False ──
const GAME4_QS = [
  {
    text:   "In the First Conditional, we use 'will' inside the 'if' clause.",
    answer: false,
    exp:    "FALSE. The if-clause uses Present Simple, NOT 'will'. Correct: 'If it rains...' — NOT 'If it will rain...'. 'Will' belongs in the main clause."
  },
  {
    text:   "The Zero Conditional is used to describe general truths and scientific facts.",
    answer: true,
    exp:    "TRUE. Zero Conditional expresses things that are always true: natural laws, habits, cause-and-effect facts. Both clauses use Present Simple."
  },
  {
    text:   "'If I had a car, I would drive to work.' is an example of the Third Conditional.",
    answer: false,
    exp:    "FALSE. This is the SECOND Conditional (Past Simple 'had' + 'would + base verb'). Third Conditional would be: 'If I had had a car, I would have driven...'"
  },
  {
    text:   "The Third Conditional is used to talk about unreal situations in the PAST.",
    answer: true,
    exp:    "TRUE. Third Conditional uses Past Perfect in the if-clause to reflect on how a different past action would have changed the outcome."
  },
];

/* =====================================================
   UTILITIES
===================================================== */
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function setAccent(color) {
  // Update the progress bar color and cta-btn for quiz/tf screens
  document.getElementById('quiz-prog-fill').style.background = color;
  document.getElementById('quiz-next-btn').style.background  = color;
  document.getElementById('quiz-next-btn').style.color = '#07101E';
}

const COLORS = { 1: '#38BDF8', 2: '#10B981', 3: '#FB923C', 4: '#A855F7' };

/* =====================================================
   STATE
===================================================== */
let currentGame = null;

// Game 1
let matchSentences = [];
let matchTypes     = [];
let selectedS      = null;   // index of selected sentence card
let pairs          = {};     // pairMap[sentenceIdx] = typeIdx
let matchChecked   = false;
let matchCorrect   = 0;

// Game 2 & 3
let quizQs       = [];
let quizIdx      = 0;
let quizScore    = 0;
let quizAnswered = false;

// Game 4
let tfQs       = [];
let tfIdx      = 0;
let tfScore    = 0;
let tfAnswered = false;

/* =====================================================
   NAVIGATION
===================================================== */
document.getElementById('start-btn').addEventListener('click', () => showScreen('games-screen'));

document.querySelectorAll('.game-card').forEach(card => {
  card.addEventListener('click', () => launchGame(parseInt(card.dataset.game)));
});

document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => showScreen('games-screen'));
});

document.getElementById('retry-btn').addEventListener('click', () => launchGame(currentGame));
document.getElementById('menu-btn').addEventListener('click',  () => showScreen('games-screen'));

/* =====================================================
   GAME LAUNCHER
===================================================== */
function launchGame(num) {
  currentGame = num;
  if (num === 1) initGame1();
  else if (num === 2) initQuiz(2);
  else if (num === 3) initQuiz(3);
  else if (num === 4) initGame4();
}

/* =====================================================
   GAME 1 — CARD MATCHING
===================================================== */
const PAIR_NAMES   = ['pa','pb','pc','pd'];
const BADGE_NAMES  = ['badge-a','badge-b','badge-c','badge-d'];

function initGame1() {
  const rawSet = MATCH_SETS[Math.floor(Math.random() * MATCH_SETS.length)];
  matchSentences = shuffle(rawSet.map((s, i) => ({ ...s, origIdx: i })));
  matchTypes     = shuffle(Object.entries(TYPE_META).map(([key, val]) => ({ key, ...val })));
  selectedS      = null;
  pairs          = {};
  matchChecked   = false;
  matchCorrect   = 0;

  buildMatchBoard();
  document.getElementById('check-match-btn').classList.add('hidden');
  document.getElementById('reset-match-btn').classList.add('hidden');
  document.getElementById('match-continue-btn').classList.add('hidden');
  const mr = document.getElementById('match-results');
  mr.classList.add('hidden');
  mr.innerHTML = '';
  updateMatchStatus();
  showScreen('game1-screen');
}

function buildMatchBoard() {
  const sCol = document.getElementById('sentences-col');
  const tCol = document.getElementById('types-col');
  sCol.innerHTML = '<p class="col-label">📄 Sentences</p>';
  tCol.innerHTML = '<p class="col-label">🏷️ Conditional Types</p>';

  matchSentences.forEach((sent, idx) => {
    const card = document.createElement('div');
    card.className = 's-card';
    card.id = `s-${idx}`;

    const badge = document.createElement('span');
    badge.className = 'pair-badge';
    badge.id = `sb-${idx}`;

    const txt = document.createElement('span');
    txt.textContent = sent.text;

    card.appendChild(badge);
    card.appendChild(txt);
    card.addEventListener('click', () => onSentenceClick(idx));
    sCol.appendChild(card);
  });

  matchTypes.forEach((type, idx) => {
    const card = document.createElement('div');
    card.className = 't-card';
    card.id = `t-${idx}`;

    const badge = document.createElement('span');
    badge.className = 'pair-badge';
    badge.id = `tb-${idx}`;

    const info = document.createElement('div');
    info.innerHTML = `<span class="t-name">${type.icon} ${type.label}</span>
                      <span class="t-formula">${type.formula}</span>`;
    card.appendChild(badge);
    card.appendChild(info);
    card.addEventListener('click', () => onTypeClick(idx));
    tCol.appendChild(card);
  });
}

function onSentenceClick(idx) {
  if (matchChecked) return;
  if (pairs[idx] !== undefined) {
    // Already matched → un-pair it and set as selected
    delete pairs[idx];
    selectedS = idx;
  } else if (selectedS === idx) {
    selectedS = null;
  } else {
    selectedS = idx;
  }
  updateMatchBoard();
  updateMatchStatus();
}

function onTypeClick(idx) {
  if (matchChecked) return;
  if (selectedS === null) return;

  // Remove any other sentence that was paired to this type
  Object.keys(pairs).forEach(si => { if (pairs[si] === idx) delete pairs[si]; });

  // Create pair
  pairs[selectedS] = idx;
  selectedS = null;

  updateMatchBoard();
  updateMatchStatus();

  const totalPairs = matchSentences.length;
  if (Object.keys(pairs).length === totalPairs) {
    document.getElementById('check-match-btn').classList.remove('hidden');
    document.getElementById('reset-match-btn').classList.remove('hidden');
  }
}

function updateMatchBoard() {
  // Build order-of-pairing map
  const orderMap = {};
  Object.keys(pairs).forEach((si, order) => { orderMap[si] = order; });

  matchSentences.forEach((_, idx) => {
    const card  = document.getElementById(`s-${idx}`);
    const badge = document.getElementById(`sb-${idx}`);
    if (!card) return;
    card.className  = 's-card';
    badge.className = 'pair-badge';
    badge.textContent = '';

    if (selectedS === idx) {
      card.classList.add('selected');
    } else if (pairs[idx] !== undefined) {
      const order = orderMap[idx];
      card.classList.add(PAIR_NAMES[order]);
      badge.classList.add(BADGE_NAMES[order]);
      badge.textContent = order + 1;
    }
  });

  matchTypes.forEach((_, idx) => {
    const card  = document.getElementById(`t-${idx}`);
    const badge = document.getElementById(`tb-${idx}`);
    if (!card) return;
    card.className  = 't-card';
    badge.className = 'pair-badge';
    badge.textContent = '';

    const pairedS = Object.keys(pairs).find(si => pairs[si] === idx);
    if (pairedS !== undefined) {
      const order = orderMap[pairedS];
      card.classList.add(PAIR_NAMES[order]);
      badge.classList.add(BADGE_NAMES[order]);
      badge.textContent = order + 1;
    }

    // Pulse-highlight un-matched types while a sentence is selected
    if (selectedS !== null && pairedS === undefined) {
      card.classList.add('pulse-target');
    }
  });
}

function updateMatchStatus() {
  const done  = Object.keys(pairs).length;
  const total = matchSentences.length;
  document.getElementById('match-status').textContent = `${done} / ${total} matched`;
}

// Check answers
document.getElementById('check-match-btn').addEventListener('click', checkMatchAnswers);

function checkMatchAnswers() {
  matchChecked = true;
  matchCorrect = 0;
  const resultEl = document.getElementById('match-results');
  resultEl.innerHTML = '';

  matchSentences.forEach((sent, sIdx) => {
    const tIdx = pairs[sIdx];
    const matchedType = matchTypes[tIdx];
    const isOk = matchedType && matchedType.key === sent.type;
    if (isOk) matchCorrect++;

    // Style cards
    const sCard = document.getElementById(`s-${sIdx}`);
    const tCard = document.getElementById(`t-${tIdx}`);
    if (sCard) { sCard.className = `s-card ${isOk ? 'match-ok' : 'match-err'}`; }
    if (tCard) { tCard.className = `t-card ${isOk ? 'match-ok' : 'match-err'}`; }

    // Result row
    const correct = TYPE_META[sent.type];
    const item = document.createElement('div');
    item.className = 'mr-item';
    item.innerHTML = `
      <span class="mr-icon">${isOk ? '✅' : '❌'}</span>
      <div>
        <p class="mr-title ${isOk ? 'ok-c' : 'err-c'}">${isOk ? 'Correct!' : `Should be: ${correct.icon} ${correct.label}`}</p>
        <p class="mr-note"><em>"${sent.text}"</em><br>${sent.exp}</p>
      </div>`;
    resultEl.appendChild(item);
  });

  document.getElementById('check-match-btn').classList.add('hidden');
  resultEl.classList.remove('hidden');
  document.getElementById('match-continue-btn').classList.remove('hidden');
}

document.getElementById('reset-match-btn').addEventListener('click', initGame1);

document.getElementById('match-continue-btn').addEventListener('click', () => {
  showResult(matchCorrect, matchSentences.length, 1);
});

/* =====================================================
   GAME 2 & 3 — QUIZ
===================================================== */
function initQuiz(gameNum) {
  quizQs       = shuffle(gameNum === 2 ? GAME2_QS : GAME3_QS);
  quizIdx      = 0;
  quizScore    = 0;
  quizAnswered = false;

  const isG2 = gameNum === 2;
  document.getElementById('quiz-game-title').textContent = isG2 ? '✏️ Fill in the Blank' : '❓ Grammar Quiz';
  document.getElementById('quiz-game-title').style.color = COLORS[gameNum];
  document.getElementById('quiz-q-label').textContent   = isG2 ? 'Complete the sentence:' : 'Choose the correct answer:';
  document.getElementById('quiz-prog-fill').style.background = COLORS[gameNum];
  document.getElementById('quiz-next-btn').style.background  = COLORS[gameNum];
  document.getElementById('quiz-next-btn').style.color = '#07101E';

  // Update opt-btn hover color via CSS variable
  document.documentElement.style.setProperty('--quiz-accent', COLORS[gameNum]);

  showScreen('quiz-screen');
  renderQuizQ();
}

function renderQuizQ() {
  quizAnswered = false;
  const q     = quizQs[quizIdx];
  const total = quizQs.length;

  document.getElementById('quiz-q-meta').textContent     = `Question ${quizIdx + 1} of ${total}`;
  document.getElementById('quiz-score-tag').textContent  = `${quizScore} pts`;
  document.getElementById('quiz-prog-fill').style.width  = `${(quizIdx / total) * 100}%`;

  // Highlight blank
  const html = q.text.replace('___', '<span class="blank">___</span>');
  document.getElementById('quiz-q-text').innerHTML = html;

  // Options
  const optsEl = document.getElementById('quiz-opts');
  optsEl.innerHTML = '';
  const LABELS = ['A','B','C','D'];
  shuffle(q.opts).forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className    = 'opt-btn';
    btn.dataset.val  = opt;
    btn.innerHTML    = `<span class="opt-lbl">${LABELS[i]}</span>${opt}`;
    btn.addEventListener('click', () => checkQuizAnswer(opt, q));
    optsEl.appendChild(btn);
  });

  document.getElementById('quiz-feedback').className = 'feedback hidden';
  document.getElementById('quiz-next-btn').classList.add('hidden');
}

function checkQuizAnswer(selected, q) {
  if (quizAnswered) return;
  quizAnswered = true;
  const isOk = selected === q.ans;
  if (isOk) quizScore++;

  document.querySelectorAll('#quiz-opts .opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.val === q.ans) btn.classList.add('is-correct');
    else if (btn.dataset.val === selected && !isOk) btn.classList.add('is-wrong');
  });

  const fb = document.getElementById('quiz-feedback');
  fb.className = `feedback ${isOk ? 'ok' : 'fail'}`;
  fb.innerHTML = `
    <span class="fb-icon">${isOk ? '✅' : '❌'}</span>
    <div>
      <p class="fb-title">${isOk ? 'Correct!' : `The answer is: "${q.ans}"`}</p>
      <p class="fb-note">${q.exp}</p>
    </div>`;

  document.getElementById('quiz-score-tag').textContent = `${quizScore} pts`;
  const nxt = document.getElementById('quiz-next-btn');
  nxt.classList.remove('hidden');
  nxt.textContent = (quizIdx + 1 < quizQs.length) ? 'Next →' : 'See Results →';
}

document.getElementById('quiz-next-btn').addEventListener('click', () => {
  quizIdx++;
  if (quizIdx < quizQs.length) renderQuizQ();
  else showResult(quizScore, quizQs.length, currentGame);
});

/* =====================================================
   GAME 4 — TRUE / FALSE
===================================================== */
function initGame4() {
  tfQs       = shuffle(GAME4_QS);
  tfIdx      = 0;
  tfScore    = 0;
  tfAnswered = false;
  document.getElementById('tf-prog-fill').style.width = '0%';
  showScreen('game4-screen');
  renderTFQ();
}

function renderTFQ() {
  tfAnswered = false;
  const q     = tfQs[tfIdx];
  const total = tfQs.length;

  document.getElementById('tf-q-meta').textContent   = `Statement ${tfIdx + 1} of ${total}`;
  document.getElementById('tf-score-tag').textContent = `${tfScore} pts`;
  document.getElementById('tf-prog-fill').style.width = `${(tfIdx / total) * 100}%`;
  document.getElementById('tf-statement').textContent = q.text;

  const btnT = document.getElementById('btn-true');
  const btnF = document.getElementById('btn-false');
  btnT.disabled = false;
  btnF.disabled = false;
  btnT.className = 'tf-btn tf-true-btn';
  btnF.className = 'tf-btn tf-false-btn';
  btnT.style.background = '';
  btnF.style.background = '';

  document.getElementById('tf-feedback').className = 'feedback hidden';
  document.getElementById('tf-next-btn').classList.add('hidden');
}

function onTFAnswer(chosen) {
  if (tfAnswered) return;
  tfAnswered = true;

  const q   = tfQs[tfIdx];
  const isOk = chosen === q.answer;
  if (isOk) tfScore++;

  const btnT = document.getElementById('btn-true');
  const btnF = document.getElementById('btn-false');
  btnT.disabled = true;
  btnF.disabled = true;

  // Highlight chosen button
  if (chosen) btnT.classList.add('btn-chosen-t');
  else        btnF.classList.add('btn-chosen-f');

  // Show correct answer highlight if wrong
  if (!isOk) {
    if (q.answer) btnT.style.background = 'rgba(16,185,129,.28)';
    else          btnF.style.background = 'rgba(244,63,94,.28)';
  }

  const fb = document.getElementById('tf-feedback');
  fb.className = `feedback ${isOk ? 'ok' : 'fail'}`;
  fb.innerHTML = `
    <span class="fb-icon">${isOk ? '✅' : '❌'}</span>
    <div>
      <p class="fb-title">${isOk ? 'Correct!' : `It is ${q.answer ? 'TRUE' : 'FALSE'}`}</p>
      <p class="fb-note">${q.exp}</p>
    </div>`;

  document.getElementById('tf-score-tag').textContent = `${tfScore} pts`;
  const nxt = document.getElementById('tf-next-btn');
  nxt.classList.remove('hidden');
  nxt.textContent = (tfIdx + 1 < tfQs.length) ? 'Next →' : 'See Results →';
}

document.getElementById('btn-true').addEventListener('click',  () => onTFAnswer(true));
document.getElementById('btn-false').addEventListener('click', () => onTFAnswer(false));

document.getElementById('tf-next-btn').addEventListener('click', () => {
  tfIdx++;
  if (tfIdx < tfQs.length) renderTFQ();
  else showResult(tfScore, tfQs.length, 4);
});

/* =====================================================
   RESULT SCREEN
===================================================== */
function showResult(correct, total, gameNum) {
  const pct = Math.round((correct / total) * 100);

  const [emoji, msg] =
    pct === 100 ? ['🏆', 'Perfect score! You\'ve mastered English conditionals!']  :
    pct >= 75   ? ['🌟', 'Excellent work! You have a strong command of conditionals.'] :
    pct >= 50   ? ['👍', 'Good effort! Read the explanations and try again.'] :
                  ['📚', 'Keep studying! Review the conditional formulas and practice.'];

  document.getElementById('r-emoji').textContent = emoji;
  document.getElementById('r-num').textContent   = correct;
  document.getElementById('r-den').textContent   = `/${total}`;
  document.getElementById('r-pct').textContent   = `${pct}% correct`;
  document.getElementById('r-msg').textContent   = msg;

  // Tint the score number with the game's color
  document.getElementById('r-num').style.color   = COLORS[gameNum];
  document.getElementById('menu-btn').style.background = COLORS[gameNum];
  document.getElementById('menu-btn').style.color = gameNum === 4 ? '#fff' : '#07101E';

  showScreen('result-screen');
}

/* =====================================================
   KEYBOARD SHORTCUTS  (quiz & true/false screens)
===================================================== */
document.addEventListener('keydown', e => {
  // Quiz screen shortcuts: 1–4 or A–D to select option, Enter/Space for Next
  if (document.getElementById('quiz-screen').classList.contains('active')) {
    const map = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
    const k   = e.key.toLowerCase();
    if (k in map && !quizAnswered) {
      const btns = document.querySelectorAll('#quiz-opts .opt-btn:not(:disabled)');
      if (btns[map[k]]) btns[map[k]].click();
    }
    if ((e.key === 'Enter' || e.key === ' ') && quizAnswered) {
      const nxt = document.getElementById('quiz-next-btn');
      if (!nxt.classList.contains('hidden')) nxt.click();
    }
  }

  // True/False screen shortcuts: T/Y = True, F/N = False, Enter for Next
  if (document.getElementById('game4-screen').classList.contains('active')) {
    const k = e.key.toLowerCase();
    if ((k === 't' || k === 'y') && !tfAnswered) document.getElementById('btn-true').click();
    if ((k === 'f' || k === 'n') && !tfAnswered) document.getElementById('btn-false').click();
    if ((e.key === 'Enter' || e.key === ' ') && tfAnswered) {
      const nxt = document.getElementById('tf-next-btn');
      if (!nxt.classList.contains('hidden')) nxt.click();
    }
  }
});