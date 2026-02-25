<script setup lang="ts">
import { type CurrencyData } from '@/types/types'
import { computed, onMounted, ref } from 'vue'
import ky from 'ky'

const currency = ref<CurrencyData>()
onMounted(async () => {
  const data = await ky
    .get<CurrencyData>(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/rub.json',
    )
    .json()
  currency.value = data
  console.log(currency.value.rub.usd)
})

const ruble = ref<number>(0)

const valuta = ref<string>()

// const result = computed(() => {
//   if (valuta.value === 'dollar' && currency.value) {
//     return ruble.value * currency.value.rub.usd
//   } else if (valuta.value === 'euro' && currency.value) {
//     return ruble.value * currency.value.rub.eur
//   } else if (valuta.value === 'btc' && currency.value) {
//     return ruble.value * currency.value.rub.btc
//   } else if (valuta.value === 'aed' && currency.value) {
//     return ruble.value * currency.value.rub.aed
//   } else {
//     return ruble.value
//   }
// })

const result = computed(() => {
  if (currency.value && valuta.value) {
    return ruble.value * currency.value.rub[valuta.value]!
  } else {
    return 0
  }
})
</script>

<template>
  <div class="flex flex-col gap-5">
    <h1>Обмен валют</h1>

    <div class="flex">
      <input v-model="ruble" type="text" placeholder="Rubles" />

      <select v-model="valuta">
        <!-- <option value="dollar">$</option>
        <option value="euro">€</option>
        <option value="btc">BTC</option> -->
        <option v-for="(values, keys) in currency?.rub" :key="keys" :value="keys">
          {{ keys }}
        </option>
      </select>
    </div>

    <div>
      <p>Получите валюты</p>
      <p>{{ result }}</p>
    </div>
  </div>
</template>
