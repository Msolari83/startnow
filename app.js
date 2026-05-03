// ============================================================
//  StartNow — app.js  (bilingual: English + Italian)
//  All state, data, translations and logic. No frameworks.
// ============================================================

// ── Language State ─────────────────────────────────────────────
let currentLang = localStorage.getItem("startnow_lang") || "en";

// ── Translations ───────────────────────────────────────────────
const TRANSLATIONS = {
  en: {
    // Intro screen
    introTagline:    "Take action",
    introHeadline:   "Stop thinking.<br><em>Start doing.</em>",
    introBody:       "You're avoiding something. This app helps you start — right now, with whatever time you have.",
    statLabelToday:  "min today",
    statLabelTotal:  "total min",
    statLabelStreak: "day streak",
    btnStart:        "Start now",

    // Type screen
    step1Label:      "Step 1 of 3",
    questionType:    "What are you<br>avoiding?",
    typeWork:        "Work",
    typeDecision:    "A decision",
    typeTraining:    "Training",
    typeThinking:    "Thinking about something",
    typeStuck:       "I feel stuck",
    typeDontKnow:    "I don't know",

    // Time screen
    step2Label:      "Step 3 of 3",
    questionTime:    "How much time<br>do you have?",
    timeUnit:        "min",

    // Result screen
    resultLabel:     "Your task",
    stepsLabel:      "Steps",
    timerStateLabel: "Running",
    btnDone:         "Done",
    btnDoneTimer:    "Timer done — mark complete",
    btnTimer:        "Start timer",
    btnTimerStop:    "Stop timer",
    btnAnother:      "Another one",
    btnBack:         "Back",
    btnResultHome:   "Home",

    // Reset stats
    btnResetStats:       "Reset statistics",
    confirmResetStats:   "Are you sure you want to reset your statistics?",

    // Truth Mode — reason screen
    step1of3Label:       "Step 1 of 3",
    step2of3Label:       "Step 2 of 3",
    step3of3Label:       "Step 3 of 3",
    questionReason:      "Why are you<br>avoiding it?",
    reasonTruthMode:     "Truth Mode",
    resultTruthMode:     "Truth Mode",
    reasonTooDifficult:  "Too difficult",
    reasonDontFeelLike:  "I don't feel like it",
    reasonAfraid:        "I'm afraid",
    reasonDontKnowStart: "I don't know where to start",
    reasonNotImportant:  "It's not important",
    reasonFeelStuck:     "I feel stuck",

    // Done screen
    doneMessage:     "You started.<br>That's what matters.",
    doneSub:         "Progress doesn't require perfection.",
    statLabelToday2: "min today",
    statLabelTotal2: "total min",
    statLabelStreak2:"day streak",
    btnAgain:        "Start another",
    btnHome:         "Back to home",

    // More Time flow
    btnMoreTime:          "More time",
    questionMoreTime:     "How do you want<br>to use it?",
    moreTimeStart:        "Start",
    moreTimeStartSub:     "10 min block",
    moreTimeContinue:     "Continue",
    moreTimeContinueSub:  "15 min block",
  },

  it: {
    // Intro screen
    introTagline:    "Agisci adesso",
    introHeadline:   "Smettila di pensare.<br><em>Inizia a fare.</em>",
    introBody:       "Stai evitando qualcosa. Questa app ti aiuta a iniziare — adesso, con il tempo che hai.",
    statLabelToday:  "min oggi",
    statLabelTotal:  "min totali",
    statLabelStreak: "giorni di fila",
    btnStart:        "Inizia ora",

    // Type screen
    step1Label:      "Passo 1 di 3",
    questionType:    "Cosa stai<br>evitando?",
    typeWork:        "Lavoro",
    typeDecision:    "Una decisione",
    typeTraining:    "Allenamento",
    typeThinking:    "Pensare a qualcosa",
    typeStuck:       "Mi sento bloccato",
    typeDontKnow:    "Non lo so",

    // Time screen
    step2Label:      "Passo 3 di 3",
    questionTime:    "Quanto tempo<br>hai a disposizione?",
    timeUnit:        "min",

    // Result screen
    resultLabel:     "Il tuo compito",
    stepsLabel:      "Passi",
    timerStateLabel: "In corso",
    btnDone:         "Fatto",
    btnDoneTimer:    "Tempo scaduto — segna completato",
    btnTimer:        "Avvia timer",
    btnTimerStop:    "Ferma timer",
    btnAnother:      "Un altro",
    btnBack:         "Indietro",
    btnResultHome:   "Home",

    // Reset stats
    btnResetStats:       "Azzera statistiche",
    confirmResetStats:   "Sei sicuro di voler resettare le statistiche?",

    // Truth Mode — reason screen
    step1of3Label:       "Passo 1 di 3",
    step2of3Label:       "Passo 2 di 3",
    step3of3Label:       "Passo 3 di 3",
    questionReason:      "Perché lo stai<br>evitando?",
    reasonTruthMode:     "Modalità Verità",
    resultTruthMode:     "Modalità Verità",
    reasonTooDifficult:  "Troppo difficile",
    reasonDontFeelLike:  "Non ne ho voglia",
    reasonAfraid:        "Ho paura",
    reasonDontKnowStart: "Non so da dove iniziare",
    reasonNotImportant:  "Non è importante",
    reasonFeelStuck:     "Mi sento bloccato",

    // Done screen
    doneMessage:     "Hai iniziato.<br>È quello che conta.",
    doneSub:         "Il progresso non richiede perfezione.",
    statLabelToday2: "min oggi",
    statLabelTotal2: "min totali",
    statLabelStreak2:"giorni di fila",
    btnAgain:        "Iniziane un altro",
    btnHome:         "Torna all'inizio",

    // More Time flow
    btnMoreTime:          "Ho più tempo",
    questionMoreTime:     "Come vuoi<br>usarlo?",
    moreTimeStart:        "Iniziare",
    moreTimeStartSub:     "blocco da 10 min",
    moreTimeContinue:     "Continuare",
    moreTimeContinueSub:  "blocco da 15 min",
  }
};

// ── Truth Lines ────────────────────────────────────────────────
// One direct, honest sentence per reason, shown prominently on
// the result screen when an activity was picked via Truth Mode.
const TRUTH_LINES = {
  too_difficult: {
    en: "It's not too difficult. You're avoiding the first step.",
    it: "Non è troppo difficile. Stai evitando il primo passo."
  },
  dont_feel_like: {
    en: "You don't need to feel ready. You need to start.",
    it: "Non devi sentirti pronto. Devi iniziare."
  },
  afraid: {
    en: "Fear gets smaller after action, not before.",
    it: "La paura si riduce dopo l'azione, non prima."
  },
  dont_know_start: {
    en: "The right starting point does not exist. Start anywhere.",
    it: "Il punto di partenza perfetto non esiste. Inizia da qualsiasi punto."
  },
  not_important: {
    en: "If it's not important, it does not deserve your energy. Finish it or drop it.",
    it: "Se non è importante, non merita la tua energia. Finiscilo o lascialo andare."
  },
  feel_stuck: {
    en: "You are not blocked. You are paused.",
    it: "Non sei bloccato. Sei in pausa."
  }
};

