import { Address } from './address.model';

export interface User {
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

let userObj: User = {
  gender: GENDER.MALE,
};

let userObj2: User = {
  gender: GENDER.MALE,
};

let userObj3: User = {
  gender: GENDER.MALE,
};

if (userObj.gender == 'male') {
}
