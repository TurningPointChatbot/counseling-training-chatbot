import { storeMessage } from "./chatbot_utils";

/**
 * Each chatbot instance is unique to each chat attempt.
 * Chat attempt id is created and then passed to this class's constructor which then
 * stores user and bot created messages in supabase using that id.
 */
class Chatbot {
    id: number;
    demo_messages: Array<string>;
    messageCount: number;

    constructor(attemptId: number){
        this.id = attemptId;
        this.messageCount = 0;
        this.demo_messages = [
            "So I tried really hard today to go without alcohol....here I Amin drink 16....I only started at 4pm....I’m a failure and a piece of shit",
            "One day!!! How hard is it really?  It shouldn’t be this hard",
            "I drink every day. I have a couple when I wake up as a pick me up. I drink roughly half a block of beer a day, sometimes more and I’ve been doing it for about a year (it’s risen from one or two a day to this). It only occurred to me very recently that it’s a problem because I can’t stop myself from drinking even when I want to",
            "Yeah",
            "It seems the more I want to not drink the more someone or something is determined that they are going to make it impossible.",
            "Yeah. Just to have one day without it to prove that I could...but I couldnt",
            "I had 2 beers for breakfast but the plan was none after that. I went shopping with my girlfriend, got home and had to have a drink before I even unpacked my shopping",
            "I was ready for craving it. I had stuff I was supposed to do instead to keep distracted. I didn’t even get to any of those withdrawal symptoms....I didn’t last long enough",
            "Yeah. I don’t understand though. How can my willpower not be strong enough to not drink for 1 day. I guess I was just looking for a little reassurance that it’s not just me."
        ]
    }

    sendMessage(text: string) {
        storeMessage(this.id, text, 'chatbot');
    }

    sendMessageWebchatExample1() {
        let text: string = this.demo_messages[this.messageCount]

        this.sendMessage(text);
        this.messageCount += 1;
        return {sender: 'patient', content: text}
    }

    async sendAiMessage() {
        //TODO: AI here
        const result = await fetch(`/api/chatbot-ai/${this.id}`, {method: 'GET'});
        let msg = await result.json();
        return {sender: 'patient', content: msg.msg }
    }
}

export {Chatbot}

