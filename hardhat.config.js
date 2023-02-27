require("@nomicfoundation/hardhat-toolbox");

const getEnv = (env) => {
        const value = process.env[env];
        if (typeof value === 'undefined') {
          console.warn(`${env} has not been set.`);
          throw new Error(`${env} has not been set.`);
        }
        return value;
};

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
                hardhat: {
                        gas: 10000000,
                },
    local: {
          chainId: 31337,
      url: `http://127.0.0.1:8545/`,
      accounts: [getEnv('TEST_ACCOUNT_PRIVATE_KEY')],
          gasPrice: 18000000000,
    },
    mainnet: {
          chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${getEnv('ALCHEMY_API_KEY') || '123123123'}`,
      accounts: [getEnv('TEST_ACCOUNT_PRIVATE_KEY')],
          gasPrice: 18000000000,
    },
    bsc: {
          chainId: 56,
      url: 'https://bsc-dataseed.binance.org/',
      accounts: [getEnv('TEST_ACCOUNT_PRIVATE_KEY')],
          //gasPrice: 18000000000,
    },
  },
  etherscan: {
    apiKey: 'SM9NGYQ6EW8FK7AIQWTW9VE467N5GXWV66',
  }

};
