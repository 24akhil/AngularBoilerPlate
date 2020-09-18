import { IDeserializable } from '../IDeserializable';

export class Category implements IDeserializable {
    id: string;
    name: string;   
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }