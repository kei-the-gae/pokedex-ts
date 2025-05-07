import type { State } from "./state.js";

export async function commandHelp(state: State) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  Object.values(state.commands).map(command => {
    console.log(`${command.name}: ${command.description}`);
  });
  console.log();
}
