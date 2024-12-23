class AuthService {
  private static readonly AUTH_KEY = 'auth_user';

  static login(email: string, password: string): boolean {
    // Simulate a login by storing the email in localStorage
    localStorage.setItem(this.AUTH_KEY, email);
    return true;
  }

  static logout(): void {
    localStorage.removeItem(this.AUTH_KEY);
  }

  static isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_KEY) !== null;
  }
}

export default AuthService;
