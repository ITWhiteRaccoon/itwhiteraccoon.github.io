<template>
	<v-app id="app-elem">
		<v-container>
			<v-row align="stretch" justify="center" no-gutters>
				<v-col sm="5" md="4" xl="3">
					<EduSidebar :listed-sections="contact" :title="title"></EduSidebar>
				</v-col>
				<v-col sm="7" md="8" xl="7">
					<v-sheet color="grey lighten-2" height="100%" max-width="800">
						<v-container>
							<v-row dense>
								<v-col>
									<v-sheet>
										<v-container>
											<div v-for="section in experience">
												<v-subheader class="text-h6">
													<v-icon class="mr-1">{{section.icon}}</v-icon>
													{{section.title}}
												</v-subheader>
												<v-divider></v-divider>
												<v-timeline dense>
													<v-timeline-item color="rgba(148, 187, 233, 1)" right small
													                 v-for="sectionItem in section.data">
														<v-card>
															<v-card-title class="body-1 font-weight-medium">
																<span>{{sectionItem.title}}</span>
																<v-spacer></v-spacer>
																<span class="body-1"
																      v-if="sectionItem.hasOwnProperty('position')">
																	{{sectionItem.position}}
																</span>
															</v-card-title>
															<v-divider></v-divider>
															<v-list dense>
																<v-list-item v-for="loc in sectionItem.locations">
																	<v-list-item-content>{{loc.title}}
																		<ul>
																			<li class="body-2"
																			    v-for="activity in loc.activities">
																				{{activity}}
																			</li>
																		</ul>
																	</v-list-item-content>
																</v-list-item>
															</v-list>
														</v-card>
													</v-timeline-item>
												</v-timeline>
											</div>
										</v-container>
									</v-sheet>
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
	import {mdiBriefcase, mdiEmail, mdiGithub, mdiLinkedin, mdiMap, mdiSchool, mdiTranslate} from '@mdi/js';
	import EduSidebar from './components/EduSidebar';


	require('typeface-quicksand');
	export default {
		name: 'App',

		components: {EduSidebar},

		data: () => ({
			title: {
				img: 'img/SquareProfile.jpg',
				name: 'Eduardo Cardoso de Andrade',
				occupation: 'Estudante de Ciência da Computação'
			},
			contact: [
				{
					section: 'Contato',
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
							link: 'https://linkedin.com/in/eduardocandrade/',
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
					section: 'Idiomas',
					data: [
						{title: 'Português', subtitle: 'Nativo', icon: mdiTranslate},
						{title: 'Inglês', subtitle: 'Fluente', icon: mdiTranslate}
					]
				}
			],
			experience: [
				{
					title: 'Educação',
					icon: mdiSchool,
					data: [
						{
							title: 'PUCRS',
							locations: [{
								title: 'Bacharelado em Ciência da Computação',
								years: '2017-2023'
							}]
						}
					]
				},
				{
					title: 'Experiência',
					icon: mdiBriefcase,
					data: [
						{
							title: 'Banrisul',
							position: 'Estagiário',
							locations: [{
								title: 'Unidade de Desenvolvimento de Software',
								years: '2019 - Atual',
								activities: ['Desenvolvimento Front End usando HTML5, JavaScript e CSS',
									'Desenvolvimento Back End usando C# e Oracle SQL']
							}]
						},
						{
							title: 'TRE-RS',
							position: 'Estagiário',
							years: '2016 - 2018',
							locations: [
								{
									title: 'Seção de Orientação e Suporte em TI',
									activities: ['Configuração de máquinas',
										'Suporte em TI - Nível 2']
								},
								{
									title: 'Central de Atendimento ao Eleitor de Porto Alegre',
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
	.v-application {
		background : rgb(148, 187, 233);
		background : linear-gradient(180deg, rgba(148, 187, 233, 1) 0%, rgba(238, 174, 202, 1) 100%) !important;
	}
</style>
