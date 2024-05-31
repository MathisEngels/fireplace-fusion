import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        staticDir: 'public',
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        }
    ]
}