export default interface GoogleJwtPayload {
    name: string;
    email: string;
    givenName: string;
    familyName: string;
    picture: string;
    emailVerified: boolean;
    hd?: string;
  }