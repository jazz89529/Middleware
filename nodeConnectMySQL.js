var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blockchaindata"
});


//
// con.connect(function(err) {
//   if (err) throw err;// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO transactions (hash, nonce,blockhash,blockNumber,transactionIndex,fromAdd,toAdd,value,gasPrice,gas, input) VALUES ('123',456,'789',123,123,'000','000',123,456,778,'111')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

//   console.log("Connected!");
//   var sql = "INSERT INTO blocks (number, hash, parentHash,nonce,sha3Uncles,transactionRoot,stateRoot,miner,difficulty,totalDifficulty,extraData,size,gasLimit,gasUsed,timestamp,transactions) VALUES (100, '123','456','789','123','456','789','123',100,100,'456',100,100,100,100,'123')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
//
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM transactions ORDER BY blockNumber DESC LIMIT 1", function (err, result, fields) {
    if (err) throw err;
    else {
        console.log(result);
    }
  });
});
