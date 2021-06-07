export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string"
		},
		{
			name: "shortDescription",
			title: "Short Description",
			type: "markdown"
		},
		{
			name: "status",
			title: "Status",
			type: "string",
			initialValue: "development",
			options: {
				list: [
					{title: "Development", value: "development"},
					{title: "Live", value: "live"}
				],
				layout: "radio"
			}
		},
		{
			name: "rating",
			title: "Rating",
			type: "string",
			options: {
				list: [
					{title: "1 star", value: "1 star"},
					{title: "2 star", value: "2 star"},
					{title: "3 star", value: "3 star"},
					{title: "4 star", value: "4 star"},
					{title: "5 star", value: "5 star"}
				]
			}
		},
		{
			name: "banner",
			title: "Banner",
			type: "image"
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author"}
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "category"}}]
		},
		{
			name: "description",
			title: "Description",
			type: "text"
		}
	]

}