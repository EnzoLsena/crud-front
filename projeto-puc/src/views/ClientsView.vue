<script setup>
import { ref } from "vue";
import { Plus } from 'lucide-vue-next';

const client = ref({
    nome: "",
    email: "",
    telefone: "",
});

const registerClient = () => {
    console.log("Cliente cadastrado:", client.value);
    alert("Cliente cadastrado com sucesso!");
};
</script>
<template>
    <VContainer class="flex justify-center items-center min-h-screen bg-gray-100">
        <VCard class="w-full max-w-xl p-6 rounded-2xl shadow-lg">
            <VCardTitle class="text-xl font-bold text-gray-800">Cadastro de Cliente</VCardTitle>
            <VCardText>
                <div class="flex gap-4">
                    <VTextField v-model="client.nome" label="Nome" variant="solo" dense class="mb-2"></VTextField>
                    <VTextField v-model="client.telefone"  label="Telefone" type="tel" variant="solo" dense class="mb-2">
                    </VTextField>
                </div>

                <VTextField v-model="client.email" label="E-mail" type="email" variant="solo" dense class="mb-2">
                </VTextField>

                <div class="flex justify-end">
                    <VBtn color="blue-darken-4" class="w-[1.rem] text-white font-medium py-2 " @click="registerClient">
                        Cadastrar
                        <Plus />
                    </VBtn>
                </div>
            </VCardText>
        </VCard>
    </VContainer>
</template>


