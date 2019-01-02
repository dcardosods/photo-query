export class Favorite {
  id: number;
  name: string;
  description: string;
  photos: any[];

  constructor(name: string, description: string, photos: any[] = []) {
    this.id = Date.now();
    this.name = name;
    this.description = description;
    this.photos = photos;
  }
}
