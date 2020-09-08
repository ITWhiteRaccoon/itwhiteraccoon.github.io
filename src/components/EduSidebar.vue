<template>
	<v-card dark tile flat height="100%" :class="($vuetify.breakpoint.xs)?'rounded-t-lg':'rounded-l-lg'">
		<v-container>
			<v-list class="text-center">
				<v-list-item>
					<v-row justify="space-around">
						<v-avatar size="160" color="grey lighten-2">
							<v-avatar size="150">
								<v-img :src="require(`@/assets/${title.img}`)"></v-img>
							</v-avatar>
						</v-avatar>
					</v-row>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="title text-h5">
							{{ title.name }}
						</v-list-item-title>
						<v-list-item-subtitle class="body-1">
							{{ title.occupation }}
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list>
			<div v-for="item in listedSections" :key="item.section">
				<v-subheader class="text-h6">{{ item.section }}</v-subheader>
				<v-divider></v-divider>
				<v-list shaped>
					<v-list-item :href="sectionItem.link" v-for="sectionItem in item.data" :key="sectionItem.title"
								 link>
						<v-list-item-icon>
							<v-icon>{{ sectionItem.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title class="body-1">{{ sectionItem.title }}</v-list-item-title>
							<v-list-item-subtitle class="body-2">{{ sectionItem.subtitle }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</v-list>
			</div>
		</v-container>
	</v-card>
</template>

<script>
export default {
	name: 'EduSidebar',
	props: {
		listedSections: [],
		sidedIconSections: [],
		title: {}
	}
};
</script>

<style scoped>

</style>
