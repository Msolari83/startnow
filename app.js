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
    introBody:       "Whether you're avoiding something or don't know where to start, this app helps you begin — right now, with the time you have.",
    statLabelToday:  "min today",
    statLabelTotal:  "total min",
    statLabelStreak: "day streak",
    btnStart:        "Start now",

    // Type screen
    step1Label:      "Step 1 of 3",
    questionType:    "Where do you want<br>to start?",
    questionTypeHelper: "Choose what is blocking you or what you need right now",
    typeWork:        "Work task",
    typeSearchJob:   "Job searching",
    typeLearn:       "Studying or learning",
    typeDecision:    "A decision",
    typeTraining:    "Physical training",
    typeStuck:       "I'm stuck in a situation",

    // Intent screen (new Step 1)
    step1of4Label:         "Step 1 of 4",
    step2of4Label:         "Step 2 of 4",
    step3of4Label:         "Step 3 of 4",
    step4of4Label:         "Step 4 of 4",
    questionIntent:        "Where do you want<br>to start?",
    questionIntentHelper:  "Choose the kind of support you need right now",
    intentAvoidance:       "I have something to do",
    intentAvoidanceSub:    "I know what I need to do, but I'm avoiding it",
    intentSupport:         "I don't know where to start",
    intentSupportSub:      "I feel blocked, confused, or low on energy",

    // Avoidance flow — type screen
    questionTypeAvoidance:       "What are you<br>putting off?",
    questionTypeAvoidanceHelper: "Choose the area to start from",

    // Support flow — type screen
    questionTypeSupport:         "What do you<br>need right now?",
    questionTypeSupportHelper:   "Choose the simplest way to begin",

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
    btnDoneConfirmed:"✔ Keep it up",
    doneFlashMessages: [
      "You started. That's what counts.",
      "Action beats thinking.",
      "One more done.",
      "You showed up.",
      "That's momentum."
    ],
    btnTimer:        "Start timer",
    btnTimerStop:    "Stop timer",
    btnAnother:      "Not convinced? Try another",
    anotherVariants: [
      "Not convinced? Try another",
      "Still not right? One more.",
      "Keep looking — here's another."
    ],
    whyToggle:       "Why this works",
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
    reasonTruthMode:     "",
    resultTruthMode:     "",
    reasonTooDifficult:  "Too difficult",
    reasonDontFeelLike:  "I don't feel like it",
    reasonAfraid:        "I'm afraid",
    reasonDontKnowStart: "I don't know where to start",
    reasonNotImportant:  "It doesn't feel urgent",
    reasonFeelStuck:     "I feel stuck",
    reasonDontKnow:      "I don't know",

    // Dynamic reason screen — quick_win
    questionReasonQuickWin:   "What do you want<br>to start with?",
    reasonSmallEasy:          "Something very easy",
    reasonPostponed:          "Something I've been putting off",
    reasonLowEffort:          "Something that won't cost me much",
    reasonFinishNow:          "Something to finish right now",

    // Dynamic reason screen — mental_cleanup
    questionReasonMentalCleanup: "What are you feeling<br>right now?",
    reasonTooMuchInHead:      "Too many things in my head",
    reasonConfused:           "I feel confused",
    reasonStressed:           "I feel stressed",
    reasonCantFocus:          "I can't focus",

    // Done screen
    doneMessage:     "You acted.<br>This changes everything.",
    doneSub:         "You don't need to do it well. Just do it.",
    statLabelToday2: "min today",
    statLabelTotal2: "total min",
    statLabelStreak2:"day streak",
    btnAgain:        "Start another activity",
    btnHome:         "Back to home",
    streakSub1:      "Don't stop now.",
    streakSub2:      "You're building consistency.",

    // More Time flow
    btnMoreTime:          "More time",
    questionMoreTime:     "How do you want<br>to use it?",
    moreTimeStart:        "Start",
    moreTimeStartSub:     "10 min block",
    moreTimeContinue:     "Continue",
    moreTimeContinueSub:  "15 min block",

    // New categories
    typeMentalCleanup:    "Clear your mind",
    typeQuickWin:         "Start with something small",
    typeGetClarity:       "Get clarity",
    typeRegainEnergy:     "Regain energy",
    typeResetRestart:     "Reset and restart",

    // Reset stats
    btnResetStats:        "Reset stats",
    btnResetStatsHelper:  "Also clears saved data",
    confirmResetStats:    "Are you sure you want to reset your statistics?",
    btnReduceTo2:         "− Reduce to 2 min",
    reduceFirstStep:      "Do only the first step.",

    // Support flow — per-category question keys
    questionSupportMentalCleanup: "What are you feeling<br>right now?",
    questionSupportGetClarity:    "What's unclear<br>right now?",
    questionSupportRegainEnergy:  "How is your energy<br>right now?",
    questionSupportQuickWin:      "What do you want<br>to start with?",
    questionSupportResetRestart:  "Do you want<br>a fresh restart?",

    // Support answers — mental_cleanup
    supportTooMuchOnMind:     "Too much on my mind",
    supportFeelConfused:      "I feel confused",
    supportFeelStressed:      "I feel stressed",
    supportCantFocus:         "I can't focus",
    supportDontKnow:          "I don't know",

    // Support answers — get_clarity
    supportTooManyOptions:    "Too many options",
    supportDontKnowChoose:    "I don't know what to choose",
    supportTooManyOpenThings: "Too many open things",
    supportDontKnowImportant: "I don't know what matters most",

    // Support answers — regain_energy
    supportFeelTired:         "I feel tired",
    supportNoMotivation:      "I have no motivation",
    supportEverythingHeavy:   "Everything feels heavy",
    supportDontWantToStart:   "I don't want to start anything",

    // Support answers — reset_restart
    supportWantToReset:       "I want to clear everything",
    supportNeedSimplicity:    "I need simplicity",
    supportWantLightRestart:  "I want to restart lightly",
    supportJustDoSomething:   "I just want to do something",

    // Follow-up hint on intro
    followUpHint:         "You started with {category}. Want to continue?",
    followUpBtn:          "Continue",

    // Category display names (for follow-up hint)
    categoryName: {
      work:           "a work task",
      decision:       "a decision",
      training:       "physical training",
      thinking:       "studying",
      stuck:          "getting unstuck",
      mental_cleanup: "clearing your mind",
      quick_win:      "starting small",
      get_clarity:    "getting clarity",
      regain_energy:  "regaining energy",
      reset_restart:  "a fresh restart",
    },
    intentName: {
      avoidance: "avoidance",
      support:   "support",
    },
  },

  it: {
    // Intro screen
    introTagline:    "Agisci adesso",
    introHeadline:   "Smettila di pensare.<br><em>Inizia a fare.</em>",
    introBody:       "Che tu stia evitando qualcosa o non sappia da dove partire, questa app ti aiuta a iniziare — adesso, con il tempo che hai.",
    statLabelToday:  "min oggi",
    statLabelTotal:  "min totali",
    statLabelStreak: "giorni di fila",
    btnStart:        "Inizia ora",

    // Type screen
    step1Label:      "Passo 1 di 3",
    questionType:    "Da dove vuoi<br>iniziare?",
    questionTypeHelper: "Scegli cosa ti blocca o cosa ti serve adesso",
    typeWork:        "Un compito di lavoro",
    typeSearchJob:   "Cercare lavoro",
    typeLearn:       "Studiare o imparare",
    typeDecision:    "Prendere una decisione",
    typeTraining:    "Allenamento fisico",
    typeStuck:       "Sono bloccato in una situazione",

    // Intent screen (new Step 1)
    step1of4Label:         "Passo 1 di 4",
    step2of4Label:         "Passo 2 di 4",
    step3of4Label:         "Passo 3 di 4",
    step4of4Label:         "Passo 4 di 4",
    questionIntent:        "Da dove vuoi<br>partire?",
    questionIntentHelper:  "Scegli il tipo di supporto che ti serve adesso",
    intentAvoidance:       "Ho qualcosa da fare",
    intentAvoidanceSub:    "So cosa devo fare, ma lo sto rimandando",
    intentSupport:         "Non so da dove iniziare",
    intentSupportSub:      "Mi sento bloccato, confuso o senza energia",

    // Avoidance flow — type screen
    questionTypeAvoidance:       "Cosa stai<br>rimandando?",
    questionTypeAvoidanceHelper: "Scegli l'area da cui partire",

    // Support flow — type screen
    questionTypeSupport:         "Di cosa hai<br>bisogno adesso?",
    questionTypeSupportHelper:   "Scegli il modo più semplice per iniziare",

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
    btnDoneConfirmed:"✔ Continua così",
    doneFlashMessages: [
      "Hai iniziato. Questo conta.",
      "Azione > pensiero.",
      "Uno in più.",
      "Ci sei arrivato.",
      "Questo è slancio."
    ],
    btnTimer:        "Avvia timer",
    btnTimerStop:    "Ferma timer",
    btnAnother:      "Non ti convince? Prova un'alternativa",
    anotherVariants: [
      "Non ti convince? Prova un'alternativa",
      "Ancora no? Eccone un'altra.",
      "Continua a cercare — ecco un'altra."
    ],
    whyToggle:       "Perché funziona",
    btnBack:         "Indietro",
    btnResultHome:   "Home",

    // Reset stats
    btnResetStats:        "Azzera statistiche",
    btnResetStatsHelper:  "Cancella anche i dati salvati",
    confirmResetStats:    "Sei sicuro di voler resettare le statistiche?",

    // Truth Mode — reason screen
    step1of3Label:       "Passo 1 di 3",
    step2of3Label:       "Passo 2 di 3",
    step3of3Label:       "Passo 3 di 3",
    questionReason:      "Perché lo stai<br>evitando?",
    reasonTruthMode:     "",
    resultTruthMode:     "",
    reasonTooDifficult:  "Troppo difficile",
    reasonDontFeelLike:  "Non ne ho voglia",
    reasonAfraid:        "Ho paura",
    reasonDontKnowStart: "Non so da dove iniziare",
    reasonNotImportant:  "Non mi sembra urgente",
    reasonFeelStuck:     "Mi sento bloccato",
    reasonDontKnow:      "Non lo so",

    // Dynamic reason screen — quick_win
    questionReasonQuickWin:      "Da cosa vuoi<br>partire?",
    reasonSmallEasy:             "Qualcosa di molto facile",
    reasonPostponed:             "Qualcosa che ho rimandato",
    reasonLowEffort:             "Qualcosa che mi pesa poco",
    reasonFinishNow:             "Qualcosa da finire subito",

    // Dynamic reason screen — mental_cleanup
    questionReasonMentalCleanup: "Cosa senti<br>in questo momento?",
    reasonTooMuchInHead:         "Troppe cose in testa",
    reasonConfused:              "Mi sento confuso",
    reasonStressed:              "Mi sento stressato",
    reasonCantFocus:             "Non riesco a concentrarmi",

    // Done screen
    doneMessage:     "Hai agito.<br>Questo cambia tutto.",
    doneSub:         "Non serve farlo bene. Basta farlo.",
    statLabelToday2: "min oggi",
    statLabelTotal2: "min totali",
    statLabelStreak2:"giorni di fila",
    btnAgain:        "Inizia un'altra attività",
    btnHome:         "Torna all'inizio",
    streakSub1:      "Non fermarti ora.",
    streakSub2:      "Stai costruendo continuità.",

    // More Time flow
    btnMoreTime:          "Ho più tempo",
    questionMoreTime:     "Come vuoi<br>usarlo?",
    moreTimeStart:        "Iniziare",
    moreTimeStartSub:     "blocco da 10 min",
    moreTimeContinue:     "Continuare",
    moreTimeContinueSub:  "blocco da 15 min",

    // New categories
    typeMentalCleanup:    "Svuotare la mente",
    typeQuickWin:         "Parti da qualcosa di piccolo",
    typeGetClarity:       "Fare chiarezza",
    typeRegainEnergy:     "Recuperare energia",
    typeResetRestart:     "Ripartire da zero",

    // 2-min reduce option
    btnReduceTo2:         "− Riduci a 2 min",
    reduceFirstStep:      "Fai solo il primo passo.",

    // Support flow — per-category question keys
    questionSupportMentalCleanup: "Cosa senti<br>in questo momento?",
    questionSupportGetClarity:    "Cosa ti manca<br>per decidere?",
    questionSupportRegainEnergy:  "Come ti senti<br>adesso?",
    questionSupportQuickWin:      "Da cosa vuoi<br>partire?",
    questionSupportResetRestart:  "Vuoi ripartire<br>senza pressione?",

    // Support answers — mental_cleanup
    supportTooMuchOnMind:     "Troppe cose in testa",
    supportFeelConfused:      "Mi sento confuso",
    supportFeelStressed:      "Mi sento stressato",
    supportCantFocus:         "Non riesco a concentrarmi",
    supportDontKnow:          "Non lo so",

    // Support answers — get_clarity
    supportTooManyOptions:    "Troppe opzioni",
    supportDontKnowChoose:    "Non so cosa scegliere",
    supportTooManyOpenThings: "Ho troppe cose aperte",
    supportDontKnowImportant: "Non capisco cosa è importante",

    // Support answers — regain_energy
    supportFeelTired:         "Mi sento stanco",
    supportNoMotivation:      "Non ho motivazione",
    supportEverythingHeavy:   "Mi pesa tutto",
    supportDontWantToStart:   "Non ho voglia di iniziare",

    // Support answers — reset_restart
    supportWantToReset:       "Voglio azzerare tutto",
    supportNeedSimplicity:    "Ho bisogno di semplicità",
    supportWantLightRestart:  "Voglio ricominciare leggero",
    supportJustDoSomething:   "Voglio solo fare qualcosa",

    // Follow-up hint on intro
    followUpHint:         "Hai iniziato con {category}. Vuoi continuare?",
    followUpBtn:          "Continua",

    // Category display names (for follow-up hint)
    categoryName: {
      work:           "un compito di lavoro",
      decision:       "una decisione",
      training:       "allenamento fisico",
      thinking:       "lo studio",
      stuck:          "sbloccarti",
      mental_cleanup: "svuotare la mente",
      quick_win:      "partire da qualcosa di piccolo",
      get_clarity:    "fare chiarezza",
      regain_energy:  "recuperare energia",
      reset_restart:  "ripartire da zero",
    },
    intentName: {
      avoidance: "evitamento",
      support:   "supporto",
    },
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

  // ── mental_cleanup + reason ───────────────────────────────────
  "mental_cleanup+dont_know_start": {
    en: [
      "You don't need a plan. You need to empty what's in your head first.",
      "Write it all out — messy, unfinished, contradictory. That's the point.",
      "You can't think clearly from inside the chaos. Get it out first.",
      "The only wrong way to clear your mind is not to start.",
      "Brain dump first. Sort later. Start now."
    ],
    it: [
      "Non ti serve un piano. Prima devi svuotare quello che hai in testa.",
      "Scrivilo tutto — disordinato, incompleto, contraddittorio. È questo il punto.",
      "Non puoi pensare chiaramente dall'interno del caos. Prima tiralo fuori.",
      "L'unico modo sbagliato di svuotare la mente è non iniziare.",
      "Prima brain dump. Poi ordina. Inizia adesso."
    ]
  },

  "mental_cleanup+feel_stuck": {
    en: [
      "Your head is full. That's why you feel stuck. Empty it and see.",
      "Stuck often means overloaded. Writing it out makes space to move.",
      "You can't move forward while carrying everything unprocessed. Put it down.",
      "The block is mental noise. Get it out of your head and onto paper.",
      "Five minutes of writing clears more than five hours of thinking."
    ],
    it: [
      "Hai la testa piena. Ecco perché ti senti bloccato. Svuotala e vedi.",
      "Bloccato spesso significa sovraccarico. Scriverlo crea spazio per muoversi.",
      "Non puoi andare avanti portando tutto non elaborato. Mettilo giù.",
      "Il blocco è rumore mentale. Tiralo fuori dalla testa e mettilo su carta.",
      "Cinque minuti di scrittura chiariscono più di cinque ore di pensiero."
    ]
  },

  "mental_cleanup+dont_feel_like": {
    en: [
      "You don't feel like it because your head is already full. That's exactly why you should.",
      "It takes 2 minutes to start. The relief comes faster than you expect.",
      "Avoiding the cleanup keeps the weight. Do it and put it down.",
      "You don't have to solve anything. Just get it out of your head.",
      "Think of it as taking out the trash. You never want to. You always feel better after."
    ],
    it: [
      "Non ne hai voglia perché hai già la testa piena. Esattamente per questo dovresti farlo.",
      "Ci vogliono 2 minuti per iniziare. Il sollievo arriva prima di quanto ti aspetti.",
      "Evitare lo svuotamento mantiene il peso. Fallo e mettilo giù.",
      "Non devi risolvere nulla. Basta tirarlo fuori dalla testa.",
      "Pensala come portare fuori la spazzatura. Non ne hai mai voglia. Ti senti sempre meglio dopo."
    ]
  },

  // ── quick_win + reason ────────────────────────────────────────
  "quick_win+dont_feel_like": {
    en: [
      "You don't need motivation for a 5-minute task. You need to start it.",
      "One small thing done. That's all. The rest of the day changes after that.",
      "You've been carrying this undone thing. Put it down. It takes minutes.",
      "Not feeling it is fine. Starting anyway is the point.",
      "The smallest action creates momentum. That's the whole trick."
    ],
    it: [
      "Non hai bisogno di motivazione per un compito da 5 minuti. Devi solo iniziarlo.",
      "Una piccola cosa fatta. Solo questo. Il resto della giornata cambia dopo.",
      "Stai portando questa cosa non fatta. Mettila giù. Ci vogliono minuti.",
      "Non averne voglia va bene. Iniziare comunque è il punto.",
      "La più piccola azione crea slancio. Questo è l'intero trucco."
    ]
  },

  "quick_win+feel_stuck": {
    en: [
      "When stuck, pick the smallest possible thing and do it. That's how stuck ends.",
      "You're not blocked on everything. Find the one thing you can do now.",
      "A quick win doesn't solve the big problem. It proves you can still move.",
      "Start where you can start, not where you wish you could.",
      "One thing done. Stuck begins to dissolve."
    ],
    it: [
      "Quando sei bloccato, scegli la cosa più piccola possibile e falla. Così finisce lo stallo.",
      "Non sei bloccato su tutto. Trova l'unica cosa che puoi fare adesso.",
      "Una vittoria rapida non risolve il problema grande. Dimostra che puoi ancora muoverti.",
      "Inizia dove puoi iniziare, non dove vorresti poter iniziare.",
      "Una cosa fatta. Il blocco inizia a dissolversi."
    ]
  },

  "quick_win+too_difficult": {
    en: [
      "This is a quick win. By definition, it should be easy. Just do it.",
      "If it feels hard, you're overthinking it. Pick something smaller.",
      "The difficulty isn't the task. It's getting yourself to start.",
      "Easy tasks still get avoided. Doing them still feels good.",
      "Five minutes. One small thing. That's all it is."
    ],
    it: [
      "Questa è una vittoria rapida. Per definizione, dovrebbe essere facile. Falla.",
      "Se sembra difficile, ci stai pensando troppo. Scegli qualcosa di più piccolo.",
      "La difficoltà non è il compito. È convincerti ad iniziare.",
      "I compiti facili vengono comunque evitati. Farli fa comunque sentire bene.",
      "Cinque minuti. Una piccola cosa. È tutto."
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

  // ── quick_win specific reason fallbacks ───────────────────────
  "reason+small_easy": {
    en: [
      "Easy is fine. Done is the point.",
      "Start with the easiest thing. Momentum is its own reward.",
      "You picked easy on purpose. Now do it.",
      "Small and done beats big and pending. Always."
    ],
    it: [
      "Facile va bene. Fatto è il punto.",
      "Inizia con la cosa più facile. Lo slancio è la sua stessa ricompensa.",
      "Hai scelto facile di proposito. Adesso fallo.",
      "Piccolo e fatto batte grande e in sospeso. Sempre."
    ]
  },
  "reason+postponed": {
    en: [
      "You've been carrying it. Put it down by doing it.",
      "The longer it waits, the heavier it feels. Do it now.",
      "Postponed things don't disappear. They accumulate.",
      "It was postponable. It's been postponed. Now it ends."
    ],
    it: [
      "Lo stai portando. Mettilo giù facendolo.",
      "Più aspetta, più pesa. Fallo adesso.",
      "Le cose rimandate non spariscono. Si accumulano.",
      "Era rimandabile. È stato rimandato. Adesso finisce."
    ]
  },
  "reason+low_effort": {
    en: [
      "Low effort, real result. That's the whole trade.",
      "You don't need to go hard. You need to start.",
      "Easy enough to do. Which means: do it.",
      "Pick the path of least resistance — and walk it."
    ],
    it: [
      "Poco sforzo, risultato reale. Questo è il compromesso.",
      "Non devi spingere forte. Devi iniziare.",
      "Abbastanza facile da fare. Il che significa: fallo.",
      "Scegli la via della minor resistenza — e percorrila."
    ]
  },
  "reason+finish_now": {
    en: [
      "Finishing feels better than starting. Let's get there.",
      "It's close to done. Close it.",
      "The last step is the one that counts. Take it.",
      "Done is better than perfect. Done is better than pending."
    ],
    it: [
      "Finire fa sentire meglio che iniziare. Arriviamoci.",
      "È quasi finito. Chiudilo.",
      "L'ultimo passo è quello che conta. Fallo.",
      "Fatto è meglio di perfetto. Fatto è meglio di in sospeso."
    ]
  },

  // ── mental_cleanup specific reason fallbacks ──────────────────
  "reason+too_much_in_head": {
    en: [
      "Too much in your head means it needs to come out. Write it.",
      "Your brain is not a storage system. Give it a place to unload.",
      "The overwhelm is real. The answer is always: get it out first.",
      "Empty the head. Then decide what to do with it."
    ],
    it: [
      "Troppe cose in testa significa che devono uscire. Scrivile.",
      "Il tuo cervello non è un sistema di archiviazione. Dagli un posto dove scaricarsi.",
      "Il senso di sopraffazione è reale. La risposta è sempre: prima tiralo fuori.",
      "Svuota la testa. Poi decidi cosa farci."
    ]
  },
  "reason+confused": {
    en: [
      "Confusion clears on paper. Not in your head.",
      "Write what you're confused about. It becomes smaller.",
      "You're not confused because it's complicated. You're confused because it's unwritten.",
      "The first step out of confusion is externalizing it."
    ],
    it: [
      "La confusione si chiarisce sulla carta. Non in testa.",
      "Scrivi di cosa sei confuso. Diventa più piccolo.",
      "Non sei confuso perché è complicato. Sei confuso perché non è scritto.",
      "Il primo passo fuori dalla confusione è esternarla."
    ]
  },
  "reason+stressed": {
    en: [
      "Stress wants movement. Give it some.",
      "You don't have to solve the stress. Just move through it.",
      "Write it out. The act of naming stress reduces it.",
      "Stressed and moving beats stressed and still."
    ],
    it: [
      "Lo stress vuole movimento. Daglielo.",
      "Non devi risolvere lo stress. Devi solo muoverti attraverso di esso.",
      "Scrivilo. L'atto di nominare lo stress lo riduce.",
      "Stressato e in movimento batte stressato e fermo."
    ]
  },
  "reason+cant_focus": {
    en: [
      "You can't focus because there's too much open. Close one thing.",
      "Focus doesn't come before starting. It comes from starting.",
      "Pick one thing only. Put the rest aside. Start.",
      "Lack of focus is a signal to narrow down, not to wait."
    ],
    it: [
      "Non riesci a concentrarti perché hai troppe cose aperte. Chiudine una.",
      "La concentrazione non viene prima di iniziare. Viene dall'iniziare.",
      "Scegli solo una cosa. Metti il resto da parte. Inizia.",
      "Mancanza di focus è un segnale per restringere il campo, non per aspettare."
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
      title: "Open LinkedIn. Search one role.",
      description: "Five minutes of exposure beats five hours of planning.",
      steps: ["Open LinkedIn", "Search your job title or the role you want", "Click on the first result and read the full post", "Save it if it looks relevant"]
    },
    it: {
      title: "Apri LinkedIn. Cerca un ruolo.",
      description: "Cinque minuti di esposizione valgono più di cinque ore di pianificazione.",
      steps: ["Apri LinkedIn", "Cerca il tuo titolo di lavoro o il ruolo che vuoi", "Clicca sul primo risultato e leggi l'offerta completa", "Salvala se sembra rilevante"]
    }
  },
  {
    id: "work-02", type: "work", duration: 10,
    en: {
      title: "Find and save 3 job posts.",
      description: "Build a target list. Start with what exists.",
      steps: ["Open LinkedIn or Google", "Search: '[your role] jobs'", "Read 5 posts quickly — skip anything that clearly doesn't fit", "Save or bookmark the 3 most interesting ones"]
    },
    it: {
      title: "Trova e salva 3 offerte di lavoro.",
      description: "Costruisci una lista di obiettivi. Inizia da ciò che esiste.",
      steps: ["Apri LinkedIn o Google", "Cerca: '[il tuo ruolo] lavoro'", "Leggi 5 offerte velocemente — salta quelle che non si adattano", "Salva o metti nei preferiti le 3 più interessanti"]
    }
  },
  {
    id: "work-03", type: "work", duration: 15,
    en: {
      title: "Update your CV — one section only.",
      description: "A current CV opens doors. Start with one section.",
      steps: ["Open your CV file (create a blank one if you don't have it)", "Pick one section: Experience, Skills, or Summary", "Update it with your most recent information", "Save the file and note what section to update next"]
    },
    it: {
      title: "Aggiorna il CV — solo una sezione.",
      description: "Un CV aggiornato apre porte. Inizia con una sola sezione.",
      steps: ["Apri il file del CV (crea uno vuoto se non ce l'hai)", "Scegli una sezione: Esperienza, Competenze o Sommario", "Aggiornala con le tue informazioni più recenti", "Salva il file e annota quale sezione aggiornare dopo"]
    }
  },
  {
    id: "work-04", type: "work", duration: 5,
    en: {
      title: "Send the message you've been avoiding.",
      description: "One message sent beats ten drafted.",
      steps: ["Open email or a messaging app", "Find the message you've been putting off", "Write 2–3 sentences and send it", "Close the app"]
    },
    it: {
      title: "Invia il messaggio che hai rimandato.",
      description: "Un messaggio inviato vale più di dieci in bozza.",
      steps: ["Apri l'email o un'app di messaggistica", "Trova il messaggio che hai rimandato", "Scrivi 2–3 frasi e invialo", "Chiudi l'app"]
    }
  },
  {
    id: "work-05", type: "work", duration: 10,
    en: {
      title: "Open one learning resource. Take 3 notes.",
      description: "Ten minutes of focused learning compounds fast.",
      steps: ["Open a course, article, or video you've been meaning to use", "Read or watch for 8 minutes without pausing", "Write 3 things you learned or want to remember", "Close it — you're done for this session"]
    },
    it: {
      title: "Apri una risorsa di apprendimento. Prendi 3 appunti.",
      description: "Dieci minuti di apprendimento concentrato si accumulano velocemente.",
      steps: ["Apri un corso, articolo o video che intendi usare", "Leggi o guarda per 8 minuti senza pause", "Scrivi 3 cose che hai imparato o vuoi ricordare", "Chiudi — hai finito per questa sessione"]
    }
  },
  {
    id: "work-06", type: "work", duration: 15,
    en: {
      title: "Research one company. Write 5 facts.",
      description: "Know your target before you apply.",
      steps: ["Choose one company you want to work for", "Open their website and LinkedIn page", "Read their 'About' page and recent posts", "Write 5 facts: what they do, size, values, recent news, one open role"]
    },
    it: {
      title: "Ricerca un'azienda. Scrivi 5 fatti.",
      description: "Conosci il tuo obiettivo prima di candidarti.",
      steps: ["Scegli un'azienda per cui vuoi lavorare", "Apri il loro sito web e la pagina LinkedIn", "Leggi la pagina 'Chi siamo' e i post recenti", "Scrivi 5 fatti: cosa fanno, dimensione, valori, notizie recenti, un ruolo aperto"]
    }
  },
  {
    id: "work-07", type: "work", duration: 5,
    en: {
      title: "Write the one task you've been avoiding. Do it.",
      description: "Name it. Start it. Five minutes is enough.",
      steps: ["Write: 'The work task I keep avoiding is ___'", "Open whatever tool or file it involves", "Do the smallest visible action (type, click, fill in)", "Stop after 5 minutes — you've started"]
    },
    it: {
      title: "Scrivi il compito che hai evitato. Fallo.",
      description: "Nominalo. Inizialo. Cinque minuti bastano.",
      steps: ["Scrivi: 'Il compito di lavoro che continuo a evitare è ___'", "Apri qualunque strumento o file riguardi", "Fai la più piccola azione visibile (scrivi, clicca, compila)", "Fermati dopo 5 minuti — hai iniziato"]
    }
  },
  {
    id: "work-08", type: "work", duration: 10,
    en: {
      title: "Write a short cover letter draft.",
      description: "A rough draft beats no draft. Write it now.",
      steps: ["Open a blank document", "Write 3 lines: who you are, what role you want, why you'd be useful", "Don't edit — just write", "Save it as 'cover_draft.doc' — you can polish later"]
    },
    it: {
      title: "Scrivi una bozza di lettera di presentazione.",
      description: "Una bozza grezza vale più di nessuna bozza. Scrivila adesso.",
      steps: ["Apri un documento vuoto", "Scrivi 3 righe: chi sei, che ruolo vuoi, perché saresti utile", "Non correggere — scrivi e basta", "Salvalo come 'lettera_bozza.doc' — puoi rifinirlo dopo"]
    }
  },

  // ── DECISION ──────────────────────────────────────────────────
  {
    id: "decision-01", type: "decision", duration: 5,
    en: {
      title: "Write the two options. Choose one.",
      description: "No analysis. Two options, one choice.",
      steps: ["Write Option A in one sentence", "Write Option B in one sentence", "Circle the one you'd pick if you had to answer right now", "That's your answer"]
    },
    it: {
      title: "Scrivi le due opzioni. Scegline una.",
      description: "Nessuna analisi. Due opzioni, una scelta.",
      steps: ["Scrivi l'opzione A in una frase", "Scrivi l'opzione B in una frase", "Cerchia quella che sceglieresti se dovessi rispondere adesso", "Questa è la tua risposta"]
    }
  },
  {
    id: "decision-02", type: "decision", duration: 10,
    en: {
      title: "Write the worst outcome. Then act.",
      description: "Name the real fear. It's smaller than it feels.",
      steps: ["Write the decision you're avoiding", "Write the realistic worst case if you choose wrong", "Write one thing you'd do to recover from that", "Make the decision — you now know you can handle it"]
    },
    it: {
      title: "Scrivi il caso peggiore. Poi agisci.",
      description: "Nomina la vera paura. È più piccola di quanto sembra.",
      steps: ["Scrivi la decisione che stai evitando", "Scrivi il caso peggiore realistico se scegli male", "Scrivi una cosa che faresti per riprenderti", "Prendi la decisione — ora sai che puoi gestirla"]
    }
  },
  {
    id: "decision-03", type: "decision", duration: 5,
    en: {
      title: "Is it reversible? Then decide now.",
      description: "Most decisions can be undone. Stop treating them like they can't.",
      steps: ["Write the decision in one sentence", "Ask yourself: can I reverse this in the next 30 days?", "If yes: decide immediately", "If no: write one more fact you'd need, then decide"]
    },
    it: {
      title: "È reversibile? Allora decidi adesso.",
      description: "La maggior parte delle decisioni si può annullare. Smetti di trattarle come se non fosse possibile.",
      steps: ["Scrivi la decisione in una frase", "Chiediti: posso tornare indietro nei prossimi 30 giorni?", "Se sì: decidi subito", "Se no: scrivi un dato in più che ti serve, poi decidi"]
    }
  },
  {
    id: "decision-04", type: "decision", duration: 15,
    en: {
      title: "Five years from now",
      description: "Distance cuts through noise. Use it.",
      steps: ["Write the decision at the top of a page", "Write: 'In 5 years, if I chose A, my life looks like...'", "Write: 'In 5 years, if I chose B, my life looks like...'", "Read both. Write your honest gut reaction.", "Circle the option you'd regret not choosing"]
    },
    it: {
      title: "Tra cinque anni",
      description: "La distanza taglia il rumore. Usala.",
      steps: ["Scrivi la decisione in cima alla pagina", "Scrivi: 'Tra 5 anni, se scelgo A, la mia vita assomiglia a...'", "Scrivi: 'Tra 5 anni, se scelgo B, la mia vita assomiglia a...'", "Leggi entrambe. Scrivi la tua reazione viscerale onesta.", "Cerchia l'opzione di cui ti pentiresti non aver scelto"]
    }
  },
  {
    id: "decision-05", type: "decision", duration: 10,
    en: {
      title: "What do you actually need to know?",
      description: "List only the information that would genuinely change your decision.",
      steps: ["Write the decision", "Write every question you feel you still need answered", "Cross out any that wouldn't actually change your choice", "If anything remains: get that one fact. Then decide."]
    },
    it: {
      title: "Cosa hai davvero bisogno di sapere?",
      description: "Elenca solo le informazioni che cambierebbero genuinamente la tua decisione.",
      steps: ["Scrivi la decisione", "Scrivi ogni domanda che senti ancora aperta", "Cancella quelle che non cambierebbero comunque la tua scelta", "Se rimane qualcosa: ottieni quel dato. Poi decidi."]
    }
  },
  {
    id: "decision-06", type: "decision", duration: 5,
    en: {
      title: "Ask someone in 60 seconds",
      description: "A fast outside perspective breaks the loop.",
      steps: ["Pick one person you trust (text, call, or think of them)", "Describe the decision in one sentence", "Ask: 'What would you do?' — listen without arguing", "Make your decision now, with that in mind"]
    },
    it: {
      title: "Chiedi a qualcuno in 60 secondi",
      description: "Una prospettiva esterna rapida rompe il loop.",
      steps: ["Scegli una persona di cui ti fidi (scrivi, chiama o pensa a lei)", "Descrivi la decisione in una frase", "Chiedi: 'Cosa faresti?' — ascolta senza argomentare", "Prendi la tua decisione adesso, tenendolo a mente"]
    }
  },
  {
    id: "decision-07", type: "decision", duration: 10,
    en: {
      title: "Write what you already know you'll choose",
      description: "You usually know. You're just not letting yourself choose.",
      steps: ["Write: 'If I had to decide in the next 60 seconds, I'd choose...'", "Write that answer — don't think, just write", "Write one reason you've been resisting it", "Ask: is that reason real, or is it fear?", "Commit to the answer you already had"]
    },
    it: {
      title: "Scrivi cosa sai già che sceglierai",
      description: "Di solito lo sai già. Non ti stai solo permettendo di scegliere.",
      steps: ["Scrivi: 'Se dovessi decidere nei prossimi 60 secondi, sceglierei...'", "Scrivi quella risposta — non pensare, scrivi e basta", "Scrivi un motivo per cui ti stai resistendo", "Chiediti: quel motivo è reale, o è paura?", "Impegnati nella risposta che avevi già"]
    }
  },
  // ── TRAINING ──────────────────────────────────────────────────
  {
    id: "training-01", type: "training", duration: 5,
    en: {
      title: "5-minute bodyweight start",
      description: "No equipment. No warm-up needed. Start now.",
      steps: ["10 squats — slow down, fast up", "10 push-ups — any variation counts", "20-second plank", "Repeat once if you have time left"]
    },
    it: {
      title: "5 minuti a corpo libero",
      description: "Nessun attrezzo. Nessun riscaldamento. Inizia adesso.",
      steps: ["10 squat — scendi lento, su veloce", "10 flessioni — qualsiasi variante va bene", "Plank per 20 secondi", "Ripeti una volta se hai ancora tempo"]
    }
  },
  {
    id: "training-02", type: "training", duration: 10,
    en: {
      title: "10-minute floor circuit",
      description: "No equipment, no excuses. 3 rounds.",
      steps: ["Round 1: 15 squats, 10 push-ups, 15 jumping jacks", "Round 2: same, faster", "Round 3: same, as fast as you can", "Stretch for 90 seconds when done"]
    },
    it: {
      title: "Circuito a terra 10 minuti",
      description: "Nessun attrezzo, nessuna scusa. 3 round.",
      steps: ["Round 1: 15 squat, 10 flessioni, 15 jumping jack", "Round 2: uguale, più veloce", "Round 3: uguale, più veloce possibile", "Allunga per 90 secondi alla fine"]
    }
  },
  {
    id: "training-03", type: "training", duration: 15,
    en: {
      title: "15-minute walk — no phone",
      description: "Put the phone down. Move for 15 minutes.",
      steps: ["Put your shoes on", "Leave your phone at home or in your bag", "Walk outside at a brisk pace for 15 minutes", "When you return: drink water and write the one task you'll do next"]
    },
    it: {
      title: "Camminata 15 minuti — senza telefono",
      description: "Posa il telefono. Muoviti per 15 minuti.",
      steps: ["Metti le scarpe", "Lascia il telefono a casa o in borsa", "Cammina fuori a passo sostenuto per 15 minuti", "Quando torni: bevi acqua e scrivi il prossimo compito che farai"]
    }
  },
  {
    id: "training-04", type: "training", duration: 5,
    en: {
      title: "Full-body stretch in 5 minutes",
      description: "Tension in the body keeps you stuck. Release it.",
      steps: ["Neck: slow circles, 10 seconds each direction", "Shoulders: cross-arm stretch, 10 seconds each", "Hips: lunge stretch, 15 seconds each side", "Take 3 deep slow breaths to finish"]
    },
    it: {
      title: "Stretching totale in 5 minuti",
      description: "La tensione nel corpo ti blocca. Liberala.",
      steps: ["Collo: rotazioni lente, 10 secondi per direzione", "Spalle: allungamento braccio incrociato, 10 secondi per lato", "Fianchi: affondo allungato, 15 secondi per lato", "Fai 3 respiri profondi e lenti per finire"]
    }
  },
  {
    id: "training-05", type: "training", duration: 10,
    en: {
      title: "Stairs or hill — 10 minutes",
      description: "Find elevation. Use it. No gym required.",
      steps: ["Find a staircase or small hill (indoors or outdoors)", "Walk up and down steadily for 8 minutes", "Last 2 minutes: increase pace", "Stretch your calves and quads for 1 minute after"]
    },
    it: {
      title: "Scale o salita — 10 minuti",
      description: "Trova un dislivello. Usalo. Nessuna palestra necessaria.",
      steps: ["Trova una scala o una salita (dentro o fuori)", "Sali e scendi con ritmo costante per 8 minuti", "Ultimi 2 minuti: aumenta il passo", "Allunga polpacci e quadricipiti per 1 minuto dopo"]
    }
  },
  {
    id: "training-06", type: "training", duration: 15,
    en: {
      title: "Ladder workout",
      description: "Start with 2 reps. Build to 10. Come back down.",
      steps: ["Exercise 1: push-ups. Exercise 2: squats.", "2 reps each → 4 → 6 → 8 → 10 → 8 → 6 → 4 → 2", "Rest only when absolutely needed", "Total: about 90 reps each — you'll feel it"]
    },
    it: {
      title: "Allenamento a scaletta",
      description: "Inizia con 2 ripetizioni. Arriva a 10. Torna indietro.",
      steps: ["Esercizio 1: flessioni. Esercizio 2: squat.", "2 rip. → 4 → 6 → 8 → 10 → 8 → 6 → 4 → 2", "Riposa solo se assolutamente necessario", "Totale: circa 90 rip. per esercizio — si sente"]
    }
  },
  {
    id: "training-07", type: "training", duration: 5,
    en: {
      title: "Cold water reset",
      description: "A physical reset changes your state fast.",
      steps: ["Go to the sink right now", "Run cold water on your face and wrists for 30 seconds", "Take 3 slow deep breaths", "Return to your desk and open the task"]
    },
    it: {
      title: "Reset con acqua fredda",
      description: "Un reset fisico cambia il tuo stato rapidamente.",
      steps: ["Vai al lavandino adesso", "Sciacqua il viso e i polsi con acqua fredda per 30 secondi", "Fai 3 respiri profondi e lenti", "Torna alla scrivania e apri il compito"]
    }
  },

  // ── THINKING ──────────────────────────────────────────────────
  {
    id: "thinking-01", type: "thinking", duration: 10,
    en: {
      title: "Write it out — all of it",
      description: "Get it out of your head and onto paper. Then you can see it.",
      steps: ["Open a notebook or notes app", "Write: 'I keep thinking about...' and don't stop writing for 8 minutes", "Read what you wrote", "Circle the one thing that actually needs a decision or action"]
    },
    it: {
      title: "Scrivilo — tutto",
      description: "Tiralo fuori dalla testa e mettilo su carta. Poi puoi vederlo.",
      steps: ["Apri un quaderno o l'app note", "Scrivi: 'Continuo a pensare a...' e non smettere di scrivere per 8 minuti", "Rileggi quello che hai scritto", "Cerchia la cosa che ha davvero bisogno di una decisione o azione"]
    }
  },
  {
    id: "thinking-02", type: "thinking", duration: 15,
    en: {
      title: "Write a letter to yourself",
      description: "Clarity you write stays with you longer than clarity you think.",
      steps: ["Open a doc or notebook", "Start with: 'I've been avoiding thinking about...' — write for 10 minutes", "Read it once without editing or judging", "Underline the most honest sentence", "Write one action you could take based on what you underlined"]
    },
    it: {
      title: "Scrivi una lettera a te stesso",
      description: "La chiarezza che scrivi resta più a lungo di quella che pensi.",
      steps: ["Apri un documento o quaderno", "Inizia con: 'Ho evitato di pensare a...' — scrivi per 10 minuti", "Leggila una volta senza correggere o giudicare", "Sottolinea la frase più onesta", "Scrivi un'azione che potresti fare in base a ciò che hai sottolineato"]
    }
  },
  {
    id: "thinking-03", type: "thinking", duration: 10,
    en: {
      title: "Ask why three times",
      description: "The surface issue is almost never the real one.",
      steps: ["Write the thing that's bothering you", "Ask: 'Why does this actually bother me?' Write the answer", "Ask 'Why?' again — write that answer too", "Ask one more time — write it", "The third answer is usually the real problem. Write one thing you can do about it."]
    },
    it: {
      title: "Chiediti perché tre volte",
      description: "Il problema in superficie non è quasi mai quello reale.",
      steps: ["Scrivi la cosa che ti disturba", "Chiediti: 'Perché mi disturba davvero?' Scrivi la risposta", "Chiediti di nuovo 'Perché?' — scrivi anche quella risposta", "Chiediti un'altra volta — scrivila", "La terza risposta è di solito il problema reale. Scrivi una cosa che puoi fare al riguardo."]
    }
  },
  {
    id: "thinking-04", type: "thinking", duration: 5,
    en: {
      title: "Write the thought. Then write what to do about it.",
      description: "Externalise it. Then close the loop with one action.",
      steps: ["Open a note or blank page", "Write exactly what's been on your mind — no filtering", "Write: 'The one thing I could do about this is ___'", "Do that one thing now, or write exactly when you will"]
    },
    it: {
      title: "Scrivi il pensiero. Poi scrivi cosa fare al riguardo.",
      description: "Esternalizzalo. Poi chiudi il loop con un'azione.",
      steps: ["Apri una nota o pagina bianca", "Scrivi esattamente cosa hai in testa — senza filtrare", "Scrivi: 'La cosa che potrei fare al riguardo è ___'", "Fai quella cosa adesso, o scrivi esattamente quando la farai"]
    }
  },
  {
    id: "thinking-05", type: "thinking", duration: 15,
    en: {
      title: "Map the thought, not the problem",
      description: "You're not solving it right now — you're understanding it.",
      steps: ["Open a blank page", "Write the thought in the centre", "Around it, write every related thought, fear, or question", "Draw lines between what's connected", "Circle the one node that, if resolved, would change everything else"]
    },
    it: {
      title: "Mappa il pensiero, non il problema",
      description: "Non stai risolvendo adesso — stai capendo.",
      steps: ["Apri una pagina bianca", "Scrivi il pensiero al centro", "Attorno, scrivi ogni pensiero, paura o domanda collegata", "Traccia linee tra ciò che è collegato", "Cerchia il nodo che, se risolto, cambierebbe tutto il resto"]
    }
  },
  {
    id: "thinking-06", type: "thinking", duration: 10,
    en: {
      title: "What actually changes if this goes wrong?",
      description: "Most worry is proportionally bigger than the real risk.",
      steps: ["Write the thing you're worried about", "Write: 'If this goes badly, what actually changes in my life?'", "Write: 'What stays the same no matter what happens?'", "Write: 'What's one thing I can do right now regardless of the outcome?'"]
    },
    it: {
      title: "Cosa cambia davvero se va male?",
      description: "La maggior parte delle preoccupazioni è sproporzionata rispetto al rischio reale.",
      steps: ["Scrivi la cosa che ti preoccupa", "Scrivi: 'Se va male, cosa cambia concretamente nella mia vita?'", "Scrivi: 'Cosa rimane uguale in ogni caso?'", "Scrivi: 'Una cosa che posso fare adesso indipendentemente dall'esito?'"]
    }
  },
  {
    id: "thinking-07", type: "thinking", duration: 5,
    en: {
      title: "Write the sentence you've avoided. Then act on it.",
      description: "Say the thing. Then move.",
      steps: ["Write: 'The thing I haven't wanted to admit is...'", "Finish the sentence completely — don't stop mid-thought", "Write: 'The one action I can take given this is ___'", "Do that action now"]
    },
    it: {
      title: "Scrivi la frase che hai evitato. Poi agisci.",
      description: "Di' la cosa. Poi muoviti.",
      steps: ["Scrivi: 'La cosa che non ho voluto ammettere è...'", "Finisci la frase completamente — non fermarti a metà", "Scrivi: 'L'azione che posso fare dato questo è ___'", "Fai quell'azione adesso"]
    }
  },

  // ── STUCK ─────────────────────────────────────────────────────
  {
    id: "stuck-01", type: "stuck", duration: 5,
    en: {
      title: "Name the block. Then do one thing.",
      description: "Clarity first. Then movement.",
      steps: ["Write: 'Right now I'm stuck on ___'", "Look at your to-do list or open tabs", "Pick the task that requires zero decisions", "Start it immediately — no rereading, no planning"]
    },
    it: {
      title: "Nomina il blocco. Poi fai una cosa.",
      description: "Prima chiarezza. Poi movimento.",
      steps: ["Scrivi: 'Adesso sono bloccato su ___'", "Guarda la tua lista o le schede aperte", "Scegli il compito che non richiede nessuna decisione", "Inizialo subito — senza rileggere, senza pianificare"]
    }
  },
  {
    id: "stuck-02", type: "stuck", duration: 10,
    en: {
      title: "Identify the block. Change location. Return.",
      description: "Name it. Reset. Come back with one task.",
      steps: ["Write in one sentence what's blocking you right now", "Stand up and leave the room for 5 minutes — no phone", "Come back. Open one task.", "Start it before you sit down."]
    },
    it: {
      title: "Identifica il blocco. Cambia posto. Torna.",
      description: "Nominalo. Resetta. Torna con un compito.",
      steps: ["Scrivi in una frase cosa ti sta bloccando adesso", "Alzati e lascia la stanza per 5 minuti — senza telefono", "Torna. Apri un compito.", "Inizialo prima di sederti."]
    }
  },
  {
    id: "stuck-03", type: "stuck", duration: 5,
    en: {
      title: "Write what's blocking you. Break it into steps.",
      description: "Name the task. Split it. Do step 1.",
      steps: ["Write: 'The thing I'm avoiding is ___'", "Write 4 steps to complete it — be specific", "Do only step 1 right now", "Stop after step 1 — the block is broken"]
    },
    it: {
      title: "Scrivi cosa ti blocca. Dividilo in passi.",
      description: "Nomina il compito. Spezzalo. Fai il passo 1.",
      steps: ["Scrivi: 'La cosa che sto evitando è ___'", "Scrivi 4 passi per completarla — sii specifico", "Fai solo il passo 1 adesso", "Fermati dopo il passo 1 — il blocco è rotto"]
    }
  },
  {
    id: "stuck-04", type: "stuck", duration: 15,
    en: {
      title: "Name it. Reset. Come back and start.",
      description: "Identify the block. Reset the body. Return to one task.",
      steps: ["Write: 'The thing blocking me is ___ and what I need to do is ___'", "Drink a full glass of water. Step outside for 5 minutes — no phone.", "Do 5 slow deep breaths before coming back in", "Return. Open the task you named. Start it immediately."]
    },
    it: {
      title: "Nominalo. Resetta. Torna e inizia.",
      description: "Identifica il blocco. Resetta il corpo. Torna a un compito.",
      steps: ["Scrivi: 'La cosa che mi blocca è ___ e quello che devo fare è ___'", "Bevi un bicchiere d'acqua. Esci per 5 minuti — senza telefono.", "Fai 5 respiri lenti prima di rientrare", "Torna. Apri il compito che hai nominato. Inizialo subito."]
    }
  },
  {
    id: "stuck-05", type: "stuck", duration: 10,
    en: {
      title: "Write what's actually stopping you",
      description: "Naming resistance is half of breaking it.",
      steps: ["Open a blank page", "Write: 'I'm stuck because...' — keep writing until you've said everything", "Read it back and underline the one real reason", "Write: 'One thing I can do despite that reason is...'", "Do that thing now"]
    },
    it: {
      title: "Scrivi cosa ti sta bloccando davvero",
      description: "Nominare la resistenza è metà del superarla.",
      steps: ["Apri una pagina bianca", "Scrivi: 'Sono bloccato perché...' — continua a scrivere finché non hai detto tutto", "Rileggi e sottolinea il vero motivo", "Scrivi: 'Una cosa che posso fare nonostante quel motivo è...'", "Fai quella cosa adesso"]
    }
  },
  {
    id: "stuck-06", type: "stuck", duration: 5,
    en: {
      title: "Identify the avoidance. Then clear it.",
      description: "Name what you've been skipping. Do it now.",
      steps: ["Write: 'The task I've been avoiding is ___'", "Set a 5-minute timer", "Do it at minimum acceptable quality", "Mark it done — it's gone"]
    },
    it: {
      title: "Identifica l'evitamento. Poi eliminalo.",
      description: "Nomina cosa hai saltato. Fallo adesso.",
      steps: ["Scrivi: 'Il compito che ho evitato è ___'", "Imposta un timer da 5 minuti", "Fallo alla qualità minima accettabile", "Segnalo fatto — è sparito"]
    }
  },
  {
    id: "stuck-07", type: "stuck", duration: 10,
    en: {
      title: "Write the block. Send it. Pick a step.",
      description: "Externalise it. Then move.",
      steps: ["Open a message to someone you trust", "Write: 'I'm stuck on ___ because ___. What would you do?'", "Send it", "While you wait for a reply: pick one small step and start it now"]
    },
    it: {
      title: "Scrivi il blocco. Invialo. Scegli un passo.",
      description: "Esternalizzalo. Poi muoviti.",
      steps: ["Apri un messaggio a qualcuno di cui ti fidi", "Scrivi: 'Sono bloccato su ___ perché ___. Cosa faresti?'", "Invialo", "Mentre aspetti la risposta: scegli un piccolo passo e inizialo adesso"]
    }
  },
  {
    id: "stuck-08", type: "stuck", duration: 15,
    en: {
      title: "Write where you're stuck. Build a 3-step plan. Do step 1.",
      description: "Identify the block. Map the exit. Move.",
      steps: ["Write: 'I'm stuck on ___ because ___'", "Write 3 specific steps that would get you unstuck", "Circle step 1 — the smallest one", "Do step 1 right now for 5 minutes minimum"]
    },
    it: {
      title: "Scrivi dove sei bloccato. Costruisci un piano in 3 passi. Fai il passo 1.",
      description: "Identifica il blocco. Mappa l'uscita. Muoviti.",
      steps: ["Scrivi: 'Sono bloccato su ___ perché ___'", "Scrivi 3 passi specifici che ti sbloccherebbero", "Cerchia il passo 1 — il più piccolo", "Fai il passo 1 adesso per almeno 5 minuti"]
    }
  },
  {
    id: "stuck-09", type: "stuck", duration: 15,
    en: {
      title: "Write the block. Research one solution. Apply it.",
      description: "Name it. Find an answer. Use it.",
      steps: ["Write: 'I'm blocked on ___ because ___'", "Search online for: 'how to get unstuck with ___' — use your specific block", "Read one result — pick one idea from it", "Apply that idea immediately for the remaining time"]
    },
    it: {
      title: "Scrivi il blocco. Cerca una soluzione. Applicala.",
      description: "Nominalo. Trova una risposta. Usala.",
      steps: ["Scrivi: 'Sono bloccato su ___ perché ___'", "Cerca online: 'come sbloccarsi con ___' — usa il tuo blocco specifico", "Leggi un risultato — scegli un'idea da esso", "Applica quell'idea subito per il tempo rimanente"]
    }
  },
  {
    id: "stuck-10", type: "stuck", duration: 15,
    en: {
      title: "The smallest version",
      description: "You're stuck on the big version. Do the small one.",
      steps: ["Write down the full thing you're trying to do", "Strip it down to its smallest possible form", "Do only that stripped-down version right now", "Decide whether to expand after you finish"]
    },
    it: {
      title: "La versione più piccola",
      description: "Sei bloccato sulla versione grande. Fai quella piccola.",
      steps: ["Scrivi la cosa intera che stai cercando di fare", "Riducila alla forma più piccola possibile", "Fai solo quella versione ridotta adesso", "Decidi se espandere dopo aver finito"]
    }
  },
  {
    id: "training-08", type: "training", duration: 15,
    en: {
      title: "15 minutes of non-stop movement",
      description: "Choose one movement. Do it without stopping.",
      steps: ["Pick one: fast walking, jumping jacks, jogging in place, or cycling", "Set a 15-minute timer", "Keep moving — no pausing, no checking your phone", "Stop only when the timer rings"]
    },
    it: {
      title: "15 minuti di movimento continuo",
      description: "Scegli un movimento. Fallo senza fermarti.",
      steps: ["Scegli uno: camminata veloce, jumping jack, corsa sul posto, o bici", "Imposta un timer da 15 minuti", "Continua a muoverti — senza pause, senza controllare il telefono", "Fermati solo quando suona il timer"]
    }
  },
  {
    id: "training-09", type: "training", duration: 15,
    en: {
      title: "Superset circuit",
      description: "Two exercises, back to back, no rest between them.",
      steps: ["Pick two exercises you know (e.g. push-ups + squats)", "Do 10 reps of each, back to back", "Rest 60 seconds", "Repeat for 15 minutes total"]
    },
    it: {
      title: "Circuito superset",
      description: "Due esercizi, uno dopo l'altro, senza pausa tra loro.",
      steps: ["Scegli due esercizi che conosci (es. flessioni + squat)", "Fai 10 ripetizioni di ognuno, uno dopo l'altro", "Riposa 60 secondi", "Ripeti per 15 minuti totali"]
    }
  },
  {
    id: "training-10", type: "training", duration: 15,
    en: {
      title: "Active recovery — 15 minutes",
      description: "Not every session is hard. This one just needs to happen.",
      steps: ["Put on comfortable clothes or shoes", "Go outside or clear space indoors", "Walk, stretch, or move gently for 15 minutes — no timer pressure", "When done: drink water and sit down for 2 minutes before anything else"]
    },
    it: {
      title: "Recupero attivo — 15 minuti",
      description: "Non ogni sessione è intensa. Questa deve solo avvenire.",
      steps: ["Indossa abiti comodi o metti le scarpe", "Esci o libera uno spazio in casa", "Cammina, allunga o muoviti dolcemente per 15 minuti — senza pressione", "Quando finisci: bevi acqua e siediti per 2 minuti prima di qualsiasi altra cosa"]
    }
  },
  {
    id: "decision-08", type: "decision", duration: 15,
    en: {
      title: "Inversion test",
      description: "Sometimes you find clarity by thinking backwards.",
      steps: ["Write the decision you're avoiding", "Write what the worst possible choice would look like", "Ask: am I avoiding this because it resembles that?", "Write what the opposite of the worst looks like", "Choose in that direction"]
    },
    it: {
      title: "Test di inversione",
      description: "A volte trovi chiarezza pensando al contrario.",
      steps: ["Scrivi la decisione che stai evitando", "Scrivi com'è la scelta peggiore possibile", "Chiediti: la sto evitando perché assomiglia a quella?", "Scrivi com'è l'opposto del peggio", "Scegli in quella direzione"]
    }
  },
  {
    id: "decision-09", type: "decision", duration: 15,
    en: {
      title: "Pre-mortem",
      description: "Imagine you chose wrong. Work backwards.",
      steps: ["Pick the option you're leaning toward", "Write: 'It's 1 year later and this went badly. Why?'", "List every reason it could fail", "Decide if those risks are manageable or dealbreakers", "Choose or eliminate based on what you wrote"]
    },
    it: {
      title: "Pre-mortem",
      description: "Immagina di aver scelto male. Lavora a ritroso.",
      steps: ["Scegli l'opzione verso cui ti inclini", "Scrivi: 'È passato 1 anno e è andata male. Perché?'", "Elenca tutti i motivi per cui potrebbe fallire", "Decidi se quei rischi sono gestibili o insormontabili", "Scegli o elimina in base a ciò che hai scritto"]
    }
  },
  {
    id: "decision-10", type: "decision", duration: 15,
    en: {
      title: "Values alignment",
      description: "The right decision aligns with what actually matters to you.",
      steps: ["Write your top 3 values in this area of life", "Score each option from 1–5 on how well it fits each value", "Add the scores", "The highest score is probably your answer", "If you feel resistance to it — that's the real information"]
    },
    it: {
      title: "Allineamento ai valori",
      description: "La decisione giusta si allinea a ciò che conta davvero per te.",
      steps: ["Scrivi i tuoi 3 valori principali in quest'area della vita", "Valuta ogni opzione da 1 a 5 su quanto si adatta a ogni valore", "Somma i punteggi", "Il punteggio più alto è probabilmente la tua risposta", "Se senti resistenza — quella è l'informazione vera"]
    }
  },
  {
    id: "thinking-08", type: "thinking", duration: 15,
    en: {
      title: "Write the thought fully. Close with one action.",
      description: "15 minutes to get it all out — then pick one move.",
      steps: ["Open a notebook or doc. Write the thought at the top.", "Write everything connected to it — fears, questions, context — for 10 minutes", "Read what you wrote. Underline the most important line.", "Write: 'Given all this, the one action I will take is ___' — and do it before closing the page"]
    },
    it: {
      title: "Scrivi il pensiero per intero. Chiudi con un'azione.",
      description: "15 minuti per tirare fuori tutto — poi scegli una mossa.",
      steps: ["Apri un quaderno o documento. Scrivi il pensiero in cima.", "Scrivi tutto ciò che è collegato — paure, domande, contesto — per 10 minuti", "Rileggi ciò che hai scritto. Sottolinea la riga più importante.", "Scrivi: 'Dato tutto questo, l'azione che farò è ___' — e falla prima di chiudere la pagina"]
    }
  },
  {
    id: "thinking-09", type: "thinking", duration: 15,
    en: {
      title: "Worst case, best case, likely case",
      description: "Most anxiety lives between best and worst. Write the likely.",
      steps: ["Write the thought that's looping", "Write the absolute worst outcome in detail", "Write the absolute best outcome in detail", "Write the most realistic outcome", "Spend the rest of the time on what to do given the realistic case"]
    },
    it: {
      title: "Caso peggiore, migliore, più probabile",
      description: "La maggior parte dell'ansia vive tra il meglio e il peggio. Scrivi il probabile.",
      steps: ["Scrivi il pensiero che gira in tondo", "Scrivi il risultato assolutamente peggiore in dettaglio", "Scrivi il risultato assolutamente migliore in dettaglio", "Scrivi il risultato più realistico", "Spendi il resto del tempo su cosa fare dato il caso realistico"]
    }
  },

  // ── TRUTH MODE: reason-specific activities ────────────────────
  // reason values: too_difficult | dont_feel_like | afraid |
  //                dont_know_start | not_important | feel_stuck

  // — too_difficult ─────────────────────────────────────────────
  {
    id: "tm-diff-01", type: "work", reason: "too_difficult", duration: 5,
    en: {
      title: "Do the first 5% only",
      description: "Don't think about the whole task. Find its first 5%.",
      steps: ["Open the file, document, or tool", "Write a title or label — just that", "Add one bullet point or one line", "Stop — you've started"]
    },
    it: {
      title: "Fai solo il primo 5%",
      description: "Non pensare all'intero compito. Trova il suo primo 5%.",
      steps: ["Apri il file, documento o strumento", "Scrivi un titolo o un'etichetta — solo quello", "Aggiungi un punto elenco o una riga", "Fermati — hai iniziato"]
    }
  },
  {
    id: "tm-diff-02", type: "work", reason: "too_difficult", duration: 10,
    en: {
      title: "Find the step before the hard part",
      description: "The difficult part is rarely first. Find what comes before it.",
      steps: ["Write in one sentence what feels too hard", "Write: 'What would I need to do before that hard part?'", "Write that easier step", "Do it now — 10 minutes, nothing else"]
    },
    it: {
      title: "Trova il passo prima della parte difficile",
      description: "La parte difficile raramente viene per prima. Trova cosa viene prima.",
      steps: ["Scrivi in una frase cosa sembra troppo difficile", "Scrivi: 'Cosa dovrei fare prima di quella parte difficile?'", "Scrivi quel passo più semplice", "Fallo adesso — 10 minuti, nient'altro"]
    }
  },
  {
    id: "tm-diff-03", type: "decision", reason: "too_difficult", duration: 10,
    en: {
      title: "Write the two options in plain words. Choose.",
      description: "Hard decisions stay hard because you keep them vague.",
      steps: ["Write Option A in one simple sentence (no jargon)", "Write Option B in one simple sentence", "Write which one you'd regret more in 12 months", "Choose the one you'd regret less. Write it down."]
    },
    it: {
      title: "Scrivi le due opzioni in parole semplici. Scegli.",
      description: "Le decisioni difficili restano difficili perché le tieni vaghe.",
      steps: ["Scrivi l'opzione A in una frase semplice (senza tecnicismi)", "Scrivi l'opzione B in una frase semplice", "Scrivi quale rimpianta di più tra 12 mesi", "Scegli quella che rimpianta meno. Scrivila."]
    }
  },
  {
    id: "tm-diff-04", type: "training", reason: "too_difficult", duration: 5,
    en: {
      title: "Easy version — no compromise",
      description: "You don't need to do the hard version. You need to move.",
      steps: ["Forget your normal workout", "Do exactly this: 5 push-ups, 10 squats, 5 push-ups", "That's it. That's the session.", "It counts. You did it."]
    },
    it: {
      title: "Versione facile — senza compromessi",
      description: "Non hai bisogno di fare la versione difficile. Hai bisogno di muoverti.",
      steps: ["Dimentica il tuo allenamento normale", "Fai esattamente questo: 5 flessioni, 10 squat, 5 flessioni", "È tutto. Questo è l'allenamento.", "Conta. L'hai fatto."]
    }
  },

  // — dont_feel_like ─────────────────────────────────────────────
  {
    id: "tm-dfl-01", type: "work", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Open it. Do one thing. That's it.",
      description: "You don't need to want to do it. You need to open it.",
      steps: ["Open the task — the file, the doc, the tool", "Do the single most obvious action", "Stop after 5 minutes — you've beaten the resistance"]
    },
    it: {
      title: "Aprilo. Fai una cosa. Basta.",
      description: "Non hai bisogno di volerlo fare. Hai bisogno di aprirlo.",
      steps: ["Apri il compito — il file, il documento, lo strumento", "Fai la singola azione più ovvia", "Fermati dopo 5 minuti — hai vinto la resistenza"]
    }
  },
  {
    id: "tm-dfl-02", type: "work", reason: "dont_feel_like", duration: 10,
    en: {
      title: "10 minutes, then you can stop",
      description: "You're allowed to stop after 10 minutes. But start first.",
      steps: ["Set a timer for exactly 10 minutes", "Open the task and work — no quality bar, just work", "When the timer rings, stop or keep going — your call"]
    },
    it: {
      title: "10 minuti, poi puoi smettere",
      description: "Puoi smettere dopo 10 minuti. Ma prima inizia.",
      steps: ["Imposta un timer esatto di 10 minuti", "Apri il compito e lavora — nessun standard di qualità, lavora e basta", "Quando suona il timer, smetti o continua — decidi tu"]
    }
  },
  {
    id: "tm-dfl-03", type: "training", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Shoes on. Out the door.",
      description: "You don't have to feel ready. You have to get moving.",
      steps: ["Put on your shoes. Don't change into sports clothes yet if that feels like too much.", "Step outside or stand up in a space with room to move", "Do 5 minutes of walking or any movement", "After 5 minutes, decide if you want to continue or do a quick circuit"]
    },
    it: {
      title: "Scarpe ai piedi. Fuori dalla porta.",
      description: "Non devi sentirti pronto. Devi muoverti.",
      steps: ["Metti le scarpe. Non cambiarti ancora in abbigliamento sportivo se sembra troppo.", "Esci o alzati in uno spazio dove puoi muoverti", "Fai 5 minuti di camminata o qualsiasi movimento", "Dopo 5 minuti, decidi se continuare o fare un circuito veloce"]
    }
  },
  {
    id: "tm-dfl-04", type: "thinking", reason: "dont_feel_like", duration: 5,
    en: {
      title: "5 minutes. Timer. Write. Stop.",
      description: "No motivation needed. Just the timer and the page.",
      steps: ["Set a timer for 5 minutes", "Write the first thing that comes to mind about it — no editing", "Keep writing until the timer rings", "Stop. Close the notebook. Done."]
    },
    it: {
      title: "5 minuti. Timer. Scrivi. Stop.",
      description: "Non serve motivazione. Solo il timer e la pagina.",
      steps: ["Imposta un timer da 5 minuti", "Scrivi la prima cosa che ti viene in mente al riguardo — senza modificare", "Continua a scrivere fino allo scadere del timer", "Fermati. Chiudi il quaderno. Fatto."]
    }
  },

  // — afraid ─────────────────────────────────────────────────────
  {
    id: "tm-fear-01", type: "work", reason: "afraid", duration: 5,
    en: {
      title: "Name the fear. Do the first step.",
      description: "Fear is strongest before you start. Start.",
      steps: ["Write in one sentence what you're afraid of about this task", "Write the first step that needs no bravery — just a physical action", "Do that step now", "Do the second step"]
    },
    it: {
      title: "Nomina la paura. Fai il primo passo.",
      description: "La paura è più forte prima di iniziare. Inizia.",
      steps: ["Scrivi in una frase di cosa hai paura riguardo a questo compito", "Scrivi il primo passo che non richiede coraggio — solo un'azione fisica", "Fai quel passo adesso", "Fai il secondo passo"]
    }
  },
  {
    id: "tm-fear-02", type: "decision", reason: "afraid", duration: 10,
    en: {
      title: "Name exactly what you're afraid will happen",
      description: "Vague fear is harder to handle than named fear.",
      steps: ["Write: 'I'm afraid that if I decide this, then...'", "Write the full worst-case scenario — specifically", "Write how likely that outcome actually is, as a percentage", "Write what you'd do if it happened", "Make the decision — you've seen the worst and you can handle it"]
    },
    it: {
      title: "Nomina esattamente cosa hai paura che accada",
      description: "La paura vaga è più difficile da gestire di quella nominata.",
      steps: ["Scrivi: 'Ho paura che se decido questo, allora...'", "Scrivi lo scenario peggiore completo — in modo specifico", "Scrivi quanto è realisticamente probabile quell'esito, come percentuale", "Scrivi cosa faresti se accadesse", "Prendi la decisione — hai visto il peggio e puoi gestirlo"]
    }
  },
  {
    id: "tm-fear-03", type: "thinking", reason: "afraid", duration: 10,
    en: {
      title: "Write the fear out fully. Then decide one action.",
      description: "Get it on paper. Then pick one move.",
      steps: ["Write: 'The thing I've been afraid to face is...'", "Write everything connected to it — don't stop when it gets uncomfortable", "Write: 'If the worst happened, I would do ___'", "Write: 'The one action I can take right now is ___' — and do it"]
    },
    it: {
      title: "Scrivi la paura per intero. Poi scegli un'azione.",
      description: "Mettila su carta. Poi scegli una mossa.",
      steps: ["Scrivi: 'La cosa di cui ho paura di affrontare è...'", "Scrivi tutto ciò che è collegato — non fermarti quando diventa scomodo", "Scrivi: 'Se accadesse il peggio, farei ___'", "Scrivi: 'L'azione che posso fare adesso è ___' — e falla"]
    }
  },
  {
    id: "tm-fear-04", type: "training", reason: "afraid", duration: 5,
    en: {
      title: "Move first. Think after.",
      description: "Physical movement reduces fear faster than reasoning does.",
      steps: ["Don't plan anything", "Stand up right now", "Walk, pace, or do 10 jumping jacks — immediately", "Keep moving for 5 minutes without thinking about the workout"]
    },
    it: {
      title: "Prima muoviti. Poi pensa.",
      description: "Il movimento fisico riduce la paura più velocemente del ragionamento.",
      steps: ["Non pianificare niente", "Alzati adesso", "Cammina, pattina, o fai 10 jumping jack — subito", "Continua a muoverti per 5 minuti senza pensare all'allenamento"]
    }
  },

  // — dont_know_start ────────────────────────────────────────────
  {
    id: "tm-dns-01", type: "work", reason: "dont_know_start", duration: 5,
    en: {
      title: "Write what you don't want. That narrows it.",
      description: "You don't need to know what you want. Rule out what you don't.",
      steps: ["Write 3 work situations you definitely don't want", "Write 1 thing that felt easy or natural in past work or school", "Open LinkedIn and search that easy thing as a keyword", "Read the first result — you're looking, not deciding"]
    },
    it: {
      title: "Scrivi cosa non vuoi. Questo restringe il campo.",
      description: "Non devi sapere cosa vuoi. Elimina prima ciò che non vuoi.",
      steps: ["Scrivi 3 situazioni lavorative che non vuoi di sicuro", "Scrivi 1 cosa che ti veniva facile o naturale nel lavoro o scuola", "Apri LinkedIn e cerca quella cosa come parola chiave", "Leggi il primo risultato — stai guardando, non decidendo"]
    }
  },
  {
    id: "tm-dns-02", type: "work", reason: "dont_know_start", duration: 10,
    en: {
      title: "Look at real jobs. Note your reactions.",
      description: "Your gut response to job listings tells you more than any quiz.",
      steps: ["Open LinkedIn or Google Jobs", "Search any broad term: 'marketing', 'operations', 'support', 'data', or 'design'", "Read 5 posts fully — don't apply, just read each description", "Write next to each: 'yes / no / maybe' — gut reaction only", "Look at your maybes — search more of those tomorrow"]
    },
    it: {
      title: "Guarda lavori reali. Annota le tue reazioni.",
      description: "La tua reazione viscerale alle offerte ti dice più di qualsiasi quiz.",
      steps: ["Apri LinkedIn o Google Jobs", "Cerca un termine ampio: 'marketing', 'operations', 'supporto', 'dati', o 'design'", "Leggi 5 offerte per intero — non candidarti, leggi solo le descrizioni", "Scrivi accanto a ognuna: 'sì / no / forse' — solo di pancia", "Guarda i tuoi 'forse' — cercane altri domani"]
    }
  },
  {
    id: "tm-dns-03", type: "decision", reason: "dont_know_start", duration: 5,
    en: {
      title: "Write the decision. Write one next action.",
      description: "You don't need the full picture. You need one move.",
      steps: ["Write the decision you're facing in one sentence", "Write: 'The one next action that would move this forward is...'", "Do that action right now — don't skip to planning the rest"]
    },
    it: {
      title: "Scrivi la decisione. Scrivi una prossima azione.",
      description: "Non hai bisogno del quadro completo. Hai bisogno di una mossa.",
      steps: ["Scrivi la decisione che stai affrontando in una frase", "Scrivi: 'La prossima azione che farebbe avanzare questo è...'", "Fai quell'azione adesso — non saltare a pianificare il resto"]
    }
  },
  {
    id: "tm-dns-04", type: "stuck", reason: "dont_know_start", duration: 10,
    en: {
      title: "Walk somewhere you've never walked before.",
      description: "Not to think. Just to break the pattern of same place, same thoughts.",
      steps: ["Leave where you are and walk in a direction you don't usually take", "Walk for at least 8 minutes — no destination required", "Look at what's around you: buildings, people, small details you've never noticed", "Write one sentence when you return: 'One thing I noticed that I've never paid attention to before is ___'"]
    },
    it: {
      title: "Cammina in un posto dove non sei mai stato.",
      description: "Non per pensare. Solo per rompere il pattern di stesso posto, stessi pensieri.",
      steps: ["Lascia dove sei e cammina in una direzione che non prendi di solito", "Cammina per almeno 8 minuti — nessuna destinazione richiesta", "Guarda cosa c'è intorno: edifici, persone, piccoli dettagli che non hai mai notato", "Scrivi una frase quando torni: 'Una cosa che ho notato e a cui non avevo mai prestato attenzione è ___'"]
    }
  },

  // — not_important ──────────────────────────────────────────────
  {
    id: "tm-ni-01", type: "work", reason: "not_important", duration: 5,
    en: {
      title: "Do it now, imperfectly, and it's gone",
      description: "Low-importance tasks drain energy by staying on the list.",
      steps: ["Set a 5-minute timer", "Do the task at 70% quality — done is the standard", "Mark it complete", "Delete it from the list or close the tab"]
    },
    it: {
      title: "Fallo adesso, in modo imperfetto, e sparisce",
      description: "I compiti poco importanti consumano energia restando in lista.",
      steps: ["Imposta un timer da 5 minuti", "Fai il compito al 70% di qualità — fatto è lo standard", "Segnalo completato", "Cancellalo dalla lista o chiudi la scheda"]
    }
  },
  {
    id: "tm-ni-02", type: "decision", reason: "not_important", duration: 5,
    en: {
      title: "Decide in 30 seconds",
      description: "Low-stakes decisions don't deserve more than 30 seconds.",
      steps: ["Read the options once", "Pick the first one that comes to mind", "Commit to it — write 'decided: ___'", "Move on immediately. Don't revisit."]
    },
    it: {
      title: "Decidi in 30 secondi",
      description: "Le decisioni a basse conseguenze non meritano più di 30 secondi.",
      steps: ["Leggi le opzioni una volta", "Scegli la prima che ti viene in mente", "Impegnati — scrivi 'deciso: ___'", "Vai avanti subito. Non tornare indietro."]
    }
  },
  {
    id: "tm-ni-03", type: "thinking", reason: "not_important", duration: 5,
    en: {
      title: "Check: does this actually matter?",
      description: "Spending 5 minutes to confirm it doesn't matter saves hours.",
      steps: ["Write: 'If I don't do this, what actually happens?'", "Write: 'Does that outcome matter in 3 months?'", "If no: delete it from your list right now", "If yes: do it now and clear it"]
    },
    it: {
      title: "Verifica: conta davvero?",
      description: "Spendere 5 minuti per confermare che non conta risparmia ore.",
      steps: ["Scrivi: 'Se non lo faccio, cosa succede davvero?'", "Scrivi: 'Quell'esito conta tra 3 mesi?'", "Se no: cancellalo dalla lista adesso", "Se sì: fallo adesso e liberatene"]
    }
  },

  // — feel_stuck ─────────────────────────────────────────────────
  {
    id: "tm-stuck-01", type: "work", reason: "feel_stuck", duration: 5,
    en: {
      title: "Name it. Then do the mechanical part.",
      description: "First understand what's stuck. Then move your hands.",
      steps: ["Write one sentence: 'I'm stuck on ___ because ___'", "Open the task", "Find the most mechanical part — copy, format, move, type", "Do that part without deciding anything"]
    },
    it: {
      title: "Nominalo. Poi fai la parte meccanica.",
      description: "Prima capisci cosa blocca. Poi muovi le mani.",
      steps: ["Scrivi una frase: 'Sono bloccato su ___ perché ___'", "Apri il compito", "Trova la parte più meccanica — copia, formatta, sposta, scrivi", "Fai quella parte senza decidere niente"]
    }
  },
  {
    id: "tm-stuck-02", type: "thinking", reason: "feel_stuck", duration: 10,
    en: {
      title: "Write until the block breaks",
      description: "Being stuck in your head ends when you put it on paper.",
      steps: ["Open a blank page or notebook", "Write: 'I'm stuck because...' — keep writing. Don't stop.", "Write: 'The one thing I could do right now, even if imperfect, is...'", "Do that one thing immediately"]
    },
    it: {
      title: "Scrivi finché il blocco non si rompe",
      description: "Essere bloccati in testa finisce quando lo metti su carta.",
      steps: ["Apri una pagina bianca o un quaderno", "Scrivi: 'Sono bloccato perché...' — continua a scrivere. Non fermarti.", "Scrivi: 'La cosa che potrei fare adesso, anche se imperfetta, è...'", "Fai quella cosa immediatamente"]
    }
  },
  {
    id: "tm-stuck-03", type: "stuck", reason: "feel_stuck", duration: 10,
    en: {
      title: "You don't need answers. You need to move.",
      description: "Staying in the same place keeps the same thoughts running.",
      steps: ["Leave where you are — go outside, to a café, or anywhere you don't usually go", "Stay for 10 minutes without your phone open", "Notice one thing you haven't paid attention to before — a sound, a detail, a person", "Write one sentence: what did you notice, and what did it make you think of?"]
    },
    it: {
      title: "Non ti servono risposte. Ti serve muoverti.",
      description: "Restare nello stesso posto fa girare gli stessi pensieri.",
      steps: ["Lascia dove sei — esci fuori, vai in un bar, o in qualsiasi posto che non frequenti di solito", "Resta lì per 10 minuti senza aprire il telefono", "Nota una cosa a cui non hai mai prestato attenzione — un suono, un dettaglio, una persona", "Scrivi una frase: cosa hai notato, e a cosa ti ha fatto pensare?"]
    }
  },
  {
    id: "tm-stuck-04", type: "decision", reason: "feel_stuck", duration: 10,
    en: {
      title: "You're stuck because you already know the answer",
      description: "Being stuck on a decision usually means one option is already winning.",
      steps: ["Write both options", "Write: 'The one I keep coming back to is...'", "Write: 'The reason I'm resisting it is...'", "Ask: is that reason real, or is it fear?", "Choose the option you keep returning to"]
    },
    it: {
      title: "Sei bloccato perché sai già la risposta",
      description: "Essere bloccati su una decisione significa spesso che un'opzione sta già vincendo.",
      steps: ["Scrivi entrambe le opzioni", "Scrivi: 'Quella a cui continuo a tornare è...'", "Scrivi: 'Il motivo per cui mi sto resistendo è...'", "Chiediti: quel motivo è reale, o è paura?", "Scegli l'opzione a cui continui a tornare"]
    }
  },

  // ── ADDITIONAL REASON VARIANTS (2nd and 3rd options per slot) ─
  // These exist solely to give pickDifferentActivity enough pool
  // depth so it never widens to generic tasks.

  // — dont_know_start: work ─────────────────────────────────────
  {
    id: "tm-dns-01b", type: "work", reason: "dont_know_start", duration: 5,
    en: {
      title: "Find one job that doesn't make you say no.",
      description: "Not the right job. Just one that doesn't feel obviously wrong.",
      steps: ["Open LinkedIn", "Search any broad word: 'coordinator', 'analyst', 'assistant', or 'specialist'", "Scroll 10 posts — skip anything that clearly doesn't fit", "Save the one post that didn't make you scroll past immediately"]
    },
    it: {
      title: "Trova un lavoro che non ti faccia dire no.",
      description: "Non quello giusto. Solo uno che non sembri ovviamente sbagliato.",
      steps: ["Apri LinkedIn", "Cerca una parola ampia qualsiasi: 'coordinatore', 'analista', 'assistente', o 'specialista'", "Scorri 10 offerte — salta quelle che chiaramente non fanno per te", "Salva l'unica che non ti ha fatto scorrere subito"]
    }
  },
  {
    id: "tm-dns-01c", type: "work", reason: "dont_know_start", duration: 5,
    en: {
      title: "Write what's come easy to you. Search it.",
      description: "What feels effortless to you is often valuable to others.",
      steps: ["Write 2 tasks that don't feel like work to you — anything", "Pick the one that sounds more like a job skill", "Search that on Google: '___ jobs' or 'career in ___'", "Read one result — you're exploring, not committing"]
    },
    it: {
      title: "Scrivi cosa ti viene facile. Cercalo.",
      description: "Ciò che per te è senza sforzo è spesso prezioso per gli altri.",
      steps: ["Scrivi 2 cose che non ti sembrano fatica — qualsiasi cosa", "Scegli quella che suona di più come una competenza lavorativa", "Cercala su Google: 'lavori ___' o 'carriera in ___'", "Leggi un risultato — stai esplorando, non decidendo"]
    }
  },
  {
    id: "tm-dns-02b", type: "work", reason: "dont_know_start", duration: 10,
    en: {
      title: "Read one person's career path. See if anything resonates.",
      description: "Real examples are clearer than abstract career advice.",
      steps: ["Open LinkedIn", "Search a broad job title that vaguely interests you", "Click on 2 profiles of people with that role", "Read their career history — note anything that sounds tolerable or interesting", "Write: 'One thing I could see myself doing is ___'"]
    },
    it: {
      title: "Leggi il percorso di carriera di qualcuno. Vedi se risuona.",
      description: "Gli esempi reali sono più chiari di qualsiasi consiglio astratto.",
      steps: ["Apri LinkedIn", "Cerca un titolo di lavoro ampio che ti interessa vagamente", "Clicca su 2 profili di persone con quel ruolo", "Leggi la loro storia lavorativa — annota qualcosa che sembra tollerabile o interessante", "Scrivi: 'Una cosa che potrei vedermi fare è ___'"]
    }
  },
  {
    id: "tm-dns-02c", type: "work", reason: "dont_know_start", duration: 10,
    en: {
      title: "Search what you don't want. Find the opposite.",
      description: "Knowing what to avoid is the fastest way to find what to try.",
      steps: ["Write 3 jobs or roles that sound unappealing to you", "For each, write the opposite quality — what that job lacks that you'd want", "Take those 3 qualities and search them on LinkedIn: 'jobs with ___'", "Read 3 results and note which sector they come from"]
    },
    it: {
      title: "Cerca cosa non vuoi. Trova il contrario.",
      description: "Sapere cosa evitare è il modo più rapido per trovare cosa provare.",
      steps: ["Scrivi 3 lavori o ruoli che ti sembrano poco attraenti", "Per ognuno, scrivi la qualità opposta — cosa manca a quel lavoro che tu vorresti", "Prendi quelle 3 qualità e cercale su LinkedIn: 'lavori con ___'", "Leggi 3 risultati e annota da quale settore vengono"]
    }
  },

  // — dont_know_start: decision ─────────────────────────────────
  {
    id: "tm-dns-03b", type: "decision", reason: "dont_know_start", duration: 5,
    en: {
      title: "List what you know. Pick the next step.",
      description: "You have more information than you think.",
      steps: ["Write every fact you already know about this decision", "Write: 'The thing I'm missing before I can decide is...'", "Write the one action that would get you that information", "Do it now"]
    },
    it: {
      title: "Elenca cosa sai. Scegli il passo successivo.",
      description: "Hai più informazioni di quanto pensi.",
      steps: ["Scrivi ogni fatto che già conosci su questa decisione", "Scrivi: 'La cosa che mi manca prima di poter decidere è...'", "Scrivi l'azione che ti darebbe quell'informazione", "Falla adesso"]
    }
  },
  {
    id: "tm-dns-03c", type: "decision", reason: "dont_know_start", duration: 5,
    en: {
      title: "Ask yourself: what would I tell a friend?",
      description: "Advice is easier when it's not about you.",
      steps: ["Write the decision as if a friend asked you for help with it", "Write what you'd tell them to do", "Read it back", "Follow your own advice — write the first action and do it"]
    },
    it: {
      title: "Chiediti: cosa direi a un amico?",
      description: "Il consiglio è più facile quando non riguarda te.",
      steps: ["Scrivi la decisione come se un amico ti chiedesse aiuto con essa", "Scrivi cosa gli diresti di fare", "Rileggilo", "Segui il tuo stesso consiglio — scrivi la prima azione e falla"]
    }
  },

  // — dont_know_start: stuck ────────────────────────────────────
  {
    id: "tm-dns-04b", type: "stuck", reason: "dont_know_start", duration: 15,
    en: {
      title: "Talk to someone outside your usual circle.",
      description: "People you always talk to reflect back what you already think.",
      steps: ["Think of someone you haven't spoken to in a while — not a close friend, someone more distant", "Send them a message: 'Hey, how are things going for you?' — no agenda, just ask", "If they respond: listen. If not: find a podcast or interview with someone whose life looks different from yours and listen for 10 minutes", "Write one sentence: 'Something I heard that I hadn't considered before is ___'"]
    },
    it: {
      title: "Parla con qualcuno fuori dalla tua cerchia abituale.",
      description: "Le persone con cui parli sempre riflettono ciò che già pensi.",
      steps: ["Pensa a qualcuno con cui non hai parlato da un po' — non un amico stretto, qualcuno di più distante", "Mandagli un messaggio: 'Ciao, come vanno le cose?' — nessun obiettivo, chiedi soltanto", "Se risponde: ascolta. Se no: trova un podcast o un'intervista con qualcuno la cui vita sembra diversa dalla tua e ascolta per 10 minuti", "Scrivi una frase: 'Una cosa che ho sentito e che non avevo considerato prima è ___'"]
    }
  },
  {
    id: "tm-dns-04c", type: "stuck", reason: "dont_know_start", duration: 10,
    en: {
      title: "Do something with your hands. No screen.",
      description: "The brain loosens when the hands are busy and the screen is off.",
      steps: ["Pick any physical task that takes no thinking: wash dishes, fold laundry, cook something simple, draw anything, rearrange a shelf", "Do it for 10 minutes — no phone, no music with lyrics", "Don't try to think about the situation — let it run in the background", "When done, write one sentence: 'Something that came to mind while I was doing that is ___'"]
    },
    it: {
      title: "Fai qualcosa con le mani. Senza schermi.",
      description: "Il cervello si allenta quando le mani sono occupate e lo schermo è spento.",
      steps: ["Scegli qualsiasi compito fisico che non richiede pensiero: lava i piatti, piega il bucato, cucina qualcosa di semplice, disegna qualcosa, riorganizza uno scaffale", "Fallo per 10 minuti — senza telefono, senza musica con testi", "Non cercare di pensare alla situazione — lasciala girare in sottofondo", "Quando hai finito, scrivi una frase: 'Una cosa che mi è venuta in mente mentre lo facevo è ___'"]
    }
  },

  // — dont_feel_like: work ──────────────────────────────────────
  {
    id: "tm-dfl-01b", type: "work", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Set the timer. Do one thing. Stop.",
      description: "No motivation required. Timer only.",
      steps: ["Set a timer for 5 minutes", "Open the most concrete task on your list", "Do it until the timer rings", "Stop completely — done"]
    },
    it: {
      title: "Imposta il timer. Fai una cosa. Stop.",
      description: "Nessuna motivazione richiesta. Solo il timer.",
      steps: ["Imposta un timer da 5 minuti", "Apri il compito più concreto della lista", "Fallo fino allo scadere del timer", "Fermati completamente — fatto"]
    }
  },
  {
    id: "tm-dfl-01c", type: "work", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Send one message you've been delaying.",
      description: "One message. No thinking. Send it.",
      steps: ["Open email, Slack, or WhatsApp", "Find the message you've been putting off", "Write 2 sentences. Send it.", "Close the app"]
    },
    it: {
      title: "Invia un messaggio che hai rimandato.",
      description: "Un messaggio. Senza pensare. Invialo.",
      steps: ["Apri email, Slack o WhatsApp", "Trova il messaggio che hai rimandato", "Scrivi 2 frasi. Invialo.", "Chiudi l'app"]
    }
  },
  {
    id: "tm-dfl-02b", type: "work", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Close everything. Work on one file for 10 minutes.",
      description: "One tab. One task. No decisions.",
      steps: ["Close every tab except the one you need", "Turn off all notifications", "Set a 10-minute timer", "Work on only that file until it rings"]
    },
    it: {
      title: "Chiudi tutto. Lavora su un file per 10 minuti.",
      description: "Una scheda. Un compito. Nessuna decisione.",
      steps: ["Chiudi ogni scheda tranne quella che ti serve", "Disattiva tutte le notifiche", "Imposta un timer da 10 minuti", "Lavora solo su quel file fino alla fine"]
    }
  },
  {
    id: "tm-dfl-02c", type: "work", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Clear 3 emails. Then stop.",
      description: "Small output. Real progress.",
      steps: ["Open your inbox", "Find the 3 most overdue emails", "Reply to each in 2 sentences", "Send all 3 and close your inbox"]
    },
    it: {
      title: "Svuota 3 email. Poi basta.",
      description: "Output piccolo. Progresso reale.",
      steps: ["Apri la posta in arrivo", "Trova le 3 email più in ritardo", "Rispondi a ognuna in 2 frasi", "Invia tutte e 3 e chiudi la posta"]
    }
  },

  // — dont_feel_like: training ──────────────────────────────────
  {
    id: "tm-dfl-03b", type: "training", reason: "dont_feel_like", duration: 10,
    en: {
      title: "10 squats. 10 push-ups. Repeat twice.",
      description: "No setup. No decision. Start now.",
      steps: ["Stand up right now", "10 squats — slow down, fast up", "10 push-ups — any variation counts", "Repeat the two exercises once more"]
    },
    it: {
      title: "10 squat. 10 flessioni. Ripeti due volte.",
      description: "Nessuna preparazione. Nessuna decisione. Inizia adesso.",
      steps: ["Alzati adesso", "10 squat — scendi lento, su veloce", "10 flessioni — qualsiasi variante va bene", "Ripeti i due esercizi ancora una volta"]
    }
  },
  {
    id: "tm-dfl-03c", type: "training", reason: "dont_feel_like", duration: 10,
    en: {
      title: "Walk for 10 minutes. No phone.",
      description: "Just walk. Nothing to think about.",
      steps: ["Put your shoes on", "Leave your phone behind or turn it to silent", "Walk outside at a normal pace for 10 minutes", "Come back and drink water"]
    },
    it: {
      title: "Cammina per 10 minuti. Senza telefono.",
      description: "Solo camminare. Niente a cui pensare.",
      steps: ["Metti le scarpe", "Lascia il telefono o mettilo in silenzio", "Cammina fuori a passo normale per 10 minuti", "Torna e bevi acqua"]
    }
  },

  // — dont_feel_like: thinking ──────────────────────────────────
  {
    id: "tm-dfl-04b", type: "thinking", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Write one sentence. Just one.",
      description: "Not a journal. One honest sentence.",
      steps: ["Open a notebook or notes app", "Write: 'The thing I've been avoiding thinking about is...'", "Finish that one sentence completely", "Close the notebook — done for now"]
    },
    it: {
      title: "Scrivi una frase. Solo una.",
      description: "Non un diario. Una frase onesta.",
      steps: ["Apri un quaderno o l'app note", "Scrivi: 'La cosa che ho evitato di pensare è...'", "Finisci quella frase completamente", "Chiudi il quaderno — basta per ora"]
    }
  },
  {
    id: "tm-dfl-04c", type: "thinking", reason: "dont_feel_like", duration: 5,
    en: {
      title: "Open a note. Write for 5 minutes. Stop.",
      description: "No filter, no structure. Just get it out.",
      steps: ["Open any notes app or a blank page", "Write whatever is on your mind — no editing, no rereading", "Keep writing until the 5 minutes end", "Close the note — done"]
    },
    it: {
      title: "Apri una nota. Scrivi per 5 minuti. Stop.",
      description: "Nessun filtro, nessuna struttura. Tiralo fuori.",
      steps: ["Apri qualsiasi app di note o una pagina bianca", "Scrivi qualunque cosa hai in testa — senza correggere, senza rileggere", "Continua a scrivere fino alla fine dei 5 minuti", "Chiudi la nota — fatto"]
    }
  },

  // — too_difficult: work ───────────────────────────────────────
  {
    id: "tm-diff-01b", type: "work", reason: "too_difficult", duration: 5,
    en: {
      title: "Write one sentence about the task. Nothing else.",
      description: "The start is always smaller than the task.",
      steps: ["Open a blank document or note", "Write one sentence describing what this task is about", "Write the next sentence — what's the goal?", "Stop — you've started"]
    },
    it: {
      title: "Scrivi una frase sul compito. Nient'altro.",
      description: "L'inizio è sempre più piccolo del compito.",
      steps: ["Apri un documento o una nota vuota", "Scrivi una frase che descrive di cosa tratta questo compito", "Scrivi la frase successiva — qual è l'obiettivo?", "Fermati — hai iniziato"]
    }
  },
  {
    id: "tm-diff-01c", type: "work", reason: "too_difficult", duration: 5,
    en: {
      title: "Open the file. Write 3 lines.",
      description: "Three lines is enough to start. More can wait.",
      steps: ["Open the file or document for this task", "Write a title or heading at the top", "Write 3 lines — anything related to this task", "Stop — you're past zero"]
    },
    it: {
      title: "Apri il file. Scrivi 3 righe.",
      description: "Tre righe bastano per iniziare. Il resto può aspettare.",
      steps: ["Apri il file o documento per questo compito", "Scrivi un titolo o intestazione in cima", "Scrivi 3 righe — qualsiasi cosa relativa a questo compito", "Fermati — hai superato lo zero"]
    }
  },
  {
    id: "tm-diff-02b", type: "work", reason: "too_difficult", duration: 10,
    en: {
      title: "Break it into 3 parts. Do part 1.",
      description: "The task isn't one thing. It's three. Start with one.",
      steps: ["Write: 'This task has 3 parts: 1.___ 2.___ 3.___'", "Read part 1 — is it actually hard, or just unfamiliar?", "Work on part 1 only for 10 minutes", "Stop when the timer rings"]
    },
    it: {
      title: "Dividilo in 3 parti. Fai la parte 1.",
      description: "Il compito non è una cosa. Sono tre. Inizia con una.",
      steps: ["Scrivi: 'Questo compito ha 3 parti: 1.___ 2.___ 3.___'", "Leggi la parte 1 — è davvero difficile, o solo sconosciuta?", "Lavora solo sulla parte 1 per 10 minuti", "Fermati quando suona il timer"]
    }
  },
  {
    id: "tm-diff-02c", type: "work", reason: "too_difficult", duration: 10,
    en: {
      title: "Search for one example of this done well.",
      description: "Don't invent from scratch. Find a model.",
      steps: ["Search online for an example of what you're trying to produce", "Find one good example — a template, a sample, a reference", "Open your task file next to it", "Copy the structure (not the content) and fill it in for 10 minutes"]
    },
    it: {
      title: "Cerca un esempio ben fatto.",
      description: "Non inventare da zero. Trova un modello.",
      steps: ["Cerca online un esempio di ciò che stai cercando di produrre", "Trova un buon esempio — un template, un campione, un riferimento", "Apri il file del tuo compito accanto ad esso", "Copia la struttura (non il contenuto) e compilala per 10 minuti"]
    }
  },

  // — too_difficult: decision ───────────────────────────────────
  {
    id: "tm-diff-03b", type: "decision", reason: "too_difficult", duration: 10,
    en: {
      title: "Write everything you're afraid of getting wrong.",
      description: "Name the fear of the decision. Then decide.",
      steps: ["Write: 'I'm afraid of choosing wrong because...'", "Write every fear — don't filter", "Read them back. Cross out the ones that are unlikely.", "Make the decision based on what's left"]
    },
    it: {
      title: "Scrivi tutto ciò di cui hai paura di sbagliare.",
      description: "Nomina la paura della decisione. Poi decidi.",
      steps: ["Scrivi: 'Ho paura di sbagliare perché...'", "Scrivi ogni paura — senza filtrare", "Rileggile. Cancella quelle improbabili.", "Prendi la decisione in base a ciò che rimane"]
    }
  },
  {
    id: "tm-diff-03c", type: "decision", reason: "too_difficult", duration: 10,
    en: {
      title: "Find one person who has faced this. Ask them.",
      description: "A 10-minute conversation beats 10 hours of thinking.",
      steps: ["Think of one person who has made a similar decision", "Send them a message: 'Quick question — how did you decide ___?'", "While you wait: write what you think they'll say", "Use their answer (or your prediction) to decide"]
    },
    it: {
      title: "Trova qualcuno che ha affrontato questo. Chiediglielo.",
      description: "10 minuti di conversazione valgono 10 ore di pensiero.",
      steps: ["Pensa a una persona che ha preso una decisione simile", "Mandagli un messaggio: 'Domanda veloce — come hai deciso ___?'", "Nell'attesa: scrivi cosa pensi che risponderà", "Usa la loro risposta (o la tua previsione) per decidere"]
    }
  },

  // — too_difficult: training ───────────────────────────────────
  {
    id: "tm-diff-04b", type: "training", reason: "too_difficult", duration: 5,
    en: {
      title: "Walk for 5 minutes. That's the whole session.",
      description: "The minimum counts. Do the minimum.",
      steps: ["Put on shoes", "Walk outside or around your home for 5 minutes", "That's it — the session is complete", "Mark it done"]
    },
    it: {
      title: "Cammina per 5 minuti. Questo è tutto l'allenamento.",
      description: "Il minimo conta. Fai il minimo.",
      steps: ["Metti le scarpe", "Cammina fuori o in casa per 5 minuti", "È tutto — la sessione è completa", "Segnala fatto"]
    }
  },
  {
    id: "tm-diff-04c", type: "training", reason: "too_difficult", duration: 5,
    en: {
      title: "Stretch only. 5 minutes.",
      description: "Movement without effort. Still counts.",
      steps: ["Stand up", "Neck: circles, 20 seconds", "Shoulders: cross-arm stretch, 20 seconds each side", "Hips: standing lunge, 20 seconds each side"]
    },
    it: {
      title: "Solo stretching. 5 minuti.",
      description: "Movimento senza sforzo. Conta comunque.",
      steps: ["Alzati", "Collo: rotazioni, 20 secondi", "Spalle: allungamento braccio incrociato, 20 secondi per lato", "Fianchi: affondo in piedi, 20 secondi per lato"]
    }
  },

  // — afraid: work ──────────────────────────────────────────────
  {
    id: "tm-fear-01b", type: "work", reason: "afraid", duration: 5,
    en: {
      title: "Write the fear. Do step 1 anyway.",
      description: "Name it. Then ignore it for 5 minutes.",
      steps: ["Write: 'I'm afraid that if I do this, ___'", "Write the first action that doesn't require courage — just a click or a line of text", "Set a 5-minute timer and do that action", "Stop at 5 minutes — you've proved the fear wrong"]
    },
    it: {
      title: "Scrivi la paura. Fai il passo 1 lo stesso.",
      description: "Nominala. Poi ignorala per 5 minuti.",
      steps: ["Scrivi: 'Ho paura che se lo faccio, ___'", "Scrivi la prima azione che non richiede coraggio — solo un clic o una riga di testo", "Imposta un timer da 5 minuti e fai quell'azione", "Fermati a 5 minuti — hai dimostrato che la paura aveva torto"]
    }
  },
  {
    id: "tm-fear-01c", type: "work", reason: "afraid", duration: 5,
    en: {
      title: "Do the smallest possible version of the scary thing.",
      description: "Not the full thing. The first 5% of it.",
      steps: ["Write what you're afraid to do", "Write its smallest possible version (a draft, a note, a placeholder)", "Do that smallest version now", "Stop — you've started"]
    },
    it: {
      title: "Fai la versione più piccola possibile della cosa spaventosa.",
      description: "Non la cosa intera. Il primo 5%.",
      steps: ["Scrivi cosa ti spaventa fare", "Scrivi la sua versione più piccola possibile (una bozza, una nota, un segnaposto)", "Fai quella versione minima adesso", "Fermati — hai iniziato"]
    }
  },

  // — afraid: decision ──────────────────────────────────────────
  {
    id: "tm-fear-02b", type: "decision", reason: "afraid", duration: 10,
    en: {
      title: "Write the decision as if it's already made.",
      description: "Commit in writing. See how it feels.",
      steps: ["Write: 'I have decided to ___'", "Write what the next 3 days look like with that decision made", "Write: 'The thing I'd need to do immediately is...'", "Do that thing — or commit to when you will"]
    },
    it: {
      title: "Scrivi la decisione come se fosse già presa.",
      description: "Impegnati per iscritto. Senti come si sente.",
      steps: ["Scrivi: 'Ho deciso di ___'", "Scrivi come appaiono i prossimi 3 giorni con quella decisione presa", "Scrivi: 'La cosa che dovrei fare immediatamente è...'", "Fai quella cosa — o impegnati su quando la farai"]
    }
  },
  {
    id: "tm-fear-02c", type: "decision", reason: "afraid", duration: 10,
    en: {
      title: "Rate each option on reversibility.",
      description: "Fear is smaller when you know you can undo.",
      steps: ["Write both options", "For each: write 'I can reverse this by ___' or 'This is permanent because ___'", "If both are reversible: decide immediately and write it down", "If one is permanent: write what you'd do to recover if it went wrong — then decide"]
    },
    it: {
      title: "Valuta ogni opzione sulla reversibilità.",
      description: "La paura è più piccola quando sai di poter tornare indietro.",
      steps: ["Scrivi entrambe le opzioni", "Per ognuna: scrivi 'Posso tornare indietro facendo ___' o 'È permanente perché ___'", "Se entrambe sono reversibili: decidi subito e scrivilo", "Se una è permanente: scrivi cosa faresti per riprenderti se andasse male — poi decidi"]
    }
  },

  // — afraid: training ──────────────────────────────────────────
  {
    id: "tm-fear-04b", type: "training", reason: "afraid", duration: 5,
    en: {
      title: "Do 20 jumping jacks right now.",
      description: "Physical action cuts through mental resistance fast.",
      steps: ["Stand up", "Do 20 jumping jacks", "Do 10 squats immediately after", "Drink water — you're done"]
    },
    it: {
      title: "Fai 20 jumping jack adesso.",
      description: "L'azione fisica taglia la resistenza mentale rapidamente.",
      steps: ["Alzati", "Fai 20 jumping jack", "Fai subito 10 squat dopo", "Bevi acqua — hai finito"]
    }
  },
  {
    id: "tm-fear-04c", type: "training", reason: "afraid", duration: 5,
    en: {
      title: "Start with breathing. Then move.",
      description: "Calm first. Then 3 minutes of movement.",
      steps: ["Sit or stand. Take 5 deep slow breaths.", "Stand up and do 10 slow squats", "Do 10 slow push-ups (knees ok)", "Sit back down — you've moved"]
    },
    it: {
      title: "Inizia respirando. Poi muoviti.",
      description: "Prima calma. Poi 3 minuti di movimento.",
      steps: ["Siediti o alzati. Fai 5 respiri profondi e lenti.", "Alzati e fai 10 squat lenti", "Fai 10 flessioni lente (sulle ginocchia va bene)", "Siediti — ti sei mosso"]
    }
  },

  // — afraid: thinking ──────────────────────────────────────────
  {
    id: "tm-fear-03b", type: "thinking", reason: "afraid", duration: 10,
    en: {
      title: "Write what you'd do if the fear came true.",
      description: "Plan for the worst. Then act on the plan.",
      steps: ["Write: 'The thing I'm afraid to face is...'", "Write: 'If the worst happened, I would...' — be specific", "Write: 'The first person I'd contact is ___ and I'd say ___'", "Write: 'The one action I can take right now to prepare is ___' — do it"]
    },
    it: {
      title: "Scrivi cosa faresti se la paura si avverasse.",
      description: "Pianifica il peggio. Poi agisci sul piano.",
      steps: ["Scrivi: 'La cosa di cui ho paura di affrontare è...'", "Scrivi: 'Se accadesse il peggio, farei...' — sii specifico", "Scrivi: 'La prima persona che contatterei è ___ e le direi ___'", "Scrivi: 'L'azione che posso fare adesso per prepararmi è ___' — falla"]
    }
  },
  {
    id: "tm-fear-03c", type: "thinking", reason: "afraid", duration: 10,
    en: {
      title: "Write the fear. Then write one counter-fact.",
      description: "Name what's scary. Find one thing that disproves it.",
      steps: ["Write: 'I'm afraid that ___'", "Write every related fear underneath — don't stop", "For each fear: write one fact that contradicts or reduces it", "Write: 'Given all that, the one thing I can do is...' and do it"]
    },
    it: {
      title: "Scrivi la paura. Poi scrivi un fatto contrario.",
      description: "Nomina ciò che spaventa. Trova qualcosa che lo contraddice.",
      steps: ["Scrivi: 'Ho paura che ___'", "Scrivi ogni paura correlata sotto — non fermarti", "Per ogni paura: scrivi un fatto che la contraddice o riduce", "Scrivi: 'Dato tutto questo, la cosa che posso fare è...' e falla"]
    }
  },

  // — not_important: work ───────────────────────────────────────
  {
    id: "tm-ni-01b", type: "work", reason: "not_important", duration: 5,
    en: {
      title: "Delegate or delete it. Right now.",
      description: "If it's not important: it goes or you do it fast.",
      steps: ["Ask: can someone else do this?", "If yes: write one message delegating it and send it", "If no: set a 5-minute timer and do it at minimum quality", "Remove it from your list"]
    },
    it: {
      title: "Delegalo o cancellalo. Adesso.",
      description: "Se non è importante: va via o lo fai in fretta.",
      steps: ["Chiediti: può farlo qualcun altro?", "Se sì: scrivi un messaggio delegandolo e invialo", "Se no: imposta un timer da 5 minuti e fallo alla qualità minima", "Rimuovilo dalla lista"]
    }
  },
  {
    id: "tm-ni-01c", type: "work", reason: "not_important", duration: 5,
    en: {
      title: "Set a 3-minute limit. Finish it.",
      description: "Unimportant tasks deserve less time than you're giving them.",
      steps: ["Set a timer for 3 minutes", "Do the task — no perfection, no overthinking", "When the timer rings: stop and submit or send as-is", "It's done. Move on."]
    },
    it: {
      title: "Imposta un limite di 3 minuti. Finiscilo.",
      description: "I compiti non importanti meritano meno tempo di quanto stai dando.",
      steps: ["Imposta un timer da 3 minuti", "Fai il compito — nessuna perfezione, nessun eccesso di pensiero", "Quando suona il timer: fermati e invia o consegna com'è", "È fatto. Vai avanti."]
    }
  },

  // — not_important: decision ───────────────────────────────────
  {
    id: "tm-ni-02b", type: "decision", reason: "not_important", duration: 5,
    en: {
      title: "Pick B. Move on.",
      description: "When it doesn't matter, picking anything is the right answer.",
      steps: ["Look at the options", "Pick whichever option is second in the list", "Write: 'Decided: ___. Reason: it doesn't matter enough to debate.'", "Move on — do not revisit"]
    },
    it: {
      title: "Scegli B. Vai avanti.",
      description: "Quando non conta, scegliere qualsiasi cosa è la risposta giusta.",
      steps: ["Guarda le opzioni", "Scegli qualsiasi opzione sia seconda nella lista", "Scrivi: 'Deciso: ___. Motivo: non conta abbastanza per discuterne.'", "Vai avanti — non tornare indietro"]
    }
  },
  {
    id: "tm-ni-02c", type: "decision", reason: "not_important", duration: 5,
    en: {
      title: "Set a 60-second timer. Decide before it rings.",
      description: "Low-stakes decisions should take under a minute.",
      steps: ["Set a 60-second timer", "Read the options once", "Decide before it rings — gut check only", "Write the decision and move on"]
    },
    it: {
      title: "Imposta un timer da 60 secondi. Decidi prima che suoni.",
      description: "Le decisioni a basse conseguenze devono richiedere meno di un minuto.",
      steps: ["Imposta un timer da 60 secondi", "Leggi le opzioni una volta", "Decidi prima che suoni — solo istinto", "Scrivi la decisione e vai avanti"]
    }
  },

  // — not_important: thinking ───────────────────────────────────
  {
    id: "tm-ni-03b", type: "thinking", reason: "not_important", duration: 5,
    en: {
      title: "Write: what's the worst that happens if I ignore this?",
      description: "Some things should be ignored. Find out if this is one.",
      steps: ["Write: 'The worst that happens if I never think about this again is...'", "Write: 'Is that outcome actually bad?'", "If no: delete it from your mind and your list", "If yes: write one action and do it now"]
    },
    it: {
      title: "Scrivi: cosa succede di peggio se lo ignoro?",
      description: "Alcune cose vanno ignorate. Scopri se questa è una di quelle.",
      steps: ["Scrivi: 'La cosa peggiore che succede se non ci penso mai più è...'", "Scrivi: 'Quell'esito è davvero negativo?'", "Se no: cancellalo dalla testa e dalla lista", "Se sì: scrivi un'azione e falla adesso"]
    }
  },
  {
    id: "tm-ni-03c", type: "thinking", reason: "not_important", duration: 5,
    en: {
      title: "Decide in writing: act, schedule, or drop.",
      description: "Every thought needs one of three answers.",
      steps: ["Write the thing you've been thinking about", "Choose one: ACT NOW / SCHEDULE FOR LATER / DROP IT", "Write your choice and why in one sentence", "Take the action that matches your choice — right now"]
    },
    it: {
      title: "Decidi per iscritto: agisci, pianifica, o lascia perdere.",
      description: "Ogni pensiero ha bisogno di una di tre risposte.",
      steps: ["Scrivi la cosa a cui stai pensando", "Scegli uno: AGISCI ORA / PIANIFICA PIÙ TARDI / LASCIA PERDERE", "Scrivi la tua scelta e il motivo in una frase", "Fai l'azione che corrisponde alla tua scelta — adesso"]
    }
  },

  // — feel_stuck: work ──────────────────────────────────────────
  {
    id: "tm-stuck-01b", type: "work", reason: "feel_stuck", duration: 5,
    en: {
      title: "Write the block. Copy one thing from the file.",
      description: "Name it. Then make one physical move.",
      steps: ["Write: 'I'm stuck on this task because ___'", "Open the task file", "Copy, paste, or retype any existing content into a new section", "That movement is your start"]
    },
    it: {
      title: "Scrivi il blocco. Copia una cosa dal file.",
      description: "Nominalo. Poi fai una mossa fisica.",
      steps: ["Scrivi: 'Sono bloccato su questo compito perché ___'", "Apri il file del compito", "Copia, incolla o riscrivi qualsiasi contenuto esistente in una nuova sezione", "Quel movimento è il tuo inizio"]
    }
  },
  {
    id: "tm-stuck-01c", type: "work", reason: "feel_stuck", duration: 5,
    en: {
      title: "Identify what's missing. Get it.",
      description: "Stuck often means one input is missing. Find it.",
      steps: ["Write: 'I can't move forward because I'm missing ___'", "Write where you could get that thing in the next 5 minutes", "Go get it — search, ask, or create a placeholder", "Resume the task with that gap filled"]
    },
    it: {
      title: "Identifica cosa manca. Procuratelo.",
      description: "Il blocco spesso significa che manca un input. Trovalo.",
      steps: ["Scrivi: 'Non posso andare avanti perché mi manca ___'", "Scrivi dove potresti trovare quella cosa nei prossimi 5 minuti", "Vai a procurartela — cerca, chiedi o crea un segnaposto", "Riprendi il compito con quel gap colmato"]
    }
  },

  // — feel_stuck: thinking ──────────────────────────────────────
  {
    id: "tm-stuck-02b", type: "thinking", reason: "feel_stuck", duration: 10,
    en: {
      title: "Write the loop. Find what breaks it.",
      description: "Name the circular thought. Find the exit.",
      steps: ["Write: 'I keep thinking about ___ because ___'", "Write: 'The thing that would make me stop thinking about this is...'", "Write: 'The one action I could take to get closer to that is...'", "Do that action now"]
    },
    it: {
      title: "Scrivi il loop. Trova cosa lo rompe.",
      description: "Nomina il pensiero circolare. Trova l'uscita.",
      steps: ["Scrivi: 'Continuo a pensare a ___ perché ___'", "Scrivi: 'La cosa che mi farebbe smettere di pensarci è...'", "Scrivi: 'L'azione che potrei fare per avvicinarmi a questo è...'", "Fai quell'azione adesso"]
    }
  },
  {
    id: "tm-stuck-02c", type: "thinking", reason: "feel_stuck", duration: 10,
    en: {
      title: "Talk to yourself in writing for 8 minutes.",
      description: "No structure. Just write until something shifts.",
      steps: ["Open a notebook or blank doc", "Write: 'I'm stuck because...' and keep writing for 8 minutes", "Don't read back — keep writing forward", "At 8 minutes: circle the one sentence that felt most true. Do something about it."]
    },
    it: {
      title: "Parla con te stesso per iscritto per 8 minuti.",
      description: "Nessuna struttura. Scrivi finché qualcosa cambia.",
      steps: ["Apri un quaderno o documento vuoto", "Scrivi: 'Sono bloccato perché...' e continua a scrivere per 8 minuti", "Non rileggere — continua a scrivere in avanti", "A 8 minuti: cerchia la frase che sembrava più vera. Fai qualcosa al riguardo."]
    }
  },

  // — feel_stuck: stuck ─────────────────────────────────────────
  {
    id: "tm-stuck-03b", type: "stuck", reason: "feel_stuck", duration: 15,
    en: {
      title: "Do something you haven't done in a while.",
      description: "Routine keeps you in the same mental state. Change the input.",
      steps: ["Pick one thing you used to do but stopped — a walk in a new direction, a type of music, a podcast, a food — and do it now for 10 minutes", "While doing it, don't think about the situation — just experience the thing", "When 10 minutes end, write: 'One thing I felt or thought that I haven't felt in a while is ___'"]
    },
    it: {
      title: "Fai qualcosa che non fai da un po'.",
      description: "La routine ti tiene nello stesso stato mentale. Cambia l'input.",
      steps: ["Scegli una cosa che facevi ma hai smesso — una camminata in una direzione nuova, un tipo di musica, un podcast, un cibo — e falla adesso per 10 minuti", "Mentre la fai, non pensare alla situazione — vivi solo quella cosa", "Quando finiscono i 10 minuti, scrivi: 'Una cosa che ho sentito o pensato che non sentivo da un po' è ___'"]
    }
  },
  {
    id: "tm-stuck-03c", type: "stuck", reason: "feel_stuck", duration: 10,
    en: {
      title: "Put something new in front of your eyes.",
      description: "New input changes what comes out. You don't need to think — just look.",
      steps: ["Open YouTube, a news site, or a magazine — any topic you don't usually follow", "Read or watch one thing for 8 minutes — no multitasking, no skipping", "Write one sentence: 'Something this made me think about my situation is ___'", "Don't force a connection — if nothing comes, write 'nothing' and that's fine too"]
    },
    it: {
      title: "Metti qualcosa di nuovo davanti agli occhi.",
      description: "Un nuovo input cambia ciò che esce. Non devi pensare — guarda soltanto.",
      steps: ["Apri YouTube, un sito di notizie, o una rivista — qualsiasi argomento che non segui di solito", "Leggi o guarda una cosa per 8 minuti — senza fare altro, senza saltare", "Scrivi una frase: 'Una cosa che questo mi ha fatto pensare della mia situazione è ___'", "Non forzare il collegamento — se non viene niente, scrivi 'niente' e va bene lo stesso"]
    }
  },

  // — feel_stuck: decision ──────────────────────────────────────
  {
    id: "tm-stuck-04b", type: "decision", reason: "feel_stuck", duration: 10,
    en: {
      title: "Write why you're stuck. Then choose.",
      description: "Name the real block. Then decide despite it.",
      steps: ["Write: 'I'm stuck on this decision because ___'", "Write: 'If that reason weren't there, I'd choose ___'", "That's your answer — write it down as your decision", "Write the first action that follows from that decision"]
    },
    it: {
      title: "Scrivi perché sei bloccato. Poi scegli.",
      description: "Nomina il vero blocco. Poi decidi nonostante esso.",
      steps: ["Scrivi: 'Sono bloccato su questa decisione perché ___'", "Scrivi: 'Se quel motivo non ci fosse, sceglierei ___'", "Questa è la tua risposta — scrivila come tua decisione", "Scrivi la prima azione che segue da quella decisione"]
    }
  },
  {
    id: "tm-stuck-04c", type: "decision", reason: "feel_stuck", duration: 10,
    en: {
      title: "Set a 10-minute deadline. Decide before it ends.",
      description: "You have 10 minutes. That's enough.",
      steps: ["Set a timer for 10 minutes", "Write both options and one real consequence of each", "Cross out the option with the worse consequence", "Write the remaining option as your decision before the timer rings"]
    },
    it: {
      title: "Imposta una scadenza di 10 minuti. Decidi prima che finisca.",
      description: "Hai 10 minuti. È abbastanza.",
      steps: ["Imposta un timer da 10 minuti", "Scrivi entrambe le opzioni e una conseguenza reale per ognuna", "Cancella l'opzione con la conseguenza peggiore", "Scrivi l'opzione rimanente come tua decisione prima che il timer suoni"]
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
      title: "10 minutes, one task only",
      description: "Open the file. Work on it for 10 minutes. Nothing else.",
      steps: [
        "Open the document, tool, or app for this task",
        "Work on the first visible thing — type, edit, or fill in",
        "Stop after 10 minutes"
      ]
    },
    it: {
      title: "10 minuti, un solo compito",
      description: "Apri il file. Lavoraci per 10 minuti. Nient'altro.",
      steps: [
        "Apri il documento, strumento o app per questo compito",
        "Lavora sulla prima cosa visibile — scrivi, modifica, compila",
        "Fermati dopo 10 minuti"
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
      title: "Name the block. Take one action.",
      description: "Identify what's stuck. Then move — not plan.",
      steps: [
        "Write one sentence: 'I'm stuck on ___ because ___'",
        "Write the next physical action in one sentence",
        "Start that action immediately — not a plan, the action itself",
        "Work for 10 minutes before reviewing anything"
      ]
    },
    it: {
      title: "Nomina il blocco. Fai una sola azione.",
      description: "Identifica cosa blocca. Poi muoviti — non pianificare.",
      steps: [
        "Scrivi una frase: 'Sono bloccato su ___ perché ___'",
        "Scrivi la prossima azione fisica in una frase",
        "Inizia quell'azione subito — non un piano, l'azione stessa",
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
      title: "Next 15 minutes, same task",
      description: "No new plan. Open what you already started and continue.",
      steps: [
        "Open the file, doc, or tool from your last session",
        "Read the last thing you wrote or did — 30 seconds only",
        "Continue from exactly that point for 15 minutes"
      ]
    },
    it: {
      title: "Prossimi 15 minuti, stesso compito",
      description: "Nessun nuovo piano. Apri quello che hai già iniziato e continua.",
      steps: [
        "Apri il file, documento o strumento dell'ultima sessione",
        "Leggi l'ultima cosa che hai scritto o fatto — solo 30 secondi",
        "Continua esattamente da quel punto per 15 minuti"
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
      title: "Write it out fully",
      description: "Stop thinking about it. Put it all on paper in 15 minutes.",
      steps: [
        "Open a notebook or blank doc. Write the thing at the top.",
        "Write every related thought, concern, or question — don't organize",
        "Write: 'The one thing I can actually do next is...' and do it"
      ]
    },
    it: {
      title: "Scrivilo per intero",
      description: "Smetti di pensarci. Metti tutto su carta in 15 minuti.",
      steps: [
        "Apri un quaderno o documento vuoto. Scrivi la cosa in cima.",
        "Scrivi ogni pensiero, preoccupazione o domanda collegata — senza organizzare",
        "Scrivi: 'La cosa che posso fare concretamente adesso è...' e falla"
      ]
    }
  },

  // ── MENTAL CLEANUP ────────────────────────────────────────────
  {
    id: "mental-01", type: "mental_cleanup", duration: 5,
    en: {
      title: "Empty your head.",
      description: "Open something. Write. Don't sort.",
      steps: [
        "Open any note. Write everything floating in your head — messy, fast, no order. Stop when you run out."
      ]
    },
    it: {
      title: "Svuota la testa.",
      description: "Apri qualcosa. Scrivi. Non ordinare.",
      steps: [
        "Apri qualsiasi nota. Scrivi tutto quello che ti gira in testa — veloce, disordinato, senza filtri. Fermati quando finisci."
      ]
    }
  },
  {
    id: "mental-02", type: "mental_cleanup", duration: 10,
    en: {
      title: "Name what's stressing you.",
      description: "Write it. Don't fix it yet.",
      steps: [
        "Open a note. Write 'What's stressing me:' and list everything — work, personal, vague. No limit.",
        "Pick one item. Write one thing you could do about it. Just one. You don't have to do it now."
      ]
    },
    it: {
      title: "Scrivi cosa ti sta stressando.",
      description: "Scrivilo. Non risolverlo ancora.",
      steps: [
        "Apri una nota. Scrivi 'Cosa mi stressa:' e elenca tutto — lavoro, personale, vago. Senza limite.",
        "Scegli una cosa. Scrivi un'azione possibile. Solo una. Non devi farla adesso."
      ]
    }
  },
  {
    id: "mental-03", type: "mental_cleanup", duration: 15,
    en: {
      title: "3 things. One action each.",
      description: "Write everything out. Pick three. That's it.",
      steps: [
        "Write everything in your head — 5 minutes, no filter, no order.",
        "Read it back. Circle the 3 things that feel most urgent.",
        "For each one, write one next action — not a goal, one concrete thing. Done."
      ]
    },
    it: {
      title: "3 cose. Un'azione ciascuna.",
      description: "Scrivi tutto. Scegli tre. Basta.",
      steps: [
        "Scrivi tutto quello che hai in testa — 5 minuti, senza filtri, senza ordine.",
        "Rileggilo. Cerchia le 3 cose che sembrano più urgenti.",
        "Per ognuna, scrivi una prossima azione — non un obiettivo, una cosa concreta. Fatto."
      ]
    }
  },
  {
    id: "mental-04", type: "mental_cleanup", duration: 5,
    en: {
      title: "Name the thing circling.",
      description: "One thought. Write it. Put it down.",
      steps: [
        "Open a note. Write the one thing that keeps coming back. Below it: 'One thing I can do: ___'. That's it."
      ]
    },
    it: {
      title: "Scrivi il pensiero che gira.",
      description: "Un pensiero. Scrivilo. Mettilo giù.",
      steps: [
        "Apri una nota. Scrivi la cosa che continua a tornare. Sotto: 'Una cosa che posso fare: ___'. Basta così."
      ]
    }
  },
  {
    id: "mental-05", type: "mental_cleanup", duration: 10,
    en: {
      title: "Do now, later, or drop.",
      description: "Three buckets. Every open thing goes in one.",
      steps: [
        "Write every open task or worry — fast. Then draw 3 columns: Do Now / Later / Drop.",
        "Put each item in a column. Pick one from 'Do Now'. Do it before you close."
      ]
    },
    it: {
      title: "Adesso, dopo o lascia perdere.",
      description: "Tre categorie. Ogni cosa aperta va in una.",
      steps: [
        "Scrivi ogni compito o preoccupazione aperta — veloce. Poi: Fai Adesso / Dopo / Lascia Perdere.",
        "Metti ogni cosa in una categoria. Scegli una da 'Fai Adesso'. Falla prima di chiudere."
      ]
    }
  },

  // ── QUICK WIN ─────────────────────────────────────────────────
  {
    id: "quick-01", type: "quick_win", duration: 5,
    en: {
      title: "Clear one surface.",
      description: "One surface. Everything off it.",
      steps: [
        "Pick any surface near you. Remove everything that doesn't belong. Done."
      ]
    },
    it: {
      title: "Libera una superficie.",
      description: "Una superficie. Tutto via.",
      steps: [
        "Scegli qualsiasi superficie vicino a te. Rimuovi tutto quello che non ci appartiene. Fatto."
      ]
    }
  },
  {
    id: "quick-02", type: "quick_win", duration: 10,
    en: {
      title: "Delete 10 emails.",
      description: "Open inbox. Delete. Don't read.",
      steps: [
        "Open your inbox. Start from the oldest. Subject line only — delete or archive, no reading.",
        "Stop at 10. Close it."
      ]
    },
    it: {
      title: "Elimina 10 email.",
      description: "Apri la posta. Elimina. Non leggere.",
      steps: [
        "Apri la posta. Parti dalle più vecchie. Solo l'oggetto — elimina o archivia, senza leggere.",
        "Fermati a 10. Chiudi."
      ]
    }
  },
  {
    id: "quick-03", type: "quick_win", duration: 15,
    en: {
      title: "Finish one pending thing.",
      description: "The small one you keep skipping. Do it now.",
      steps: [
        "Write the name of the one small pending thing. Open it.",
        "Finish it. If it takes less than 15 minutes, pick the next smallest one.",
        "Mark it done. Close everything else."
      ]
    },
    it: {
      title: "Finisci una cosa in sospeso.",
      description: "La piccola cosa che continui a saltare. Falla adesso.",
      steps: [
        "Scrivi il nome della piccola cosa in sospeso. Aprila.",
        "Finiscila. Se ci vuole meno di 15 minuti, prendi la prossima più piccola.",
        "Segnala come fatta. Chiudi tutto il resto."
      ]
    }
  },
  {
    id: "quick-04", type: "quick_win", duration: 5,
    en: {
      title: "Reply to that one message.",
      description: "2 sentences. Send. Done.",
      steps: [
        "Find the message you've been avoiding. Write 2 sentences. Send before you re-read it. Close."
      ]
    },
    it: {
      title: "Rispondi a quel messaggio.",
      description: "2 frasi. Invia. Fatto.",
      steps: [
        "Trova il messaggio che hai rimandato. Scrivi 2 frasi. Invia senza rileggerlo. Chiudi."
      ]
    }
  },
  {
    id: "quick-05", type: "quick_win", duration: 10,
    en: {
      title: "Close one open decision.",
      description: "Two options only. Pick one. Move on.",
      steps: [
        "Write the decision you keep avoiding. Write exactly two options — cross out the rest.",
        "Pick one. Write it as if it's final. Take one action that makes it real."
      ]
    },
    it: {
      title: "Chiudi una decisione aperta.",
      description: "Solo due opzioni. Scegline una. Vai avanti.",
      steps: [
        "Scrivi la decisione che eviti. Scrivi solo due opzioni — cancella il resto.",
        "Scegline una. Scrivila come se fosse definitiva. Fai un'azione che la rende reale."
      ]
    }
  },
  {
    id: "quick-06", type: "quick_win", duration: 15,
    en: {
      title: "Tidy one drawer.",
      description: "Empty it. Keep what belongs. Close it.",
      steps: [
        "Pick one drawer or bag. Empty it completely.",
        "Remove what you don't need. Put the rest back.",
        "Close it. Done — one physical thing is clearer."
      ]
    },
    it: {
      title: "Riordina un cassetto.",
      description: "Svuotalo. Tieni quello che serve. Chiudilo.",
      steps: [
        "Scegli un cassetto o una borsa. Svuotalo completamente.",
        "Rimuovi quello che non serve. Rimetti il resto.",
        "Chiudilo. Fatto — una cosa fisica è più in ordine."
      ]
    }
  },

  // ── GET CLARITY ────────────────────────────────────────────────
  {
    id: "clarity-01", type: "get_clarity", duration: 5,
    en: {
      title: "Write what's unclear.",
      description: "Name it. Don't solve it yet.",
      steps: [
        "Open a note. Write: 'What I'm unclear about is ___'. Write the first honest answer. Don't fix it."
      ]
    },
    it: {
      title: "Scrivi cosa non è chiaro.",
      description: "Dagli un nome. Non risolverlo ancora.",
      steps: [
        "Apri una nota. Scrivi: 'Quello che non mi è chiaro è ___'. Scrivi la prima risposta onesta. Non risolverla."
      ]
    }
  },
  {
    id: "clarity-02", type: "get_clarity", duration: 10,
    en: {
      title: "Two options. Pick one.",
      description: "Write them all. Cross out all but two.",
      steps: [
        "Write every option you have — fast. Then cross out everything except the two that feel most important.",
        "For each: one reason for, one against. Pick one. Write it as if it's decided."
      ]
    },
    it: {
      title: "Due opzioni. Scegline una.",
      description: "Scrivile tutte. Cancella tutto tranne due.",
      steps: [
        "Scrivi tutte le opzioni — veloce. Poi cancella tutto tranne le due più importanti.",
        "Per ognuna: un motivo a favore, uno contro. Scegli. Scrivila come se fosse deciso."
      ]
    }
  },
  {
    id: "clarity-03", type: "get_clarity", duration: 15,
    en: {
      title: "Sort what's open.",
      description: "Everything out of your head. Three piles. One action.",
      steps: [
        "Write every open decision or task circling in your head. Fast, no editing.",
        "Sort each into: Do now / Schedule / Let go.",
        "Pick one from 'Do now'. Take one action before you close."
      ]
    },
    it: {
      title: "Ordina quello che è aperto.",
      description: "Tutto fuori dalla testa. Tre pile. Un'azione.",
      steps: [
        "Scrivi ogni decisione o compito aperto che ti gira in testa. Veloce, senza modifiche.",
        "Metti ognuno in: Fai adesso / Schedula / Lascia andare.",
        "Scegli uno da 'Fai adesso'. Fai un'azione prima di chiudere."
      ]
    }
  },
  {
    id: "clarity-04", type: "get_clarity", duration: 5,
    en: {
      title: "Write the question you keep avoiding.",
      description: "One question. Write it honestly.",
      steps: [
        "Write: 'The question I keep avoiding is ___'. Write it. Don't answer it yet — just having it written is enough."
      ]
    },
    it: {
      title: "Scrivi la domanda che eviti.",
      description: "Una domanda. Scrivila onestamente.",
      steps: [
        "Scrivi: 'La domanda che continuo a evitare è ___'. Scrivila. Non rispondere ancora — averla scritta è già abbastanza."
      ]
    }
  },
  {
    id: "clarity-05", type: "get_clarity", duration: 10,
    en: {
      title: "Write what you know. Write what you don't.",
      description: "Two lists. That's it.",
      steps: [
        "Write: 'What I know for sure:' — list everything, fast.",
        "Write: 'What I still need to figure out:' — pick one item. Write one small step toward it."
      ]
    },
    it: {
      title: "Scrivi cosa sai. Scrivi cosa non sai.",
      description: "Due liste. Basta.",
      steps: [
        "Scrivi: 'Quello che so per certo:' — elenca tutto, veloce.",
        "Scrivi: 'Quello che devo ancora capire:' — scegli un elemento. Scrivi un piccolo passo verso di esso."
      ]
    }
  },

  // ── REGAIN ENERGY ─────────────────────────────────────────────
  {
    id: "energy-01", type: "regain_energy", duration: 5,
    en: {
      title: "Move once.",
      description: "Smallest possible action. Just move.",
      steps: [
        "Stand up. Walk to another room and back. Or do 5 slow stretches. That's enough — you moved."
      ]
    },
    it: {
      title: "Muoviti una volta.",
      description: "L'azione più piccola possibile. Muoviti e basta.",
      steps: [
        "Alzati. Vai in un'altra stanza e torna. O fai 5 allungamenti lenti. Basta — ti sei mosso."
      ]
    }
  },
  {
    id: "energy-02", type: "regain_energy", duration: 10,
    en: {
      title: "Walk. Then pick one thing.",
      description: "10 minutes. Move first, work after.",
      steps: [
        "Walk for 5 minutes — outside if possible, around the room if not. Breathe slowly.",
        "Come back. Pick the smallest task you can start. Begin."
      ]
    },
    it: {
      title: "Cammina. Poi scegli una cosa.",
      description: "10 minuti. Prima muoviti, poi lavora.",
      steps: [
        "Cammina per 5 minuti — fuori se puoi, in giro per la stanza se no. Respira lentamente.",
        "Torna. Scegli il compito più piccolo che riesci a iniziare. Inizia."
      ]
    }
  },
  {
    id: "energy-03", type: "regain_energy", duration: 15,
    en: {
      title: "Find the drain. Take one step.",
      description: "Name it. Pick one thing you control.",
      steps: [
        "Write: 'What's draining me right now:' — list everything. Tasks, people, situations. Fast.",
        "Circle the one thing you have some control over.",
        "Write one small action you could take on it. Do it now — just the first move."
      ]
    },
    it: {
      title: "Trova cosa ti svuota. Fai un passo.",
      description: "Dagli un nome. Scegli una cosa che controlli.",
      steps: [
        "Scrivi: 'Cosa mi sta svuotando adesso:' — elenca tutto. Compiti, persone, situazioni. Veloce.",
        "Cerchia la cosa su cui hai un po' di controllo.",
        "Scrivi una piccola azione possibile. Falla adesso — solo la prima mossa."
      ]
    }
  },
  {
    id: "energy-04", type: "regain_energy", duration: 5,
    en: {
      title: "Water. Breathe. Start.",
      description: "Literally. Right now.",
      steps: [
        "Get water. Drink it. Take 3 slow breaths — inhale 4, hold 2, exhale 6. Then pick anything small and start."
      ]
    },
    it: {
      title: "Acqua. Respira. Inizia.",
      description: "Letteralmente. Adesso.",
      steps: [
        "Prendi l'acqua. Bevila. Fai 3 respiri lenti — inspira 4, tieni 2, espira 6. Poi scegli qualcosa di piccolo e inizia."
      ]
    }
  },
  {
    id: "energy-05", type: "regain_energy", duration: 10,
    en: {
      title: "Do one easy thing. Finish it.",
      description: "Finishing feels better than trying. Pick something small.",
      steps: [
        "Think of one task that's easy enough to finish in 10 minutes. Something you'll feel good about.",
        "Do it now. No distractions. When it's done, stop — you finished something."
      ]
    },
    it: {
      title: "Fai una cosa facile. Finiscila.",
      description: "Finire è meglio di provare. Scegli qualcosa di piccolo.",
      steps: [
        "Pensa a una cosa abbastanza facile da finire in 10 minuti. Qualcosa che ti farà sentire bene.",
        "Falla adesso. Nessuna distrazione. Quando è fatta, fermati — hai finito qualcosa."
      ]
    }
  },

  // ── RESET AND RESTART ─────────────────────────────────────────
  {
    id: "reset-01", type: "reset_restart", duration: 5,
    en: {
      title: "Blank page. One thing.",
      description: "Forget everything else. Just this.",
      steps: [
        "Open a blank note. Write: 'If I had 5 minutes and no obligations, I'd ___'. Do that — even just part of it."
      ]
    },
    it: {
      title: "Pagina bianca. Una cosa.",
      description: "Dimentica tutto il resto. Solo questa.",
      steps: [
        "Apri una nota vuota. Scrivi: 'Se avessi 5 minuti e nessun obbligo, farei ___'. Fallo — anche solo in parte."
      ]
    }
  },
  {
    id: "reset-02", type: "reset_restart", duration: 10,
    en: {
      title: "Pause everything. Start one thing.",
      description: "You don't have to solve it all. Just park it.",
      steps: [
        "Write: 'On pause for now:' — list everything you're setting aside. Be specific.",
        "Write: 'The one thing I'll do in the next 10 minutes:'. Set a timer. Do only that."
      ]
    },
    it: {
      title: "Metti in pausa tutto. Inizia una cosa.",
      description: "Non devi risolvere tutto. Mettilo da parte e basta.",
      steps: [
        "Scrivi: 'In pausa adesso:' — elenca tutto quello che stai mettendo da parte. Sii specifico.",
        "Scrivi: 'La cosa che farò nei prossimi 10 minuti:'. Imposta un timer. Fai solo quella."
      ]
    }
  },
  {
    id: "reset-03", type: "reset_restart", duration: 15,
    en: {
      title: "Three things. Pick one. Start.",
      description: "Not a full plan. Just today.",
      steps: [
        "Write: 'If today ended well, I would have done ___' — list at most 3 things.",
        "Cross out anything that's not actually important today.",
        "Pick the first one. Start a 10-minute block on it now."
      ]
    },
    it: {
      title: "Tre cose. Scegliene una. Inizia.",
      description: "Non un piano completo. Solo oggi.",
      steps: [
        "Scrivi: 'Se oggi finisse bene, avrei fatto ___' — elenca al massimo 3 cose.",
        "Cancella quello che non è davvero importante oggi.",
        "Scegli la prima. Inizia un blocco da 10 minuti adesso."
      ]
    }
  },
  {
    id: "reset-04", type: "reset_restart", duration: 5,
    en: {
      title: "Lightest thing. 5 minutes. Stop.",
      description: "No finish required. Just move.",
      steps: [
        "Pick the thing that feels lightest right now. Do it for 5 minutes. You don't have to finish. That's it."
      ]
    },
    it: {
      title: "La cosa più leggera. 5 minuti. Stop.",
      description: "Non devi finire. Solo muoverti.",
      steps: [
        "Scegli la cosa che sembra più leggera adesso. Falla per 5 minuti. Non devi finire. Basta così."
      ]
    }
  }
];

// ── Helper: get localised activity content ─────────────────────
function activityContent(activity) {
  return activity[currentLang] || activity.en;
}

// ── Activity Adaptation Layer ──────────────────────────────────
//
// adaptActivity(activity, reason, duration)
//
// Returns a shallow-cloned activity with transformed content for
// the current language. The original activity object is never
// mutated. Adaptation is purely presentational — all downstream
// logic (stats, history, timer) still uses the original activity.
//
// Adaptation axes:
//   reason   → reframes title, description, and adds/changes first step
//   duration → trims or expands step count to match time available
//
// The function is intentionally permissive: if a reason or duration
// produces no meaningful transformation it returns content unchanged.

const ADAPT_FRAMES = {
  // ── too_difficult ─────────────────────────────────────────────
  too_difficult: {
    en: {
      prefix:      "Just the first move.",
      descSuffix:  " Don't think about the rest — only this.",
      firstStep:   "Ignore the full task for now. Just open whatever it involves.",
    },
    it: {
      prefix:      "Solo la prima mossa.",
      descSuffix:  " Non pensare al resto — solo questo.",
      firstStep:   "Ignora l'intero compito per adesso. Apri semplicemente quello che riguarda.",
    }
  },
  // ── dont_feel_like ────────────────────────────────────────────
  dont_feel_like: {
    en: {
      prefix:      "You don't have to want to.",
      descSuffix:  " You only need to start — not finish.",
      firstStep:   "Open it. That's the only commitment right now.",
    },
    it: {
      prefix:      "Non devi averne voglia.",
      descSuffix:  " Devi solo iniziare — non finire.",
      firstStep:   "Aprilo. Questo è l'unico impegno adesso.",
    }
  },
  // ── afraid ────────────────────────────────────────────────────
  afraid: {
    en: {
      prefix:      "No commitment. Just look.",
      descSuffix:  " Nothing is final here. You can stop at any point.",
      firstStep:   "Look at it without deciding anything. Just open and observe.",
    },
    it: {
      prefix:      "Nessun impegno. Guarda e basta.",
      descSuffix:  " Nulla è definitivo. Puoi fermarti in qualsiasi momento.",
      firstStep:   "Guardalo senza decidere nulla. Apri e osserva soltanto.",
    }
  },
  // ── dont_know_start ───────────────────────────────────────────
  dont_know_start: {
    en: {
      prefix:      "Start here. Right now.",
      descSuffix:  " The starting point doesn't have to be right — it just has to exist.",
      firstStep:   "Write: 'The first thing I can do is ___'. Fill in the blank. Do that.",
    },
    it: {
      prefix:      "Inizia qui. Adesso.",
      descSuffix:  " Il punto di partenza non deve essere giusto — deve solo esistere.",
      firstStep:   "Scrivi: 'La prima cosa che posso fare è ___'. Completa la frase. Falla.",
    }
  },
  // ── feel_stuck ────────────────────────────────────────────────
  feel_stuck: {
    en: {
      prefix:      "One move. That's all.",
      descSuffix:  " Being stuck ends with a single action, not a plan.",
      firstStep:   "Pick the smallest visible thing and do only that.",
    },
    it: {
      prefix:      "Una mossa. Solo quella.",
      descSuffix:  " Il blocco finisce con una singola azione, non con un piano.",
      firstStep:   "Scegli la cosa più piccola che vedi e fai solo quella.",
    }
  },
};

// Step count targets by duration
const STEP_COUNT = { 2: 1, 5: 1, 10: 3, 15: 5 };

/**
 * adaptActivity(activity, reason, duration)
 *
 * Returns a new activity object with adapted `en` and `it` content.
 * Safe to call with any combination of inputs — degrades to identity
 * if no adaptation applies.
 */
function adaptActivity(activity, reason, duration) {
  // Activities that already have a specific reason baked in are already
  // purpose-built for that state — don't double-adapt them.
  if (activity.reason) return activity;

  const frame     = reason ? ADAPT_FRAMES[reason] : null;
  const maxSteps  = STEP_COUNT[duration] ?? null;

  // Nothing to do
  if (!frame && !maxSteps) return activity;

  // Build adapted content for each language
  const adapted = { ...activity };

  for (const lang of ["en", "it"]) {
    const base = activity[lang] || activity.en;
    if (!base) continue;

    let { title, description, steps } = base;
    const f = frame ? frame[lang] : null;

    // ── Title: prepend a short reframe prefix
    if (f?.prefix) {
      title = `${f.prefix} ${title}`;
    }

    // ── Description: append a reassuring/clarifying suffix
    if (f?.descSuffix) {
      description = description.replace(/\.?\s*$/, "") + f.descSuffix;
    }

    // ── Steps: apply duration-based trimming first, then inject first step
    let adaptedSteps = [...steps];

    if (maxSteps !== null && adaptedSteps.length > maxSteps) {
      // Keep only the first N steps, or as many as the duration allows
      adaptedSteps = adaptedSteps.slice(0, maxSteps);
    }

    // For reason-based adaptation, replace step 1 with a gentler entry point
    // (only when we have a custom first step AND the step list isn't already
    // a single purpose-built step from a reason-specific activity)
    if (f?.firstStep && adaptedSteps.length >= 1) {
      // 5 min / 2 min → replace everything with the single entry step
      if ((duration === 5 || duration === 2) && maxSteps === 1) {
        adaptedSteps = [f.firstStep];
      } else {
        // 10 / 15 min → swap only the first step, keep the rest
        adaptedSteps = [f.firstStep, ...adaptedSteps.slice(1)];
      }
    }

    adapted[lang] = { title, description, steps: adaptedSteps };
  }

  return adapted;
}

/**
 * adaptedActivityContent(activity)
 *
 * Drop-in replacement for activityContent() that also applies the
 * adaptation layer using current state. Called from renderResult.
 */
function adaptedActivityContent(activity) {
  const adapted = adaptActivity(
    activity,
    state.selectedReason,
    state.selectedDuration ?? activity.duration
  );
  return adapted[currentLang] || adapted.en;
}



// ── App State ──────────────────────────────────────────────────
const state = {
  screen: "intro",
  selectedIntent: null,           // "avoidance" | "support"
  selectedType: null,
  selectedSupportType: null,      // support flow sub-type key (for REASON_SCREENS lookup)
  selectedReason: null,           // why they are avoiding it / support state
  selectedDuration: null,
  selectedMoreTimeMode: null,     // "start" | "continue" | null
  currentActivity: null,
  lastActivityId: null,
  seenActivityIds: [],            // ordered history for this flow session
  anotherClickCount: 0,           // how many times "another" was clicked this session
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

// ── Task History ───────────────────────────────────────────────
// Persists shown/completed task records across sessions.
// Schema: { [activityId]: { id, type, reason, duration, shownAt, completedAt } }
// Kept compact — only one record per activity id (latest wins).
const HISTORY_KEY   = "startnow_history";
const HISTORY_MAX   = 200;   // max records before pruning oldest
const RECENCY_DAYS  = 7;     // avoid repeating within this window

function getTaskHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveTaskHistory(history) {
  try {
    // Prune to HISTORY_MAX by removing oldest shownAt entries
    const entries = Object.values(history);
    if (entries.length > HISTORY_MAX) {
      entries.sort((a, b) => (a.shownAt || 0) - (b.shownAt || 0));
      const pruned = {};
      entries.slice(-HISTORY_MAX).forEach(e => { pruned[e.id] = e; });
      localStorage.setItem(HISTORY_KEY, JSON.stringify(pruned));
    } else {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }
  } catch { /* storage full or unavailable — degrade silently */ }
}

function recordTaskShown(activity) {
  if (!activity) return;
  const history = getTaskHistory();
  history[activity.id] = {
    id:          activity.id,
    type:        activity.type   || null,
    reason:      activity.reason || null,
    duration:    activity.duration,
    shownAt:     Date.now(),
    completedAt: history[activity.id]?.completedAt || null
  };
  saveTaskHistory(history);
}

function markTaskCompleted(activity) {
  if (!activity) return;
  const history = getTaskHistory();
  const existing = history[activity.id] || {};
  history[activity.id] = {
    ...existing,
    id:          activity.id,
    type:        activity.type   || null,
    reason:      activity.reason || null,
    duration:    activity.duration,
    completedAt: Date.now()
  };
  saveTaskHistory(history);
}

/**
 * historyAwareSort(pool)
 * Sorts a pool of activities so that:
 *   1. Never-shown tasks come first (shuffled among themselves)
 *   2. Tasks not seen in the last RECENCY_DAYS days come next (sorted oldest-shown first)
 *   3. Recently seen tasks come last (sorted oldest-shown first, so least-recent is preferred)
 * Returns sorted array — caller picks the first eligible candidate.
 */
function historyAwareSort(pool) {
  const history  = getTaskHistory();
  const cutoff   = Date.now() - RECENCY_DAYS * 24 * 60 * 60 * 1000;

  const unseen   = [];
  const stale    = [];
  const recent   = [];

  pool.forEach(a => {
    const rec = history[a.id];
    if (!rec || !rec.shownAt) {
      unseen.push(a);
    } else if (rec.shownAt < cutoff) {
      stale.push({ a, shownAt: rec.shownAt });
    } else {
      recent.push({ a, shownAt: rec.shownAt });
    }
  });

  // Shuffle unseen (fair random among fresh tasks)
  for (let i = unseen.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [unseen[i], unseen[j]] = [unseen[j], unseen[i]];
  }

  stale.sort((a, b) => a.shownAt - b.shownAt);
  recent.sort((a, b) => a.shownAt - b.shownAt);

  return [
    ...unseen,
    ...stale.map(x => x.a),
    ...recent.map(x => x.a)
  ];
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

// ── Last Completed Activity (lightweight personalization) ──────
const LAST_COMPLETED_KEY = "startnow_last_completed";

function saveLastCompleted(activity) {
  if (!activity) return;
  try {
    localStorage.setItem(LAST_COMPLETED_KEY, JSON.stringify({
      id:       activity.id,
      intent:   state.selectedIntent  || null,
      type:     activity.type         || null,
      reason:   state.selectedReason  || null,
      duration: activity.duration,
      date:     new Date().toISOString().split("T")[0]
    }));
  } catch { /* degrade silently */ }
}

function getLastCompleted() {
  try {
    const raw = localStorage.getItem(LAST_COMPLETED_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

/**
 * renderFollowUpHint()
 * Shows a subtle personalised hint on the intro screen if there is a
 * previously completed activity stored in localStorage.
 * Injects/updates a #follow-up-hint element before #btn-start.
 */
function renderFollowUpHint() {
  const last = getLastCompleted();
  const t    = TRANSLATIONS[currentLang];

  // Remove any existing hint element first (handles language switch)
  const existing = document.getElementById("follow-up-hint");
  if (existing) existing.remove();

  if (!last || !last.type) return;

  const categoryName = (t.categoryName && t.categoryName[last.type]) || last.type;
  const hintText     = (t.followUpHint || "You started with {category}. Want to continue?")
    .replace("{category}", categoryName);
  const btnText      = t.followUpBtn || "Continue";

  const hint = document.createElement("div");
  hint.id = "follow-up-hint";
  hint.className = "follow-up-hint";
  hint.innerHTML =
    `<p class="follow-up-text">${hintText}</p>` +
    `<button class="follow-up-btn" id="btn-follow-up">${btnText}</button>`;

  const btnStart = document.getElementById("btn-start");
  btnStart.parentNode.insertBefore(hint, btnStart);

  document.getElementById("btn-follow-up").addEventListener("click", () => {
    state.selectedIntent = last.intent || "avoidance";
    state.selectedType   = last.type;
    state.selectedReason = null;
    goTo("type");
  });
}

// ── Activity selector (reason-aware + moreTimeMode-aware) ─────
// Priority chain:
//   1. type + duration + moreTimeMode  (More Time specific)
//   2. type + duration + reason        (Truth Mode specific)
//   3. type + duration                 (general fallback)
// Within each pool, historyAwareSort ensures variety across sessions.
function pickActivity(type, duration, reason, moreTimeMode) {
  function pickFrom(pool) {
    if (!pool.length) return null;
    // Sort by history recency, exclude the immediate last pick within session
    const sorted = historyAwareSort(pool);
    const candidate = sorted.find(a => a.id !== state.lastActivityId) || sorted[0];
    state.lastActivityId = candidate.id;
    return candidate;
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
  const picked = pickFrom(pool);
  if (picked) return picked;

  // 4. Support-type fallback: if selectedSupportType differs from type, try it
  //    (e.g. type="get_clarity" maps directly, but safety net for future remaps)
  if (state.selectedSupportType && state.selectedSupportType !== type) {
    const supportPool = ACTIVITIES.filter(
      a => a.type === state.selectedSupportType && a.duration === duration &&
           !a.reason && !a.moreTimeMode
    );
    return pickFrom(supportPool);
  }
  return picked;
}

/**
 * pickDifferentActivity(type, duration, reason, moreTimeMode, excludeId)
 * Used by "Another one". Excludes all previously seen activities in this
 * session (state.seenActivityIds). When all options are exhausted, cycles
 * back from the beginning (excluding only the immediately current one).
 * Returns null only when the entire ACTIVITIES array has a single item.
 */
function pickDifferentActivity(type, duration, reason, moreTimeMode, excludeId) {
  // Build the relevant pool using the same priority chain as pickActivity
  let pool = [];

  if (moreTimeMode) {
    pool = ACTIVITIES.filter(
      a => a.moreTimeMode === moreTimeMode && a.duration === duration &&
           (!a.type || a.type === type)
    );
    if (!pool.length) {
      pool = ACTIVITIES.filter(
        a => a.moreTimeMode === moreTimeMode && a.duration === duration
      );
    }
  }

  if (!pool.length && reason) {
    pool = ACTIVITIES.filter(
      a => a.type === type && a.duration === duration &&
           a.reason === reason && !a.moreTimeMode
    );
  }

  if (!pool.length) {
    pool = ACTIVITIES.filter(
      a => a.type === type && a.duration === duration && !a.moreTimeMode
    );
  }

  // Wider fallbacks if primary pool is tiny
  if (pool.length <= 1) {
    const wider = ACTIVITIES.filter(
      a => a.type === type && !a.moreTimeMode
    );
    if (wider.length > pool.length) pool = wider;
  }

  if (!pool.length) return null;

  // Try unseen candidates first, sorted by history recency
  const unseenSorted = historyAwareSort(pool.filter(a => !state.seenActivityIds.includes(a.id)));
  if (unseenSorted.length) {
    const picked = unseenSorted[0];
    state.lastActivityId = picked.id;
    state.seenActivityIds.push(picked.id);
    return picked;
  }

  // All seen in this session — cycle: prefer least-recently shown globally
  const cycleSorted = historyAwareSort(pool.filter(a => a.id !== excludeId));
  const picked = cycleSorted.length ? cycleSorted[0] : pool[0];
  state.lastActivityId = picked.id;
  // Reset seen list, keep only current excluded id
  state.seenActivityIds = [excludeId, picked.id];
  return picked;
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

  // Re-render follow-up hint in new language (it contains translated text)
  renderFollowUpHint();

  // If result screen is showing, re-render in new language
  if (state.screen === "result" && state.currentActivity) {
    renderResult(state.currentActivity);
  }

  // If reason screen is showing, re-render question + options in new language
  if (state.screen === "reason") {
    renderReasonScreen();
  }

  // If type screen is showing, re-render in new language
  if (state.screen === "type") {
    renderTypeScreen();
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

// ── Why It Works ───────────────────────────────────────────────
// Short bilingual explanations keyed by type, with reason overrides.
// Used to populate the collapsible "Perché funziona" block.
const WHY_IT_WORKS = {
  // By type
  work: {
    en: "Small actions break mental resistance. You don't need to be ready — you just need to start.",
    it: "Le piccole azioni rompono la resistenza mentale. Non serve essere pronti — serve solo iniziare."
  },
  decision: {
    en: "Decisions get harder the longer you delay them. A chosen direction, even imperfect, beats no direction.",
    it: "Le decisioni diventano più difficili più aspetti. Una direzione scelta, anche imperfetta, vale più dell'immobilità."
  },
  training: {
    en: "Movement changes your mental state. You never feel like it before — you always feel better after.",
    it: "Il movimento cambia il tuo stato mentale. Non ne hai mai voglia prima — ti senti sempre meglio dopo."
  },
  thinking: {
    en: "Structured thinking replaces mental noise. Putting it on paper gives your brain permission to stop looping.",
    it: "Pensare in modo strutturato sostituisce il rumore mentale. Metterlo su carta dà al cervello il permesso di smettere di girare in tondo."
  },
  stuck: {
    en: "Being stuck dissolves through action, not through thinking. One move changes everything.",
    it: "Il blocco si scioglie con l'azione, non con il pensiero. Una sola mossa cambia tutto."
  },
  mental_cleanup: {
    en: "Writing out what's in your head offloads mental weight. Your brain stops looping when it trusts the paper.",
    it: "Scrivere quello che hai in testa scarica il peso mentale. Il tuo cervello smette di girare in tondo quando si fida della carta."
  },
  quick_win: {
    en: "Small completions build momentum. One done thing changes your mental state more than you expect.",
    it: "Le piccole conclusioni costruiscono slancio. Una cosa fatta cambia il tuo stato mentale più di quanto ti aspetti."
  },
  // Reason overrides (Truth Mode)
  "reason+too_difficult": {
    en: "Breaking a hard task into one step lowers the activation threshold. The difficulty feels smaller once you're moving.",
    it: "Ridurre un compito difficile a un solo passo abbassa la soglia di attivazione. La difficoltà sembra minore appena inizi."
  },
  "reason+dont_feel_like": {
    en: "Motivation follows action — it doesn't precede it. Starting without wanting to is exactly how it works.",
    it: "La motivazione segue l'azione, non la precede. Iniziare senza voglia è esattamente il meccanismo."
  },
  "reason+afraid": {
    en: "Fear shrinks with exposure. The action itself is the antidote — not preparation, not reassurance.",
    it: "La paura si riduce con l'esposizione. L'azione stessa è l'antidoto — non la preparazione, non le rassicurazioni."
  },
  "reason+dont_know_start": {
    en: "Any starting point is better than no starting point. Clarity comes from doing, not from planning.",
    it: "Qualsiasi punto di partenza è meglio di nessuno. La chiarezza viene dal fare, non dal pianificare."
  },
  "reason+feel_stuck": {
    en: "Stuck is a signal to act, not to wait. Even the wrong move gives you information the right direction.",
    it: "Bloccato è un segnale per agire, non per aspettare. Anche la mossa sbagliata ti dà informazioni sulla direzione giusta."
  },
  "reason+not_important": {
    en: "Clearing low-priority tasks frees mental space. Done and gone is better than lingering undone.",
    it: "Completare le cose poco importanti libera spazio mentale. Fatto e archiviato è meglio di lasciato in sospeso."
  }
};

function getWhyItWorks(activity) {
  const lang   = currentLang;
  const type   = activity.type;
  const reason = activity.reason;

  // Reason override takes priority in Truth Mode
  if (reason && WHY_IT_WORKS[`reason+${reason}`]) {
    return WHY_IT_WORKS[`reason+${reason}`][lang] || WHY_IT_WORKS[`reason+${reason}`].en;
  }
  if (type && WHY_IT_WORKS[type]) {
    return WHY_IT_WORKS[type][lang] || WHY_IT_WORKS[type].en;
  }
  return null;
}

// ── Dynamic Type Screen ────────────────────────────────────────
// Category configs for each intent. Each entry: { type, i18nKey, iconClass, svg }
const TYPE_CATEGORIES = {
  avoidance: [
    {
      type: "work", i18nKey: "typeWork", iconClass: "option-icon--work",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3h7l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 3v4h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="7" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><line x1="7" y1="13" x2="11" y2="13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
    },
    {
      type: "work", i18nKey: "typeSearchJob", iconClass: "option-icon--search",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="5" stroke="currentColor" stroke-width="1.8"/><line x1="12.5" y1="12.5" x2="17" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    },
    {
      type: "thinking", i18nKey: "typeLearn", iconClass: "option-icon--learn",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5C10 5 7 4 4 4.5V16c3-.5 6 .5 6 .5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 5c0 0 3-1 6-.5V16c-3-.5-6 .5-6 .5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="5" x2="10" y2="16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
    },
    {
      type: "decision", i18nKey: "typeDecision", iconClass: "option-icon--decision",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="17" x2="10" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10 10 L5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10 10 L15 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="5" cy="4" r="1.5" fill="currentColor"/><circle cx="15" cy="4" r="1.5" fill="currentColor"/><circle cx="10" cy="17" r="1.5" fill="currentColor"/></svg>'
    },
    {
      type: "training", i18nKey: "typeTraining", iconClass: "option-icon--training",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="3.5" r="1.5" fill="currentColor"/><path d="M11 6.5 L8.5 9.5 L5.5 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 6.5 L12.5 10 L10 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13 L8 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12.5 10 L15 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
    },
    {
      type: "stuck", i18nKey: "typeStuck", iconClass: "option-icon--stuck",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="9" width="12" height="9" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M7 9V6.5a3 3 0 016 0V9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14" r="1.2" fill="currentColor"/></svg>'
    },
  ],
  support: [
    {
      type: "mental_cleanup", supportType: "mental_cleanup",
      i18nKey: "typeMentalCleanup", iconClass: "option-icon--mental",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C7 3.5 4.5 6 4.5 9c0 1.8.8 3.4 2.1 4.5l-.1 2.5 2.2-1.2c.4.1.8.2 1.3.2 3 0 5.5-2.5 5.5-5.5S13 3.5 10 3.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="7.5" y1="9" x2="12.5" y2="9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/><line x1="7.5" y1="11" x2="11" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/></svg>'
    },
    {
      type: "get_clarity", supportType: "get_clarity",
      i18nKey: "typeGetClarity", iconClass: "option-icon--decision",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><line x1="10" y1="6.5" x2="10" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13" r="1" fill="currentColor"/></svg>'
    },
    {
      type: "regain_energy", supportType: "regain_energy",
      i18nKey: "typeRegainEnergy", iconClass: "option-icon--training",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h3l2-5 3 10 2-5h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
    },
    {
      type: "quick_win", supportType: "quick_win",
      i18nKey: "typeQuickWin", iconClass: "option-icon--quickwin",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
    {
      type: "reset_restart", supportType: "reset_restart",
      i18nKey: "typeResetRestart", iconClass: "option-icon--learn",
      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 10A4.5 4.5 0 1 0 7 6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><polyline points="4,4 7,6.5 4.5,9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    },
  ]
};

/**
 * renderTypeScreen()
 * Rewrites the type screen question, helper text, and option grid
 * based on state.selectedIntent ("avoidance" | "support").
 * Called on every entry to the type screen.
 */
function renderTypeScreen() {
  const intent  = state.selectedIntent || "avoidance";
  const t       = TRANSLATIONS[currentLang];
  const cats    = TYPE_CATEGORIES[intent] || TYPE_CATEGORIES.avoidance;

  // Question heading
  const qKey    = intent === "support" ? "questionTypeSupport"       : "questionTypeAvoidance";
  const hKey    = intent === "support" ? "questionTypeSupportHelper" : "questionTypeAvoidanceHelper";
  const qEl     = document.getElementById("type-question");
  const hEl     = document.getElementById("type-question-helper");
  if (qEl) qEl.innerHTML  = t[qKey]  || "";
  if (hEl) hEl.textContent = t[hKey] || "";

  // Option grid
  const gridEl = document.querySelector("#screen-type .option-grid");
  if (!gridEl) return;

  gridEl.innerHTML = cats.map(cat => {
    const label       = t[cat.i18nKey] || cat.i18nKey;
    const supportAttr = cat.supportType ? ` data-support-type="${cat.supportType}"` : "";
    return (
      `<button class="option-btn" data-type="${cat.type}" data-category-key="${cat.i18nKey}"${supportAttr}>` +
        `<span class="option-icon ${cat.iconClass}" aria-hidden="true">${cat.svg}</span>` +
        `<span>${label}</span>` +
      `</button>`
    );
  }).join("");

  // Wire click handlers on freshly rendered buttons
  gridEl.querySelectorAll("[data-type]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedType    = btn.dataset.type;
      state.selectedSupportType = btn.dataset.supportType || null;
      gridEl.querySelectorAll("[data-type]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      setTimeout(() => goTo("reason"), 200);
    });
  });
}

// ── Dynamic Reason Screen ──────────────────────────────────────
// Defines which question and options to show for each type.
// Each option: { reason, i18nKey, iconClass, iconSvg }
// Types not listed here use the default avoidance question.

const REASON_SCREENS = {

  get_clarity: {
    questionKey: "questionSupportGetClarity",
    options: [
      {
        reason: "too_many_options",
        i18nKey: "supportTooManyOptions",
        iconClass: "option-icon--decision",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="17" x2="10" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10 10 L5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M10 10 L15 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="5" cy="4" r="1.5" fill="currentColor"/><circle cx="15" cy="4" r="1.5" fill="currentColor"/><circle cx="10" cy="17" r="1.5" fill="currentColor"/></svg>'
      },
      {
        reason: "dont_know_choose",
        i18nKey: "supportDontKnowChoose",
        iconClass: "option-icon--nostart",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><polygon points="10,4 12,10 10,9 8,10" fill="currentColor"/><polygon points="10,16 8,10 10,11 12,10" fill="currentColor" opacity="0.4"/><circle cx="10" cy="10" r="1.2" fill="currentColor"/></svg>'
      },
      {
        reason: "too_many_open",
        i18nKey: "supportTooManyOpenThings",
        iconClass: "option-icon--mental",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C7 3.5 4.5 6 4.5 9c0 1.8.8 3.4 2.1 4.5l-.1 2.5 2.2-1.2c.4.1.8.2 1.3.2 3 0 5.5-2.5 5.5-5.5S13 3.5 10 3.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="7.5" y1="8" x2="12.5" y2="8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/><line x1="7.5" y1="10.5" x2="12.5" y2="10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.4"/></svg>'
      },
      {
        reason: "dont_know_important",
        i18nKey: "supportDontKnowImportant",
        iconClass: "option-icon--notimportant",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><line x1="6.5" y1="10" x2="13.5" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
      },
      {
        reason: "dont_know",
        i18nKey: "supportDontKnow",
        iconClass: "option-icon--dontknow",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>'
      }
    ]
  },

  regain_energy: {
    questionKey: "questionSupportRegainEnergy",
    options: [
      {
        reason: "feel_tired",
        i18nKey: "supportFeelTired",
        iconClass: "option-icon--nofeel",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9.5C6 7 7.5 5 10 5s4 2 4 4.5c0 3-4 7-4 7s-4-4-4-7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "no_motivation",
        i18nKey: "supportNoMotivation",
        iconClass: "option-icon--feelstuck",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10 C5 6.5 8 4 10 4 C14 4 15 7 13 9 C11 11 7 11 7 14 C7 16 9 17 11 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12.5" cy="15.5" r="1.5" fill="currentColor"/></svg>'
      },
      {
        reason: "everything_heavy",
        i18nKey: "supportEverythingHeavy",
        iconClass: "option-icon--afraid",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5 L17 5.5 V10 C17 14 10 17.5 10 17.5 C10 17.5 3 14 3 10 V5.5 Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="10" y1="8" x2="10" y2="11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.5" r="0.9" fill="currentColor"/></svg>'
      },
      {
        reason: "dont_want_to_start",
        i18nKey: "supportDontWantToStart",
        iconClass: "option-icon--difficult",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="11" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M7 8.5C7.5 6.5 9 5.5 10 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="17" x2="14" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
      },
      {
        reason: "dont_know",
        i18nKey: "supportDontKnow",
        iconClass: "option-icon--dontknow",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>'
      }
    ]
  },

  reset_restart: {
    questionKey: "questionSupportResetRestart",
    options: [
      {
        reason: "want_to_reset",
        i18nKey: "supportWantToReset",
        iconClass: "option-icon--learn",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 10A4.5 4.5 0 1 0 7 6.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><polyline points="4,4 7,6.5 4.5,9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "need_simplicity",
        i18nKey: "supportNeedSimplicity",
        iconClass: "option-icon--notimportant",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><line x1="6.5" y1="10" x2="13.5" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>'
      },
      {
        reason: "light_restart",
        i18nKey: "supportWantLightRestart",
        iconClass: "option-icon--quickwin",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "just_do_something",
        i18nKey: "supportJustDoSomething",
        iconClass: "option-icon--work",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3h7l3 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 3v4h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "dont_know",
        i18nKey: "supportDontKnow",
        iconClass: "option-icon--dontknow",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>'
      }
    ]
  },

  quick_win: {
    questionKey: "questionSupportQuickWin",
    options: [
      {
        reason: "small_easy",
        i18nKey: "reasonSmallEasy",
        iconClass: "option-icon--learn",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M7 10l2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "postponed",
        i18nKey: "reasonPostponed",
        iconClass: "option-icon--nofeel",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><line x1="10" y1="6" x2="10" y2="10.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13" r="0.9" fill="currentColor"/></svg>'
      },
      {
        reason: "low_effort",
        i18nKey: "reasonLowEffort",
        iconClass: "option-icon--training",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 13 Q7 7 10 10 Q13 13 16 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'
      },
      {
        reason: "finish_now",
        i18nKey: "reasonFinishNow",
        iconClass: "option-icon--work",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><line x1="7" y1="8" x2="13" y2="8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="11" x2="11" y2="11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 14l1.5 1.5 2.5-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
      },
      {
        reason: "dont_know",
        i18nKey: "reasonDontKnow",
        iconClass: "option-icon--dontknow",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>'
      }
    ]
  },

  mental_cleanup: {
    questionKey: "questionSupportMentalCleanup",
    options: [
      {
        reason: "too_much_in_head",
        i18nKey: "supportTooMuchOnMind",
        iconClass: "option-icon--mental",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C7 3.5 4.5 6 4.5 9c0 1.8.8 3.4 2.1 4.5l-.1 2.5 2.2-1.2c.4.1.8.2 1.3.2 3 0 5.5-2.5 5.5-5.5S13 3.5 10 3.5z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="7.5" y1="8" x2="12.5" y2="8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.6"/><line x1="7.5" y1="10.5" x2="12.5" y2="10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.4"/><line x1="7.5" y1="7" x2="12.5" y2="7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" opacity="0.3"/></svg>'
      },
      {
        reason: "confused",
        i18nKey: "supportFeelConfused",
        iconClass: "option-icon--nostart",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><polygon points="10,4 12,10 10,9 8,10" fill="currentColor"/><polygon points="10,16 8,10 10,11 12,10" fill="currentColor" opacity="0.4"/><circle cx="10" cy="10" r="1.2" fill="currentColor"/></svg>'
      },
      {
        reason: "stressed",
        i18nKey: "supportFeelStressed",
        iconClass: "option-icon--afraid",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5 L17 5.5 V10 C17 14 10 17.5 10 17.5 C10 17.5 3 14 3 10 V5.5 Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="10" y1="8" x2="10" y2="11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.5" r="0.9" fill="currentColor"/></svg>'
      },
      {
        reason: "cant_focus",
        i18nKey: "supportCantFocus",
        iconClass: "option-icon--feelstuck",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="1.8"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5"/></svg>'
      },
      {
        reason: "dont_know",
        i18nKey: "supportDontKnow",
        iconClass: "option-icon--dontknow",
        svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>'
      }
    ]
  }
};

/**
 * renderReasonScreen()
 * Called each time the reason screen is entered.
 * Rewrites the question heading and option buttons based on selectedType.
 * Types with a custom config in REASON_SCREENS get their own question/options.
 * All other types keep the default avoidance question and static HTML options.
 */
function renderReasonScreen() {
  const type       = state.selectedType;
  const t          = TRANSLATIONS[currentLang];
  // In support flow, look up by the supportType key (e.g. "get_clarity", "regain_energy")
  // In avoidance flow, look up by the activity type (e.g. "mental_cleanup", "quick_win")
  const lookupKey  = (state.selectedIntent === "support" && state.selectedSupportType)
    ? state.selectedSupportType
    : type;
  const config     = REASON_SCREENS[lookupKey];

  const questionEl = document.querySelector("#screen-reason .question");
  const gridEl     = document.querySelector("#screen-reason .option-grid");
  if (!questionEl || !gridEl) return;

  if (!config) {
    // Default: restore original question and static buttons
    questionEl.innerHTML = t.questionReason || "Why are you<br>avoiding it?";
    // Re-render the static default options (in case a custom set was injected before)
    gridEl.innerHTML = _defaultReasonOptionsHTML();
    _rewireReasonButtons();
    return;
  }

  // Custom question
  questionEl.innerHTML = t[config.questionKey] || config.questionKey;

  // Custom options — build HTML
  gridEl.innerHTML = config.options.map(opt => {
    const label = t[opt.i18nKey] || opt.i18nKey;
    return (
      `<button class="option-btn" data-reason="${opt.reason}">` +
        `<span class="option-icon ${opt.iconClass}" aria-hidden="true">${opt.svg}</span>` +
        `<span>${label}</span>` +
      `</button>`
    );
  }).join("");

  _rewireReasonButtons();
}

/** Returns the original static reason options HTML (for restoring default state). */
function _defaultReasonOptionsHTML() {
  const t = TRANSLATIONS[currentLang];
  const opts = [
    { reason: "too_difficult",   i18n: "reasonTooDifficult",  iconCls: "option-icon--difficult",    svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="11" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M7 8.5C7.5 6.5 9 5.5 10 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="17" x2="14" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
    { reason: "dont_feel_like",  i18n: "reasonDontFeelLike",  iconCls: "option-icon--nofeel",       svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="6" width="13" height="8" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M16 9v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="5" y="8" width="3" height="4" rx="1" fill="currentColor" opacity="0.5"/></svg>' },
    { reason: "afraid",          i18n: "reasonAfraid",         iconCls: "option-icon--afraid",       svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5 L17 5.5 V10 C17 14 10 17.5 10 17.5 C10 17.5 3 14 3 10 V5.5 Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><line x1="10" y1="8" x2="10" y2="11.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.5" r="0.9" fill="currentColor"/></svg>' },
    { reason: "dont_know_start", i18n: "reasonDontKnowStart", iconCls: "option-icon--nostart",      svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><polygon points="10,4 12,10 10,9 8,10" fill="currentColor"/><polygon points="10,16 8,10 10,11 12,10" fill="currentColor" opacity="0.4"/><circle cx="10" cy="10" r="1.2" fill="currentColor"/></svg>' },
    { reason: "not_important",   i18n: "reasonNotImportant",  iconCls: "option-icon--notimportant", svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><line x1="6.5" y1="10" x2="13.5" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>' },
    { reason: "feel_stuck",      i18n: "reasonFeelStuck",     iconCls: "option-icon--feelstuck",    svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10 C5 6.5 8 4 10 4 C14 4 15 7 13 9 C11 11 7 11 7 14 C7 16 9 17 11 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12.5" cy="15.5" r="1.5" fill="currentColor"/></svg>' },
    { reason: "dont_know_start", i18n: "reasonDontKnow",      iconCls: "option-icon--dontknow",     svg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="7.5" stroke="currentColor" stroke-width="1.8"/><path d="M7.8 7.8C7.8 6.5 8.8 5.5 10 5.5s2.2 1 2.2 2.3c0 1.5-2.2 2.2-2.2 3.7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="14.2" r="1" fill="currentColor"/></svg>' },
  ];
  return opts.map(o =>
    `<button class="option-btn" data-reason="${o.reason}">` +
      `<span class="option-icon ${o.iconCls}" aria-hidden="true">${o.svg}</span>` +
      `<span>${t[o.i18n] || o.i18n}</span>` +
    `</button>`
  ).join("");
}

/** Attaches click listeners to all current [data-reason] buttons in the reason screen. */
function _rewireReasonButtons() {
  document.querySelectorAll("#screen-reason [data-reason]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedReason = btn.dataset.reason;
      document.querySelectorAll("#screen-reason [data-reason]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      setTimeout(() => goTo("time"), 200);
    });
  });
}

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

  // Render dynamic type screen when entering it
  if (screenName === "type") renderTypeScreen();

  // Render dynamic reason screen when entering it
  if (screenName === "reason") renderReasonScreen();

  // Clear selection state when returning to home
  if (resetFlow) {
    state.selectedIntent       = null;
    state.selectedType         = null;
    state.selectedSupportType  = null;
    state.selectedReason       = null;
    state.selectedDuration     = null;
    state.selectedMoreTimeMode = null;
    state.currentActivity      = null;
    state.seenActivityIds      = [];
    state.anotherClickCount    = 0;
    document.querySelectorAll("[data-type], [data-reason], [data-duration], [data-moretime], [data-intent]")
      .forEach(b => b.classList.remove("selected"));
    refreshIntroStats();
    renderFollowUpHint();
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
  const content = adaptedActivityContent(activity);

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
  if (doneBtn)  {
    doneBtn.classList.remove("pulse", "confirmed");
    doneBtn.disabled = false;
    doneBtn.textContent = t.btnDone;
  }
  if (timerBtn) timerBtn.textContent = t.btnTimer;

  // Reset flash
  const flash = document.getElementById("done-flash");
  if (flash) { flash.textContent = ""; flash.classList.remove("visible"); }

  // Reset "another" button text to default (called on new activity from time screen)
  const btnAnother = document.getElementById("btn-another");
  if (btnAnother && t.btnAnother) btnAnother.textContent = t.btnAnother;

  // ── Why it works
  const whyToggle = document.getElementById("why-toggle");
  const whyBody   = document.getElementById("why-body");
  if (whyToggle && whyBody) {
    const whyText = getWhyItWorks(activity);
    if (whyText) {
      whyBody.textContent = whyText;
      whyToggle.textContent = t.whyToggle || "Perché funziona";
      whyToggle.style.display = "inline-block";
      // Reset to collapsed on every new task
      whyBody.classList.remove("open");
      whyToggle.setAttribute("aria-expanded", "false");
      whyBody.setAttribute("aria-hidden", "true");
    } else {
      whyToggle.style.display = "none";
      whyBody.classList.remove("open");
    }
  }
}

// ── Render Done Screen ─────────────────────────────────────────
function renderDone(stats) {
  const t = TRANSLATIONS[currentLang];
  document.getElementById("done-today").textContent  = stats.minutesToday;
  document.getElementById("done-total").textContent  = stats.totalMinutes;
  document.getElementById("done-streak").textContent = stats.streakDays;

  const streakSub = document.getElementById("done-streak-sub");
  if (streakSub) {
    streakSub.textContent = stats.streakDays <= 1
      ? (t.streakSub1 || "Non fermarti ora.")
      : (t.streakSub2 || "Stai costruendo continuità.");
  }
}

// ── Logo Component ─────────────────────────────────────────────
// Single source of truth for the logo markup.
// Call once at boot to inject the logo into every .logo element.
function renderLogo() {
  const markup =
    '<div class="logo-main">' +
      '<span class="logo-name">StartNow</span>' +
      '<span class="app-label">App</span>' +
    '</div>' +
    '<div class="logo-underline"></div>';
  document.querySelectorAll(".logo").forEach(el => {
    el.innerHTML = markup;
  });
}

// ── Event Wiring ───────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderLogo();

  // Language toggle
  document.querySelectorAll(".lang-btn").forEach(btn =>
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang))
  );

  // ── Single back-button handler (delegated to all .btn-back-nav
  //    and #btn-back on the result screen) ──────────────────────
  document.querySelectorAll(".btn-back-nav, #btn-back").forEach(btn =>
    btn.addEventListener("click", goBack)
  );

  // Intro → Intent
  document.getElementById("btn-start").addEventListener("click", () => goTo("intent"));

  // Intent buttons → set intent, go to type screen (which renders per-intent)
  document.querySelectorAll("[data-intent]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedIntent = btn.dataset.intent;
      state.selectedType   = null;
      state.selectedReason = null;
      document.querySelectorAll("[data-intent]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      setTimeout(() => goTo("type"), 200);
    });
  });

  // Type buttons are wired dynamically by renderTypeScreen() on each entry.
  // Reason buttons are wired dynamically by renderReasonScreen() on each entry.

  // Time buttons (5 / 10 / 15 min)
  document.querySelectorAll("[data-duration]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedDuration     = parseInt(btn.dataset.duration, 10);
      state.selectedMoreTimeMode = null;   // clear any previous More Time choice
      state.seenActivityIds      = [];     // reset seen history for new session
      state.anotherClickCount    = 0;
      document.querySelectorAll("[data-duration]").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const activity = pickActivity(
        state.selectedType, state.selectedDuration,
        state.selectedReason, null
      );
      state.currentActivity = activity
        || ACTIVITIES.find(a => a.duration === state.selectedDuration && !a.reason && !a.moreTimeMode)
        || ACTIVITIES[0];

      if (state.currentActivity) {
        state.seenActivityIds = [state.currentActivity.id];
        recordTaskShown(state.currentActivity);
      }
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

      state.seenActivityIds   = state.currentActivity ? [state.currentActivity.id] : [];
      state.anotherClickCount = 0;
      if (state.currentActivity) recordTaskShown(state.currentActivity);
      renderResult(state.currentActivity);
      setTimeout(() => goTo("result"), 200);
    });
  });

  // Result: Why it works toggle
  document.getElementById("why-toggle").addEventListener("click", () => {
    const toggle = document.getElementById("why-toggle");
    const body   = document.getElementById("why-body");
    const isOpen = body.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    body.setAttribute("aria-hidden", isOpen ? "false" : "true");
  });

  // Result: Done
  document.getElementById("btn-done").addEventListener("click", () => {
    stopTimer();
    const stats   = addMinutes(state.currentActivity.duration);
    markTaskCompleted(state.currentActivity);
    saveLastCompleted(state.currentActivity);
    const t       = TRANSLATIONS[currentLang];
    const doneBtn = document.getElementById("btn-done");
    const flash   = document.getElementById("done-flash");

    // Disable button immediately to prevent double-click
    doneBtn.disabled = true;

    // 1. Swap button text + muted visual state
    doneBtn.textContent = t.btnDoneConfirmed || "✔ Continua così";
    doneBtn.classList.add("confirmed");

    // 2. Show a random flash message
    if (flash && t.doneFlashMessages) {
      const pool = t.doneFlashMessages;
      flash.textContent = pool[Math.floor(Math.random() * pool.length)];
      flash.classList.add("visible");
    }

    // 3. After 1.5s: navigate to done screen
    setTimeout(() => {
      if (flash) flash.classList.remove("visible");
      doneBtn.classList.remove("confirmed");
      doneBtn.disabled = false;
      renderDone(stats);
      goTo("done");
    }, 1500);
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
      document.getElementById("btn-another").insertAdjacentElement("afterend", msg);
      return;
    }

    // Hide any previous "no other task" message
    const noTaskMsg = document.getElementById("no-other-task-msg");
    if (noTaskMsg) noTaskMsg.style.display = "none";

    // Increment click count and update button label dynamically from click 2 onward
    state.anotherClickCount++;
    const t        = TRANSLATIONS[currentLang];
    const variants = t.anotherVariants || [t.btnAnother];
    const varIdx   = Math.min(state.anotherClickCount - 1, variants.length - 1);
    const btnEl    = document.getElementById("btn-another");
    if (btnEl) btnEl.textContent = variants[varIdx];

    state.currentActivity = activity;
    recordTaskShown(activity);
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
      localStorage.removeItem(HISTORY_KEY);
      localStorage.removeItem(LAST_COMPLETED_KEY);
      refreshIntroStats();
      renderFollowUpHint(); // re-renders with no data → hint disappears
    }
  });

  // Done: Start another (jump to intent, clear history so Back from intent goes home)
  document.getElementById("btn-again").addEventListener("click", () => {
    history.length = 0;
    goTo("intent");
  });

  // Done: Home
  document.getElementById("btn-home").addEventListener("click", () => {
    history.length = 0; // clear stack — deliberate jump to root
    goTo("intro", { pushHistory: false, resetFlow: true });
  });

  // "Reduce to 2 min" button
  document.getElementById("btn-reduce-2").addEventListener("click", () => {
    state.selectedDuration     = 2;
    state.selectedMoreTimeMode = null;
    state.seenActivityIds      = [];
    state.anotherClickCount    = 0;
    document.querySelectorAll("[data-duration]").forEach(b => b.classList.remove("selected"));

    // Try to find a proper 2-min activity for the type; fall back to smallest available
    let activity = pickActivity(state.selectedType, 2, state.selectedReason, null);
    if (!activity) {
      // Pick smallest duration activity for this type and add a "first step only" note
      const fallback = ACTIVITIES
        .filter(a => a.type === state.selectedType && !a.moreTimeMode && !a.reason)
        .sort((a, b) => a.duration - b.duration)[0]
        || ACTIVITIES[0];

      const t = TRANSLATIONS[currentLang];
      const note = t.reduceFirstStep || "Do only the first step.";
      // Clone the fallback activity and override the description with the reduction note
      activity = {
        ...fallback,
        en: { ...fallback.en, description: note },
        it: { ...fallback.it, description: note }
      };
    }

    state.currentActivity = activity;
    if (activity.id) {
      state.seenActivityIds = [activity.id];
      recordTaskShown(activity);
    }
    renderResult(activity);
    setTimeout(() => goTo("result"), 200);
  });

  // Boot: render follow-up hint (before setLanguage so it uses saved lang)
  renderFollowUpHint();

  // Boot: apply saved language, then show intro (no history entry)
  setLanguage(currentLang);
  goTo("intro", { pushHistory: false });
});
