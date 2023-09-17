import { CreateCategoryDto } from "../dto/create-category.dto"

export type GetCategoriesMessage = {
    categories: CreateCategoryDto[]
}