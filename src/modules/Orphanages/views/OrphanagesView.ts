import Orphanage from '../entities/Orphanage';
import imageViews from './ImagesView';

class OrphanageViews {
  public render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      about: orphanage.about,
      instructions: orphanage.instructions,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      open_on_weekends: orphanage.open_on_weekends,
      name: orphanage.name,
      opening_hours: orphanage.opening_hours,
      images: imageViews.renderMany(orphanage.images),
    };
  }

  public renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
}

export default new OrphanageViews();
