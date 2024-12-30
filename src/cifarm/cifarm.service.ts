import { Injectable, OnModuleInit } from "@nestjs/common";
import { readFileSync } from "fs";
import { join } from "path";
import { envConfig } from "src/env";
import { Telegraf } from "telegraf";

@Injectable()
export class CiFarmService implements OnModuleInit {
  private bot: Telegraf;

  constructor() {
  }
    onModuleInit() {
        this.bot = new Telegraf(envConfig().botToken);
        this.initializeCommands();
    }

  private initializeCommands() {
    this.bot.start(async (ctx) => {
      const photoPath = join(__dirname, '..', '..', 'assets', 'cifarm-background.png');
      const totalFarmers = await this.getTotalFarmers();

      try {
        const photo = readFileSync(photoPath);
        const caption = `🌾 Cifarm: Farm-to-earn on Telegram! 🌾\nStep into the first multichain farming game on Telegram, powered by Ciwallet and Wormhole. Farm, help, visit, and even steal from other players while earning airdropped tokens! 💰\n\n🚀 Free to play & packed with rewards! Unlock the potential of multichain gaming with Cifarm. 🌱✨\n👉 Start playing now and grow your farm!\n👩‍🌾 Total farmers: ${totalFarmers}`;

        await ctx.replyWithPhoto(
          { source: photo },
          {
            caption,
            reply_markup: {
              inline_keyboard: [
                [{ text: 'Play Cifarm', url: envConfig().ciFarmMiniAppUrl }]
              ]
            },
          },
        );
      } catch (error) {
        console.error('Error sending photo:', error);
        ctx.reply('An error occurred while processing your request.');
      }
    });

    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));

    this.bot.launch();
  }

  private async getTotalFarmers(): Promise<number> {
    return 12345;
  }
}