export class FavoritesList {
  id: string;
  photos: any[];

  constructor(
    private name: string,
    private description: string,
    photos: any[] = []
  ) {
    // TODO: replace with random generation
    this.id = 'test-1';
    this.photos = photos;
  }
}
