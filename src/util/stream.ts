// app/api/stream/writer.ts
export class Writer implements EventNotifier {
  constructor(
    readonly writer: WritableStreamDefaultWriter,
    readonly encoder: TextEncoder,
  ) {}

  writeMessage(message: Message) {
    // ...//same code as before
    // Convert the message object into a JSON string
    const messageString = JSON.stringify(message);

    // Format the message for SSE
    const formattedMessage = `data: ${messageString}\n\n`;

    // Encode the formatted message to Uint8Array
    const encodedMessage = this.encoder.encode(formattedMessage);

    // Write the encoded message to the stream
    void this.writer.write(encodedMessage);
  }

  update(message: Message) {
    this.writeMessage(message);
  }

  complete(message: Message) {
    this.writeMessage(message);
    void this.writer.close();
  }
}

// 👇 a factory function to create the class above
export const getSSEWriter = (writer: WritableStreamDefaultWriter, encoder: TextEncoder) =>
  new Writer(writer, encoder);

export interface Message<T = string | Record<string, unknown>> {
  data: T;
  comment?: string;
  event?: string;
  id?: string;
  retry?: number;
}

export interface EventNotifier<
  T extends {
    update: T['update'] extends Message ? Message<T['update']>['data'] : never;
    complete: T['complete'] extends Message ? Message<T['complete']>['data'] : never;
  } = any,
> {
  update: (message: Message<T['update']>['data']) => void;
  complete: (message: Message<T['complete']>['data']) => void;
}
