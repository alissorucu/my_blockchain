const Blockchain = require('./blockchain');

const bitcoin =  new Blockchain();


const previousBlockHash = "0000PIEFDGPSDF213L4HK1324HR12IRH8SAFD";
const currentBlockData = [
    {
        amount: 10,
        sender: "SDAF078SDF80032RFQHD",
        recipient: "AAFHHASDF902QR2FJLSKDFH29ASDF23"
    },
    {
        amount: 30,
        sender: "SDAF078SDF80032RFQHD",
        recipient: "AAFHHASDF902QR2FJLSKDFH29ASDF23"
    },
    {
        amount: 100,
        sender: "SDAF078SDF80032RFQHD",
        recipient: "AAFHHASDF902QR2FJLSKDFH29ASDF23"
    }
]

const nonce = 3198;

console.log(bitcoin);

//node dev/test.js