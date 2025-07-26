// 用于展示（后端返回的完整信息）
export interface GameResponseDto {
    id: number
    name: string
    shortName: string
    coverImageUrl: string
    description: string
    developer: string
    platforms: string
    isActive: boolean
    sortOrder: number
}

// 用于新增 / 修改时传给后端的数据（可以是可选字段）
export interface GameRequestDto {
    name: string
    shortName: string
    coverImageUrl: string
    description: string
    developer: string
    platforms: string
    isActive: boolean
    sortOrder: number
}
