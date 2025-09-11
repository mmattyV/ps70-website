export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 mt-16">
      <div className="glass-card mx-4 sm:mx-6 lg:mx-8 mb-6 p-6 rounded-2xl">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/80 text-sm">
            © {currentYear} Matthew Vu. All rights reserved.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Built with Next.js for PS70: Introduction to Digital Fabrication
          </p>
        </div>
      </div>
    </footer>
  );
}
