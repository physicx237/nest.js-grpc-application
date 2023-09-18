import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { CreateCategoryMessage } from './types/create-category-message.type';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoriesMessage } from './types/get-categories-message.type';
import { EditCategoryMessage } from './types/edit-category-message.type';
import { DeleteCategoryMessage } from './types/delete-category-message.type';
import { CreateDocumentDto } from './dto/create-document.dto';
import { CreateDocumentMessage } from './types/create-document-message.type';
import { DeleteDocumentMessage } from './types/delete-document-message.type';
import { EditDocumentMessage } from './types/edit-document-message.type';
import { GetDocumentsMessage } from './types/get-documents-message.type';
import { EditCategoryDto } from './dto/edit-category.dto';
import { EditDocumentDto } from './dto/edit-document.dto';

@Controller('data')
export class DataController {
    constructor(private readonly dataService: DataService) { }

    @Post('category')
    createCategory(@Body() category: CreateCategoryDto): Observable<CreateCategoryMessage> {
        return this.dataService.createCategory({
            category: {
                type: category.type,
                attribute: category.attribute,
                mark: category.mark
            }
        });
    }

    @Get('category')
    getCategories(): Observable<GetCategoriesMessage> {
        return this.dataService.getCategories();
    }

    @Put('category')
    editCategory(@Body() category: EditCategoryDto): Observable<EditCategoryMessage> {
        return this.dataService.editCategory({
            category: {
                id: category.category.id,
                type: category.category.type,
                attribute: category.category.attribute,
                mark: category.category.mark
            }
        });
    }

    @Delete(':id')
    deleteCategory(@Param('id') id: number): Observable<DeleteCategoryMessage> {
        return this.dataService.deleteCategory({
            id: id
        });
    }

    @Post('document')
    createDocument(@Body() document: CreateDocumentDto): Observable<CreateDocumentMessage> {
        return this.dataService.createDocument({
            document: {
                documentType: document.documentType,
                firstAttribute: document.firstAttribute,
                secondAttribute: document.secondAttribute,
                mark: document.mark,
                categoryId: 0
            }
        });
    }

    @Get('document')
    getDocuments(): Observable<GetDocumentsMessage> {
        return this.dataService.getDocuments();
    }

    @Put('document')
    editDocument(@Body() document: EditDocumentDto): Observable<EditDocumentMessage> {
        return this.dataService.editDocument({
            document: {
                id: document.document.id,
                documentType: document.document.documentType,
                firstAttribute: document.document.firstAttribute,
                secondAttribute: document.document.secondAttribute,
                mark: document.document.mark,
                categoryId: document.document.categoryId
            }
        });
    }

    @Delete(':id')
    deleteDocument(@Param('id') id: number): Observable<DeleteDocumentMessage> {
        return this.dataService.deleteDocument({
            id: id
        });
    }
}
