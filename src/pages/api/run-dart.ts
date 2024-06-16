import axios from 'axios';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await axios.post(
      'https://glot.io/api/run/dart/latest',
      body,
      {
        headers: {
          Authorization: 'bc71acaa-f43a-4b3e-af69-ddc3dfe0f4c8',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );

    if (response.data.error.length === 0) {
      return new Response(JSON.stringify(response.data.stdout), {
        status: 200,
      });
    }
    return new Response(JSON.stringify(response.data.stderr as string), {
      status: 500,
    });
  } catch (error) {
    return new Response('Failed to run your code', { status: 500 });
  }
}
