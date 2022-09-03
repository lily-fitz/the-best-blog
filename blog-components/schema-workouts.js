export default {
  name: 'workout',
  title: 'Workout',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'skill',
      title: 'Skill',
      type: 'string',
      options: {
        list: [
          { value: 'easy', title: 'Easy' },
          { value: 'intermediate', title: 'Intermediate' },
          { value: 'difficult', title: 'Difficult' },
        ],
      },
    },
    {
      name: 'link',
      type: 'url',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
}
