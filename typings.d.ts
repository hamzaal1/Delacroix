interface Image {
    alt: string;
    _ref: string;
}

interface Blog<T> {
    _id: string;
    title: string;
    slug: string
    mainImage: T;
    tags: string[];
    publishedAt: string;
    body: string;
}


