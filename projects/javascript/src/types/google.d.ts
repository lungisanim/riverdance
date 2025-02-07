interface Window {
  gapi: {
    load(apiName: string, callback: () => void): void;
    auth2: {
      getAuthInstance(): {
        signOut(): Promise<void>;
      };
    };
  }
} 