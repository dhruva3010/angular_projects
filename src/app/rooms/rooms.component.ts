import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms.interface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  myName = "Druva Kumar S"

  numberOfRooms: number = 10
  show: boolean = false

  roomsInfo: Rooms = {
    availableRooms: 20,
    totalRooms: 30,
    bookedRooms: 10
  }

  roomsList: RoomsList [] = [
    {
      roomID: 100,
      price: 2000,
      checkInTime: new Date('2022-12-01'),
      checkOutTime: new Date('2022-12-22'),
      suite: 'Deluxe'
    },
    {
      roomID: 101,
      price: 1000,
      checkInTime: new Date('2022-12-11'),
      checkOutTime: new Date('2022-12-21'),
      suite: 'Normal'
    },
    {
      roomID: 102,
      price: 5000,
      checkInTime: new Date('2022-12-05'),
      checkOutTime: new Date('2022-12-13'),
      suite: 'Luxury'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.show = !this.show
  }

  processRoom(room: RoomsList) {
    console.log(room);
  }

  addRoom () {
    const room: RoomsList = {
      roomID: 105,
      price: 7000,
      checkInTime: new Date('2022-12-05'),
      checkOutTime: new Date('2022-12-13'),
      suite: 'Ultra Luxury'
    };

    //this.roomsList.push(room);
    this.roomsList = [...this.roomsList, room];
  }
}
