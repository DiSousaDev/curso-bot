const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    const from = ctx.update.message.from
    await ctx.reply(`Seja bem vindo, ${from.first_name}!😃`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b> 
    <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
    <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
        + ' _de várias_ `formas` ```possíveis```'
        + '[Google](http://www.google.com)')
    await ctx.replyWithPhoto({ source: `${__dirname}/dog.png` })
    await ctx.replyWithPhoto('https://englishlive.ef.com/pt-br/blog/wp-content/uploads/sites/16/2014/07/beagle-lindo.jpg',
        { caption: 'Olha o estilo!' })
    await ctx.replyWithPhoto({ url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg'})
    await ctx.replyWithLocation(-25.346034995631044, -49.1972096866231)
    //await ctx.replyWithVideo({ source: `${__dirname}/buscar.mp4` })

})

bot.startPolling()