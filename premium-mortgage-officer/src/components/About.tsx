import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-tl-3xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-100 rounded-br-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80" 
                alt="Christine Lewallen" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              About Christine
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Christine is a proud Nevada native who has built her mortgage career serving the community she calls home. Born and raised in the Silver State, she brings local market insight, trusted relationships, and a deep understanding of Nevada’s real estate landscape to every client she works with.
              </p>
              <p>
                Whether you are buying your first home, refinancing, relocating, or building from the ground up, Christine provides clear guidance and tailored lending strategies designed around your long-term goals. She closely monitors interest rate trends, underwriting updates, and loan program changes so her clients can make informed and confident decisions.
              </p>
              <p>
                Christine specializes in VA Loans and is deeply committed to serving veterans and active duty service members with the care and precision they deserve. She also offers expertise in conventional, FHA, and refinance options, ensuring each borrower is matched with the loan structure that truly fits their financial picture.
              </p>
              <p>
                Clients value Christine for her responsiveness, accessibility, and attention to detail. She works closely with homebuyers, homeowners, and referral partners to create a streamlined and efficient lending experience from application to closing. Because real estate moves quickly, she makes herself available evenings and weekends to ensure no question goes unanswered. Her approach is simple. Deliver honest advice, maintain proactive communication, and create a smooth path to homeownership.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">15+</span>
                <span className="text-sm text-slate-500">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-slate-900">Top 1%</span>
                <span className="text-sm text-slate-500">Originator in WA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
