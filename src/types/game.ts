export interface Game {
    id: number
    name: string
    shortName: string
    coverImageUrl: string
    description: string
    developer: string
    platforms: string[]
    isActive: boolean
    sortOrder: number
}
