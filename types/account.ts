export interface LoginResponse {
  token: string,
  email: string,
  roles: string[],
  name: string,
  id: string,
  avatar: string
}