import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Document } from './entities/document.entity';
import { CreateCategoryMessage } from './types/create-category-message.type';
import { CreateDocumentMessage } from './types/create-document-message.type';
import { EditCategoryMessage } from './types/edit-category-message.type';
import { EditCategoryDtoMessage } from './dto/edit-category-message.dto';
import { EditDocumentDtoMessage } from './dto/edit-document-message-dto';
import { EditDocumentMessage } from './types/edit-document-message.type';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Document)
        private documentsRepository: Repository<Document>,
    ) {}

    async createCategory(createCategoryMessage: CreateCategoryMessage): Promise<Category> {
        const category = new Category();
        category.type = createCategoryMessage.category.type;
        category.attribute = createCategoryMessage.category.attribute;
        category.mark = createCategoryMessage.category.mark;

        return this.categoriesRepository.save(category);
    }

    async getCategories(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }

    async editCategory(editCategoryDtoMessage: EditCategoryDtoMessage): Promise<EditCategoryMessage> {
        await this.categoriesRepository.update({ id: editCategoryDtoMessage.category.id }, {
            type: editCategoryDtoMessage.category.type,
            attribute: editCategoryDtoMessage.category.attribute,
            mark: editCategoryDtoMessage.category.mark
        });
        return editCategoryDtoMessage;
    }

    async deleteCategory(id: number): Promise<void> {
        await this.categoriesRepository.delete(id);
    }

    async createDocument(documentCreateMessage: CreateDocumentMessage): Promise<Document> {
        const document = new Document();
        document.documentType = documentCreateMessage.document.documentType;
        document.firstAttribute = documentCreateMessage.document.firstAttribute;
        document.secondAttribute = documentCreateMessage.document.secondAttribute;
        document.mark = documentCreateMessage.document.mark;

        return this.categoriesRepository.save(document);
    }

    async getDocuments(): Promise<Document[]> {
        return this.documentsRepository.find();
    }

    async editDocument(editDocumentDtoMessage: EditDocumentDtoMessage): Promise<EditDocumentMessage> {
        await this.documentsRepository.update({ id: editDocumentDtoMessage.document.id }, {
            documentType: editDocumentDtoMessage.document.documentType,
            firstAttribute: editDocumentDtoMessage.document.firstAttribute,
            secondAttribute: editDocumentDtoMessage.document.secondAttribute,
            mark: editDocumentDtoMessage.document.mark
        });
        return editDocumentDtoMessage;
    }

    async deleteDocument(id: number): Promise<void> {
        await this.documentsRepository.delete(id);
    }
}
