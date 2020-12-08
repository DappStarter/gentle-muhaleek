require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan repeat stick around hockey clinic food genuine'; 
let testAccounts = [
"0x720a78b34e3e0bb20a5b45f2214fe58c8dbad1196c094ba15e0e0bd143ce0dca",
"0xc30fee28ab4ee7078630bd752f6e3122c770312f63567696bce6e0ab45bbe306",
"0x39586adc6f1f6b937e66b2e14475e5d9315a67103852b09609acf9d1745c6805",
"0x4821879a7c3de6b64b65690f71d22b6443d6f1640569fa4f32a583c530875610",
"0x4b7a39d7885bfb6f5362537665dca5c8845721031225096c4fd6e9ba3e926f30",
"0x725095aa45afe0e78587a46e2b95db64840b10995cc7a4a47e5713a108f12b1f",
"0xecaea1935fc22bfad754d1ce7a1df46825013d208f5d9f79c4cd27e3d36490de",
"0x1690ecc4b299a56702ad731417201504de5f51cb6f0a734315fbdbcc30ccd497",
"0x819119b43f5117bc2a7bc76489bf7964b119740772e6f6f171b486af709373c5",
"0xfe9649a44067c5a4feaf6ba356b440459261ad9e4e9197fa453efab48a9329b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
