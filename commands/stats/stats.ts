import { SlashCommandBuilder } from 'discord.js';
import * as osu from 'node-os-utils';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Replies with system stats!'),
    async execute(interaction: any) {
        try {
            const cpu = osu.cpu;
            const mem = osu.mem;
            const drive = osu.drive;

            const Cpu = await cpu.usage();
            const Ram = await mem.info();
            const Disk = await drive.info();

            // Reply with the system stats, e.g., RAM, CPU, and Disk
        } catch (error) {
            await interaction.reply(`Error: ${error.message}`);
        }
    },
};
