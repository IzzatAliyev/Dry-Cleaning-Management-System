import { connect } from "../db/database";
import { Service } from "../models/Service";

export async function getServices(): Promise<Service[]> {
    const conn = await connect();
    const services = await conn.query("SELECT * FROM services");
    return services[0] as Service[];
}

export async function findServiceById(id: number): Promise<Service> {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM services WHERE id = ?`, [id])
    const services = res[0] as Service[]
    console.log(services)
    return services[0];
}