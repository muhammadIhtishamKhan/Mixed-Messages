//This object contains all the necessary information required to create an object
const storyBank = {
    //This array contains a list of objects in the final story
    _subject: ["Ihtisham", "David","Mark", "A man", "A police officer", "The mailman","A woman", "Tom","John"],
    //This array contains a list of possible actions the subject could perform
    _action: ["went to the mall","ate a sandwich","bought a book","was craving ice cream", "bought coffee", "looked at a car", "went to a restaurant"],
    //This array contains possible endings for the story
    _ending: ["and had fun", "and loved it", "and became famous", "and was never found", "and talked about if forever"],
    get subject()
    {
        return this._subject;
    },
    get action()
    {
        return this._action;
    },
    get ending()
    {
        return this._ending;
    }
};

//Creates a random number 
const randomNumber= number => {
    return Math.floor(Math.random() * number )  ;
}

//creates a random story from the storyBank object, by randomly choosing a subject, action and an ending
const createStory = ()=> {
    let finalStory = [];
    let subject = storyBank.subject[randomNumber(storyBank.subject.length)];
    let action = storyBank.action[randomNumber(storyBank.action.length)];
    let ending = storyBank.ending[randomNumber(storyBank.ending.length)];
    finalStory.push(subject);
    finalStory.push(action);
    finalStory.push(ending);
    console.log (finalStory);
    return finalStory;
}

//This is the final string which is basically the finalStory array converted to string 
let finalString = createStory().join(" ") +".";

console.log(finalString);