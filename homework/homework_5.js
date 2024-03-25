let room = { height: 3, tv: 'samsung', big: true }
console.log(room.height, room.tv, room.big);
console.log(typeof (room.big));
console.log(room.tv.length);
console.log(room.tv.length - 1);
console.log(room.tv.toLocaleUpperCase());
room.tv = 'LG';
console.log(room.tv = 'LG');
room.furniture = ["table", "chair", "sofa"]
console.log(room.furniture[1])
delete room.big 


/*let paint = 'color'
let room = {}
room.paint = 'blue'
console.log(room);*/