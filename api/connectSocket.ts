import { Socket, io } from "socket.io-client";
const _ipV4 = process.env.EXPO_PUBLIC_IP_V4_URL;

export const connectSocket = async (): Promise<Socket | undefined> => {
    if(_ipV4) {
        const _socket = io(_ipV4);
        return _socket
    } else {
        return undefined;
    }
};