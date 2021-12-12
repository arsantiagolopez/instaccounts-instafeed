interface AppInfo {
  name: string;
  description: string;
  image: string;
}

const appInfo: AppInfo = {
  name: process.env.APP_NAME || "Your App's Name",
  description: process.env.APP_DESCRIPTION || "Your app's description.",
  image:
    process.env.APP_IMAGE ||
    'https://image-placeholder.com/images/social/instagram.png',
};

export { appInfo };
