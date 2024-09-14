import { describe, expect, it, vi } from 'vitest';

import { downloadImage, handleBuildLink } from '../download-image';

describe('handleBuildLink', () => {
  it('should create a link element with the correct href and download attributes', () => {
    document.body.innerHTML = '';

    const href = 'https://example.com/image.jpg';
    const name = 'image.jpg';

    const appendChildSpy = vi
      .spyOn(document.body, 'appendChild')
      .mockImplementation((element) => {
        const link = element as HTMLAnchorElement;
        expect(link).not.toBeNull();
        expect(link.href).toBe(href);
        expect(link.download).toBe(name);
        return element;
      });

    const removeChildSpy = vi
      .spyOn(document.body, 'removeChild')
      .mockImplementation((element) => {
        if (document.body.contains(element)) {
          return document.body.removeChild(element);
        }
        return element;
      });

    const clickSpy = vi
      .spyOn(HTMLAnchorElement.prototype, 'click')
      //* Prevent the click event from actual navigation
      .mockImplementation(vi.fn);

    handleBuildLink(href, name);

    expect(appendChildSpy).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
    expect(clickSpy).toHaveBeenCalled();
    expect(removeChildSpy).toHaveBeenCalledWith(expect.any(HTMLAnchorElement));
  });
});

//TODO This test is not completed, I will update it later
describe('downloadImage', () => {
  it('should download the image with `forceDownload` is false', async () => {
    const imageUrl = 'https://example.com/image.jpg';
    const imageName = 'image.jpg';

    await downloadImage(imageUrl, imageName);
  });
});
