export function nowToHHMM() {
    const d = new Date();
    return `${d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`
}

export const DAYS=["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"]