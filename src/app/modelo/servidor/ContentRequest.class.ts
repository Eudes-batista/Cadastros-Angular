export class ContentRequest {
    content: string;
    pageCurrent: number;
    size: number;

    constructor(pageCurrent?: number, size?: number) {
        this.pageCurrent = pageCurrent;
        this.size = size;
    }
}
