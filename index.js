var Discord = require('discord.js');
var client = new Discord.Client({ "intents": new Discord.IntentsBitField(130813) });
var token = "сюда-токен-вашего-бота"
//Нужно создать 17-18 серверов и везде применить команду !automod и подождать 24 часа, что бы получить значок!

client.on("ready", () => {
    console.log(`Бот: ${client.user.username} Запустился!`);
});

client.on("messageCreate", message => {
    if (message.content.includes("!automod")) {
        if (message.author.id != "сюда-ваш-USER-ID") return;//Эта проверка что бы только вы могли использовать команду если хотите что бы любой мог использовать просто удалите эту строку!
        message.guild.autoModerationRules.create({
            name: `AutoMod-1`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 5,
            triggerMetadata:
            {
                presets: [1, 2, 3]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-2`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 4,
            triggerMetadata:
            {
                presets: [1, 2, 3]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-3`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 3,
            triggerMetadata:
            {
                presets: [1, 2, 3]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-4`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-5`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-6`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-7`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-8`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.guild.autoModerationRules.create({
            name: `AutoMod-9`,
            creatorId: `820361590826205215`,
            enabled: true,
            eventType: 1,
            triggerType: 1,
            triggerMetadata:
            {
                keywordFilter: [`AutoMod`]
            },
            actions: [
                {
                    type: 1,
                    metadata: {
                        channel: message.channel,
                        durationSeconds: 10,
                        customMessage: 'AutoMod'
                    }
                }
            ]
        }).catch((err) => { console.log(err); });
        message.reply(`Все правила добалени на сервер!`);
    }
});

client.login(token);
