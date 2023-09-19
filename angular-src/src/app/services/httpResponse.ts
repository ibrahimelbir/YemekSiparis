export interface httpResponse {
    success: boolean;
    msg: string;
    token?: string;
    user?: object;
    admin?: boolean;
    products?: any;
    categories?: any;
    users?:any;
    orders?:any;
  }