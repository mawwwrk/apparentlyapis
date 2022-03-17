export function getImageDimensions(imgSource: string) {
  const img = new Image();
  img.src = imgSource;
  return {
    width: img.width,
    height: img.height,
    aspectRatio: `${img.width} / ${img.height}`,
  };
}
