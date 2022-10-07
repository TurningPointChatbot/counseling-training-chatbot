export type chatbot_attempt_POST = {
  user_id: number;
  cbm_id: number;
};

export type chatbot_attempt_message_POST = {
  attempt_id: number;
  text: string;
  message_type: 'user' | 'chatbot';
};

export type chatbot_assignment_POST = {
  module_id: number;
  user_id: number;
  due_date: Date;
};

export type chatbot_module_POST = {
  title: string;
  description: string;
};

export type forum_post_module_POST = {
  text: string;
  username: string;
  valid: boolean;
};
