import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss'],
})
export class VideoUploadComponent {
  videoForm: FormGroup;
  selectedFile: File | null = null; // Initialize to null
  videoName: string = ''; // Initialize to an empty string
  videoCategory: string = ''; // Initialize to an empty string
  youtubeLink: string = ''; // Initialize to an empty string
  constructor(private fb: FormBuilder) {
    this.videoForm = this.fb.group({
      $id: [''],
      videoName: ['', Validators.required],
      videoCategory: ['', Validators.required],
      youtubeLink: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // mobileNumber: [
      //   null,
      //   [Validators.required, Validators.pattern(/^[0-9]+$/)],
      // ],
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type === 'video/mp4') {
      this.selectedFile = file;
    } else {
      this.selectedFile = null; // Reset selectedFile if it's not an MP4 file
      alert('Please select an MP4 video file to upload.');
    }
  }

  uploadVideo() {
    if (this.selectedFile) {
      alert(
        'Uploading video file with Name: ' +
          this.videoName +
          ' and Category: ' +
          this.videoCategory
      );
      // TODO: Handle the upload logic for video files, including Name and Category
    } else if (this.isValidYouTubeUrl(this.youtubeLink)) {
      alert(
        'Uploading YouTube video: ' +
          this.youtubeLink +
          ' with Name: ' +
          this.videoName +
          ' and Category: ' +
          this.videoCategory
      );
      // TODO: Handle the upload logic for YouTube links, including Name and Category
    } else {
      alert(
        'Please select a valid MP4 video file or enter a valid YouTube video link to upload.'
      );
    }
  }

  isValidYouTubeUrl(url: string): boolean {
    // Regular expression to validate YouTube video URLs
    const youtubeUrlRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeUrlRegex.test(url);
  }
}
