import { Address } from './address.model';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  mobileNo?: string;
  footSize?: number;
  gender?: string;
  address?: Address;
  age?: number;
  dob?: number;
}
