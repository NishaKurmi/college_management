import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  playVideo() {
    this.videoPlayer.nativeElement.play();
  }

  pauseVideo() {
    this.videoPlayer.nativeElement.pause();
  }
  videoUrls: string[] = [
    'https://www.youtube.com/embed/UecdkexIZCA',
    'https://www.youtube.com/embed/MDZRll-HQmY',
    'https://www.youtube.com/embed/kGi1dL41DJw',
  ];
  currentIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.playVideoAtIndex(this.currentIndex);
  }

  playVideoAtIndex(index: number) {
    const iframe = document.getElementById('video-iframe') as HTMLIFrameElement;
    iframe.src = this.videoUrls[index];
    iframe.addEventListener('ended', () => {
      // When the video ends, advance to the next video
      this.currentIndex++;
      if (this.currentIndex < this.videoUrls.length) {
        this.playVideoAtIndex(this.currentIndex);
      } else {
        // All videos have been played
        console.log('All videos played.');
      }
    });
  }
}
