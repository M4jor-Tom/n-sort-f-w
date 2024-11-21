import { gapi } from 'gapi-script';

export const moveImage = async (fileId: string, newFolderId: string): Promise<void> => {
    const response = await gapi.client.drive.files.update({
        fileId,
        addParents: newFolderId,
        removeParents: '<CURRENT_FOLDER_ID>',
        fields: 'id, parents',
    });
    console.log('Moved file:', response.result);
};
