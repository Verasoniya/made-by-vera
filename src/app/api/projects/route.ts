const baseUrl = process.env.NEXT_PUBLIC_RAW_GITHUB_URL;
export async function GET() {
  const res = await fetch(
    `${baseUrl}/Verasoniya/portfolio-assets-vera/main/projects.json`,
  );
  const data = await res.json();
  return Response.json(data);
}
