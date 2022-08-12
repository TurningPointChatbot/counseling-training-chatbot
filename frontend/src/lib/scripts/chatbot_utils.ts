import supabase from '../supabase';
import type { User } from '@supabase/supabase-js';
import userStore from '../../stores/authStore';

async function storeMessage(attempt_id: number, messageText: string) {
  try {
    const storedMessage = {
      attempt_id: attempt_id,
      text: messageText
    };

    let { error } = await supabase
      .from('chatbot_attempt_message')
      .insert(storedMessage, {
        returning: 'minimal'
      });

    if (error) throw error;
  } catch (error) {
    console.log(error);
  }
}

async function getMessagesFromSupabase(attempt_id: number) {
  try {
    let { data, error } = await supabase
      .from('chatbot_attempt_message')
      .select(
        `
          attempt_id,
          created_at,
          text
        `
      )
      .eq('attempt_id', attempt_id);
    if (error) throw error;
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Retrieves cbm_id and user id from supabase
 * @param moduleName
 * @returns An array [cbm_id, user_id]
 */
async function retrieveCBMIdAndUserID(moduleName: string) {
  let user: User;
  userStore.subscribe((value) => {
    user = value;
  });
  try {
    let { data, error } = await supabase
      .from('user')
      .select(
        ` 
        id,
        email,
        chatbot_assignment(
          cbm_id,
          user_id,
          duedate,
          created_at,
          completed_at,
          completed
        ),
        chatbot_module!chatbot_assignment(
          title, 
          description
        )
        `
      )
      .eq('email', user.email)
      .single();
    if (error) throw error;
    if (data) {
      let res: Array<any> = [];
      let assignments = data.chatbot_assignment;
      for (let i: number = 0; i < assignments.length; i++) {
        if (moduleName == data.chatbot_module[i].title) {
          res.push(assignments[i].cbm_id);
        }
      }
      res.push(user.id);
      return res;
    }
  } catch (error) {
    console.log(error);
  }
}

export { getMessagesFromSupabase, storeMessage, retrieveCBMIdAndUserID };
