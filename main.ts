import { TextLineStream } from "https://deno.land/std@0.204.0/streams/mod.ts";

const cow = String.raw`
       \
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||`.slice(1);

function print(lines: string[]) {
  const width = lines.reduce((max, line) => Math.max(max, line.length), 0);

  console.log(`\
/${"-".repeat(width + 2)}\\
${lines.map((line) => `| ${line.padEnd(width)} |`).join("\n")}
\\${"-".repeat(width + 2)}/
${cow}`);
}

async function main() {
  if (Deno.args.length > 0) {
    const lines = Deno.args.join(" ").split("\n");
    print(lines);
    return;
  }

  const stream = Deno.stdin.readable
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new TextLineStream());

  const lines: string[] = [];

  for await (const line of stream) {
    lines.push(line);
  }

  print(lines);
}

if (import.meta.main) main();
