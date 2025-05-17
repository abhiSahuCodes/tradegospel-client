'use client';

import { redirect } from 'next/navigation';

export default function ProfilePage() {
  // Redirect to the profile home page
  redirect('/profile/profile-home');
}


