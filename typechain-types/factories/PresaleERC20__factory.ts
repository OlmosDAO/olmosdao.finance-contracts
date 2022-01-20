/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PresaleERC20, PresaleERC20Interface } from "../PresaleERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "daiAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "OlmosDAOToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountDaiTokens",
        type: "uint256",
      },
    ],
    name: "buyToken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "buyers",
    outputs: [
      {
        internalType: "uint256",
        name: "amountDaiSpent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountTokenPurchased",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountPaid",
        type: "uint256",
      },
    ],
    name: "calculateAmountTokensPurchased",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "calculateNumberOfTokenLeft",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goalPresale",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mercy",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "moveTokensToTreasury",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceTokenPerDai",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052735b38da6a701c568545dcfcb03fcb875f56beddc4600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606960055562030d406006553480156200007257600080fd5b50604051620021e4380380620021e4833981810160405281019062000098919062000249565b6000620000af620001d760201b620011791760201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000290565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200021182620001e4565b9050919050565b620002238162000204565b81146200022f57600080fd5b50565b600081519050620002438162000218565b92915050565b60008060408385031215620002635762000262620001df565b5b6000620002738582860162000232565b9250506020620002868582860162000232565b9150509250929050565b611f4480620002a06000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806361d027b311610097578063aa8a05fc11610066578063aa8a05fc14610267578063c9bcba8014610285578063f2fde38b146102a3578063f4b9fa75146102bf576100f5565b806361d027b3146101f0578063715018a61461020e5780638da5cb5b1461021857806397a993aa14610236576100f5565b80633425cb19116100d35780633425cb191461017857806337d63e251461019657806340193883146101b45780635d1b6e9d146101d2576100f5565b806316c8aeed146100fa57806326b0d014146101185780632d296bf114610148575b600080fd5b6101026102dd565b60405161010f9190611519565b60405180910390f35b610132600480360381019061012d9190611565565b610380565b60405161013f9190611519565b60405180910390f35b610162600480360381019061015d9190611565565b610397565b60405161016f91906115ad565b60405180910390f35b61018061088a565b60405161018d91906115ad565b60405180910390f35b61019e610932565b6040516101ab9190611519565b60405180910390f35b6101bc610938565b6040516101c99190611519565b60405180910390f35b6101da61093e565b6040516101e791906115ad565b60405180910390f35b6101f8610baa565b6040516102059190611647565b60405180910390f35b610216610bd0565b005b610220610d23565b60405161022d9190611683565b60405180910390f35b610250600480360381019061024b91906116ca565b610d4c565b60405161025e9291906116f7565b60405180910390f35b61026f610d70565b60405161027c9190611647565b60405180910390f35b61028d610d96565b60405161029a91906115ad565b60405180910390f35b6102bd60048036038101906102b891906116ca565b610f91565b005b6102c7611153565b6040516102d49190611647565b60405180910390f35b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161033a9190611683565b602060405180830381865afa158015610357573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037b9190611735565b905090565b6000600554826103909190611791565b9050919050565b600060018210156103dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d490611848565b60405180910390fd5b60006103e883611181565b905060006103f582610380565b905083600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610455929190611868565b602060405180830381865afa158015610472573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104969190611735565b10156104d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ce906118dd565b60405180910390fd5b83600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016105339190611683565b602060405180830381865afa158015610550573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105749190611735565b10156105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90611949565b60405180910390fd5b83600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016106119190611683565b602060405180830381865afa15801561062e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106529190611735565b1015610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068a906119db565b60405180910390fd5b8061069c6102dd565b10156106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d490611949565b60405180910390fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001600082825461072f91906119fb565b9250508190555080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600082825461078891906119fb565b925050819055506107de333084600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111dd909392919063ffffffff16565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161083b929190611a51565b6020604051808303816000875af115801561085a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087e9190611aa6565b50600192505050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016108e79190611683565b602060405180830381865afa158015610904573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109289190611735565b6006541015905090565b60055481565b60065481565b600080600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541161098e57600080fd5b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154116109dd57600080fd5b610a6e3330600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010154600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166111dd909392919063ffffffff16565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546040518363ffffffff1660e01b8152600401610b0d929190611a51565b6020604051808303816000875af1158015610b2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b509190611aa6565b50600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600080820160009055600182016000905550506001905090565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610bd8611179565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610c65576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c5c90611b1f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60016020528060005260406000206000915090508060000154908060010154905082565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610da0611179565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610e2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2490611b1f565b60405180910390fd5b610e3561088a565b610e74576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6b90611b8b565b60405180910390fd5b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610ed19190611683565b602060405180830381865afa158015610eee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f129190611735565b90506000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050610f888183600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166112669092919063ffffffff16565b60019250505090565b610f99611179565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611026576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161101d90611b1f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611096576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161108d90611c1d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600033905090565b6000806000905060006005546111956102dd565b61119f9190611c6c565b9050808411156111bc5780846111b59190611c9d565b91506111c8565b6111c584610380565b93505b81846111d49190611c9d565b92505050919050565b611260846323b872dd60e01b8585856040516024016111fe93929190611cd1565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112ec565b50505050565b6112e78363a9059cbb60e01b8484604051602401611285929190611a51565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506112ec565b505050565b600061134e826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113b39092919063ffffffff16565b90506000815111156113ae578080602001905181019061136e9190611aa6565b6113ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113a490611d7a565b60405180910390fd5b5b505050565b60606113c284846000856113cb565b90509392505050565b60606113d6856114ed565b611415576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161140c90611de6565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161143e9190611e80565b60006040518083038185875af1925050503d806000811461147b576040519150601f19603f3d011682016040523d82523d6000602084013e611480565b606091505b509150915081156114955780925050506114e5565b6000815111156114a85780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114dc9190611eec565b60405180910390fd5b949350505050565b600080823b905060008111915050919050565b6000819050919050565b61151381611500565b82525050565b600060208201905061152e600083018461150a565b92915050565b600080fd5b61154281611500565b811461154d57600080fd5b50565b60008135905061155f81611539565b92915050565b60006020828403121561157b5761157a611534565b5b600061158984828501611550565b91505092915050565b60008115159050919050565b6115a781611592565b82525050565b60006020820190506115c2600083018461159e565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061160d611608611603846115c8565b6115e8565b6115c8565b9050919050565b600061161f826115f2565b9050919050565b600061163182611614565b9050919050565b61164181611626565b82525050565b600060208201905061165c6000830184611638565b92915050565b600061166d826115c8565b9050919050565b61167d81611662565b82525050565b60006020820190506116986000830184611674565b92915050565b6116a781611662565b81146116b257600080fd5b50565b6000813590506116c48161169e565b92915050565b6000602082840312156116e0576116df611534565b5b60006116ee848285016116b5565b91505092915050565b600060408201905061170c600083018561150a565b611719602083018461150a565b9392505050565b60008151905061172f81611539565b92915050565b60006020828403121561174b5761174a611534565b5b600061175984828501611720565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061179c82611500565b91506117a783611500565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156117e0576117df611762565b5b828202905092915050565b600082825260208201905092915050565b7f4d696e2062757920312044616900000000000000000000000000000000000000600082015250565b6000611832600d836117eb565b915061183d826117fc565b602082019050919050565b6000602082019050818103600083015261186181611825565b9050919050565b600060408201905061187d6000830185611674565b61188a6020830184611674565b9392505050565b7f4669727374206772616e7420616c6c6f77616e63650000000000000000000000600082015250565b60006118c76015836117eb565b91506118d282611891565b602082019050919050565b600060208201905081810360008301526118f6816118ba565b9050919050565b7f4e6f7420656e6f75676820746f6b656e73000000000000000000000000000000600082015250565b60006119336011836117eb565b915061193e826118fd565b602082019050919050565b6000602082019050818103600083015261196281611926565b9050919050565b7f427579657220646f6573206e6f74206861766520656e6f75676820746f6b656e60008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006119c56021836117eb565b91506119d082611969565b604082019050919050565b600060208201905081810360008301526119f4816119b8565b9050919050565b6000611a0682611500565b9150611a1183611500565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a4657611a45611762565b5b828201905092915050565b6000604082019050611a666000830185611674565b611a73602083018461150a565b9392505050565b611a8381611592565b8114611a8e57600080fd5b50565b600081519050611aa081611a7a565b92915050565b600060208284031215611abc57611abb611534565b5b6000611aca84828501611a91565b91505092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b096020836117eb565b9150611b1482611ad3565b602082019050919050565b60006020820190508181036000830152611b3881611afc565b9050919050565b7f476f616c20636f6d706c65746564000000000000000000000000000000000000600082015250565b6000611b75600e836117eb565b9150611b8082611b3f565b602082019050919050565b60006020820190508181036000830152611ba481611b68565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000611c076026836117eb565b9150611c1282611bab565b604082019050919050565b60006020820190508181036000830152611c3681611bfa565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611c7782611500565b9150611c8283611500565b925082611c9257611c91611c3d565b5b828204905092915050565b6000611ca882611500565b9150611cb383611500565b925082821015611cc657611cc5611762565b5b828203905092915050565b6000606082019050611ce66000830186611674565b611cf36020830185611674565b611d00604083018461150a565b949350505050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611d64602a836117eb565b9150611d6f82611d08565b604082019050919050565b60006020820190508181036000830152611d9381611d57565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611dd0601d836117eb565b9150611ddb82611d9a565b602082019050919050565b60006020820190508181036000830152611dff81611dc3565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611e3a578082015181840152602081019050611e1f565b83811115611e49576000848401525b50505050565b6000611e5a82611e06565b611e648185611e11565b9350611e74818560208601611e1c565b80840191505092915050565b6000611e8c8284611e4f565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000611ebe82611e97565b611ec881856117eb565b9350611ed8818560208601611e1c565b611ee181611ea2565b840191505092915050565b60006020820190508181036000830152611f068184611eb3565b90509291505056fea264697066735822122059c6ab1c4d7e84716e666d080e7841016a221ccb764ea09b7b884c66506185bc64736f6c634300080b0033";

type PresaleERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PresaleERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PresaleERC20__factory extends ContractFactory {
  constructor(...args: PresaleERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PresaleERC20";
  }

  deploy(
    daiAddress: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PresaleERC20> {
    return super.deploy(
      daiAddress,
      token,
      overrides || {}
    ) as Promise<PresaleERC20>;
  }
  getDeployTransaction(
    daiAddress: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(daiAddress, token, overrides || {});
  }
  attach(address: string): PresaleERC20 {
    return super.attach(address) as PresaleERC20;
  }
  connect(signer: Signer): PresaleERC20__factory {
    return super.connect(signer) as PresaleERC20__factory;
  }
  static readonly contractName: "PresaleERC20";
  public readonly contractName: "PresaleERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PresaleERC20Interface {
    return new utils.Interface(_abi) as PresaleERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PresaleERC20 {
    return new Contract(address, _abi, signerOrProvider) as PresaleERC20;
  }
}
