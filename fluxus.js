const { Client } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const axios = require('axios');
console.log('[d]');
LinkDiscord = 'https://discord.gg/7pt8MKC5';
api_key = 'E99l9NOctud3vmu6bPne';
atomic_api = 'Wc3pEzdk8vitzwqc';
By = 'Made by _nguyenminhkhoi.';
const token = '';
const clientId = '';

const supportedCommand = {
    name: 'supported',
    description: 'Get information about supported features.',
    options: [] // Add options if needed
};

const commands = [
    {
        name: 'delta',
        description: 'Gets Delta Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Delta link',
                required: true,
            },
        ],
    },
    {
        name: 'linkvertise',
        description: 'Gets linkvertise',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The linkvertise',
                required: true,
            },
        ],
    },
    {
        name: 'fluxus',
        description: 'Gets Fluxus Key',
        options: [
            {
                name: 'link',
                type: 3,
                description: 'The Fluxus link',
                required: true,
            },
        ],
    },
];

const box = "```"; // Định nghĩa biến "box" ở đây

const client = new Client({ intents: 3276799 });

client.once('ready', () => {
    console.log(`[${client.user.name}] Is Startup`);

    const rest = new REST({ version: '9' }).setToken(token);

    (async () => {
        try {
            console.log('Started refreshing global application (/) commands.');
    
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: [...commands, supportedCommand] },
            );
    
            console.log('Successfully reloaded global application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
    

});


// Sự kiện xử lý khi người dùng tương tác với bot
client.on('interactionCreate', async interaction => {
    const { Client, MessageEmbed } = require('discord.js');

    if (interaction.commandName === 'delta') {
        await delta(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'fluxus') {
        await fluxus(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'linkvertise') {
        await linkvertise(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    } else if (interaction.commandName === 'supported') {
        await supported(interaction);
        await interaction.followUp({ content: LinkDiscord, ephemeral: true });
    }
});
  

async function GetKey(link) {
    try {
        const getResponse = await axios.get(`https://api.goatbypassers.xyz/api/fluxus?link=${link}`);
        return getResponse.data.key;
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}

async function supported(interaction) {
    const color = parseInt('#808080'.replace('#', ''), 16); // Convert color to integer

// Construct the embed with the converted color value and animated thumbnail
await interaction.reply({
    embeds: [{
        title: 'Supported',
        description: 'https://discord.gg/7pt8MKC5',
        author: {
            name: "GRAYX HUB",
            url: "https://discord.gg/NejtBQBYeY",
            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
        },
        thumbnail: { 
            url: 'https://i.pinimg.com/originals/f5/f2/74/f5f27448c036af645c27467c789ad759.gif' // Replace 'https://example.com/animated_thumbnail.gif' with the actual URL of your animated thumbnail
        },
        fields: [
            { name: '1. Delta Key: 🔑', value:'working <a:verify:1212346413535465502>' },
            { name: '2. Fluxus Key: 🔑', value:'working <a:verify:1212346413535465502>' },
            { name: '3. Linkvertise: 🔑', value: 'working <a:verify:1212346413535465502>' },
            // Add more supported features if needed
        ],
        color: color, // Set the converted color value here
        footer: {
            text: `Requested By ${interaction.user.username} | ${By}`,
        },
    }],
    components: [],
    content: "**GRAYX HUB**"
});

}

async function fluxus(interaction) {
    const link = interaction.options.getString('link');

    await interaction.deferReply();

    if (link.startsWith('https://flux.li/android/external/start.php?HWID=')) {
        const hwid = link.split('=')[1].split('&')[0];
        const apiUrl = `https://api.goatbypassers.xyz/api/fluxus?link=https://flux.li/android/external/start.php?HWID=${hwid}`
        try {
            const key = await GetKey(link);
            if (key) {
                const currentTime = new Date();
                const elapsedTime = (currentTime - interaction.createdAt) / 1000; // Time elapsed in seconds
                const requestTime = new Date().toLocaleString();

                await interaction.editReply({
                    embeds: [{
                        title: "Fluxus Key Bypass | GRAYX",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Success Key:  <a:verify:1212346413535465502>', value: `${box}${key}${box}` },
                            { name: 'Requested Link: 🔗', value: `${box}${link}${box}` },
                            { name: 'Time Bypass: 🕠', value: `${box}${elapsedTime.toFixed(2)} seconds${box}` },
                            { name: 'Server: 💬', value: interaction.guild ? interaction.guild.name : 'Direct Message' },
                            { name: 'Request Time: ⏰', value: requestTime },
                        ],
                        footer: { text: `Requested By ${interaction.user.username} | ${By}` }
                    }]
                });
                
                
    

                


                
                

                
                        
                    
                
            }
             else {
                console.error(' Key not found in response');
                await interaction.editReply({
                    embeds: [{
                        title: "Fluxus Key Bypass | GRAYX",
        author: {
            name: "GRAYX HUB",
            url: "https://discord.gg/NejtBQBYeY",
            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
        },
        thumbnail: { 
            url: interaction.user.avatarURL()
        },
                        fields: [
                            { name: 'Status:', value: box + 'Key not found in response RETRY' + box }
                        ]
                    }]
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Bypass | GRAYX",
        author: {
            name: "GRAYX HUB",
            url: "https://discord.gg/NejtBQBYeY",
            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
        },
        thumbnail: { 
            url: interaction.user.avatarURL()
        },
                    fields: [
                        { name: 'Status:', value: 'Please restart Fluxus Android. If you are using a VPN, disable it. You can also try to use a different browser, such as Google Chrome!!' }
                    ]
                }]
            });
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Fluxus Link",
                author: {
                    name: "GRAYX HUB",
                    url: "https://discord.gg/NejtBQBYeY",
                    icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link:', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}

async function delta(interaction) {
    const link = interaction.options.getString('link');

    await interaction.reply({
        embeds: [{
            title: "Getting Delta Key",
            author: {
                name: "GRAYX HUB",
                url: "https://discord.gg/NejtBQBYeY",
                icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
            },
            thumbnail: { 
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Please wait a moment...```' }
            ]
        }],
    });

    if (link.startsWith('https://gateway.platoboost.com/a/8?id=')) {
        const urlParams = new URLSearchParams(new URL(link).search);
        const hwid = urlParams.get('id');
        const apiUrl = `https://stickx.top/api-delta/?hwid={hwid}&api_key=${api_key}`;

        try {
            const start = Date.now(); 
            const response = await axios.get(apiUrl);
            console.log(response)
            const end = Date.now();
            const time = (end - start) / 1000; 

            if (response.data.key) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Delta Key",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:   <a:verify:1212346413535465502>', value: `${box}${response.data.key}${box}` },
                            { name: 'HWID:', value: `${box}${hwid}${box}` },
                            { name: 'Time Bypass:', value: `${box}${time} Seconds${box}` }


                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`
                        }
                    }],
                });            
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Delta Key",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: { 
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:', value: '```Either Hwid Is Invalid Or Api Is Not Working.```' },
                            { name: 'HWID:', value: `${box}${hwid}${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`
                        }
                    }],
                });                       
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Delta key",
                    author: {
                        name: "GRAYX HUB",
                        url: "https://discord.gg/NejtBQBYeY",
                        icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                    },
                    thumbnail: { 
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status:', value: '```Either Api Is Ofline Or Not Responding.```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Delta Link",
                author: {
                    name: "GRAYX HUB",
                    url: "https://discord.gg/NejtBQBYeY",
                    icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                },
                thumbnail: { 
                    url: interaction.user.avatarURL()
                },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                ]
            }]
        });
    }
}
async function linkvertise(interaction) {
    const link = interaction.options.getString("link");
    const box = "```";

    await interaction.reply({
        embeds: [{
            title: "Getting Linkvertise Key",
            author: {
                name: "GRAYX HUB",
                url: "https://discord.gg/NejtBQBYeY",
                icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
            },
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                { name: 'Status', value: '```Đợi một chút nha thằng lồn```' },
                { name: 'Status', value: '```Please wait 15-60s```' },
            ]
        }],
    });

    const supportedLinks = [
        'https://pandadevelopment.net/getkey?service=vegax&hwid=',
        'https://valyse.best/verification?device_id=',
        'https://linkvertise.com/',
        'https://direct-link.net/',
        'https://gateway.platoboost.com/a/8?id',
        'https://spdmteam.com/key-system-1?hwid=',
        'https://keyrblx.com/getkey/ZenHub?hwid=',
        'https://keyrblx.com/getkey/ToraScripts?hwid=',
        'https://pandadevelopment.net/getkey?service=evon&hwid=',
        'https://mobile.codex.lol?token=',
        'https://mobile.codex.lol/?token=',
        'https://keyrblx.com/getkey/',
        'https://pandadevelopment.net/getkey?service=trigon-evo&hwid='
    ];

    const foundLink = supportedLinks.find(supportedLink => link.startsWith(supportedLink));

    if (foundLink) {
        const apiUrl = `http://45.88.188.104:6087/api/adlinks/bypass?url=${link}`;

        try {
            const start = Date.now();
            const response = await axios.get(apiUrl);
            console.log(response);
            const end = Date.now();
            const time = (end - start) / 1000;

            if (response.data.result) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Linkvertise",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Key:', value: `${box}${response.data.result}${box}` },
                            { name: 'Time Bypass:', value: `${box}${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`
                        }
                    }],
                });
            } else if (response.data.bypassed) {
                await interaction.editReply({
                    embeds: [{
                        title: "Successfully Got Linkvertise",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Key:', value: `${box}${response.data.bypassed}${box}` },
                            { name: 'Time Taken:', value: `${box}${time} Seconds${box}` }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`
                        }
                    }],
                });
            } else {
                await interaction.editReply({
                    embeds: [{
                        title: "Failed To Get Linkvertise",
                        author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                        fields: [
                            { name: 'Status:', value: '```Error or Not Supported!.Pls Try Again!!```' }
                        ],
                        footer: {
                            text: `Requested By ${interaction.user.username} | ${By}`
                        }
                    }],
                });
            }
        } catch (error) {
            console.error(error);
            await interaction.editReply({
                embeds: [{
                    title: "Failed To Get Linkvertise",
                    author: {
                        name: "GRAYX HUB",
                        url: "https://discord.gg/NejtBQBYeY",
                        icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3"
                    },
                    thumbnail: {
                        url: interaction.user.avatarURL()
                    },
                    fields: [
                        { name: 'Status:', value: '```Error or Not Supported!.Pls Try Again!!```' },
                    ],
                    footer: {
                        text: `Requested By ${interaction.user.username} | ${By}`
                    }
                }],
            });         
        }
    } else {
        await interaction.editReply({
            embeds: [{
                title: "Invalid Linkvertise Link",

                author: {
                            name: "GRAYX HUB",
                            url: "https://discord.gg/NejtBQBYeY",
                            icon_url: "https://media.discordapp.net/attachments/1203556246683258922/1217109008389771364/Untitled438_20240312205026.png?ex=664aadd8&is=66495c58&hm=b90635b2d8129931dea7086bf4fe303025057a28363f3bc10354efe4e63899cc&=&format=webp&quality=lossless&width=671&height=671"
                        },
                        thumbnail: {
                            url: interaction.user.avatarURL()
                        },
                fields: [
                    { name: 'Link', value: `${box}${link}${box}` }
                    
                ]
            }]
        });
    }
}


client.login(token);