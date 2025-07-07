// js/data.js

export async function loadVerbs() {
  try {
    const response = await fetch('../data/verbs.json');
    if (!response.ok) {
      throw new Error('Failed to load verbs.json');
    }
    const verbs = await response.json();

    // Ensure all verbs have basic required fields
    return verbs.map(v => ({
      ...v,
      level: v.level ?? 0,
      attempts: v.attempts ?? 0
    }));
  } catch (error) {
    console.error('Error loading verbs:', error);
    return [];
  }
}
