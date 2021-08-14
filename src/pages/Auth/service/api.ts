import axios from '../../../axios/index';

export interface AuthResponse {
  data: {
    user: Record<string, unknown>;
    token: string;
  };
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest extends LoginRequest {
  firstName: string;
  lastName: string;
}
export const login = async (authPayload: LoginRequest): Promise<AuthResponse> =>
  axios.post<LoginRequest, AuthResponse>('/login', authPayload);

export const register = async (authPayload: RegisterRequest): Promise<AuthResponse> =>
  axios.post<RegisterRequest, AuthResponse>('/login', authPayload);
