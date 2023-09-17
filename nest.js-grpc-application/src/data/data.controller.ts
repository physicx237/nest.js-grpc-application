import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DataService } from './data.service';
import { EditCategoryMessage } from './types/edit-category-message.type';
import { CreateCategoryMessage } from './types/create-category-message.type';
import { GetCategoriesMessage } from './types/get-categories-message.type';
import { DeleteCategoryMessage } from './types/delete-category-message.type';
import { CreateDocumentMessage } from './types/create-document-message.type';
import { GetDocumentsMessage } from './types/get-documents-message.type';
import { EditDocumentMessage } from './types/edit-document-message.type';
import { DeleteDocumentMessage } from './types/delete-document-message.type';
import { EditCategoryDto } from './dto/edit-category.dto';
import { EditDocumentDto } from './dto/edit-document.dto';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) {}

    @GrpcMethod('DataService', 'CreateCategory')
    async createCategory(categoryCreateMessage: CreateCategoryMessage, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<CreateCategoryMessage> {
        const category = await this.dataService.createCategory(categoryCreateMessage)
        return { category: category }
    }

    @GrpcMethod('DataService', 'GetCategories')
    async getCategories(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<GetCategoriesMessage> {
        const categories = await this.dataService.getCategories()
        return { categories: categories }
    }

    @GrpcMethod('DataService', 'EditCategory')
    async editCategory(categoryEditDto: EditCategoryDto, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<EditCategoryMessage> {
        const category = await this.dataService.editCategory(categoryEditDto)
        return { category: category }
    }

    @GrpcMethod('DataService', 'DeleteCategory')
    async deleteCategory(id: number, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<DeleteCategoryMessage> {
        await this.dataService.deleteCategory(id)
        return { message: 'Category is deleted!' }
    }

    @GrpcMethod('DataService', 'CreateDocument')
    async createDocument(documentCreateMessage: CreateDocumentMessage, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<CreateDocumentMessage> {
        const document = await this.dataService.createDocument(documentCreateMessage)
        return { document: document }
    }

    @GrpcMethod('DataService', 'GetDocuments')
    async getDocuments(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<GetDocumentsMessage> {
        const documents = await this.dataService.getDocuments()
        return { documents: documents }
    }

    @GrpcMethod('DataService', 'EditDocument')
    async editDocument(documentEditDto: EditDocumentDto, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<EditDocumentMessage> {
        const document = await this.dataService.editDocument(documentEditDto)
        return { document: document }
    }

    @GrpcMethod('DataService', 'DeleteDocument')
    async deleteDocument(id: number, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<DeleteDocumentMessage> {
        await this.dataService.deleteDocument(id)
        return { message: 'Document is deleted!' }
    }
}
