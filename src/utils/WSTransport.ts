import { EventBus } from './EventBus';

export enum WSTransportEvents {
  Connected = 'connected',
  Error = 'error',
  Message = 'message',
  Close = 'close',
}

type EventNamesType = {
  Connected: 'connected';
  Error: 'error';
  Message: 'message';
  Close: 'close';
};

export type Message = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};

type DataType = Message | Message[] | { type: 'ping' } | { type: 'pong' };

type EventArguments = {
  [WSTransportEvents.Message]: [Message | Message[]];
  [WSTransportEvents.Error]: [any];
  [WSTransportEvents.Close]: [];
  [WSTransportEvents.Connected]: [];
};

export class WSTransport extends EventBus<EventNamesType, EventArguments> {
  private socket: WebSocket | null = null;
  private pingInterval?: ReturnType<typeof setTimeout>;

  constructor(private url: string) {
    super();
  }

  connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    this.subscribe(this.socket);

    return new Promise(resolve => {
      this.on(WSTransportEvents.Connected, () => {
        this.setupPing();

        resolve();
      });
    });
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }

  public close() {
    this.socket?.close();
  }

  private setupPing() {
    this.pingInterval = setInterval(() => this.send({ type: 'ping' }), 5000);

    this.on(WSTransportEvents.Close, () => clearInterval(this.pingInterval));
  }

  private subscribe(socket: WebSocket) {
    socket.addEventListener('open', () => {
      this.emit(WSTransportEvents.Connected);
    });
    socket.addEventListener('close', () => {
      this.emit(WSTransportEvents.Close);
    });

    socket.addEventListener('error', e => {
      this.emit(WSTransportEvents.Error, e);
    });

    socket.addEventListener('message', (message: { data: string }) => {
      const data = JSON.parse(message.data) as DataType;

      if (!Array.isArray(data) && data.type && (data.type === 'ping' || data.type === 'pong')) {
        return;
      }

      this.emit(WSTransportEvents.Message, data as Message | Message[]);
    });
  }
}
