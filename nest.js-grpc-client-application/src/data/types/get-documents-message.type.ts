import { CreateDocumentDto } from "../dto/create-document.dto"

export type GetDocumentsMessage = {
    documents: CreateDocumentDto[]
}