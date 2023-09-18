export interface EditCategoryDto {
    category: {
        id: number,
        type: string,
        attribute: string | null,
        mark: boolean
    }
}