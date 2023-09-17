import { Observable } from "rxjs";
import { CategoryId } from "../types/category-id.type";
import { CreateCategoryMessage } from "../types/create-category-message.type";
import { CreateDocumentMessage } from "../types/create-document-message.type";
import { DeleteCategoryMessage } from "../types/delete-category-message.type";
import { DeleteDocumentMessage } from "../types/delete-document-message.type";
import { DocumentId } from "../types/document-id.type";
import { EditCategoryMessage } from "../types/edit-category-message.type";
import { EditDocumentMessage } from "../types/edit-document-message.type";
import { GetCategoriesMessage } from "../types/get-categories-message.type";
import { GetDocumentsMessage } from "../types/get-documents-message.type";
import { EditCategoryDto } from "../dto/edit-category.dto";
import { EditDocumentDto } from "../dto/edit-document.dto";

export interface Service {
    createCategory(createCategoryMessage: CreateCategoryMessage): Observable<CreateCategoryMessage>
    getCategories(message: {}): Observable<GetCategoriesMessage>
    editCategory(editCategoryMessage: EditCategoryDto): Observable<EditCategoryMessage>
    deleteCategory(id: CategoryId): Observable<DeleteCategoryMessage>

    createDocument(createDocumentMessage: CreateDocumentMessage): Observable<CreateDocumentMessage>
    getDocuments(message: {}): Observable<GetDocumentsMessage>
    editDocument(editDocumentMessage: EditDocumentDto): Observable<EditDocumentMessage>
    deleteDocument(id: DocumentId): Observable<DeleteDocumentMessage>
}