import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
    try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=6');
        return NextResponse.json(response.data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}