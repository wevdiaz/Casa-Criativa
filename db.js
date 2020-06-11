const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./ws.db");

db.serialize(function() {
    //criar atabela

    db.run(`CREATE TABLE IF NOT EXISTS ideas(
        
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
        
    `);

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
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Curso de Programação",
        "Estudo",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolore expedita, cum dolores voluptas doloremque corrupti nisi nulla quae! Ad fugit dolore vel temporibus incidunt a nam tenetur molestias.",
        "https://rocketseat.com.br"
    ];
    

});


module.exports = db;