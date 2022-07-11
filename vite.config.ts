import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import buildProgress from 'vite-plugin-progress';
import unocss from '@unocss/vite';
import unocssPresetUno from '@unocss/preset-uno';
import unocssPresetAttributify from '@unocss/preset-attributify';
import unocssPresetIcons from '@unocss/preset-icons';
import markdown from 'vite-plugin-md';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslint({
			cache: false,
		}),
		buildProgress(),
		unocss({
			presets: [
				unocssPresetUno(),
				unocssPresetAttributify(),
				unocssPresetIcons(),
			],
		}),
		markdown(),
	],
	publicDir: 'static',
	build: {
		outDir: 'build',
	},
});
