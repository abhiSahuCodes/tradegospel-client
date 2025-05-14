'use client';

import ProfileLayout from '../../components/profile/ProfileLayout';

export default function ProfileLive() {
  return (
    <ProfileLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Welcome to Livestream Profile</h1>
        <p>This is the main content area of your ProfileLive page. You can add your livestream content here.</p>
      </div>
    </ProfileLayout>
  );
}