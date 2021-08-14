import { useMutation, UseMutationResult } from 'react-query';
import { LoginRequest, AuthResponse, login } from './api';

export const useMutationLogin = () => useMutation(login);
