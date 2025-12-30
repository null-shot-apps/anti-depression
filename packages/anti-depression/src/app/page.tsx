'use client';

import { useState } from 'react';

type Mood = 'sad' | 'stressed' | 'anxious' | 'lonely' | 'bored' | null;
type Language = 'english' | 'pidgin' | 'spanish' | 'french' | 'yoruba' | 'igbo';

interface ComedyContent {
  type: 'note' | 'video';
  content: string;
  videoUrl?: string;
  language: Language;
}

const comedyDatabase: Record<Mood, Record<Language, ComedyContent[]>> = {
  sad: {
    english: [
      { type: 'note', content: "Why don't scientists trust atoms? Because they make up everything! Just like your brain is making up reasons to be sad. You're amazing! 💙", language: 'english' },
      { type: 'note', content: "Remember: You're not a mess, you're just a very interesting work in progress! 🌟", language: 'english' },
      { type: 'video', content: "Funny cat fails compilation", videoUrl: "https://www.youtube.com/embed/J---aiyznGQ", language: 'english' }
    ],
    pidgin: [
      { type: 'note', content: "Why person no dey trust atom? Na because dem dey form everything! Just like your brain dey form reasons to dey sad. You too much! 💙", language: 'pidgin' },
      { type: 'note', content: "Remember: You no be mess, you just dey progress well well! 🌟", language: 'pidgin' },
      { type: 'note', content: "Wetin make monkey no dey play with banana peel? E don tire to dey fall! But you go rise again! 😄", language: 'pidgin' }
    ],
    spanish: [
      { type: 'note', content: "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter! Y tú tienes todo lo que necesitas para ser feliz 💙", language: 'spanish' },
      { type: 'note', content: "Recuerda: Eres increíble, incluso cuando no lo sientes 🌟", language: 'spanish' }
    ],
    french: [
      { type: 'note', content: "Pourquoi les plongeurs plongent-ils toujours en arrière? Parce que sinon ils tombent dans le bateau! Comme toi, tu vas rebondir! 💙", language: 'french' },
      { type: 'note', content: "Tu es formidable, même quand tu ne le sens pas 🌟", language: 'french' }
    ],
    yoruba: [
      { type: 'note', content: "Kilode ti ologbo fi n beru omi? Nitori o ko fe ki ara re tutu! Sugbon iwo, o le koja nkan gbogbo! 💙", language: 'yoruba' },
      { type: 'note', content: "Ranti: O jẹ ẹni iyanu, paapaa nigba ti o ko ro bẹ 🌟", language: 'yoruba' }
    ],
    igbo: [
      { type: 'note', content: "Gini mere nkita anaghi eri nri ya? O na-eche ndi mmadu! Ma i mara na i di oke mma? 💙", language: 'igbo' },
      { type: 'note', content: "Cheta: I bu onye puru iche, obuna mgbe i na-enweghị mmetụta ahu 🌟", language: 'igbo' }
    ]
  },
  stressed: {
    english: [
      { type: 'note', content: "Stressed spelled backwards is desserts. Coincidence? I think not! Go treat yourself! 🍰", language: 'english' },
      { type: 'note', content: "Deep breaths! You've survived 100% of your worst days. You're doing great! 🌈", language: 'english' },
      { type: 'video', content: "Relaxing baby animals", videoUrl: "https://www.youtube.com/embed/AZ2ZPmEfjvU", language: 'english' }
    ],
    pidgin: [
      { type: 'note', content: "You know say 'stressed' backwards na 'desserts'? E no be coincidence o! Go chop better thing! 🍰", language: 'pidgin' },
      { type: 'note', content: "Breathe well well! You don survive all your bad days 100%. You dey do well! 🌈", language: 'pidgin' },
      { type: 'note', content: "Why person go dey stress when e fit dey rest? Take am easy, my guy! 😌", language: 'pidgin' }
    ],
    spanish: [
      { type: 'note', content: "El estrés es como una mecedora: te mantiene ocupado pero no te lleva a ninguna parte. ¡Relájate! 🌈", language: 'spanish' },
      { type: 'note', content: "Respira profundo. Has sobrevivido al 100% de tus peores días. ¡Eres increíble! 🍰", language: 'spanish' }
    ],
    french: [
      { type: 'note', content: "Le stress est comme un fauteuil à bascule: ça t'occupe mais ça ne te mène nulle part! Détends-toi! 🌈", language: 'french' },
      { type: 'note', content: "Respire profondément. Tu as survécu à 100% de tes pires jours! 🍰", language: 'french' }
    ],
    yoruba: [
      { type: 'note', content: "Wahala ko ni ba e! Gba isinmi, o ti koja awon ojo buburu re gbogbo! 🌈", language: 'yoruba' },
      { type: 'note', content: "Mi ẹmi jin jin. O ti yege ni 100% awọn ọjọ ti o buruju julọ rẹ! 🍰", language: 'yoruba' }
    ],
    igbo: [
      { type: 'note', content: "Nsogbu agaghi adi! Zuru ike, i gafela ubochi ojoo gi nile! 🌈", language: 'igbo' },
      { type: 'note', content: "Ku ume nke oma. I biala na 100% nke ubochi kacha njo gi! 🍰", language: 'igbo' }
    ]
  },
  anxious: {
    english: [
      { type: 'note', content: "Anxiety is just your brain trying to protect you from imaginary tigers. You're safe, you're loved! 🦁💕", language: 'english' },
      { type: 'note', content: "Fun fact: Worrying is like paying interest on a debt you don't owe. You got this! 💪", language: 'english' },
      { type: 'video', content: "Calming nature sounds", videoUrl: "https://www.youtube.com/embed/lE6RYpe9IT0", language: 'english' }
    ],
    pidgin: [
      { type: 'note', content: "Anxiety na your brain dey try protect you from tiger wey no dey! You safe, people love you! 🦁💕", language: 'pidgin' },
      { type: 'note', content: "Make I tell you: To dey worry na like you dey pay debt wey you no borrow! You fit do am! 💪", language: 'pidgin' },
      { type: 'note', content: "Wetin you dey fear? Na only fear dey fear fear! You strong pass! 😤", language: 'pidgin' }
    ],
    spanish: [
      { type: 'note', content: "La ansiedad es solo tu cerebro tratando de protegerte de tigres imaginarios. ¡Estás a salvo! 🦁💕", language: 'spanish' },
      { type: 'note', content: "Preocuparse es como pagar intereses sobre una deuda que no debes. ¡Tú puedes! 💪", language: 'spanish' }
    ],
    french: [
      { type: 'note', content: "L'anxiété, c'est juste ton cerveau qui essaie de te protéger de tigres imaginaires! Tu es en sécurité! 🦁💕", language: 'french' },
      { type: 'note', content: "S'inquiéter, c'est comme payer des intérêts sur une dette que tu ne dois pas! 💪", language: 'french' }
    ],
    yoruba: [
      { type: 'note', content: "Aibalẹ jẹ ọpọlọ rẹ ti n gbiyanju lati daabobo ọ lati awọn ekun oju inu. O wa lailewu! 🦁💕", language: 'yoruba' },
      { type: 'note', content: "Lati ṣaniyan jẹ bi sisanwo ẹlẹwọn lori gbese ti o ko ni! O le ṣe e! 💪", language: 'yoruba' }
    ],
    igbo: [
      { type: 'note', content: "Nchegbu bu naani ụbụrụ gi na-achọ ichebe gi site na agu nke echiche. I nọ ná nchekwa! 🦁💕", language: 'igbo' },
      { type: 'note', content: "Ichegbu bu dika ikwu ugwo maka ugwo i jiri! I nwere ike ime ya! 💪", language: 'igbo' }
    ]
  },
  lonely: {
    english: [
      { type: 'note', content: "You're never alone! Even your gut has billions of bacteria cheering for you! 🦠💕 (Okay, that's weird but true!)", language: 'english' },
      { type: 'note', content: "Loneliness is just your heart making room for amazing connections coming your way! 🌟", language: 'english' },
      { type: 'video', content: "Wholesome friendship moments", videoUrl: "https://www.youtube.com/embed/meiU6TxysCg", language: 'english' }
    ],
    pidgin: [
      { type: 'note', content: "You no dey alone o! Even your belle get billions of bacteria wey dey support you! 🦠💕 (E funny but na true!)", language: 'pidgin' },
      { type: 'note', content: "To dey lonely na your heart dey create space for better people wey go come! 🌟", language: 'pidgin' },
      { type: 'note', content: "Why you go dey alone when even your shadow dey follow you? You get company! 😊", language: 'pidgin' }
    ],
    spanish: [
      { type: 'note', content: "¡Nunca estás solo! Incluso tu intestino tiene miles de millones de bacterias animándote! 🦠💕", language: 'spanish' },
      { type: 'note', content: "La soledad es solo tu corazón haciendo espacio para conexiones increíbles! 🌟", language: 'spanish' }
    ],
    french: [
      { type: 'note', content: "Tu n'es jamais seul! Même ton intestin a des milliards de bactéries qui t'encouragent! 🦠💕", language: 'french' },
      { type: 'note', content: "La solitude, c'est juste ton cœur qui fait de la place pour de belles connexions! 🌟", language: 'french' }
    ],
    yoruba: [
      { type: 'note', content: "O ko wa nikan! Paapaa inu rẹ ni awọn kokoro-arun bilionu ti n ṣe atilẹyin fun ọ! 🦠💕", language: 'yoruba' },
      { type: 'note', content: "Iṣọkan jẹ ọkan rẹ ti n ṣe aaye fun awọn asopọ ti o dara ti n bọ! 🌟", language: 'yoruba' }
    ],
    igbo: [
      { type: 'note', content: "I nọghị naanị gi! Ọbụna afọ gi nwere ọtụtụ ijikiri bacteria na-akwado gi! 🦠💕", language: 'igbo' },
      { type: 'note', content: "Owu ọmụma bụ naanị obi gị na-eme oghere maka njikọ dị egwu na-abịa! 🌟", language: 'igbo' }
    ]
  },
  bored: {
    english: [
      { type: 'note', content: "Boredom is your brain's way of saying 'Hey, let's do something awesome!' So... let's! 🚀", language: 'english' },
      { type: 'note', content: "Why was the math book sad? It had too many problems! Unlike you - you're problem-free and ready for fun! 📚😄", language: 'english' },
      { type: 'video', content: "Amazing talent compilation", videoUrl: "https://www.youtube.com/embed/Xw1C5T-fH2Y", language: 'english' }
    ],
    pidgin: [
      { type: 'note', content: "Boredom na your brain dey talk say 'Oya make we do something sharp!' So... make we do am! 🚀", language: 'pidgin' },
      { type: 'note', content: "Why maths book dey always sad? E get too many wahala! But you no get wahala - you ready to enjoy! 📚😄", language: 'pidgin' },
      { type: 'note', content: "Wetin person go do when e dey bored? Dance! Sing! Do anything wey go make you happy! 💃", language: 'pidgin' }
    ],
    spanish: [
      { type: 'note', content: "El aburrimiento es la forma en que tu cerebro dice '¡Hagamos algo increíble!' Así que... ¡vamos! 🚀", language: 'spanish' },
      { type: 'note', content: "¿Por qué estaba triste el libro de matemáticas? ¡Tenía demasiados problemas! Tú no - estás listo para divertirte! 📚😄", language: 'spanish' }
    ],
    french: [
      { type: 'note', content: "L'ennui, c'est ton cerveau qui dit 'Hé, faisons quelque chose de génial!' Alors... allons-y! 🚀", language: 'french' },
      { type: 'note', content: "Pourquoi le livre de maths était-il triste? Il avait trop de problèmes! Pas toi - tu es prêt à t'amuser! 📚😄", language: 'french' }
    ],
    yoruba: [
      { type: 'note', content: "Aiṣe jẹ ọna ti ọpọlọ rẹ lati sọ pe 'Jẹ ki a ṣe nkan nla!' Nitorinaa... jẹ ki a lọ! 🚀", language: 'yoruba' },
      { type: 'note', content: "Kilode ti iwe mathematiki fi banuje? O ni awọn iṣoro pupọ ju! Kii ṣe iwọ - o ṣetan fun igbadun! 📚😄", language: 'yoruba' }
    ],
    igbo: [
      { type: 'note', content: "Ike gwụrụ bụ ụzọ ụbụrụ gị si ekwu 'Ka anyị mee ihe dị egwu!' Ya mere... ka anyi gaa! 🚀", language: 'igbo' },
      { type: 'note', content: "Gini mere akwụkwọ mgbakọ na mwepụ ji wute? O nwere ọtụtụ nsogbu! Ọ bụghị gị - i dị njikere maka ọṅụ! 📚😄", language: 'igbo' }
    ]
  }
};

