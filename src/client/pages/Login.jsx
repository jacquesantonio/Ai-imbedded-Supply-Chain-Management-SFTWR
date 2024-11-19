import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../stores/authStore';
import SocialLogin from '../components/auth/SocialLogin';
import EmailForm from '../components/auth/EmailForm';

export default function Login() {
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const { register: registerForm, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isSignUp) {
        await register(data);
      } else {
        await login(data);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      await login({ 
        provider: 'google',
        credential: credentialResponse.credential 
      });
      navigate('/dashboard');
    } catch (err) {
      setError('Google authentication failed');
    }
  };

  const handleAppleClick = () => {
    setError('Apple Sign In coming soon');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <SocialLogin
              onGoogleSuccess={handleGoogleSuccess}
              onAppleClick={handleAppleClick}
              error={error}
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with email</span>
              </div>
            </div>

            <EmailForm
              isSignUp={isSignUp}
              register={registerForm}
              errors={errors}
              onSubmit={handleSubmit(onSubmit)}
            />

            <div className="text-sm text-center">
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}