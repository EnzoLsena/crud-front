<script setup>
import { UserRoundPlus } from 'lucide-vue-next';
import { ShoppingBag } from 'lucide-vue-next';
import { Store } from 'lucide-vue-next';
</script>

<template>
    <v-navigation-drawer :width="220">
        <v-list-item variant="elevated" class="font-semibold text-center" style=" font-size: larger;">
            <span class="text-blue-900">
                VorpCrud</span></v-list-item>
        <v-divider></v-divider>
        <v-list-item link class="mb-[30px]"><span
                class="text-center font-sans text-blue-900 flex align-center gap-2">Cadastro de
                Clientes
                <UserRoundPlus :size="18" />
            </span></v-list-item>
        <v-list-item link><span class="text-center font-sans text-blue-900 flex align-center gap-2">Cadastro de Produtos
                <ShoppingBag :size="18" />
            </span></v-list-item>
        <v-list-item link><span class="text-center font-sans text-blue-900 flex align-center gap-2">Cadastro de
                Lojas <Store :size="18"/></span></v-list-item>
    </v-navigation-drawer>
</template>