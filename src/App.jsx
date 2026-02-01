import React, { useState } from 'react';
import { Camera, Mail, Facebook, Instagram, Home, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');

  // Edit these values directly in the code
  const profileData = {
    imageUrl: '/images/profile.jpg', // Add your image URL here
    name: 'Dennis Deevo Guevarra',
    title: 'Ateneo Journey Map',
    bio: 'Hello there! You can call me Deevo, I am an aspiring Information Technology professional in this specific field and I always wanted to tinker around when it comes to technology. What drives me the most is my sole purpose in life to become better as an individual, so that I can help people around me, especially those who are in need the most. I am also a musician who performs in various events in Ateneo, and other external events as well that helps me hone my skills when performing. Being a passionate kid back then until now, I was also influenced by playing video games that gave me motive on what type of field I was going to focus on. College made me realize a lot of things, whether it is positive or negative, I always think of it as an opportunity for growth no matter what experiences I am facing in life.',
  };

  // Edit your social media links here
  const socialLinks = {
    facebook: 'https://www.facebook.com/epoy.geee/',
    instagram: 'https://www.instagram.com/dibogeee',
    gmail: 'mailto:dennisdeevoguevarra@gmail.com',
  };

  // Edit your college experiences here
  const collegeExperiences = [
    {
      imageUrl: '/images/mv.jpg', // Add experience image URL
      title: 'Ateneo Repertory Company MV \'23',
      description: 'This was my first memorable college experience in Ateneo. We had the opportunity to represent the university and created a music video for Ateneo First Year Onboarding Program 2023. I made some friends and bandmates along the way with the same passion as I am. It showed me a path on how music is an art for all of us and can be welcoming to the community.',
    },
    {
      imageUrl: '/images/asp.jpeg', // Add experience image URL
      title: 'Ateneo SAMAHAN Productions',
      description: 'As I journey in my college life, I also became part of the SAMAHAN team in event production. We handle events in the university to be able to showcase a prestige experience for all students, coordinators, and employees working in Ateneo to give them cherishable moments along the way. I met these people who are professionals that motivated me into this field and serve the Ateneo community.',
    },
    {
      imageUrl: '/images/echoes.png', // Add experience image URL
      title: 'Echoes MV \'24',
      description: 'This was one of the most memorable moments I experienced in my college journey because I was the project manager and the band head of Echoes. It started off with a concept in mind on how we would want to properly execute this music video shoot, including the arrangement, venue, theme, and Take One production team during this event. We were also recognized by our favorite artist Sunkissed Lola.',
    },
  ];

  // Edit your plans and growth sections here
  const plansAndGrowth = [
    {
      imageUrl: '/images/cybersecurity.jpg', // Add plan/growth image URL
      title: 'Short-term Goals',
      description: 'Currently, the skills I am pursuing on is learning how to code and understanding different systems and their functionalities. This can help both my academic and personal goals that becomes a part of my skillset. With this type of skill, I can learn how to think critically and formulate solutions or problem-solving skills as an individual who is pursuing Information Technology.',
    },
    {
      imageUrl: '/images/thesis.jpeg', // Add plan/growth image URL
      title: 'Career Aspirations',
      description: 'As an Information Technology student, I aspire to become a network engineer or a cybersecurity specialist who manages different systems for both hardware and software. I want to enhance my skills and creativity when it comes to solving real-world issues in the technology industry. Personally, innovation is the key to turning constraints into opportunities and ideas into real, lasting impact.',
    },
    {
      imageUrl: '/images/graduation.jpeg', // Add plan/growth image URL
      title: 'Personal Development',
      description: 'My commitment to academic learning and self-improvement has always been persistent ever since I became part of the Ateneo de Davao University. I learned lessons with my peers and they helped me strive to where I am today. After I graduate in this university, I want to learn more about about the world and what they can offer in my own personal journey and development.',
    },
  ];

  // Edit your reflections here
  const reflections = {
    academicGrowth: 'My academic journey in technology has reshaped how I understand learning itself. At the beginning of college, I viewed learning as the accumulation of information—memorizing concepts, commands, and definitions to pass exams. Over time, especially through courses related to networking, cybersecurity, and systems, I realized that learning is less about memorization and more about problem-solving, adaptability, and critical analysis. Technology evolves rapidly, and my education taught me that the most important skill is knowing how to learn continuously.',
    personalTransformation: 'Throughout college, I experienced significant personal growth alongside my academic development. I became more independent, disciplined, and self-aware. Working with complex technical problems taught me patience and resilience. I learned how to stay calm under pressure and approach challenges methodically. As I progressed, values such as integrity, responsibility, and ethical awareness became increasingly important to me, especially in a field where technical skills can be used for both constructive and destructive purposes.',
    lessonsLearned: 'One of the most significant lessons I learned in college is that failure is part of learning, not a sign of inadequacy. I think of failure as part of growth which can help me become more self-aware of my own strengths and weaknesses. Along the way, I learn how to appreciate the experience that taught me. Beyond academics, college also gave me the importance of perseverance and adaptability. Instead of giving up, I learned to slow down, reassess my approach, and seek better solutions. This experience helped me understand that progress is not always immediate, but consistency and effort eventually lead to improvement.',
    futureOutlook: 'Looking ahead, I am excited about building a career in technology where I can apply my knowledge in solving real-world problems. College has prepared me by giving me both a technical foundation and the confidence to face unfamiliar challenges. I am most excited about continuously learning—adapting to new threats, technologies, and systems as the digital landscape evolves. I plan to apply what I have learned by practicing these principles, strengthening infrastructures, and contributing to safer digital environments. My college experiences taught me that preparation is not about knowing everything, but about being ready to learn, adapt, and act responsibly. With this mindset, I feel prepared to move forward into the professional world and grow further.',
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
            {/* Profile Section */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative w-64 h-64 mx-auto">
                  {profileData.imageUrl ? (
                    <img
                      src={profileData.imageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full border-4 border-white/20"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center border-4 border-white/20">
                      <Camera className="w-16 h-16 text-white/50" />
                    </div>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.gmail}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
                  aria-label="Gmail"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {profileData.name}
                </h2>
                <p className="text-2xl text-purple-300 font-light">
                  {profileData.title}
                </p>
              </div>

              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

              <p className="text-lg text-gray-300 leading-relaxed">
                {profileData.bio}
              </p>
            </div>
          </div>
        );

      case 'experiences':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                College Experiences
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A collection of memorable moments and experiences that have shaped my academic journey
              </p>
            </div>

            <div className="grid gap-8">
              {collegeExperiences.map((exp, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{exp.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                    <div className="order-1 md:order-2">
                      {exp.imageUrl ? (
                        <img
                          src={exp.imageUrl}
                          alt={exp.title}
                          className="w-full h-64 object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border-2 border-white/10">
                          <Camera className="w-12 h-12 text-white/30" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'plans':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Plans and Growth
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                My aspirations, goals, and commitment to continuous personal and professional development
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {plansAndGrowth.map((plan, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col">
                  {plan.imageUrl ? (
                    <img
                      src={plan.imageUrl}
                      alt={plan.title}
                      className="w-full h-48 object-cover rounded-2xl mb-6"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border-2 border-white/10 mb-6">
                      <Camera className="w-10 h-10 text-white/30" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{plan.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm flex-grow">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'reflections':
        return (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Reflections
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Thoughtful contemplations on my journey, growth, and the lessons that have shaped who I am
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Academic Growth</h3>
                <p className="text-gray-300 leading-relaxed">{reflections.academicGrowth}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-pink-300 mb-4">Personal Transformation</h3>
                <p className="text-gray-300 leading-relaxed">{reflections.personalTransformation}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Lessons Learned</h3>
                <p className="text-gray-300 leading-relaxed">{reflections.lessonsLearned}</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Future Outlook</h3>
                <p className="text-gray-300 leading-relaxed">{reflections.futureOutlook}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Header with Navigation */}
        <header className="px-6 py-8 border-b border-white/10">
          <nav className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Digital Portfolio
            </h1>
            
            {/* Navigation Menu */}
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage('home')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === 'home'
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              
              <button
                onClick={() => setCurrentPage('experiences')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === 'experiences'
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>College Experiences</span>
              </button>
              
              <button
                onClick={() => setCurrentPage('plans')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === 'plans'
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Plans & Growth</span>
              </button>
              
              <button
                onClick={() => setCurrentPage('reflections')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  currentPage === 'reflections'
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Reflections</span>
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-16">
          {renderPage()}
        </main>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm border-t border-white/10 mt-16">
          <p>© 2026 Seniors' Integration Program.</p>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}