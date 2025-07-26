<template>
  <div>
    <h2>游戏列表</h2>
    <table border="1">
      <thead>
      <tr>
        <th>名称</th>
        <th>简称</th>
        <th>开发商</th>
        <th>平台</th>
        <th>是否启用</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="game in games" :key="game.id">
        <td>{{ game.name }}</td>
        <td>{{ game.shortName }}</td>
        <td>{{ game.developer }}</td>
        <td>{{ game.platforms.join(', ') }}</td>
        <td>{{ game.isActive ? '是' : '否' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllGames } from '../api/games'
import type { Game } from '../types/game'

const games = ref<Game[]>([])

onMounted(async () => {
  games.value = await getAllGames()
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1em;
}
th, td {
  padding: 8px;
  text-align: left;
}
thead {
  background-color: #08abc8;
}
</style>
