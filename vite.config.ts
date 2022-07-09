import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import unocss from '@unocss/vite';
import unocssPresetUno from '@unocss/preset-uno';
import unocssPresetAttributify from '@unocss/preset-attributify';
import unocssPresetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslint({
			cache: false,
		}),
		unocss({
			presets: [
				unocssPresetUno(),
				unocssPresetAttributify(),
				unocssPresetIcons(),
			],
		}),
	],
	publicDir: 'static',
	build: {
		outDir: 'build',
	},
});
