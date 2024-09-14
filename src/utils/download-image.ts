export function handleBuildLink(href: string, name: string) {
  const link = document.createElement('a');
  link.href = href;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function downloadImage(
  imageUrl: string,
  imageName: string,
  forceDownload = false,
) {
  if (!forceDownload) {
    handleBuildLink(imageUrl, imageName);
    return;
  }

  const imageResponse = await fetch(imageUrl);
  const imageBlob = await imageResponse.blob();
  const blobUrl = URL.createObjectURL(imageBlob);

  handleBuildLink(blobUrl, imageName);
  URL.revokeObjectURL(blobUrl);
}
