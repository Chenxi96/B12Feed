import React, { useState } from 'react';
import Button from '../components/Button';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    // Later, we can add the logic to tell the Backend to send an email
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        
        {/* Back Button */}
        <button onClick={() => window.history.back()} className="text-xs font-bold uppercase text-neutral-400 hover:text-black mb-8 transition-colors">
          ← Back to Sign In
        </button>

        <div className="border border-neutral-200 rounded-xl p-8 shadow-sm bg-white">
          {!submitted ? (
            <form className="space-y-6" onSubmit={handleReset}>
              <div>
                <h2 className="text-xl font-bold mb-2">Reset Password</h2>
                <p className="text-sm text-neutral-500 mb-6">
                  Enter your organization email and we'll send you a link to reset your password.
                </p>
              </div>

              <div className="relative">
                <label className="block text-[10px] font-bold uppercase text-neutral-400 mb-1 tracking-widest">
                  Organization email
                </label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-neutral-300 py-2 outline-none focus:border-black transition-all text-sm"
                  placeholder="email@organization.org"
                  required
                />
              </div>

              <Button type="submit" variant="primary">
                Send Reset Link
              </Button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="text-4xl mb-4">✉️</div>
              <h2 className="text-xl font-bold mb-2">Check your email</h2>
              <p className="text-sm text-neutral-500">
                We've sent a password reset link to <br/>
                <span className="font-bold text-black">{email}</span>
              </p>
              <Button 
                variant="outline" 
                className="mt-8" 
                onClick={() => setSubmitted(false)}
              >
                Try a different email
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;