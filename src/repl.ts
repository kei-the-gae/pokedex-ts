import { createInterface } from "readline";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", async (input) => {
    const words = cleanInput(input);
    if (!words.length) {
      rl.prompt();
      return;
    }

    const commandName = words[0];
    console.log(`Your command was: ${commandName}`);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}

