import supabase from '../supabase';

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

export {getMessagesFromSupabase, storeMessage}