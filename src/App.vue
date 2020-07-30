<template>
	<v-app>
		<v-container>
			<v-row justify="center" no-gutters>
				<v-col xs="12" md="4">
					<v-card dark tile flat>
						<v-container>
							<v-list class="text-center">
								<v-list-item>
									<v-row justify="space-around">
										<v-avatar size="160" color="grey lighten-1">
											<v-avatar size="150">
												<v-img src="./assets/SquareProfile.jpg"></v-img>
											</v-avatar>
										</v-avatar>
									</v-row>
								</v-list-item>
								<v-list-item>
									<v-list-item-content>
										<v-list-item-title class="title">Eduardo Cardoso de Andrade</v-list-item-title>
										<v-list-item-subtitle>Estudante de Ciência da Computação</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list>
							<v-subheader>Contato</v-subheader>
							<v-divider></v-divider>
							<v-list dense shaped>
								<v-list-item v-for="item in contact" :key="item.title" link>
									<v-list-item-icon>
										<v-icon>{{item.icon}}</v-icon>
									</v-list-item-icon>
									<v-list-item-content>
										<v-list-item-title>{{item.title}}</v-list-item-title>
										<v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>
							</v-list>
							<v-subheader>Idiomas</v-subheader>
							<v-divider></v-divider>
							<v-list dense shaped>
								<v-list-item v-for="item in languages" :key="item.title" link>
									<v-list-item-title>{{item.title}}</v-list-item-title>
									<v-list-item-subtitle>{{item.details}}</v-list-item-subtitle>
								</v-list-item>
							</v-list>
						</v-container>
					</v-card>
				</v-col>
				<v-col xs="12" md="8">
					<v-sheet color="grey lighten-2" height="100%">
						<v-container>
							<v-row dense>
								<v-col>
									<v-card>
										<v-container>
											<div v-for="section in experience">
												<v-subheader>
													<v-icon class="mr-1">{{section.icon}}</v-icon>
													{{section.title}}
												</v-subheader>
												<v-divider></v-divider>
												<v-timeline>
													<v-timeline-item right small v-for="sectionItem in section.data">
														<template v-slot:opposite>
															<span>{{sectionItem.years}}</span>
														</template>
														<v-card>
															<v-card-title class="body-1 font-weight-medium">
																{{sectionItem.title}}
															</v-card-title>
															<v-list dense>
																<v-list-item></v-list-item>
															</v-list>
														</v-card>
													</v-timeline-item>
												</v-timeline>
											</div>
										</v-container>

										<v-list v-for="item in education">
											<v-card>
												<v-card-title>{{item.institute}}</v-card-title>
											</v-card>
										</v-list>
									</v-card>
								</v-col>
							</v-row>
						</v-container>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
	import {mdiBank, mdiBriefcase, mdiEmail, mdiGavel, mdiGithub, mdiLinkedin, mdiMap, mdiSchool} from '@mdi/js';

	require('typeface-quicksand');
	export default {
		name: 'App',

		components: {},

		data: () => ({

			contact: [
				{
					title: 'Contato',
					data: [
						{
							title: 'E-Mail',
							subtitle: 'contact@eduandrade.dev',
							link: 'mailto:contact@eduandrade.dev',
							icon: mdiEmail
						},
						{
							title: 'GitHub',
							subtitle: '/ITWhiteRaccoon',
							link: 'https://github.com/ITWhiteRaccoon/',
							icon: mdiGithub
						},
						{
							title: 'LinkedIn',
							subtitle: '/EduardoCAndrade',
							link: 'http://linkedin.com/in/eduardocandrade/',
							icon: mdiLinkedin
						},
						{
							title: 'Local',
							subtitle: 'Porto Alegre, RS',
							link: '',
							icon: mdiMap
						}
					]
				},
				{
					title: 'Idiomas',
					data: [
						{'Português': '100'},
						{'Inglês': '87.5'}
					]
				}],
			experience: [
				{
					title: 'Educação',
					icon: mdiSchool,
					data: [
						{institute: 'PUCRS'}
					]
				},

				{
					title: 'Experiência',
					icon: mdiBriefcase,
					data: [
						{
							title: 'Banrisul',
							icon: mdiBank,
							years: '2019 - Atual',
							position: [{
								title: 'Estagiário',
								location: 'Unidade de Desenvolvimento de Software',
								activities: ['Desenvolvimento Front End usando HTML5, JavaScript e CSS',
									'Desenvolvimento Back End usando C# e Oracle SQL']
							}]
						},
						{
							title: 'TRE-RS',
							icon: mdiGavel,
							years: '2016 - 2018',
							position: [
								{
									title: 'Estagiário',
									location: 'Seção de Orientação e Suporte em TI',
									activities: ['Configuração de máquinas',
										'Suporte em TI - Nível 2']
								},
								{
									title: 'Estagiário',
									location: 'Central de Atendimento ao Eleitor de Porto Alegre',
									activities: ['Atendimento ao público',
										'Auxílio em tarefas administrativas e de informática',
										'Envio de documentos aos cartórios eleitorais',
										'Orientação e designação de tarefas aos novos estagiários']
								}
							]
						}
					]
				}],

			icons: [
				{education: mdiSchool},
				{experience: mdiBriefcase}
			]
		})
	};
</script>

<style lang="scss">
	html {
		font-size : 20px !important;
	}
</style>
