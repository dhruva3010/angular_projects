export interface Rooms {
    availableRooms: number,
    totalRooms: number,
    bookedRooms: number
}

export interface RoomsList {
    roomID: number,
    price: number,
    suite: string,
    checkInTime: Date,
    checkOutTime: Date
}