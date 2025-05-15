'use client';

import ProfileLayout from '../../components/profile/ProfileLayout';

export default function ProfileHome() {
  return (
    <ProfileLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6 text-black">Welcome to Your Profile</h1>
        <p className='text-[#6B7280]'>This is your profile home page. You can view and manage your profile information here.</p>
      </div>
    </ProfileLayout>
  );
}