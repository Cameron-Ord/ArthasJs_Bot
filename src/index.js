require('dotenv').config();

const {Client, IntentsBitField, EmbedBuilder, ActivityType} = require('discord.js');



const client = new Client({

    intents: [
        
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]

});




client.on('ready', (c) =>{

    console.log(`${c.user.username} is online`)
})

let quotes = ["Frostmourne yearns.", "You will all serve me.", "I am one cold, brother.", "I'm afraid my condition has left me cold to your pleas of mercy.", "No man can defeat me! Although, ten to twenty-five might do the trick."
,"If you think I'm powerful now, you should see my abilities in Heroic mode.","It's Lich King... not Lick King. The two are very very different jobs.", "I'm looking for a few dead men, with the cursed metal to be death knights."
,"All I want is to settle down with a Lich Queen of my own and have some little Lich-lings. Is that too much to ask?", "Ever get the feeling you're hearing voices in your helmet?", "You would make an adequate ghoul. Mindless and proficient at repetitive tasks."
,"The thing no one tells you about sitting on a frozen throne is how much of your flesh ends up stuck to it.", "I rule.", "Darkness stopped calling. It's alright though, we're still friends through Real ID."]

client.on('messageCreate', (msg) => {
    console.log(msg.content)

    if(msg.author.bot) {
        return
    }

    if(msg.content === "!greeting") {
        msg.reply("THIS ENTIRE DISCORD MUST BE PURGED!");
    }

    if(msg.content === "!quote") {
    
        let i = Math.floor(Math.random() * quotes.length)

        msg.reply(quotes[i])

    }
    if(msg.content === "!embed"){
        const embed = new EmbedBuilder()
        .setTitle("ArthasBot Code")
        .setDescription("Documented code for ArthasBot")
        .setColor('Random')
        .setURL("https://github.com/NuckenMcFuggets/Arthas_Discord_Bot")
        .setThumbnail("https://blizzardwatch.com/wp-content/uploads/2017/07/ArthasDK-Header.jpg");
        msg.channel.send({embeds: [embed]});
    }

})

client.on('interactionCreate', (interaction) =>{
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "quote"){

        let i = Math.floor(Math.random() * quotes.length)

        interaction.reply(quotes[i])
    }

    if(interaction.commandName === "hey"){

        interaction.reply("hello!")
    }

    if(interaction.commandName === "add") {

        try{
            
        let num1 = interaction.options.get('first_number').value;

        let num2 = interaction.options.get('second_number').value;

        console.log(num1,num2)

        interaction.reply(`the sum is ${num1 + num2}`);


        } catch (error){

            console.log(`error ${error}`);
            interaction.reply("please enter two numbers");
        }

    }

    if(interaction.commandName === "embed") {
        const embed = new EmbedBuilder()
        .setTitle("ArthasBot Code")
        .setDescription("Documented code for ArthasBot")
        .setColor('Random')
        .setURL("https://github.com/NuckenMcFuggets/Arthas_Discord_Bot")
        .setThumbnail("https://blizzardwatch.com/wp-content/uploads/2017/07/ArthasDK-Header.jpg");


        interaction.reply({embeds: [embed]});

    }

});

client.on('ready', (c_status) => {

    console.log(`${c_status.user.username} status is online`);

    client.user.setActivity(
        {
            name: "Warcraft 3",
            type: ActivityType.Playing

        }
    );



})

client.login(process.env.token);