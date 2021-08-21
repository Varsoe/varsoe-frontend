import { useMutation, useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthContext';
import { AuthResponse, forgotPassword, getUser, login, register, resetPassword, UserResponse } from './api';

export const useMutationLogin = () => {
  const { setToken, setUser } = useAuth();
  return useMutation(login, {
    onSuccess: (response: AuthResponse) => {
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      setUser(user);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useMutationRegister = () => {
  const { setToken, setUser } = useAuth();
  return useMutation(register, {
    onSuccess: (response: AuthResponse) => {
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      setUser(user);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useMutationForgotPassword = () =>
  useMutation(forgotPassword, {
    onSuccess: (response: AuthResponse) => {
      toast.success(response.message);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

export const useMutationResetPassword = () =>
  useMutation(resetPassword, {
    onSuccess: (response: AuthResponse) => {
      toast.success(response.message);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

export const useLogout = (cb?: () => void) => {
  const { setToken, setUser } = useAuth();
  const history = useHistory();
  function logout() {
    localStorage.clear();
    setToken(null);
    setUser({});
    if (cb) {
      cb();
    }
    history.push('/login');
  }
  return logout;
};

export const useUserQuery = () => {
  const { hasUser } = useAuth();
  return useQuery<UserResponse, Error, Record<string, unknown>>('user', getUser, {
    select: (response) => response.data.user.user,
    enabled: !hasUser,
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
