export default {
	name: "post",
	title: "Blog Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "slug",
			title: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 100
			}
		},
		{
			name: "publishedDate",
			title: "Published Date",
			type: "date",
			options: {
		    dateFormat: 'YYYY-MM-DD'
		  }
		},
		{
			name: "banner",
			title: "Banner",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			name: "excerpt",
			title: "Excerpt",
			type: "markdown"
		},
		{
			name: "author",
			title: "Author",
			type: "reference",
			to: { type: "author"} // reference to author.js
		},
		{
			name: "category",
			title: "Category",
			type: "reference",
			to: { type: "category" } // reference to category.js
		},
		{
			name: "description",
			title: "Description",
			type: "markdown"
		},
		{
			name: "metaTitle",
			title: "Meta Title",
			type: "string"
		},
		{
			name: "metaDescription",
			title: "Meta Description",
			type: "text"
		}
	],
	preview: {
		select: {
			title: 'title',
			media: 'banner',
			subtitle: 'publishedDate'
		}
	}
}