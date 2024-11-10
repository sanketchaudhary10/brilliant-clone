import React, { useState } from 'react';
import { auth, googleProvider } from '../../../src/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../../components/Footer/footer';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    setError(null);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/dashboard');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col min-h-screen justify-between bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">
            Create a free account to discover your personalized learning path
          </h2>
          <div className="flex justify-around mb-4">
            <button
              onClick={handleGoogleSignUp}
              className="flex items-center justify-center w-full max-w-[160px] p-2 mr-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 font-medium hover:bg-gray-100"
              disabled={loading}
            >
              <i className="fab fa-google mr-2"></i> {loading ? 'Loading...' : 'Google'}
            </button>
            <button
              className="flex items-center justify-center w-full max-w-[160px] p-2 ml-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 font-medium hover:bg-gray-100"
              disabled={loading}
            >
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm mb-4">OR</p>
          <form onSubmit={handleSignUp} className="space-y-4">
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 bg-white text-black"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 bg-white text-black"
            />
            <input
              type="text"
              placeholder="First name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 bg-white text-black"
            />
            <input
              type="text"
              placeholder="Last name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 bg-white text-black"
            />
            <input
              type="number"
              placeholder="Age"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-100 bg-white text-black"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 text-white bg-green-600 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>
          <p className="mt-4 text-xs text-center text-gray-500">
            By clicking above, I agree to Brilliant's <a href="/terms" className="underline">Terms</a> and <a href="/privacy" className="underline">Privacy Policy</a>.
          </p>
          <p className="mt-4 text-sm text-center text-gray-500">
            Existing user? <Link to="/login" className="font-medium text-indigo-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;




