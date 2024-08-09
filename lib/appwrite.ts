import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.tsm.aora",
  projectId: "66b60c9d00298e9b10ce",
  databaseId: "66b60eb2001603ba5227",
  userCollectionId: "66b60ed1000493e5049f",
  videoCollectionId: "66b60f060024805485b3",
  storageId: "66b610f40018e357fc7c",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  // Register User
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { accountId: newAccount.$id, email, username, avatar: avatarUrl }
    );
    return newUser
  } catch (error:any) {
    throw new Error(error.message)
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    

    const session = await account.createEmailPasswordSession(email, password);
    
    return session;
  } catch (error:any) {
    throw new Error(error.message)
  }
}

export const getCurrentUser = async () =>{
    try {
        const currentAccount = await account.get()
        if(!currentAccount) throw Error

        const currentUser = await databases.listDocuments(appwriteConfig.databaseId,appwriteConfig.userCollectionId,[Query.equal('accountId',currentAccount.$id)])
        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (error:any) {
        throw new Error(error.message)
        
    }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error:any) {
    throw new Error(error.message);
  }
}