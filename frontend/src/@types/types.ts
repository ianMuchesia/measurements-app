export interface Measurement{
    _id:string;
    radius: number;
    coneHeight: number;
    cylinderHeight:number;
    numberOfCylinders:number;
    title: string;
    surfaceArea:number;
    volume:number;
    updatedAt:Date;
    createdAt:Date;
}