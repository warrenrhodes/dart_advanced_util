import fs from 'fs';
import { NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import path from 'path';
const filePath = path.join(process.cwd(), 'src', 'lib', 'extenxion.txt');

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: NextRequest, res: NextApiResponse) {
  const data = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
  return res.end(data);
}
