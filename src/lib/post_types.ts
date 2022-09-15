export type chatbot_attempt_POST = {
  user_id: number;
  cbm_id: number;
};

export type chatbot_attempt_message_POST = {
  attempt_id: number;
  text: string;
  message_type: 'user' | 'chatbot';
};

export type chatbot_module_POST = {
  title: string;
  description: string;
};
