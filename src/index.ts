import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  // To reply, just call `reply` on the HandlerContext.
  await context.send(`1`);
  await context.send(`2`);
  await context.send(`https://framedl.xyz`);
  await context.send(`3`);

  await context.reply(`4`);
  await context.send(`vitalik.eth`);

  await context.reply(`5`);
  await context.reply(`6`);

  await context.reply(`7`);
  await context.reply(`8`);
  await context.reply(`9`);
});
