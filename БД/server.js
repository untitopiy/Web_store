let  express = require('express')
let app =express();
app.use(express.static('public'))


let  mysql = require('mysql');

let con =mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'admin',
        database: 'market'
    });
    
    app.listen(3000, function () {
        console.log('Сервер запущен на порту 3000');
    });
con.query(
    'SELECT * FROM goods',
    function(error,result)
    {
    if(error) throw error;
     console.log(result);
    }
    );
    
con.query('SELECT * FROM market.goods;', function(error, result) {
    if (error) {
        console.error('Ошибка выполнения запроса:', error);
        return;
    }
    console.log('Результаты запроса:', result); });

app.get('/', function(req,res)
{
    res.end('hello');
    //res.render('index.html');
})