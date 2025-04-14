export default interface UserInfo {
    name: string;
    email: string;
    givenName: string;
    familyName: string;
    picture: string;
    emailVerified?: boolean;
    domain?: string;
  }