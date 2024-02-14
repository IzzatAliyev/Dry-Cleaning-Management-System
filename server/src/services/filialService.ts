import { connect } from "../db/database";
import { Filial } from "../models/Filial";

export async function getFilials(): Promise<Filial[]> {
    const conn = await connect();
    const filials = await conn.query("SELECT * FROM filials");
    console.log(filials)
    return filials[0] as Filial[];
}