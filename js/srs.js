// js/srs.js

// Check if the student's answers match the current verb
export function checkAnswer(verb, presentInput, pastInput) {
  const isPresentCorrect = presentInput === verb.present.toLowerCase();
  const isPastCorrect = pastInput === verb.past.toLowerCase();

  return {
    present: isPresentCorrect,
    past: isPastCorrect,
    bothCorrect: isPresentCorrect && isPastCorrect
  };
}

// Update the verb's SRS level based on the result
export function updateLevel(verb, result) {
  verb.attempts += 1;

  if (result.bothCorrect) {
    verb.level = Math.min(verb.level + 1, 5);
  } else if (result.present || result.past) {
    // Partial correct: only bump if below level 2
    if (verb.level < 2) {
      verb.level += 1;
    }
    // Otherwise stay the same
  } else {
    verb.level = Math.max(verb.level - 1, 0);
  }
}

// Create feedback message
export function getFeedbackMessage(result) {
  if (result.bothCorrect) {
    return "✅ Great job! Both are correct!";
  } else if (result.present || result.past) {
    return "🟡 Almost! One is correct.";
  } else {
    return "❌ Try again! Both were incorrect.";
  }
}
