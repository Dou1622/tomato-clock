
export interface Timer { 
    id: number; 
    name: string;
    startTimeUtc: string;
    endTimeUtc: string | null;
}