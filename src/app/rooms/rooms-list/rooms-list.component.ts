import { Component, ChangeDetectionStrategy, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomsList } from '../rooms.interface';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

//ChangeDetectionStrategy.OnPush use only when data is pushed from parent component and not getting internally
export class RoomsListComponent implements OnInit {

  @Input() roomsList: RoomsList[] = []

  @Output() selectedRoom = new EventEmitter<RoomsList>();
  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room);
  }

}
