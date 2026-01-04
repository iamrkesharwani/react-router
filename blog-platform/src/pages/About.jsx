import { Info, Mail, Github, Twitter, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
            <Info className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">About Us</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Welcome to our platform. We're building something amazing and we'd
            love for you to be part of the journey.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Mission Card */}
          <div className="about-card">
            <div className="about-icon-bg">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Creating meaningful connections through quality content and
              seamless user experiences.
            </p>
          </div>

          {/* Vision Card */}
          <div className="about-card">
            <div className="about-icon-bg">
              <Info className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Building a platform that empowers users to discover, learn, and
              grow together.
            </p>
          </div>
        </div>

        <div className="about-card">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Get In Touch
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="footer-btn hover:bg-blue-600">
              <Mail className="w-5 h-5" />
              Email Us
            </div>
            <div className="footer-btn hover:bg-black">
              <Github className="w-5 h-5" />
              GitHub
            </div>
            <div className="footer-btn hover:bg-blue-600">
              <Twitter className="w-5 h-5" />
              Twitter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
