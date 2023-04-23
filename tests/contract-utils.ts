import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  DocumentUploaded,
  MintedDocument,
  OwnershipTransferSuccess,
  Transfer
} from "../generated/Contract/Contract"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createDocumentUploadedEvent(
  documentUniqueId: Bytes,
  Registrant: Address
): DocumentUploaded {
  let documentUploadedEvent = changetype<DocumentUploaded>(newMockEvent())

  documentUploadedEvent.parameters = new Array()

  documentUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "documentUniqueId",
      ethereum.Value.fromFixedBytes(documentUniqueId)
    )
  )
  documentUploadedEvent.parameters.push(
    new ethereum.EventParam(
      "Registrant",
      ethereum.Value.fromAddress(Registrant)
    )
  )

  return documentUploadedEvent
}

export function createMintedDocumentEvent(
  documentUniqueIdInt: BigInt
): MintedDocument {
  let mintedDocumentEvent = changetype<MintedDocument>(newMockEvent())

  mintedDocumentEvent.parameters = new Array()

  mintedDocumentEvent.parameters.push(
    new ethereum.EventParam(
      "documentUniqueIdInt",
      ethereum.Value.fromUnsignedBigInt(documentUniqueIdInt)
    )
  )

  return mintedDocumentEvent
}

export function createOwnershipTransferSuccessEvent(
  documentUniqueIdHash: Bytes,
  receiver: Address
): OwnershipTransferSuccess {
  let ownershipTransferSuccessEvent = changetype<OwnershipTransferSuccess>(
    newMockEvent()
  )

  ownershipTransferSuccessEvent.parameters = new Array()

  ownershipTransferSuccessEvent.parameters.push(
    new ethereum.EventParam(
      "documentUniqueIdHash",
      ethereum.Value.fromFixedBytes(documentUniqueIdHash)
    )
  )
  ownershipTransferSuccessEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )

  return ownershipTransferSuccessEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
