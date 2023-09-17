import { Document } from "../entities/document.entity"

export type GetDocumentsMessage = {
    documents: Document[]
}