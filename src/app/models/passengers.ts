export interface Ipassenger {
    id: number
    fullname: string
    checkedIn: boolean
    checkInDate: number | null
    children: Array<Ichildren> | null
}
  
export interface Ichildren {
    name: string
    age: number
}