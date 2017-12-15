const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

web3.eth.getBlockNumber(function (error, committedBlockNumber){
    if (error) throw error;

    else {
        for(let i = 1; i <= committedBlockNumber; i++) {
            web3.eth.getBlock(i, function (error, resultOfBlock) {
                if (error) throw error;

                else{

                    let transactionHashOfBlock = [];
                    let transactionOfBlock;
                    for(let i = 0; i < resultOfBlock.transactions.length; i++){
                        transactionHashOfBlock[i] = resultOfBlock.transactions[i];
                        transactionOfBlock = web3.eth.getTransaction(transactionHashOfBlock[i]);
                        //console.log(transactionOfBlock);
                    }
                    //console.log(resultOfBlock);
                }
            });
        }
    }
})


