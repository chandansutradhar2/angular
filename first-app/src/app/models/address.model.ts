import User from './user.model';
import { GENDER } from './user.model';

export interface Address {
  addressType: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
