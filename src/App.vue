<template>
	<v-app>
		<v-container>
			<v-card>
				<v-card-title>
					Desculpe o transtorno :(
				</v-card-title>
				<v-card-text>
					Estou trabalhando para trazer esta página para você o mais rápido possível.
					<br>
					Enquanto isso, entre em contato comigo!
				</v-card-text>
				<v-card-actions>
					<v-btn small href="mailto:contact@eduandrade.dev">
						<v-icon>{{mdiEmail}}</v-icon>
					</v-btn>
					<v-btn small href="https://github.com/ITWhiteRaccoon/">
						<v-icon>{{mdiGithub}}</v-icon>
					</v-btn>
					<v-btn small href="https://linkedin.com/in/eduardocandrade/">
						<v-icon>{{mdiLinkedin}}</v-icon>
					</v-btn>
				</v-card-actions>
			</v-card>
			<v-row>
				<v-col>
					<coding-pidgeons></coding-pidgeons>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	import {mdiEmail, mdiGithub, mdiLinkedin} from '@mdi/js';
	import CodingPidgeons from '@/components/coding-pidgeons';

	require('typeface-quicksand');
	export default {
		name: 'App',

		components: {CodingPidgeons},

		data: () => ({
			mdiEmail: mdiEmail,
			mdiGithub: mdiGithub,
			mdiLinkedin: mdiLinkedin
		})
	};
</script>

<style lang="scss">
	html {
		font-size : 20px !important;
	}

	.v-application {
		font-family : Quicksand, sans-serif !important;
	}
</style>