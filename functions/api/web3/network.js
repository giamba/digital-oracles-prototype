
const networkSplitter = (network, {ropsten, rinkeby, mainnet, local}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            // This may change if a clean deploy of KODA locally is not done
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};


const getAddress = (network) => {
    return networkSplitter(network, {
        mainnet: '',
        ropsten: '',
        rinkeby: '',
        local: '0x55886B8dd06a1Bbc9E1b8534257CDB8f0dadDf14'
    });
};


const getNetwork = (network) => {
    return networkSplitter(network, {
        mainnet: 1,
        ropsten: 3,
        rinkeby: 4,
        local: 5777
    });
};

module.exports = {
    getAddress,
    getNetwork
};

