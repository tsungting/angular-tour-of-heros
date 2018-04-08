export class Hero{
  id: number;
  name: string;
  constructor(name, id=0){
    this.id = id;
    this.name = name;
  }
}