require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/d4a-KTJIlHReZLzWxBCCAy8H1k6AN9bR',
      accounts: [
        '6ebb25a38f2ef8839c78669edadf1e849497ffc2758ef9f106e9bdd834b2dfa6',
      ],
    },
  },
}