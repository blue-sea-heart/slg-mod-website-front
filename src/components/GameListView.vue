<template>
  <div>
    <h2>游戏列表</h2>
    <button @click="openForm">新增游戏</button>

    <!-- 弹窗区域 -->
    <div v-if="showForm" class="modal">
      <div class="modal-content">
        <h3>新增游戏</h3>
        <form @submit.prevent="submitForm">
          <label>
            名称:
            <input v-model="form.name" required/>
          </label>
          <br/>
          <label>
            简称:
            <input v-model="form.shortName"/>
          </label>
          <br/>
          <label>
            开发商:
            <input v-model="form.developer"/>
          </label>
          <br/>
          <label>
            平台（逗号分隔）:
            <input v-model="form.platforms"/>
          </label>
          <br/>
          <label>
            启用:
            <input type="checkbox" v-model="form.isActive"/>
          </label>
          <br/>
          <button type="submit">保存</button>
          <button type="button" @click="closeForm">取消</button>
        </form>
      </div>
    </div>

    <!-- 游戏表格 -->
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
        <td>{{ game.platforms }}</td>
        <td>{{ game.isActive ? '是' : '否' }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup lang="ts">
import {ref, onMounted} from 'vue'
import {getAllGames, createGame} from '../api/games'
import type {GameRequestDto, GameResponseDto} from '../types/game'

const showForm = ref(false)
const games = ref<GameResponseDto[]>([])
const form = ref<GameRequestDto>({
  name: '',
  shortName: '',
  developer: '',
  coverImageUrl: '',
  description: '',
  platforms: '',
  isActive: true,
  sortOrder: 0
})

const openForm = () => {
  showForm.value = true
  form.value = {
    coverImageUrl: '', description: '', sortOrder: 0,
    name: '',
    shortName: '',
    developer: '',
    platforms: '',
    isActive: true
  }
}

const closeForm = () => {
  showForm.value = false
}

const submitForm = async () => {
  const newGame = {
    name: form.value.name,
    shortName: form.value.shortName,
    developer: form.value.developer,
    platforms: form.value.platforms,
    isActive: form.value.isActive,
    coverImageUrl: '', // 你可以先留空
    description: '',
    sortOrder: 0
  }

  await createGame(newGame)
  closeForm()
  games.value = await getAllGames()
}

onMounted(async () => {
  games.value = await getAllGames()
})
</script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background: #1d5161;
  padding: 20px;
  border-radius: 6px;
  min-width: 300px;
}
</style>

