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

type EventArguments = {
  [WSTransportEvents.Message]: [unknown];
  [WSTransportEvents.Error]: [any];
  [WSTransportEvents.Close]: [undefined];
  [WSTransportEvents.Connected]: [undefined];
};

export class WSTransport extends EventBus<EventNamesType, EventArguments> {
  private socket: WebSocket | null = null;
  private pingInterval: number = 0;

  constructor(private url: string) {
    super();
  }

  connect(): Promise<void> {
    this.socket = new WebSocket(this.url);

    return new Promise(resolve => {
      this.socket?.addEventListener('open', () => resolve());
    });
  }

  public send(data: unknown) {
    if (!this.socket) {
      throw new Error('Socket is not connected');
    }

    this.socket.send(JSON.stringify(data));
  }
}