export default function Landing() {
  const [selectedMood, setSelectedMood] = useState<Mood>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const [currentContent, setCurrentContent] = useState<ComedyContent | null>(null);
  const [showContent, setShowContent] = useState(false);

  const moods: { value: Mood; label: string; emoji: string; color: string }[] = [
    { value: 'sad', label: 'Sad', emoji: '😢', color: 'from-blue-500 to-blue-600' },
    { value: 'stressed', label: 'Stressed', emoji: '😰', color: 'from-orange-500 to-orange-600' },
    { value: 'anxious', label: 'Anxious', emoji: '😟', color: 'from-purple-500 to-purple-600' },
    { value: 'lonely', label: 'Lonely', emoji: '😔', color: 'from-indigo-500 to-indigo-600' },
    { value: 'bored', label: 'Bored', emoji: '😑', color: 'from-gray-500 to-gray-600' }
  ];

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'english', label: 'English', flag: '🇬🇧' },
    { value: 'pidgin', label: 'Pidgin', flag: '🇳🇬' },
    { value: 'spanish', label: 'Español', flag: '🇪🇸' },
    { value: 'french', label: 'Français', flag: '🇫🇷' },
    { value: 'yoruba', label: 'Yorùbá', flag: '🇳🇬' },
    { value: 'igbo', label: 'Igbo', flag: '🇳🇬' }
  ];

  const generateContent = () => {
    if (!selectedMood) return;
    
    const moodContent = comedyDatabase[selectedMood][selectedLanguage];
    const randomContent = moodContent[Math.floor(Math.random() * moodContent.length)];
    setCurrentContent(randomContent);
    setShowContent(true);
  };

  const reset = () => {
    setShowContent(false);
    setCurrentContent(null);
    setSelectedMood(null);
  };

  if (showContent && currentContent) {
    return (
      <div className="min-h-[100dvh] w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 space-y-6 animate-fade-in">
          <div className="text-center space-y-4">
            {currentContent.type === 'note' ? (
              <>
                <div className="text-6xl mb-4">😊</div>
                <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed">
                  {currentContent.content}
                </p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{currentContent.content}</h3>
                {currentContent.videoUrl && (
                  <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      width="100%"
                      height="100%"
                      src={currentContent.videoUrl}
                      title="Comedy video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                )}
              </>
            )}
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={generateContent}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Show Me More! 🎉
            </button>
            <button
              onClick={reset}
              className="flex-1 bg-gray-200 text-gray-700 py-4 px-6 rounded-xl font-semibold text-lg hover:bg-gray-300 transition-all transform hover:scale-105"
            >
              Change Mood
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            MoodLift 🌈
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            Your personalized dose of joy & laughter
          </p>
        </div>

        {/* Language Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 animate-slide-up">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">Choose Your Language</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.value}
                onClick={() => setSelectedLanguage(lang.value)}
                className={`p-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 ${
                  selectedLanguage === lang.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl mr-2">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mood Selection */}
        <div className="bg-white rounded-3xl shadow-xl p-6 space-y-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-semibold text-gray-800 text-center">How are you feeling?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-6 rounded-2xl font-semibold transition-all transform hover:scale-110 ${
                  selectedMood === mood.value
                    ? `bg-gradient-to-br ${mood.color} text-white shadow-2xl scale-110`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-4xl mb-2">{mood.emoji}</div>
                <div className="text-sm md:text-base">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        {selectedMood && (
          <div className="text-center animate-fade-in">
            <button
              onClick={generateContent}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 px-12 rounded-2xl font-bold text-2xl hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 shadow-2xl"
            >
              Lift My Mood! 🚀
            </button>
          </div>
        )}

        {/* Info Footer */}
        <div className="text-center text-gray-600 text-sm space-y-2 pt-8">
          <p>💝 Remember: You are loved, you are worthy, you are enough</p>
          <p className="text-xs">If you're experiencing severe depression, please reach out to a mental health professional</p>
        </div>
      </div>
    </div>
  );
}

