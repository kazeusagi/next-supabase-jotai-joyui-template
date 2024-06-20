enum SenderEnum {
  User,
  Bot,
}

type SenderType = keyof typeof SenderEnum;

export type Message = {
  id: string;
  sender: SenderType;
  content: string;
};
