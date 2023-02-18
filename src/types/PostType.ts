import { HospitalType } from "./HospitalType"

export type PostType = {
    id: string
    description: string
    created_at: Date
    bannerURL: string
    owner_id: string
    bloodType: string
    category: string
    owner: HospitalType
}