// ── Motivational Messages ──────────────────────────────────────
// Shown on the time selection screen, keyed by type+reason.
// Each entry has `en` and `it` arrays; one is picked at random.
// Falls back to reason-only key if no type+reason match.
const MOTIVATIONAL_MESSAGES = {

  // ── work + reason ─────────────────────────────────────────────
  "work+too_difficult": {
    en: [
      "It feels hard because you haven't started. Starting makes it smaller.",
      "Difficult tasks don't get easier by waiting. They just get heavier.",
      "You don't need to finish it. You need to take one step.",
      "Break it in half. Then in half again. Now do the first piece.",
      "Hard is not the same as impossible. Start and find out."
    ],
    it: [
      "Sembra difficile perché non hai iniziato. Iniziare lo ridimensiona.",
      "I compiti difficili non migliorano aspettando. Diventano solo più pesanti.",
      "Non devi finirlo. Devi fare un passo.",
      "Dividilo a metà. Poi ancora a metà. Ora fai la prima parte.",
      "Difficile non significa impossibile. Inizia e scoprilo."
    ]
  },

  "work+dont_feel_like": {
    en: [
      "It is not motivation. It is resistance. Start anyway.",
      "You will not start with motivation. You start first.",
      "Waiting for motivation is the trap. Start without it.",
      "5 minutes. That is all. Then decide if you stop.",
      "You do not need to do it well. You need to start it."
    ],
    it: [
      "Non è voglia. È resistenza. Parti comunque.",
      "Non inizierai mai con voglia. Inizi e basta.",
      "Aspettare motivazione è la trappola. Parti senza.",
      "5 minuti. Solo questo. Poi decidi se fermarti.",
      "Non devi farlo bene. Devi farlo partire."
    ]
  },

  "work+dont_know_start": {
    en: [
      "You don't need the right starting point. You need any starting point.",
      "Open the file. That's step one. Everything else comes after.",
      "Pick the smallest visible piece and do only that.",
      "The first action doesn't have to be perfect. It has to exist.",
      "Write one sentence. Send one email. Make one move."
    ],
    it: [
      "Non ti serve il punto di partenza giusto. Ti serve un punto di partenza.",
      "Apri il file. Questo è il passo uno. Tutto il resto viene dopo.",
      "Scegli il pezzo più piccolo che vedi e fai solo quello.",
      "La prima azione non deve essere perfetta. Deve esistere.",
      "Scrivi una riga. Manda un'email. Fai una mossa."
    ]
  },

  "work+afraid": {
    en: [
      "Fear of doing it wrong is still fear of doing it. Do it anyway.",
      "The work won't judge you. Just start.",
      "You're not afraid of the task. You're afraid of what it means. Start anyway.",
      "Action reduces fear. Waiting amplifies it.",
      "Done imperfectly beats not done perfectly every time."
    ],
    it: [
      "La paura di farlo male è sempre paura di farlo. Fallo comunque.",
      "Il lavoro non ti giudica. Inizia e basta.",
      "Non hai paura del compito. Hai paura di cosa significa. Inizia comunque.",
      "L'azione riduce la paura. L'attesa la amplifica.",
      "Fatto male batte non fatto ogni volta."
    ]
  },

  // ── decision + reason ─────────────────────────────────────────
  "decision+too_difficult": {
    en: [
      "It is not too difficult. You are avoiding the choice.",
      "You want the right choice. But only a made choice exists.",
      "The longer you wait, the heavier it gets. Choose now, adjust later.",
      "You are not missing ability. You are missing the start.",
      "It is not complex. It is just uncomfortable to decide."
    ],
    it: [
      "Non è troppo difficile. Stai evitando di scegliere.",
      "Vuoi la scelta giusta. Ma esiste solo una scelta fatta.",
      "Più aspetti, peggio diventa. Scegli adesso, aggiusta dopo.",
      "Non ti manca la capacità. Ti manca il via.",
      "Non è complesso. È solo scomodo decidere."
    ]
  },

  "decision+afraid": {
    en: [
      "Every decision is a bet. You're just refusing to place yours.",
      "Fear of the wrong choice is still a choice — to stay stuck.",
      "Being afraid means it matters. That's a good reason to decide.",
      "No decision is also a decision. It's just the passive one.",
      "You'll survive the wrong choice. You won't survive not choosing."
    ],
    it: [
      "Ogni decisione è una scommessa. Stai solo rifiutando di fare la tua.",
      "La paura della scelta sbagliata è già una scelta — restare bloccato.",
      "Avere paura significa che è importante. È un buon motivo per decidere.",
      "Non decidere è già una decisione. Solo quella passiva.",
      "Sopravviverai alla scelta sbagliata. Non sopravviverai al non scegliere."
    ]
  },

  "decision+dont_know_start": {
    en: [
      "List your options. You already know more than you think.",
      "You don't need more information. You need to commit to one direction.",
      "Start by writing down what you actually want. Not what you should want.",
      "The perfect decision doesn't exist. A good enough decision does.",
      "Clarity comes from deciding, not from thinking about deciding."
    ],
    it: [
      "Elenca le opzioni. Sai già più di quanto pensi.",
      "Non ti servono altre informazioni. Ti serve scegliere una direzione.",
      "Inizia scrivendo cosa vuoi davvero. Non cosa dovresti volere.",
      "La decisione perfetta non esiste. Una decisione abbastanza buona sì.",
      "La chiarezza viene dal decidere, non dal pensare di decidere."
    ]
  },

  "decision+dont_feel_like": {
    en: [
      "Decisions don't feel comfortable. That's not a sign to wait.",
      "You don't have to want to decide. You just have to decide.",
      "The discomfort is the decision asking to be made.",
      "Dragging it out doesn't make it easier. It makes you more tired.",
      "Make the call. You can always adjust later."
    ],
    it: [
      "Le decisioni non sono comode. Non è un segnale per aspettare.",
      "Non devi avere voglia di decidere. Devi solo decidere.",
      "Il disagio è la decisione che chiede di essere presa.",
      "Rimandare non la rende più facile. Ti stanca di più.",
      "Prendila. Puoi sempre aggiustare dopo."
    ]
  },

  // ── training + reason ─────────────────────────────────────────
  "training+dont_feel_like": {
    en: [
      "You never feel like it before. You always feel better after.",
      "Your body doesn't need motivation. It needs movement.",
      "The part of you that doesn't want to go has never been right.",
      "Start the warmup. The rest follows on its own.",
      "5 minutes in, you'll wonder why you hesitated."
    ],
    it: [
      "Non ne hai mai voglia prima. Ti senti sempre meglio dopo.",
      "Il tuo corpo non ha bisogno di motivazione. Ha bisogno di movimento.",
      "La parte di te che non vuole andare non ha mai avuto ragione.",
      "Inizia il riscaldamento. Il resto viene da solo.",
      "Dopo 5 minuti ti chiederai perché hai esitato."
    ]
  },

  "training+too_difficult": {
    en: [
      "Hard training is how easy training gets made.",
      "You've done hard before. You'll do it again.",
      "Reduce the target. Do half. Then decide if you continue.",
      "Difficult today means stronger tomorrow. That's the deal.",
      "Start slower. But start."
    ],
    it: [
      "L'allenamento difficile è come si costruisce quello facile.",
      "Hai già fatto cose difficili. Lo farai di nuovo.",
      "Riduci l'obiettivo. Fai la metà. Poi decidi se continuare.",
      "Difficile oggi significa più forte domani. Questo è il patto.",
      "Inizia più lentamente. Ma inizia."
    ]
  },

  "training+afraid": {
    en: [
      "Afraid of pushing too hard? Start easy. Afraid of failing? You haven't started yet.",
      "The gym doesn't care how you perform. Just show up.",
      "Fear before training always disappears once you're moving.",
      "You're not afraid of the workout. You're afraid it won't be enough. Do it anyway.",
      "One rep, one step, one move. Fear can't survive that."
    ],
    it: [
      "Paura di spingere troppo? Inizia piano. Paura di fallire? Non hai ancora iniziato.",
      "L'allenamento non si preoccupa di come vai. Presentati e basta.",
      "La paura prima dell'allenamento sparisce sempre quando sei in movimento.",
      "Non hai paura dell'allenamento. Hai paura che non basti. Fallo comunque.",
      "Un ripetizione, un passo, un gesto. La paura non sopravvive a questo."
    ]
  },

  "training+dont_know_start": {
    en: [
      "Put on your shoes. That's it. That's step one.",
      "You don't need a plan. You need to move.",
      "Pick one exercise. Do it for 5 minutes. Build from there.",
      "Start with what you know. You know more than nothing.",
      "Imperfect movement beats perfect stillness every time."
    ],
    it: [
      "Metti le scarpe. Solo questo. Questo è il passo uno.",
      "Non ti serve un piano. Ti serve muoverti.",
      "Scegli un esercizio. Fallo per 5 minuti. Costruisci da lì.",
      "Inizia da quello che sai. Sai più di niente.",
      "Il movimento imperfetto batte l'immobilità perfetta ogni volta."
    ]
  },

  // ── thinking + reason ─────────────────────────────────────────
  "thinking+afraid": {
    en: [
      "You're afraid of what thinking might reveal. Think anyway.",
      "Clarity is on the other side of the thought you're avoiding.",
      "The thing you don't want to think about is exactly what needs attention.",
      "Thinking it through is less dangerous than thinking around it forever.",
      "Sit with it for 5 minutes. You won't break."
    ],
    it: [
      "Hai paura di cosa il pensiero potrebbe rivelare. Pensa comunque.",
      "La chiarezza è dall'altro lato del pensiero che stai evitando.",
      "La cosa a cui non vuoi pensare è esattamente quella che ha bisogno di attenzione.",
      "Pensarci è meno pericoloso che girarci attorno per sempre.",
      "Stacci dentro 5 minuti. Non ti romperà."
    ]
  },

  "thinking+dont_know_start": {
    en: [
      "Write the question, not the answer. Start there.",
      "You don't need to solve it now. You need to look at it.",
      "Open a blank page. Write whatever comes. Order it later.",
      "Name the thing. Just naming it is progress.",
      "The thought is already in your head. Let it out onto paper."
    ],
    it: [
      "Scrivi la domanda, non la risposta. Inizia da lì.",
      "Non devi risolverlo adesso. Devi solo guardarlo.",
      "Apri una pagina bianca. Scrivi quello che viene. Ordinalo dopo.",
      "Dai un nome alla cosa. Solo nominarla è un progresso.",
      "Il pensiero è già nella tua testa. Lascialo uscire su carta."
    ]
  },

  "thinking+dont_feel_like": {
    en: [
      "You don't want to think because thinking means facing it.",
      "Avoidance doesn't make the thought go away. It makes it louder.",
      "Give it 5 minutes of real attention. It deserves that.",
      "The longer you avoid it, the more space it takes up.",
      "Think about it now, on your terms. Or it'll surface at 3am."
    ],
    it: [
      "Non vuoi pensarci perché pensarci significa affrontarlo.",
      "Evitarlo non fa sparire il pensiero. Lo rende più rumoroso.",
      "Dagli 5 minuti di attenzione vera. Lo merita.",
      "Più a lungo lo eviti, più spazio occupa.",
      "Pensaci adesso, a modo tuo. O verrà fuori alle 3 di notte."
    ]
  },

  "thinking+too_difficult": {
    en: [
      "Complex thoughts don't simplify themselves. You have to engage.",
      "It's not too complex to think about. It's too important to ignore.",
      "Break it into one question. Just one. Answer only that.",
      "Difficult thinking is still thinking. Start messy.",
      "You don't need the full answer. You need the next question."
    ],
    it: [
      "I pensieri complessi non si semplificano da soli. Devi impegnarti.",
      "Non è troppo complesso per pensarci. È troppo importante per ignorarlo.",
      "Riducilo a una domanda. Solo una. Rispondi solo a quella.",
      "Pensare è difficile. Inizia lo stesso, anche in modo caotico.",
      "Non ti serve la risposta completa. Ti serve la prossima domanda."
    ]
  },

  // ── stuck + any reason (type=stuck catches all) ───────────────
  "stuck+feel_stuck": {
    en: [
      "You are not blocked. You are avoiding the first step.",
      "Being stuck is often just delayed movement.",
      "Start badly. But start.",
      "The stuck feeling is a signal to act, not to wait.",
      "You've been here before and moved. Move again."
    ],
    it: [
      "Non sei bloccato. Stai evitando il primo passo.",
      "Il blocco è solo indecisione prolungata.",
      "Parti male. Ma parti.",
      "La sensazione di blocco è un segnale per agire, non per aspettare.",
      "Sei già stato qui e ti sei mosso. Muoviti di nuovo."
    ]
  },

  "stuck+too_difficult": {
    en: [
      "It's not too hard. It's too unfamiliar. That changes once you start.",
      "Stuck and difficult are not the same. One move will prove it.",
      "You don't need to unstick everything. Just unstick this moment.",
      "Hard things look harder when you're standing still.",
      "The first step doesn't require confidence. Just action."
    ],
    it: [
      "Non è troppo difficile. È troppo sconosciuto. Cambia appena inizi.",
      "Bloccato e difficile non sono la stessa cosa. Una mossa lo dimostrerà.",
      "Non devi sbloccare tutto. Devi sbloccare solo questo momento.",
      "Le cose difficili sembrano più difficili quando sei fermo.",
      "Il primo passo non richiede sicurezza. Solo azione."
    ]
  },

  "stuck+afraid": {
    en: [
      "You're stuck because moving feels risky. It's less risky than staying.",
      "Fear keeps you stuck. Action dissolves fear. Simple equation.",
      "What's the worst that happens if you take one step? Do that.",
      "Stuck and afraid usually mean you care. Let that push you forward.",
      "You can be afraid and moving at the same time."
    ],
    it: [
      "Sei bloccato perché muoverti sembra rischioso. È meno rischioso che restare.",
      "La paura ti tiene bloccato. L'azione scioglie la paura. Equazione semplice.",
      "Cosa succede di peggio se fai un passo? Fallo.",
      "Bloccato e spaventato di solito significa che ci tieni. Lascia che ti spinga avanti.",
      "Puoi avere paura e muoverti allo stesso tempo."
    ]
  },

  "stuck+dont_know_start": {
    en: [
      "Pick any direction. Stuck people overthink direction.",
      "You don't need the right move. You need a move.",
      "Write down three things you could do. Do the first one.",
      "Start with the smallest visible action. Not the right one. The nearest one.",
      "Standing still waiting for clarity keeps you stuck. Move to find it."
    ],
    it: [
      "Scegli qualsiasi direzione. Le persone bloccate pensano troppo alla direzione.",
      "Non ti serve la mossa giusta. Ti serve una mossa.",
      "Scrivi tre cose che potresti fare. Fai la prima.",
      "Inizia con la più piccola azione visibile. Non quella giusta. Quella più vicina.",
      "Stare fermi ad aspettare chiarezza ti tiene bloccato. Muoviti per trovarla."
    ]
  },

  "stuck+dont_feel_like": {
    en: [
      "Not feeling like it while stuck is expected. It's not an excuse.",
      "Motivation won't come while you're stuck. Movement will bring it.",
      "You don't have to want to move. You just have to move.",
      "The feeling will change once you start. It never changes before.",
      "Stuck plus unwilling is still just stuck. One move fixes both."
    ],
    it: [
      "Non averne voglia quando sei bloccato è normale. Non è una scusa.",
      "La motivazione non arriva mentre sei bloccato. Il movimento la porta.",
      "Non devi avere voglia di muoverti. Devi solo muoverti.",
      "La sensazione cambierà quando inizi. Non cambia mai prima.",
      "Bloccato più senza voglia è ancora solo bloccato. Una mossa risolve entrambi."
    ]
  },

  // ── reason-only fallbacks (used when type+reason has no match) ─
  "reason+too_difficult": {
    en: [
      "Hard things stay hard until you start. Then they get manageable.",
      "You don't need to see the whole path. Just the next step.",
      "Difficult is not a stop sign. It's a description.",
      "Everything hard was unfamiliar first. Start the familiarity.",
      "The difficulty is real. Your ability to handle it is too."
    ],
    it: [
      "Le cose difficili restano difficili finché non inizi. Poi diventano gestibili.",
      "Non devi vedere tutto il percorso. Solo il passo successivo.",
      "Difficile non è un segnale di stop. È una descrizione.",
      "Tutto ciò che è difficile era prima sconosciuto. Inizia a familiarizzarti.",
      "La difficoltà è reale. Anche la tua capacità di gestirla."
    ]
  },

  "reason+dont_feel_like": {
    en: [
      "Waiting to feel ready is the oldest procrastination trick.",
      "Feelings follow action, not the other way around.",
      "You don't owe your future self this delay.",
      "The moment you start, the resistance drops. Every time.",
      "Not feeling like it means nothing about whether you should."
    ],
    it: [
      "Aspettare di sentirti pronto è il trucco più antico della procrastinazione.",
      "I sentimenti seguono l'azione, non il contrario.",
      "Non devi a te stesso questo ritardo.",
      "Nel momento in cui inizi, la resistenza cala. Ogni volta.",
      "Non averne voglia non dice nulla su se dovresti farlo."
    ]
  },

  "reason+afraid": {
    en: [
      "Fear gets smaller after action, not before.",
      "You don't have to feel brave. You just have to move.",
      "Being afraid means it matters. That's enough reason to start.",
      "Action is the only thing that changes fear into something smaller.",
      "The fear is lying to you about how bad starting will be."
    ],
    it: [
      "La paura si riduce dopo l'azione, non prima.",
      "Non devi sentirti coraggioso. Devi solo muoverti.",
      "Avere paura significa che è importante. È abbastanza per iniziare.",
      "L'azione è l'unica cosa che trasforma la paura in qualcosa di più piccolo.",
      "La paura ti sta mentendo su quanto sarà difficile iniziare."
    ]
  },

  "reason+dont_know_start": {
    en: [
      "The right starting point does not exist. Start anywhere.",
      "Confusion clears once you're moving. Not before.",
      "Do the most obvious thing first. Then do the next obvious thing.",
      "You know enough to take one step. That's all you need.",
      "Start messy. Order comes from movement, not from planning."
    ],
    it: [
      "Il punto di partenza perfetto non esiste. Inizia da qualsiasi punto.",
      "La confusione si chiarisce quando ti muovi. Non prima.",
      "Fai prima la cosa più ovvia. Poi la prossima cosa ovvia.",
      "Sai abbastanza per fare un passo. È tutto ciò che ti serve.",
      "Inizia in modo caotico. L'ordine viene dal movimento, non dalla pianificazione."
    ]
  },

  "reason+feel_stuck": {
    en: [
      "Stuck is temporary. Starting makes it so.",
      "The block you feel is smaller than it looks. Test it.",
      "You've moved before from this exact feeling. Move again.",
      "Stuck is a state, not a verdict. Change the state.",
      "One small action is enough to prove stuck wrong."
    ],
    it: [
      "Bloccato è temporaneo. Iniziare lo rende tale.",
      "Il blocco che senti è più piccolo di quanto sembra. Mettilo alla prova.",
      "Ti sei già mosso da questa stessa sensazione. Muoviti di nuovo.",
      "Bloccato è uno stato, non un verdetto. Cambia lo stato.",
      "Una piccola azione è sufficiente per dimostrare che il blocco ha torto."
    ]
  },

  "reason+not_important": {
    en: [
      "If it's not important, finish it fast and be done.",
      "You're spending more energy avoiding it than doing it.",
      "Unimportant things still pile up. Clear it now.",
      "Not important enough to care about, but important enough to keep avoiding? Do it.",
      "The fastest way past it is through it."
    ],
    it: [
      "Se non è importante, finiscilo in fretta e liberatene.",
      "Stai spendendo più energia ad evitarlo che a farlo.",
      "Le cose non importanti si accumulano comunque. Liberatene adesso.",
      "Non abbastanza importante da curartene, ma abbastanza da continuare a evitarlo? Fallo.",
      "Il modo più veloce per superarlo è attraversarlo."
    ]
  }
};

