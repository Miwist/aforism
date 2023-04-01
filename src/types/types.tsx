

export interface Quote {
    
    results: [{
        favorite: boolean,
        author: string,
        authorSlug: string,
        content: string,
        dateAdded: string,
        tags: string[],
        _id: string,

    }],
}

export interface storage {
    
        favorite?: boolean,
        author?: string,
        authorSlug?: string,
        content?: string,
        dateAdded?: string,
        tags?: string[],
        _id?: string,
    

}


export interface jokeApi {
    type: string,
    setup: string,
    punchline: string,
    id: number
}

export interface adviceApi {
    slip: {
        advice: string;
        id: number

    }
}

export interface factApi {
    date: string,
    text: string,
    year: number,
    number: number,
    found: boolean,
    type: string
}