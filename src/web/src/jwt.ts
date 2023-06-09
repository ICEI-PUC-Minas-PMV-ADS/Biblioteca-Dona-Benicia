import jwtDecode, { JwtPayload } from 'jwt-decode';

interface CustomJWTtoken extends JwtPayload {
  role: string
}

export const saveToken = (token: string): void => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

export const decodeToken = (): JwtPayload | null => {
  const token = getToken();
  if (token) {
    return jwtDecode<JwtPayload>(token);
  }
  return null;
};

export const userId = (): string | undefined  => {
  const token = getToken();
  if (token) {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.sub;
  }
  return undefined;
}

export const adminUser = (): boolean  => {
  const token = getToken();
  if (token) {
    const decoded = jwtDecode<CustomJWTtoken>(token);
    return decoded.role === "admin";
  }
  return false;
}

export const isTokenExpired = (): boolean => {
  const token = getToken();
  if (token) {
    const decoded = jwtDecode<JwtPayload>(token);
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return true;
    }
    return false;
  }
  return true;
};