/**
 * renderMotivationalMessage()
 * Picks a random message for the current type+reason combination
 * and injects it into the #time-motivational-msg element.
 */
function renderMotivationalMessage() {
  const el = document.getElementById("time-motivational-msg");
  if (!el) return;

  const type   = state.selectedType;
  const reason = state.selectedReason;
  const lang   = currentLang;

  // Try exact type+reason match first, then reason-only fallback
  const key         = type && reason ? `${type}+${reason}` : null;
  const fallbackKey = reason ? `reason+${reason}` : null;

  const pool =
    (key        && MOTIVATIONAL_MESSAGES[key]?.[lang])        ||
    (fallbackKey && MOTIVATIONAL_MESSAGES[fallbackKey]?.[lang]) ||
    null;

  if (!pool || pool.length === 0) {
    el.textContent = "";
    el.style.display = "none";
    return;
  }

  const msg = pool[Math.floor(Math.random() * pool.length)];
  el.textContent   = msg;
  el.style.display = "block";
}

// ── Activity Library (bilingual) ───────────────────────────────
// id, type, duration are language-neutral.
// Each activity has an `en` and `it` block: { title, description, steps }.
const ACTIVITIES = [

  // ── WORK ─────────────────────────────────────────────────────
  {
    id: "work-01", type: "work", duration: 5,
    en: {
      title: "No motivation needed",
      description: "Start without thinking.",
      steps: ["Open the task", "Do the first small action", "Stop after 5 minutes if you want"]
    },
    it: {
      title: "Non serve motivazione",
      description: "Inizia senza pensare.",
      steps: ["Apri il compito", "Fai la prima piccola azione", "Fermati dopo 5 minuti se vuoi"]
    }
  },
  {
    id: "work-02", type: "work", duration: 10,
    en: {
      title: "Two-minute rule",
      description: "If it takes less than two minutes, do it right now.",
      steps: ["List three small tasks", "Pick the fastest one", "Do it completely", "Move to the next"]
    },
    it: {
      title: "Regola dei due minuti",
      description: "Se ci vuole meno di due minuti, fallo adesso.",
      steps: ["Elenca tre piccoli compiti", "Scegli quello più veloce", "Fallo completamente", "Passa al successivo"]
    }
  },
  {
    id: "work-03", type: "work", duration: 15,
    en: {
      title: "Ugly first draft",
      description: "Done beats perfect every time.",
      steps: ["Open a blank document", "Write or sketch without editing", "Don't stop for 10 minutes", "Review only after time is up"]
    },
    it: {
      title: "Brutta prima bozza",
      description: "Fatto batte perfetto ogni volta.",
      steps: ["Apri un documento vuoto", "Scrivi o abbozza senza correggere", "Non fermarti per 10 minuti", "Rivedi solo dopo che il tempo è scaduto"]
    }
  },
  {
    id: "work-04", type: "work", duration: 5,
    en: {
      title: "One email sent",
      description: "The inbox won't clear itself.",
      steps: ["Open your inbox", "Find the most overdue email", "Write three sentences and send"]
    },
    it: {
      title: "Un'email inviata",
      description: "La posta in arrivo non si svuota da sola.",
      steps: ["Apri la posta in arrivo", "Trova l'email più in ritardo", "Scrivi tre frasi e invia"]
    }
  },
  {
    id: "work-05", type: "work", duration: 10,
    en: {
      title: "Clear the surface",
      description: "A clear workspace reduces resistance.",
      steps: ["Remove everything not related to the task", "Keep only what you need open", "Set a 10-minute countdown", "Work until it rings"]
    },
    it: {
      title: "Libera la scrivania",
      description: "Un ambiente pulito riduce la resistenza.",
      steps: ["Togli tutto ciò che non riguarda il compito", "Tieni aperto solo ciò che ti serve", "Imposta un conto alla rovescia di 10 minuti", "Lavora fino al segnale"]
    }
  },
  {
    id: "work-06", type: "work", duration: 15,
    en: {
      title: "Single tab rule",
      description: "Close everything that isn't the work.",
      steps: ["Close all tabs except one", "Turn off notifications", "Work on that one thing for 15 minutes", "No switching allowed"]
    },
    it: {
      title: "Regola della scheda singola",
      description: "Chiudi tutto ciò che non è lavoro.",
      steps: ["Chiudi tutte le schede tranne una", "Disattiva le notifiche", "Lavora su quella cosa per 15 minuti", "Niente cambi di pagina"]
    }
  },
  {
    id: "work-07", type: "work", duration: 5,
    en: {
      title: "Next physical action",
      description: "Identify exactly what your hands need to do.",
      steps: ["Name the task in one sentence", "Write the first physical action", "Do only that action now"]
    },
    it: {
      title: "Prossima azione fisica",
      description: "Identifica esattamente cosa devono fare le tue mani.",
      steps: ["Nomina il compito in una frase", "Scrivi la prima azione fisica", "Fai solo quell'azione adesso"]
    }
  },
  {
    id: "work-08", type: "work", duration: 10,
    en: {
      title: "Review what's actually due",
      description: "Most of the list can wait. Find what can't.",
      steps: ["Open your task list", "Mark items due today", "Pick the top one", "Start immediately"]
    },
    it: {
      title: "Rivedi cosa è davvero urgente",
      description: "La maggior parte della lista può aspettare. Trova ciò che non può.",
      steps: ["Apri la lista dei compiti", "Segna ciò che scade oggi", "Scegli il più importante", "Inizia subito"]
    }
  },

  // ── DECISION ──────────────────────────────────────────────────
  {
    id: "decision-01", type: "decision", duration: 5,
    en: {
      title: "You already know",
      description: "Clarity comes from action.",
      steps: ["Write 2 options", "Write 1 pro and 1 con each", "Choose"]
    },
    it: {
      title: "Lo sai già",
      description: "La chiarezza arriva con l'azione.",
      steps: ["Scrivi 2 opzioni", "Scrivi 1 pro e 1 contro per ognuna", "Scegli"]
    }
  },
  {
    id: "decision-02", type: "decision", duration: 10,
    en: {
      title: "Worst case, then what?",
      description: "Fear of a decision is usually fear of one outcome.",
      steps: ["Write the decision", "Write the worst realistic outcome", "Write what you'd do after that", "Decide with that in mind"]
    },
    it: {
      title: "Nel caso peggiore, poi cosa?",
      description: "La paura di decidere è spesso paura di un solo scenario.",
      steps: ["Scrivi la decisione", "Scrivi il peggior risultato realistico", "Scrivi cosa faresti dopo", "Decidi tenendolo a mente"]
    }
  },
  {
    id: "decision-03", type: "decision", duration: 5,
    en: {
      title: "One-way or two-way door?",
      description: "Most decisions are reversible.",
      steps: ["Write the decision", "Ask: can I undo this?", "If yes, decide now. If no, write one more thought first"]
    },
    it: {
      title: "Porta a senso unico o doppio?",
      description: "La maggior parte delle decisioni è reversibile.",
      steps: ["Scrivi la decisione", "Chiediti: posso tornare indietro?", "Se sì, decidi adesso. Se no, scrivi prima un altro pensiero"]
    }
  },
  {
    id: "decision-04", type: "decision", duration: 15,
    en: {
      title: "The five-year test",
      description: "Distance gives clarity.",
      steps: ["Write the decision", "Write how it looks in 5 years if you choose A", "Write how it looks in 5 years if you choose B", "Write your honest reaction to each. Decide."]
    },
    it: {
      title: "Il test dei cinque anni",
      description: "La distanza dà chiarezza.",
      steps: ["Scrivi la decisione", "Scrivi come appare tra 5 anni se scegli A", "Scrivi come appare tra 5 anni se scegli B", "Scrivi la tua reazione onesta a ognuna. Decidi."]
    }
  },
  {
    id: "decision-05", type: "decision", duration: 10,
    en: {
      title: "What information do you actually need?",
      description: "Most delays are about imaginary missing data.",
      steps: ["Write the decision", "List what you think you're missing", "Check: do you actually need it?", "Decide with what you have"]
    },
    it: {
      title: "Quali informazioni ti servono davvero?",
      description: "La maggior parte dei ritardi riguarda dati mancanti immaginari.",
      steps: ["Scrivi la decisione", "Elenca ciò che pensi ti manchi", "Controlla: ti serve davvero?", "Decidi con quello che hai"]
    }
  },
  {
    id: "decision-06", type: "decision", duration: 5,
    en: {
      title: "Coin flip test",
      description: "Your reaction to the outcome tells you what you want.",
      steps: ["Assign heads and tails to each option", "Flip a coin (or pick one)", "Notice how you feel about the result", "That feeling is your answer"]
    },
    it: {
      title: "Test della monetina",
      description: "La tua reazione al risultato ti dice cosa vuoi.",
      steps: ["Assegna testa e croce a ogni opzione", "Lancia una moneta (o scegline una)", "Osserva come ti senti rispetto al risultato", "Quella sensazione è la tua risposta"]
    }
  },
  {
    id: "decision-07", type: "decision", duration: 10,
    en: {
      title: "Write the recommendation",
      description: "Pretend you're advising someone else.",
      steps: ["Describe the situation in three sentences", "Write what you'd tell a friend to do", "Read it back. Follow your own advice."]
    },
    it: {
      title: "Scrivi la raccomandazione",
      description: "Fai finta di consigliare qualcun altro.",
      steps: ["Descrivi la situazione in tre frasi", "Scrivi cosa diresti a un amico di fare", "Rileggilo. Segui il tuo stesso consiglio."]
    }
  },

  // ── TRAINING ──────────────────────────────────────────────────
  {
    id: "training-01", type: "training", duration: 5,
    en: {
      title: "Just start moving",
      description: "You don't need a full workout.",
      steps: ["Put your shoes on", "Do 10 squats", "Do 10 push-ups"]
    },
    it: {
      title: "Inizia a muoverti",
      description: "Non hai bisogno di un allenamento completo.",
      steps: ["Metti le scarpe", "Fai 10 squat", "Fai 10 flessioni"]
    }
  },
  {
    id: "training-02", type: "training", duration: 10,
    en: {
      title: "Floor circuit",
      description: "No equipment. No excuse.",
      steps: ["20 jumping jacks", "15 push-ups", "20 squats", "30-second plank"]
    },
    it: {
      title: "Circuito a terra",
      description: "Nessun attrezzo. Nessuna scusa.",
      steps: ["20 jumping jack", "15 flessioni", "20 squat", "Plank per 30 secondi"]
    }
  },
  {
    id: "training-03", type: "training", duration: 15,
    en: {
      title: "Walk and think",
      description: "Movement clears the head.",
      steps: ["Put on shoes", "Walk outside or pace inside for 15 minutes", "Leave your phone behind if possible"]
    },
    it: {
      title: "Cammina e pensa",
      description: "Il movimento schiarisce le idee.",
      steps: ["Metti le scarpe", "Cammina fuori o su e giù per 15 minuti", "Lascia il telefono a casa se puoi"]
    }
  },
  {
    id: "training-04", type: "training", duration: 5,
    en: {
      title: "Stretch it out",
      description: "Tension in the body creates tension in the mind.",
      steps: ["Neck rolls, 10 seconds each side", "Shoulder stretch, 10 seconds", "Hip flexor stretch, 10 seconds each side", "Take three deep breaths"]
    },
    it: {
      title: "Allunga il corpo",
      description: "La tensione nel corpo crea tensione nella mente.",
      steps: ["Rotazioni del collo, 10 secondi per lato", "Allungamento delle spalle, 10 secondi", "Flessori dell'anca, 10 secondi per lato", "Fai tre respiri profondi"]
    }
  },
  {
    id: "training-05", type: "training", duration: 10,
    en: {
      title: "Stair repeats",
      description: "If there are stairs, use them.",
      steps: ["Find a flight of stairs", "Walk up and down 5 times", "Take the last two runs at a jog", "Stretch for 2 minutes after"]
    },
    it: {
      title: "Ripetute sulle scale",
      description: "Se ci sono le scale, usale.",
      steps: ["Trova una rampa di scale", "Sali e scendi 5 volte", "Le ultime due falle di corsa", "Allunga per 2 minuti dopo"]
    }
  },
  {
    id: "training-06", type: "training", duration: 15,
    en: {
      title: "Bodyweight ladder",
      description: "Start low, build up, come back down.",
      steps: ["2 push-ups, 2 squats, 2 lunges", "4 push-ups, 4 squats, 4 lunges", "6 push-ups, 6 squats, 6 lunges", "Back down: 4, then 2"]
    },
    it: {
      title: "Scaletta a corpo libero",
      description: "Inizia piano, sali, poi scendi.",
      steps: ["2 flessioni, 2 squat, 2 affondi", "4 flessioni, 4 squat, 4 affondi", "6 flessioni, 6 squat, 6 affondi", "Torna giù: 4, poi 2"]
    }
  },
  {
    id: "training-07", type: "training", duration: 5,
    en: {
      title: "Cold exposure",
      description: "A cold splash resets your state fast.",
      steps: ["Go to the sink", "Splash cold water on your face and wrists", "Take three slow breaths", "Notice the shift"]
    },
    it: {
      title: "Acqua fredda",
      description: "Uno schizzo di acqua fredda resetta il tuo stato rapidamente.",
      steps: ["Vai al lavandino", "Sciacquati il viso e i polsi con acqua fredda", "Fai tre respiri lenti", "Osserva il cambiamento"]
    }
  },

  // ── THINKING ──────────────────────────────────────────────────
  {
    id: "thinking-01", type: "thinking", duration: 10,
    en: {
      title: "Face it now",
      description: "Avoiding it makes it worse.",
      steps: ["Write what bothers you", "Write why", "Write the next step"]
    },
    it: {
      title: "Affrontalo adesso",
      description: "Evitarlo lo peggiora.",
      steps: ["Scrivi cosa ti disturba", "Scrivi perché", "Scrivi il prossimo passo"]
    }
  },
  {
    id: "thinking-02", type: "thinking", duration: 15,
    en: {
      title: "Brain dump",
      description: "Get it out of your head and onto paper.",
      steps: ["Set a 10-minute timer", "Write everything that's in your head without stopping", "Read it back", "Circle the one thing that matters most"]
    },
    it: {
      title: "Svuota la mente",
      description: "Tiralo fuori dalla testa e mettilo su carta.",
      steps: ["Imposta un timer di 10 minuti", "Scrivi tutto ciò che hai in testa senza fermarti", "Rileggi", "Cerchia la cosa più importante"]
    }
  },
  {
    id: "thinking-03", type: "thinking", duration: 10,
    en: {
      title: "The actual problem",
      description: "The surface issue is rarely the real one.",
      steps: ["Write the problem", "Ask 'why does this bother me?' Write the answer", "Ask why again. Write that answer too.", "The second or third answer is usually the real one"]
    },
    it: {
      title: "Il problema vero",
      description: "Il problema in superficie raramente è quello reale.",
      steps: ["Scrivi il problema", "Chiediti 'perché mi disturba?' Scrivi la risposta", "Chiediti di nuovo perché. Scrivi anche quella.", "La seconda o terza risposta è di solito quella vera"]
    }
  },
  {
    id: "thinking-04", type: "thinking", duration: 5,
    en: {
      title: "Say it out loud",
      description: "Thinking it and speaking it are different.",
      steps: ["Find a private space", "Say out loud what's been on your mind", "Listen to yourself", "Write one sentence about what you heard"]
    },
    it: {
      title: "Dillo ad alta voce",
      description: "Pensarlo e dirlo sono cose diverse.",
      steps: ["Trova uno spazio privato", "Di' ad alta voce ciò che hai in testa", "Ascoltati", "Scrivi una frase su ciò che hai sentito"]
    }
  },
  {
    id: "thinking-05", type: "thinking", duration: 15,
    en: {
      title: "Letter to yourself",
      description: "Clarity you write stays with you longer.",
      steps: ["Start with 'I've been avoiding thinking about...'", "Write for 10 minutes without stopping", "Read it once without judging it", "Underline the most honest sentence"]
    },
    it: {
      title: "Lettera a te stesso",
      description: "La chiarezza che scrivi rimane più a lungo.",
      steps: ["Inizia con 'Ho evitato di pensare a...'", "Scrivi per 10 minuti senza fermarti", "Leggila una volta senza giudicarla", "Sottolinea la frase più onesta"]
    }
  },
  {
    id: "thinking-06", type: "thinking", duration: 10,
    en: {
      title: "What would actually change?",
      description: "Some things matter less than they feel like they do.",
      steps: ["Write what's worrying you", "Write: if this goes badly, what actually changes?", "Write: what stays the same no matter what?", "Notice how big the problem actually is"]
    },
    it: {
      title: "Cosa cambierebbe davvero?",
      description: "Alcune cose pesano meno di quanto sembra.",
      steps: ["Scrivi cosa ti preoccupa", "Scrivi: se va male, cosa cambia davvero?", "Scrivi: cosa rimane uguale in ogni caso?", "Osserva quanto è grande il problema nella realtà"]
    }
  },
  {
    id: "thinking-07", type: "thinking", duration: 5,
    en: {
      title: "One honest sentence",
      description: "You don't need to resolve it. Just name it.",
      steps: ["Write the one thing you haven't wanted to admit", "Read it back", "You don't have to do anything else right now"]
    },
    it: {
      title: "Una frase onesta",
      description: "Non devi risolverlo. Solo nominarlo.",
      steps: ["Scrivi la cosa che non hai voluto ammettere", "Rileggila", "Non devi fare nient'altro adesso"]
    }
  },

  // ── STUCK ─────────────────────────────────────────────────────
  {
    id: "stuck-01", type: "stuck", duration: 5,
    en: {
      title: "Move anyway",
      description: "Clarity comes after action.",
      steps: ["Pick one useful thing", "Start immediately"]
    },
    it: {
      title: "Muoviti lo stesso",
      description: "La chiarezza arriva dopo l'azione.",
      steps: ["Scegli una cosa utile", "Inizia subito"]
    }
  },
  {
    id: "stuck-02", type: "stuck", duration: 10,
    en: {
      title: "Change location",
      description: "Your environment shapes your state.",
      steps: ["Stand up", "Go to a different room or step outside", "Stay there for 5 minutes", "Come back and start one task"]
    },
    it: {
      title: "Cambia posto",
      description: "L'ambiente influenza il tuo stato.",
      steps: ["Alzati", "Vai in un'altra stanza o esci fuori", "Resta lì per 5 minuti", "Torna e inizia un compito"]
    }
  },
  {
    id: "stuck-03", type: "stuck", duration: 5,
    en: {
      title: "The smallest thing",
      description: "When everything feels too big, make it tiny.",
      steps: ["Write the task you're stuck on", "Break it into 5 steps", "Do only the first one"]
    },
    it: {
      title: "La cosa più piccola",
      description: "Quando tutto sembra troppo grande, rendilo minuscolo.",
      steps: ["Scrivi il compito su cui sei bloccato", "Dividilo in 5 passi", "Fai solo il primo"]
    }
  },
  {
    id: "stuck-04", type: "stuck", duration: 15,
    en: {
      title: "Energy reset",
      description: "Stuck often means depleted.",
      steps: ["Drink a glass of water", "Step outside for 5 minutes", "Do 10 slow deep breaths", "Return and pick one task. Start."]
    },
    it: {
      title: "Reset energetico",
      description: "Sentirsi bloccati spesso significa essere esauriti.",
      steps: ["Bevi un bicchiere d'acqua", "Esci per 5 minuti", "Fai 10 respiri profondi e lenti", "Torna e scegli un compito. Inizia."]
    }
  },
  {
    id: "stuck-05", type: "stuck", duration: 10,
    en: {
      title: "Write the block",
      description: "Naming resistance weakens it.",
      steps: ["Write: 'I'm stuck because...'", "Keep writing until you've said everything", "Underline the one true reason", "Write what you'd do if that reason weren't there"]
    },
    it: {
      title: "Scrivi il blocco",
      description: "Nominare la resistenza la indebolisce.",
      steps: ["Scrivi: 'Sono bloccato perché...'", "Continua a scrivere finché non hai detto tutto", "Sottolinea il vero motivo", "Scrivi cosa faresti se quel motivo non ci fosse"]
    }
  },
  {
    id: "stuck-06", type: "stuck", duration: 5,
    en: {
      title: "Do the boring thing",
      description: "When nothing feels right, do the obvious thing.",
      steps: ["Look at your list", "Pick the least interesting task", "Do it. Momentum builds from here."]
    },
    it: {
      title: "Fai la cosa noiosa",
      description: "Quando niente sembra giusto, fai la cosa ovvia.",
      steps: ["Guarda la tua lista", "Scegli il compito meno interessante", "Fallo. Lo slancio nasce da qui."]
    }
  },
  {
    id: "stuck-07", type: "stuck", duration: 10,
    en: {
      title: "Talk it out",
      description: "Being stuck in your head ends when you involve another person.",
      steps: ["Text or call someone you trust", "Tell them what you're stuck on in one sentence", "Ask: what would you do?", "You don't have to take their advice — just hearing yourself say it helps"]
    },
    it: {
      title: "Parlane",
      description: "Essere bloccati nella testa finisce quando coinvolgi un'altra persona.",
      steps: ["Scrivi o chiama qualcuno di cui ti fidi", "Digli in una frase su cosa sei bloccato", "Chiedi: cosa faresti?", "Non devi seguire il consiglio — sentirsi dire la cosa ad alta voce aiuta già"]
    }
  },
  {
    id: "stuck-08", type: "stuck", duration: 15,
    en: {
      title: "Routine audit",
      description: "Stuck days often have the same shape.",
      steps: ["Write how today has gone so far", "Identify where you stalled", "Write what a different version of today looks like", "Do one thing on that version right now"]
    },
    it: {
      title: "Analisi della routine",
      description: "Le giornate bloccate hanno spesso la stessa forma.",
      steps: ["Scrivi com'è andata la giornata finora", "Identifica dove ti sei fermato", "Scrivi com'è una versione diversa di oggi", "Fai subito una cosa di quella versione"]
    }
  },

  // ── TRUTH MODE: reason-specific activities ────────────────────
  // reason values: too_difficult | dont_feel_like | afraid |
  //                dont_know_start | not_important | feel_stuck

  // — too_difficult ─────────────────────────────────────────────
  {
    id: "tm-diff-01", type: "work", reason: "too_difficult", duration: 5,
    en: {
      title: "You don't have to do it all",
      description: "You're avoiding the whole thing. Do one piece.",
      steps: ["Identify the single smallest part", "Ignore everything else", "Do only that part now"]
    },
    it: {
      title: "Non devi farlo tutto",
      description: "Stai evitando il tutto. Fai una sola parte.",
      steps: ["Identifica la parte più piccola", "Ignora tutto il resto", "Fai solo quella parte adesso"]
    }
  },
  {
    id: "tm-diff-02", type: "work", reason: "too_difficult", duration: 10,
    en: {
      title: "Hard things start easy",
      description: "The difficult part is rarely the first step.",
      steps: ["Write what specifically feels hard", "Find the step before that hard part", "Do that easier step now", "Stop there — you've started"]
    },
    it: {
      title: "Le cose difficili iniziano facilmente",
      description: "La parte difficile raramente è il primo passo.",
      steps: ["Scrivi cosa sembra specificamente difficile", "Trova il passo prima di quella parte difficile", "Fai quel passo più semplice adesso", "Fermati lì — hai iniziato"]
    }
  },
  {
    id: "tm-diff-03", type: "decision", reason: "too_difficult", duration: 10,
    en: {
      title: "Difficult decisions are still decisions",
      description: "You don't need certainty. You need a choice.",
      steps: ["Write the two options in plain language", "Write which one you'd regret more in a year", "Choose the one you'd regret less"]
    },
    it: {
      title: "Le decisioni difficili sono pur sempre decisioni",
      description: "Non hai bisogno di certezza. Hai bisogno di una scelta.",
      steps: ["Scrivi le due opzioni in modo semplice", "Scrivi quale rimpianta di più tra un anno", "Scegli quella che rimpianta meno"]
    }
  },
  {
    id: "tm-diff-04", type: "training", reason: "too_difficult", duration: 5,
    en: {
      title: "Easy version only",
      description: "You don't need to train hard. You need to train.",
      steps: ["Pick the easiest movement you can think of", "Do it for 5 minutes", "That counts"]
    },
    it: {
      title: "Solo la versione facile",
      description: "Non devi allenarti duramente. Devi allenarti.",
      steps: ["Scegli il movimento più semplice che ti viene in mente", "Fallo per 5 minuti", "Conta lo stesso"]
    }
  },

  // — dont_feel_like ─────────────────────────────────────────────
  {
    id: "tm-dfl-01", type: "work", reason: "dont_feel_like", duration: 5,
    en: {
      title: "You don't need to feel like it",
      description: "Motivation follows action. Not the other way around.",
      steps: ["Open the task", "Do the first thing without thinking", "See how you feel after 5 minutes"]
    },
    it: {
      title: "Non hai bisogno di averne voglia",
      description: "La motivazione segue l'azione. Non il contrario.",
      steps: ["Apri il compito", "Fai la prima cosa senza pensare", "Guarda come ti senti dopo 5 minuti"]
    }
  },
  {
    id: "tm-dfl-02", type: "work", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Not feeling it is normal",
      description: "Most work happens without enthusiasm. That's fine.",
      steps: ["Accept that you don't feel like it", "Do it anyway for 10 minutes", "Decide after whether to continue"]
    },
    it: {
      title: "Non averne voglia è normale",
      description: "La maggior parte del lavoro avviene senza entusiasmo. Va bene.",
      steps: ["Accetta di non averne voglia", "Fallo comunque per 10 minuti", "Poi decidi se continuare"]
    }
  },
  {
    id: "tm-dfl-03", type: "training", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Move without enjoying it",
      description: "You don't have to like it. You just have to do it.",
      steps: ["Put on your shoes", "Start moving — any movement", "Stay with it for 10 minutes", "Enjoyment is optional"]
    },
    it: {
      title: "Muoviti senza apprezzarlo",
      description: "Non devi piacerti. Devi solo farlo.",
      steps: ["Metti le scarpe", "Inizia a muoverti — qualsiasi movimento", "Resisti per 10 minuti", "Apprezzarlo è facoltativo"]
    }
  },
  {
    id: "tm-dfl-04", type: "thinking", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Five minutes, nothing more",
      description: "You don't want to think about it. Think for five minutes.",
      steps: ["Set a timer for 5 minutes", "Write whatever comes to mind about the thing", "Stop when the timer rings"]
    },
    it: {
      title: "Cinque minuti, niente di più",
      description: "Non vuoi pensarci. Pensa per cinque minuti.",
      steps: ["Imposta un timer da 5 minuti", "Scrivi quello che ti viene in mente sulla cosa", "Fermati quando suona"]
    }
  },

  // — afraid ─────────────────────────────────────────────────────
  {
    id: "tm-fear-01", type: "work", reason: "afraid", duration: 5,
    en: {
      title: "Fear doesn't go away by waiting",
      description: "Starting is the only thing that reduces it.",
      steps: ["Name what you're afraid of — write it", "Do the first step anyway", "Notice that you survived it"]
    },
    it: {
      title: "La paura non sparisce aspettando",
      description: "Iniziare è l'unica cosa che la riduce.",
      steps: ["Nomina di cosa hai paura — scrivilo", "Fai il primo passo lo stesso", "Nota che sei sopravvissuto"]
    }
  },
  {
    id: "tm-fear-02", type: "decision", reason: "afraid", duration: 10,
    en: {
      title: "Name what you're afraid of",
      description: "Vague fear is stronger than named fear.",
      steps: ["Write: I'm afraid that...", "Write the actual worst case", "Write how likely that really is", "Decide with that clarity"]
    },
    it: {
      title: "Nomina di cosa hai paura",
      description: "La paura vaga è più forte di quella nominata.",
      steps: ["Scrivi: Ho paura che...", "Scrivi il vero caso peggiore", "Scrivi quanto è realisticamente probabile", "Decidi con quella chiarezza"]
    }
  },
  {
    id: "tm-fear-03", type: "thinking", reason: "afraid", duration: 10,
    en: {
      title: "Look at it directly",
      description: "The thing you're afraid to think about controls you until you do.",
      steps: ["Write the thing you've been avoiding thinking about", "Write what the fear actually is", "Write what you'd do if the fear came true", "Read it back — it's more manageable than it seemed"]
    },
    it: {
      title: "Guardalo direttamente",
      description: "La cosa di cui hai paura di pensare ti controlla finché non lo fai.",
      steps: ["Scrivi la cosa che stai evitando di pensare", "Scrivi qual è la vera paura", "Scrivi cosa faresti se la paura si avverasse", "Rileggilo — è più gestibile di quanto sembrasse"]
    }
  },
  {
    id: "tm-fear-04", type: "training", reason: "afraid", duration: 5,
    en: {
      title: "The body knows before the mind",
      description: "Physical movement reduces anxiety faster than thinking.",
      steps: ["Don't plan anything", "Start moving immediately — walk, stretch, anything", "Keep going for 5 minutes"]
    },
    it: {
      title: "Il corpo sa prima della mente",
      description: "Il movimento fisico riduce l'ansia più velocemente del pensiero.",
      steps: ["Non pianificare niente", "Inizia a muoverti subito — cammina, allunga, qualcosa", "Vai avanti per 5 minuti"]
    }
  },

  // — dont_know_start ────────────────────────────────────────────
  {
    id: "tm-dns-01", type: "work", reason: "dont_know_start", duration: 5,
    en: {
      title: "Start anywhere",
      description: "The right starting point doesn't exist. Any point works.",
      steps: ["Pick any part of the task at random", "Do that part for 5 minutes", "The rest will become clearer"]
    },
    it: {
      title: "Inizia da qualsiasi punto",
      description: "Il punto di partenza giusto non esiste. Qualsiasi punto funziona.",
      steps: ["Scegli una parte qualsiasi del compito a caso", "Fai quella parte per 5 minuti", "Il resto diventerà più chiaro"]
    }
  },
  {
    id: "tm-dns-02", type: "work", reason: "dont_know_start", duration: 10,
    en: {
      title: "Map it first",
      description: "You don't know where to start because you haven't mapped the task.",
      steps: ["Write every part of the task you can think of", "Don't organise — just list", "Circle the one that can be done in 10 minutes", "Start there"]
    },
    it: {
      title: "Prima fai una mappa",
      description: "Non sai da dove iniziare perché non hai mappato il compito.",
      steps: ["Scrivi ogni parte del compito che ti viene in mente", "Non organizzare — elenca e basta", "Cerchia quella che puoi fare in 10 minuti", "Inizia da lì"]
    }
  },
  {
    id: "tm-dns-03", type: "decision", reason: "dont_know_start", duration: 5,
    en: {
      title: "You don't need the full picture",
      description: "You need the next step. Just one.",
      steps: ["Write the decision you're facing", "Write the one next action that would move it forward", "Do that action now"]
    },
    it: {
      title: "Non hai bisogno del quadro completo",
      description: "Hai bisogno del prossimo passo. Solo uno.",
      steps: ["Scrivi la decisione che stai affrontando", "Scrivi la prossima azione che la farebbe avanzare", "Fai quell'azione adesso"]
    }
  },
  {
    id: "tm-dns-04", type: "stuck", reason: "dont_know_start", duration: 10,
    en: {
      title: "Ask the obvious question",
      description: "You know more than you think. Start with what you know.",
      steps: ["Write: what do I already know about this?", "Write: what's the most obvious first step?", "Do that step — obvious is fine"]
    },
    it: {
      title: "Fai la domanda ovvia",
      description: "Sai più di quanto pensi. Inizia da ciò che sai.",
      steps: ["Scrivi: cosa so già di questo?", "Scrivi: qual è il primo passo più ovvio?", "Fai quel passo — ovvio va benissimo"]
    }
  },

  // — not_important ──────────────────────────────────────────────
  {
    id: "tm-ni-01", type: "work", reason: "not_important", duration: 5,
    en: {
      title: "If it's not important, finish it",
      description: "Unimportant things drain energy by staying undone.",
      steps: ["Do the task quickly — don't overthink it", "Keep quality proportional to importance", "Mark it done and move on"]
    },
    it: {
      title: "Se non è importante, finiscilo",
      description: "Le cose non importanti consumano energia restando incompiute.",
      steps: ["Fai il compito velocemente — non pensarci troppo", "Mantieni la qualità proporzionale all'importanza", "Segnalo fatto e vai avanti"]
    }
  },
  {
    id: "tm-ni-02", type: "decision", reason: "not_important", duration: 5,
    en: {
      title: "Low stakes — decide fast",
      description: "If it doesn't matter much, it doesn't deserve much time.",
      steps: ["Flip a coin or gut-check in 10 seconds", "Commit to that answer", "Move on immediately"]
    },
    it: {
      title: "Basse conseguenze — decidi in fretta",
      description: "Se non conta molto, non merita molto tempo.",
      steps: ["Lancia una moneta o ascolta l'istinto in 10 secondi", "Impegnati in quella risposta", "Vai avanti subito"]
    }
  },
  {
    id: "tm-ni-03", type: "thinking", reason: "not_important", duration: 5,
    en: {
      title: "Check if it actually matters",
      description: "Sometimes things feel important. They're not.",
      steps: ["Write: what actually happens if I don't do this?", "Write: does that matter in 3 months?", "Decide whether to act or let it go"]
    },
    it: {
      title: "Verifica se conta davvero",
      description: "A volte le cose sembrano importanti. Non lo sono.",
      steps: ["Scrivi: cosa succede davvero se non lo faccio?", "Scrivi: conta tra 3 mesi?", "Decidi se agire o lasciar perdere"]
    }
  },

  // — feel_stuck ─────────────────────────────────────────────────
  {
    id: "tm-stuck-01", type: "work", reason: "feel_stuck", duration: 5,
    en: {
      title: "Stuck means stopped, not blocked",
      description: "You can move. You've just stopped moving.",
      steps: ["Pick the most mechanical part of the task", "Do it without thinking — hands only", "Let the brain catch up"]
    },
    it: {
      title: "Bloccato significa fermo, non impossibilitato",
      description: "Puoi muoverti. Ti sei solo fermato.",
      steps: ["Scegli la parte più meccanica del compito", "Falla senza pensare — solo le mani", "Lascia che il cervello recuperi"]
    }
  },
  {
    id: "tm-stuck-02", type: "thinking", reason: "feel_stuck", duration: 10,
    en: {
      title: "Write your way out",
      description: "Being stuck in your head ends when you put it on paper.",
      steps: ["Write: I'm stuck because...", "Write everything — don't filter", "Read it back and underline one thing you can actually do", "Do that one thing"]
    },
    it: {
      title: "Scriviti fuori dal blocco",
      description: "Essere bloccati in testa finisce quando lo metti su carta.",
      steps: ["Scrivi: sono bloccato perché...", "Scrivi tutto — non filtrare", "Rileggilo e sottolinea una cosa che puoi fare concretamente", "Fai quella cosa"]
    }
  },
  {
    id: "tm-stuck-03", type: "stuck", reason: "feel_stuck", duration: 5,
    en: {
      title: "Do something useless first",
      description: "Stuck often breaks when you stop trying to break it.",
      steps: ["Do something completely unrelated for 3 minutes", "Walk, stretch, drink water", "Come back and pick one task. Start immediately."]
    },
    it: {
      title: "Fai prima qualcosa di inutile",
      description: "Il blocco spesso si rompe quando smetti di provare a romperlo.",
      steps: ["Fai qualcosa di completamente diverso per 3 minuti", "Cammina, allunga, bevi acqua", "Torna e scegli un compito. Inizia subito."]
    }
  },
  {
    id: "tm-stuck-04", type: "decision", reason: "feel_stuck", duration: 10,
    en: {
      title: "Stuck on a decision means one option is winning",
      description: "You're stuck because you already know the answer.",
      steps: ["Write both options", "Write which one you keep coming back to", "Write why you're resisting it", "Choose it anyway if the reason is fear"]
    },
    it: {
      title: "Bloccato su una decisione significa che un'opzione sta vincendo",
      description: "Sei bloccato perché sai già la risposta.",
      steps: ["Scrivi entrambe le opzioni", "Scrivi a quale continui a tornare", "Scrivi perché ti stai resistendo", "Sceglila comunque se il motivo è paura"]
    }
  },

  // ── MORE TIME: generic activities (moreTimeMode field) ────────
  // These fire when the user says they have more time but still
  // need to be reduced to a small, focused block — not a plan.
  // moreTimeMode: "start"    → duration 10, for beginning something
  // moreTimeMode: "continue" → duration 15, for carrying on

  {
    id: "mt-start-01", type: "work", moreTimeMode: "start", duration: 10,
    truthLine: {
      en: "You have time. That is not the problem.",
      it: "Hai tempo. Non è quello il problema."
    },
    en: {
      title: "Start with ten",
      description: "Use the first 10 minutes to break the resistance.",
      steps: [
        "Pick the smallest useful action",
        "Work for 10 minutes",
        "Stop or continue after the timer"
      ]
    },
    it: {
      title: "Inizia con dieci",
      description: "Usa i primi 10 minuti per rompere la resistenza.",
      steps: [
        "Scegli la più piccola azione utile",
        "Lavora per 10 minuti",
        "Fermati o continua dopo il timer"
      ]
    }
  },
  {
    id: "mt-start-02", type: "decision", moreTimeMode: "start", duration: 10,
    truthLine: {
      en: "More time does not mean more clarity. It means one fewer reason to wait.",
      it: "Più tempo non significa più chiarezza. Significa un motivo in meno per aspettare."
    },
    en: {
      title: "Use the time to decide",
      description: "Having time is no excuse to delay the decision.",
      steps: [
        "Write the two options clearly",
        "Write one real consequence of each",
        "Choose now — the time you saved is not for more thinking"
      ]
    },
    it: {
      title: "Usa il tempo per decidere",
      description: "Avere tempo non è una scusa per rimandare la decisione.",
      steps: [
        "Scrivi chiaramente le due opzioni",
        "Scrivi una conseguenza reale per ognuna",
        "Scegli adesso — il tempo risparmiato non è per pensare di più"
      ]
    }
  },
  {
    id: "mt-start-03", type: "stuck", moreTimeMode: "start", duration: 10,
    truthLine: {
      en: "You have time. Use it to move, not to plan moving.",
      it: "Hai tempo. Usalo per muoverti, non per pianificare il movimento."
    },
    en: {
      title: "Ten minutes into the block",
      description: "When you feel stuck and have time, the risk is planning instead of doing.",
      steps: [
        "Write the next physical action in one sentence",
        "Start that action — not a plan, the action itself",
        "Work for 10 minutes before reviewing anything"
      ]
    },
    it: {
      title: "Dieci minuti nel blocco",
      description: "Quando ti senti bloccato e hai tempo, il rischio è pianificare invece di fare.",
      steps: [
        "Scrivi la prossima azione fisica in una frase",
        "Inizia quell'azione — non un piano, l'azione stessa",
        "Lavora per 10 minuti prima di rivedere qualcosa"
      ]
    }
  },
  {
    id: "mt-continue-01", type: "work", moreTimeMode: "continue", duration: 15,
    truthLine: {
      en: "You do not need a new plan. You need the next block.",
      it: "Non ti serve un nuovo piano. Ti serve il prossimo blocco."
    },
    en: {
      title: "Keep the chain moving",
      description: "Continue with one focused 15-minute block.",
      steps: [
        "Open what you already started",
        "Pick the next visible action",
        "Work for 15 minutes without switching"
      ]
    },
    it: {
      title: "Tieni il movimento",
      description: "Continua con un blocco concentrato da 15 minuti.",
      steps: [
        "Apri ciò che hai già iniziato",
        "Scegli la prossima azione visibile",
        "Lavora per 15 minuti senza cambiare attività"
      ]
    }
  },
  {
    id: "mt-continue-02", type: "decision", moreTimeMode: "continue", duration: 15,
    truthLine: {
      en: "A decision you carry forward is a decision that controls you.",
      it: "Una decisione che porti avanti è una decisione che ti controlla."
    },
    en: {
      title: "Finish the decision",
      description: "You have been thinking about this. 15 minutes is enough to close it.",
      steps: [
        "Write everything you already know about this decision",
        "Identify what is still genuinely unclear",
        "Make the call on what you have — decide"
      ]
    },
    it: {
      title: "Chiudi la decisione",
      description: "Ci stai pensando da un po'. 15 minuti bastano per chiuderla.",
      steps: [
        "Scrivi tutto quello che già sai su questa decisione",
        "Identifica cosa è ancora genuinamente poco chiaro",
        "Prendi la decisione con quello che hai — decidi"
      ]
    }
  },
  {
    id: "mt-continue-03", type: "thinking", moreTimeMode: "continue", duration: 15,
    truthLine: {
      en: "Fifteen minutes of thinking with a pen is worth two hours of thinking in your head.",
      it: "Quindici minuti di pensiero con una penna valgono due ore di pensiero in testa."
    },
    en: {
      title: "Think on paper",
      description: "You have been sitting with this. Write it out fully.",
      steps: [
        "Write everything this thought or problem contains",
        "Write what you have already decided without admitting it",
        "Write the one next step that would move it forward"
      ]
    },
    it: {
      title: "Pensa su carta",
      description: "Ci stai rimuginando. Scrivilo per intero.",
      steps: [
        "Scrivi tutto quello che questo pensiero o problema contiene",
        "Scrivi quello che hai già deciso senza ammetterlo",
        "Scrivi il prossimo passo che lo farebbe avanzare"
      ]
    }
  }
];

