import youngmu from './assets/images/youngmu.png'

interface Profile{
    Youngmu: string
    [name:string]: string
}

export const ProfileImageCollector:Profile = {
    "Youngmu": youngmu,
}