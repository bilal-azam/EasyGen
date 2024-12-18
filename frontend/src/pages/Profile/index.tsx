import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getProfile } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { Container, Img, H1, P, Button } from './Profile.style';

const Profile: React.FC = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<{ email: string; name: string } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (token) {
        try {
          const { data } = await getProfile(token);
          setProfile(data);
        } catch (err) {
          console.error('Failed to fetch profile');
        }
      }
    };
    fetchProfile();
  }, [token]);

  const handleLogout = async () => {
    await logout();
    navigate('/signin'); // Redirect to the Sign-In page
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <>
      <Img src='/logo.png' alt='Easygenerator' />
      <Container>
        <H1>Hi {profile.name}!</H1>
        <P>Welcome to the application.</P>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
    </>
  );
};

export default Profile;
