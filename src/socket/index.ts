import { io } from 'socket.io-client';
import { BACKEND_URL } from '../constants';

export default io(io, {
  transports: ["websocket"],
});
