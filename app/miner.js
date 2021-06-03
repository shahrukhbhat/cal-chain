class Miner {
    constructor(blockChain, transactionPool, wallet, p2pServer){
        this.blockChain = blockChain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.p2pServer = p2pServer;
    }

    mine(){
        const validTransactions = this.transactionPool.validTransactions();
        //inlcude a reward for the miner
        //create a block consisting of the valid transactions
        //synchronize the chains in the P2P server
        //clear the transaction Pool
        //broadcast to every miner to clear their transaction pools
    }
}

module.exports = Miner;