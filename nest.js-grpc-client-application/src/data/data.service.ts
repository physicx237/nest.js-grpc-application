import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Service } from './interfaces/service.interface';
import { CreateCategoryMessage } from './types/create-category-message.type';
import { GetCategoriesMessage } from './types/get-categories-message.type';
import { EditCategoryMessage } from './types/edit-category-message.type';
import { DeleteCategoryMessage } from './types/delete-category-message.type';
import { CategoryId } from './types/category-id.type';
import { CreateDocumentMessage } from './types/create-document-message.type';
import { DeleteDocumentMessage } from './types/delete-document-message.type';
import { DocumentId } from './types/document-id.type';
import { EditDocumentMessage } from './types/edit-document-message.type';
import { GetDocumentsMessage } from './types/get-documents-message.type';
import { EditCategoryDto } from './dto/edit-category.dto';
import { EditDocumentDto } from './dto/edit-document.dto';

@Injectable()
export class DataService implements OnModuleInit {
    private service: Service;

    constructor(@Inject('APP_PACKAGE') private client: ClientGrpc) { }

    onModuleInit() {
        this.service = this.client.getService<Service>('DataService');
    }

    createCategory(category: CreateCategoryMessage): Observable<CreateCategoryMessage> {
        return this.service.createCategory(category);
    }

    getCategories(): Observable<GetCategoriesMessage> {
        return this.service.getCategories({});
    }

    editCategory(category: EditCategoryDto): Observable<EditCategoryMessage> {
        return this.service.editCategory(category);
    }

    deleteCategory(id: CategoryId): Observable<DeleteCategoryMessage> {
        return this.service.deleteCategory(id);
    }

    createDocument(document: CreateDocumentMessage): Observable<CreateDocumentMessage> {
        return this.service.createDocument(document);
    }

    getDocuments(): Observable<GetDocumentsMessage> {
        return this.service.getDocuments({});
    }

    editDocument(document: EditDocumentDto): Observable<EditDocumentMessage> {
        return this.service.editDocument(document);
    }

    deleteDocument(id: DocumentId): Observable<DeleteDocumentMessage> {
        return this.service.deleteDocument(id);
    }
}
