const baseUrl = process.env.NEXT_PUBLIC_RAW_GITHUB_URL;
export const fetchProjects = async () => {
  try {
    const response = await fetch(
      `${baseUrl}/Verasoniya/portfolio-assets-vera/main/projects.json`,
    );
    if (!response.ok) {
      throw new Error('Gagal mengambil data proyek');
    }
    return response.json();
  } catch (error) {
    console.error('Gagal memuat data dari spreadsheet', error);
    throw error;
  }
};
