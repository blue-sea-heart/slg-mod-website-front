import axios from 'axios'
import type { Game } from '../types/game'

const baseUrl = '/api/games'

export async function getAllGames(): Promise<Game[]> {
    const res = await axios.get<Game[]>(baseUrl)
    return res.data
}
