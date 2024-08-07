function splitCharacterActivity(activityString) {
  // Define the keywords to split the string by
  const keywords = ['Objective', 'Instructions', 'Materials Needed'];

  // Split the string by keywords and keep the delimiters
  const parts = activityString.split(
    new RegExp(`(?=${keywords.join('|')})`, 'g')
  );

  // Initialize an empty object to hold the result
  let result = {};

  // Loop through the parts and extract the key-value pairs
  parts.forEach((part) => {
    const [key, ...value] = part.split(':');
    const trimmedKey = key.trim();
    const trimmedValue = value.join(':').trim();
    if (keywords.includes(trimmedKey)) {
      result[trimmedKey] = trimmedValue;
    }
  });

  return result;
}

// Example usage
const activityString = `Character Comparison
: 
"### Task: Character Comparison\n#### Instructions:\n1. Think of two characters from the same or different stories.\n2. Create a Venn diagram to compare their traits and relationships.\n3. In the overlapping section, write traits they have in common.\n4. In the outer sections, write traits unique to each character.\n5. Write a short paragraph about how their traits affect their relationships in the story.\n\n### Guiding Questions:\n- How do these traits influence their decisions?\n- What challenges do they face together?"
Character Connection Activity
: 
"1. **Objective:** Connect understood vocabulary to character traits.  \n2. **Materials Needed:** Character trait cards, story examples.  \n3. **Instructions:**  \n   - Prepare cards with different character traits (kind, brave, etc.) and unknown words.  \n   - Have students match the unknown words to character traits based on their understanding of the story.  \n   - Discuss why they think each word describes the character.  \n4. **Assessment:** Assess participation and reasoning in the matching process."
Character Detail Chart
: 
"- **Objective:** Create a chart to record key details about characters in a story.\n- **Instructions:** 1. Read a selected story. 2. As a class, discuss the main characters. 3. Use a large poster paper to create a chart with columns for the character's name, key details (like traits, actions, and relationships), and a drawing of the character. 4. Fill out the chart together, encouraging students to contribute their ideas and details they remember from the text."
Character Details Chart
: 
"### Activity: Character Details Chart  \n**Instructions:**  \n1. Read the assigned story together as a class.  \n2. Use the chart below to write down key details about the main character.  \n3. Answer the questions about the character's traits, feelings, and actions based on the text.  \n\n| Character Name | Key Details (e.g., traits, actions) | How do they feel? | Why do you think that? |  \n|-----------------|----------------------------------|-------------------|--------------------------|  \n|                 |                                  |                   |                          |"
Character Dialogue
: 
"Write a short dialogue between the main character and another character in the story. Make sure to show how the characters feel through their words."
Character Drawing Activity
: 
"### Character Drawing Activity  \n**Instructions:** After discussing the main character, draw a picture of them. Then, write three words that describe your character next to your drawing.  \n1. **Word 1:** ___________  \n2. **Word 2:** ___________  \n3. **Word 3:** ___________  \n\n**Support:** Think about how the character looks and what actions they take throughout the story."
Character Emotion Chart
: 
"1. Choose a scene from a story with a character showing different emotions.  \n2. Create a chart with the character's name at the top.  \n3. Under each emotion (happy, sad, angry, etc.), write down what the character did in the story to show that emotion.  \n4. Discuss with your classmates how different actions show different emotions."
Character Feelings Diary
: 
"Imagine you are the character for a day. Write a diary entry from their perspective, expressing how they feel about the events happening in the story."
Character Identification Worksheet
: 
"### Character Identification Worksheet  \n**Instructions:** Read the story provided by the teacher. Then, answer the following questions:\n1. Who is the main character in the story?\n2. Write one sentence about what the main character did.\n3. List one word that describes the main character.\n\n**Support:** Use pictures from the story to help you answer the questions."
Character Interview
: 
"### Task: Conduct a Character Interview\n#### Instructions:\n1. Pretend you are interviewing a character from a book.\n2. Write down at least five questions you would like to ask them.\n3. Then, write possible answers to those questions based on what you know about the character.\n4. Pair up with a classmate and take turns asking and answering your questions.\n\n#### Example Questions:\n- What is your favorite thing to do?\n- How do you feel about the main conflict in the story?"
Character Q&A
: 
"### Character Q&A  \n**Instructions:** After reading the assigned text, pair up with a partner. Take turns asking and answering the following questions:\n1. What is your character's name?\n2. What do they want in the story?\n3. How do they feel at the beginning and at the end of the story?\n\n**Support:** Use sentence starters like \"My character's name is...\" or \"I think my character wants...\"."
Character Question Cards
: 
"- **Objective:** Practice asking and answering questions about characters based on a text.\n- **Instructions:** 1. After reading a story, provide students with blank index cards. 2. In pairs, ask students to write one question about the characters on one side of the card and the answer on the other side. 3. Have pairs swap cards and quiz each other. 4. Encourage students to elaborate on their answers and ask follow-up questions."
Character Question Game
: 
"1. Think of a character from a book or story.  \n2. Take turns asking your partner questions about that character, such as 'What does the character like to do?' or 'What is the character's problem?'  \n3. Give hints if needed and see if your partner can guess the character!"
Character Questioning
: 
"With your partner, ask each other questions about the main character's motivations. Use prompts such as 'Why do you think the character did that?' and 'How would you feel in their situation?'"
Character Questions
: 
"# Character Questions\n\n### Instructions:\n1. After reading a story, think about the **main character**.\n2. Write down **three questions** you have about the character's actions or feelings in the story.\n3. Trade your questions with a partner and answer each other's questions.\n4. Discuss how answering these questions helps you understand the character better.\n\n### Objective:\n- To ask and answer questions about key details regarding a character to improve comprehension."`;

console.log(splitCharacterActivity(activityString));
