export const mobileSort = ls => {
  const portraitPhotos = [];
  const landscapePhotos = [];
  const pairedLandscapePhotos = [];
  const sortedPhotos = [];

  ls.forEach(photo => {
    if (photo.fluid.aspectRatio < 1) {
      portraitPhotos.push(photo);
    } else {
      landscapePhotos.push(photo);
    }
  });

  if (landscapePhotos.length % 2) {
    for (let n = 0; n < Math.floor(landscapePhotos.length / 2); n++) {
      const group = [landscapePhotos[n * 2], landscapePhotos[n * 2 + 1]];
      pairedLandscapePhotos.push(group);
    }
    pairedLandscapePhotos.push([
      landscapePhotos[landscapePhotos.length - 1],
      null
    ]);
  } else {
    for (let n = 0; n < landscapePhotos.length / 2; n++) {
      const group = [landscapePhotos[n * 2], landscapePhotos[n * 2 + 1]];
      pairedLandscapePhotos.push(group);
    }
  }

  const minLength = Math.min(
    portraitPhotos.length,
    pairedLandscapePhotos.length
  );

  for (let n = 0; n < minLength; n++) {
    sortedPhotos.push(portraitPhotos[n]);
    pairedLandscapePhotos[n].forEach(item => {
      sortedPhotos.push(item);
    });
  }

  if (portraitPhotos.length > pairedLandscapePhotos.length) {
    for (let n = minLength; n < portraitPhotos.length; n++) {
      sortedPhotos.push(portraitPhotos[n]);
    }
  } else {
    for (let n = minLength; n < pairedLandscapePhotos.length; n++) {
      pairedLandscapePhotos[n].forEach(item => {
        if (item) {
          sortedPhotos.push(item);
        }
      });
    }
  }

  return sortedPhotos;
};
