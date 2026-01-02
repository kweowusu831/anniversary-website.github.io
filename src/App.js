import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Lock, Calendar, Music, BookOpen, Sparkles, MessageCircle, Mountain, Star, Compass, Infinity, Gift, Utensils } from 'lucide-react';

const AnniversaryCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [spinnerResult, setSpinnerResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [favorResult, setFavorResult] = useState(null);
  const [isSpinningFavor, setIsSpinningFavor] = useState(false);
  const [fireworks, setFireworks] = useState([]);
  const [responses, setResponses] = useState(() => {
    const saved = localStorage.getItem('dayResponses');
    return saved ? JSON.parse(saved) : {};
  });

  const demoMode = false; // Set to false for production

  const saveResponse = (dayNumber, response) => {
    const newResponses = { ...responses, [dayNumber]: response };
    setResponses(newResponses);
    localStorage.setItem('dayResponses', JSON.stringify(newResponses));
  };

  const isDateUnlocked = (dayNumber) => {
    if (demoMode) return true;
    const currentDate = new Date();
    const unlockDate = new Date(2026, 0, dayNumber);
    return currentDate >= unlockDate;
  };

  const isRestaurantSpinnerUnlocked = () => {
    if (demoMode) return true;
    const currentDate = new Date();
    const unlockDate = new Date(2026, 0, 13); // January 13th
    return currentDate >= unlockDate;
  };

  const isFavorSpinnerUnlocked = () => {
    if (demoMode) return true;
    const currentDate = new Date();
    const unlockDate = new Date(2026, 0, 7); // January 7th
    return currentDate >= unlockDate;
  };

  // Fireworks effect - DISABLED
  useEffect(() => {
    // Fireworks disabled to prevent re-render issues
  }, []);

  // Admin panel keyboard shortcut - Shift + A + D + M
  useEffect(() => {
    const pressedKeys = new Set();
    
    const handleKeyDown = (e) => {
      pressedKeys.add(e.key.toLowerCase());
      
      // Check if Shift + A + D + M are all pressed
      if (e.shiftKey && pressedKeys.has('a') && pressedKeys.has('d') && pressedKeys.has('m')) {
        setShowAdminPanel(true);
        pressedKeys.clear();
      }
    };
    
    const handleKeyUp = (e) => {
      pressedKeys.delete(e.key.toLowerCase());
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const collagePhotos = [
    "/Photos/Collage/Image1.jpeg",
    "/Photos/Collage/image2.jpeg",
    "/Photos/Collage/image3.jpeg",
    "/Photos/Collage/Image4.jpeg",
    "/Photos/Collage/Image5.jpeg",
    "/Photos/Collage/Image6.jpeg",
    "/Photos/Collage/Image7.jpeg",
    "/Photos/Collage/image8.jpeg",
    "/Photos/Collage/Image9.jpeg",
    "/Photos/Collage/Image10.jpeg",
    "/Photos/Collage/Image11.jpeg",
    "/Photos/Collage/Image12.jpeg",
    "/Photos/Collage/image13.jpeg",
    "/Photos/Collage/image14.jpeg",
    "/Photos/Collage/Image15.jpeg",
    "/Photos/Collage/image16.jpeg",
    "/Photos/Collage/Image17.jpeg",
    "/Photos/Collage/Image18.jpeg",
    "/Photos/Collage/image19.jpeg",
    "/Photos/Collage/Image20.jpeg",
    "/Photos/Collage/Image21.jpeg",
    "/Photos/Collage/Image22.jpeg",
    "/Photos/Collage/Image23.jpeg",
    "/Photos/Collage/Image24.jpeg",
    "/Photos/Collage/image25.jpeg",
    "/Photos/Collage/image26.jpeg",
    "/Photos/Collage/Image27.jpeg",
    "/Photos/Collage/image28.jpeg",
    "/Photos/Collage/image29.jpeg",
    "/Photos/Collage/Image30.jpeg",
    "/Photos/Collage/Image31.jpeg",
    "/Photos/Collage/Image32.jpeg",
    "/Photos/Collage/Image33.jpeg",
    "/Photos/Collage/Image34.jpeg",
    "/Photos/Collage/Image35.jpeg",
    "/Photos/Collage/Image36.jpeg",
    "/Photos/Collage/Image37.jpeg",
    "/Photos/Collage/Image38.jpeg",
    "/Photos/Collage/Image39.jpeg",
    "/Photos/Collage/Image40.jpeg",
    "/Photos/Collage/Image41.jpeg",
    "/Photos/Collage/Image42.jpeg",
    "/Photos/Collage/Image43.jpeg",
    "/Photos/Collage/Image44.jpeg",
    "/Photos/Collage/Image45.jpeg",
    "/Photos/Collage/Image46.jpeg",
    "/Photos/Collage/image47.jpeg",
    "/Photos/Collage/image48.jpeg",
    "/Photos/Collage/Image49.jpeg",
    "/Photos/Collage/Image50.jpeg",
    "/Photos/Collage/Image51.jpeg",
    "/Photos/Collage/image52.jpeg",
    "/Photos/Collage/Image53.jpeg",
    "/Photos/Collage/image54.jpeg",
    "/Photos/Collage/image55.jpeg",
    "/Photos/Collage/image56.jpeg"
  ];

  const restaurants = [
    "Italian Restaurant - Your favorite pasta spot",
    "Steakhouse - That place with the amazing ribeye",
    "Sushi Restaurant - All the sushi you can eat",
    "French Bistro - Romantic and classy",
    "Mexican Restaurant - Tacos and margaritas",
    "Seafood Restaurant - Fresh catch of the day",
    "Asian Fusion - Something adventurous"
  ];

  const favors = [
    "One free pass - Watch your favorite show with no complaints",
    "Breakfast in bed - Your choice made with love",
    "Full body massage - 30 minutes minimum",
    "Shopping trip - I carry all the bags and give honest opinions",
    "Your choice of date night - Wherever you want to go",
    "Clean the entire house - You relax I handle it",
    "Cook your favorite meal - No takeout just homemade",
    "Movie marathon - Your pick your choice your couch spot",
    "One full day of Yes - Whatever you ask I say yes"
  ];

  const spinForRestaurant = () => {
    setIsSpinning(true);
    setSpinnerResult(null);
    setTimeout(() => {
      const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
      setSpinnerResult(randomRestaurant);
      setIsSpinning(false);
    }, 2000);
  };

  const spinForFavor = () => {
    setIsSpinningFavor(true);
    setFavorResult(null);
    setTimeout(() => {
      const randomFavor = favors[Math.floor(Math.random() * favors.length)];
      setFavorResult(randomFavor);
      setIsSpinningFavor(false);
    }, 2000);
  };

  const days = [
    { day: 1, date: "January 1st", title: "Thank You", subtitle: "For Two Years of Love", icon: Heart, bgColor: "#ffebcd", imageUrl: "/Photos/Collage/image59.jpeg", content: { message: "As we approach two years of love, the very first thing I want to say is thank you. Thank you for being there for me all this time and thank you for making me know a love as genuine and true as this one. Every day this year begins with you. I wanted to start 2026 by celebrating us one day at a time until we hit the monument of two years together.", note: "It is honestly crazy to me that we've even hit this point, but I know that God put us here for a reason. Please click through each day as it unlocks. Every moment here is meant to be a piece of my heart shared with you and promises and guarantees for you as we enter into the second year of this everlasting relationship. I love you so much and thank you for being you and being with me.", extraPhotos: ["/Photos/Collage/image57.JPEG", "/Photos/Collage/image58.JPEG"] }},
    { day: 2, date: "January 2nd", title: "Our Beginning", subtitle: "How We Started", icon: Sparkles, bgColor: "#e6e6fa", imageUrl: "/Photos/Collage/image60.jpeg", content: { 
      message: "It all started with a single Instagram picture. I saw you and I was completely captivated. I knew right then I had to reach out, even though I was nervous about what you might think.\n\nWhen I first met you, I was truly taken aback. Your beauty was impossible to deny, especially your smile. I thought I was the biggest flirt in the world until I met you, and then I quickly realized how wrong I was. You made me nervous in a way I had never experienced before, and that was something I could not ignore.\n\nI liked you so much, and although it didn't hurt when you said you wanted to be friends, it made me determined. I wanted to use that time to get to know you better, even though my feelings were already there. I wanted you to see just how much you meant to me. Looking back at our messages gave me time to reflect, and I realized that everything I wanted to do for you, I truly did. I cared more than I even knew at the time.", 
      note: "I didn't fully understand how deeply I felt until I read my own words again. If I could go back, I don't think I would change much, except that I would tell you how beautiful you were the very first moment I met you. You were someone I was instantly drawn to, someone I genuinely wanted to know. I will never forget meeting you because it was the moment I learned what it feels like to be drawn to someone before you even realize what is happening.\n\nI was vulnerable with you from the beginning, not just because I wanted you to like me or see the good in me, but because I wanted you to truly see me. I also wanted to see you, fully and honestly. Today, I want us to look back on where we started and appreciate how a simple connection grew into a friendship, and then into a love that is steady, meaningful, and unconditional.", 
      extraPhotos: [
        "/Photos/Collage/image87.jpeg",
        "/Photos/Collage/image86.jpeg",
        "/Photos/Collage/image85.jpeg",
        "/Photos/Collage/image84.jpeg",
        "/Photos/Collage/image83.jpeg",
        "/Photos/Collage/image82.jpeg",
        "/Photos/Collage/image81.jpeg",
        "/Photos/Collage/image80.jpeg",
        "/Photos/Collage/image79.jpeg",
        "/Photos/Collage/image78.jpeg",
        "/Photos/Collage/image77.jpeg",
        "/Photos/Collage/image76.jpeg",
        "/Photos/Collage/image75.jpeg",
        "/Photos/Collage/image74.jpeg",
        "/Photos/Collage/image73.jpeg",
        "/Photos/Collage/image72.jpeg",
        "/Photos/Collage/image71.jpeg",
        "/Photos/Collage/image70.jpeg",
        "/Photos/Collage/image69.jpeg",
        "/Photos/Collage/image68.jpeg",
        "/Photos/Collage/image67.jpeg",
        "/Photos/Collage/image66.jpeg",
        "/Photos/Collage/image65.jpeg",
        "/Photos/Collage/image64.jpeg",
        "/Photos/Collage/image63.jpeg",
        "/Photos/Collage/image62.jpeg",
        "/Photos/Collage/image61.jpeg"
      ] 
    }},
    { day: 3, date: "January 3rd", title: "When I Knew", subtitle: "The Moment I Realized", icon: Heart, bgColor: "#f0fff0", imageUrl: "/Photos/Collage/image97.jpeg", content: { 
      message: "Love is something that some say has a timeline, and others say you know when you know. I personally believe that the latter is true. I found myself loving you before I was consciously aware of it, like my heart understood what my mind had not yet accepted.\n\nI will never forget when I came home for Winter Break and we were on the phone. It was such a simple conversation, nothing extraordinary, nothing scripted, but I found my heart yearning for you, especially after our first date. I was so happy to hear your voice. It felt like home. I found myself thinking over and over about how much I cared about you, how much I missed you, and how desperately I wanted you to be mine.\n\nThen it happened. I blurted out \"I love you\" while we were on the phone, and immediately, I began to panic. My heart was racing. I was so scared and genuinely thought everything was over because of that one small slip. But one thing I did not do was regret it. I kept replaying it in my mind. Did I really say that? Did I mean it? But after thinking about it for hours, days, and weeks, one thing stood true: how I felt. I loved you, and that was the one thing I did not feel confused about or want to deny.", 
      note: "It was worth it. I am so glad I said what I said because it was the truth, and you deserved to know it. Getting to spend time with you on the phone, seeing you try out cute outfits and ask for my opinion, seeing you drunk and calling me while you were in ATL, it all meant so much to me. Every moment made my year end that much better, that much sweeter, and that much more meaningful.\n\nThat was the moment I knew. Not because it was perfect, but because it was real. And I would not change a single thing about it.", 
      extraPhotos: [
        "/Photos/Collage/image88.jpeg",
        "/Photos/Collage/image89.jpeg",
        "/Photos/Collage/image90.jpeg",
        "/Photos/Collage/image91.jpeg",
        "/Photos/Collage/image92.jpeg",
        "/Photos/Collage/image93.jpeg",
        "/Photos/Collage/image94.jpeg",
        "/Photos/Collage/image95.jpeg",
        "/Photos/Collage/image96.jpeg",
        "/Photos/Collage/image97.jpeg",
        "/Photos/Collage/image98.jpeg",
        "/Photos/Collage/image99.jpeg",
        "/Photos/Collage/image100.jpeg",
        "/Photos/Collage/image101.jpeg",
        "/Photos/Collage/image102.jpeg",
        "/Photos/Collage/image103.jpeg",
        "/Photos/Collage/image104.jpeg",
        "/Photos/Collage/image105.jpeg",
        "/Photos/Collage/image106.jpeg",
        "/Photos/Collage/image107.jpeg"
      ] 
    }},
    { day: 4, date: "January 4th", title: "What I Did Not Expect", subtitle: "How You Changed Me", icon: Compass, bgColor: "#f5f5dc", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "You showed me parts of myself I did not know existed...", note: "Love is not just about finding someone. It is about becoming someone better because of them.", extraPhotos: [] }},
    { day: 5, date: "January 5th", title: "The Little Things", subtitle: "What Makes My Day", icon: Star, bgColor: "#ffe4e1", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "It is never the big gestures. It is always been these...", note: "You do not even realize how much these matter. But they are everything.", extraPhotos: [] }},
    { day: 6, date: "January 6th", title: "The Hard Days", subtitle: "How We Grew", icon: Mountain, bgColor: "#fff0f5", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "Love is not just sunshine. It is choosing each other even when it is hard...", note: "The fact that we are here stronger than before means everything.", extraPhotos: [] }},
    { day: 7, date: "January 7th", title: "How You Love Me", subtitle: "The Ways I Feel It", icon: Heart, bgColor: "#faf0e6", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "You show love in a language all your own...", note: "You make me feel loved not just in words but in a thousand quiet ways.", extraPhotos: [] }},
    { day: 8, date: "January 8th", title: "Our Favorites", subtitle: "The Things We Share", icon: Music, bgColor: "#e0f7fa", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "These are the pieces of us...", note: "Every couple has their things. These are ours.", extraPhotos: [] }},
    { day: 9, date: "January 9th", title: "How I See You", subtitle: "Who You Really Are", icon: Sparkles, bgColor: "#fff8dc", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "When no one else is watching I see...", note: "This is who you are to me. Not the version you show the world but the real you.", extraPhotos: [] }},
    { day: 10, date: "January 10th", title: "Letters I Never Sent", subtitle: "Words I Kept Inside", icon: BookOpen, bgColor: "#ffefd5", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "There are things I felt but did not always say...", note: "Some feelings are too important to stay silent about.", extraPhotos: [] }},
    { day: 11, date: "January 11th", title: "Our Future", subtitle: "This Year Together", icon: Calendar, bgColor: "#e6f3ff", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "Here is what I am looking forward to...", note: "The future feels less scary and more exciting when it is with you.", extraPhotos: [] }},
    { day: 12, date: "January 12th", title: "Our Forever", subtitle: "What Us Looks Like", icon: Infinity, bgColor: "#f0e6ff", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "When I think about the long road ahead...", note: "Two years down. A lifetime to go.", extraPhotos: [] }},
    { day: 13, date: "January 13th", title: "Happy Anniversary", subtitle: "Two Years of Us", icon: Heart, bgColor: "#ffe4e8", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "We made it. Two years.", note: "Thank you for two years of being exactly who you are. I would not change a single thing.", extraPhotos: [] }},
    { day: 14, date: "January 14th", title: "My Promise: To Listen", subtitle: "Promises for Our Future", icon: Heart, bgColor: "#e8f5e9", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "I promise to truly listen to you, not just hear your words but understand your heart...", note: "Your thoughts, your feelings, your dreams - they all matter to me, and I will always make space for them.", extraPhotos: [] }},
    { day: 15, date: "January 15th", title: "My Promise: To Support", subtitle: "Promises for Our Future", icon: Mountain, bgColor: "#fff3e0", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "I promise to support your dreams and ambitions, to be your biggest cheerleader...", note: "Whatever you want to achieve, I will be right there beside you, believing in you every step of the way.", extraPhotos: [] }},
    { day: 16, date: "January 16th", title: "My Promise: To Grow", subtitle: "Promises for Our Future", icon: Sparkles, bgColor: "#f3e5f5", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "I promise to keep growing with you, to never stop becoming a better partner...", note: "We will grow together, learn together, and become better versions of ourselves for each other.", extraPhotos: [] }},
    { day: 17, date: "January 17th", title: "My Promise: To Cherish", subtitle: "Promises for Our Future", icon: Gift, bgColor: "#e1f5fe", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "I promise to cherish every moment we have together, big and small...", note: "From quiet mornings to grand adventures, I will treasure it all because it's with you.", extraPhotos: [] }},
    { day: 18, date: "January 18th", title: "My Promise: Forever", subtitle: "Promises for Our Future", icon: Infinity, bgColor: "#fce4ec", imageUrl: "/Photos/Collage/dayplaceholder.jpeg", content: { message: "I promise to choose you, every single day, for the rest of my life...", note: "Through every season, every challenge, every joy - it will always be you. Forever and always.", extraPhotos: [] }}
  ];

  const DayDetail = React.memo(({ day }) => {
    const Icon = day.icon;
    const [responseText, setResponseText] = useState(responses[day.day] || '');
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleSaveResponse = useCallback(() => {
      saveResponse(day.day, responseText);
      alert('Your response has been saved! 💕');
    }, [day.day, responseText]);

    const nextPhoto = useCallback(() => {
      if (day.content.extraPhotos && day.content.extraPhotos.length > 0) {
        setCurrentPhotoIndex((prev) => (prev + 1) % day.content.extraPhotos.length);
      }
    }, [day.content.extraPhotos]);

    const prevPhoto = useCallback(() => {
      if (day.content.extraPhotos && day.content.extraPhotos.length > 0) {
        setCurrentPhotoIndex((prev) => (prev - 1 + day.content.extraPhotos.length) % day.content.extraPhotos.length);
      }
    }, [day.content.extraPhotos]);

    return (
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" 
        style={{overflowY: 'auto'}}
      >
        <div 
          className="day-card-modal bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          <div className="relative h-48 overflow-hidden" style={{backgroundColor: day.bgColor}}>
            <button onClick={() => setSelectedDay(null)} className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-3xl w-10 h-10 flex items-center justify-center bg-white/50 rounded-full">×</button>
            <Icon className="w-12 h-12 mb-3" style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-2">Day {day.day} - {day.title}</h2>
            <p className="text-lg italic mb-4">{day.content.message}</p>
            <p className="text-gray-600 italic mb-6">{day.content.note}</p>

            {/* Photo Carousel - Before Response Box */}
            {day.content.extraPhotos && day.content.extraPhotos.length > 0 && (
              <div style={{marginBottom: '40px'}}>
                <h3 style={{color: '#ff69b4', fontSize: '1.3rem', marginBottom: '20px', textAlign: 'center'}}>📸 Our Memories</h3>
                <div style={{position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto'}}>
                  {/* Main Photo */}
                  <div style={{
                    width: '100%',
                    height: '400px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    position: 'relative',
                    backgroundColor: '#000'
                  }}>
                    <img 
                      src={day.content.extraPhotos[currentPhotoIndex]} 
                      alt={`Memory ${currentPhotoIndex + 1}`} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {/* Previous Button */}
                  {day.content.extraPhotos.length > 1 && (
                    <button
                      onClick={prevPhoto}
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        fontWeight: 'bold'
                      }}
                    >
                      ‹
                    </button>
                  )}

                  {/* Next Button */}
                  {day.content.extraPhotos.length > 1 && (
                    <button
                      onClick={nextPhoto}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#333',
                        fontWeight: 'bold'
                      }}
                    >
                      ›
                    </button>
                  )}

                  {/* Photo Counter */}
                  {day.content.extraPhotos.length > 1 && (
                    <div style={{
                      textAlign: 'center',
                      marginTop: '15px',
                      color: '#666',
                      fontSize: '0.95rem'
                    }}>
                      {currentPhotoIndex + 1} / {day.content.extraPhotos.length}
                    </div>
                  )}

                  {/* Dots Navigation */}
                  {day.content.extraPhotos.length > 1 && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '15px'
                    }}>
                      {day.content.extraPhotos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPhotoIndex(index)}
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: index === currentPhotoIndex ? '#ff69b4' : '#ddd',
                            cursor: 'pointer',
                            padding: 0,
                            transition: 'background-color 0.3s'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Response Section */}
            <div id="response-section" style={{marginTop: '30px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '2px solid #ff69b4'}}>
              <h3 style={{color: '#ff69b4', fontSize: '1.3rem', marginBottom: '10px'}}>💌 Your Response</h3>
              <p style={{color: '#666', fontSize: '0.95rem', marginBottom: '15px'}}>
                Share your thoughts about this day...
              </p>
              <textarea
                value={responseText}
                onChange={(e) => setResponseText(e.target.value)}
                placeholder="Write your response here..."
                autoFocus={false}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  padding: '12px',
                  fontSize: '1rem',
                  borderRadius: '6px',
                  border: '1px solid #ddd',
                  fontFamily: 'Times New Roman, serif',
                  resize: 'vertical'
                }}
              />
              <button
                onClick={handleSaveResponse}
                style={{
                  marginTop: '15px',
                  backgroundColor: '#ff69b4',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'Times New Roman, serif'
                }}
              >
                Save Response ❤️
              </button>
              {responses[day.day] && (
                <p style={{marginTop: '10px', color: '#28a745', fontSize: '0.9rem'}}>
                  ✓ Response saved!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={{fontFamily: 'Times New Roman, serif', backgroundColor: '#f9f9f9', minHeight: '100vh', padding: '20px', position: 'relative', overflow: 'hidden'}}>
      {/* Fireworks */}
      {fireworks.map(fw => (
        <div
          key={fw.id}
          style={{
            position: 'fixed',
            left: `${fw.left}%`,
            bottom: '0',
            width: '4px',
            height: '4px',
            background: `hsl(${Math.random() * 360}, 100%, 50%)`,
            borderRadius: '50%',
            animation: `firework ${fw.animationDuration}s ease-out forwards`,
            zIndex: 1
          }}
        />
      ))}

      <header style={{textAlign: 'center', marginBottom: '20px', paddingTop: '20px', position: 'relative', zIndex: 2}}>
        <h1 style={{color: '#333', fontSize: '3rem', marginBottom: '10px'}}>13 Days of Us</h1>
        <p style={{color: '#666', fontSize: '1.1rem', margin: 0}}>January 1st - 13th 2026 • Our Two Year Anniversary</p>
      </header>

      {/* Special New Year Message - Only shows on/after January 1st */}
      {(demoMode || isDateUnlocked(1)) && (
        <>
          <div style={{
            textAlign: 'center', 
            marginBottom: '30px', 
            position: 'relative', 
            zIndex: 2,
            padding: '40px',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c86dd7 50%, #6c5ce7 100%)',
            borderRadius: '20px',
            maxWidth: '850px',
            margin: '0 auto 30px auto',
            boxShadow: '0 10px 30px rgba(255, 105, 180, 0.4)',
            border: '4px solid #ff1493'
          }}>
            <div style={{marginBottom: '20px'}}>
              <span style={{fontSize: '4rem'}}>💕</span>
            </div>
            <h2 style={{
              color: '#fff', 
              fontSize: '3.5rem', 
              margin: '0 0 20px 0', 
              fontFamily: 'Georgia, serif', 
              textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
              fontWeight: 'bold'
            }}>
              I Love You, Sandrine
            </h2>
            <div style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #fff 0%, #ffe4e8 100%)',
              borderRadius: '30px',
              boxShadow: '0 6px 15px rgba(0,0,0,0.2)'
            }}>
              <p style={{
                background: 'linear-gradient(135deg, #ff1493 0%, #ff6b9d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '1.4rem', 
                fontStyle: 'italic', 
                margin: 0,
                fontWeight: '700'
              }}>
                ✨ Happy New Year 2026 ✨
              </p>
            </div>
            <div style={{marginTop: '25px', fontSize: '2.5rem'}}>
              <span>🎆</span>
              <span style={{margin: '0 15px'}}>❤️</span>
              <span>🎆</span>
            </div>
          </div>

          <div style={{
            margin: '0 auto 30px', 
            padding: '40px', 
            background: 'linear-gradient(135deg, #fff 0%, #fff5f7 50%, #ffe4e8 100%)',
            borderRadius: '20px', 
            maxWidth: '900px', 
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)', 
            lineHeight: '1.8', 
            position: 'relative', 
            zIndex: 2, 
            border: '3px solid #ff6b9d'
          }}>
            {/* Left roses - more of them */}
            <div style={{position: 'absolute', left: '-90px', top: '10px', fontSize: '3.5rem', animation: 'floatFlower 3s ease-in-out infinite'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-85px', top: '100px', fontSize: '3rem', animation: 'floatFlower 4s ease-in-out infinite', animationDelay: '0.5s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-90px', top: '190px', fontSize: '3.5rem', animation: 'floatFlower 3.5s ease-in-out infinite', animationDelay: '1s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-85px', top: '280px', fontSize: '3rem', animation: 'floatFlower 4.5s ease-in-out infinite', animationDelay: '1.5s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-90px', top: '370px', fontSize: '3.5rem', animation: 'floatFlower 3.8s ease-in-out infinite', animationDelay: '0.8s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-85px', top: '460px', fontSize: '3rem', animation: 'floatFlower 4.2s ease-in-out infinite', animationDelay: '2s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', left: '-90px', top: '550px', fontSize: '3.5rem', animation: 'floatFlower 3.3s ease-in-out infinite', animationDelay: '1.2s'}}>
              🌹
            </div>

            {/* Right roses - more of them */}
            <div style={{position: 'absolute', right: '-90px', top: '20px', fontSize: '3.5rem', animation: 'floatFlower 3.2s ease-in-out infinite', animationDelay: '0.3s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-85px', top: '110px', fontSize: '3rem', animation: 'floatFlower 4.2s ease-in-out infinite', animationDelay: '0.7s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-90px', top: '200px', fontSize: '3.5rem', animation: 'floatFlower 3.7s ease-in-out infinite', animationDelay: '1.3s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-85px', top: '290px', fontSize: '3rem', animation: 'floatFlower 4.1s ease-in-out infinite', animationDelay: '1.8s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-90px', top: '380px', fontSize: '3.5rem', animation: 'floatFlower 3.9s ease-in-out infinite', animationDelay: '0.9s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-85px', top: '470px', fontSize: '3rem', animation: 'floatFlower 4.3s ease-in-out infinite', animationDelay: '2.2s'}}>
              🌹
            </div>
            <div style={{position: 'absolute', right: '-90px', top: '560px', fontSize: '3.5rem', animation: 'floatFlower 3.4s ease-in-out infinite', animationDelay: '1.4s'}}>
              🌹
            </div>

            <div style={{textAlign: 'center', marginBottom: '30px'}}>
              <span style={{fontSize: '3rem'}}>💌</span>
            </div>

            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              This New Year holds a new meaning for me. It is a moment of renewal, a fresh beginning, a chance to restart and realign. Yet, in the midst of all that changes, there is one beautiful constant: you. Every new year begins with you, and because of that, it begins with purpose.
            </p>
            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              I wanted to start 2026 by celebrating us and how far we have come, and how deeply you have shaped my life. Sandrine, you have changed me in ways I never imagined. You have expanded my heart, strengthened my spirit, and shown me what it means to love with intention.
            </p>
            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              As this new year begins, I want to make you a promise. I know that I celebrate your accomplishments and your success, but this year I promise to celebrate you, not just in big moments, but day by day, in the quiet and ordinary moments that matter most. You mean everything to me, and words alone will never fully capture what you are to my life.
            </p>
            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              Yes, I love you, but what I feel goes far beyond that word. It is not about your body, your appearance, or even just the way you love me. It is about who you are at your core and the woman you continue to become. You have a beautiful soul, and it is that soul that draws me closer to you and gives me the strength and energy to fight for us no matter what comes our way.
            </p>
            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              You are my light on this earth. God blessed me beyond measure by placing you in my life, and I can never thank Him enough for such a gift. So in gratitude for that blessing, I choose to honor you, cherish you, and make sure you always know just how extraordinary you are.
            </p>
            <p style={{margin: '0 0 15px 0', textAlign: 'left', color: '#333', fontSize: '1.05rem'}}>
              My one and only Sandrine, happy New Year. I pray that we continue to grow, love deeper, and become better together, year after year.
            </p>
            <p style={{margin: '0 0 20px 0', textAlign: 'left', color: '#ff1493', fontSize: '1.15rem', fontWeight: 'bold', fontStyle: 'italic'}}>
              And this is only the beginning. Today, I want to take you back to where it all started.
            </p>
            <div style={{textAlign: 'center', marginTop: '25px'}}>
              <span style={{fontSize: '2.5rem'}}>💖</span>
            </div>
          </div>
        </>
      )}

      {/* Locked Message - Shows before January 1st */}
      {!demoMode && !isDateUnlocked(1) && (
        <div className="locked-intro-message" style={{
          textAlign: 'center',
          margin: '0 auto 50px auto',
          padding: '60px 40px',
          maxWidth: '700px',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          border: '3px solid #ff69b4',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{marginBottom: '30px'}}>
            <Lock style={{color: '#ff69b4', width: '80px', height: '80px'}} />
          </div>
          <h2 style={{
            color: '#fff',
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontFamily: 'Georgia, serif'
          }}>
            Something Special Awaits...
          </h2>
          <p style={{
            color: '#ffe4e8',
            fontSize: '1.3rem',
            marginBottom: '15px',
            lineHeight: '1.6'
          }}>
            This message will unlock on
          </p>
          <p style={{
            color: '#ff69b4',
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '20px 0'
          }}>
            January 1st, 2026
          </p>
          <p style={{
            color: '#ffe4e8',
            fontSize: '1.1rem',
            fontStyle: 'italic'
          }}>
            The beginning of something beautiful 💕
          </p>
        </div>
      )}

      <div style={{maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 2}}>
        {/* Top row of photos */}
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '10px'}}>
          {collagePhotos.slice(0, 10).map((photo, index) => (
            <div key={index} style={{width: '140px', height: '140px', overflow: 'hidden', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '2px solid #ddd', opacity: 0, animation: `fadeInPhoto 0.5s ease-in-out ${index * 0.1}s forwards`}}>
              <img src={photo} alt={`Photo ${index + 1}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          ))}
        </div>

        {/* Middle section: left photos, table, right photos */}
        <div style={{display: 'grid', gridTemplateColumns: '140px minmax(600px, 1fr) 140px', gap: '10px'}}>
          {/* Left column */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {collagePhotos.slice(10, 28).map((photo, index) => (
              <div key={index} style={{width: '140px', height: '140px', overflow: 'hidden', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '2px solid #ddd', opacity: 0, animation: `fadeInPhoto 0.5s ease-in-out ${(index + 10) * 0.1}s forwards`}}>
                <img src={photo} alt={`Photo ${index + 11}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            ))}
          </div>

          {/* Center table */}
          <div style={{margin: 0, padding: 0}}>
            <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: 0}}>
              <thead>
                <tr>
                  <th style={{border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2', width: '140px'}}>Photo</th>
                  <th style={{border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2'}}>Memory Details</th>
                </tr>
              </thead>
              <tbody>
                {days.map(day => {
                  const isUnlocked = isDateUnlocked(day.day);
                  const Icon = day.icon;
                  return (
                    <tr key={day.day} style={{backgroundColor: day.bgColor}}>
                      <td style={{border: '1px solid #ddd', padding: '12px', verticalAlign: 'top'}}>
                        <div style={{position: 'relative', width: '120px'}}>
                          <img src={day.imageUrl} alt={`Day ${day.day}`} style={{width: '120px', height: '120px', objectFit: 'cover', borderRadius: '5px'}} />
                        </div>
                      </td>
                      <td style={{border: '1px solid #ddd', padding: '16px', position: 'relative'}}>
                        {!isUnlocked && (
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: '10px',
                            zIndex: 10,
                            borderRadius: '5px'
                          }}>
                            <Lock style={{color: 'white', width: '50px', height: '50px'}} />
                            <span style={{color: 'white', fontSize: '1.1rem', fontWeight: 'bold'}}>
                              Unlocks on {day.date}
                            </span>
                          </div>
                        )}
                        <div style={{display: 'flex', alignItems: 'start', gap: '12px'}}>
                          <Icon style={{width: '28px', height: '28px', color: '#8B4513', flexShrink: 0, marginTop: '2px'}} />
                          <div style={{flex: 1}}>
                            <h3 style={{margin: '0 0 5px 0', color: '#333', fontSize: '1.4rem'}}>Day {day.day} - {day.title}</h3>
                            <p style={{margin: '0 0 8px 0', color: '#666', fontSize: '1rem'}}>{day.subtitle}</p>
                            <p style={{margin: '0 0 10px 0', color: '#555', fontStyle: 'italic', lineHeight: '1.5'}}>
                              {day.content.message.substring(0, 100) + '...'}
                            </p>
                            {isUnlocked && (
                              <button onClick={() => setSelectedDay(day)} style={{textDecoration: 'none', color: '#007BFF', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: 0, fontFamily: 'Times New Roman, serif'}}>
                                Read Full Memory →
                              </button>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Right column */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            {collagePhotos.slice(28, 46).map((photo, index) => (
              <div key={index} style={{width: '140px', height: '140px', overflow: 'hidden', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '2px solid #ddd', opacity: 0, animation: `fadeInPhoto 0.5s ease-in-out ${(index + 28) * 0.1}s forwards`}}>
                <img src={photo} alt={`Photo ${index + 29}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row of photos */}
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px'}}>
          {collagePhotos.slice(46, 56).map((photo, index) => (
            <div key={index} style={{width: '140px', height: '140px', overflow: 'hidden', borderRadius: '6px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '2px solid #ddd', opacity: 0, animation: `fadeInPhoto 0.5s ease-in-out ${(index + 46) * 0.1}s forwards`}}>
              <img src={photo} alt={`Photo ${index + 47}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
          ))}
        </div>
      </div>

      {/* Cat-Themed Virtual Hug & Kiss Component */}
      <div style={{
        maxWidth: '900px',
        margin: '30px auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Virtual Hug Button */}
        <div style={{
          padding: '40px',
          background: 'linear-gradient(135deg, #ffeef8 0%, #ffe4f0 100%)',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(255, 105, 180, 0.3)',
          textAlign: 'center',
          border: '3px solid #ff69b4',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onClick={() => {
          alert('🐱 *Purrrr* Wrapping my paws around you in the warmest hug! I love you so much, my love! 💕🐾');
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 105, 180, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 105, 180, 0.3)';
        }}
        >
          <div style={{fontSize: '4rem', marginBottom: '15px'}}>🐱</div>
          <h2 style={{
            color: '#d63384',
            fontSize: '1.8rem',
            marginBottom: '10px',
            fontFamily: 'Georgia, serif'
          }}>
            Virtual Cat Hug
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            Sending you the softest, furriest hug! 🤗🐾
          </p>
        </div>

        {/* Virtual Kiss Button */}
        <div style={{
          padding: '40px',
          background: 'linear-gradient(135deg, #fff0f5 0%, #ffe8f0 100%)',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(214, 51, 132, 0.3)',
          textAlign: 'center',
          border: '3px solid #d63384',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onClick={() => {
          alert('😽 *Mwah!* Little kitty kisses for you! Missing you so much! Can\'t wait to see you! 💋🐾💕');
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
          e.currentTarget.style.boxShadow = '0 10px 40px rgba(214, 51, 132, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(214, 51, 132, 0.3)';
        }}
        >
          <div style={{fontSize: '4rem', marginBottom: '15px'}}>😽</div>
          <h2 style={{
            color: '#d63384',
            fontSize: '1.8rem',
            marginBottom: '10px',
            fontFamily: 'Georgia, serif'
          }}>
            Virtual Cat Kiss
          </h2>
          <p style={{
            color: '#666',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            A thousand little kitty kisses! 💋😸
          </p>
        </div>
      </div>

      <div style={{maxWidth: '900px', margin: '0 auto 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', position: 'relative', zIndex: 2}}>
        <div style={{backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', position: 'relative'}}>
          {!isRestaurantSpinnerUnlocked() && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              zIndex: 10
            }}>
              <Lock style={{color: 'white', width: '50px', height: '50px'}} />
              <p style={{color: 'white', fontSize: '1.2rem', fontWeight: 'bold', margin: 0}}>
                🎉 Reserved for the 13th
              </p>
              <p style={{color: 'white', fontSize: '0.95rem', margin: 0}}>
                Our Anniversary Celebration!
              </p>
            </div>
          )}
          <Utensils style={{width: '48px', height: '48px', color: '#ff69b4', margin: '0 auto 20px'}} />
          <h2 style={{fontSize: '1.5rem', color: '#333', marginBottom: '15px'}}>Where Should We Eat?</h2>
          <p style={{color: '#666', marginBottom: '20px'}}>Spin to decide our anniversary dinner spot</p>
          <button 
            onClick={spinForRestaurant} 
            disabled={isSpinning || !isRestaurantSpinnerUnlocked()} 
            style={{
              backgroundColor: isRestaurantSpinnerUnlocked() ? '#ff69b4' : '#ccc', 
              color: '#fff', 
              border: 'none', 
              padding: '12px 24px', 
              fontSize: '1rem', 
              borderRadius: '8px', 
              cursor: (isSpinning || !isRestaurantSpinnerUnlocked()) ? 'not-allowed' : 'pointer', 
              fontFamily: 'Times New Roman, serif'
            }}
          >
            {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
          </button>
          {spinnerResult && (
            <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#ffe4e8', borderRadius: '8px'}}>
              <p style={{margin: 0, color: '#333', fontWeight: 'bold'}}>{spinnerResult}</p>
            </div>
          )}
        </div>

        <div style={{backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', position: 'relative'}}>
          {!isFavorSpinnerUnlocked() && (
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              zIndex: 10
            }}>
              <Lock style={{color: 'white', width: '50px', height: '50px'}} />
              <p style={{color: 'white', fontSize: '1.2rem', fontWeight: 'bold', margin: 0}}>
                🎁 Available January 7th
              </p>
              <p style={{color: 'white', fontSize: '0.95rem', margin: 0}}>
                A week into our journey!
              </p>
            </div>
          )}
          <Gift style={{width: '48px', height: '48px', color: '#9370DB', margin: '0 auto 20px'}} />
          <h2 style={{fontSize: '1.5rem', color: '#333', marginBottom: '15px'}}>Favor Wheel</h2>
          <p style={{color: '#666', marginBottom: '20px'}}>Spin to see what favor you can ask</p>
          <button 
            onClick={spinForFavor} 
            disabled={isSpinningFavor || !isFavorSpinnerUnlocked()} 
            style={{
              backgroundColor: isFavorSpinnerUnlocked() ? '#9370DB' : '#ccc', 
              color: '#fff', 
              border: 'none', 
              padding: '12px 24px', 
              fontSize: '1rem', 
              borderRadius: '8px', 
              cursor: (isSpinningFavor || !isFavorSpinnerUnlocked()) ? 'not-allowed' : 'pointer', 
              fontFamily: 'Times New Roman, serif'
            }}
          >
            {isSpinningFavor ? 'Spinning...' : 'Spin for a Favor!'}
          </button>
          {favorResult && (
            <div style={{marginTop: '20px', padding: '15px', backgroundColor: '#f0e6ff', borderRadius: '8px'}}>
              <p style={{margin: 0, color: '#333', fontWeight: 'bold'}}>{favorResult}</p>
            </div>
          )}
        </div>
      </div>

      <footer style={{textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff', marginTop: '40px', position: 'relative', zIndex: 2}}>
        <p style={{margin: 0}}>Made with love for our 2-year anniversary</p>
      </footer>

      {selectedDay && <DayDetail day={selectedDay} />}

      {/* Admin Panel - Secret Access */}
      {showAdminPanel && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={() => setShowAdminPanel(false)}
        >
          <div 
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '800px',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              width: '100%'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px'}}>
              <h2 style={{margin: 0, color: '#333', fontSize: '2rem'}}>🔐 Admin Panel</h2>
              <button 
                onClick={() => setShowAdminPanel(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  color: '#666'
                }}
              >
                ×
              </button>
            </div>
            
            <div style={{marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '10px'}}>
              <p style={{margin: 0, color: '#666', fontSize: '0.9rem'}}>
                📊 Total Responses: {Object.keys(responses).length}
              </p>
            </div>

            {Object.keys(responses).length === 0 ? (
              <div style={{textAlign: 'center', padding: '40px', color: '#999'}}>
                <p style={{fontSize: '1.2rem'}}>No responses yet</p>
                <p style={{fontSize: '0.9rem'}}>Sandrine hasn't written any responses yet!</p>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {Object.keys(responses).sort((a, b) => Number(a) - Number(b)).map(dayNum => {
                  const day = days.find(d => d.day === Number(dayNum));
                  return (
                    <div 
                      key={dayNum}
                      style={{
                        padding: '20px',
                        backgroundColor: day ? day.bgColor : '#f9f9f9',
                        borderRadius: '12px',
                        border: '2px solid #ddd'
                      }}
                    >
                      <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                        {day && <day.icon style={{width: '24px', height: '24px', color: '#ff69b4'}} />}
                        <h3 style={{margin: 0, color: '#333', fontSize: '1.3rem'}}>
                          Day {dayNum} - {day ? day.title : 'Unknown'}
                        </h3>
                      </div>
                      <div style={{
                        padding: '15px',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        border: '1px solid #ddd'
                      }}>
                        <p style={{
                          margin: 0,
                          color: '#555',
                          whiteSpace: 'pre-wrap',
                          lineHeight: '1.6',
                          fontSize: '1rem'
                        }}>
                          {responses[dayNum]}
                        </p>
                      </div>
                      <p style={{
                        margin: '10px 0 0 0',
                        color: '#999',
                        fontSize: '0.85rem'
                      }}>
                        Written on {day ? day.date : `Day ${dayNum}`}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}

            <div style={{marginTop: '30px', textAlign: 'center'}}>
              <button
                onClick={() => {
                  const data = JSON.stringify(responses, null, 2);
                  const blob = new Blob([data], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'sandrine-responses.json';
                  a.click();
                }}
                style={{
                  backgroundColor: '#ff69b4',
                  color: '#fff',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'Times New Roman, serif'
                }}
              >
                📥 Download All Responses
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInPhoto {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes firework {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-80vh) scale(0);
            opacity: 0;
          }
        }

        @keyframes floatFlower {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
          }
        }

        @keyframes floatHeart {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .photo-row-top,
          .photo-row-bottom {
            display: none !important;
          }
          
          .middle-section {
            grid-template-columns: 1fr !important;
          }
          
          .photo-column-left,
          .photo-column-right {
            display: none !important;
          }
          
          h1 {
            font-size: 2rem !important;
            padding: 0 10px !important;
          }
          
          header p {
            font-size: 0.9rem !important;
            padding: 0 10px !important;
          }
          
          .intro-box {
            padding: 15px !important;
            font-size: 0.9rem !important;
            margin: 0 10px !important;
          }
          
          table {
            font-size: 0.85rem !important;
          }
          
          table tr {
            position: relative !important;
            overflow: hidden !important;
          }
          
          .table-container {
            overflow-x: auto;
            margin: 0 10px !important;
            position: relative !important;
          }
          
          .spinner-section {
            grid-template-columns: 1fr !important;
            padding: 0 10px !important;
          }
        }

        @media (max-width: 480px) {
          table td, table th {
            padding: 8px !important;
            font-size: 0.8rem !important;
          }
          
          .day-icon {
            width: 20px !important;
            height: 20px !important;
          }
          
          /* Fix day card modal on mobile */
          .day-card-modal {
            max-height: 80vh !important;
            margin: 10px !important;
            width: calc(100vw - 20px) !important;
            max-width: 100% !important;
          }
          
          .day-card-modal .p-8 {
            padding: 20px !important;
          }
          
          .day-card-modal h2 {
            font-size: 1.5rem !important;
          }
          
          .day-card-modal p {
            font-size: 0.9rem !important;
          }
          
          /* Fix locked intro message on mobile */
          .locked-intro-message {
            padding: 30px 20px !important;
            margin: 0 10px 30px 10px !important;
            max-width: calc(100vw - 20px) !important;
          }
          
          .locked-intro-message h2 {
            font-size: 1.5rem !important;
          }
          
          .locked-intro-message p {
            font-size: 1rem !important;
          }
          
          .locked-intro-message svg {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>

      {/* Sweet Footer Message */}
      <div style={{
        maxWidth: '800px',
        margin: '50px auto 40px',
        padding: '50px 40px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
        border: '3px solid #ff69b4',
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{marginBottom: '20px'}}>
          <Heart style={{color: '#ff69b4', width: '60px', height: '60px', display: 'inline-block'}} />
        </div>
        <h2 style={{
          color: '#fff',
          fontSize: '2.5rem',
          marginBottom: '20px',
          fontFamily: 'Georgia, serif',
          lineHeight: '1.4'
        }}>
          Two Years Down, Forever to Go
        </h2>
        <p style={{
          color: '#ffe4e8',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '20px'
        }}>
          Thank you for being my person, my best friend, and the love of my life. Every single day with you is a blessing, and I can't wait to spend the rest of my life making more memories with you.
        </p>
        <p style={{
          color: '#ff69b4',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          fontStyle: 'italic',
          marginBottom: '15px'
        }}>
          I love you more than words can say 💕
        </p>
        <p style={{
          color: '#ffe4e8',
          fontSize: '1rem',
          marginTop: '30px'
        }}>
          Forever yours,<br/>
          <span style={{color: '#ff69b4', fontSize: '1.2rem', fontWeight: 'bold'}}>Barron</span>
        </p>
        <div style={{marginTop: '25px'}}>
          <div style={{display: 'inline-block'}}>
            {'💕 ❤️ 💖 💗 💓 💕'.split(' ').map((emoji, i) => (
              <span key={i} style={{
                fontSize: '1.5rem',
                margin: '0 5px',
                display: 'inline-block',
                animation: `floatHeart ${2 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}>
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnniversaryCalendar;