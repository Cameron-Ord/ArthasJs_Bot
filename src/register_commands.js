

require('dotenv').config();

const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
  
    {
        name: 'hey',
        description: 'Replies with hey!',


    },
    {
        name:'quote',
        description:'replies with a random quote',
    },

    {
        name:'add',
        description:'adds two numbers',
        options: [
            {
                name: 'first_number',
                description: 'the first number',
                type: ApplicationCommandOptionType.Number,
                require: true
            },
            {
                name: 'second_number',
                description: 'the second number',
                type: ApplicationCommandOptionType.Number,
                require: true
            }
        ]
    },
    {
        name: 'embed',
        description: 'sends an embed'
    },
    

];

const rest = new REST({version: '10'}).setToken(process.env.token);

(async() =>{
    console.log("registering slash commands...")

    try{
        await rest.put(
            Routes.applicationGuildCommands(process.env.client_id, process.env.guild_id),
            {body: commands}
        )

    console.log("commands registered.")

    } catch (error) {
        console.log(`error: ${error}`)
    }

})();