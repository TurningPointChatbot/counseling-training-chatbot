export type chatbot_assignment_PATCH = {
    cbm_id: number;
    user_id: number;
    created_at: Date;
    duedate?: Date;
    completed_at?: Date;
    completed?: boolean;
    attempt_id?: number;
  };