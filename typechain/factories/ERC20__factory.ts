/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20 } from "../ERC20";

export class ERC20__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC20>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200175a3803806200175a833981810160405281019062000037919062000193565b81600390805190602001906200004f92919062000071565b5080600490805190602001906200006892919062000071565b50505062000376565b8280546200007f906200029b565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b60006200013862000132846200022f565b62000206565b9050828152602081018484840111156200015157600080fd5b6200015e84828562000265565b509392505050565b600082601f8301126200017857600080fd5b81516200018a84826020860162000121565b91505092915050565b60008060408385031215620001a757600080fd5b600083015167ffffffffffffffff811115620001c257600080fd5b620001d08582860162000166565b925050602083015167ffffffffffffffff811115620001ee57600080fd5b620001fc8582860162000166565b9150509250929050565b60006200021262000225565b9050620002208282620002d1565b919050565b6000604051905090565b600067ffffffffffffffff8211156200024d576200024c62000336565b5b620002588262000365565b9050602081019050919050565b60005b838110156200028557808201518184015260208101905062000268565b8381111562000295576000848401525b50505050565b60006002820490506001821680620002b457607f821691505b60208210811415620002cb57620002ca62000307565b5b50919050565b620002dc8262000365565b810181811067ffffffffffffffff82111715620002fe57620002fd62000336565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6113d480620003866000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e40565b60405180910390f35b6100e660048036038101906100e19190610c8e565b610308565b6040516100f39190610e25565b60405180910390f35b610104610326565b6040516101119190610f42565b60405180910390f35b610134600480360381019061012f9190610c3f565b610330565b6040516101419190610e25565b60405180910390f35b610152610431565b60405161015f9190610f5d565b60405180910390f35b610182600480360381019061017d9190610c8e565b61043a565b60405161018f9190610e25565b60405180910390f35b6101b260048036038101906101ad9190610bda565b6104e6565b6040516101bf9190610f42565b60405180910390f35b6101d061052e565b6040516101dd9190610e40565b60405180910390f35b61020060048036038101906101fb9190610c8e565b6105c0565b60405161020d9190610e25565b60405180910390f35b610230600480360381019061022b9190610c8e565b6106b4565b60405161023d9190610e25565b60405180910390f35b610260600480360381019061025b9190610c03565b6106d2565b60405161026d9190610f42565b60405180910390f35b606060038054610285906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546102b1906110a6565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610759565b8484610761565b6001905092915050565b6000600254905090565b600061033d84848461092c565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610ec2565b60405180910390fd5b61042585610414610759565b85846104209190610fea565b610761565b60019150509392505050565b60006012905090565b60006104dc610447610759565b848460016000610455610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104d79190610f94565b610761565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053d906110a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610569906110a6565b80156105b65780601f1061058b576101008083540402835291602001916105b6565b820191906000526020600020905b81548152906001019060200180831161059957829003601f168201915b5050505050905090565b600080600160006105cf610759565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561068c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068390610f22565b60405180910390fd5b6106a9610697610759565b8585846106a49190610fea565b610761565b600191505092915050565b60006106c86106c1610759565b848461092c565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c890610f02565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610841576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083890610e82565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161091f9190610f42565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561099c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099390610ee2565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a0c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0390610e62565b60405180910390fd5b610a17838383610bab565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a9d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9490610ea2565b60405180910390fd5b8181610aa99190610fea565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b399190610f94565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b9d9190610f42565b60405180910390a350505050565b505050565b600081359050610bbf81611370565b92915050565b600081359050610bd481611387565b92915050565b600060208284031215610bec57600080fd5b6000610bfa84828501610bb0565b91505092915050565b60008060408385031215610c1657600080fd5b6000610c2485828601610bb0565b9250506020610c3585828601610bb0565b9150509250929050565b600080600060608486031215610c5457600080fd5b6000610c6286828701610bb0565b9350506020610c7386828701610bb0565b9250506040610c8486828701610bc5565b9150509250925092565b60008060408385031215610ca157600080fd5b6000610caf85828601610bb0565b9250506020610cc085828601610bc5565b9150509250929050565b610cd381611030565b82525050565b6000610ce482610f78565b610cee8185610f83565b9350610cfe818560208601611073565b610d0781611136565b840191505092915050565b6000610d1f602383610f83565b9150610d2a82611147565b604082019050919050565b6000610d42602283610f83565b9150610d4d82611196565b604082019050919050565b6000610d65602683610f83565b9150610d70826111e5565b604082019050919050565b6000610d88602883610f83565b9150610d9382611234565b604082019050919050565b6000610dab602583610f83565b9150610db682611283565b604082019050919050565b6000610dce602483610f83565b9150610dd9826112d2565b604082019050919050565b6000610df1602583610f83565b9150610dfc82611321565b604082019050919050565b610e108161105c565b82525050565b610e1f81611066565b82525050565b6000602082019050610e3a6000830184610cca565b92915050565b60006020820190508181036000830152610e5a8184610cd9565b905092915050565b60006020820190508181036000830152610e7b81610d12565b9050919050565b60006020820190508181036000830152610e9b81610d35565b9050919050565b60006020820190508181036000830152610ebb81610d58565b9050919050565b60006020820190508181036000830152610edb81610d7b565b9050919050565b60006020820190508181036000830152610efb81610d9e565b9050919050565b60006020820190508181036000830152610f1b81610dc1565b9050919050565b60006020820190508181036000830152610f3b81610de4565b9050919050565b6000602082019050610f576000830184610e07565b92915050565b6000602082019050610f726000830184610e16565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610f9f8261105c565b9150610faa8361105c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fdf57610fde6110d8565b5b828201905092915050565b6000610ff58261105c565b91506110008361105c565b925082821015611013576110126110d8565b5b828203905092915050565b60006110298261103c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611091578082015181840152602081019050611076565b838111156110a0576000848401525b50505050565b600060028204905060018216806110be57607f821691505b602082108114156110d2576110d1611107565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6113798161101e565b811461138457600080fd5b50565b6113908161105c565b811461139b57600080fd5b5056fea26469706673582212205dfcc557f6f13056e44fb754a8bca4a08335e76e92039bad4c550905fa78c68d64736f6c63430008030033";
