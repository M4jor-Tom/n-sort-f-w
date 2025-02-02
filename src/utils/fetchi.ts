declare var gapi: any;

export const listFiles = async (): Promise<void> => {
    const response = await gapi.client.drive.files.list({
        q: "mimeType contains 'image/'",
        fields: 'files(id, name, webContentLink)',
    });
    console.log(response.result.files);
};
