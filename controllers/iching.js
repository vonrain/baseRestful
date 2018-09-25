var iChing = require("i-ching");

var fn_iChing= async (ctx, next) => {
    var question = ctx.params.question;
    var reading = iChing.ask(question);
    var result = reading.hexagram.number + reading.hexagram.character + reading.hexagram.names.join(', ')

    console.log(result);
    console.log(typeof(result));

    // ctx.response.body = `<h1>Hello, ${reading.hexagram.number}, ${reading.hexagram.character}, ${reading.hexagram.names.join(', ')}!</h1>`;
    ctx.response.body = {
        number:reading.hexagram.number,
        character:reading.hexagram.character,
        names:reading.hexagram.names.join(', ')
    };
};



module.exports = {
    'POST /iching': fn_iChing
};

