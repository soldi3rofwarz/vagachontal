import { db } from '../../../data/firebase-config';

export const COLLECTION_ACTIVIDADES_NAME = 'users';

export const usersQuery = () => {
    return db.collection(COLLECTION_ACTIVIDADES_NAME);
};

export const GetDataDet = async () => {
    const userSnapshot = await usersQuery().get(); 
    const users = [];

    userSnapshot.forEach(doc => users.push({
        id: doc.id,
        ...doc.data()
    }));

    return users;
};

export const DeleteU = async(usersId) => {
    await usersQuery().doc(usersId).delete();
};