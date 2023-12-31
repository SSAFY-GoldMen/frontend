import { useRecoilState } from 'recoil';

import { Token } from '@/@types/token';
import { accessTokenState, refreshTokenState } from '@/store/status';
import { isLoginProvider } from '@/utils/auth';

const useAuth = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenState);

  const setAuth = async ({
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  }: Token) => {
    window.sessionStorage.setItem('isLogin', 'true');
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    window.location.reload();
  };

  const resetAuth = () => {
    removeIsLogin();
    setAccessToken('');
    setRefreshToken('');
  };

  const removeIsLogin = () => {
    window.sessionStorage.removeItem('isLogin');
  };

  const isLogin = () => {
    return isLoginProvider.get();
  };

  return {
    accessToken,
    setAccessToken,
    refreshToken,
    setAuth,
    resetAuth,
    removeIsLogin,
    isLogin,
  };
};

export default useAuth;
