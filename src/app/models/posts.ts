export interface Ipost {
    id: string
    userId: string
    title: string
    content: string
}

export interface Iresponse<T> {
    success: boolean
    res: {
      msg: string
      data: T
    }
}