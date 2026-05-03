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
    btnStart:        "What are you avoiding?",

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
    btnStart:        "Cosa stai evitando?",

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
    const activity = pickActivity(
      state.selectedType, state.selectedDuration,
      state.selectedReason, state.selectedMoreTimeMode
    );
    state.currentActivity = activity || state.currentActivity;
    renderResult(state.currentActivity);
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
