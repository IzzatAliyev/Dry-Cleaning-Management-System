import { connect } from "../db/database";
import { ServiceType } from "../models/ServiceType";

export async function getServiceType(id: number): Promise<ServiceType> {
    const conn = await connect();
    const res = await conn.query("SELECT * FROM `serviceType` WHERE `serviceType`.id = ?", [id]);
    const serviceTypes = res[0] as ServiceType[]
    console.log(serviceTypes)
    return serviceTypes[0];
}