import { run, HandlerContext } from "@xmtp/message-kit";

run(async (context: HandlerContext) => {
  // To reply, just call `reply` on the HandlerContext.

  await context.reply(`hey all!`);
  await context.send(
    `https://base-frame-lyart.vercel.app/transaction?transaction_type=swap&amount=1&token_from=eth&token_to=usdc`
  );
  await context.reply(`hey sending some base`);
  await context.send(`https://ens.steer.fun/frames/manage?name=vitalik.eth`);
  await context.reply(`hey sending some ens`);
  await context.send(`https://frame.brianknows.org/`);
  await context.reply(`hey sending some frame`);
  await context.send(`https://slot-machine-frame.vercel.app/`);
  await context.reply(`hey sending some slot machine`);
  await context.send(`nice`);
  await context.send(`cool!`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(`https://framedl.xyz`);
  await context.reply(`wow feeling excited`);
  await context.send(`vitalik.eth`);
  await context.reply(` LFG!`);
  await context.send(`https://dev.converse.xyz`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.reply(` LFG!`);
  await context.reply(`gm`);
  await context.send(`https://dev.converse.xyz/dm/bittu.frens.eth`);
  await context.reply(` LFG!`);
  await context.send(`https://dev.converse.xyz/poap/hpfr17`);
  await context.reply(` LFG!`);
  await context.reply(`gm`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(
    `https://dev.converse.xyz/group-invite/X97qut3skJgpmblQ6Xmb_`
  );
  await context.reply(` LFG!`);
  await context.send(`https://dev.converse.xyz/dm/sd`);
  await context.send(`vitalik.eth,`);
  await context.reply(` LFG!`);
  await context.reply(`awesome!`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(
    `https://dev.converse.xyz/group/68f324d3b28a876a001ac171d092f2a3`
  );
  await context.reply(`awesome!`);
  await context.send(`"vitalik.eth"`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(`https://coin-toss.xyz/frames/toss/510`);
  await context.reply(`nice!`);

  await context.reply(`hey all!`);
  await context.send(`https://dev.converse.xyz/group/sdsd`);
  await context.send(
    `https://dev.converse.xyz/group-invite/X97qut3skJgpmblQ6Xmb_`
  );
  await context.reply(`awesome!`);
  await context.send(
    `https://dev.converse.xyz/group-invite/GI3AvRzwwb7PfDJt4xdu0`
  );
  await context.reply(`awesome!`);
  await context.send(`https://dev.converse.xyz/group-invite/`);
  await context.reply(`awesome!`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(`https://dev.converse.xyz/dm/bittu.frens.eth?text=gm`);
  await context.reply(`awesome!`);
  await context.send(`https://dev.converse.xyz/dm/bittu.converse.xyz`);
  await context.send(
    `https://dev.converse.xyz/poap/hpfr17?address=fabri.base.eth`
  );
  await context.reply(`awesome!`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(
    `https://dev.converse.xyz/group/68f324d3b28a876a001ac171d092f2a3`
  );
  await context.send(`https://dev.converse.xyz/poap/hpfr17`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  await context.send(
    `https://dev.converse.xyz/group/68f324d3b28a876a001ac171d092f2a3?text=gm`
  );
  await context.reply(`awesome!`);
});
