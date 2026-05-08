const baseUrl = `${process.env.NEXT_PUBLIC_SPREADSHEET_URL}/${process.env.NEXT_PUBLIC_SPREADSHEET_ID}`;
export const fetchProjects = async () => {
  try {
    const response = await fetch(`${baseUrl}/Projects`);
    const rawData = await response.json();
    return rawData;
  } catch (error) {
    console.error('Gagal memuat data dari spreadsheet', error);
    throw error;
  }
};
