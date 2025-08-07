import { IRole } from './Role.interface';
import { IGroup } from './Group.interface';

export interface IUser {
  id: number;
  barcode: string;
  name: string;
  surname: string;
  group?: IGroup;
  role?: IRole;
  scores: number;
  imageId?: string;
}
