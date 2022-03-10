import { Address } from './address.model';

//className and interface Name should start with Caps
// all should strat

function testMethod(num1: number, num2: number, num3?: number) {}

testMethod(1, 5);

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string; //? to make optional
  mobileNo?: string;
  footSize?: number;
  gender?: GENDER;
  address?: Address;
  age?: number;
  dob?: number;
}

//variable/attribute/functionName/methodName all should be in camelCase

//enum should be all caps
export enum GENDER {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE',
}

export default User;

let addressObj: Address = {
  addressType: '',
  city: '',
  country: '',
  line1: '',
  line2: '',
  state: '',
  zipCode: '',
};

let userObj: User = {
  address: addressObj,
  email: '',
  firstName: '',
  id: '',
  lastName: '',
};
