import axios from '../../../axios/index';

export interface GenericResponse {
  message: string;
}
export interface AuthResponse extends GenericResponse {
  data: {
    user: Record<string, unknown>;
    token: string;
  };
}

export interface UserResponse extends GenericResponse {
  data: {
    user: {
      user: Record<string, unknown>;
    };
  };
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  password: string;
  resetToken: string | null;
}

export interface RegisterRequest extends LoginRequest {
  firstName: string;
  lastName: string;
}
export const login = async (authPayload: LoginRequest): Promise<AuthResponse> =>
  axios.post<LoginRequest, AuthResponse>('/auth/login', authPayload);

export const register = async (authPayload: RegisterRequest): Promise<AuthResponse> =>
  axios.post<RegisterRequest, AuthResponse>('/auth/register', authPayload);

export const getUser = async (): Promise<UserResponse> => axios.get<null, UserResponse>('/user');

export const forgotPassword = async (authPayload: { email: string }): Promise<AuthResponse> =>
  axios.post<{ email: string }, AuthResponse>('auth/forgot/password', authPayload);

export const resetPassword = async (authPayload: ResetPasswordRequest): Promise<AuthResponse> =>
  axios.post<ResetPasswordRequest, AuthResponse>('auth/reset/password', authPayload);

// /v1/auth/forgot/password
