
import { Account, Contract, Provider } from "starknet"
import contract_abi from "../ABi/smartland_contract_RealEstateContract.contract_class.json"
const abi = contract_abi.abi


export const CONTRACT_ABI = abi


export const CONTRACT_ADDRESS = "0x6fb6baf430b2ffa3b2d65b5e40f7c2d2b90586e1618d31da7483a20860238d2"
export const ACCOUNT_ADDRESS = "0x04B93FC07b2b6Da3520033D8f2BbeF9c42f9873837a4B3DE7a863EDC9e04B058"
export const PRIVATE_KEY = ""

const provider = new Provider({ rpc: { nodeUrl: "http://0.0.0.0:5050/rpc" } })
const account = new Account(provider, ACCOUNT_ADDRESS, PRIVATE_KEY)
const contract = new Contract(abi, CONTRACT_ADDRESS, account)
contract.connect(account)

export { contract, account, provider }