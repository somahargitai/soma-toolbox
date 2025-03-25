import React, { useState } from 'react';

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="max-w-xl mx-auto my-12 px-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-gray-400">Get the latest tools & updates sent straight to your inbox</p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-black bg-opacity-20 border border-gray-700 rounded-md px-4 py-2 w-full sm:w-auto flex-grow focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-25"
          style={{ backdropFilter: 'blur(4px)' }}
        />
        <button
          type="submit"
          className="bg-white text-black font-bold px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors w-full sm:w-auto"
        >
          {isSubmitted ? 'Thanks!' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default SubscribeForm; 