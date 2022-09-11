export type chatbot_attempt_POST = {
  user_id: bigint;
  cbm_id: bigint;
};

export type chatbot_attempt_message_POST = {
  attempt_id: bigint;
  text: string;
  message_type: 'user' | 'chatbot';
};
