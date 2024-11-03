import { Block } from 'payload'

export const ItemBlock: Block = {
  slug: 'item-block',
  labels: {
    singular: 'Item Block',
    plural: 'Item Blocks',
  },
  fields: [
    {
      name: 'item',
      type: 'relationship',
      relationTo: 'items',
      required: true,
      hasMany: false,
    },
  ],
}
