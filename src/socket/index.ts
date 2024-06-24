import { io } from 'socket.io-client';
import { BACKEND_URL } from '../constants';

export default io("wss://18.119.166.188/socket.io/?EIO=4&transport=websocket", {
  transports: ["websocket"],
});