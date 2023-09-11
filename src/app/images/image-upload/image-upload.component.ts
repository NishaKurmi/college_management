import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  selectedImage: File | null = null;
  imageName: string = '';
  imageCategory: string = '';

  onImageSelected(event: any) {
    const image = event.target.files[0];
    if (image && image.type.startsWith('image/')) {
      this.selectedImage = image;
    } else {
      this.selectedImage = null;
      alert('Please select a valid image file to upload.');
    }
  }

  uploadImage() {
    if (this.selectedImage) {
      alert(
        'Uploading image with Name: ' +
          this.imageName +
          ' and Category: ' +
          this.imageCategory
      );
      // TODO: Handle the upload logic for image files, including Name and Category
    } else {
      alert('Please select a valid image file to upload.');
    }
  }
}
