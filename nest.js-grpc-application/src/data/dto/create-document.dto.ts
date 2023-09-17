export interface DocumentCreateDto {
    id: number;
    categoryId: number;
    documentType: string;
    firstAttribute: string | null;
    secondAttribute: string | null;
    mark: boolean;
}