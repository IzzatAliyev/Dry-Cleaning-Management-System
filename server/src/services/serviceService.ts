import { connect } from "../db/database";
import { Service } from "../models/Service";

export async function getServices(): Promise<Service[]> {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM services");
    return services[0] as Service[];
}