/**
CLIENT'S WEBCHAT EXAMPLE

22:48:23 [Counsellor] Hello, you are talking to an online drug and alcohol counsellor, how may I be of assistance? (We value your feedback.  At the end of this session, you will be provided a link to a short feedback survey about your counselling session today.  Please take a couple of minutes to fill in the survey.  Thank you.)

22:48:30 [Client automated] User's IP address: 49.178.1.168

22:48:52 [Counsellor] hi...
22:48:59 [Counsellor] Do you have an alcohol or other drug addiction issue you would like to discuss?

22:49:48 So I tried really hard today to go without alcohol....here I Amin drink 16....I only started at 4pm....I’m a failure and a piece of shit

22:50:40 [Counsellor] sounds like you are really down on yourself about drinking

22:51:16 One day!!! How hard is it really?  It shouldn’t be this hard

22:51:23 [Counsellor] so I can get a bit of a picture of what is happening for you, can you please tell me a little about your drinking? how often? how much? how long has it been a problem for? Etc

22:54:13 I drink every day. I have a couple when I wake up as a pick me up. I drink roughly half a block of beer a day, sometimes more and I’ve been doing it for about a year (it’s risen from one or two a day to this). It only occurred to me very recently that it’s a problem because I can’t stop myself from drinking even when I want to

22:54:56 [Counsellor] gotten way out of control yeah

22:55:10 Yeah

22:56:19 [Counsellor] it's good that you've recognised the problem after just a year. Some people I have spoken to have taken decades 
22:56:41 [Counsellor] and recognising the problem is always the first step...
22:56:48 [Counsellor] so you've taken that...

22:57:14 It seems the more I want to not drink the more someone or something is determined that they are going to make it impossible.

22:57:13 [Counsellor] so the plan was to stop today yeah?
22:57:26 [Counsellor] and you got to 4pm
22:57:58 [Counsellor] so some outside pressures getting in the way

22:58:06 Yeah. Just to have one day without it to prove that I could...but I couldnt

22:58:52 [Counsellor] so what was happening before 4pm this afternoon?

23:00:08 I had 2 beers for breakfast but the plan was none after that. I went shopping with my girlfriend, got home and had to have a drink before I even unpacked my shopping
23:00:37 It’s like I can’t help myself. I need it
23:01:00 Sounds stupid I know but that’s how it feels

23:02:43 [Counsellor] Alcohol literally gets into the cells in our body with daily drinking. That is why the withdrawals are so intense...
23:03:03 [Counsellor] and part of it is preparing mentally for the withdrawal symptoms....
23:03:10 [Counsellor] knowing what is coming...
23:03:43 [Counsellor] aches, shaking, nausea, sweats, hot and cold flushes, feeling agitated, irritable, even depressed...
23:04:01 [Counsellor] but the main thing to look out for is any shaking or tremor....


23:04:28 [Counsellor] if you decide to do this by yourself and you start losing control of your body to the point of having a  seizure or fit, you need to ring triple 0 straight away

23:04:42 I was ready for craving it. I had stuff I was supposed to do instead to keep distracted. I didn’t even get to any of those withdrawal symptoms....I didn’t last long enough

23:05:57 [Counsellor] at least you did a search and found us
23:06:37 [Counsellor] so just so we are on the same page,  was there something specific that were you hoping for by contacting us tonight? What would you like to focus on in the rest of the session that is going to help you best?

23:07:26 Yeah. I don’t understand though. How can my willpower not be strong enough to not drink for 1 day. I guess I was just looking for a little reassurance that it’s not just me.
23:08:44 How can I go just one day

23:09:39 [Counsellor] Willpower is good but usually you need some more tools....
23:09:49 [Counsellor] Check out this website...
23:09:53 [Counsellor] https://hellosundaymorning.org/


23:10:13 Ok I will. Thanks

23:11:28 [Counsellor] it is definately not just you...
23:11:50 [Counsellor] pretty much no one succeeds on their first attempt...
23:12:03 [Counsellor] and lapses and relapses are common...
23:12:15 [Counsellor] the trick is to learn from them

23:12:45 I don’t think I can deal with that. I need to succeed first time or fuck it

23:12:45 [Counsellor] my favourite Yoda quote "Failure your greatest teacher is"
23:13:16 [Counsellor] sorry mate but that is unrealistic....

23:13:23 Lol. I like it

23:13:44 [Counsellor] can I make another suggestion?
23:13:57 [Counsellor] what is your plan going forward?
23:14:11 [Counsellor] do you want to try again tomorrow?

23:14:32 I don’t know. If I can’t do one day what good am I to anyone?

23:15:16 [Counsellor] so this attitude where you are really down on yourself, do you think it helps you in general life?

23:16:18 I’m not usually like this. I’m just really pissed off at myself at the moment

23:17:07 [Counsellor] so use your anger as motivation...
23:17:17 [Counsellor] like a footy team coming off a loss

23:18:26 To this point I’ve used the anger as a reason to drink even more. How do I turn that around?

23:19:06 [Counsellor] by learning new ways to manage your anger....
23:19:18 [Counsellor] and exploring why you are angry...
23:19:28 [Counsellor] but you will need to be sober to do that

23:20:43 Fair enough

23:20:46 [Counsellor] that is hard for people to do alone so if you dont think you dont think you have the tools, best to do that in therapy with a good counsellor or psychologist
23:21:13 [Counsellor] another one of my favourite quotes...
23:21:36 [Counsellor] "you need to look at your demons in the face before you can stare them down"

23:21:53 True

23:22:09 [Counsellor] ok so where are you at with it...
23:22:27 [Counsellor] tonight is a right off but what about tomorrow?

23:23:27 I don’t really know. I guess I can try again.....what’s another failure to add to my List?

23:24:06 [Counsellor] so how about you make a phone call tomorrow morning or afternoon before you pick up a drink?
23:24:30 [Counsellor] talk to your local Drug and Alcohol Helpline
23:24:45 [Counsellor] and work out a plan 

23:24:53 Who are they

23:25:12 [Counsellor] which State do you live in mate? will find you the number

23:25:29 SA and thanks

23:25:41 [Counsellor] can you please hold?

23:25:55 Sure

23:26:50 [Counsellor] Alcohol and Drug Information Service (ADIS) call 1300 131 340 (8.30 am to 10.00 pm every day). 

23:27:30 Thank you. I’ll give that a bash


23:27:44 [Counsellor] you can use them going forward as well
23:28:11 [Counsellor] and have a good read of the Hello Sunday Morning website
23:28:22 [Counsellor] one last thing...
23:28:48 [Counsellor] sounds like this session has ben useful given you've stayed with me for over 40 minutes....
23:29:04 [Counsellor] it will disappear when you disconnect...
23:29:15 [Counsellor] as you have come through anonymously
23:29:32 [Counsellor] so maybe copy and paste it into notes or an email to send yourself
23:29:38 [Counsellor] or screen shot it

23:29:46 Ok thanks heaps. And thanks for chatting to me. I appreciate it

 */