// ── Helper: get localised activity content ─────────────────────
function activityContent(activity) {
  return activity[currentLang] || activity.en;
}

// ── App State ──────────────────────────────────────────────────
const state = {
  screen: "intro",
  selectedType: null,
  selectedReason: null,           // Truth Mode: why they are avoiding it
  selectedDuration: null,
  selectedMoreTimeMode: null,     // "start" | "continue" | null
  currentActivity: null,
  lastActivityId: null,
  timer: null,
  timerRemaining: 0,
  timerRunning: false
};

// ── LocalStorage: stats ────────────────────────────────────────
function getStats() {
  const today = new Date().toISOString().split("T")[0];
  const raw   = localStorage.getItem("startnow_stats");
  const def   = { minutesToday: 0, totalMinutes: 0, streakDays: 0, lastDate: null };
  if (!raw) return { ...def, today };
  const d = JSON.parse(raw);
  if (d.lastDate !== today) {
    d.minutesToday = 0;
    const yd = new Date();
    yd.setDate(yd.getDate() - 1);
    d.streakDays = d.lastDate === yd.toISOString().split("T")[0]
      ? (d.streakDays || 0) + 1 : 1;
  }
  return { ...d, today };
}

function saveStats(stats) {
  const today = new Date().toISOString().split("T")[0];
  localStorage.setItem("startnow_stats", JSON.stringify({ ...stats, lastDate: today }));
}

