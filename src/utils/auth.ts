const ID_TOKEN_KEY = 'id_token';
const USER_PROFILE = 'user_profile';

export const getToken = () => {
  return window.localStorage.getItem(ID_TOKEN_KEY);
};

export const saveToken = (
  token: string | undefined,
  profile: UserSerializer | undefined
) => {
  if (token) {
    window.localStorage.setItem(ID_TOKEN_KEY, token);
  }

  if (profile) {
    window.localStorage.setItem(USER_PROFILE, JSON.stringify(profile));
  }
};

export const destroyToken = () => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export const getUserProfile = (): UserSerializer | null => {
  const userProfileString = window.localStorage.getItem(USER_PROFILE);
  let userProfile: UserSerializer | null;
  if (userProfileString) {
    userProfile = JSON.parse(userProfileString);
  } else {
    userProfile = null;
  }
  return userProfile;
};
