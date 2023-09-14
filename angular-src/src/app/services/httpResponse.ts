export interface httpResponse {
    success: boolean;
    msg: string;
    token?: string;
    user?: object;
    admin?: boolean;
    products?: any;
  }