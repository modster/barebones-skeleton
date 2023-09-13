type Day = {
    count: number
    day: number
    level: number
    month: string
    name: string
    year: number
}

export type { UnsignedIntType, Color } from 'three'
export type Contributions = Array<Day | null>
