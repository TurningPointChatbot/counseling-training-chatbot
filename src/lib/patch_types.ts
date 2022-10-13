export type chatbot_assignment_PATCH = {
  cbm_id: number;
  user_id: number;
  duedate?: Date;
  completed_at?: Date;
  completed?: boolean;
  attempt_id?: number;
};
