const express = require("express");
const server = express();

const db = require("./db")

//configuração do nunjucks
const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache:true,
});

server.use(express.static("public"));

// habilitar uso do req.body
server.use(express.urlencoded( { extended: true }));


server.get("/", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reverseIdeas = [... rows].reverse();

    let lastIdeas = [];
    for (idea of reverseIdeas) {
        if (lastIdeas.length < 3) {
            lastIdeas.push(idea);
        }
        
    }    

    return res.render("index.html", { ideas: lastIdeas });

    });

       
})


    

server.get("/ideias", function(req, res){

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        const reverseIdeas = [... rows].reverse();

        let lastIdeas = [];
        for (idea of reverseIdeas) {
            if (lastIdeas.length < 4) {
                lastIdeas.push(idea);
            }
        }

    
        return res.render("ideias.html", { ideas: lastIdeas });
        

    });


});


server.post("/", function(req, res){
    //inserir dados na tabela

    const query = `

    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?);`
    
    const values = [
        req.body.image,
        req.body.title,
        req.body.category,
        req.body.description,
        req.body.link        
    ];

    db.run(query, values, function(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        return res.redirect("/ideias");
        
    });
    
});

server.listen(3000, function() {
    console.log("Servidor funcionando");
});