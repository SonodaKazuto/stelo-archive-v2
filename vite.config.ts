import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
import buildProgress from 'vite-plugin-progress';
import unocss from '@unocss/vite';
import unocssPresetUno from '@unocss/preset-uno';
import unocssPresetAttributify from '@unocss/preset-attributify';
import unocssPresetIcons from '@unocss/preset-icons';
import markdown from 'vite-plugin-md';
//import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			include: [/\.vue$/, /\.md$/],
		}),
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
		markdown({
			markdownItOptions: {
				html: true,
				linkify: true,
				typographer: true,
			},
		}),
	],
	publicDir: 'static',
	build: {
		outDir: 'build',
	},
});
