import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function salvarFicha(data){
    try{
        await addDoc(collection(db, 'fichas'), data)
        return 'ok'
    } catch(error){
        console.log('Erro add produto: ', error)
        return 'erro'
    }
}