import { CollectionConfig } from "payload/types";

export const Categories: CollectionConfig = {
    slug: 'categories',
    labels: {
        singular: 'Catégorie',
        plural: 'Catégories',
    },
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            label: 'Catégorie',
            required: true,
        },
    ]
}