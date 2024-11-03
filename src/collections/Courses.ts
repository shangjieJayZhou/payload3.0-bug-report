import { ItemBlock } from '@/blocks/ItemBlock'
import { CollectionConfig } from 'payload'

export const Courses: CollectionConfig = {
  slug: 'courses',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'content',
      type: 'blocks',
      blocks: [ItemBlock],
    },
  ],
}
