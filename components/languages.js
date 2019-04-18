export const LANGUAGES = {
  "🇬🇧": "English",
  "🇫🇷": "French",
  "🇳🇱": "Dutch",
  "🇪🇸": "Spanish",
  "🇩🇪": "German",
  "🇷🇺": "Russian",
  "PL": "Polish",
  "🇧🇷": "Portuguese",
  "🇷🇴": "Romanian",
  "🇭🇷": "Croatian",
  "🇭🇺": "Hungarian",
  "🇸🇦": "Arabic",
  "🇳🇴": "Norwegian"
};

export const loadLanguages = (initial, [ language, setLanguage ]) => {
  if (language === "🇽🇽") {
    if (LANGUAGES.hasOwnProperty(initial)) {
      language = initial;
    } else {
      language = "🇬🇧";
    }

    // Store the newly derived initial language.
    setLanguage(language);
  }

  const { BODY, FAQ } = require("../language/" + LANGUAGES[language]);

  return [{
      body: BODY,
      faq: FAQ,
    },
    Object.keys(LANGUAGES),
    language,
    (e, l) => {
      e.preventDefault();
      setLanguage(l);
    }
  ];
};

