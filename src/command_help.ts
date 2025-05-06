import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>) {
  console.log();
  console.log("Welcome to the Pokedex!");
  console.log("Usage:");
  console.log();
  Object.values(commands).map(command => {
    console.log(`${command.name}: ${command.description}`);
  });
  console.log();
}
