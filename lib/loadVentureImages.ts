declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";

// Declare the type for require.context
declare const require: {
  context(directory: string, useSubdirectories: boolean, regExp: RegExp): any;
};

export function getVentureImages(key: string) {
  let images: string[] = [];
  try {
    // This uses webpack's require.context to get all images from the venture folder
    const context = require.context(
      "../public/assets/ventures",
      true,
      /\.(png|jpg|jpeg|gif|webp)$/
    );

    interface ImagePath {
      path: string;
    }

    interface WebpackContext {
      keys(): string[];
    }

    images = (context as WebpackContext)
      .keys()
      .filter((path: string) => path.startsWith(`./${key}/`))
      .map((path: string): string => `/assets/ventures${path.slice(1)}`);
  } catch (err) {
    console.warn(`No images found for venture: ${key}`);
  }
  return images;
}
