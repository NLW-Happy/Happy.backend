import Image from '../entities/Image';

class ImagesView {
  private render(image: Image) {
    return {
      id: image.id,
      url: `http://10.10.0.111:3333/uploads/${image.path}`,
    };
  }

  public renderMany(images: Image[]) {
    return images.map(images => this.render(images));
  }
}

export default new ImagesView();