function addMinutes(minutes) {
  const stats = getStats();
  stats.minutesToday = (stats.minutesToday || 0) + minutes;
  stats.totalMinutes = (stats.totalMinutes || 0) + minutes;
  if (!stats.streakDays) stats.streakDays = 1;
  saveStats(stats);
  return stats;
}

function refreshIntroStats() {
  const today = new Date().toISOString().split("T")[0];
  const raw   = localStorage.getItem("startnow_stats");
  let todayMin = 0, total = 0, streak = 0;
  if (raw) {
    const d = JSON.parse(raw);
    todayMin = d.lastDate === today ? (d.minutesToday || 0) : 0;
    total    = d.totalMinutes  || 0;
    streak   = d.streakDays    || 0;
  }
  const safe = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  safe("intro-today",  todayMin);
  safe("intro-total",  total);
  safe("intro-streak", streak);
}

// ── Activity selector (reason-aware + moreTimeMode-aware) ─────
// Priority chain:
//   1. type + duration + moreTimeMode  (More Time specific)
//   2. type + duration + reason        (Truth Mode specific)
//   3. type + duration                 (general fallback)
function pickActivity(type, duration, reason, moreTimeMode) {
  function pickFrom(pool) {
    if (!pool.length) return null;
    const filtered   = pool.filter(a => a.id !== state.lastActivityId);
    const candidates = filtered.length ? filtered : pool;
    const picked     = candidates[Math.floor(Math.random() * candidates.length)];
    state.lastActivityId = picked.id;
    return picked;
  }

  // 1. More Time pool: matches type + duration + moreTimeMode
  if (moreTimeMode) {
    const mtPool = ACTIVITIES.filter(
      a => a.moreTimeMode === moreTimeMode &&
           a.duration     === duration     &&
           (!a.type || a.type === type)
    );
    const picked = pickFrom(mtPool);
    if (picked) return picked;

    // Fallback within moreTimeMode: any activity with this moreTimeMode + duration
    const mtGeneric = ACTIVITIES.filter(
      a => a.moreTimeMode === moreTimeMode && a.duration === duration
    );
    const pickedGeneric = pickFrom(mtGeneric);
    if (pickedGeneric) return pickedGeneric;
  }

  // 2. Truth Mode pool: type + duration + reason (no moreTimeMode)
  if (reason) {
    const reasonPool = ACTIVITIES.filter(
      a => a.type === type && a.duration === duration &&
           a.reason === reason && !a.moreTimeMode
    );
    const picked = pickFrom(reasonPool);
    if (picked) return picked;
  }

  // 3. General pool: type + duration, no reason or moreTimeMode
  const pool = ACTIVITIES.filter(
    a => a.type === type && a.duration === duration &&
         !a.reason && !a.moreTimeMode
  );
  return pickFrom(pool);
}

