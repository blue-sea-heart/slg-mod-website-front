import axios from 'axios'
import type { GameResponseDto, GameRequestDto } from '../types/game'

const baseUrl = '/api/games'

export async function getAllGames(): Promise<GameResponseDto[]> {
    const res = await axios.get(baseUrl)
    return res.data
}

export async function createGame(data: GameRequestDto): Promise<GameResponseDto> {
    console.log(data)
    console.log(baseUrl)
    const res = await axios.post(baseUrl, data)
    return res.data
}

export async function updateGame(id: number, data: GameRequestDto): Promise<GameResponseDto> {
    const res = await axios.put(`${baseUrl}/${id}`, data)
    return res.data
}

export async function deleteGame(id: number): Promise<void> {
    await axios.delete(`${baseUrl}/${id}`)
}
