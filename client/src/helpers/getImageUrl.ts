export const getImageUrl = (imagePath?: string): string => {
  if (!imagePath) return "/car.webp"; 
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  const backendBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:4040";
  return `${backendBaseUrl}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
};