/**
 * pickDifferentActivity(type, duration, reason, moreTimeMode, excludeId)
 * Used by "Another one" — always excludes the currently visible activity,
 * cascading through progressively wider fallback pools.
 * Returns null only when no different activity exists at all.
 */
function pickDifferentActivity(type, duration, reason, moreTimeMode, excludeId) {
  function rand(pool) {
    const candidates = pool.filter(a => a.id !== excludeId);
    if (!candidates.length) return null;
    const picked = candidates[Math.floor(Math.random() * candidates.length)];
    state.lastActivityId = picked.id;
    return picked;
  }

  // 1. Exact match: same type + duration + reason + moreTimeMode
  if (moreTimeMode) {
    const r = rand(ACTIVITIES.filter(
      a => a.moreTimeMode === moreTimeMode && a.duration === duration &&
           (!a.type || a.type === type)
    ));
    if (r) return r;

    const r2 = rand(ACTIVITIES.filter(
      a => a.moreTimeMode === moreTimeMode && a.duration === duration
    ));
    if (r2) return r2;
  }

  // 2. type + duration + reason
  if (reason) {
    const r = rand(ACTIVITIES.filter(
      a => a.type === type && a.duration === duration &&
           a.reason === reason && !a.moreTimeMode
    ));
    if (r) return r;
  }

  // 3. type + duration (no reason filter)
  const r3 = rand(ACTIVITIES.filter(
    a => a.type === type && a.duration === duration && !a.moreTimeMode
  ));
  if (r3) return r3;

  // 4. reason + duration (any type)
  if (reason) {
    const r = rand(ACTIVITIES.filter(
      a => a.reason === reason && a.duration === duration
    ));
    if (r) return r;
  }

  // 5. same type (any duration)
  const r5 = rand(ACTIVITIES.filter(a => a.type === type && !a.moreTimeMode));
  if (r5) return r5;

  // 6. same duration (any type)
  const r6 = rand(ACTIVITIES.filter(a => a.duration === duration && !a.moreTimeMode));
  if (r6) return r6;

  return null; // truly nothing different available
}

