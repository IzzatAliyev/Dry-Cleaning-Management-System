import { connect } from "../db/database";
import { Filial } from "../models/Filial";

export async function getFilials(): Promise<Filial[]> {
    const conn = await connect();
    const filials = await conn.query("SELECT * FROM filials");
    console.log(filials)
    return filials[0] as Filial[];
}

export async function findFilialById(id: number): Promise<Filial> {
    const conn = await connect();
    const res = await conn.query(`SELECT * FROM filials WHERE id = ?`, [id])
    const filials = res[0] as Filial[]
    console.log(filials)
    return filials[0];
}