export interface CreateDocumentDto {
    categoryId: number;
    documentType: string;
    firstAttribute: string | null;
    secondAttribute: string | null;
    mark: boolean;
}