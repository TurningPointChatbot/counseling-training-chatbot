import { prisma } from '../../../lib/prisma';
import { Configuration, OpenAIApi } from 'openai';

/** @type {import('./__types/[attempt_id]').RequestHandler} */
export async function GET({params}){
    console.log('Hi');
    const attempt = await prisma.chatbot_attempt.findMany({
        where: {
          id: params.attempt_id
        },
        include: {
          chatbot_attempt_message: true
        }
      });

    if (attempt == null){
        return {status: 500};
    }

    const msgs = attempt[0].chatbot_attempt_message;
    let prompt = '';
    msgs.forEach((msg) => {
        let prepend = msg.message_type == BigInt(1) ? 'COUNSELLOR: ' : 'PATIENT: ';
        prompt += prepend + msg.text + '\n';
    });

    let openai = new OpenAIApi(new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    }));

    //make request
    
    const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: prompt,
        max_tokens: 400,
        temperature: 0.7,
        top_p: 1.0,
        presence_penalty: 0.0,
        frequency_penalty: 0.0,
        stop: ['COUNSELLOR: ', 'PATIENT: ']
    });

    if (!response.data.choices){
        return {status: 500};
    }

    return {
        status: 200,
        body: response.data.choices[0].text,
    };
}