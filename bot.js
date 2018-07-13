const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
  const api = "https://api.warframestat.us/pc/cetusCycle"
  const snekfetch = require("snekfetch")
	  snekfetch.get(api).then(r => {
			var body = r.body.isDay;
      var shortString = r.body.shortString
    if (body == true) {
      message.channel.send({embed: {
    color: 16776960,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Time for",
    url: "",
    description: "Plains of Eidolon",
    fields: [{
        name: "What time is it?",
        value: ":sunny: It is currently day time! Happy fishing! :fish:"
      },
      {
        name: "Time until night:",
        value: shortString
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Warframe Bot | Zippy"
    }
  }
});
    }else
      message.channel.send({embed: {
    color: 0,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Time for",
    url: "",
    description: "Plains of Eidolon",
    fields: [{
        name: "What time is it?",
        value: ":first_quarter_moon: It is currently night time, don't go out! :no_entry_sign:"
      },
      {
        name: "Time until day:",
        value: shortString
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "Warframe Bot | Zippy"
    }
  }
});
	  });
  }



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
