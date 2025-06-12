import {    defineConfig} from 'eslint/config'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default defineConfigWithVueTs(
    ...pluginVue.configs['flat/recommended'],
    vueTsConfigs.recommended,
    {ignores: ["dist/**","node_modules/**"],

    languageOptions: {
        globals: {
            ...globals.node,
        },
    },

    extends: compat.extends(
        "eslint:recommended",
    ),

    rules: {
        "vue/multi-word-component-names": "off",
    }},
)
