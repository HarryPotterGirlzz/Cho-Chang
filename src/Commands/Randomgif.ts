import { EmbedBuilder } from 'discord.js';
import { SlashCommand } from '../Structures';
import { getChoGif } from '../Util';

export default new SlashCommand()
    .setName('randomgif')
    .setDescription('Sends a random Cho gif.')
    .setCallback(async interaction => {
        const gif = await getChoGif();

        const embed = new EmbedBuilder()
            .setTitle('Here you go ❤️')
            .setImage(gif)
            .setFooter({ text: 'Use /subscribe to receive daily Cho gifs in your DMs.' });

        interaction.reply({ embeds: [embed], ephemeral: true });
    });
