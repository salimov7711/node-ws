import { Server } from "socket.io";
export const io = new Server(8080, {
  cors: {
    origin: "*",
  },
});

io.on("connect", (socket) => {
  console.log(`Connected  ${socket.id}`);

  socket.on(`disconnect`, () => {
    console.log(`Disconnected  ${socket.id}`);
  });

  socket.on("joinRoom", (rommIds) => {
    let rooms = rommIds.map((id:any) => {
      return `chat_room_${id}`;
    });
    socket.join(rooms);
    console.log(rooms);
  });

  socket.on("newChatRoom", (newChatRoom) => {
    socket.join(`chat_room_${newChatRoom?.id}`);
    console.log(newChatRoom)
  });
  socket.on("message", (data) => {
    const { message } = data;
    io.to(`chat_room_${message.chat_room_id}`).emit("message", data);
    console.log(message);
  });


});

