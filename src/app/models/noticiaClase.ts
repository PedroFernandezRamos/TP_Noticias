export class Noticia{
    constructor(
        public author: string,
        public title: string,
        public description: string,
        public url: string,
        public published_at: string,
        public source: string,
        public image: string,
        public category: string,
        public language: string,
        public country: string
    ) {}
}
