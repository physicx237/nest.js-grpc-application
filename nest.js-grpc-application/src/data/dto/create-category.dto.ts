export interface CategoryCreateDto {
    id: number;
    type: string;
    attribute: string | null;
    mark: boolean;
}