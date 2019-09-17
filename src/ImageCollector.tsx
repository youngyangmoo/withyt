import youngmu from './assets/images/youngmu.png'
import unknown from './assets/images/unknown.png'

interface Profile{
    Youngmu: string
    Unknown: string
    [name:string]: string
}

export const ProfileImageCollector:Profile = {
    "Youngmu": youngmu,
    "Unknown": unknown
}