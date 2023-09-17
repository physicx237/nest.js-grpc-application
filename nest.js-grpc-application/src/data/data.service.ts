import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Document } from './entities/document.entity';
import { CreateCategoryMessage } from './types/create-category-message.type';
import { CreateDocumentMessage } from './types/create-document-message.type';
import { EditDocumentMessage } from './types/edit-document-message.type';
import { EditCategoryMessage } from './types/edit-category-message.type';
import { EditDocumentDto } from './dto/edit-document.dto';
import { EditCategoryDto } from './dto/edit-category.dto';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
        @InjectRepository(Document)
        private documentsRepository: Repository<Document>,
    ) {}

    async createCategory(categoryCreateMessage: CreateCategoryMessage): Promise<Category> {
        const category = new Category();
        category.type = categoryCreateMessage.category.type;
        category.attribute = categoryCreateMessage.category.attribute;
        category.mark = categoryCreateMessage.category.mark;

        return this.categoriesRepository.save(category);
    }

    async getCategories(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }

    async editCategory(categoryEditDto: EditCategoryDto): Promise<UpdateResult> {
        return this.categoriesRepository.update(categoryEditDto.category, {
            type: categoryEditDto.category.type,
            attribute: categoryEditDto.category.attribute,
            mark: categoryEditDto.category.mark
        });
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

    async editDocument(documentEditDto: EditDocumentDto): Promise<UpdateResult> {
        return this.documentsRepository.update(documentEditDto.document, {
            documentType: documentEditDto.document.documentType,
            firstAttribute: documentEditDto.document.firstAttribute,
            secondAttribute: documentEditDto.document.secondAttribute,
            mark: documentEditDto.document.mark
        });
    }

    async deleteDocument(id: number): Promise<void> {
        await this.documentsRepository.delete(id);
    }
}