// ── Language system ────────────────────────────────────────────

/**
 * setLanguage(lang)
 * Persists choice, updates currentLang, applies all UI text,
 * re-renders result screen if active.
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("startnow_lang", lang);

  // Highlight active lang button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("lang-active", btn.dataset.lang === lang);
  });

  updateUIText();

  // If result screen is showing, re-render in new language
  if (state.screen === "result" && state.currentActivity) {
    renderResult(state.currentActivity);
  }
}

/**
 * updateUIText()
 * Walks every data-i18n / data-i18n-html element and sets its text.
 */
function updateUIText() {
  const t = TRANSLATIONS[currentLang];

  // innerHTML (supports <br> and <em>)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Plain text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Refresh numeric stats labels
  refreshIntroStats();
}

// ── Timer ──────────────────────────────────────────────────────
function startTimer(seconds) {
  clearInterval(state.timer);
  state.timerRemaining = seconds;
  state.timerRunning   = true;
  renderTimerDisplay();

  state.timer = setInterval(() => {
    state.timerRemaining--;
    renderTimerDisplay();
    if (state.timerRemaining <= 0) {
      clearInterval(state.timer);
      state.timerRunning = false;
      onTimerDone();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timer);
  state.timerRunning = false;
}

function renderTimerDisplay() {
  const el = document.getElementById("timer-display");
  if (!el) return;
  const m = Math.floor(state.timerRemaining / 60).toString().padStart(2, "0");
  const s = (state.timerRemaining % 60).toString().padStart(2, "0");
  el.textContent = `${m}:${s}`;

  const block = document.getElementById("timer-block");
  if (block) block.style.display = "flex";

  const total = state.currentActivity ? state.currentActivity.duration * 60 : 1;
  const pct   = state.timerRemaining / total;
  const ring  = document.getElementById("timer-ring");
  if (ring) {
    const circ = 2 * Math.PI * 36;
    ring.style.strokeDasharray  = circ;
    ring.style.strokeDashoffset = circ * pct;
  }
}

function onTimerDone() {
  const doneBtn = document.getElementById("btn-done");
  if (doneBtn) {
    doneBtn.classList.add("pulse");
    doneBtn.textContent = TRANSLATIONS[currentLang].btnDoneTimer;
  }
}

// ── History stack ──────────────────────────────────────────────
// Tracks the ordered list of visited screen names so goBack()
// always knows exactly where to return, regardless of how the
// user arrived at the current screen.
const history = [];

// ── Screen Transitions ─────────────────────────────────────────
/**
 * goTo(screenName, opts)
 *   opts.pushHistory {boolean} — default true.
 *     Pass false when navigating backwards (goBack uses this)
 *     so we don't pollute the stack with reverse entries.
 *   opts.resetFlow {boolean} — default false.
 *     Pass true when navigating to intro so selection state is cleared.
 */
function goTo(screenName, opts = {}) {
  const { pushHistory = true, resetFlow = false } = opts;

  const current = document.querySelector(".screen.active");
  const next    = document.getElementById("screen-" + screenName);
  if (!next) return;

  // Push the screen we're leaving onto the history stack
  if (pushHistory && state.screen && state.screen !== screenName) {
    history.push(state.screen);
  }

  if (current) {
    current.classList.add("exit");
    setTimeout(() => current.classList.remove("active", "exit"), 320);
  }
  setTimeout(() => next.classList.add("active"), current ? 200 : 0);
  state.screen = screenName;

  // Render dynamic motivational message when entering time selection
  if (screenName === "time") renderMotivationalMessage();

  // Clear selection state when returning to home
  if (resetFlow) {
    state.selectedType         = null;
    state.selectedReason       = null;
    state.selectedDuration     = null;
    state.selectedMoreTimeMode = null;
    state.currentActivity      = null;
    document.querySelectorAll("[data-type], [data-reason], [data-duration], [data-moretime]")
      .forEach(b => b.classList.remove("selected"));
    refreshIntroStats();
  }
}

/**
 * goBack()
 * Pops the history stack and navigates to the previous screen.
 * Always stops the timer. Falls back to "intro" if stack is empty.
 */
function goBack() {
  stopTimer();

  const prev = history.pop() || "intro";

  // If we're going back to result we need to re-render the activity
  // (it may have been left in a post-Done state with reset timer UI)
  if (prev === "result" && state.currentActivity) {
    renderResult(state.currentActivity);
  }

  // If we're going back to intro, clean up selection state
  const resetFlow = (prev === "intro");

  goTo(prev, { pushHistory: false, resetFlow });
}

// ── Render Result Screen ───────────────────────────────────────
function renderResult(activity) {
  // Clear any "no other task" message from a previous "Another one" attempt
  const noTaskMsg = document.getElementById("no-other-task-msg");
  if (noTaskMsg) noTaskMsg.style.display = "none";

  const t       = TRANSLATIONS[currentLang];
  const content = activityContent(activity);

  // Resolve truth line: activity carries its own (More Time) or
  // it comes from the TRUTH_LINES map (Truth Mode / reason).
  let resolvedTruthLine = null;
  if (activity.truthLine) {
    resolvedTruthLine = activity.truthLine[currentLang] || activity.truthLine.en;
  } else if (activity.reason && TRUTH_LINES[activity.reason]) {
    resolvedTruthLine = TRUTH_LINES[activity.reason][currentLang];
  }

  // Show badge when activity has reason OR moreTimeMode
  const showBadge = !!(activity.reason || activity.moreTimeMode);

  // ── Title & description
  document.getElementById("result-title").textContent = content.title;
  document.getElementById("result-desc").textContent  = content.description;

  // ── Truth Mode / More Time badge (result card)
  const badge = document.getElementById("result-truth-badge");
  if (badge) {
    badge.textContent   = t.resultTruthMode;
    badge.style.display = showBadge ? "inline-flex" : "none";
  }

  // ── Truth line
  const truthLineEl = document.getElementById("result-truth-line");
  if (truthLineEl) {
    if (resolvedTruthLine) {
      truthLineEl.textContent  = resolvedTruthLine;
      truthLineEl.style.display = "block";
    } else {
      truthLineEl.style.display = "none";
    }
  }

  // ── Card accent styling
  const card = document.getElementById("result-card");
  if (card) {
    card.classList.toggle("result-card--truth", showBadge);
  }

  // ── Steps
  const stepsEl = document.getElementById("result-steps");
  stepsEl.innerHTML = "";
  content.steps.forEach((step, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="step-num">${i + 1}</span><span>${step}</span>`;
    stepsEl.appendChild(li);
  });

  // ── Reset timer UI
  const block = document.getElementById("timer-block");
  if (block) block.style.display = "none";
  stopTimer();

  const doneBtn  = document.getElementById("btn-done");
  const timerBtn = document.getElementById("btn-timer");
  if (doneBtn)  { doneBtn.classList.remove("pulse"); doneBtn.textContent  = t.btnDone; }
  if (timerBtn) timerBtn.textContent = t.btnTimer;
}

// ── Render Done Screen ─────────────────────────────────────────
function renderDone(stats) {
  document.getElementById("done-today").textContent  = stats.minutesToday;
  document.getElementById("done-total").textContent  = stats.totalMinutes;
  document.getElementById("done-streak").textContent = stats.streakDays;
}

// ── Event Wiring ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // Language toggle
  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
  );

  // ── Single back-button handler (delegated to all .btn-back-nav
  //    and #btn-back on the result screen) ──────────────────────
  document.querySelectorAll(".btn-back-nav, #btn-back").forEach(btn =>
    btn.addEventListener("click", goBack)
  );

  // Intro → Type
  document.getElementById("btn-start").addEventListener("click", () => goTo("type"));

  // Type buttons → go to reason screen
  document.querySelectorAll("[data-type]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedType = btn.dataset.type;
      document.querySelectorAll("[data-type]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      setTimeout(() => goTo("reason"), 200);
    });
  });

  // Reason buttons → go to time screen
  document.querySelectorAll("[data-reason]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedReason = btn.dataset.reason;
      document.querySelectorAll("[data-reason]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      setTimeout(() => goTo("time"), 200);
    });
  });

  // Time buttons (5 / 10 / 15 min)
  document.querySelectorAll("[data-duration]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedDuration     = parseInt(btn.dataset.duration, 10);
      state.selectedMoreTimeMode = null;   // clear any previous More Time choice
      document.querySelectorAll("[data-duration]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const activity = pickActivity(
        state.selectedType, state.selectedDuration,
        state.selectedReason, null
      );
      state.currentActivity = activity
        || ACTIVITIES.find(a => a.duration === state.selectedDuration && !a.reason && !a.moreTimeMode)
        || ACTIVITIES[0];

      renderResult(state.currentActivity);
      setTimeout(() => goTo("result"), 200);
    });
  });

  // "More time" button → go to the moretime-mode screen
  document.getElementById("btn-more-time").addEventListener("click", () => {
    state.selectedDuration     = null;    // not a fixed duration
    state.selectedMoreTimeMode = null;
    document.querySelectorAll("[data-duration]").forEach(b => b.classList.remove("selected"));
    document.getElementById("btn-more-time").classList.add("selected");
    goTo("moretime");
  });

  // More Time mode buttons (Start / Continue)
  document.querySelectorAll("[data-moretime]").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.moretime;                     // "start" | "continue"
      state.selectedMoreTimeMode = mode;
      state.selectedDuration     = mode === "start" ? 10 : 15;

      document.querySelectorAll("[data-moretime]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      // Pick: type + duration + moreTimeMode, then generic moreTimeMode, then general
      const activity = pickActivity(
        state.selectedType, state.selectedDuration,
        state.selectedReason, mode
      );
      state.currentActivity = activity
        || ACTIVITIES.find(a => a.moreTimeMode === mode && a.duration === state.selectedDuration)
        || ACTIVITIES.find(a => a.duration === state.selectedDuration && !a.reason && !a.moreTimeMode)
        || ACTIVITIES[0];

      renderResult(state.currentActivity);
      setTimeout(() => goTo("result"), 200);
    });
  });

  // Result: Done
  document.getElementById("btn-done").addEventListener("click", () => {
    stopTimer();
    const stats = addMinutes(state.currentActivity.duration);
    renderDone(stats);
    goTo("done");
  });

  // Result: Another one
  document.getElementById("btn-another").addEventListener("click", () => {
    stopTimer();
    const currentId = state.currentActivity ? state.currentActivity.id : null;
    const activity  = pickDifferentActivity(
      state.selectedType, state.selectedDuration,
      state.selectedReason, state.selectedMoreTimeMode,
      currentId
    );

    if (!activity) {
      // Nothing different exists — show a subtle inline message
      const noTaskMsg = {
        en: "No other task available for this selection.",
        it: "Nessun altro compito disponibile per questa scelta."
      };
      const existing = document.getElementById("no-other-task-msg");
      if (existing) { existing.style.display = "block"; return; }

      const msg = document.createElement("p");
      msg.id          = "no-other-task-msg";
      msg.textContent = noTaskMsg[currentLang] || noTaskMsg.en;
      msg.style.cssText = [
        "font-size:13px",
        "color:rgba(255,255,255,0.45)",
        "text-align:center",
        "margin-top:12px",
        "line-height:1.5"
      ].join(";");

      const btnAnother = document.getElementById("btn-another");
      btnAnother.insertAdjacentElement("afterend", msg);
      return;
    }

    // Hide any previous "no other task" message
    const noTaskMsg = document.getElementById("no-other-task-msg");
    if (noTaskMsg) noTaskMsg.style.display = "none";

    state.currentActivity = activity;
    renderResult(activity);
  });

  // Result: Timer toggle
  document.getElementById("btn-timer").addEventListener("click", () => {
    const t = TRANSLATIONS[currentLang];
    if (state.timerRunning) {
      stopTimer();
      document.getElementById("btn-timer").textContent = t.btnTimer;
      const block = document.getElementById("timer-block");
      if (block) block.style.display = "none";
    } else {
      startTimer(state.currentActivity.duration * 60);
      document.getElementById("btn-timer").textContent = t.btnTimerStop;
    }
  });

  // Result: Home button (hard reset to intro, clears flow)
  document.getElementById("btn-result-home").addEventListener("click", () => {
    stopTimer();
    history.length = 0; // clear stack — this is a deliberate jump to root
    goTo("intro", { pushHistory: false, resetFlow: true });
  });

  // Reset statistics button
  document.getElementById("btn-reset-stats").addEventListener("click", () => {
    const t = TRANSLATIONS[currentLang];
    if (window.confirm(t.confirmResetStats)) {
      localStorage.removeItem("startnow_stats");
      refreshIntroStats();
    }
  });

  // Done: Start another (jump to type, clear history so Back from type goes home)
  document.getElementById("btn-again").addEventListener("click", () => {
    history.length = 0;
    goTo("type");
  });

  // Done: Home
  document.getElementById("btn-home").addEventListener("click", () => {
    history.length = 0; // clear stack — deliberate jump to root
    goTo("intro", { pushHistory: false, resetFlow: true });
  });

  // Boot: apply saved language, then show intro (no history entry)
  setLanguage(currentLang);
  goTo("intro", { pushHistory: false });
});
