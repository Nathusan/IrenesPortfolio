import firebase from '../components/firebase';

const storage = firebase.getStorage(firebase.app);
console.log(storage)
export async function fetchImagesFromPath(folderPath: string): Promise<string[]> {
    const folderRef = firebase.ref(storage, folderPath);

    // Use `firebase.listAll` to get all files and folders in the specified path
    return firebase.listAll(folderRef)
        .then((result) => {
            // Get download URLs for all files in the folder
            const downloadPromises = result.items.map((itemRef) =>
                firebase.getDownloadURL(itemRef)
            );

            return Promise.all(downloadPromises); // Returns an array of URLs
        });
}

export async function fetchImagesFromLiteralPath(folderPath: string): Promise<string> {
    const folderRef = firebase.ref(storage, folderPath);

    return firebase.getDownloadURL(folderRef)
}

async function fetchImagesFromFolder(folderPath: string): Promise<string> {
    const folderRef = firebase.ref(storage, folderPath);
    const result = await firebase.listAll(folderRef);

    // Start all `getDownloadURL` requests in parallel
    const imagePromises = result.items.map(async (item) => {
        const fileName = item.name;
        const url = await firebase.getDownloadURL(item);
        return { [fileName]: url };
    });

    // Resolve all promises at once and combine results
    const imageEntries = await Promise.all(imagePromises);
    return Object.assign({}, ...imageEntries);
}

export async function fetchSubfoldersWithImages(folderPath: string) {
    const folderRef = firebase.ref(storage, folderPath);
    const result = await firebase.listAll(folderRef);

    // Start fetching each subfolder in parallel
    const folderPromises = result.prefixes.map(async (prefix) => {
        const subFolderName = prefix.name;
        const subFolderPath = prefix.fullPath;
        const images = await fetchImagesFromFolder(subFolderPath);
        return { [subFolderName]: images };
    });

    // Resolve all folder fetches at once and combine results
    const folderEntries = await Promise.all(folderPromises);
    return Object.assign({}, ...folderEntries);
}

export { storage };