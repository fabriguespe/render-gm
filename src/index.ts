import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  // To reply, just call `reply` on the HandlerContext.
  await context.send(`1`);
  await context.send(`2`);
  await context.send(`https://framedl.xyz`);
  await context.send(`3`);
  await context.reply(`gm`);
  await context.send(`vitalik.eth`);
  await context.reply(`gm`);
  await context.send(`https://converse.xyz`);
  await context.reply(`7`);
  await context.reply(`8`);
  await context.reply(`gm`);
  await context.send(`https://converse.xyz/dm/bittu.frens.eth`);
  await context.reply(`9`);
  await context.send(`https://dev.converse.xyz/poap/hpfr17`);
  await context.reply(`11`);
  await context.reply(`gm`);
  await context.send(`https://converse.xyz/group-invite/X97qut3skJgpmblQ6Xmb_`);
  await context.reply(`13`);
  await context.send(`https://converse.xyz/dm/sd`);
  await context.reply(`14`);
  await context.reply(`gm`);
  await context.send(
    `https://converse.xyz/group/68f324d3b28a876a001ac171d092f2a3`
  );
  await context.send(`https://coin-toss.xyz/frames/toss/510`);
  await context.reply(`16`);
  await context.send(`gm`);
});
