export interface IAuthState {
    user: object | null;
    status: 'loading' | 'success' | 'failed';
    error?: string;
};