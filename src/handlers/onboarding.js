import { normalizeUsername } from '../utils/normalizeUsername.js';

export function finishOnboarding(stepData) {
  const chosenName = normalizeUsername(stepData.name);
  return { completed: true, username: chosenName };
}
