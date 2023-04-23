import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  DocumentUploaded as DocumentUploadedEvent,
  MintedDocument as MintedDocumentEvent,
  OwnershipTransferSuccess as OwnershipTransferSuccessEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  DocumentUploaded,
  MintedDocument,
  OwnershipTransferSuccess,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDocumentUploaded(event: DocumentUploadedEvent): void {
  let entity = new DocumentUploaded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.documentUniqueId = event.params.documentUniqueId
  entity.Registrant = event.params.Registrant

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintedDocument(event: MintedDocumentEvent): void {
  let entity = new MintedDocument(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.documentUniqueIdInt = event.params.documentUniqueIdInt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferSuccess(
  event: OwnershipTransferSuccessEvent
): void {
  let entity = new OwnershipTransferSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.documentUniqueIdHash = event.params.documentUniqueIdHash
  entity.receiver = event.params.receiver

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
