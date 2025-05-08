
// Handle image download
export const downloadImage = (imageUrl: string, title: string): void => {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = `Africa-Peace-Initiative-${title.replace(/\s+/g, '-')}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Handle image sharing
export const shareImage = async (imageUrl: string, title: string): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Africa Peace Initiative - ${title}`,
        text: `Check out this image from Africa Peace Initiative: ${title}`,
        url: imageUrl,
      });
    } catch (error) {
      console.log('Error sharing', error);
    }
  } else {
    navigator.clipboard.writeText(imageUrl);
    alert('Image URL copied to clipboard!');
  }
};
