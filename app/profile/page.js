'use client';

import { redirect } from 'next/navigation';

export default function ProfilePage() {
  // Redirect to the profile home page
  redirect('/profile/profile-home');
}

import ProfileLayout from '../components/profile/ProfileLayout';

// export default function ProfileHome() {
//   return (
//     <ProfileLayout>
//       <div className="p-6">
//         <h1 className="text-2xl font-bold mb-6">Welcome to Your Profile</h1>
//         <p>This is your profile home page. You can view and manage your profile information here.</p>
//       </div>
//     </ProfileLayout>
//   );
// }