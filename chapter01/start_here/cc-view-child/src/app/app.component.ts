import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';

  @ViewChild(GalleryComponent) gridOfPictures: GalleryComponent;

  addNewPicture() {
    this.gridOfPictures.pictures.unshift(this.gridOfPictures.generateImage())
  }

  removeFirstPicture() {
    console.log('removed first picture');
    this.gridOfPictures.pictures.shift()
  }
}
