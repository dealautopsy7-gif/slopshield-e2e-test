import { formatUsername } from '../lib/formatUsername.js';

export function finishOnboarding(stepData) {
  const chosenName = formatUsername(stepData.name);
  return { completed: true, username: chosenName };
}
