import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// 1. Define local validation rules using Zod
const signupSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupFormData = z.infer<typeof signupSchema>;

export const SignupForm = () => {
  // State for handling backend/server error messages (e.g., user already exists)
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setError, // Allows manually setting errors on specific fields
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  // 2. Submit Handler: Handles the user existence check
  const onSubmit = async (data: SignupFormData) => {
    setServerError(null);
    setSuccessMessage(null);

    try {
      // Simulate API call / database check to verify if user exists
      const response = await fetch('/api/check-and-create-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // If the backend returns that the email or username exists:
        if (result.field === 'email') {
          setError('email', { type: 'manual', message: 'Email is already registered.' });
        } else if (result.field === 'username') {
          setError('username', { type: 'manual', message: 'Username is already taken.' });
        } else {
          setServerError(result.message || 'Account already exists.');
        }
        return;
      }

      // If details are not available, account is created successfully
      setSuccessMessage('Account created successfully! You can now log in.');
    } catch (err) {
      setServerError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '350px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2>Create Account</h2>

      {/* Global Server Error Message */}
      {serverError && <div style={{ color: 'red', fontWeight: 'bold' }}>{serverError}</div>}
      
      {/* Success Message */}
      {successMessage && <div style={{ color: 'green', fontWeight: 'bold' }}>{successMessage}</div>}

      <div>
        <label>Username</label>
        <input {...register('username')} placeholder="Enter username" />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input {...register('email')} type="email" placeholder="Enter email" />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Password</label>
        <input {...register('password')} type="password" placeholder="Enter password" />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Checking & Creating...' : 'Sign Up'}
      </button>
    </form>
  );
};