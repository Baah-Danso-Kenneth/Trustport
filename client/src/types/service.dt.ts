export interface WalletState {
  isConnected: boolean;
  address: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface UserAddresses {
  stx: string | null;
  btc: string | null;
}

export interface AccountDetails {
  address: string;
  publicKey: string;
  gaiaHubUrl: string;
}

export interface UserData {
  addresses?: {
    stx?: { address: string }[];
  };
}
