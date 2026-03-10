import { NextResponse } from "next/server";
import driver from "@/lib/neo4j";

export async function GET() {
  const session = driver.session();
  try {
    const result = await session.run(
      'MATCH (n:Person) OPTIONAL MATCH (n)-[r:PARENT_OF]->(m) return n,r,m'
    );

    return NextResponse.json({data: result.records });
  } finally {
    await session.close()
  }
}