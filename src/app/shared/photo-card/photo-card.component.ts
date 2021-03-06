import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent implements OnInit {
  @Input() photo: any;
  @Input() showDetails = false;
  @Input() enableDownload = false;
  @Output() selected = new EventEmitter<any>();
  @Output() downloaded = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onSelected(photo: any) {
    this.selected.emit(photo);
  }

  onDownloaded($event, photo) {
    $event.preventDefault();
    this.downloaded.emit(photo);
  }
}
