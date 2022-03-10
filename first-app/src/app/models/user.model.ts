import { Address } from './address.model';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  mobileNo?: string;
  footSize?: number;
  gender?: GENDER;
  address?: Address;
  age?: number;
  dob?: number;
}

export enum GENDER {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE',
}

export default User;
