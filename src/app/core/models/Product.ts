import { IDeserializable } from '../IDeserializable';

export class Product implements IDeserializable {
    id: number;
    name: string;
    image: string;
    rate: string;
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
  }